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
/* Dot image (DOTsBG.svg): fade the top so it blends smoothly */
.tech-mobile-hero-dots {
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 6%, rgba(0,0,0,0.6) 14%, black 22%, black 100%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 6%, rgba(0,0,0,0.6) 14%, black 22%, black 100%);
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
}
/* Projects page: gradient not attached to dots — hide dots in mobile hero */
.tech-projects-page .tech-mobile-hero-dots {
    display: none !important;
}
/* Mobile dots bg (DOTsBG (1).svg): hide on desktop/tablet */
.tech-projects-mobile-dots-bg {
    display: none !important;
}
/* Mobile Group 23 bg: hide on desktop/tablet */
.tech-projects-mobile-group23-bg {
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

/* ── PROJECT PAGE CARDS: same gradient border and styling as course cards (orange→purple) ── */
.tech-project-card {
    position: relative;
}
.tech-project-card::before {
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

/* ── PROJECT PAGE TOOLBAR: same gradient border as course cards ── */
.tech-projects-toolbar-search,
.tech-projects-toolbar-filters,
.tech-projects-toolbar-sort {
    position: relative;
    border: 1px solid transparent !important;
}
.tech-projects-toolbar-search::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}
.tech-projects-toolbar-filters::before,
.tech-projects-toolbar-sort::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 15px;
    padding: 1px;
    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

/* Mobile-style toolbar: used for mobile + tablet (up to 1023px) */
@media (min-width: 1024px) {
    .tech-projects-toolbar-mobile {
        display: none !important;
    }
}
@media (max-width: 1023px) {
    .tech-projects-toolbar-mobile {
        display: flex;
        justify-content: center;
        margin-top: 24px;
    }
    /* Mobile toolbar: same gradient border as project cards (orange → purple) */
    .tech-projects-toolbar-mobile-search,
    .tech-projects-toolbar-mobile-all,
    .tech-projects-toolbar-mobile-sort {
        position: relative;
        border: 1px solid transparent !important;
    }
    .tech-projects-toolbar-mobile-search::before,
    .tech-projects-toolbar-mobile-all::before,
    .tech-projects-toolbar-mobile-sort::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 8.94px;
        padding: 1px;
        background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }
}

/* Small mobile: search bar row scales and pads properly */
@media (max-width: 400px) {
    .tech-projects-toolbar-mobile {
        padding-left: 12px;
        padding-right: 12px;
        margin-top: 20px;
        box-sizing: border-box;
    }
    .tech-projects-toolbar-mobile-inner {
        width: 100% !important;
        max-width: 100% !important;
        min-height: 0;
        height: auto !important;
        gap: 12px !important;
    }
    .tech-projects-toolbar-mobile-search {
        width: 100% !important;
        min-height: 36px !important;
        height: auto !important;
        padding: 6px 10px 6px 12px !important;
        border-radius: 8px !important;
        gap: 8px !important;
    }
    .tech-projects-toolbar-mobile-search::before,
    .tech-projects-toolbar-mobile-all::before,
    .tech-projects-toolbar-mobile-sort::before {
        border-radius: 8px !important;
    }
    .tech-projects-toolbar-mobile-search span {
        font-size: clamp(14px, 3.5vw, 16px) !important;
    }
    .tech-projects-toolbar-mobile-filters {
        width: 100% !important;
        min-height: 36px !important;
        height: auto !important;
        gap: 8px !important;
    }
    .tech-projects-toolbar-mobile-all {
        width: auto !important;
        min-width: 64px !important;
        height: 36px !important;
        min-height: 36px !important;
        padding: 6px 10px !important;
        border-radius: 8px !important;
    }
    .tech-projects-toolbar-mobile-all span {
        font-size: 13px !important;
    }
    .tech-projects-toolbar-mobile-sort {
        height: 36px !important;
        min-height: 36px !important;
        padding: 6px 12px !important;
        border-radius: 8px !important;
    }
    .tech-projects-toolbar-mobile-sort span {
        font-size: 13px !important;
    }
}

