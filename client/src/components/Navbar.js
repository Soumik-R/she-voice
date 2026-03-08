import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <span>🟣</span> SheVoice
            </Link>
            <ul className="navbar-links">

                <li><Link to="/map" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Map</Link></li>
                <li><Link to="/register-org" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Register Org</Link></li>
                <li>
                    <Link to="/report" className="btn-nav btn-nav-primary">
                        Report Issue ✦
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
