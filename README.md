## AI-Enabled Autism Care Platform

A next-generation platform for early childhood autism detection, clinician decision support, and post-diagnosis care management.

## 🚀 Quick Start

### 1. Frontend Setup
```bash
cd client
npm install
npm run dev
```
The frontend will be available at `http://localhost:3000`.

### 2. Backend Setup
```bash
cd server
pip install -r requirements.txt
python main.py
```
The backend API will run at `http://localhost:8000`.

## 🧠 ML Capabilities
- **Multimodal Screening**: Ingests Video (MediaPipe), Audio (Vocalization analysis), and Behavioral Questionnaires.
- **Agentic Workflow**:
  - **Screening Agent**: Evaluates risk markers using computer vision.
  - **Support Agent**: Provides evidence for clinical review.
  - **Therapy Agent**: Recommends personalized care pathways.

## 🏥 Clinical Workflow
1. **Parent Screening**: Mobile video capture + questionnaire.
2. **AI Analysis**: High-confidence risk scoring with explainable highlights.
3. **Clinician Review**: Evidence-based dashboard with longitudinal tracking.
4. **Post-Diagnosis**: AI-generated therapy plans and progress monitoring.

## 🔐 Ethics & Privacy
- **Consent**: Digital parent/caregiver consent integrated into the screening flow.
- **Privacy**: Mock data used for prototype; production requires HIPAA-compliant encryption.
- **Bias Mitigation**: AI explanations provided for every risk score to prevent opaque decision-making.
```