/* ── PROJECTS CARDS SECTION: match Tech Courses section layout and card styling ── */
.tech-projects-cards-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    padding-bottom: 200px;
    padding-left: 60px;
    padding-right: 60px;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
    overflow: hidden;
}
.tech-projects-cards-inner {
    width: 100%;
    max-width: 1320px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.tech-projects-grid-row {
    width: 100%;
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 24px;
}
.tech-project-card-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
}
.tech-project-card-title {
    width: 100%;
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0;
    color: #FFFFFF;
}
.tech-project-card-image-wrap {
    width: 100%;
    height: 186px;
    border-radius: 14px;
    overflow: hidden;
    position: relative;
}
.tech-project-card-bottom {
    width: 100%;
    min-height: 232px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
}
.tech-project-card-student {
    width: 100%;
    min-height: 40px;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
}
.tech-project-card-tech {
    width: 100%;
    min-height: 120px;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0;
    color: #FFFFFF;
}
.tech-project-card-cta {
    width: 133px;
    height: 54px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    align-self: flex-start;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    box-sizing: border-box;
    background: transparent !important;
    -webkit-tap-highlight-color: transparent;
}
.tech-project-card-cta:focus,
.tech-project-card-cta:focus-visible {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
}
.tech-project-card-cta *,
.tech-project-card-cta span,
.tech-project-card-cta img {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    display: block;
    border-radius: 10px;
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
        /* Projects header: overlap hero gradient similar to original position, without clipping search bar */
        margin-top: -150px;
        padding-top: 12px;
        background: transparent;
        align-items: center;
        text-align: center;
    }
    .tech-courses-header-section .tech-courses-hero-heading {
        font-size: clamp(24px, 7.5vw, 32px);
        font-weight: 400;
    }
    .tech-courses-header-section .tech-courses-hero-desc {
        max-width: 1275px;
        font-size: clamp(13px, 3.9vw, 16px);
        line-height: 130%;
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
    .tech-projects-page .tech-projects-cards-gradient2 {
        display: none !important;
    }
    /* Projects cards: tablet — 6 cards only, 2 per row */
    .tech-projects-page .tech-projects-cards-section {
        padding-left: clamp(24px, 4vw, 48px);
        padding-right: clamp(24px, 4vw, 48px);
        margin-top: 60px;
        margin-bottom: 80px;
    }
    .tech-projects-page .tech-projects-cards-inner {
        width: 100%;
        max-width: 1320px;
        gap: 32px;
    }
    .tech-projects-page .tech-projects-grid-row:nth-child(n+3) {
        display: none !important;
    }
    .tech-projects-page .tech-projects-grid-row {
        width: 100%;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: 20px;
    }
    .tech-projects-page .tech-project-card {
        width: calc(50% - 10px) !important;
        min-width: 280px;
        max-width: 412px;
    }
    .tech-projects-page .tech-project-card-top,
    .tech-projects-page .tech-project-card-title,
    .tech-projects-page .tech-project-card-image-wrap,
    .tech-projects-page .tech-project-card-bottom,
    .tech-projects-page .tech-project-card-student,
    .tech-projects-page .tech-project-card-tech {
        width: 100% !important;
    }
    .tech-projects-page .tech-project-card-image-wrap {
        height: auto !important;
        min-height: 160px;
    }
}

