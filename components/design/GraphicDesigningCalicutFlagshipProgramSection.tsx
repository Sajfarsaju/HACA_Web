"use client";

import React, { useEffect, useRef, useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type Card = {
    n: string;
    title: string;
    leftBg: string;
    rightBg: string;
    bullets: string[];
};

const CARDS: Card[] = [
    {
        n: "01",
        title: "Graphic Design",
        leftBg: "#8F56FF",
        rightBg: "#6E47CC",
        bullets: [
            "Layout",
            "Composition Typography",
            "Colour Theory",
            "Manipulation",
            "Composition",
            "Creative Design",
            "Advertising Design",
            "Generative AI",
            "Portfolio Development",
        ],
    },
    {
        n: "02",
        title: "Motion Graphics",
        leftBg: "#FF5659",
        rightBg: "#C84547",
        bullets: [
            "Basics of 2d animation",
            "Principles of animation",
            "Motion Graphics Basics",
            "Animation Graphic editing",
            "Motion commercial",
            "Vector animation",
            "Basic vfx",
        ],
    },
    {
        n: "03",
        title: "Video Editing",
        leftBg: "#2592FF",
        rightBg: "#1F78D6",
        bullets: [
            "Editing Fundamentals",
            "Cuts & Transitions",
            "Sound & Music",
            "Color Correction",
            "Short-form Edits",
            "YouTube Workflow",
            "Exporting & Delivery",
        ],
    },
] as const;

export function GraphicDesigningCalicutFlagshipProgramSection() {
    const ref = useRef<HTMLElement | null>(null);
    const cardsScrollerRef = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    const [isHoveringCards, setIsHoveringCards] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                obs.disconnect();
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const el = cardsScrollerRef.current;
        if (!el) return;
        if (!inView) return;
        if (isHoveringCards) return;
        if (typeof window !== "undefined" && window.innerWidth < 1024) return; // auto-scroll desktop only

        let raf = 0;
        let last = performance.now();
        const speed = 22; // px/sec (gentle)

        const tick = (now: number) => {
            const dt = now - last;
            last = now;

            // If user is actively dragging/scrolling, don't fight them.
            if (el.matches(":active")) {
                raf = requestAnimationFrame(tick);
                return;
            }

            el.scrollLeft += (speed * dt) / 1000;

            // Loop back when reaching the end.
            const max = el.scrollWidth - el.clientWidth;
            if (max > 0 && el.scrollLeft >= max - 1) {
                el.scrollLeft = 0;
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, isHoveringCards]);

    return (
        <section ref={ref} className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-8 sm:px-6 md:px-8 lg:px-[60px] lg:py-[40px]">
                <div className="flex w-full flex-col gap-[30px] lg:gap-[60px]">
                    <div className="flex w-full flex-col items-center gap-6">
                        <h2
                            className="m-0 w-full text-center text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 700,
                                fontStyle: "normal",
                                fontSize: "clamp(28px, 3.25vw, 44px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            What We Teach in Our Flagship Program
                        </h2>

                        <div className="flex w-full flex-col items-start gap-3">
                            <h3
                                className="m-0 w-full text-left text-black"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 600,
                                    fontStyle: "normal",
                                    fontSize: "clamp(22px, 2.5vw, 32px)",
                                    lineHeight: "112%",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Creative Design &amp;
                                <br />
                                Communication Course (CDC)
                            </h3>

                            <div
                                className="inline-flex items-center rounded-[999px] bg-[#EAEAEA] px-4 py-2 text-black"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    lineHeight: "28px",
                                    letterSpacing: "0",
                                }}
                            >
                                Offline&nbsp;&nbsp;|&nbsp;&nbsp;5 Months of Learning + 1 Month of Internship
                            </div>
                        </div>
                    </div>

                    {/* Cards scroller — full-bleed (no side spacing) */}
                    <div className="w-screen max-w-none overflow-hidden pl-[clamp(16px,4.16vw,60px)] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
                        <div
                            ref={cardsScrollerRef}
                            className={[
                                "flex w-max overflow-x-auto overflow-y-hidden scroll-smooth",
                                "snap-x snap-mandatory",
                                /* keep snap aligned with left inset */
                                "scroll-pl-[clamp(16px,4.16vw,60px)]",
                                "[-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
                                "lg:cursor-grab active:cursor-grabbing",
                            ].join(" ")}
                            style={{
                                gap: "20px",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                            onMouseEnter={() => setIsHoveringCards(true)}
                            onMouseLeave={() => setIsHoveringCards(false)}
                            onWheel={(e) => {
                                // Desktop: when hovering, mouse wheel scrolls cards horizontally (like a carousel).
                                // Keep mobile/touch behavior unchanged.
                                if (window.innerWidth < 1024) return;
                                const el = cardsScrollerRef.current;
                                if (!el) return;
                                // Convert vertical wheel into horizontal scroll.
                                if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                                    e.preventDefault();
                                    el.scrollLeft += e.deltaY;
                                }
                            }}
                        >
                            {CARDS.map((card, idx) => (
                                <div
                                    key={card.n}
                                    className={[
                                        "relative shrink-0 overflow-hidden rounded-[16px] text-white",
                                        "snap-start",
                                        /* Mobile card sizing like screenshot */
                                        "h-[300px] w-[343px] max-w-[92vw]",
                                        /* Small devices */
                                        "sm:h-[380px] sm:w-[420px]",
                                        "sm:h-[380px] sm:w-[420px]",
                                        "lg:h-[380px] lg:w-[566px]",
                                        "transition-all duration-700 ease-out",
                                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                    ].join(" ")}
                                    style={{
                                        transitionDelay: `${Math.min(idx * 90, 360)}ms`,
                                        background: `linear-gradient(90deg, ${card.leftBg} 0%, ${card.leftBg} 50%, ${card.rightBg} 50%, ${card.rightBg} 100%)`,
                                    }}
                                >
                                    <div className="absolute left-5 top-5">
                                        <div
                                            className="text-white"
                                            style={{
                                                fontFamily: vc,
                                                fontWeight: 500,
                                                fontStyle: "normal",
                                                fontSize: "clamp(36px, 8.8vw, 54px)",
                                                lineHeight: "100%",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {card.n}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                                        <div
                                            style={{
                                                fontFamily: vc,
                                                fontWeight: 500,
                                                fontStyle: "normal",
                                                fontSize: "clamp(18px, 5vw, 26px)",
                                                lineHeight: "110%",
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            {card.title}
                                        </div>
                                    </div>

                                    <div
                                        className="absolute left-[52%] top-[72px] pr-5 sm:top-[96px] sm:pr-6"
                                        style={{
                                            fontFamily: vc,
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            fontSize: "clamp(14px, 3.6vw, 18px)",
                                            lineHeight: "110%",
                                            letterSpacing: "0",
                                            color: "rgba(255,255,255,0.88)",
                                        }}
                                    >
                                        <div className="flex flex-col gap-[10px]">
                                            {card.bullets.map((b) => (
                                                <div key={b} className="flex items-center gap-[10px]">
                                                    <span
                                                        className="h-[6px] w-[6px] shrink-0 rounded-full"
                                                        style={{ backgroundColor: card.leftBg, opacity: 0.55 }}
                                                        aria-hidden
                                                    />
                                                    <span>{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

