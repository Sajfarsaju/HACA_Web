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
            "Animation Graph editing",
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
            "Storytelling",
            "Purpose of editing",
            "Art of direction",
            "Types of cuts",
            "The sound design",
            "Color grading",
            "Cinematography Basics",
            "Basics of filmmaking",
            "AI editing tools",
        ],
    },
    {
        n: "04",
        title: "UI/UX Design",
        leftBg: "#29C76B",
        rightBg: "#22A057",
        bullets: [
            "Stakeholder Research",
            "Product Strategy",
            "Competitor Analysis",
            "User Research",
            "User Persona",
            "User Flow",
            "Information Architecture",
            "Wireframe",
            "Learning Figma",
            "Design Guidelines",
            "Responsive design",
            "Prototyping and AI tools",
        ],
    },
    {
        n: "05",
        title: "Branding",
        leftBg: "#FF5C00",
        rightBg: "#D64E00",
        bullets: [
            "Branding",
            "Visual Identity Design",
            "Research & Brainstorming",
            "Logo Ideation",
            "Sketching",
            "Packaging",
            "Final Project and Portfolio",
        ],
    },
] as const;

export function GraphicDesigningKeralaFlagshipProgramSection() {
    const ref = useRef<HTMLElement | null>(null);
    const cardsScrollerRef = useRef<HTMLDivElement | null>(null);
    const dragScrollRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
    const [inView, setInView] = useState(false);

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

    return (
        <section ref={ref} className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-8 sm:px-6 md:px-8 lg:px-[60px] lg:py-[40px]">
                <div className="flex w-full flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="flex w-full flex-col items-center gap-3 px-1 text-center sm:px-0">
                        <h2 className="m-0 w-full">
                            <span
                                className="lg:hidden text-black"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontSize: "clamp(26px, 3.25vw, 44px)",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Inside HACA&apos;s Creative Design &amp;
                                <br />
                                Communication Program
                            </span>
                            <span
                                className="hidden lg:inline text-black"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "45px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                    textAlign: "center",
                                }}
                            >
                                Inside HACA&apos;s Creative Design &amp; Communication Program
                            </span>
                        </h2>
                        <p
                            className="m-0 w-full max-w-[800px] text-black/60"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.4vw, 16px)",
                                lineHeight: "120%",
                            }}
                        >
                            This Design School&apos;s flagship program is built for students who want practical creative skills with strong portfolio development and real-world exposure.
                        </p>
                    </div>

                    <div className="flex w-screen max-w-none flex-col gap-4 sm:gap-5 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] box-border pl-[clamp(16px,4.16vw,60px)] pr-[clamp(16px,4.16vw,60px)]">
                        <div className="flex w-full min-w-0 flex-col items-start gap-2.5 sm:gap-3">
                            <h3 className="m-0 w-full max-w-[22rem] text-left text-black sm:max-w-[min(100%,28rem)] md:max-w-none">
                                <span
                                    className="lg:hidden"
                                    style={{
                                        fontFamily: vc,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "20px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Creative Design &amp;
                                    <br />
                                    Communication Course (CDC)
                                </span>
                                <span
                                    className="hidden lg:inline"
                                    style={{
                                        fontFamily: vc,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "36px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Creative Design &amp;
                                    <br />
                                    Communication Course (CDC)
                                </span>
                            </h3>

                            <div
                                className="inline-flex w-full max-w-full items-stretch gap-3 rounded-[999px] bg-[#00000033] px-3 py-2.5 text-black sm:w-auto sm:gap-4 sm:px-4 sm:py-3 md:flex-nowrap"
                                style={{
                                    fontFamily: vc,
                                    fontStyle: "normal",
                                    fontSize: "clamp(14px, 3.6vw, 16px)",
                                    letterSpacing: "0",
                                }}
                            >
                                <span
                                    className="flex shrink-0 items-center self-center"
                                    style={{ fontFamily: vc, fontWeight: 700, lineHeight: 1.2 }}
                                >
                                    Offline
                                </span>
                                <span
                                    className="w-px shrink-0 self-stretch bg-black opacity-[0.28]"
                                    aria-hidden
                                />
                                <div
                                    className="flex min-w-0 flex-col justify-center gap-0.5 leading-tight md:hidden"
                                    style={{
                                        fontFamily: vc,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        lineHeight: 1.25,
                                    }}
                                >
                                    <span>5 Months of Learning</span>
                                    <span style={{ fontWeight: 400 }}>+ 1 Month of Internship</span>
                                </div>
                                <span
                                    className="hidden min-w-0 items-center whitespace-nowrap md:inline-flex"
                                    style={{ fontFamily: vc, fontWeight: 500, fontStyle: "normal", lineHeight: 1.25 }}
                                >
                                    5 Months of Learning + 1 Month of Internship
                                </span>
                            </div>
                        </div>

                        <div className="min-w-0 w-[calc(100%+clamp(16px,4.16vw,60px))] pr-0 -mr-[clamp(16px,4.16vw,60px)]">
                            <div
                                ref={cardsScrollerRef}
                                className={[
                                    "w-full max-w-full overflow-x-auto overflow-y-hidden scroll-smooth",
                                    "snap-x snap-mandatory",
                                    "[-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
                                    "cursor-grab active:cursor-grabbing",
                                ].join(" ")}
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                }}
                                onWheel={(e) => {
                                    const el = cardsScrollerRef.current;
                                    if (!el) return;
                                    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
                                    e.preventDefault();
                                    el.scrollLeft += e.deltaY;
                                }}
                                onPointerDown={(e) => {
                                    if (e.pointerType !== "mouse" || e.button !== 0) return;
                                    const el = cardsScrollerRef.current;
                                    if (!el) return;
                                    dragScrollRef.current = {
                                        active: true,
                                        startX: e.clientX,
                                        scrollLeft: el.scrollLeft,
                                    };
                                    el.setPointerCapture(e.pointerId);
                                }}
                                onPointerMove={(e) => {
                                    const el = cardsScrollerRef.current;
                                    const d = dragScrollRef.current;
                                    if (!el || !d.active) return;
                                    el.scrollLeft = d.scrollLeft - (e.clientX - d.startX);
                                }}
                                onPointerUp={(e) => {
                                    const el = cardsScrollerRef.current;
                                    dragScrollRef.current.active = false;
                                    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
                                }}
                                onPointerCancel={(e) => {
                                    const el = cardsScrollerRef.current;
                                    dragScrollRef.current.active = false;
                                    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
                                }}
                            >
                                <div className="flex w-max" style={{ gap: "20px" }}>
                                    {CARDS.map((card, idx) => (
                                        <div
                                            key={card.n}
                                            className={[
                                                "relative shrink-0 overflow-hidden rounded-[16px] text-white",
                                                "snap-start",
                                                "h-[300px] w-[343px] max-w-[92vw]",
                                                "sm:h-[380px] sm:w-[420px]",
                                                "lg:h-[380px] lg:w-[566px]",
                                                "transition-all duration-700 ease-out",
                                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                            ].join(" ")}
                                            style={{
                                                transitionDelay: `${Math.min(idx * 90, 360)}ms`,
                                                backgroundColor: card.rightBg,
                                            }}
                                        >
                                            <div
                                                className="absolute inset-y-0 left-0 z-[1] w-[50%] sm:w-[51%]"
                                                style={{
                                                    backgroundColor: card.leftBg,
                                                    borderTopRightRadius: "16px",
                                                    borderBottomRightRadius: "16px",
                                                }}
                                                aria-hidden
                                            />
                                            <div className="absolute left-5 top-5 z-[2]">
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

                                            <div className="absolute bottom-5 left-5 z-[2] flex max-w-[min(46%,200px)] items-end sm:max-w-[min(48%,240px)] lg:max-w-[min(50%,280px)]">
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
                                                className="absolute left-[calc(50%+10px)] top-[72px] z-[2] pr-5 sm:left-[calc(50%+12px)] sm:top-[96px] sm:pr-6"
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
                </div>
            </div>
        </section>
    );
}
