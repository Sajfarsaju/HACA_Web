"use client";

/**
 * Tech courses page styles. Injected globally so class names match
 * components that use .courses-section, .course-card, etc.
 */
const TECH_COURSES_CSS = `
/* ── Main container: flex column, header above cards in flow ── */
.tech-page-root {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* Global background ellipse — hidden on mobile */
@media (max-width: 768px) {
    .tech-global-bg-ellipse {
        display: none;
    }
}

/* ── HEADER: Mobile only (desktop uses header inside hero) ── */
@media (min-width: 769px) {
    .tech-courses-header-mobile-only {
        display: none !important;
    }
}
.tech-courses-header-section {
    position: relative;
    z-index: 20;
    width: 100%;
    max-width: 1275px;
    margin: -100px auto 0;
    padding: 0 clamp(20px, 4vw, 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: clamp(20px, 3vw, 40px);
    text-align: center;
    box-sizing: border-box;
}
/* Projects page: let gradient show through header area up to description */
.tech-projects-page .tech-courses-header-section {
    background: transparent;
}
/* Projects page: gradient above hero so it shows through transparent header */
.tech-projects-page .tech-mobile-hero-wrapper,
.tech-projects-page .tech-main-hero-wrapper {
    z-index: 10;
}
/* Projects page: gradient smooth top transition — fade ends at description */
.tech-projects-page .tech-projects-bg-stack {
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 8%, black 22%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 8%, black 22%);
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
}
/* Projects page: gradient not attached to dots — hide dots in mobile hero */
.tech-projects-page .tech-mobile-hero-dots {
    display: none !important;
}
.tech-courses-hero-heading {
    width: 100%;
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: clamp(28px, 4.2vw, 60px);
    line-height: 100%;
    color: #FFFFFF;
}
.tech-courses-hero-desc {
    width: 100%;
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: clamp(14px, 1.7vw, 24px);
    line-height: 130%;
    color: #A7A7A7;
}

/* ── COURSES SECTION WRAPPER ── */
.courses-section {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 60px;
    padding-bottom: 200px;
    overflow: hidden;
}

/* Background layer: Image (3).svg — desktop fixed; scales on smaller screens */
.courses-section-bg {
    position: absolute;
    top: 286px;
    left: 50%;
    transform: translateX(-50%);
    width: 1446px;
    height: 3326px;
    z-index: -1;
    opacity: 1;
    backdrop-filter: blur(0px);
    pointer-events: none;
}

/* Tablet and below: section bg scales with container */
@media (max-width: 1024px) {
    .courses-section-bg {
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100%;
        min-height: 100%;
    }
}

/* Mobile background — hidden on desktop */
.courses-mobile-bg {
    display: none;
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
}

/* ── COURSES LIST: 100% width, centered, fluid gap (desktop: 36px via clamp) ── */
.courses-list {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1370px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(20px, 4vw, 40px);
}

/* ── PROMO BOX: same gradient border as cards ── */
.tech-promo-box {
    position: relative;
    border-radius: 8px;
}
.tech-promo-box::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 8px;
    padding: 1px;
    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

/* ── CARD: same gradient border as TechProjectsSection (orange→purple) ── */
.course-card {
    width: 95%;
    max-width: 1302px;
    height: auto;
    border-radius: 22px;
    border: 1px solid transparent;
    padding: clamp(20px, 4vw, 30px);
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 4vw, 40px);
    position: relative;
    box-shadow: 0px 4px 4px 0px #00000040;
    backdrop-filter: blur(12px);
    background: #D9D9D91A;
}
.course-card::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 22px;
    padding: 1px;
    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

/* ── LABEL BADGE ── */
/* Wrapper matches SVG rect (180×43, rx=10); no extra border/blur so SVG outer line is the only border */
.course-label-wrap {
    width: 180px;
    height: 43px;
    border-radius: 10px;
    padding: 0;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    box-sizing: border-box;
}
.course-label-wrap > span {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
}
.course-label-wrap img,
.course-label-wrap .course-label-img {
    object-fit: cover !important;
    /* SVG viewBox 0 0 188 51; content rect at x=4,y=0. Align so rect edges meet wrapper (no gap/double line) */
    object-position: calc(-4 * 100% / 188) 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: block;
    vertical-align: top;
}

/* ── TOP ROW ── */
.course-top-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 75px;
}
.course-title-col {
    width: 730px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 0;
}
.course-title {
    width: 500px;
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    color: #FFFFFF;
}
.course-duration-col {
    width: 236px;
    text-align: right;
    display: flex;
    flex-direction: column;
    font-family: 'Outfit', sans-serif;
    color: #FFFFFF;
}
.course-duration-label {
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
}
.course-duration-value {
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    margin: 4px 0;
}
.course-mode {
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
}

/* ── DESCRIPTION ── */
.course-desc {
    width: 691px;
    margin: 0;
    margin-top: 30px;
    white-space: pre-line;
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 125%;
    color: #FFFFFF;
    opacity: 0.8;
}

/* ── BOTTOM ROW ── */
.course-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
    width: 100%;
}
.course-lists-wrap {
    display: flex;
    gap: 60px;
}
.course-list-col {
    width: 310px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.course-list-heading {
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
}
.course-list-items {
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    opacity: 0.8;
}
.course-btn-wrap {
    width: 130px;
    height: 44px;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
}

/* ════════════════════════════════════ MOBILE — max-width 768px ════════════════════════════════════ */
@media (max-width: 768px) {
    /* Header gradient: match Res courses copy.svg — scale 375×160, blur/glow, top-aligned */
    .tech-page-root .tech-mobile-gradient-wrap {
        position: absolute;
        width: 375px;
        height: 160px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
        overflow: visible;
        z-index: 1;
    }
    .tech-page-root .tech-mobile-gradient-wrap img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain;
        object-position: top center;
    }
    /* Hero height: gradient extends through header into top card area, no extra gap above cards */
    .tech-page-root .tech-mobile-hero-wrapper {
        height: 280px !important;
        min-height: 280px;
    }
    /* Remove purple band below top gradient: solid overlay from 160px down for clean transition to dark bg */
    .tech-page-root .tech-mobile-bg-wrap::after {
        content: "";
        position: absolute;
        top: 160px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #0B0B0B;
        z-index: 0;
        pointer-events: none;
    }
    /* Header section: overlap mobile hero; solid bg extends to first card (no purple gradient) */
    .tech-courses-header-section {
        margin-top: -90px;
        padding: 0 20px 40px;
        gap: clamp(16px, 4vw, 20px);
        background: #0B0B0B;
    }
    .tech-projects-page .tech-courses-header-section {
        background: transparent;
    }
    .tech-courses-header-section .tech-courses-hero-heading {
        font-size: clamp(24px, 8vw, 30px);
    }
    .tech-courses-header-section .tech-courses-hero-desc {
        font-size: clamp(12px, 3.7vw, 14px);
    }
    .courses-section .courses-section-group29 {
        display: none;
    }
    /* Gap between header and first card; header padding provides solid bg */
    .courses-section {
        margin-top: 0;
        padding: 0 20px 100px 20px;
    }
    /* Group 23: extends to 6th card only; stops exactly after 6th card (no gradient in bottom padding) */
    .courses-mobile-bg {
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 100px;
    }
    /* Brighter gradient at top for first card; gradually darkens downward; smooth fade from middle of 6th card into dark bg */
    .courses-mobile-bg img {
        object-fit: cover !important;
        object-position: center top !important;
        mask-image: linear-gradient(to bottom, black 0%, black 82%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 0%, black 82%, transparent 100%);
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }
    /* Background glow starts at top of first card (top of section content) */
    .courses-section-bg {
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100%;
    }
    .courses-list {
        width: 100%;
        gap: clamp(20px, 4vw, 40px);
        align-items: center;
    }
    /* Card: 95% width, no min-height so content stacks without gap after writings */
    .course-card {
        width: 95%;
        max-width: 1302px;
        height: auto;
        min-height: 0;
        padding: clamp(20px, 4vw, 30px);
        gap: 16px;
        flex-direction: column;
        border-radius: 22px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: #D9D9D91A;
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        backdrop-filter: blur(12px);
    }
    .course-label-wrap {
        width: 130px;
        height: 32px;
        border-radius: 8px;
        padding: 0;
    }
    /* Hide Frame 1984078075 (1).svg label and its outer wrap on mobile only */
    .course-label-wrap:has(img[src*="1984078075"]) {
        display: none !important;
    }
    .course-top-row {
        flex-direction: column;
        height: auto;
        gap: 8px;
    }
    .course-title-col {
        width: 100%;
        gap: 6px;
        margin-bottom: 0;
    }
    .course-title {
        width: 100%;
        font-size: 26px;
        font-weight: 500;
        font-family: 'Outfit', sans-serif;
        margin-bottom: 12px;
    }
    /* Duration and Mode: container 304×36, two lines, Outfit 14px/400 */
    .course-duration-col {
        width: 304px;
        height: 36px;
        opacity: 1;
        text-align: left;
        display: block;
        box-sizing: border-box;
    }
    .course-duration-label,
    .course-duration-value,
    .course-mode {
        font-family: 'Outfit', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0;
        color: #FFFFFF;
    }
    .course-duration-label {
        display: inline;
    }
    .course-duration-value {
        margin: 0 0 0 4px;
        display: inline;
    }
    .course-mode {
        display: block;
        margin-top: 6px;
    }
    .course-desc {
        width: 100%;
        font-size: 14px;
        line-height: 140%;
        margin-top: 30px;
        font-family: 'Outfit', sans-serif;
        font-weight: 300;
    }
    .course-bottom-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        margin-top: 0;
    }
    .course-lists-wrap {
        flex-direction: column;
        gap: 12px;
        width: 100%;
    }
    .course-list-col {
        width: 100%;
    }
    .course-list-heading {
        font-size: 14px;
        font-weight: 300;
        font-family: 'Outfit', sans-serif;
        margin-top: 14px;
        margin-bottom: 10px;
    }
    .course-list-items {
        font-size: 14px;
        font-weight: 300;
        font-family: 'Outfit', sans-serif;
        padding-left: 10px;
    }
    .course-btn-wrap {
        width: 133px;
        height: 54px;
    }
}

/* ════════════════════════════════════ TABLET — 769px to 1024px: smooth gradient fade ════════════════════════════════════ */
@media (min-width: 769px) and (max-width: 1024px) {
    /* Smooth fade blend from gradient to dark background; remove harsh cutoff */
    .tech-page-root .tech-main-hero-bg-layer::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(11, 11, 11, 0.15) 65%, rgba(11, 11, 11, 0.6) 85%, #0B0B0B 100%);
        z-index: 2;
        pointer-events: none;
    }
}

/* Gradient2: desktop only — hidden below 1024px */
@media (max-width: 1023px) {
    .courses-section-gradient2 {
        display: none !important;
    }
    .tech-projects-toolbar {
        display: none !important;
    }
}

/* ════════════════════════════════════ DESKTOP — 1024px+: cards spacing + gradient ════════════════════════════════════ */
@media (min-width: 1024px) {
    /* First 3 cards: keep duration value on a single line in top-right */
    .courses-list .course-card:nth-child(-n + 3) .course-duration-value {
        white-space: nowrap;
    }

    /* Match mobile bullet indent: left padding for course list items */
    .course-list-items {
        padding-left: 10px;
    }

    /* Ensure consistent 30px gap from heading row to description for all cards */
    .course-top-row {
        height: auto;
    }
    .course-desc {
        margin-top: 10px;
    }

    /* Gradient2 visible inside cards container; extend to 6th card halfway with soft end */
    .courses-section-gradient2 {
        display: block;
        bottom: 0;
        height: auto !important;
        min-height: 2400px;
    }
    .courses-section-gradient2 img {
        object-fit: cover !important;
        object-position: center top !important;
    }
    /* Soft transition at bottom: gradient fades into background */
    .courses-section-gradient2::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 28%;
        background: linear-gradient(to bottom, transparent 0%, rgba(11, 11, 11, 0.5) 45%, #0B0B0B 100%);
        z-index: 1;
        pointer-events: none;
    }
    /* Smooth horizontal fade on Gradient2 itself: soften left/right edges behind cards */
    .courses-section-gradient2::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, #0B0B0B 0%, transparent 15%, transparent 85%, #0B0B0B 100%);
        z-index: 2;
        pointer-events: none;
    }
    /* Extend gradient to bottom of section so it reaches center of 6th card; no fixed height cutoff */
    .courses-section-bg {
        top: 286px;
        bottom: 0;
        height: auto;
        min-height: 1200px;
    }
    .courses-section-bg img {
        object-fit: cover !important;
        object-position: center top !important;
    }
    /* Smooth bottom fade: no hard cutoff into background */
    .courses-section-bg::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 35%;
        background: linear-gradient(to bottom, transparent 0%, rgba(11, 11, 11, 0.4) 50%, #0B0B0B 100%);
        z-index: 1;
        pointer-events: none;
    }
    /* Smooth horizontal fade: left and right edges blend into background */
    .courses-section-bg::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, #0B0B0B 0%, transparent 12%, transparent 88%, #0B0B0B 100%);
        z-index: 2;
        pointer-events: none;
    }
}

/* Larger mobile: two columns for What You'll Learn / Career Roles */
@media (min-width: 420px) and (max-width: 768px) {
    .course-lists-wrap {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
    }
    .course-list-col {
        width: calc(50% - 10px);
        min-width: 0;
    }
}
`;

export function TechCoursesStyles() {
    return <style dangerouslySetInnerHTML={{ __html: TECH_COURSES_CSS }} />;
}
