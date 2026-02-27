"use client"

import React from "react"

export function PhotoGallery() {
    // Fallback colors for cards
    const cardColors = [
        "#1E2A5E", "#2D3E7F", "#3A50B0", "#4A62D1",
        "#1E2A5E", "#2D3E7F", "#3A50B0", "#4A62D1"
    ]

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-scroll-area">
                    {cardColors.map((color, index) => (
                        <div
                            key={index}
                            className="gallery-card"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
                {/* Gradient overlay for fading edges */}
                <div className="gallery-overlay" />
            </div>
        </section>
    )
}
