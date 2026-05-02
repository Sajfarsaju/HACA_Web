"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DesignProgramCard, type DesignProgramCardProps } from "./DesignProgramCard";
import { DesignPickOneToExploreSection } from "./DesignPickOneToExploreSection";

// Virtual units consumed per card transition
const PROGRESS_PER_CARD = 900;

const DUMMY_TOOLS = Array.from({ length: 10 }, (_, i) => ({ alt: `Tool ${i + 1}` }));

const PROGRAMS: DesignProgramCardProps[] = [
    {
        bgColor: "#FF5C00",
        dividerColor: "#E8651B",
        buttonColor: "#8F56FF",
        mobileCardHeight: 828,
        mode: "Offline",
        duration: "6 Month",
        titleLine1: "Creative Design &",
        titleLine2: "Communication",
        description:
            "This program is designed to help you understand design as a process, not just a set of tools. You'll learn through real projects, guided practice, and internship-style assignments that reflect how the creative industry works.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 1 photo.webp",
        photoConfig: {
            desktop: { top: 100, left: 729, width: 491, height: 628 },
            mobile: { top: 360, width: 390, height: 390 },
        },
        href: "/design-school/courses/creative-design",
        underline: {
            src: "/photos/schools/design/program 1 vector 1.svg",
            desktop: { width: 259.64, height: 25.46, rotation: -0.08 },
            mobile: { width: 132.54, height: 12.996 },
        },
        decoration: {
            src: "/photos/schools/design/program 1 vector 2.svg",
            desktop: { width: 38.55, height: 55.95, rotation: 14.85 },
            mobile: { width: 19.68, height: 28.56 },
            offset: {
                desktop: { top: -24, right: -26 },
                mobile: { top: -36, right: -34 },
            },
        },
    },
    {
        bgColor: "#8F56FF",
        dividerColor: "#8F56FF",
        buttonColor: "#FF5659",
        mobileCardHeight: 902,
        mode: "Online",
        duration: "3 Months",
        titleLine1: "AI Integrated",
        titleLine2: "Graphic Design",
        description:
            "Build strong visual foundations that support every creative role. This module focuses on clarity, structure, and intentional design choices.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 2 photo.webp",
        photoConfig: {
            desktop: { top: 55, left: 674, width: 650, height: 724 },
            mobile: { top: 335, width: 440, height: 490 },
        },
        href: "/design-school/courses/ai-graphic-design",
        underline: {
            src: "/photos/schools/design/program 2 vector 1.svg",
            desktop: { width: 205, height: 20, rotation: 0 },
            mobile: { width: 121.11, height: 11.82 },
            anchorPct: 62,
        },
        decoration: {
            src: "/photos/schools/design/program 2 vector 2.svg",
            desktop: { width: 66, height: 62.76, rotation: 0 },
            mobile: { width: 30, height: 28.89 },
            offset: {
                desktop: { right: -2 },
                mobile: { right: -6 },
            },
        },
    },
    {
        bgColor: "#FF5659",
        dividerColor: "#FF5659",
        buttonColor: "#29BA66",
        mobileCardHeight: 828,
        mode: "Online",
        duration: "4 Weeks",
        titleLine1: "Branding & Identity",
        titleLine2: "Design Mastery",
        description:
            "Master the art of brand storytelling, logo design, and visual identity, ideal for designers who want to specialise in branding fast.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 3 photo.webp",
        photoConfig: {
            desktop: { top: -110, left: 620, width: 760, height: 840 },
            mobile: { top: 360, width: 390, height: 390 },
        },
        href: "/design-school/courses/program-3",
        underline: {
            src: "/photos/schools/design/program 3 vector 1.svg",
            desktop: { width: 229.0, height: 17.0, rotation: -1.93 },
            mobile: { width: 142.8, height: 10.6 },
            anchorPct: 66,
        },
        decoration: {
            src: "/photos/schools/design/program 3 vector 2.svg",
            desktop: { width: 67.79, height: 50.07, rotation: -4.21 },
            mobile: { width: 42.27, height: 31.22 },
            offset: {
                desktop: { top: -22, right: -30 },
                mobile: { top: -34, right: -38 },
            },
        },
    },
    {
        bgColor: "#29C76B",
        dividerColor: "#29C76B",
        buttonColor: "#2592FF",
        mobileCardHeight: 828,
        mode: "Online",
        duration: "3 Months",
        titleLine1: "UI/UX Design",
        titleLine2: "+ AI Program",
        description:
            "Build user-friendly digital experiences through design thinking, wireframing, and prototyping, which are ideal for future app and web designers.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 4 photo.webp",
        photoConfig: {
            desktop: { top: 53.19, left: 754, width: 407, height: 668 },
            mobile: { top: 330, left: 63, width: 250, height: 410.32 },
        },
        href: "/design-school/courses/program-4",
        underline: {
            src: "/photos/schools/design/program 4 vector 1.svg",
            desktop: { width: 246.0, height: 19.3793, rotation: 1.85 },
            mobile: { width: 130.0, height: 10.2411 },
            anchorPct: 78,
            offset: { desktop: { y: 4 }, mobile: { y: 3 } },
        },
        decoration: {
            src: "/photos/schools/design/program 4 vector 2.svg",
            desktop: { width: 35.5006, height: 37.5159, rotation: 20.22 },
            mobile: { width: 23.0, height: 24.3061 },
            offset: { desktop: { right: -34 }, mobile: { right: -38 } },
        },
    },
    {
        bgColor: "#2592FF",
        dividerColor: "#2592FF",
        buttonColor: "#FF5C00",
        mobileCardHeight: 900,
        mode: "Online",
        duration: "3 Months",
        titleLine1: "AI Integrated Video",
        titleLine2: "Editing Mastery",
        description:
            "Editing is storytelling. This module focuses on how visuals, sound, and cuts work together to hold attention and deliver meaning.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 5 photo.webp",
        photoConfig: {
            desktop: { top: 78.63, left: 788, width: 420, height: 599.8787841796875 },
            mobile: { top: 384, left: 38, width: 300, height: 428.4848327636719 },
        },
        href: "/design-school/courses/program-5",
        underline: {
            src: "/photos/schools/design/program 5 vector 1.svg",
            desktop: { width: 248.32049643390252, height: 21.790195537783195, rotation: -2.85 },
            mobile: { width: 103.72389255795225, height: 13.465850875002188 },
            anchorPct: 72,
        },
        decoration: {
            src: "/photos/schools/design/program 5 vector 2.svg",
            desktop: { width: 49.026123239136666, height: 71.09472684130627 },
            mobile: { width: 24.000000094118803, height: 34.80335249244244 },
            offset: {
                desktop: { top: -20, right: -28 },
                mobile: { top: -22, right: -20 },
            },
        },
    },
];

