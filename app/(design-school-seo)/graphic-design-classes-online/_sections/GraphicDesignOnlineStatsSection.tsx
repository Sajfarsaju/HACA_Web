"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const STATS = [
    { value: 500, suffix: "+", label: "Students Trained with Practical Design Skills" },
    { value: 200, suffix: "+", label: "Hiring Partners Connected with Creative Talent" },
    { value: 15, suffix: "+", label: "Creative Mentors Helping Students Learn" },
] as const;

const DOT_COLORS = ["#EF4444", "#29C76B"] as const;

export function GraphicDesignOnlineStatsSection() {
    const [progress, setProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                let frameId: number;
                const duration = 1200;
                const start = performance.now();
                const tick = (now: number) => {
                    const elapsed = now - start;
                    const t = Math.min(1, elapsed / duration);
                    const eased = 1 - Math.pow(1 - t, 3);
                    setProgress(eased);
                    if (t < 1) {
                        frameId = requestAnimationFrame(tick);
                    } else {
                        setHasAnimated(true);
                    }
                };
                frameId = requestAnimationFrame(tick);
                observer.disconnect();
                return () => { if (frameId) cancelAnimationFrame(frameId); };
            },
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section ref={ref} className="w-full bg-[#FCFCFC]">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                {/* Mobile: stacked 3-col grid */}
                <div className="grid grid-cols-3 gap-4 lg:hidden">
                    {STATS.map((stat) => {
                        const display = `${Math.round(stat.value * progress)}${stat.suffix}`;
                        return (
                            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                                <p
                                    className="m-0 text-[clamp(26px,7vw,36px)] font-medium leading-none"
                                    style={{ fontFamily: vc, color: "#000" }}
                                    aria-live="polite"
                                >
                                    {display}
                                </p>
                                <p
                                    className="m-0 text-[clamp(10px,2.8vw,13px)] leading-[130%]"
                                    style={{ fontFamily: vc, color: "#000" }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop: horizontal row with dots */}
                <div className="hidden items-center justify-center gap-12 lg:flex xl:gap-20">
                    {STATS.map((stat, i) => {
                        const display = `${Math.round(stat.value * progress)}${stat.suffix}`;
                        return (
                            <Fragment key={stat.label}>
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <p
                                        className="m-0 text-[60px] font-medium leading-none"
                                        style={{ fontFamily: vc, color: "#000" }}
                                        aria-live="polite"
                                    >
                                        {display}
                                    </p>
                                    <p
                                        className="m-0 max-w-[220px] text-[14px] leading-[140%]"
                                        style={{ fontFamily: vc, color: "#000" }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                                {i < STATS.length - 1 && (
                                    <span
                                        className="h-3 w-3 shrink-0 rounded-full"
                                        style={{ backgroundColor: DOT_COLORS[i] }}
                                        aria-hidden
                                    />
                                )}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
