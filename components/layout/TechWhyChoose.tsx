"use client";
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ── Responsive breakpoints ──────────────────────────────────────────────────
function useIsTabletOrSmaller() {
    const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
    useEffect(() => {
        const check = () => setIsTabletOrSmaller(window.innerWidth < 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isTabletOrSmaller;
}

// ── Card border: orange to purple gradient (matches TechMentors reference) ──
const CARD_GRAD = `linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
    linear-gradient(135deg, rgba(255,86,0,0.6) 0%, rgba(132,0,255,0.8) 100%)`;

// ── Card data ─────────────────────────────────────────────────────────────
const CARDS = [
    {
        title: "AI-Integrated Learning",
        description: "Every course uses real AI tools to solve real problems. You don't just learn about AI; you use it.",
        icon: (
            <div className="relative w-full h-full">
                <Image src="/photos/Tech/Group.svg" alt="AI Icon" fill className="object-contain" />
            </div>
        ),
    },
    {
        title: "Project-First Approach",
        description: "50+ projects to build a strong portfolio from day one.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="10" width="36" height="28" rx="4" stroke="white" strokeWidth="1.5" />
                <path d="M14 26L20 32L34 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Cohort-Based Learning",
        description: "Study in small groups of 6–12 with live discussions and mentor feedback.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="16" r="6" stroke="white" strokeWidth="1.5" />
                <path d="M12 38C12 31.4 17.4 26 24 26C30.6 26 36 31.4 36 38" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="18" r="4" stroke="white" strokeWidth="1.2" />
                <path d="M3 36C3 31.6 6.2 28 10 28" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="38" cy="18" r="4" stroke="white" strokeWidth="1.2" />
                <path d="M45 36C45 31.6 41.8 28 38 28" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Confidence & Career Growth",
        description: "We help you grow as a person, communicate effectively, and think like a techpreneur.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="18" r="7" stroke="white" strokeWidth="1.5" />
                <path d="M16 42C16 36.5 19.6 32 24 32C28.4 32 32 36.5 32 42" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M37 8L38.5 12L43 13L39.5 16.5L40.5 21L37 19L33.5 21L34.5 16.5L31 13L35.5 12Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Industry Exposure & Guest Sessions",
        description: "Guest sessions, business talks, and real-world advice to help gain industry updates and insights.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="1.5" />
                <path d="M24 8C18 14 18 34 24 40" stroke="white" strokeWidth="1.2" />
                <path d="M24 8C30 14 30 34 24 40" stroke="white" strokeWidth="1.2" />
                <line x1="8" y1="24" x2="40" y2="24" stroke="white" strokeWidth="1.2" />
                <line x1="10" y1="16" x2="38" y2="16" stroke="white" strokeWidth="1.2" />
                <line x1="10" y1="32" x2="38" y2="32" stroke="white" strokeWidth="1.2" />
            </svg>
        ),
    },
    {
        title: "Team Up Across Campuses",
        description: "Work with students from other schools to build even better projects and get fresh perspectives.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="18" width="18" height="14" rx="3" stroke="white" strokeWidth="1.5" />
                <rect x="26" y="18" width="18" height="14" rx="3" stroke="white" strokeWidth="1.5" />
                <line x1="22" y1="25" x2="26" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="13" cy="12" r="4" stroke="white" strokeWidth="1.2" />
                <circle cx="35" cy="12" r="4" stroke="white" strokeWidth="1.2" />
            </svg>
        ),
    },
];

const TOTAL = CARDS.length;
const CARD_W_MAX = 400;
const CARD_H_RATIO = 312 / 400;
/** Gap scales slightly with viewport; keeps three cards + 2 gaps inside usable width */
function carouselGap(usableWidth: number) {
    return Math.max(12, Math.min(20, Math.round(usableWidth * 0.018)));
}
/** Fits 3 cards + 2 gaps in usable width without clipping side cards; capped at design max */
function carouselCardWidth(usableWidth: number) {
    const gap = carouselGap(usableWidth);
    const raw = (usableWidth - 2 * gap) / 3;
    return Math.max(220, Math.min(CARD_W_MAX, Math.floor(raw)));
}

/** Three full copies: seamless loop (reset when crossing middle → end of 2nd copy) */
const TRIPLE: (typeof CARDS)[number][] = [...CARDS, ...CARDS, ...CARDS];

// ── Single card shell ────────────────────────────────────────────────────
function FeatureCard({
    card,
    isCenter,
    className = "",
    /** Set in carousel so width tracks viewport; omit for stacked / tablet layout */
    widthPx,
}: {
    card: (typeof CARDS)[0];
    isCenter: boolean;
    className?: string;
    widthPx?: number;
}) {
    const w = widthPx ?? CARD_W_MAX;
    const h = Math.round(w * CARD_H_RATIO);
    const padX = Math.round(42 * (w / CARD_W_MAX));
    const padY = Math.round(40 * (w / CARD_W_MAX));
    const radius = Math.max(16, Math.round(22 * (w / CARD_W_MAX)));
    const isFluid = widthPx != null;

    return (
        <div
            className={`relative max-w-full rounded-[22px] shrink-0 transition-all duration-500 ease-in-out ${isFluid ? "" : "w-[400px] h-[312px] min-h-[312px]"} ${className}`}
            style={
                isFluid
                    ? { width: w, height: h, minHeight: h, borderRadius: radius }
                    : undefined
            }
        >
            {/* Gradient border ring */}
            <div
                style={{
                    position: "absolute", inset: 0, borderRadius: radius,
                    padding: "1px", background: CARD_GRAD,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor", maskComposite: "exclude",
                    pointerEvents: "none", zIndex: 2,
                    opacity: isCenter ? 1 : 0.75,
                    transition: "opacity 0.5s ease",
                }}
            />
            {/* Card content */}
            <div
                className="absolute inset-0 backdrop-blur-[24px] flex flex-col z-[1] transition-all duration-500 ease-in-out border border-white/10"
                style={{
                    borderRadius: radius,
                    padding: `${padY}px ${padX}px`,
                    gap: Math.max(12, Math.round(20 * (w / CARD_W_MAX))),
                    background: isCenter ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.08)",
                }}
            >
                <div
                    className="relative shrink-0"
                    style={{
                        width: Math.round(48 * (w / CARD_W_MAX)),
                        height: Math.round(48 * (w / CARD_W_MAX)),
                    }}
                >
                    {card.icon}
                </div>
                <div className="flex flex-col gap-3">
                    <h3
                        className="font-outfit font-semibold text-white m-0 tracking-[-0.01em]"
                        style={{
                            fontSize: Math.max(16, Math.min(20, Math.round(20 * (w / CARD_W_MAX)))),
                            lineHeight: 1.3,
                        }}
                    >
                        {card.title}
                    </h3>
                    <p
                        className="font-outfit font-normal text-white m-0 tracking-[-0.1px]"
                        style={{
                            fontSize: Math.max(12, Math.min(14, Math.round(14 * (w / CARD_W_MAX)))),
                            lineHeight: 1.5,
                        }}
                    >
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ── Main Section ─────────────────────────────────────────────────────────
export function TechWhyChoose() {
    const isTabletOrSmaller = useIsTabletOrSmaller();

    return (
        <section className="relative z-10 w-full flex flex-col items-center min-h-[940px] pt-[clamp(60px,10vw,140px)] pb-[80px] px-[clamp(16px,4vw,60px)] gap-[60px]">

            {/* ── Header ── */}
            <div className="w-full max-w-[1319px] flex flex-col items-center gap-6 text-center z-[1] relative">
                <h2 className="font-outfit font-normal text-[clamp(32px,5vw,60px)] leading-[62px] tracking-[-0.02em] text-center capitalize max-w-[938px] m-0 text-white">
                    Why Choose Smarter Learning with<br className="hidden md:block" /> Us?
                </h2>
                <p className="font-outfit font-normal text-[clamp(16px,2vw,24px)] leading-[33.6px] tracking-[-0.2px] text-[#A7A7A7] text-center max-w-[1128px] m-0">
                    Tech School by Haris&amp;Co Academy is a beginner-friendly, industry-aligned tech learning program
                    designed to help students and professionals build strong foundations in software, design, and digital skills.
                </p>
            </div>

            {/* ── Cards: tablet & smaller = single column; desktop = 3-card carousel ── */}
            {isTabletOrSmaller ? (
                /* Tablet and smaller: all cards in a single column, one per row */
                <div className="w-full max-w-[420px] md:max-w-[400px] flex flex-col items-center gap-6 relative z-[1]">
                    {CARDS.map((card, idx) => (
                        <FeatureCard
                            key={idx}
                            card={card}
                            isCenter={true}
                            className="w-full max-w-full"
                        />
                    ))}
                </div>
            ) : (
                /* Desktop (lg+): 3-card stagger carousel — horizontal padding avoids clipping on narrow desktop */
                <div className="relative z-10 w-full max-w-[1320px] overflow-visible px-[clamp(8px,2.5vw,28px)]">
                    <TrackCarousel />
                </div>
            )}

        </section>
    );
}

/*
 * ── Carousel & card animation (desktop TrackCarousel) ────────────────────────
 *
 * CAROUSEL (horizontal): The track is three copies of the same card list (TRIPLE).
 * slideIndex moves forward only (TOTAL → 2×TOTAL). Each tick, x animates with a
 * spring (TRACK_SPRING) so the strip slides—new center card enters from the right
 * (LTR). At the end of the middle copy (slideIndex === 2×TOTAL), the same frame
 * as the first card repeats; we reset slideIndex to TOTAL with duration 0 so the
 * loop is seamless (no big rewind across the deck). Autoplay every 3500 ms.
 *
 * CARD CHANGE (vertical stagger): Each slot is a motion.div whose y is 0 for the
 * centered card and ySide for neighbours (scaled from 136px by card width).
 * STAGGER_SPRING handles that vertical motion when the center index changes.
 *
 * Responsive: card width and gap come from the measured viewport so side cards
 * are not clipped on smaller desktop widths.
 *
 * Pointer / cursor animation (elsewhere): the tech-school page uses
 * components/tech/TechDotsBackground.tsx — a canvas dot grid that reacts to
 * mouse/touch position (repulsion + spring), not the carousel above.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const TRACK_SPRING = {
    type: "spring" as const,
    stiffness: 118,
    damping: 26,
    mass: 0.95,
};

const STAGGER_SPRING = {
    type: "spring" as const,
    stiffness: 260,
    damping: 32,
    mass: 0.88,
};

// ── Sliding track: triple strip + instant reset at duplicate → seamless cycle (always forward) ──
function TrackCarousel() {
    const viewportRef = useRef<HTMLDivElement>(null);
    const [usableW, setUsableW] = useState(1200);
    /** Centered slot in TRIPLE: second copy [TOTAL .. 2*TOTAL], then reset to TOTAL (invisible) */
    const [slideIndex, setSlideIndex] = useState(TOTAL);
    const [instantTransition, setInstantTransition] = useState(false);
    const slideIndexRef = useRef(slideIndex);
    slideIndexRef.current = slideIndex;

    useLayoutEffect(() => {
        const el = viewportRef.current;
        if (!el) return;
        const measure = () => setUsableW(el.clientWidth);
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const id = setInterval(() => {
            setSlideIndex((s) => {
                if (s >= 2 * TOTAL) return s;
                return s + 1;
            });
        }, 3500);
        return () => clearInterval(id);
    }, []);

    const onTrackAnimationComplete = useCallback(() => {
        if (slideIndexRef.current !== 2 * TOTAL) return;
        setInstantTransition(true);
        setSlideIndex(TOTAL);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setInstantTransition(false));
        });
    }, []);

    const gap = carouselGap(usableW);
    const cardW = carouselCardWidth(usableW);
    const step = cardW + gap;
    const ySide = Math.round(136 * (cardW / CARD_W_MAX));
    const rowH = Math.round(cardW * CARD_H_RATIO) + ySide;
    const base = usableW / 2 - cardW / 2;
    /** Forward step: strip moves left so the next card enters from the right (natural LTR carousel) */
    const trackX = base - slideIndex * step;

    return (
        <div
            ref={viewportRef}
            className="relative w-full overflow-x-hidden overflow-y-visible"
            style={{ height: rowH }}
            aria-roledescription="carousel"
        >
            <motion.div
                className="flex flex-row items-start justify-start will-change-transform"
                style={{ gap }}
                initial={false}
                animate={{ x: trackX }}
                transition={instantTransition ? { duration: 0 } : TRACK_SPRING}
                onAnimationComplete={onTrackAnimationComplete}
            >
                {TRIPLE.map((card, i) => {
                    const isCenter = i === slideIndex;
                    return (
                        <motion.div
                            key={i}
                            className="shrink-0"
                            animate={{ y: isCenter ? 0 : ySide }}
                            transition={STAGGER_SPRING}
                        >
                            <FeatureCard card={card} isCenter={true} widthPx={cardW} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
