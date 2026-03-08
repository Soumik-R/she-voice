import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import L from "leaflet";
import { Link } from "react-router-dom";

// Fix default marker icon (Leaflet + webpack issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Custom marker icon matching theme
const issueIcon = new L.DivIcon({
    className: "custom-marker",
    html: `<div class="marker-pin"></div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -45],
});

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function MapView() {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const [position, setPosition] = useState([23.2599, 77.4126]);
    const [votedIssues, setVotedIssues] = useState(new Set());

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition([pos.coords.latitude, pos.coords.longitude]);
        });
        fetchIssues();
    }, []);

    async function voteIssue(issue) {
        if (votedIssues.has(issue.id)) return;

        await supabase
            .from("issues")
            .update({ votes: issue.votes + 1 })
            .eq("id", issue.id);

        setVotedIssues(new Set([...votedIssues, issue.id]));
        fetchIssues();
    }

    async function fetchIssues() {
        const { data } = await supabase.from("issues").select("*");
        setIssues(data || []);
        setLoading(false);
    }

    const filteredIssues =
        filter === "All"
            ? issues
            : issues.filter((issue) => issue.category === filter);

    const getCategoryColor = (cat) => {
        switch (cat) {
            case "Public Safety":
                return "#e91e63";
            case "Workplace":
                return "#7b2d8e";
            case "Healthcare":
                return "#00bcd4";
            default:
                return "#ffd54f";
        }
    };

    const getCategoryIcon = (cat) => {
        switch (cat) {
            case "Public Safety":
                return "🛡️";
            case "Workplace":
                return "🏢";
            case "Healthcare":
                return "🏥";
            default:
                return "📍";
        }
    };

    return (
        <div className="map-page">
            {/* Sidebar */}
            <div className="map-sidebar">
                <Link to="/" className="report-back-link">
                    ← Back to Home
                </Link>

                <h2 className="map-sidebar-title">
                    Problem{" "}
                    <span className="hero-title-gradient">Hotspots</span>
                </h2>
                <p className="map-sidebar-desc">
                    Explore reported issues across the city. Click a marker to see
                    details.
                </p>

                {/* Filter Buttons */}
                <div className="map-filters">
                    <h4 className="map-filter-label">Filter by Category</h4>
                    {["All", "Public Safety", "Workplace", "Healthcare"].map((cat) => (
                        <button
                            key={cat}
                            className={`map-filter-btn ${filter === cat ? "map-filter-btn-active" : ""}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat === "All" ? "🌐" : getCategoryIcon(cat)}{" "}
                            {cat}
                            <span className="map-filter-count">
                                {cat === "All"
                                    ? issues.length
                                    : issues.filter((i) => i.category === cat).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Stats */}
                <div className="map-stats-box">
                    <div className="map-stat-item">
                        <span className="map-stat-num">{issues.length}</span>
                        <span className="map-stat-lbl">Total Issues</span>
                    </div>
                    <div className="map-stat-item">
                        <span className="map-stat-num">{filteredIssues.length}</span>
                        <span className="map-stat-lbl">Shown</span>
                    </div>
                </div>

                <Link to="/report" className="btn btn-primary map-report-btn">
                    Report Issue ✦
                </Link>
            </div>

            {/* Map */}
            <div className="map-container-wrapper">
                {loading ? (
                    <div className="map-loading">
                        <span className="spinner"></span>
                        <p>Loading map data...</p>
                    </div>
                ) : (
                    <MapContainer
                        center={position}
                        zoom={13}
                        className="map-leaflet"
                        zoomControl={false}
                    >
                        <ChangeView center={position} zoom={13} />
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        />

                        {filteredIssues.map((issue) => (
                            <Marker
                                key={issue.id}
                                position={[issue.latitude, issue.longitude]}
                                icon={issueIcon}
                            >
                                <Popup className="custom-popup">
                                    <div className="popup-content">
                                        <div
                                            className="popup-category-tag"
                                            style={{
                                                background: getCategoryColor(issue.category) + "22",
                                                color: getCategoryColor(issue.category),
                                                borderColor: getCategoryColor(issue.category) + "44",
                                            }}
                                        >
                                            {getCategoryIcon(issue.category)} {issue.category}
                                        </div>

                                        <h3 className="popup-title">{issue.title}</h3>
                                        <p className="popup-desc">{issue.description}</p>

                                        <div className="popup-meta">
                                            <div className="popup-meta-row">
                                                <span className="popup-meta-label">🏛️ Authority</span>
                                                <span className="popup-meta-value">
                                                    {issue.authority}
                                                </span>
                                            </div>
                                            <div className="popup-meta-row">
                                                <span className="popup-meta-label">🗳️ Votes</span>
                                                <span className="popup-meta-value">{issue.votes}</span>
                                            </div>
                                        </div>

                                        <button
                                            className={`popup-vote-btn ${votedIssues.has(issue.id) ? "voted" : ""}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                voteIssue(issue);
                                            }}
                                            disabled={votedIssues.has(issue.id)}
                                        >
                                            {votedIssues.has(issue.id) ? "✓ Confirmed" : "👍 Confirm Issue"}
                                        </button>

                                        {issue.image_url && (
                                            <div className="popup-image">
                                                <img src={issue.image_url} alt={issue.title} />
                                            </div>
                                        )}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                )}
            </div>
        </div>
    );
}

export default MapView;
