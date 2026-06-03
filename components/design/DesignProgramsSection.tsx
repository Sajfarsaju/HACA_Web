"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DesignProgramCard, type DesignProgramCardProps } from "./DesignProgramCard";
import { DesignPickOneToExploreSection } from "./DesignPickOneToExploreSection";
import { designCourseHref, DESIGN_COURSE_SLUGS } from "@/lib/design-courses";

// Virtual units consumed per card transition
const PROGRESS_PER_CARD = 900;

// Per-card recede rotation — each card tilts in a unique direction
const RECEDE_ROT = [
    { x: 16,  z:  6   },   // card 0 — lean back + tilt right
    { x: 22,  z: -9   },   // card 1 — steep lean + tilt left
    { x: 13,  z:  11  },   // card 2 — shallow lean + strong right
    { x: 20,  z: -5   },   // card 3 — steep lean + slight left
    { x: 17,  z:  8   },   // card 4 — lean back + tilt right
];

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
        href: designCourseHref(DESIGN_COURSE_SLUGS.creativeDesign),
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
        href: designCourseHref(DESIGN_COURSE_SLUGS.aiGraphicDesign),
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
        href: designCourseHref(DESIGN_COURSE_SLUGS.brandingIdentity),
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
        href: designCourseHref(DESIGN_COURSE_SLUGS.uiUxAi),
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
        href: designCourseHref(DESIGN_COURSE_SLUGS.aiVideoEditing),
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
    const containerRef   = useRef<HTMLDivElement>(null);
    const cardRefs       = useRef<(HTMLDivElement | null)[]>([]);
    const exploreCardRef = useRef<HTMLDivElement>(null);
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

    // Measure max card height before first paint; push cards 1-N off-screen.
    useLayoutEffect(() => {
        const card0 = cardRefs.current[0];
        if (!card0) return;
        const h = Math.max(...cardRefs.current.map(c => c?.offsetHeight ?? 0));
        if (h <= 0) return;
        setWrapperH(h);
        cardRefs.current.forEach((card, i) => {
            if (card && i > 0) card.style.transform = `translateY(${h}px)`;
        });
        if (exploreCardRef.current) {
            exploreCardRef.current.style.transform = `translateY(${h}px)`;
        }
    }, []);

    // Re-measure on resize / orientation change
    useEffect(() => {
        const card0 = cardRefs.current[0];
        if (!card0) return;
        const onResize = () => {
            const h = Math.max(...cardRefs.current.map(c => c?.offsetHeight ?? 0));
            if (h > 0) setWrapperH(h);
        };
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ── Main hijack + animation effect ──────────────────────────────────────────
    useEffect(() => {
        const container = containerRef.current;
        if (!container || wrapperH === 0) return;

        // One extra virtual card for the DesignPickOneToExploreSection
        const max = PROGRAMS.length * PROGRESS_PER_CARD;

        const eio = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        // iOS scroll-lock: saved position for position:fixed body trick
        let savedScrollY = 0;
        // Prevents onScroll from immediately re-locking after a programmatic scrollTo in unlock()
        let preventScrollLock = false;

        // Apply current progress to card transforms
        const render = () => {
            raf.current = null;
            const p = progress.current;

            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                // Enter: card i slides up from below during [(i-1)*PPT, i*PPT]
                // Card 0 is always fully entered (enterE = 1)
                const enterRaw = i === 0 ? 1 : Math.max(0, Math.min(1,
                    (p - (i - 1) * PROGRESS_PER_CARD) / PROGRESS_PER_CARD
                ));
                const enterE = eio(enterRaw);

                // Recede: card i fades+recedes in 3D during [i*PPT, (i+1)*PPT]
                const recedeRaw = Math.max(0, Math.min(1,
                    (p - i * PROGRESS_PER_CARD) / PROGRESS_PER_CARD
                ));
                const recedeE = eio(recedeRaw);

                const ty   = wrapperH * (1 - enterE);
                const tz   = recedeE * -300;
                const rot  = RECEDE_ROT[i] ?? { x: 15, z: 6 };
                const rotX = recedeE * rot.x;
                const rotZ = recedeE * rot.z;
                const opacity = 1 - recedeE;

                card.style.transform = `perspective(1000px) translateY(${ty}px) translateZ(${tz}px) rotateX(${rotX}deg) rotateZ(${rotZ}deg)`;
                card.style.opacity   = String(Math.max(0, opacity));
            });

            // Explore card: only enter animation (it's the final card, nothing recedes it)
            const exploreCard = exploreCardRef.current;
            if (exploreCard) {
                const raw = Math.max(0, Math.min(1,
                    (p - (PROGRAMS.length - 1) * PROGRESS_PER_CARD) / PROGRESS_PER_CARD
                ));
                const e = eio(raw);
                exploreCard.style.transform = `translateY(${wrapperH * (1 - e)}px)`;
                exploreCard.style.opacity   = "1";
            }
        };
        const queue = () => {
            if (raf.current !== null) return;
            raf.current = requestAnimationFrame(render);
        };

        // Freeze page scroll.
        // overflow:hidden preserves window.scrollY so unlock needs no scrollTo restoration.
        // touch-action:none tells iOS not to claim the next gesture as a native scroll.
        const lock = () => {
            if (locked.current) return;
            locked.current = true;
            const top = container.getBoundingClientRect().top;
            savedScrollY = window.scrollY + top;
            // Snap section to viewport top (also stops any iOS momentum scroll in progress)
            if (Math.abs(top) > 1) window.scrollTo(0, savedScrollY);
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow            = "hidden";
            container.style.touchAction             = "none";
        };
        const unlock = () => {
            if (!locked.current) return;
            locked.current = false;
            document.documentElement.style.overflow = "";
            document.body.style.overflow            = "";
            container.style.touchAction             = "";
            // overflow:hidden preserved window.scrollY — no scrollTo needed.
            // Set the guard for 2 frames so onScroll doesn't immediately re-lock.
            preventScrollLock = true;
            requestAnimationFrame(() => requestAnimationFrame(() => {
                preventScrollLock = false;
            }));
        };

        // True when section top is within the capture zone (lenient for mobile momentum scroll)
        const inZone = () => {
            const top = container.getBoundingClientRect().top;
            return top <= 60 && top >= -(wrapperH + 50);
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
        // Handles two cases:
        //  1. Mobile momentum scroll — after touchend the browser keeps scrolling
        //     with no touchmove events. We intercept here and call lock() so the
        //     position:fixed body trick stops the momentum immediately.
        //  2. Arms armCapture before the next touch gesture begins.
        const onScroll = () => {
            if (locked.current || preventScrollLock) return;
            const top = container.getBoundingClientRect().top;

            // Arm touch capture when section is near the viewport top
            armCapture.current = top <= 60 && top >= -(wrapperH + 50) &&
                (progress.current < max || progress.current > 0);

            // ── Momentum intercept ──
            // Section reached (or passed) the viewport top while no finger is down.
            // Lock immediately so the momentum scroll cannot continue past the section.
            if (armCapture.current && progress.current === 0 && top <= 2) {
                lock();
                return;
            }

            // User scrolled back above section → reset so animation replays on re-entry
            if (top > 60 && progress.current > 0) {
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
                // If locked at the start of the animation, release so the page can scroll up
                if (locked.current && progress.current <= 0) {
                    unlock();
                } else if (advanceBackward(e.deltaY)) {
                    e.preventDefault();
                }
            }
        };

        // ── Mobile: touch ──────────────────────────────────────────────────────
        const onTouchStart = (e: TouchEvent) => {
            touchPrevY.current = e.touches[0].clientY;
            if (!armCapture.current) {
                const top = container.getBoundingClientRect().top;
                armCapture.current = top <= 60 && top >= -(wrapperH + 50) &&
                    (progress.current < max || progress.current > 0);
            }
        };

        const onTouchMove = (e: TouchEvent) => {
            if (touchPrevY.current === null) return;
            const currentY = e.touches[0].clientY;
            const deltaY   = touchPrevY.current - currentY; // +ve = swipe up = scroll down

            if (locked.current) {
                // Page is locked — all touch movement drives the animation
                if (deltaY < 0 && progress.current <= 0) {
                    // At the start of the animation, scrolling up should release the lock
                    unlock();
                    touchPrevY.current = currentY;
                    return;
                }
                e.preventDefault();
                if (deltaY > 0) advanceForward(deltaY * 2.5);
                else if (deltaY < 0) advanceBackward(deltaY * 2.5);
                touchPrevY.current = currentY;
                return;
            }

            // Dynamically arm mid-gesture if section just reached the zone
            if (!armCapture.current) {
                const top = container.getBoundingClientRect().top;
                if (top <= 60 && top >= -(wrapperH + 50) && (
                    (deltaY > 0 && progress.current < max) ||
                    (deltaY < 0 && progress.current > 0)
                )) {
                    armCapture.current = true;
                }
            }

            // Only prevent native scroll when the animation can actually consume the gesture
            if (armCapture.current && deltaY > 0 && progress.current < max) {
                e.preventDefault();
                if (advanceForward(deltaY * 2.5)) touchPrevY.current = currentY;
                else touchPrevY.current = currentY;
            } else if (armCapture.current && deltaY < 0 && progress.current > 0) {
                e.preventDefault();
                if (advanceBackward(deltaY * 2.5)) touchPrevY.current = currentY;
                else touchPrevY.current = currentY;
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
            container.style.touchAction = "";
            preventScrollLock = false;
            if (raf.current !== null) cancelAnimationFrame(raf.current);
        };
    }, [wrapperH]);

    return (
        <>
            <div ref={containerRef} style={{ overflowX: "hidden" }}>
                <div
                    className="relative overflow-hidden"
                    style={{ height: wrapperH > 0 ? wrapperH : undefined }}
                >
                    {PROGRAMS.map((program, i) => (
                        <div
                            key={i}
                            ref={el => { cardRefs.current[i] = el; }}
                            className={
                                i === 0
                                    ? "relative"
                                    : "absolute top-0 left-0 right-0"
                            }
                            style={{
                                zIndex:     i + 1,
                                willChange: "transform",
                            }}
                        >
                            <DesignProgramCard {...program} />
                        </div>
                    ))}
                    {/* Explore section slides in as the final stacked card on all screen sizes */}
                    <div
                        ref={exploreCardRef}
                        className="flex flex-col absolute top-0 left-0 right-0"
                        style={{
                            zIndex:     PROGRAMS.length + 1,
                            willChange: "transform",
                            height:     wrapperH > 0 ? wrapperH : undefined,
                            overflow:   "hidden",
                        }}
                    >
                        <DesignPickOneToExploreSection />
                    </div>
                </div>
            </div>
        </>
    );
}
