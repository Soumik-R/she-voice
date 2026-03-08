import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Link } from "react-router-dom";

function RegisterOrg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const registerOrg = async (e) => {
        e.preventDefault();

        if (!name || !email || !location) return;

        setLoading(true);

        const { error } = await supabase.from("organizations").insert([
            {
                name,
                authority_email: email,
                location,
            },
        ]);

        setLoading(false);

        if (error) {
            alert("Error: " + error.message);
        } else {
            setSuccess(true);
        }
    };

    if (success) {
        return (
            <div className="report-page">
                <div className="report-bg-orb report-bg-orb-1"></div>
                <div className="report-bg-orb report-bg-orb-2"></div>

                <div className="report-success-card">
                    <div className="success-check">✓</div>
                    <h2>Organization Registered!</h2>
                    <p className="success-detail">
                        <strong>{name}</strong> has been successfully added to our network in <strong>{location}</strong>.
                    </p>

                    <div className="success-actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setSuccess(false);
                                setName("");
                                setEmail("");
                                setLocation("");
                            }}
                        >
                            Register Another ✦
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

            <div className="report-container" style={{ gridTemplateColumns: '1fr' }}>
                <form className="report-form-panel mx-auto" style={{ maxWidth: '600px', width: '100%' }} onSubmit={registerOrg}>
                    <Link to="/" className="report-back-link mb-4 block">
                        ← Back to Home
                    </Link>

                    <h2 className="report-form-title mb-2">Register Organization</h2>
                    <p className="report-info-desc mb-6">
                        Join our network of responsive authorities and organizations ensuring safety and well-being.
                    </p>

                    <div className="form-group">
                        <label className="form-label">Organization Name</label>
                        <input
                            className="form-input"
                            placeholder="e.g., TechCorp Solutions"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Authority Email</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="e.g., hr@techcorp.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Location (City/Area)</label>
                        <input
                            className="form-input"
                            placeholder="e.g., Bangalore, Whitefield"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary report-submit-btn mt-4"
                        disabled={loading || !name || !email || !location}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span> Registering...
                            </>
                        ) : (
                            <>Register Organization ✦</>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterOrg;
