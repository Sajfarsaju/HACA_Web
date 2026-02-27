"use client"

import Image from "next/image"
import { motion, LayoutGroup } from "framer-motion"
import { useState } from "react"

/* ── Dummy card data — replace content later ── */
const testimonials = [
    { id: 0, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)" },
    { id: 1, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)" },
    { id: 2, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)" },
    { id: 3, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)" },
    { id: 4, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)" },
]

function mod(n: number, m: number) { return ((n % m) + m) % m }

/* Spring transition shared across all card layout animations */
const CARD_SPRING = {
    type: "spring" as const,
    stiffness: 260,
    damping: 26,
    mass: 0.9,
}

export function TestimonialsSection() {
    const [active, setActive] = useState(0)
    const total = testimonials.length

    const leftIdx = mod(active - 1, total)
    const rightIdx = mod(active + 1, total)

    const prev = () => setActive(a => mod(a - 1, total))
    const next = () => setActive(a => mod(a + 1, total))

    return (
        <section className="tst-outer" aria-label="Testimonials">

            {/* ─── Header ─── */}
            <motion.div
                className="tst-header"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <button className="tst-pill-btn" aria-label="Testimonials label">
                    <Image
                        src="/photos/main/testimonials.svg"
                        alt="Testimonials"
                        width={185}
                        height={64}
                        className="tst-pill-img"
                        priority
                    />
                </button>
                <h2 className="tst-heading">Hear How Others Made it Happen</h2>
            </motion.div>

            {/* ─── Carousel area ─── */}
            <div className="tst-slide-outer">

                {/*
          LayoutGroup makes all layoutId animations in this tree share
          the same coordinate space, enabling the true "cards slide together"
          effect: clicking next grows the right card to center while
          the center shrinks and slides left — no card stays static.
        */}
                <LayoutGroup id="testimonials-carousel">
                    <div className="tst-viewport">

                        {/* LEFT slot — dim peek, click to go back */}
                        <div
                            className="tst-slot tst-slot--side"
                            onClick={prev}
                            role="button"
                            tabIndex={0}
                            aria-label="Previous testimonial"
                            onKeyDown={e => e.key === "Enter" && prev()}
                        >
                            <motion.div
                                layout
                                layoutId={`tst-card-${leftIdx}`}
                                className="tst-card-frame"
                                style={{ background: testimonials[leftIdx].gradient }}
                                animate={{ opacity: 0.4, scale: 0.95 }}
                                transition={CARD_SPRING}
                            />
                        </div>

                        {/* CENTER slot — active, full size */}
                        <div className="tst-slot tst-slot--center">
                            <motion.div
                                layout
                                layoutId={`tst-card-${active}`}
                                className="tst-card-frame"
                                style={{ background: testimonials[active].gradient }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={CARD_SPRING}
                            >
                                {/* Real Content Block */}
                                <div className="tst-active-content">
                                    {/* Quote SVG */}
                                    <Image
                                        src="/photos/main/inverter coma.svg"
                                        alt="Quote mark"
                                        width={210}
                                        height={142}
                                        className="tst-quote-mark"
                                        aria-hidden="true"
                                    />

                                    {/* Paragraph */}
                                    <p className="tst-review-text">
                                        The digital marketing classes were practical, up to date, and easy to follow. The mentors were incredibly supportive, and the mock interviews really boosted my confidence.
                                    </p>

                                    {/* Author Lockup */}
                                    <div className="tst-author-lockup">
                                        <h3 className="tst-author-name">Nadha Faizal</h3>
                                        <span className="tst-author-title">Digital Marketer</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT slot — dim peek, click to go forward */}
                        <div
                            className="tst-slot tst-slot--side"
                            onClick={next}
                            role="button"
                            tabIndex={0}
                            aria-label="Next testimonial"
                            onKeyDown={e => e.key === "Enter" && next()}
                        >
                            <motion.div
                                layout
                                layoutId={`tst-card-${rightIdx}`}
                                className="tst-card-frame"
                                style={{ background: testimonials[rightIdx].gradient }}
                                animate={{ opacity: 0.4, scale: 0.95 }}
                                transition={CARD_SPRING}
                            />
                        </div>

                    </div>
                </LayoutGroup>

                {/* ─── Navigation buttons ─── */}
                <div className="tst-nav-btns">
                    <button className="tst-nav-btn" onClick={prev} aria-label="Previous testimonial">
                        <Image
                            src="/photos/main/left arrow.svg"
                            alt="Previous"
                            width={60}
                            height={60}
                            className="tst-nav-icon"
                        />
                    </button>
                    <button className="tst-nav-btn" onClick={next} aria-label="Next testimonial">
                        <Image
                            src="/photos/main/right arrow.svg"
                            alt="Next"
                            width={60}
                            height={60}
                            className="tst-nav-icon"
                        />
                    </button>
                </div>

            </div>
        </section>
    )
}
