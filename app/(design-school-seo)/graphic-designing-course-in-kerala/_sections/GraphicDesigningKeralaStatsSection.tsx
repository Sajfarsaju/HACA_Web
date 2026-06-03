"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const labelTypography = {
    fontFamily: vc,
    fontWeight: 400 as const,
    fontStyle: "normal" as const,
    fontSize: "14px",
    lineHeight: "28px",
    letterSpacing: "0",
    color: "#000000",
};

const numberTypography = {
    fontFamily: vc,
    fontWeight: 500 as const,
    fontStyle: "normal" as const,
    letterSpacing: "0",
    color: "#000000",
};

const STATS = [
    { value: 1000, suffix: "+", label: "Creative Designers Placed" },
    { value: 550, suffix: "+", label: "Hours of Practical Learning" },
    { value: 15, suffix: "+", label: "Design Industry Mentors" },
    { value: 200, suffix: "+", label: "Hiring & Recruiting Partners" },
] as const;

const SEPARATOR_DOT_COLORS = ["#EF4444", "#29C76B", "#2592FF"] as const;

export function GraphicDesigningKeralaStatsSection() {
    const [progress, setProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current || hasAnimated) return;

        const el = sectionRef.current;
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
                return () => {
                    if (frameId) cancelAnimationFrame(frameId);
                };
            },
            { threshold: 0.25 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} className="hidden w-full box-border bg-white lg:block">
            <div className="mx-auto flex w-full max-w-[1440px] justify-center px-4 pb-12 pt-6 sm:px-6 md:px-8 md:py-10 lg:min-h-[202px] lg:px-[60px] lg:py-[60px]">
                <div className="hidden w-full items-center justify-between gap-6 lg:flex">
                    {STATS.map((stat, index) => {
                        const current = Math.round(stat.value * progress);
                        const display = `${current}${stat.suffix}`;

                        return (
                            <Fragment key={stat.label}>
                                <div className="flex min-h-[82px] min-w-0 flex-col items-center justify-center px-1 text-center">
                                    <p className="m-0 mb-[6px]" style={labelTypography}>
                                        {stat.label}
                                    </p>
                                    <p
                                        className={[
                                            "m-0 inline-flex max-w-none items-center justify-center font-medium",
                                            "text-[40px]",
                                            "leading-[43.12000274658203px]",
                                            "min-h-[43.12000274658203px] min-w-[34.59500503540039px]",
                                            "lg:text-[60px] lg:leading-[60px] lg:min-h-[60px] lg:min-w-0",
                                        ].join(" ")}
                                        style={numberTypography}
                                        aria-live="polite"
                                    >
                                        {display}
                                    </p>
                                </div>

                                {index < STATS.length - 1 && (
                                    <span
                                        className="h-3 w-3 shrink-0 rounded-full"
                                        style={{ backgroundColor: SEPARATOR_DOT_COLORS[index] }}
                                        aria-hidden
                                    />
                                )}
                            </Fragment>
                        );
                    })}
                </div>

                <div className="mx-auto grid w-full max-w-[400px] grid-cols-2 gap-x-4 gap-y-10 lg:hidden">
                    {STATS.map((stat) => {
                        const current = Math.round(stat.value * progress);
                        const display = `${current}${stat.suffix}`;
                        return (
                            <div key={stat.label} className="flex flex-col items-center text-center">
                                <p className="m-0 mb-[6px]" style={labelTypography}>
                                    {stat.label}
                                </p>
                                <p
                                    className={[
                                        "m-0 inline-flex max-w-none items-center justify-center font-medium",
                                        "text-[clamp(28px,8.5vw,40px)]",
                                        "leading-[43.12000274658203px]",
                                        "min-h-[43.12000274658203px] min-w-[34.59500503540039px]",
                                    ].join(" ")}
                                    style={numberTypography}
                                    aria-live="polite"
                                >
                                    {display}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