export function DesignProgramsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
    const [wrapperH, setWrapperH] = useState(0);

    // Animation progress 0 → (N-1)*PROGRESS_PER_CARD
    const progress    = useRef(0);
    // Whether page scroll is locked (hijacked)
    const locked      = useRef(false);
    const raf         = useRef<number | null>(null);
    // Mobile touch
    const touchPrevY  = useRef<number | null>(null);
    // Set by scroll listener when section is ≤50 px from viewport top;
    // ensures the very first touchmove of the gesture can call e.preventDefault()
    // before iOS commits to its own scroll physics.
    const armCapture  = useRef(false);

    // Measure card 0 height before first paint; push cards 1-N off-screen.
    // Desktop only — mobile shows cards in normal flow with no animation.
    useLayoutEffect(() => {
        if (window.innerWidth < 1024) return;
        const card0 = cardRefs.current[0];
        if (!card0) return;
        const h = card0.offsetHeight;
        if (h <= 0) return;
        setWrapperH(h);
        cardRefs.current.forEach((card, i) => {
            if (card && i > 0) card.style.transform = `translateY(${h}px)`;
        });
    }, []);

    // Re-measure on resize / orientation change
    useEffect(() => {
        const card0 = cardRefs.current[0];
        if (!card0) return;
        const onResize = () => {
            if (window.innerWidth < 1024) {
                // Switched to mobile — clear transforms and disable animation
                setWrapperH(0);
                cardRefs.current.forEach(card => {
                    if (card) card.style.transform = "";
                });
                return;
            }
            const h = card0.offsetHeight;
            if (h > 0) setWrapperH(h);
        };
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ── Main hijack + animation effect ──────────────────────────────────────────
    useEffect(() => {
        const container = containerRef.current;
        if (!container || wrapperH === 0) return;

        const max = (PROGRAMS.length - 1) * PROGRESS_PER_CARD;

        // Apply current progress to card transforms
        const render = () => {
            raf.current = null;
            const p = progress.current;
            cardRefs.current.forEach((card, i) => {
                if (!card || i === 0) return;
                const raw = Math.max(0, Math.min(1,
                    (p - (i - 1) * PROGRESS_PER_CARD) / PROGRESS_PER_CARD
                ));
                const e = raw < 0.5
                    ? 4 * raw * raw * raw
                    : 1 - Math.pow(-2 * raw + 2, 3) / 2;
                card.style.transform = `translateY(${wrapperH * (1 - e)}px)`;
            });
        };
        const queue = () => {
            if (raf.current !== null) return;
            raf.current = requestAnimationFrame(render);
        };

        // Freeze page scroll at the position where section top === 0.
        const lock = () => {
            if (locked.current) return;
            locked.current = true;
            const top = container.getBoundingClientRect().top;
            if (Math.abs(top) > 2) window.scrollTo(0, window.scrollY + top);
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow             = "hidden";
        };
        const unlock = () => {
            if (!locked.current) return;
            locked.current = false;
            document.documentElement.style.overflow = "";
            document.body.style.overflow             = "";
        };

        // True when section top is within the capture zone
        const inZone = () => {
            const top = container.getBoundingClientRect().top;
            return top <= 5 && top >= -(wrapperH + 50);
        };

        const advanceForward = (delta: number): boolean => {
            if (delta <= 0) return false;
            const p = progress.current;
            if (p >= max) return false;
            if (!locked.current && !inZone()) return false;
            lock();
            progress.current = Math.min(max, p + delta);
            queue();
            if (progress.current >= max) unlock();
            return true;
        };

        const advanceBackward = (delta: number): boolean => {
            if (delta >= 0) return false; // only negative delta (upward scroll)
            const p = progress.current;
            if (p <= 0) return false;
            if (!locked.current && !inZone()) return false;
            lock();
            progress.current = Math.max(0, p + delta); // delta is negative
            queue();
            if (progress.current <= 0) unlock();
            return true;
        };

        // ── Scroll listener ────────────────────────────────────────────────────
        // Dual purpose:
        //  1. Arms armCapture when section is ≤50 px from viewport top so the
        //     next touchstart/touchmove can call e.preventDefault() early enough
        //     for iOS to respect it.
        //  2. Resets animation when user scrolls back above the section.
        const onScroll = () => {
            if (locked.current) return;
            const top = container.getBoundingClientRect().top;

            // Pre-arm touch capture ~50 px before section reaches viewport top
            armCapture.current = top <= 50 && top >= -(wrapperH + 50) &&
                (progress.current < max || progress.current > 0);

            // User scrolled back above section → reset so animation replays on re-entry
            if (top > 50 && progress.current > 0) {
                progress.current = 0;
                armCapture.current = false;
                queue();
            }
        };

        // ── Desktop: wheel / trackpad ──────────────────────────────────────────
        const onWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                if (advanceForward(e.deltaY)) e.preventDefault();
            } else if (e.deltaY < 0) {
                if (advanceBackward(e.deltaY)) e.preventDefault();
            }
        };

        // ── Mobile: touch ──────────────────────────────────────────────────────
        const onTouchStart = (e: TouchEvent) => {
            touchPrevY.current = e.touches[0].clientY;
            if (!armCapture.current) {
                const top = container.getBoundingClientRect().top;
                armCapture.current = top <= 50 && top >= -(wrapperH + 50) &&
                    (progress.current < max || progress.current > 0);
            }
        };

        const onTouchMove = (e: TouchEvent) => {
            if (touchPrevY.current === null) return;
            const currentY = e.touches[0].clientY;
            const deltaY   = touchPrevY.current - currentY; // +ve = swipe up = scroll down

            if (locked.current) {
                // Page is locked — all touch movement drives the animation
                e.preventDefault();
                if (deltaY > 0) advanceForward(deltaY * 2.5);
                else if (deltaY < 0) advanceBackward(deltaY * 2.5);
                touchPrevY.current = currentY;
                return;
            }

            // Dynamically arm mid-gesture if section just reached the zone
            if (!armCapture.current) {
                const top = container.getBoundingClientRect().top;
                if (top <= 5 && top >= -(wrapperH + 50) && (
                    (deltaY > 0 && progress.current < max) ||
                    (deltaY < 0 && progress.current > 0)
                )) {
                    armCapture.current = true;
                }
            }

            // armCapture is pre-armed: call e.preventDefault() NOW so iOS doesn't
            // commit to native scroll, then drive animation if we're in zone
            if (armCapture.current && deltaY > 0) {
                e.preventDefault();
                if (advanceForward(deltaY * 2.5)) touchPrevY.current = currentY;
            } else if (armCapture.current && deltaY < 0) {
                e.preventDefault();
                if (advanceBackward(deltaY * 2.5)) touchPrevY.current = currentY;
            } else {
                touchPrevY.current = currentY;
            }
        };

        const onTouchEnd = () => {
            touchPrevY.current = null;
            if (!locked.current) armCapture.current = false;
        };

        window.addEventListener("scroll",     onScroll,     { passive: true  });
        window.addEventListener("wheel",      onWheel,      { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true  });
        window.addEventListener("touchmove",  onTouchMove,  { passive: false });
        window.addEventListener("touchend",   onTouchEnd,   { passive: true  });

        return () => {
            window.removeEventListener("scroll",     onScroll);
            window.removeEventListener("wheel",      onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove",  onTouchMove);
            window.removeEventListener("touchend",   onTouchEnd);
            unlock();
            if (raf.current !== null) cancelAnimationFrame(raf.current);
        };
    }, [wrapperH]);

    return (
        <>
            <div ref={containerRef} style={{ overflowX: "hidden" }}>
                {/* lg:overflow-hidden clips the off-screen cards on desktop */}
                <div className="relative lg:overflow-hidden">
                    {PROGRAMS.map((program, i) => (
                        <div
                            key={i}
                            ref={el => { cardRefs.current[i] = el; }}
                            className={
                                i === 0
                                    ? "relative"
                                    : "relative lg:absolute lg:top-0 lg:left-0 lg:right-0"
                            }
                            style={{
                                zIndex:     i + 1,
                                willChange: "transform",
                            }}
                        >
                            <DesignProgramCard {...program} />
                        </div>
                    ))}
                </div>
            </div>
            <DesignPickOneToExploreSection />
        </>
    );
}
