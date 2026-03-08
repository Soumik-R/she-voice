import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ReportIssue from './pages/ReportIssue';
import MapView from './components/MapView';
import RegisterOrg from './pages/RegisterOrg';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/register-org" element={<RegisterOrg />} />
      </Routes>
    </Router>
  );
}

export default App;
