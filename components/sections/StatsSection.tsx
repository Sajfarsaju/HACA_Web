"use client"

import React from "react"

export function StatsSection() {
    const stats = [
        { number: "15+", label: "Professional Courses" },
        { number: "150+", label: "Expert Mentors" },
        { number: "200+", label: "Placement Partners" },
        { number: "1000+", label: "Placements" },
    ]

    return (
        <section className="stats-section">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="stats-item">
                            <span className="stats-number">{stat.number}</span>
                            <span className="stats-label">{stat.label}</span>
                        </div>
                        {/* Desktop: vertical line between items */}
                        {index < stats.length - 1 && (
                            <div className="stats-divider" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
                {/* Mobile: plus crosshair at 2×2 grid junction */}
                <div className="stats-plus-wrap" aria-hidden="true">
                    <div className="stats-plus-v" />
                    <div className="stats-plus-h" />
                </div>
            </div>
        </section>
    )
}
