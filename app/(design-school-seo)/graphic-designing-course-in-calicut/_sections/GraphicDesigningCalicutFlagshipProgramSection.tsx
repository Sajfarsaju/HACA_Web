"use client";

import { useEffect, useRef, useState } from "react";

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

export function GraphicDesigningCalicutFlagshipProgramSection() {
    const sectionRef  = useRef<HTMLElement | null>(null);
    const trackRef    = useRef<HTMLDivElement | null>(null); // overflow-hidden container
    const rowRef      = useRef<HTMLDivElement | null>(null); // translating flex row
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const track   = trackRef.current;
        const row     = rowRef.current;
        if (!section || !track || !row) return;

        type Phase = "idle" | "locked" | "done";
        let phase: Phase   = "idle";
        let cardOffset     = 0;   // logical target position
        let displayOffset  = 0;   // visually rendered position (lerps toward cardOffset)
        let rafId: number | null = null;
        let spacer: HTMLDivElement | null = null;
        let cooldown       = false;
        let lastTouchY     = 0;
        const LERP         = 0.15;

        const getMax = () => Math.max(0, row.offsetWidth - track.clientWidth);

        // ── Lerp loop ──────────────────────────────────────────────────────────
        const tick = () => {
            const diff = cardOffset - displayOffset;
            if (Math.abs(diff) < 0.05) {
                displayOffset = cardOffset;
                row.style.transform = `translateX(-${displayOffset}px)`;
                rafId = null;
                return;
            }
            displayOffset += diff * LERP;
            row.style.transform = `translateX(-${displayOffset}px)`;
            rafId = requestAnimationFrame(tick);
        };

        // Move smoothly to target
        const animateTo = (target: number) => {
            cardOffset = target;
            if (rafId === null) rafId = requestAnimationFrame(tick);
        };

        // Snap instantly to target (used at boundary + unlock)
        const snapTo = (target: number) => {
            if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
            cardOffset    = target;
            displayOffset = target;
            row.style.transform = `translateX(-${target}px)`;
        };

        // ── Lock / unlock ──────────────────────────────────────────────────────
        const lock = () => {
            if (phase === "locked") return;
            phase = "locked";

            // Insert a spacer so surrounding content doesn't shift
            spacer = document.createElement("div");
            spacer.style.cssText = `height:${section.offsetHeight}px;flex-shrink:0;pointer-events:none;`;
            section.parentElement?.insertBefore(spacer, section);

            // Pin section at viewport top.
            // Trigger is section.top <= 0, so this produces zero (or sub-pixel) visual jump.
            section.style.cssText =
                "position:fixed;top:0;left:0;width:100%;z-index:100;background:white;";
        };

        const unlock = (forward: boolean) => {
            if (phase !== "locked") return;
            phase = forward ? "done" : "idle";

            cooldown = true;
            setTimeout(() => { cooldown = false; }, 350);

            section.style.cssText = "";
            spacer?.parentElement?.removeChild(spacer);
            spacer = null;
        };

        // ── Apply a scroll/touch delta to card position ───────────────────────
        const applyDelta = (delta: number) => {
            const max  = getMax();
            const next = cardOffset + delta;

            if (next <= 0) {
                snapTo(0);
                unlock(false);
                return;
            }
            if (next >= max) {
                snapTo(max);
                unlock(true);
                return;
            }
            animateTo(next);
        };

        // ── Scroll listener: trigger lock when section top hits viewport top ──
        const onScroll = () => {
            if (cooldown || phase === "locked") return;
            const top = section.getBoundingClientRect().top;

            // Idle → scrolling down: lock when top of section reaches viewport top
            if (phase === "idle" && top <= 0) {
                lock();
                return;
            }

            // Done → scrolling up: re-lock when section top comes back up to viewport top
            if (phase === "done" && top >= 0) {
                lock();
            }
        };

        // ── Wheel (desktop) ───────────────────────────────────────────────────
        const onWheel = (e: WheelEvent) => {
            if (phase !== "locked") return;
            e.preventDefault();
            applyDelta(e.deltaY);
        };

        // ── Touch (mobile) ────────────────────────────────────────────────────
        const onTouchStart = (e: TouchEvent) => {
            lastTouchY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (phase !== "locked") return;
            e.preventDefault();
            const y   = e.touches[0].clientY;
            const delta = lastTouchY - y; // positive = swiping up = scrolling forward
            lastTouchY  = y;
            applyDelta(delta);
        };

        window.addEventListener("scroll",        onScroll,     { passive: true  });
        document.addEventListener("wheel",        onWheel,      { passive: false });
        document.addEventListener("touchstart",   onTouchStart, { passive: true  });
        document.addEventListener("touchmove",    onTouchMove,  { passive: false });

        return () => {
            window.removeEventListener("scroll",      onScroll);
            document.removeEventListener("wheel",     onWheel);
            document.removeEventListener("touchstart",onTouchStart);
            document.removeEventListener("touchmove", onTouchMove);
            if (rafId !== null) cancelAnimationFrame(rafId);
            if (phase === "locked") {
                section.style.cssText = "";
                spacer?.parentElement?.removeChild(spacer);
            }
            row.style.transform = "";
        };
    }, []);

    // InView trigger for card fade-in entrance animation
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                obs.disconnect();
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-8 sm:px-6 md:px-8 lg:px-[60px] lg:py-[40px]">
                <div className="flex w-full flex-col gap-6 sm:gap-8 lg:gap-10">

                    {/* Heading */}
                    <h2 className="m-0 w-full px-1 text-center text-balance text-black sm:px-0">
                        <span
                            className="lg:hidden"
                            style={{
                                fontFamily: vc,
                                fontWeight: 700,
                                fontStyle: "normal",
                                fontSize: "clamp(26px, 3.25vw, 44px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            What We Teach in
                            <br />
                            Our Flagship
                            <br />
                            Program
                        </span>
                        <span
                            className="hidden lg:inline"
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
                            What We Teach in Our Flagship Program
                        </span>
                    </h2>

                    {/* CDC label + cards */}
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
                                <span className="w-px shrink-0 self-stretch bg-black opacity-[0.28]" aria-hidden />
                                <div
                                    className="flex min-w-0 flex-col justify-center gap-0.5 leading-tight md:hidden"
                                    style={{ fontFamily: vc, fontWeight: 500, fontStyle: "normal", lineHeight: 1.25 }}
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

                        {/* Cards strip */}
                        <div className="min-w-0 w-[calc(100%+clamp(16px,4.16vw,60px))] pr-0 -mr-[clamp(16px,4.16vw,60px)]">
                            <div
                                ref={trackRef}
                                className="w-full max-w-full overflow-x-hidden overflow-y-hidden"
                            >
                                <div
                                    ref={rowRef}
                                    className="flex w-max"
                                    style={{ gap: "20px", willChange: "transform" }}
                                >
                                    {CARDS.map((card, idx) => (
                                        <div
                                            key={card.n}
                                            className={[
                                                "relative shrink-0 overflow-hidden rounded-[16px] text-white",
                                                "h-[300px] w-[343px] max-w-[92vw]",
                                                "sm:h-[380px] sm:w-[420px]",
                                                "lg:h-[380px] lg:w-[566px]",
                                                "transition-opacity duration-700 ease-out",
                                                inView ? "opacity-100" : "opacity-0",
                                            ].join(" ")}
                                            style={{
                                                transitionDelay: `${Math.min(idx * 90, 360)}ms`,
                                                backgroundColor: card.rightBg,
                                            }}
                                        >
                                            {/* Left pane */}
                                            <div
                                                className="absolute inset-y-0 left-0 z-[1] w-[50%] sm:w-[51%]"
                                                style={{
                                                    backgroundColor: card.leftBg,
                                                    borderTopRightRadius: "16px",
                                                    borderBottomRightRadius: "16px",
                                                }}
                                                aria-hidden
                                            />

                                            {/* Card number */}
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

                                            {/* Card title */}
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

                                            {/* Bullet list */}
                                            <div
                                                className="absolute left-[calc(50%+10px)] top-0 bottom-0 z-[2] flex items-center pr-5 sm:left-[calc(50%+12px)] sm:pr-6"
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
