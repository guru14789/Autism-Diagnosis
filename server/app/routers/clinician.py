from fastapi import APIRouter
from typing import List

router = APIRouter()

@router.get("/patients")
async def get_patients():
    return [
        {"id": "P001", "name": "Michael R.", "age": "18mo", "risk": 72, "status": "Pending Review"},
        {"id": "P002", "name": "Sophia L.", "age": "3y", "risk": 45, "status": "In Therapy"},
        {"id": "P003", "name": "Ethan W.", "age": "24mo", "risk": 88, "status": "Urgent Review"},
    ]

@router.get("/insights/{patient_id}")
async def get_patient_insights(patient_id: str):
    return {
        "patient_id": patient_id,
        "historical_trends": [40, 45, 55, 62, 72],
        "primary_markers": ["Reduced Gaze", "Delayed Speech"],
        "ai_recommendation": "Initiate Occupational Therapy focusing on sensory integration."
    }
