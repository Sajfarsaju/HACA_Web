"use client"

import Image from "next/image"
import Link from "next/link"
import { PhotoGallery } from "./PhotoGallery"
import { PressLogos } from "./PressLogos"
import { StatsSection } from "./StatsSection"
import { AboutHacaSection } from './AboutHacaSection'
import { Haca360Section } from './Haca360Section'

export function Hero() {
    return (
        <section className="hero-section">
            {/* ΓöÇΓöÇ Inner Container ΓöÇΓöÇ */}
            <div className="hero-inner">

                {/* ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
                    UPPER CONTAINER
                    (desktop: 780px wide, mobile: full width)
                    ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
                <div className="hero-upper">

                    {/* ΓöÇΓöÇ First Container: Info button + Heading + Paragraph ΓöÇΓöÇ */}
                    <div className="hero-first">

                        {/* Info Button */}
                        <div className="hero-info-btn-wrap">
                            <Image
                                src="/photos/main/Info Button.svg"
                                alt="Info"
                                width={371}
                                height={64}
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

                    {/* ΓöÇΓöÇ Button Container (desktop: two buttons, mobile: one button) ΓöÇΓöÇ */}

                    {/* Desktop Button Row */}
                    <div className="hero-btn-group hero-btn-group--desktop">
                        <Link href="/courses" className="hero-btn-link">
                            <Image
                                src="/photos/main/explore course btn.svg"
                                alt="Explore Courses"
                                width={174}
                                height={55}
                                className="object-contain"
                            />
                        </Link>
                        <Link href="/contact" className="hero-btn-link">
                            <Image
                                src="/photos/common/call back btn.svg"
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
                                src="/photos/main/explore school btn.svg"
                                alt="Explore Schools"
                                width={137}
                                height={46}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* ΓöÇΓöÇ Additional SVGs (World Education Summit & Admission Open) ΓöÇΓöÇ */}
                    <div className="hero-awards-container">
                        <Image
                            src="/photos/main/World-Education-Summit 1.svg"
                            alt="World Education Summit"
                            width={341}
                            height={63}
                            className="hero-award-summit"
                        />
                        <Image
                            src="/photos/main/admisn opn.svg"
                            alt="Admission Open"
                            width={196}
                            height={20}
                            className="hero-award-admission"
                        />
                    </div>
                </div>
                {/* END hero-upper */}

                {/* Photo Card Scrolling Gallery */}
                <PhotoGallery />

                {/* Press Logos Section */}
                <PressLogos />

                {/* Stats Section */}
                <StatsSection />

                {/* About HACA Section */}
                <AboutHacaSection />

                {/* HACA 360 Section */}
                <Haca360Section />
            </div>
            {/* END hero-inner */}
        </section>
    )
}
