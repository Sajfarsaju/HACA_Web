"use client"

import React from "react"
import Image from "next/image"

const cards = [
    {
        heading: "Mentors Who\nWork in the Field",
        paragraph:
            "Our mentors are the professionals who work in marketing, design, coding, and finance every day. They share what they've learned from real experience.",
    },
    {
        heading: "Skills Built on\nReal Projects",
        paragraph:
            "Every course at HACA is built around live projects. You don't just learn concepts — you apply them, get feedback, and build a portfolio that speaks for itself.",
    },
    {
        heading: "Placement Support\nThat Works",
        paragraph:
            "From resume reviews to interview prep and direct connections with 200+ placement partners, HACA ensures you're ready the moment opportunity comes.",
    },
    {
        heading: "One Platform,\nFour Schools",
        paragraph:
            "Marketing, Design, Tech, and Finance — all under one roof. Whether you know your path or are still exploring, HACA has a school built just for you.",
    },
]

export function WhyHacaSection() {
    return (
        <section className="why-haca-section">
            {/* ── Left Column ── */}
            <div className="why-haca-left">
                {/* Badge */}
                <button className="why-haca-badge-btn" aria-label="Why HACA">
                    <Image
                        src="/photos/main/why haca.svg"
                        alt="Why HACA"
                        width={175}
                        height={64}
                        className="why-haca-badge-img"
                    />
                </button>

                {/* Heading + Paragraph */}
                <div className="why-haca-text-wrap">
                    <h2 className="why-haca-heading">The &apos;Why&apos; Behind HACA</h2>
                    <p className="why-haca-para">
                        You&apos;ll learn real skills, gain real experience, and get real
                        opportunities, all in one place. That&apos;s what HACA is all about.
                    </p>
                </div>
            </div>

            {/* ── Right: 2×2 Flip Card Grid ── */}
            <div className="why-haca-cards">
                {cards.map((card, i) => (
                    <div key={i} className="why-haca-card">
                        <div className="why-haca-card-inner">
                            {/* Heading layer (always visible, slides up on hover) */}
                            <div className="why-haca-card-heading-wrap">
                                <h3 className="why-haca-card-heading">
                                    {card.heading.split("\n").map((line, li) => (
                                        <React.Fragment key={li}>
                                            {line}
                                            {li < card.heading.split("\n").length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                            {/* Paragraph layer (hidden by default, slides in on hover) */}
                            <div className="why-haca-card-para-wrap">
                                <p className="why-haca-card-para">{card.paragraph}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
