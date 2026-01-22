import {
    Users,
    Calendar,
    BookOpen,
    CheckSquare,
    MoreVertical,
    Plus
} from 'lucide-react';

const TherapistPortal = () => {
    return (
        <div className="animate-fade-in">
            <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem' }}>Therapist Portal</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Managing 12 active therapy cohorts</p>
                </div>
                <button className="btn-primary"><Plus size={20} /> New Therapy Plan</button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1rem' }}>Today's Sessions</h3>
                        <span className="badge badge-medium">4 Remaining</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'Michael R.', time: '10:00 - 10:45', goal: 'Social Interaction' },
                            { name: 'Sophia L.', time: '11:15 - 12:00', goal: 'Motor Skills' },
                            { name: 'Ethan W.', time: '14:30 - 15:15', goal: 'Speech Clarity' },
                        ].map((session, i) => (
                            <div key={i} style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={{ fontWeight: 600 }}>{session.name}</p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{session.time}</p>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--primary)', marginTop: '0.25rem' }}>Goal: {session.goal}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>AI-Generated Insights</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: '#fffbeb', borderRadius: 'var(--radius-md)', border: '1px solid #fef3c7' }}>
                            <p style={{ fontWeight: 600, color: '#92400e', fontSize: '0.875rem' }}>Regression Alert</p>
                            <p style={{ fontSize: '0.875rem', color: '#92400e', opacity: 0.8 }}>Liam S. shows 15% decrease in joint attention over the last 3 sessions.</p>
                            <button style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#92400e' }}>Adjust Plan</button>
                        </div>
                        <div style={{ padding: '1rem', background: '#ecfdf5', borderRadius: 'var(--radius-md)', border: '1px solid #d1fae5' }}>
                            <p style={{ fontWeight: 600, color: '#065f46', fontSize: '0.875rem' }}>Milestone Achieved</p>
                            <p style={{ fontSize: '0.875rem', color: '#065f46', opacity: 0.8 }}>Ava M. successfully initiated two social interactions today.</p>
                            <button style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#065f46' }}>Log Milestone</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Care Coordination</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { from: 'Dr. Mitchell', msg: 'Please review Michael\'s new EEG trends.', time: '1h ago' },
                            { from: 'Parent (Sophia)', msg: 'Sophia had a restless night, might be tired.', time: '3h ago' },
                        ].map((msg, i) => (
                            <div key={i} style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
                                <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{msg.from} <span style={{ fontWeight: 400, color: 'var(--text-secondary)', float: 'right', fontSize: '0.75rem' }}>{msg.time}</span></p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{msg.msg}</p>
                            </div>
                        ))}
                        <button className="btn-secondary" style={{ width: '100%', fontSize: '0.875rem' }}>View All Messages</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3>Active Therapy Plans</h3>
                <table style={{ width: '100%', marginTop: '1.5rem', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textLeft: 'left', borderBottom: '2px solid var(--glass-border)' }}>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>Patient</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>Primary Focus</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>AI Progress</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>Last Session</th>
                            <th style={{ padding: '1rem', textAlign: 'left' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'Michael R.', focus: 'Social-Communication', progress: 65, last: 'Today' },
                            { name: 'Sophia L.', focus: 'Motor Skills', progress: 42, last: 'Yesterday' },
                            { name: 'Ethan W.', focus: 'Speech Therapy', progress: 88, last: '2 days ago' },
                            { name: 'Ava M.', focus: 'Behavioral Prep', progress: 55, last: 'Yesterday' },
                        ].map((patient, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <td style={{ padding: '1rem', fontWeight: 600 }}>{patient.name}</td>
                                <td style={{ padding: '1rem' }}>{patient.focus}</td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ flex: 1, height: '6px', background: '#e2e8f0', borderRadius: '3px' }}>
                                            <div style={{ width: `${patient.progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '3px' }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.75rem' }}>{patient.progress}%</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{patient.last}</td>
                                <td style={{ padding: '1rem' }}>
                                    <button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TherapistPortal;
