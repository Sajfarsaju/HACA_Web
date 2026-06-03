"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type TechMentor = {
    imgSrc: string;
    name: string;
    role: string;
};

const FALLBACK_MENTORS: TechMentor[] = [
    { imgSrc: "/photos/schools/tech/Testimonial Card1.webp", name: "Muhammad Sajfar", role: "MERN Stack Mentor & Developer" },
    { imgSrc: "/photos/schools/tech/Testimonial Card2.webp", name: "Mohammed Nazil K", role: "Tech Researcher & Mentor" },
    { imgSrc: "/photos/schools/tech/Testimonial Card3.webp", name: "Radhika E K", role: "Python Mentor" },
    { imgSrc: "/photos/schools/tech/Testimonial Card1.webp", name: "Muhammad Sajfar", role: "MERN Stack Mentor & Developer" },
    { imgSrc: "/photos/schools/tech/Testimonial Card2.webp", name: "Mohammed Nazil K", role: "Tech Researcher & Mentor" },
    { imgSrc: "/photos/schools/tech/Testimonial Card3.webp", name: "Radhika E K", role: "Python Mentor" },
];

const INITIAL_MENTOR_INDEX = Math.min(1, FALLBACK_MENTORS.length - 1);

function getCardSizes(width: number) {
    if (width < 360) {
        const centerW = width - 48;
        return { centerW, centerH: centerW * 1.25, sideW: 0, sideH: 0, gap: 0, showSide: false };
    }
    if (width < 480) {
        const centerW = Math.min(260, width - 80);
        const sideW = Math.max(140, Math.floor(centerW * 0.62));
        return { centerW, centerH: centerW * 1.25, sideW, sideH: sideW * 1.24, gap: 14, showSide: true };
    }
    if (width < 768) {
        const centerW = Math.min(260, width - 80);
        return { centerW, centerH: centerW * 1.25, sideW: 160, sideH: 160 * 1.24, gap: 16, showSide: true };
    }
    if (width < 1024) {
        const centerW = Math.min(320, width - 240);
        return { centerW, centerH: centerW * 1.25, sideW: 240, sideH: 240 * 1.24, gap: 24, showSide: true };
    }
    if (width < 1280) {
        return { centerW: 360, centerH: 450, sideW: 310, sideH: 390, gap: 28, showSide: true };
    }
    return { centerW: 396, centerH: 495, sideW: 346, sideH: 431, gap: 32, showSide: true };
}