/* ════════════════════════════════════ TABLET — 769px to 1023px: navbar + cards padding/sizing (smooth when dragging) ════════════════════════════════════ */
@media (min-width: 769px) and (max-width: 1023px) {
    /* Navbar: slightly tighter gap and font so it scales nicely when resizing */
    .tech-main-hero-nav {
        gap: clamp(16px, 2.2vw, 24px);
    }
    .tech-nav-item {
        font-size: clamp(14px, 1.35vw, 16px);
    }
    .tech-main-hero-logo {
        width: clamp(160px, 14vw, 203px);
        height: auto;
        aspect-ratio: 203 / 36;
    }
    /* Projects cards: fluid padding and margins so resizing looks smooth */
    .tech-projects-page .tech-projects-cards-section {
        padding-left: clamp(28px, 5vw, 48px);
        padding-right: clamp(28px, 5vw, 48px);
        margin-top: clamp(50px, 6vw, 60px);
        margin-bottom: clamp(64px, 8vw, 80px);
    }
    .tech-projects-page .tech-projects-cards-inner {
        gap: 32px;
    }
    .tech-projects-page .tech-projects-grid-row {
        justify-content: space-between;
        gap: clamp(16px, 2vw, 24px);
    }
    .tech-projects-page .tech-project-card {
        width: calc(50% - clamp(8px, 1vw, 12px)) !important;
        min-width: 0;
        max-width: none;
        padding: clamp(12px, 1.5vw, 14px) !important;
        box-sizing: border-box;
    }
    .tech-projects-page .tech-project-card-title {
        font-size: clamp(20px, 2.2vw, 24px) !important;
    }
    .tech-projects-page .tech-project-card-image-wrap {
        min-height: clamp(140px, 18vw, 186px);
    }

    /* Projects page: show gradient on tablet — extends to last row of cards, smooth bottom transition */
    .tech-projects-page .tech-projects-cards-section {
        position: relative;
    }
    .tech-projects-page .tech-projects-cards-gradient2 {
        display: block !important;
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: min(1180px, 100% + 120px);
        bottom: 0;
        min-height: 1400px;
        opacity: 1;
        pointer-events: none;
        z-index: 0.5;
        overflow: hidden;
        /* Gradient only up to last row of cards: fade completes by ~72% so it doesn't extend deep down */
        mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 58%,
            rgba(0, 0, 0, 0.92) 64%,
            rgba(0, 0, 0, 0.5) 68%,
            transparent 72%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 58%,
            rgba(0, 0, 0, 0.92) 64%,
            rgba(0, 0, 0, 0.5) 68%,
            transparent 72%
        );
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }
    .tech-projects-page .tech-projects-cards-gradient2 img {
        object-fit: cover !important;
        object-position: center top !important;
    }

    /* Projects toolbar: tablet responsiveness (e.g. 770×509) */
    .tech-projects-toolbar > div {
        width: 100%;
        max-width: 1320px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: clamp(8px, 1.5vw, 16px);
        flex-wrap: wrap;
    }
    .tech-projects-toolbar-search {
        flex: 1 1 100%;
        max-width: 100%;
        height: 44px;
    }
    .tech-projects-toolbar-filters {
        flex: 1 1 60%;
        width: auto !important;
        min-width: 0;
        padding-inline: clamp(14px, 2.4vw, 22px) !important;
        height: 44px;
    }
    .tech-projects-toolbar-sort {
        flex: 0 1 35%;
        width: auto !important;
        min-width: 0;
        padding-inline: clamp(10px, 2vw, 18px) !important;
        height: 44px;
    }
    .tech-projects-toolbar-filters span,
    .tech-projects-toolbar-sort span {
        font-size: clamp(14px, 1.5vw, 18px) !important;
    }
}

/* Projects cards: mobile — single column by default, first 6 cards only
   + hide desktop toolbar, use mobile-style toolbar instead */
