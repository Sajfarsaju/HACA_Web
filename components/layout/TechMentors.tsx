"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const MENTORS = [
    {
        imgSrc: "/photos/schools/tech/Testimonial Card1.png",
        name: "Muhammad Sajfar",
        role: "MERN Stack Mentor & Developer",
    },
    {
        imgSrc: "/photos/schools/tech/Testimonial Card2.png",
        name: "Mohammed Nazil K",
        role: "Tech Researcher & Mentor",
    },
    {
        imgSrc: "/photos/schools/tech/Testimonial Card3.png",
        name: "Radhika E K",
        role: "Python Mentor",
    },
    {
        imgSrc: "/photos/schools/tech/Testimonial Card1.png",
        name: "Muhammad Sajfar",
        role: "MERN Stack Mentor & Developer",
    },
    {
        imgSrc: "/photos/schools/tech/Testimonial Card2.png",
        name: "Mohammed Nazil K",
        role: "Tech Researcher & Mentor",
    },
    {
        imgSrc: "/photos/schools/tech/Testimonial Card3.png",
        name: "Radhika E K",
        role: "Python Mentor",
    },
] as const;

/** Start on second mentor when possible so a left peek exists. */
const INITIAL_MENTOR_INDEX = Math.min(1, MENTORS.length - 1);

/* ── Responsive card sizing (same approach as TechYoutube / Placements) ── */
function getCardSizes(width: number) {
    if (width < 360) {
        // Very small mobile: single card only
        const centerW = width - 48;
        return { centerW, centerH: centerW * 1.25, sideW: 0, sideH: 0, gap: 0, showSide: false };
    } else if (width < 480) {
        // Mobile: slightly reduced sizes so side peeks are visible
        const centerW = Math.min(260, width - 80);
        const sideW = Math.max(140, Math.floor(centerW * 0.62));
        return { centerW, centerH: centerW * 1.25, sideW, sideH: sideW * 1.24, gap: 14, showSide: true };
    } else if (width < 768) {
        const centerW = Math.min(260, width - 80);
        return { centerW, centerH: centerW * 1.25, sideW: 160, sideH: 160 * 1.24, gap: 16, showSide: true };
    } else if (width < 1024) {
        const centerW = Math.min(320, width - 240);
        return { centerW, centerH: centerW * 1.25, sideW: 240, sideH: 240 * 1.24, gap: 24, showSide: true };
    } else if (width < 1280) {
        return { centerW: 360, centerH: 450, sideW: 310, sideH: 390, gap: 28, showSide: true };
    } else {
        return { centerW: 396, centerH: 495, sideW: 346, sideH: 431, gap: 32, showSide: true };
    }
}

/** Linear offset for finite carousel (no circular wrap). */
function getOffset(index: number, active: number) {
    return index - active;
}