function getOffset(index: number, active: number, loop: boolean, total: number) {
    if (!loop) {
        return index - active;
    }

    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

function MentorInfoBox({
    height,
    gap,
    padding,
    name,
    role,
    windowWidth,
    isCenter,
}: {
    height: string;
    gap: string;
    padding: string;
    name: string;
    role: string;
    windowWidth: number;
    isCenter: boolean;
}) {
    const [entered, setEntered] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setEntered(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div
            className={`mentor-info-box${entered ? "" : " entering"} absolute bottom-0 left-0 right-0 z-[2] flex flex-col justify-center border-t border-[rgba(140,100,255,0.2)] backdrop-blur-[28px]`}
            style={{
                height,
                gap,
                padding,
                borderBottomLeftRadius: "19.58px",
                borderBottomRightRadius: "19.58px",
                background:
                    "linear-gradient(135deg, rgba(180,120,255,0.18) 0%, rgba(132,80,255,0.12) 50%, rgba(100,50,200,0.08) 100%)",
            }}
        >
            <div className="flex w-full flex-col gap-[6px]">
                <h4
                    className={`m-0 text-center font-outfit font-normal leading-none text-white ${windowWidth < 480 ? (isCenter ? "text-[13px]" : "text-[11px]") : isCenter ? "text-[20px]" : "text-[17px]"}`}
                >
                    {name}
                </h4>
                <p
                    className={`m-0 text-center font-outfit font-normal leading-none text-white ${windowWidth < 480 ? (isCenter ? "text-[10px]" : "text-[9px]") : isCenter ? "text-[14px]" : "text-[12px]"}`}
                >
                    {role}
                </p>
            </div>
        </div>
    );
}

export type TechMentorsCarouselProps = {
    className?: string;
    showBackgroundEffects?: boolean;
    showNavigation?: boolean;
    /** When set, advances slides on an interval (loops). */
    autoAdvanceMs?: number;
    navigationClassName?: string;
};

/** Shared mentor carousel (cards, peeks, arrows) used on tech school and SEO pages. */
export function TechMentorsCarousel({
    className = "",
    showBackgroundEffects = true,
    showNavigation = true,
    autoAdvanceMs,
    navigationClassName = "flex gap-[10px] -mt-[50px] sm:mt-[12px]",
}: TechMentorsCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(INITIAL_MENTOR_INDEX);
    const [windowWidth, setWindowWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1280,
    );
    const [MENTORS, setMENTORS] = useState<TechMentor[]>([]);
    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/mentors?school=Tech%20School`;
        fetch(url)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                const list: TechMentor[] = Array.isArray(data?.mentors)
                    ? data.mentors.map((m: { photoUrl: string; name: string; designation: string }) => ({
                          imgSrc: m.photoUrl,
                          name: m.name,
                          role: m.designation,
                      }))
                    : [];
                setMENTORS(list);
                if (list.length > 0) setActiveIndex(Math.min(1, list.length - 1));
            })
            .catch(() => {});
    }, []);

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const total = MENTORS.length;
    const loop = autoAdvanceMs != null && autoAdvanceMs > 0;
    const canPrev = loop || activeIndex > 0;
    const canNext = loop || activeIndex < total - 1;
    const prev = () =>
        setActiveIndex((i) => (loop ? (i - 1 + total) % total : Math.max(0, i - 1)));
    const next = () =>
        setActiveIndex((i) => (loop ? (i + 1) % total : Math.min(total - 1, i + 1)));

    useEffect(() => {
        if (!autoAdvanceMs || autoAdvanceMs <= 0) return;
        if (total === 0) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const timer = setInterval(() => {
            setActiveIndex((i) => (i + 1) % total);
        }, autoAdvanceMs);
        return () => clearInterval(timer);
    }, [autoAdvanceMs, total]);

    if (total === 0) return null;

    const { centerW, centerH, sideW, sideH, gap, showSide } = getCardSizes(windowWidth);
    const isMobileView = windowWidth < 768;

    return (
        <div className={`relative w-full overflow-visible ${className}`}>
            <style>{`
                ${showBackgroundEffects ? `
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
                ` : ""}
                .mentor-info-box {
                    transform: translateY(0%);
                    opacity: 1;
                    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1), opacity 160ms ease-out;
                }
                .mentor-info-box.entering {
                    transform: translateY(50%);
                    opacity: 0;
                }
            `}</style>

            {showBackgroundEffects ? (
                <>
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible md:hidden">
                        <div className="tech-mentors-mobile-glow absolute inset-0" aria-hidden />
                        <div className="tech-mentors-mobile-bg pointer-events-none absolute left-1/2 top-[30px] h-[520px] w-[140vw] max-w-none -translate-x-1/2">
                            <Image
                                src="/photos/Tech/Group 46.svg"
                                fill
                                alt=""
                                className="object-contain object-center"
                                aria-hidden
                            />
                        </div>
                    </div>

                    <div
                        className="tech-mentors-gradient pointer-events-none absolute left-1/2 top-[40%] z-0 hidden min-h-[820px] w-[120%] -translate-x-1/2 -translate-y-1/2 md:block min-[1920px]:max-w-[1400px] min-[1920px]:w-[85%] min-[1920px]:min-h-[750px]"
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
                </>
            ) : null}

            <div className="relative z-10 flex w-full flex-col items-center">
                <div
                    className="relative flex w-full items-center justify-center overflow-visible"
                    style={{ height: `${centerH + 40}px` }}
                    onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
                    onTouchEnd={(e) => {
                        if (touchStartX.current === null) return;
                        const delta = e.changedTouches[0].clientX - touchStartX.current;
                        touchStartX.current = null;
                        if (delta < -50 && canNext) next();
                        else if (delta > 50 && canPrev) prev();
                    }}
                >
                    {MENTORS.map((mentor, i) => {
                        const offset = getOffset(i, activeIndex, loop, total);
                        const isCenter = offset === 0;
                        const isVisible = showSide ? Math.abs(offset) <= 1 : isCenter;
                        const cardW = isCenter ? centerW : sideW;
                        const cardH = isCenter ? centerH : sideH;

                        let translateX = 0;
                        if (offset !== 0) {
                            const centerHalf = centerW / 2;
                            const sideHalf = sideW / 2;
                            translateX =
                                offset > 0
                                    ? centerHalf + gap + sideHalf + (offset - 1) * (sideW + gap)
                                    : -(centerHalf + gap + sideHalf) + (offset + 1) * (sideW + gap);
                        }

                        const isLeft = offset === -1;
                        const isRight = offset === 1;
                        const sideInteractive = showNavigation && !loop;

                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    if (!sideInteractive) return;
                                    if (isLeft && canPrev) prev();
                                    if (isRight && canNext) next();
                                }}
                                className={`absolute overflow-hidden rounded-[24px] ${isCenter ? "z-[2] cursor-default" : sideInteractive ? "z-[1] cursor-pointer" : "z-[1] cursor-default"} ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                                style={{
                                    width: `${cardW}px`,
                                    height: `${cardH}px`,
                                    transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.95})`,
                                    opacity: isCenter ? 1 : isVisible ? 0.8 : 0,
                                    transition:
                                        "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease, box-shadow 0.5s ease",
                                    boxShadow: isCenter ? "0 0 40px rgba(132,0,255,0.2)" : "none",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "24px",
                                        padding: "1px",
                                        background: `linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(135deg, rgba(255,86,0,${isCenter ? "0.6" : "0.3"}) 0%, rgba(132,0,255,${isCenter ? "0.8" : "0.45"}) 100%)`,
                                        WebkitMask:
                                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        pointerEvents: "none",
                                        zIndex: 3,
                                    }}
                                />

                                <Image
                                    src={mentor.imgSrc}
                                    alt={mentor.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 90vw, 30vw"
                                />

                                <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_45%,rgba(70,20,200,0.25)_100%)]" />

                                {(!isMobileView || isCenter) && (
                                    <MentorInfoBox
                                        key={isMobileView ? activeIndex : undefined}
                                        height={
                                            windowWidth < 480 ? (isCenter ? "76px" : "64px") : "109px"
                                        }
                                        gap={windowWidth < 480 ? (isCenter ? "6px" : "4px") : "8px"}
                                        padding={
                                            windowWidth < 480
                                                ? isCenter
                                                    ? "12px 16px"
                                                    : "10px 12px"
                                                : "20px 24px"
                                        }
                                        name={mentor.name}
                                        role={mentor.role}
                                        windowWidth={windowWidth}
                                        isCenter={isCenter}
                                    />
                                )}
                            </div>
                        );
                    })}

                </div>

                {/* Desktop: nav below card area — unchanged */}
                {showNavigation && !isMobileView && (
                    <div className={navigationClassName}>
                        <button
                            type="button"
                            aria-label="Previous mentor"
                            onClick={() => { if (!canPrev) return; prev(); }}
                            disabled={!canPrev}
                            aria-disabled={!canPrev}
                            className="relative h-[46.67px] w-[46.67px] rotate-[-180deg] cursor-pointer border-none bg-transparent p-0 opacity-70 transition-opacity duration-200 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:opacity-30"
                        >
                            <Image
                                src="/photos/Tech/Active Arowmark.svg"
                                fill
                                alt="" aria-hidden="true"
                                className="object-contain"
                            />
                        </button>
                        <button
                            type="button"
                            aria-label="Next mentor"
                            onClick={() => { if (!canNext) return; next(); }}
                            disabled={!canNext}
                            aria-disabled={!canNext}
                            className="relative h-[46.67px] w-[46.67px] cursor-pointer border-none bg-transparent p-0 opacity-100 transition-opacity duration-200 ease-in-out hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:opacity-30"
                        >
                            <Image
                                src="/photos/Tech/Active Arowmark.svg"
                                fill
                                alt="" aria-hidden="true"
                                className="object-contain"
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
