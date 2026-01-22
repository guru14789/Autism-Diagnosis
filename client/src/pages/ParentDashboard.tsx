import {
    Heart,
    Calendar,
    TrendingUp,
    Award,
    PlayCircle,
    Clock
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const progressData = [
    { day: 'Mon', score: 45 },
    { day: 'Tue', score: 52 },
    { day: 'Wed', score: 48 },
    { day: 'Thu', score: 61 },
    { day: 'Fri', score: 58 },
    { day: 'Sat', score: 65 },
    { day: 'Sun', score: 70 },
];

const ParentDashboard = () => {
    return (
        <div className="animate-fade-in">
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem' }}>Hello, Michael's Family</h1>
                <p style={{ color: 'var(--text-secondary)' }}>You have 3 therapy activities scheduled for today.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3>Weekly Skill Progress</h3>
                            <span className="badge badge-low" style={{ background: '#e0e7ff', color: '#4338ca' }}>Social Interaction</span>
                        </div>
                        <div style={{ height: '300px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={progressData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip
                                        contentStyle={{ borderRadius: 'var(--radius-md)', border: 'none', boxShadow: 'var(--shadow-md)' }}
                                    />
                                    <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={4} dot={{ r: 6, fill: 'var(--primary)' }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Today's Activities</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            {[
                                { title: 'Joint Attention Training', time: '10:00 AM', type: 'Speech Therapy', duration: '30m' },
                                { title: 'Sensory Integration Play', time: '02:30 PM', type: 'Occupational', duration: '45m' },
                                { title: 'Emotional Mapping', time: '05:00 PM', type: 'Social', duration: '20m' },
                            ].map((act, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ padding: '0.75rem', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)' }}>
                                            <PlayCircle size={24} color="var(--primary)" />
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600 }}>{act.title}</p>
                                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{act.type} • {act.duration}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontWeight: 600 }}>{act.time}</p>
                                        <button style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>Start Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                            <Award size={32} />
                            <h3 style={{ color: 'white' }}>Weekly Streak!</h3>
                        </div>
                        <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Michael has completed 5 days of therapy in a row. Great job, team!</p>
                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                            <div style={{ width: '70%', height: '100%', background: 'white', borderRadius: '4px' }}></div>
                        </div>
                        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', textAlign: 'right' }}>70% to Weekly Goal</p>
                    </div>

                    <div className="card">
                        <h3>Care Team</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                            {[
                                { name: 'Dr. Sarah Mitchell', role: 'Clinical Lead', status: 'Online' },
                                { name: 'James Wilson', role: 'Speech Therapist', status: 'In Session' },
                            ].map((person, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                                        {person.name[0]}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{person.name}</p>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{person.role}</p>
                                    </div>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: person.status === 'Online' ? 'var(--success)' : 'var(--warning)' }}></div>
                                </div>
                            ))}
                            <button className="btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>Message Team</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard;
