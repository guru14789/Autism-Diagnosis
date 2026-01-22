import { useState } from 'react';
import { Camera, FileVideo, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScreeningModule = () => {
    const [step, setStep] = useState(1);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [files, setFiles] = useState<FileList | null>(null);
    const [q1, setQ1] = useState('Sometimes');
    const [q2, setQ2] = useState('Occasionally');

    const handleStartAnalysis = async () => {
        setIsAnalyzing(true);

        const formData = new FormData();
        if (files && files[0]) {
            formData.append('media', files[0]);
        }
        formData.append('q1', q1);
        formData.append('q2', q2);

        try {
            const response = await fetch('/api/screening/analyze', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Analysis failed');

            const data = await response.json();
            setResults(data);
            setStep(4);
        } catch (error) {
            console.error('Error during analysis:', error);
            alert('Failed to connect to ML backend. Please ensure the server is running.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Autism Risk Screening</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Step {step} of 4: Behavioral Input & Multimodal Analysis</p>
            </header>

            <div className="glass-morphism" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <h3>Digital Consent</h3>
                            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>By proceeding, you consent to the processing of pediatric behavioral data for screening purposes. Data is encrypted and used only for clinical decision support.</p>

                            <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <input type="checkbox" id="consent" style={{ width: 'auto' }} />
                                <label htmlFor="consent" style={{ fontSize: '0.875rem' }}>I agree to the Parental Consent and Privacy Policy</label>
                            </div>

                            <h3>Questionnaire</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Please answer these questions based on your observations over the last 3 months.</p>

                            <div className="input-group">
                                <label>1. Does your child look at you when you call their name?</label>
                                <select value={q1} onChange={(e) => setQ1(e.target.value)}>
                                    <option>Rarely</option>
                                    <option>Sometimes</option>
                                    <option>Always</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label>2. Does your child point to things to show interest?</label>
                                <select value={q2} onChange={(e) => setQ2(e.target.value)}>
                                    <option>Never</option>
                                    <option>Occasionally</option>
                                    <option>Frequently</option>
                                </select>
                            </div>

                            <button className="btn-primary" onClick={() => setStep(2)}>Continue to Video Upload</button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <h3>Visual Assessment</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Upload a photo or a short video clip (30-60s) for AI behavioral analysis.</p>

                            <div
                                style={{
                                    border: '2px dashed var(--glass-border)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: '4rem',
                                    textAlign: 'center',
                                    marginBottom: '2rem',
                                    background: 'rgba(99, 102, 241, 0.02)',
                                    cursor: 'pointer'
                                }}
                                onClick={() => document.getElementById('media-upload')?.click()}
                            >
                                <input
                                    type="file"
                                    id="media-upload"
                                    hidden
                                    accept="image/*,video/*"
                                    onChange={(e) => setFiles(e.target.files)}
                                />
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <ImageIcon size={48} color="var(--primary)" />
                                    <FileVideo size={48} color="var(--primary)" />
                                </div>
                                <p>{files ? files[0].name : 'Drag and drop photo/video here, or click to browse'}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Supported formats: JPG, PNG, MP4, MOV. Max size 50MB.</p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                                <button className="btn-primary" onClick={() => setStep(3)}>Next: Review & Analyze</button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <h3>Final Review</h3>
                            <div className="card" style={{ marginBottom: '2rem' }}>
                                <p><strong>Questionnaire:</strong> Completed</p>
                                <p><strong>Video:</strong> screening_asset_01.mp4 (42MB)</p>
                                <p><strong>EEG Data:</strong> Optional (Not provided)</p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className="btn-secondary" onClick={() => setStep(2)} disabled={isAnalyzing}>Back</button>
                                <button className="btn-primary" onClick={handleStartAnalysis} disabled={isAnalyzing}>
                                    {isAnalyzing ? <><Loader2 className="animate-spin" /> Analyzing Behavior...</> : 'Run ML Risk Analysis'}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && results && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h3>Diagnostic Inference Report</h3>
                                <span className={`badge ${results.risk_score > 50 ? 'badge-high' : 'badge-low'}`}>
                                    {results.prediction_result}
                                </span>
                            </div>

                            {results.prediction_result === "N/A" ? (
                                <div className="card" style={{ textAlign: 'center', padding: '3rem', border: '1px solid var(--danger)' }}>
                                    <AlertCircle size={48} color="var(--danger)" style={{ marginBottom: '1rem' }} />
                                    <p style={{ fontWeight: 600 }}>{results.input_status}</p>
                                </div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <div className="card" style={{ borderLeft: '4px solid var(--text-secondary)' }}>
                                        <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Input Status</p>
                                        <p>{results.input_status}</p>
                                    </div>

                                    <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                                        <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '0.5rem' }}>Feature Extraction</p>
                                        <p>{results.feature_extraction}</p>
                                    </div>

                                    <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                                        <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', marginBottom: '0.5rem' }}>Model Inference</p>
                                        <p>{results.model_inference}</p>
                                    </div>

                                    <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
                                        <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--success)', marginBottom: '0.5rem' }}>Prediction Result</p>
                                        <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>{results.prediction_result}</p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Confidence Score: {results.confidence_score}</p>
                                    </div>

                                    <div className="card" style={{ borderLeft: '4px solid var(--warning)', background: 'rgba(245, 158, 11, 0.02)' }}>
                                        <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--warning)', marginBottom: '0.5rem' }}>Model Limitations</p>
                                        <p style={{ fontSize: '0.875rem' }}>{results.model_limitations}</p>
                                    </div>
                                </div>
                            )}

                            <h4>Feature Importance</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                {results.markers.map((m: any) => (
                                    <div key={m.name} className="card" style={{ padding: '1rem' }}>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{m.name}</p>
                                        <p style={{ fontWeight: 600 }}>{m.status}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                            <div style={{ flex: 1, height: '4px', background: '#f1f5f9', borderRadius: '2px' }}>
                                                <div style={{ width: `${m.value * 100}%`, height: '100%', background: 'var(--primary)', borderRadius: '2px' }}></div>
                                            </div>
                                            <span style={{ fontSize: '0.75rem' }}>{(m.value * 100).toFixed(0)}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                                <button className="btn-primary" onClick={() => window.location.href = '/clinician'}>Send to Clinician</button>
                                <button className="btn-secondary">Download PDF Report</button>
                            </div>

                            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2rem', textAlign: 'center' }}>
                                ⚠️ This is a screening tool, not a medical diagnosis. Results should be reviewed by a qualified healthcare professional.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ScreeningModule;
