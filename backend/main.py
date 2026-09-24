from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ml_engine.predictor import sentinel_engine

app = FastAPI(title="Project Sentinel API - I4C Dashboard")

# Enable CORS for the React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TransactionData(BaseModel):
    account_id: str
    velocity: float
    unrelated_senders: int
    rapid_onward_transfers: int
    last_known_lat: float
    last_known_lon: float

@app.get("/")
def health_check():
    return {"status": "Project Sentinel Backend is Active"}

@app.post("/api/v1/intelligence/analyze")
def run_intelligence_pipeline(data: TransactionData):
    """
    Executes the two-phase proactive intelligence pipeline.
    """
    # Phase 1: Upstream Account Risk
    account_risk = sentinel_engine.analyze_account_risk(data.dict())
    
    # Phase 2: Downstream Location Risk (Executed if upstream flags high risk)
    location_prediction = None
    if account_risk["risk_score"] == "High Risk":
        location_prediction = sentinel_engine.predict_withdrawal_hotspot(data.dict())
    
    return {
        "status": "success",
        "phase_1_account_intelligence": account_risk,
        "phase_2_location_intelligence": location_prediction
    }
