import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Link } from "react-router-dom";

function ReportIssue() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [locationStatus, setLocationStatus] = useState("");

    const categoryDetails = {
        "Public Safety": {
            authority: "Municipal Corporation",
            icon: "🛡️",
            examples: "Unsafe bus stops, poor street lighting, broken footpaths",
        },
        Workplace: {
            authority: "Office Management",
            icon: "🏢",
            examples: "Uncomfortable chairs, harassment, unsafe facilities",
        },
        Healthcare: {
            authority: "Health Authority",
            icon: "🏥",
            examples: "Ignored symptoms, lack of women doctors, inaccessible clinics",
        },
    };

    const submitIssue = async (e) => {
        e.preventDefault();

        if (!title || !description || !category) {
            return;
        }

        setLoading(true);
        setLocationStatus("📍 Getting your location...");

        const details = categoryDetails[category];
        const authority = details ? details.authority : "General Authority";

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocationStatus("✅ Location captured!");

                const { error } = await supabase.from("issues").insert([
                    {
                        title,
                        description,
                        category,
                        latitude,
                        longitude,
                        authority,
                        votes: 0,
                    },
                ]);

                setLoading(false);

                if (error) {
                    alert("Error: " + error.message);
                } else {
                    setSuccess(true);
                }
            },
            (err) => {
                setLoading(false);
                setLocationStatus("");
                alert(
                    "Location access denied. Please enable location to report an issue."
                );
            }
        );
    };

    if (success) {
        return (
            <div className="report-page">
                <div className="report-bg-orb report-bg-orb-1"></div>
                <div className="report-bg-orb report-bg-orb-2"></div>

                <div className="report-success-card">
                    <div className="success-check">✓</div>
                    <h2>Issue Reported Successfully!</h2>
                    <p className="success-detail">
                        Your report has been routed to{" "}
                        <strong>{categoryDetails[category]?.authority}</strong>
                    </p>

                    <div className="success-summary">
                        <div className="summary-row">
                            <span className="summary-label">Issue</span>
                            <span className="summary-value">{title}</span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Category</span>
                            <span className="summary-value">
                                {categoryDetails[category]?.icon} {category}
                            </span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Routed To</span>
                            <span className="summary-value routed-to">
                                {categoryDetails[category]?.authority}
                            </span>
                        </div>
                    </div>

                    <div className="success-actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setSuccess(false);
                                setTitle("");
                                setDescription("");
                                setCategory("");
                                setLocationStatus("");
                            }}
                        >
                            Report Another ✦
                        </button>
                        <Link to="/" className="btn btn-secondary">
                            ← Back Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="report-page">
            <div className="report-bg-orb report-bg-orb-1"></div>
            <div className="report-bg-orb report-bg-orb-2"></div>

            <div className="report-container">
                {/* Left Panel - Info */}
                <div className="report-info-panel">
                    <Link to="/" className="report-back-link">
                        ← Back to Home
                    </Link>
                    <h1 className="report-info-title">
                        Your Voice <span className="hero-title-gradient">Matters</span>
                    </h1>
                    <p className="report-info-desc">
                        Describe the problem you face. We'll automatically route it to the
                        right authority for action.
                    </p>

                    <div className="routing-preview">
                        <h4 className="routing-title">🚦 Smart Routing</h4>
                        {Object.entries(categoryDetails).map(([cat, details]) => (
                            <div
                                key={cat}
                                className={`routing-row ${category === cat ? "routing-row-active" : ""}`}
                            >
                                <span className="routing-cat">
                                    {details.icon} {cat}
                                </span>
                                <span className="routing-arrow">→</span>
                                <span className="routing-auth">{details.authority}</span>
                            </div>
                        ))}
                    </div>

                    {locationStatus && (
                        <div className="location-badge">{locationStatus}</div>
                    )}
                </div>

                {/* Right Panel - Form */}
                <form className="report-form-panel" onSubmit={submitIssue}>
                    <h2 className="report-form-title">Report a Problem</h2>

                    <div className="form-group">
                        <label className="form-label">Issue Title</label>
                        <input
                            className="form-input"
                            placeholder="e.g., Unsafe bus stop near College Road"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-textarea"
                            placeholder="Describe the problem in detail — what's wrong, when it happens, who it affects..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <div className="category-select-grid">
                            {Object.entries(categoryDetails).map(([cat, details]) => (
                                <button
                                    type="button"
                                    key={cat}
                                    className={`category-option ${category === cat ? "category-option-active" : ""}`}
                                    onClick={() => setCategory(cat)}
                                >
                                    <span className="category-option-icon">{details.icon}</span>
                                    <span className="category-option-name">{cat}</span>
                                    <span className="category-option-ex">{details.examples}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {category && (
                        <div className="authority-badge">
                            Will be routed to:{" "}
                            <strong>{categoryDetails[category].authority}</strong>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary report-submit-btn"
                        disabled={loading || !title || !description || !category}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span> Submitting...
                            </>
                        ) : (
                            <>Submit Report ✦</>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ReportIssue;
