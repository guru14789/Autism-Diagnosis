from fastapi import APIRouter
from typing import List

router = APIRouter()

@router.get("/plans")
async def get_therapy_plans():
    return [
        {
            "patient": "Michael R.",
            "mix": ["Speech Therapy", "Occupational Therapy"],
            "intensity": "High",
            "weekly_sessions": 5
        }
    ]

@router.post("/log-progress")
async def log_progress(patient_id: str, score: float, notes: str):
    return {"status": "success", "message": "Progress logged successfully"}
