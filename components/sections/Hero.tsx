"use client"

import Image from "next/image"
import Link from "next/link"

export function Hero() {
    return (
        <section className="hero-section">
            {/* ── Inner Container ── */}
            <div className="hero-inner">

                {/* ──────────────────────────────────────
                    UPPER CONTAINER
                    (desktop: 780px wide, mobile: full width)
                    ────────────────────────────────────── */}
                <div className="hero-upper">

                    {/* ── First Container: Info button + Heading + Paragraph ── */}
                    <div className="hero-first">

                        {/* Info Button */}
                        <div className="hero-info-btn-wrap">
                            <Image
                                src="/photos/Info Button.svg"
                                alt="Info"
                                width={349}
                                height={42}
                                className="hero-info-btn"
                                priority
                            />
                        </div>

                        {/* Text Container */}
                        <div className="hero-text-container">
                            {/* Heading */}
                            <div className="hero-heading">
                                <p className="hero-heading-line1">Skills Are the New Degree,</p>
                                <p className="hero-heading-line2">Build Yours with HACA.</p>
                            </div>

                            {/* Paragraph */}
                            <div className="hero-para-wrap">
                                <p className="hero-para">
                                    At HACA, every course is built to make you career-ready in Digital Marketing, Design, Tech, or Finance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Button Container (desktop: two buttons, mobile: one button) ── */}

                    {/* Desktop Button Row */}
                    <div className="hero-btn-group hero-btn-group--desktop">
                        <Link href="/courses" className="hero-btn-link">
                            <Image
                                src="/photos/explore course btn.svg"
                                alt="Explore Courses"
                                width={174}
                                height={55}
                                className="object-contain"
                            />
                        </Link>
                        <Link href="/contact" className="hero-btn-link">
                            <Image
                                src="/photos/call back btn.svg"
                                alt="Call Back"
                                width={166}
                                height={55}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Mobile Button (single) */}
                    <div className="hero-btn-group hero-btn-group--mobile">
                        <Link href="/schools" className="hero-btn-link">
                            <Image
                                src="/photos/explore school btn.svg"
                                alt="Explore Schools"
                                width={137}
                                height={46}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* ── Additional SVGs (World Education Summit & Admission Open) ── */}
                    <div className="hero-awards-container">
                        <Image
                            src="/photos/World-Education-Summit 1.svg"
                            alt="World Education Summit"
                            width={341}
                            height={63}
                            className="hero-award-summit"
                        />
                        <Image
                            src="/photos/admisn opn.svg"
                            alt="Admission Open"
                            width={196}
                            height={20}
                            className="hero-award-admission"
                        />
                    </div>

                    {/* ── WhatsApp Button Integration ── */}
                    <Link
                        href="https://wa.me/your-number"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-whatsapp-btn"
                        aria-label="Contact us on WhatsApp"
                    >
                        <div className="hero-whatsapp-wrapper">
                            <Image
                                src="/photos/ic_baseline-whatsapp.svg"
                                alt="WhatsApp"
                                width={70}
                                height={70}
                                className="hero-whatsapp-icon"
                            />
                        </div>
                    </Link>

                </div>
                {/* END hero-upper */}

            </div>
            {/* END hero-inner */}
        </section>
    )
}
