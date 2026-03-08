import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ReportIssue from './pages/ReportIssue';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/report" element={<ReportIssue />} />
      </Routes>
    </Router>
  );
}

export default App;
