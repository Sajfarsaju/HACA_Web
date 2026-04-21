"use client";

import React, { useEffect, useRef, useState } from "react";

// NOTE: This is intentionally NOT reusing `components/sections/StatsSection.tsx`.
// Design School has its own stat values + divider colors.
const RAW_STATS = [
    { value: 600, suffix: "+", label: "Students Trained" },
    { value: 200, suffix: "+", label: "Designers placed" },
    { value: 15, suffix: "+", label: "Industry Mentors" },
    { value: 200, suffix: "+", label: "Recruiting partners" },
] as const;

const DIVIDER_COLORS = ["#FF5C00", "#8F56FF", "#16A34A"] as const;

export function DesignStatsSection() {
    const [progress, setProgress] = useState(0); // 0 → 1
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current || hasAnimated) return;

        const el = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                let frameId: number;
                const duration = 1200; // ms
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
            { threshold: 0.3 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section
            ref={sectionRef}
            className="w-full max-w-[min(1100px,76vw)] mx-auto p-[clamp(35px,5vw,60px)] flex justify-center items-center max-md:max-w-full max-md:py-[35px] max-md:px-[20px]"
        >
            <div className="w-full flex flex-row justify-center items-center gap-[clamp(30px,4vw,51px)] relative opacity-100 flex-nowrap max-[900px]:flex-col max-[900px]:items-center max-[900px]:justify-center max-[900px]:gap-[22px]">
                {RAW_STATS.map((stat, index) => {
                    const current = Math.round(stat.value * progress);
                    const display = `${current}${stat.suffix}`;

                    return (
                        <React.Fragment key={stat.label}>
                            <div className="flex flex-col items-center text-center min-w-[clamp(100px,15vw,200px)] max-[900px]:min-w-0 max-[900px]:w-full max-[900px]:max-w-[320px]">
                                <span
                                    className="text-[#000000] block text-[40px] lg:text-[60px] leading-[100%]"
                                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                                >
                                    {display}
                                </span>
                                <span
                                    className="whitespace-pre-line block mt-[6px] text-[#656565] text-[16px] lg:text-[20px] leading-[100%] text-center"
                                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                                >
                                    {stat.label}
                                </span>
                            </div>

                            {/* Desktop: vertical line between items */}
                            {index < RAW_STATS.length - 1 && (
                                <>
                                    {/* Desktop: vertical line (0×99, 5px border) */}
                                    <div
                                        className="shrink-0 opacity-100 rounded-[100px] max-[900px]:hidden"
                                        style={{ width: 0, height: 99, borderLeft: `5px solid ${DIVIDER_COLORS[index]}` }}
                                        aria-hidden="true"
                                    />
                                    {/* Mobile: horizontal line (0×99 rotated 90°, 5px border) */}
                                    <div
                                        className="hidden max-[900px]:block opacity-100"
                                        style={{ width: 99, height: 0, borderTop: `5px solid ${DIVIDER_COLORS[index]}` }}
                                        aria-hidden="true"
                                    />
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    );
}

