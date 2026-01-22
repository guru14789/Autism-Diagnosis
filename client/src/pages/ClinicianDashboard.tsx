import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';
import {
    Users,
    FileText,
    Clock,
    CheckCircle,
    AlertTriangle,
    ExternalLink,
    MessageSquare
} from 'lucide-react';

const data = [
    { name: 'Jan', screening: 40, diagnosis: 24 },
    { name: 'Feb', screening: 30, diagnosis: 13 },
    { name: 'Mar', screening: 20, diagnosis: 98 },
    { name: 'Apr', screening: 27, diagnosis: 39 },
    { name: 'May', screening: 18, diagnosis: 48 },
    { name: 'Jun', screening: 23, diagnosis: 38 },
];

const markerData = [
    { name: 'Eye Contact', value: 85, color: '#6366f1' },
    { name: 'Vocal patterns', value: 65, color: '#ec4899' },
    { name: 'Motor skills', value: 45, color: '#8b5cf6' },
    { name: 'Social response', value: 30, color: '#10b981' },
];

const ClinicianDashboard = () => {
    return (
        <div className="animate-fade-in">
            <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem' }}>Clinician Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Welcome back, Dr. Sarah Mitchell</p>
                </div>
                <button className="btn-primary">Generate Batch Report</button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                    { icon: Users, label: 'Active Patients', value: '124', change: '+12% this month' },
                    { icon: FileText, label: 'Pending Reviews', value: '8', change: '2 Urgent' },
                    { icon: Clock, label: 'Avg. Screening Time', value: '14m', change: '-2m optimization' },
                    { icon: CheckCircle, label: 'Completed Care Plans', value: '89', change: '96% success rate' },
                ].map((stat, i) => (
                    <div key={i} className="card">
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(99, 102, 241, 0.1)' }}>
                                <stat.icon size={24} color="var(--primary)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{stat.label}</p>
                                <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--success)' }}>{stat.change}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Screening Trends</h3>
                    <div style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ borderRadius: 'var(--radius-md)', border: 'none', boxShadow: 'var(--shadow-md)' }}
                                />
                                <Line type="monotone" dataKey="screening" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--primary)' }} />
                                <Line type="monotone" dataKey="diagnosis" stroke="var(--secondary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--secondary)' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Recent Diagnostic Flags</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'Baby J. Doe (18mo)', risk: 88, status: 'Urgent', date: '2h ago' },
                            { name: 'Liam S. (3y)', risk: 42, status: 'Standard', date: '5h ago' },
                            { name: 'Ava M. (24mo)', risk: 65, status: 'Review Needed', date: 'Yesterday' },
                        ].map((flag, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)' }}>
                                <div>
                                    <p style={{ fontWeight: 600 }}>{flag.name}</p>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{flag.date}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span className={`badge ${flag.risk > 70 ? 'badge-high' : 'badge-medium'}`}>{flag.risk}% Risk</span>
                                    <button style={{ marginLeft: '1rem', color: 'var(--primary)' }}><ExternalLink size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 style={{ marginBottom: '1.5rem' }}>AI Evidence Deep Dive</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Aggregated behavioral marker frequencies across current patient cohort.</p>
                <div style={{ height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={markerData} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={120} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                                {markerData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ClinicianDashboard;
