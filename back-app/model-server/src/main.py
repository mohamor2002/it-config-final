from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime
from typing import List
import pandas as pd
from stable_baselines3 import PPO
from stable_baselines3.common.vec_env import DummyVecEnv
import numpy as np
import gym
from gym import spaces


# Load the pre-trained model


class BandwidthEnv(gym.Env):
    def __init__(self, bw_requests_data, num_clients=10, total_bandwidth=10000, time_steps=288):
        super(BandwidthEnv, self).__init__()

        self.num_clients = num_clients
        self.total_bandwidth = total_bandwidth
        self.bw_requests_data = bw_requests_data
        self.total_bw_requests = pd.pivot_table(data=bw_requests_data, columns='DID', index='Date', values='BW_REQUESTED')
        self.total_bw_requests = self.total_bw_requests.reindex(columns=list(bw_requests_data['DID'].unique()))

        self.time_steps = time_steps  # 24 hours with 5-minute intervals
        self.current_time_step = 0
        self.bw_requests = np.array(self.total_bw_requests.iloc[self.current_time_step])
        self.hour = self.bw_requests_data.iloc[self.current_time_step]['Hour']
        self.cirs = np.minimum(self.bw_requests, 1000)
        self.mirs = self.cirs
        self.abuse_counter = np.zeros_like(self.cirs)

        # Define action space: allocate bandwidth to each client (normalized to total bandwidth)
        self.action_space = spaces.Box(low=-self.total_bandwidth, high=self.total_bandwidth, shape=(self.num_clients,), dtype=np.float32)

        # Define observation space: state includes current bandwidth usage, requests, and available bandwidth
        self.observation_space = spaces.Box(low=0, high=np.inf, shape=(self.num_clients * 3 + 2,), dtype=np.float32)  # [MIRs, CIRs, Requests, time_step]

        self.timestamp_log = []
        self.reset()

    def reset(self):

        self.current_time_step = 0
        self.bw_requests = np.array(self.total_bw_requests.iloc[self.current_time_step])
        self.hour = self.bw_requests_data.iloc[self.current_time_step]['Hour']
        self.cirs = np.minimum(self.bw_requests, 1000)
        self.mirs = self.cirs

        return self._get_observation()

    def _get_observation(self):
        # Return the flattened state)
        return np.concatenate((
                self.mirs,
                self.cirs,
                self.bw_requests,
                [self.hour, self.total_bandwidth]  # Add total bandwidth as the last element
                ))
    def step(self, action):

        self.cirs = np.minimum(self.bw_requests, 1000)
        self.cirs = np.maximum(self.cirs, 10) # minimum 10 Kps for each client
        remaining_bandwidth = self.total_bandwidth - np.sum(self.cirs)

        # Adjust MIRs based on the action
        new_mirs = self.mirs + action

        # Ensure MIRs stay within allowable limits
        new_mirs = np.maximum(new_mirs, self.cirs)
        self.mirs = new_mirs

        self.timestamp_log.append({
            'timestamp': self.current_time_step,
            'cirs': self.cirs,
            'remaining_bandwidth': remaining_bandwidth,
            'requests': self.bw_requests,
            'action': action,
            'mirs': self.mirs,
        })


        #Over-Allocation Penalty
        # Define the thresholds and coefficients
        beta1 = 6
        beta2 = 12

        # Filter mirs based on cir values
        mirs_below_threshold = [mir for mir, cir in zip(self.mirs, self.cirs) if cir <= 1000]
        mirs_above_threshold = [mir for mir, cir in zip(self.mirs, self.cirs) if cir > 1000]

        # Calculate the sum of mirs for each condition
        sum_mirs_below = sum(mirs_below_threshold)
        sum_mirs_above = sum(mirs_above_threshold)

        # Calculate Pover1 and Pover2 based on the conditions
        Pover1 = beta1 * (max(0, sum_mirs_below - self.total_bandwidth) / self.total_bandwidth)
        Pover2 = beta2 * (max(0, sum_mirs_above - self.total_bandwidth) / self.total_bandwidth)

        # Calculate reward
        lrfactor = 2
        ratios = self.mirs / self.bw_requests
        rs = np.minimum(ratios, 1)
        Reff = sum(rs) / self.num_clients
        low_ratio_penalty = np.sum(ratios < 0.5) * lrfactor


        Reward = Reff - Pover1 - Pover2 - self.getPabusive() - low_ratio_penalty

        self.current_time_step += 1


        self.bw_requests = np.array(self.total_bw_requests.iloc[self.current_time_step])
        self.hour = self.bw_requests_data.iloc[self.current_time_step]['Hour']
        self.cirs = np.minimum(self.bw_requests, 1000)

        done = self.current_time_step >= self.time_steps-1
        return self._get_observation(), Reward, done, {}

    def getPabusive(self, theta=0.2, min_duration=3, lmbda=0.25):
        condition = self.bw_requests > self.mirs * (1+theta)
        self.abuse_counter = np.where(condition, self.abuse_counter + 1, 0)

        D = np.maximum(self.abuse_counter - min_duration+1, 0)
        Stotal = np.sum(D)

        # Reset treated clients for abusive usage to 0
        self.abuse_counter[self.abuse_counter >= min_duration] = 0
        return (lmbda * (Stotal / (self.num_clients * self.time_steps)))


    def render(self, mode='human'):
        if mode == 'human':
            print(f"Time Step: {self.current_time_step}")
            print(f"MIRs: {self.mirs}")
            print(f"CIRs: {self.cirs}")
            print(f"Total Bandwidth: {self.total_bandwidth}")
            print(f"Remaining Bandwidth: {self.total_bandwidth - np.sum(self.cirs)}")
            print(f"Requested Bandwidth: {self.requests.iloc[self.current_time_step]}")


app = FastAPI()

model = PPO.load("./src/ppo")
# Request and Response Models
class UserBandwidthRequest(BaseModel):
    timestamp: datetime
    user_requests: List[float]  # Requested bandwidth for each user

class ModelResponse(BaseModel):
    mir: List[float]
    cir: List[float]
    gets: List[float]

def format_data(timestamp: datetime, user_requests: List[float]):
    data = []
    for idx, bw_requested in enumerate(user_requests):
        data.append({
            "DID": idx,
            "Date": timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            "DateDay": timestamp.strftime("%Y-%m-%d"),
            "Hour": timestamp.hour,
            "Minute": timestamp.minute,
            "BW_REQUESTED": bw_requested,
        })
    df = pd.DataFrame(data)
    print("DataFrame after formatting:")
    print(df)

    # Pivot to match `BandwidthEnv` requirements
    pivot_df = df.pivot(index='Date', columns='DID', values='BW_REQUESTED').fillna(0)
    print("Pivoted DataFrame:")
    print(pivot_df)

    return pivot_df




@app.post("/predict", response_model=ModelResponse)
async def predict_bandwidth(request: UserBandwidthRequest):
    # Format data for the model
    print(request)
    data = format_data(request.timestamp, request.user_requests)
    env = BandwidthEnv(data, time_steps=1)
    env = DummyVecEnv([lambda: env])
    obs = env.reset()
    
    action, _ = model.predict(obs)
    obs, reward, done, info = env.step(action)  # Take a step in the environment


    # Assuming model returns two lists for MIR and CIR
    
    # Return response
    return ModelResponse(mir=[], cir=[],gets=[])
