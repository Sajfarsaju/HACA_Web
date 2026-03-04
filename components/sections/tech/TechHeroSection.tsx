"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TechNavbar } from "./TechNavbar";


/* ─────────────────────────────────────────────────────────────────────────────
   The design canvas is 1440 × 1044 px (Figma spec).
   We scale the whole canvas uniformly so it always fills the viewport width,
   then set the outer wrapper's height to match the scaled canvas height.
   This keeps every element's proportions perfect on any desktop screen.
───────────────────────────────────────────────────────────────────────────── */

const DESIGN_W = 1440;
const DESIGN_H = 1044;
const MOBILE_DESIGN_W = 375;
const MOBILE_DESIGN_H = 706; // nav 63 + content 643

export default function TechHero() {
    const [desktopScale, setDesktopScale] = useState(1);
    const [mobileScale, setMobileScale] = useState(1);

    useEffect(() => {
        const update = () => {
            const containerWidth = Math.min(window.innerWidth, 1440);
            setDesktopScale(containerWidth / DESIGN_W);
            setMobileScale(window.innerWidth / MOBILE_DESIGN_W);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return (
        <>
            {/* ══════════════════════════════════════════════
                DESKTOP HERO (hidden on mobile <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="tech-main-hero-wrapper"
                style={{
                    height: `${DESIGN_H * desktopScale}px`,
                }}
            >
                {/* ── Inner canvas — scaled from top-left corner ── */}
                <section
                    className="tech-main-hero-canvas"
                    style={{
                        transform: `translateX(-50%) scale(${desktopScale})`,
                        transformOrigin: "top center",
                        left: "50%",
                    }}
                >
                    {/* ... (rest of desktop content) ... */}
                    {/* ── GRADIENT + ELLIPSE layer ── */}
                    <div className="tech-main-hero-bg-layer">
                        {/* Base gradient */}
                        <Image
                            src="/photos/Tech/Gradiant.svg"
                            alt="Gradient"
                            fill
                            className="tech-main-hero-bg-img"
                            priority
                        />

                        {/* Ellipse 2 — layered on top of the gradient */}
                        <div className="tech-main-hero-ellipse-wrap">
                            <Image
                                src="/photos/Tech/Ellipse 2.svg"
                                alt="Ellipse Gradient"
                                fill
                                className="tech-main-hero-bg-img"
                                priority
                            />
                        </div>
                    </div>

                    {/* ── HEADER ── */}
                    <TechNavbar />


                    {/* ── HERO TEXT SECTION ── */}
                    <div className="tech-main-hero-text-section">
                        {/* Sub-heading */}
                        <div className="tech-main-hero-subheading">
                            School for the Tech Evolution
                        </div>

                        {/* Main heading + button wrapper */}
                        <div className="tech-main-hero-heading-block">
                            {/* Main heading */}
                            <div className="tech-main-hero-title">
                                Be Part of <br />
                                What&apos;s Next in Tech
                            </div>

                            {/* Button */}
                            <div className="tech-main-hero-btn">
                                <Image
                                    src="/photos/Tech/Button Container (2).svg"
                                    alt="Get Started"
                                    width={200}
                                    height={64}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── HERO IMAGE (bust) ── */}
                    <div className="tech-main-hero-bust">
                        <Image
                            src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.png"
                            alt="Tech Bust"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>

                    {/* ── SOCIAL ICONS (left sidebar) ── */}
                    <div className="tech-main-hero-socials">
                        {/* Instagram */}
                        <div className="tech-main-hero-social-icon">
                            <Image
                                src="/photos/Tech/Social Icons.svg"
                                alt="Instagram"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* Facebook */}
                        <div className="tech-main-hero-social-icon">
                            <Image
                                src="/photos/Tech/uil_facebook.svg"
                                alt="Facebook"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* YouTube */}
                        <div className="tech-main-hero-social-icon">
                            <Image
                                src="/photos/Tech/mdi_youtube.svg"
                                alt="YouTube"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* ── COHORT / SKILLS INFO BLOCK ── */}
                    <div className="tech-main-hero-info-block">
                        {/* "Practical Tech Skills" label */}
                        <div className="tech-main-hero-info-label-top">
                            Practical <br /> Tech Skills
                        </div>

                        {/* Vector line 1 */}
                        <div className="tech-main-hero-vector-line tech-main-hero-vector-1">
                            <Image
                                src="/photos/Tech/Vector 3 (1).svg"
                                alt="Vector 1"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Arrow 2 */}
                        <div className="tech-main-hero-arrow tech-main-hero-arrow-2">
                            <Image
                                src="/photos/Tech/Arrow 2.svg"
                                alt="Arrow 2"
                                width={13}
                                height={13}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* "Cohort Learning" label */}
                        <div className="tech-main-hero-info-label-bottom">
                            Cohort <br /> Learning
                        </div>

                        {/* Vector line 3 */}
                        <div className="tech-main-hero-vector-line tech-main-hero-vector-3">
                            <Image
                                src="/photos/Tech/Vector 3.svg"
                                alt="Vector 3"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Arrow 1 */}
                        <div className="tech-main-hero-arrow tech-main-hero-arrow-1">
                            <Image
                                src="/photos/Tech/Arrow 1.svg"
                                alt="Arrow 1"
                                width={13}
                                height={13}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* ── WHATSAPP FLOATING BUTTON ── */}
                    <div className="tech-main-hero-whatsapp">
                        <Image
                            src="/photos/Tech/ic_baseline-whatsapp.svg"
                            alt="WhatsApp"
                            width={40}
                            height={40}
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    {/* ── BOTTOM STATS BAR ── */}
                    <div className="tech-main-hero-stats-bar">
                        {/* Stat 1 */}
                        <div className="tech-main-hero-stat-item tech-main-hero-stat-13">
                            <Image src="/photos/Tech/200+.svg" alt="200+" width={95} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="tech-stat-label">Students Learned</span>
                        </div>

                        {/* Stat 2 */}
                        <div className="tech-main-hero-stat-item tech-main-hero-stat-14">
                            <Image src="/photos/Tech/100-percent.svg" alt="100%" width={93} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="tech-stat-label">Placement Support</span>
                        </div>

                        {/* Stat 3 */}
                        <div className="tech-main-hero-stat-item tech-main-hero-stat-16">
                            <Image src="/photos/Tech/500+.svg" alt="500+" width={95} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="tech-stat-label">Projects Completed</span>
                        </div>
                    </div>

                </section>
            </div>

            {/* ══════════════════════════════════════════════
                MOBILE HERO (visible only on <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="tech-mobile-hero-wrapper"
                style={{
                    height: `${MOBILE_DESIGN_H * mobileScale}px`,
                }}
            >
                <div
                    className="tech-mobile-hero-canvas"
                    style={{
                        transform: `translateX(-50%) scale(${mobileScale})`,
                        transformOrigin: "top center",
                        left: "50%",
                    }}
                >
                    {/* ── Mobile Background ellipses ── */}
                    <div className="tech-mobile-bg-wrap" aria-hidden="true">
                        <div className="tech-mobile-gradient-wrap">
                            <Image
                                src="/photos/Tech/Gradient.svg"
                                alt=""
                                width={562}
                                height={132}
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className="tech-mobile-ellipse-1-wrap">
                            <Image
                                src="/photos/Tech/Ellipse 1.svg"
                                alt=""
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className="tech-mobile-ellipse-2-wrap">
                            <Image
                                src="/photos/Tech/Ellipse 2 (1).svg"
                                alt=""
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </div>

                    {/* ── Mobile Navbar (375 × 63) ── */}
                    <nav className="tech-mobile-nav">
                        <div className="tech-mobile-nav-logo">
                            <Image
                                src="/photos/Tech/tech PW 1.svg"
                                alt="HACA Tech School"
                                width={130}
                                height={23}
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className="tech-mobile-nav-menu">
                            <Image
                                src="/photos/Tech/Frame 68.svg"
                                alt="Menu"
                                width={16}
                                height={16}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </nav>

                    {/* ── Mobile content area (374 × 643) ── */}
                    <div className="tech-mobile-content">

                        {/* ── Top block: text + button (374 × 184) ── */}
                        <div className="tech-mobile-top-block">
                            <div className="tech-mobile-text-block">
                                {/* Subheading (341 × 19) */}
                                <div className="tech-mobile-subheading">
                                    School for the Tech Evolution
                                </div>
                                {/* Main title (341 × 80) */}
                                <div className="tech-mobile-title">
                                    Be Part of <br />What&apos;s Next in Tech
                                </div>
                            </div>

                            {/* CTA Button (107 × 40) */}
                            <div className="tech-mobile-btn">
                                <Image
                                    src="/photos/Tech/Button Container (2).svg"
                                    alt="I&apos;m Ready"
                                    width={107}
                                    height={40}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>

                        {/* ── Bust image (230 × 271) ── */}
                        <div className="tech-mobile-bust">
                            <Image
                                src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.png"
                                alt="Tech Bust"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>

                        {/* ── Info block (125 × 90) ── */}
                        <div className="tech-mobile-info-block">
                            <div className="tech-main-hero-info-label-top">
                                Practical <br /> Tech Skills
                            </div>
                            <div className="tech-main-hero-vector-line tech-main-hero-vector-1">
                                <Image src="/photos/Tech/Vector 3 (1).svg" alt="Vector 1" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="tech-main-hero-arrow tech-main-hero-arrow-2">
                                <Image src="/photos/Tech/Arrow 2.svg" alt="Arrow 2" width={13} height={13} style={{ objectFit: "contain" }} />
                            </div>
                            <div className="tech-main-hero-info-label-bottom">
                                Cohort <br /> Learning
                            </div>
                            <div className="tech-main-hero-vector-line tech-main-hero-vector-3">
                                <Image src="/photos/Tech/Vector 3.svg" alt="Vector 3" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="tech-main-hero-arrow tech-main-hero-arrow-1">
                                <Image src="/photos/Tech/Arrow 1.svg" alt="Arrow 1" width={13} height={13} style={{ objectFit: "contain" }} />
                            </div>
                        </div>

                        {/* ── Mobile Stats Bar (345 × 174) ── */}
                        <div className="tech-mobile-stats-bar">
                            <div className="tech-mobile-stats-inner">
                                <div className="tech-mobile-stat-row tech-mobile-stat-row-1">
                                    <Image src="/photos/Tech/200+.svg" alt="200+" width={72} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="tech-mobile-stat-label">Students Learned</span>
                                </div>
                                <div className="tech-mobile-stat-row tech-mobile-stat-row-2">
                                    <Image src="/photos/Tech/100-percent.svg" alt="100%" width={70} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="tech-mobile-stat-label">Placement Support</span>
                                </div>
                                <div className="tech-mobile-stat-row tech-mobile-stat-row-3">
                                    <Image src="/photos/Tech/500+.svg" alt="500+" width={73} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="tech-mobile-stat-label">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mobile Background Image (below hero, mobile only) ── */}
            <div className="tech-mobile-bg-image-wrap">
                <Image
                    src="/photos/Tech/Image.svg"
                    alt="Tech Background"
                    width={1442}
                    height={200}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                />
            </div>
        </>
    );
}