// ── Main TechMentors Component ──────────────────────────────────────────
export function TechMentors() {
    const [activeIndex, setActiveIndex] = useState(INITIAL_MENTOR_INDEX);
    const [windowWidth, setWindowWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1280
    );

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const total = MENTORS.length;

    const canPrev = activeIndex > 0;
    const canNext = activeIndex < total - 1;

    const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
    const next = () => setActiveIndex((i) => Math.min(total - 1, i + 1));

    const { centerW, centerH, sideW, sideH, gap, showSide } = getCardSizes(windowWidth);
    const isMobileView = windowWidth < 768;

    return (
        <section className="w-full flex flex-col items-center relative overflow-hidden h-auto min-h-[828px] bg-transparent pt-0 lg:pt-[10px] xl:pt-[60px] pb-[80px] -mb-[120px] sm:mb-0 px-[clamp(16px,4vw,60px)] gap-[60px]">

            {/* Local mask — tablet gradient */}
            <style>{`
                /* Mobile background gradient style (match TechPlacementsSection) */
                .tech-mentors-mobile-glow {
                    background: radial-gradient(
                        ellipse 55% 55% at 50% 58%,
                        rgba(132, 0, 255, 0.32) 0%,
                        rgba(132, 0, 255, 0.14) 25%,
                        rgba(132, 0, 255, 0.05) 50%,
                        rgba(132, 0, 255, 0.01) 70%,
                        transparent 85%
                    );
                }
                .tech-mentors-mobile-bg {
                    overflow: visible;
                    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
                }

                .tech-mentors-gradient {
                    mask-image: radial-gradient(
                        ellipse 82% 78% at 50% 50%,
                        black 0%, black 18%,
                        rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.55) 46%,
                        rgba(0, 0, 0, 0.32) 60%, rgba(0, 0, 0, 0.14) 74%,
                        rgba(0, 0, 0, 0.05) 86%, transparent 94%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse 82% 78% at 50% 50%,
                        black 0%, black 18%,
                        rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.55) 46%,
                        rgba(0, 0, 0, 0.32) 60%, rgba(0, 0, 0, 0.14) 74%,
                        rgba(0, 0, 0, 0.05) 86%, transparent 94%
                    );
                }
                @media (min-width: 1024px) {
                    .tech-mentors-gradient {
                        mask-image:
                            linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.82) 48%, black 55%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.06) 20%, rgba(0,0,0,0.24) 36%, rgba(0,0,0,0.52) 52%, black 64%),
                            radial-gradient(ellipse 82% 78% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.16) 74%, rgba(0,0,0,0.04) 86%, transparent 96%);
                        -webkit-mask-image:
                            linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.82) 48%, black 55%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.06) 20%, rgba(0,0,0,0.24) 36%, rgba(0,0,0,0.52) 52%, black 64%),
                            radial-gradient(ellipse 82% 78% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.16) 74%, rgba(0,0,0,0.04) 86%, transparent 96%);
                        mask-composite: intersect;
                        -webkit-mask-composite: source-in;
                    }
                }
                @media (min-width: 1920px) {
                    .tech-mentors-gradient {
                        mask-image: linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, black 50%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.15) 18%, rgba(0,0,0,0.45) 32%, black 48%),
                            radial-gradient(ellipse 68% 65% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.12) 74%, transparent 90%);
                        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, black 50%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.15) 18%, rgba(0,0,0,0.45) 32%, black 48%),
                            radial-gradient(ellipse 68% 65% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.12) 74%, transparent 90%);
                        mask-composite: intersect;
                        -webkit-mask-composite: source-in;
                    }
                }

                @keyframes mentorInfoReveal {
                    from {
                        transform: translateY(110%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0%);
                        opacity: 1;
                    }
                }
            `}</style>

            {/* Mobile background gradient (match placements) */}
            <div className="absolute inset-0 z-0 pointer-events-none md:hidden overflow-x-visible overflow-y-hidden">
                <div className="absolute inset-0 tech-mentors-mobile-glow" aria-hidden />
                <div className="tech-mentors-mobile-bg absolute top-[30px] left-1/2 -translate-x-1/2 w-[140vw] max-w-none h-[520px] pointer-events-none">
                    <Image
                        src="/photos/Tech/Group 46.svg"
                        fill
                        alt=""
                        className="object-contain object-center"
                        aria-hidden
                    />
                </div>
            </div>

            {/* Mentor gradient background */}
            <div
                className="tech-mentors-gradient hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[40%] w-[120%] min-h-[820px] min-[1920px]:max-w-[1400px] min-[1920px]:w-[85%] min-[1920px]:min-h-[750px] z-0 pointer-events-none"
                style={{ aspectRatio: "1440 / 1203" }}
            >
                <Image
                    src="/photos/Tech/mentorsGradient.svg"
                    alt=""
                    fill
                    className="object-contain object-center"
                    sizes="100vw"
                    aria-hidden
                />
            </div>

            {/* ── Foreground Content ── */}
            <div className="relative z-10 flex flex-col items-center gap-[60px] w-full">
                {/* Header */}
                <div className="flex flex-col items-center gap-6 text-center max-w-[938px]">
                    <h2 className="font-outfit font-normal text-[clamp(32px,5vw,60px)] leading-[62px] tracking-[-0.02em] text-[#FFFFFF] m-0 capitalize">
                        Your Mentors
                    </h2>
                    <p className="font-outfit font-normal text-[clamp(16px,2vw,24px)] leading-[33.6px] tracking-[-0.2px] text-[#A7A7A7] m-0 max-w-[800px]">
                        You&apos;ll learn from people who&apos;ve built products, written code, and solved real problems.
                    </p>
                </div>

                {/* Carousel Stage */}
                <div
                    className="w-full relative flex items-center justify-center overflow-visible"
                    style={{ height: `${centerH + 40}px` }}
                >
                    {MENTORS.map((mentor, i) => {
                        const offset = getOffset(i, activeIndex);
                        const isCenter = offset === 0;
                        const isVisible = showSide ? Math.abs(offset) <= 1 : isCenter;

                        const cardW = isCenter ? centerW : sideW;
                        const cardH = isCenter ? centerH : sideH;

                        let translateX = 0;
                        if (offset !== 0) {
                            const centerHalf = centerW / 2;
                            const sideHalf = sideW / 2;
                            translateX = offset > 0
                                ? centerHalf + gap + sideHalf + (offset - 1) * (sideW + gap)
                                : -(centerHalf + gap + sideHalf) + (offset + 1) * (sideW + gap);
                        }

                        const isLeft = offset === -1;
                        const isRight = offset === 1;

                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    if (isLeft && canPrev) prev();
                                    if (isRight && canNext) next();
                                }}
                                className={`absolute overflow-hidden rounded-[24px] ${isCenter ? "cursor-default z-[2]" : "cursor-pointer z-[1]"} ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                                style={{
                                    width: `${cardW}px`,
                                    height: `${cardH}px`,
                                    transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.95})`,
                                    opacity: isCenter ? 1 : isVisible ? 0.8 : 0,
                                    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease, box-shadow 0.5s ease",
                                    boxShadow: isCenter ? "0 0 40px rgba(132,0,255,0.2)" : "none",
                                }}
                            >
                                {/* Gradient border ring */}
                                <div
                                    style={{
                                        position: "absolute", inset: 0, borderRadius: "24px",
                                        padding: "1px",
                                        background: `linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(135deg, rgba(255,86,0,${isCenter ? "0.6" : "0.3"}) 0%, rgba(132,0,255,${isCenter ? "0.8" : "0.45"}) 100%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor", maskComposite: "exclude",
                                        pointerEvents: "none", zIndex: 3,
                                    }}
                                />

                                {/* Image */}
                                <Image
                                    src={mentor.imgSrc}
                                    alt={mentor.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 90vw, 30vw"
                                />

                                {/* Overlay Gradient for Text Readability */}
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(70,20,200,0.25)_100%)] z-[1]" />

                                {/* Name box */}
                                {(!isMobileView || isCenter) && (
                                    <div
                                        key={isMobileView ? activeIndex : undefined}
                                        className="absolute bottom-0 left-0 right-0 flex flex-col justify-center border-t border-[rgba(140,100,255,0.2)] backdrop-blur-[28px] z-[2]"
                                        style={{
                                            height: windowWidth < 480 ? (isCenter ? "76px" : "64px") : "109px",
                                            gap: windowWidth < 480 ? (isCenter ? "6px" : "4px") : "8px",
                                            padding: windowWidth < 480 ? (isCenter ? "12px 16px" : "10px 12px") : "20px 24px",
                                            borderBottomLeftRadius: "19.58px",
                                            borderBottomRightRadius: "19.58px",
                                            background:
                                                "linear-gradient(135deg, rgba(180,120,255,0.18) 0%, rgba(132,80,255,0.12) 50%, rgba(100,50,200,0.08) 100%)",
                                            animation: isMobileView ? "mentorInfoReveal 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both" : undefined,
                                            willChange: isMobileView ? "transform, opacity" : undefined,
                                        }}
                                    >
                                        <div className="flex flex-col gap-[8px] w-full">
                                            <h4
                                                className={`font-outfit font-normal leading-none text-[#FFFFFF] m-0 text-center ${
                                                    isCenter ? "text-[26px]" : "text-[22px]"
                                                } ${windowWidth < 480 ? (isCenter ? "text-[18px]" : "text-[16px]") : ""}`}
                                            >
                                                {mentor.name}
                                            </h4>
                                            <p
                                                className={`font-outfit font-normal leading-none text-[#FFFFFF] m-0 text-center ${
                                                    isCenter ? "text-[18px]" : "text-[16px]"
                                                } ${windowWidth < 480 ? (isCenter ? "text-[13px]" : "text-[12px]") : ""}`}
                                            >
                                                {mentor.role}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Navigation — match TechProjectsSection arrow style */}
                <div className="flex gap-[10px] -mt-[50px] sm:mt-[12px]">
                    <button
                        type="button"
                        aria-label="Previous mentor"
                        onClick={() => {
                            if (!canPrev) return;
                            prev();
                        }}
                        disabled={!canPrev}
                        aria-disabled={!canPrev}
                        className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] rotate-[-180deg] opacity-70 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                    >
                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next mentor"
                        onClick={() => {
                            if (!canNext) return;
                            next();
                        }}
                        disabled={!canNext}
                        aria-disabled={!canNext}
                        className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] opacity-100 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                    >
                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                    </button>
                </div>
            </div>
        </section>
    );
}
