"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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

// ── Gradient border (softer orange → purple) ────────────────────────────
const CARD_GRAD = `linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
    linear-gradient(90deg, rgba(255,86,0,0.3) 0%, rgba(132,0,255,0.3) 100%)`;

// ── Card data ─────────────────────────────────────────────────────────────
const CARDS = [
    {
        title: "AI-Integrated Learning",
        description: "Every course uses real AI tools to solve real problems. You don't just learn about AI; you use it.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L29 13H39L32 20L35 30L24 24L13 30L16 20L9 13H19L24 4Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="1.5" />
                <line x1="20" y1="24" x2="28" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="24" y1="20" x2="24" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
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
// Card width + gap
const CARD_W = 400;
const GAP = 20;
const STEP = CARD_W + GAP; // 420px

// ── Single card shell ────────────────────────────────────────────────────
function FeatureCard({
    card,
    isCenter,
    className = "",
}: {
    card: (typeof CARDS)[0];
    isCenter: boolean;
    className?: string;
}) {
    return (
        <div className={`relative w-[400px] max-w-full h-[312px] min-h-[312px] rounded-[22px] shrink-0 transition-all duration-500 ease-in-out ${className}`}>
            {/* Gradient border ring */}
            <div
                style={{
                    position: "absolute", inset: 0, borderRadius: 22,
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
                className="absolute inset-0 rounded-[22px] backdrop-blur-[24px] pt-10 pb-10 pl-[42px] pr-[42px] flex flex-col gap-5 z-[1] transition-all duration-500 ease-in-out border border-white/10"
                style={{
                    background: isCenter ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.08)",
                }}
            >
                <div className="w-12 h-12 shrink-0">{card.icon}</div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-outfit font-semibold text-[20px] leading-[26px] tracking-[-0.01em] text-white m-0">
                        {card.title}
                    </h3>
                    <p className="font-outfit font-normal text-[14px] leading-[21px] tracking-[-0.1px] text-[#A7A7A7] m-0">
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ── Main Section ─────────────────────────────────────────────────────────
export function TechWhyChoose() {
    const [active, setActive] = useState(0);
    const isTabletOrSmaller = useIsTabletOrSmaller();

    const advance = useCallback(() => setActive(p => (p + 1) % TOTAL), []);

    useEffect(() => {
        if (!isTabletOrSmaller) {
            const t = setInterval(advance, 3500);
            return () => clearInterval(t);
        }
    }, [advance, isTabletOrSmaller]);

    const prevIdx = (active - 1 + TOTAL) % TOTAL;
    const nextIdx = (active + 1) % TOTAL;

    return (
        <section className="relative z-10 w-full flex flex-col items-center min-h-[940px] pt-[clamp(60px,10vw,140px)] pb-[80px] px-[clamp(16px,4vw,60px)] gap-[60px]">

            {/* ── Mobile + Tablet only: Rectangle 15 SVG — extends to TechCulture 1st row cards ── */}
            <div
                className="lg:hidden absolute left-0 right-0 z-0 pointer-events-none"
                style={{
                    top: 0,
                    bottom: "-600px",
                    maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 6%, rgba(0,0,0,0.6) 14%, black 22%, black 78%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.18) 95%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 6%, rgba(0,0,0,0.6) 14%, black 22%, black 78%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.18) 95%, transparent 100%)",
                }}
                aria-hidden
            >
                <Image
                    src="/photos/schools/tech/Rectangle 15.svg"
                    alt=""
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* ── Mobile + Tablet only: orange gradient on 1st card ── */}
            <div
                className="lg:hidden absolute left-1/2 z-0 pointer-events-none"
                style={{
                    top: "380px",
                    width: "min(715px, 90vw)",
                    height: "460px",
                    transform: "translateX(-50%) rotate(-164.21deg)",
                    opacity: 0.75,
                }}
                aria-hidden
            >
                <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-contain object-center" />
            </div>

            {/* ── Mobile + Tablet only: orange gradient at last card bottom — bleeds outside ── */}
            <div
                className="lg:hidden absolute left-1/2 z-0 pointer-events-none"
                style={{
                    bottom: "-380px",
                    width: "min(715px, 90vw)",
                    height: "460px",
                    transform: "translateX(-50%) rotate(-164.21deg)",
                    opacity: 0.65,
                }}
                aria-hidden
            >
                <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-contain object-center" />
            </div>

            {/* ── Header ── */}
            <div className="w-full max-w-[1319px] flex flex-col items-center gap-6 text-center z-[1] relative">
                <h2 className="font-outfit font-normal text-[clamp(32px,5vw,60px)] leading-[62px] tracking-[-0.02em] text-white text-center capitalize max-w-[938px] m-0">
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
                /* Desktop (lg+): 3-card stagger carousel */
                <div className="relative z-10 w-full max-w-[1320px] h-[448px] overflow-visible">
                    <TrackCarousel active={active} prevIdx={prevIdx} nextIdx={nextIdx} />
                </div>
            )}

        </section>
    );
}

// ── Track component handles the sliding animation ─────────────────────────
function TrackCarousel({
    active,
    prevIdx,
    nextIdx,
}: {
    active: number;
    prevIdx: number;
    nextIdx: number;
}) {
    // We always show exactly 3 cards in the fixed stagger layout.
    // Left slot (index 0) → prevIdx card  → translateY(136px)
    // Center slot (index 1) → active card → translateY(0)
    // Right slot (index 2) → nextIdx card → translateY(136px)
    // The WHOLE row slides left on each tick to give the illusion of scrolling.

    // translateX of the track shifts left by STEP on every advance.
    // We reset when we've gone TOTAL steps.
    const [trackOffset, setTrackOffset] = useState(0);
    const prevActiveRef = React.useRef(active);

    useEffect(() => {
        const prev = prevActiveRef.current;
        if (prev !== active) {
            // Determine slide direction
            const fwd = (active - prev + TOTAL) % TOTAL === 1;
            setTrackOffset(o => o + (fwd ? -STEP : STEP));
            prevActiveRef.current = active;
        }
    }, [active]);

    // Reset large offsets without visible jump (happens when wrapping)
    const resetOffset = trackOffset % (TOTAL * STEP);

    return (
        <div className="absolute top-0 left-0 w-full flex flex-row items-start justify-center h-[448px]" style={{ gap: GAP }}>
            {/* LEFT */}
            <div className="opacity-100 shrink-0 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-[136px]">
                <FeatureCard card={CARDS[prevIdx]} isCenter={true} />
            </div>

            {/* CENTER (elevated) */}
            <div className="opacity-100 shrink-0 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-0">
                <FeatureCard card={CARDS[active]} isCenter={true} />
            </div>

            {/* RIGHT */}
            <div className="opacity-100 shrink-0 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-[136px]">
                <FeatureCard card={CARDS[nextIdx]} isCenter={true} />
            </div>
        </div>
    );
}
