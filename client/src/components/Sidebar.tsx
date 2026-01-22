import { NavLink } from 'react-router-dom';
import {
    BarChart3,
    ClipboardCheck,
    HeartPulse,
    Home,
    Settings,
    UserCircle,
    Stethoscope,
    Activity
} from 'lucide-react';

interface SidebarProps {
    role: 'parent' | 'clinician' | 'therapist';
}

const Sidebar = ({ role }: SidebarProps) => {
    const links = {
        parent: [
            { to: '/parent', icon: Home, label: 'Dashboard' },
            { to: '/parent/screening', icon: ClipboardCheck, label: 'Risk Screening' },
            { to: '/parent/progress', icon: Activity, label: 'Child Progress' },
        ],
        clinician: [
            { to: '/clinician', icon: BarChart3, label: 'Patient Overview' },
            { to: '/clinician/cases', icon: HeartPulse, label: 'Review Cases' },
            { to: '/clinician/reports', icon: Stethoscope, label: 'Diagnosis Reports' },
        ],
        therapist: [
            { to: '/therapist', icon: Home, label: 'My Patients' },
            { to: '/therapist/plans', icon: ClipboardCheck, label: 'Therapy Plans' },
        ]
    };

    const activeLinks = links[role];

    return (
        <aside className="sidebar glass-morphism">
            <div className="logo-container" style={{ marginBottom: '3rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '1.5rem' }}>AuraCare</h1>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>AI Healthcare Platform</p>
            </div>

            <nav style={{ flex: 1 }}>
                {activeLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        <link.icon size={20} />
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <NavLink to="/settings" className="nav-link">
                    <Settings size={20} />
                    <span>Settings</span>
                </NavLink>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', marginTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                    <UserCircle size={32} color="var(--text-secondary)" />
                    <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>Demo User</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{role}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
