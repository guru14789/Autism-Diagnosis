from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel
from typing import List, Optional
from app.services.ml_pipeline import ai_model
import time
import tempfile
import os

router = APIRouter()

class ScreeningResponse(BaseModel):
    input_status: str
    feature_extraction: str
    model_inference: str
    prediction_result: str
    confidence_score: str
    model_limitations: str
    risk_score: float # Kept for internal logic/graphing
    markers: List[dict]

@router.post("/analyze", response_model=ScreeningResponse)
async def analyze_behavior(
    media: Optional[UploadFile] = File(None),
    q1: str = "Sometimes",
    q2: str = "Occasionally"
):
    # Mapping questionnaire answers to numerical scores (0-1)
    q_map = {"Never": 1.0, "Rarely": 0.8, "Sometimes": 0.5, "Occasionally": 0.4, "Frequently": 0.2, "Always": 0.0}
    q_score = (q_map.get(q1, 0.5) + q_map.get(q2, 0.5)) / 2
    
    if not media:
        return {
            "input_status": "No image or video input detected. Please upload an image or video to generate a prediction.",
            "feature_extraction": "N/A",
            "model_inference": "N/A",
            "prediction_result": "N/A",
            "confidence_score": "0%",
            "model_limitations": "N/A",
            "risk_score": 0.0,
            "markers": []
        }

    # Save media to a temporary file for processing
    suffix = os.path.splitext(media.filename)[1] if media.filename else ".tmp"
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        content = await media.read()
        tmp.write(content)
        tmp_path = tmp.name
    
    try:
        vision_score = ai_model.process_vision(tmp_path)
    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
    
    # Simple simulated audio score
    audio_score = 0.6
    
    # Fusion
    result = ai_model.fuse_features(vision_score, audio_score, q_score)
    
    image_suffixes = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.heic']
    is_image = suffix.lower() in image_suffixes
    
    return ScreeningResponse(
        input_status=f"{'Image' if is_image else 'Video'} detected ({media.filename})",
        feature_extraction=result["observations"],
        model_inference=result["reasoning"],
        prediction_result=result["prediction_label"],
        confidence_score=f"{result['risk_score']:.1f}%",
        model_limitations=result["limitations"],
        risk_score=result["risk_score"],
        markers=[
            {"name": "Visual Bio-markers", "status": "Analyzed", "value": vision_score},
            {"name": "Vocalization", "status": "Simulated", "value": audio_score},
            {"name": "Behavioral Score", "status": "Calculated", "value": q_score}
        ]
    )
