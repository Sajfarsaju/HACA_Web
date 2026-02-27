"use client"

import React from "react"
import Image from "next/image"

// 5 columns on desktop, 2 on mobile
// Each column has 3 stacked cards
const COLUMNS = [0, 1, 2, 3, 4]
const CARDS_PER_COL = 3

export function PlacementSection() {
    return (
        <section className="placement-section">
            {/* ── Header: Badge + Heading ── */}
            <div className="placement-header">
                {/* Badge Button */}
                <button className="placement-badge-btn" aria-label="Student Placements">
                    <Image
                        src="/photos/main/student placements.svg"
                        alt="Student Placements"
                        width={242}
                        height={64}
                        className="placement-badge-img"
                    />
                </button>

                {/* Heading */}
                <h2 className="placement-heading">
                    They Started Right Where <br /> You Are
                </h2>
            </div>

            {/* ── Card Grid ── */}
            <div className="placement-card-grid">
                {COLUMNS.map((colIdx) => (
                    <div key={colIdx} className="placement-card-col">
                        {Array.from({ length: CARDS_PER_COL }).map((_, cardIdx) => (
                            <div key={cardIdx} className="placement-card">
                                <Image
                                    src="/photos/main/placement card.png"
                                    alt="Student placement"
                                    fill
                                    className="placement-card-img"
                                    sizes="(max-width: 767px) 161px, 248px"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* ── View More Button ── */}
            <div className="placement-cta-wrap">
                <button className="placement-view-btn">
                    <Image
                        src="/photos/main/view more placement.svg"
                        alt="View more placements"
                        width={227}
                        height={55}
                        className="placement-view-btn-img"
                    />
                </button>
            </div>
        </section>
    )
}