@media (max-width: 768px) {
    .tech-projects-toolbar {
        display: none !important;
    }
    /* Mobile dots background: DOTsBG (1).svg — from top of page, faded at top, stretches to bottom of content (past 6th card) */
    .tech-projects-page .tech-projects-mobile-dots-bg {
        display: block !important;
        position: absolute;
        width: 406px;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        bottom: 0;
        min-height: 3200px;
        z-index: 0;
        opacity: 1;
        overflow: hidden;
        pointer-events: none;
        mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 6%,
            rgba(0, 0, 0, 0.6) 14%,
            black 20%,
            black 97%,
            rgba(0, 0, 0, 0.6) 99%,
            transparent 100%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 6%,
            rgba(0, 0, 0, 0.6) 14%,
            black 20%,
            black 97%,
            rgba(0, 0, 0, 0.6) 99%,
            transparent 100%
        );
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }
    .tech-projects-page .tech-projects-mobile-dots-bg img {
        object-fit: cover;
        object-position: center top;
    }
    /* Mobile Group 23 (1).svg: starts at toolbar ("All" section), stretches to bottom of content (past 6th card) */
    .tech-projects-page .tech-projects-mobile-group23-bg {
        display: block !important;
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        top: 300px;
        bottom: 0;
        min-height: 3200px;
        z-index: 0;
        opacity: 1;
        overflow: hidden;
        pointer-events: none;
    }
    .tech-projects-page .tech-projects-mobile-group23-bg img {
        object-fit: cover;
        object-position: center top;
        /* Gradient extends to last card's bottom, short fade at very end */
        mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 97%,
            rgba(0, 0, 0, 0.6) 99%,
            transparent 100%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            black 97%,
            rgba(0, 0, 0, 0.6) 99%,
            transparent 100%
        );
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }

    /* Keep header above hero and dots so heading/description are visible */
    .tech-projects-page .tech-courses-header-section {
        position: relative;
        z-index: 20;
    }
    /* Cards above the dots layer; mobile section layout same as before */
    .tech-projects-page .tech-projects-cards-section {
        position: relative;
        z-index: 1;
        padding-left: 20px !important;
        padding-right: 20px !important;
        margin-top: 40px !important;
        margin-bottom: 60px !important;
        padding-bottom: 0 !important;
    }
    .tech-projects-page .tech-projects-cards-inner {
        gap: 24px;
    }
    .tech-projects-page .tech-projects-grid-row {
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
    .tech-projects-page .tech-projects-grid-row:nth-child(n+3) {
        display: none !important;
    }
    .tech-projects-page .tech-project-card {
        width: 100% !important;
        max-width: 400px;
        padding: 14px 14px 8px !important;
    }
    .tech-projects-page .tech-project-card-top {
        height: auto !important;
        width: 100% !important;
    }
    .tech-projects-page .tech-project-card-title {
        height: auto !important;
        width: 100% !important;
        font-size: clamp(18px, 4.5vw, 22px) !important;
    }
    .tech-projects-page .tech-project-card-image-wrap {
        width: 100% !important;
        height: auto !important;
        min-height: 180px;
    }
    .tech-projects-page .tech-project-card-bottom {
        width: 100% !important;
        min-height: auto !important;
        flex: none !important;
    }
    .tech-projects-page .tech-project-card-student,
    .tech-projects-page .tech-project-card-tech {
        width: 100% !important;
        font-size: 14px !important;
    }
    .tech-projects-page .tech-project-card-cta {
        width: 116px;
        height: 44px;
        margin-top: -6px;
    }
}

/* Larger mobile / small tablets: 2 cards per row when there is enough width */
@media (min-width: 600px) and (max-width: 1023px) {
    .tech-projects-page .tech-projects-cards-inner {
        gap: 20px;
    }
    .tech-projects-page .tech-projects-grid-row {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: 16px;
    }
    .tech-projects-page .tech-project-card {
        max-width: none;
        width: calc(50% - 10px) !important;
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

    /* Projects page: main cards background image (Image (5).svg) starting just above first row */
    .tech-projects-page .tech-projects-cards-section {
        position: relative;
    }
    .tech-projects-page .tech-projects-cards-bg {
        position: absolute;
        inset: 0;
        top: -20px; /* starts 20px above first card content */
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 0;
    }
    /* Projects page: Gradient2 (2).svg — starts from description, covers to halfway of last card row */
    .tech-projects-page .tech-projects-cards-gradient2 {
        display: block;
        position: absolute;
        width: 1180px;
        height: 2600px;
        top: -300px;
        left: 130px;
        opacity: 1;
        pointer-events: none;
        z-index: 0.5;
        overflow: hidden;
        /* Reveal from top; smooth fade at bottom (last card halfway) and sides */
        mask-image: linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.5) 85%, transparent 100%), linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 6%, black 15%, black 85%, rgba(0,0,0,0.5) 94%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.5) 85%, transparent 100%), linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 6%, black 15%, black 85%, rgba(0,0,0,0.5) 94%, transparent 100%);
        mask-composite: intersect;
        -webkit-mask-composite: source-in;
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
    }
    .tech-projects-page .tech-projects-cards-gradient2 img {
        object-fit: cover !important;
        object-position: center top !important;
    }
    .tech-projects-page .tech-projects-cards-inner {
        position: relative;
        z-index: 1;
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
