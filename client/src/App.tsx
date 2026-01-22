import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ParentDashboard from './pages/ParentDashboard';
import ClinicianDashboard from './pages/ClinicianDashboard';
import TherapistPortal from './pages/TherapistPortal';
import ScreeningModule from './pages/ScreeningModule';
import LandingPage from './pages/LandingPage';

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/parent/*" element={
                    <>
                        <Sidebar role="parent" />
                        <main className="main-content">
                            <Routes>
                                <Route index element={<ParentDashboard />} />
                                <Route path="screening" element={<ScreeningModule />} />
                            </Routes>
                        </main>
                    </>
                } />
                <Route path="/clinician/*" element={
                    <>
                        <Sidebar role="clinician" />
                        <main className="main-content">
                            <Routes>
                                <Route index element={<ClinicianDashboard />} />
                            </Routes>
                        </main>
                    </>
                } />
                <Route path="/therapist/*" element={
                    <>
                        <Sidebar role="therapist" />
                        <main className="main-content">
                            <Routes>
                                <Route index element={<TherapistPortal />} />
                            </Routes>
                        </main>
                    </>
                } />
            </Routes>
        </div>
    );
}

export default App;
