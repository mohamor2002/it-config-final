from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime
from typing import List
import pandas as pd
from stable_baselines3 import PPO
import numpy as np

# Load the pre-trained model

app = FastAPI()

model = PPO.load("./src/ppo")
# Request and Response Models
class UserBandwidthRequest(BaseModel):
    timestamp: datetime
    user_requests: List[float]  # Requested bandwidth for each user

class ModelResponse(BaseModel):
    mir: List[float]
    cir: List[float]

def format_data(timestamp: datetime, user_requests: List[float]):
    # Prepare structured data for model prediction
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
    # Convert to DataFrame, then model's input format
    return pd.DataFrame(data)

@app.post("/predict", response_model=ModelResponse)
async def predict_bandwidth(request: UserBandwidthRequest):
    # Format data for the model
    print(request)
    data = format_data(request.timestamp, request.user_requests)

    # Use model to make predictions
    
    predictions, _ = model.predict(request.user_requests)

    # Assuming model returns two lists for MIR and CIR
    print(predictions)
    
    # Return response
    return ModelResponse(mir=[], cir=[])
