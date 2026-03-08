import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            {/* ===== HERO SECTION ===== */}
            <section className="hero">
                <div className="hero-bg-orb hero-bg-orb-1"></div>
                <div className="hero-bg-orb hero-bg-orb-2"></div>
                <div className="hero-bg-orb hero-bg-orb-3"></div>

                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        International Women's Day 2026
                    </div>

                    <h1 className="hero-title">
                        The World Wasn't Built For You.{' '}
                        <span className="hero-title-gradient">Let's Change That.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Report design problems women face in everyday life — unsafe streets,
                        uncomfortable workspaces, ignored health concerns. Your voice drives
                        real change in your city.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/report" className="btn btn-primary">
                            Report a Problem ✦
                        </Link>
                        <a href="#how-it-works" className="btn btn-secondary">
                            How It Works →
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-number">1,200+</div>
                            <div className="hero-stat-label">Issues Reported</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">85%</div>
                            <div className="hero-stat-label">Resolved Rate</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">42</div>
                            <div className="hero-stat-label">Cities Covered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES SECTION ===== */}
            <section className="features-section" id="features">
                <div className="section-header">
                    <span className="section-tag">Features</span>
                    <h2 className="section-title">Built to Amplify Your Voice</h2>
                    <p className="section-subtitle">
                        Every tool you need to report, track, and resolve the invisible
                        problems women face daily.
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon feature-icon-rose">📸</div>
                        <h3>Photo Evidence Upload</h3>
                        <p>
                            Capture and upload photos of issues you encounter — from broken
                            streetlights to unsafe infrastructure.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon feature-icon-purple">📍</div>
                        <h3>Location Tagging</h3>
                        <p>
                            Pin exact locations on an interactive map so authorities know
                            exactly where the problem is.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon feature-icon-gold">🗳️</div>
                        <h3>Community Voting</h3>
                        <p>
                            Upvote issues that affect you too. Higher votes mean higher
                            priority for authorities to act.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon feature-icon-teal">🏛️</div>
                        <h3>Smart Authority Routing</h3>
                        <p>
                            Reports are automatically sent to the right authority —
                            municipal, healthcare, or workplace management.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon feature-icon-rose">📊</div>
                        <h3>Problem Hotspot Dashboard</h3>
                        <p>
                            Visual heatmap showing the most reported problem areas in your
                            city. Data drives action.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon feature-icon-purple">🔔</div>
                        <h3>Status Tracking</h3>
                        <p>
                            Track the status of your report from submission to resolution.
                            Stay informed at every step.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="how-it-works" id="how-it-works">
                <div className="section-header">
                    <span className="section-tag">Process</span>
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">
                        Three simple steps to make your city better for everyone.
                    </p>
                </div>

                <div className="steps-container">
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>📝 Report the Problem</h3>
                            <p>
                                Describe the issue you face. Upload a photo, select the
                                category (Public Safety, Workplace, Healthcare), and tag the
                                location on the map.
                            </p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>🚀 Smart Routing Takes Over</h3>
                            <p>
                                Our system automatically identifies the right authority based on
                                the issue type and routes your report — Government, Company
                                Management, or Health Authority.
                            </p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>✅ Track & Resolve</h3>
                            <p>
                                The community votes on issues, priorities are set, and
                                authorities take action. You get real-time status updates
                                until the problem is resolved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CATEGORIES SECTION ===== */}
            <section className="categories-section" id="categories">
                <div className="section-header">
                    <span className="section-tag">Categories</span>
                    <h2 className="section-title">What Can You Report?</h2>
                    <p className="section-subtitle">
                        From unsafe streets to ignored medical symptoms — every problem
                        deserves attention.
                    </p>
                </div>

                <div className="categories-grid">
                    <div className="category-card">
                        <div className="category-emoji">🚏</div>
                        <div className="category-info">
                            <h4>Unsafe Bus Stops</h4>
                            <p>→ Municipal Authority</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-emoji">💡</div>
                        <div className="category-info">
                            <h4>Poor Street Lighting</h4>
                            <p>→ Municipal Corporation</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-emoji">💺</div>
                        <div className="category-info">
                            <h4>Uncomfortable Office Design</h4>
                            <p>→ Office Management</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-emoji">⚠️</div>
                        <div className="category-info">
                            <h4>Workplace Harassment</h4>
                            <p>→ HR Department</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-emoji">🏥</div>
                        <div className="category-info">
                            <h4>Medical Symptoms Ignored</h4>
                            <p>→ Healthcare Authority</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-emoji">🚶‍♀️</div>
                        <div className="category-info">
                            <h4>Unsafe Walking Routes</h4>
                            <p>→ Government Portal</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="cta-section">
                <div className="cta-box">
                    <h2>
                        Your Experience Matters.{' '}
                        <span className="hero-title-gradient">Speak Up.</span>
                    </h2>
                    <p>
                        Join thousands of women making cities safer, workplaces better, and
                        healthcare fairer — one report at a time.
                    </p>
                    <Link to="/report" className="btn btn-primary">
                        Report Your First Issue ✦
                    </Link>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-text">
                        Made with <span>♥</span> for Women's Day 2026 — SheVoice
                    </div>
                    <ul className="footer-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#categories">Categories</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
