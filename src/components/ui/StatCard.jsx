import React from "react";
import './StatCard.css';

function StatCard({ title, value, subtitle, icon, accentColor}) {
    return (
        <div className="stat-card" style={{ '--card-accent': accentColor || 'var(--accent-color)' }}>
            <div className="stat-card-header">
                <span className="stat-card-title">{title}</span>
                {icon && <span className="stat-card-icon">{icon}</span>}
            </div>
            <div className="stat-card-body">
                <h3 className="stat-card-value">{value}</h3>
                {subtitle && <p className="stat-card-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
}

export default StatCard;