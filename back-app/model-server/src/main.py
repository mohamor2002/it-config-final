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
        self.time_steps = time_steps

        self.bw_requests_data = bw_requests_data
        self.total_bw_requests = pd.pivot_table(data=bw_requests_data, columns='DID', index='Date', values='BW_REQUESTED')
        self.total_bw_requests = self.total_bw_requests.reindex(columns=list(bw_requests_data['DID'].unique()))

        self.current_time_step = 0
        self.bw_requests = np.array(self.total_bw_requests.iloc[self.current_time_step])
        self.hour = self.bw_requests_data.iloc[self.current_time_step]['Hour']
        self.hour_sin = np.sin(np.pi * 2 * (self.hour+1) / 24)
        self.hour_cos = np.cos(np.pi * 2 * (self.hour+1) / 24)
        if self.hour > 22 or self.hour < 6:
          self.daytime = 0
        else:
          self.daytime = 1

        self.cirs = np.minimum(self.bw_requests, 1000)
        self.mirs = np.ones_like(self.bw_requests) * 1000
        self.allocated_prev = np.zeros_like(self.bw_requests)
        self.abuse_counter = np.zeros_like(self.bw_requests)

        # Define action space: allocate bandwidth to each client (normalized to total bandwidth)
        self.action_space = spaces.Box(low=-self.total_bandwidth, high=self.total_bandwidth, shape=(self.num_clients,), dtype=np.float32)

        # Define observation space: state includes current bandwidth usage, requests, and available bandwidth
        self.observation_space = spaces.Box(low=-1, high=np.inf, shape=(self.num_clients* 7,), dtype=np.float32) 

        self.reset()

    def reset(self):

        self.current_time_step = 0
        self.bw_requests = np.array(self.total_bw_requests.iloc[self.current_time_step])
        self.hour = self.bw_requests_data.iloc[self.current_time_step]['Hour']
        self.hour_sin = np.sin(np.pi * 2 * (self.hour+1) / 24)
        self.hour_cos = np.cos(np.pi * 2 * (self.hour+1) / 24)
        if self.hour > 20 or self.hour < 6:
          self.daytime = 0
        else:
          self.daytime = 1
        self.cirs = np.minimum(self.bw_requests, 1000)
        self.mirs = np.ones_like(self.bw_requests) * 1000
        self.allocated_prev = np.zeros_like(self.bw_requests)
        self.abuse_counter = np.zeros_like(self.cirs)

        return self._get_observation()

    def _get_observation(self):
        # Return the flattened state)
        return np.concatenate((self.mirs, self.bw_requests, self.allocated_prev, np.maximum(self.abuse_counter-2, 0), 
                                np.ones_like(self.mirs)*self.hour_sin, np.ones_like(self.mirs)*self.hour_cos, 
                                np.ones_like(self.mirs)*self.daytime))

    def step(self, action):

        cirs = np.minimum(self.bw_requests, 1000)
        #Handling Edge case (bw_requested = 0)
        cirs = np.maximum(cirs, 10) # minimum 10 Kps for each client

        remaining_bandwidth = self.total_bandwidth - np.sum(cirs)


        # Adjust MIRs based on the action
        #new_mirs = self.mirs + action

        # Ensure MIRs stay within allowable limits
        #self.mirs = new_mirs

        

        adjusted_action = np.clip(action, -remaining_bandwidth/30, remaining_bandwidth/30)
        new_mirs = np.clip(self.mirs + adjusted_action, self.cirs, self.total_bandwidth - np.sum(self.cirs))
        self.mirs = new_mirs

        if np.sum(self.mirs) > self.total_bandwidth:
          self.mirs = self.mirs * (self.total_bandwidth / np.sum(self.mirs))
        

        Allocations = cirs + np.minimum(self.mirs, self.bw_requests)

        #Reward Parameters
        beta = 8
        theta = 0.2
        min_duration = 3
        lmbda = 0.5

        #Calculate Reward
        Reward = self.getReward(Allocations, beta, theta, min_duration, lmbda)

        #MIR Rewards
        #Rmir = self.mirs.mean() / self.num_clients
        alpha = 0.1
        Rusage = - (alpha * remaining_bandwidth) / self.total_bandwidth

        Reward +=  Rusage


        #Move to the next state
        self.current_time_step += 1

        self.allocated_prev = Allocations
        self.bw_requests = np.array(self.total_bw_requests.iloc[0])
        self.hour = self.bw_requests_data.iloc[self.current_time_step]['Hour']
        self.hour_sin = np.sin(np.pi * 2 * (self.hour+1) / 24)
        self.hour_cos = np.cos(np.pi * 2 * (self.hour+1) / 24)
        if self.hour > 20 or self.hour < 6:
          self.daytime = 0
        else:
          self.daytime = 1
        #self.cirs = np.minimum(self.bw_requests, 1000)
        #self.remaining_bandwidth = self.totabl_bandwidth - np.sum(self.cirs)


        done = self.current_time_step >= self.time_steps-1

        return self._get_observation(), Reward, done, {}

    def getReward(self, Allocations, beta=3, theta=0.2, min_duration=3, lmbda=0.5):
        #Over-Allocation Penalty
        Pover = self.getPover(Allocations, beta)

        #Abusive Usage Penalty
        Pabusive = self.getPabusive(theta, min_duration, lmbda)

        # Calculate reward
        Reff = np.sum(Allocations / np.maximum(self.bw_requests, 10)) / self.num_clients

        return Reff - Pover - Pabusive

    def getPover(self, Allocations, beta=3):
      return beta * (max(0, np.sum(Allocations) - self.total_bandwidth) / self.total_bandwidth)


    def getPabusive(self, theta=0.2, min_duration=3, lmbda=0.5):
        condition = self.bw_requests > (self.mirs * (1+theta))
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

 

    return df




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
    mir = obs[0][:10]
    array = np.array(request.user_requests)
    return ModelResponse(mir=mir, cir=np.minimum(array, 1000),gets=np.minimum(array, mir))
