import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at top right, #eef2ff, #f8fafc)' }}>
            <header style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '2rem' }}>AuraCare</h1>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <button onClick={() => navigate('/parent')} className="btn-secondary">Parent Portal</button>
                    <button onClick={() => navigate('/clinician')} className="btn-primary">Clinician Login</button>
                </div>
            </header>

            <main style={{ padding: '5% 5%', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="badge badge-medium" style={{ marginBottom: '1rem' }}>Next-Gen Healthcare</span>
                    <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Empowering Autism Diagnosis with <span className="gradient-text">Agentic AI</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        A comprehensive clinical workflow for early screening, diagnostic support, and personalized therapy management.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button onClick={() => navigate('/parent/screening')} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Start Free Screening <ArrowRight size={20} />
                        </button>
                        <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            View Clinical Specs
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-morphism"
                    style={{ padding: '2rem', borderRadius: '2rem', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}
                >
                    <div className="card" style={{ transform: 'translateX(-2rem)' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BrainCircuit color="var(--primary)" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Multimodal AI Analysis</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Analyzing 120+ behavioral markers</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ transform: 'translateX(2rem)' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShieldCheck color="var(--success)" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Clinical Decision Support</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Evidence-based risk scoring</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ transform: 'translateX(-1rem)' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Zap color="var(--secondary)" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Real-time Progress Tracking</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Personalized therapy pathways</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            <section style={{ padding: '5%', background: 'white' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Trusted by Leading Pediatric Institutions</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', opacity: 0.5, filter: 'grayscale(1)' }}>
                    <p style={{ fontWeight: 800, fontSize: '1.5rem' }}>HEALTH-TECH</p>
                    <p style={{ fontWeight: 800, fontSize: '1.5rem' }}>NEURO-CARE</p>
                    <p style={{ fontWeight: 800, fontSize: '1.5rem' }}>PEDIATRIX</p>
                    <p style={{ fontWeight: 800, fontSize: '1.5rem' }}>MIND-STUDIO</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
