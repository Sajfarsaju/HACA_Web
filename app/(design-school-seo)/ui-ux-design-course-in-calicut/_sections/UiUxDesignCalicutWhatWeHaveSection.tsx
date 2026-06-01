"use client";

import { useEffect, useRef, useState } from "react";

const SWITZER = "'Switzer', var(--font-outfit), sans-serif";
const VC = '"VC Nudge Trial Normal", sans-serif';
const PILL_BG = "#14BCFF";

const PILLS = [
    "Beginner-friendly learning approach",
    "Learn Figma with lifetime access (worth $180/year)",
    "Structured step-by-step curriculum",
    "Real-world projects instead of practice-only work",
    "Mentorship from industry designers",
    "Portfolio development from Day 1",
    "Learn AI-powered design workflows",
    "Get placement support + freelance guidance",
    "Flexible EMI options to make learning more accessible",
] as const;

const DESKTOP_ROWS: ReadonlyArray<ReadonlyArray<(typeof PILLS)[number]>> = [
    [PILLS[0], PILLS[1], PILLS[2]],
    [PILLS[3], PILLS[4], PILLS[5]],
    [PILLS[6], PILLS[7], PILLS[8]],
];

export function UiUxDesignCalicutWhatWeHaveSection() {
    const ref = useRef<HTMLElement | null>(null);
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
            <div
                className={[
                    "mx-auto w-full max-w-[1440px] box-border",
                    "lg:px-[60px] lg:py-[60px]",
                    "px-[16px] py-[20px]",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1293px] flex-col items-center lg:gap-[40px] gap-[30px]">

                    {/* Heading + Paragraph */}
                    <div className="flex w-full max-w-[965px] flex-col items-center gap-[20px] text-center">
                        {/* Heading */}
                        <h2 className="m-0 w-full text-center text-black">
                            {/* Desktop */}
                            <span
                                className="hidden lg:inline"
                                style={{
                                    fontFamily: SWITZER,
                                    fontWeight: 500,
                                    fontSize: 45,
                                    lineHeight: "120%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Learn UI/UX Design the Practical Way
                                <br />
                                with Design School by HACA
                            </span>
                            {/* Mobile */}
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: SWITZER,
                                    fontWeight: 500,
                                    fontSize: 35,
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Learn UI/UX Design the Practical Way
                                <br />
                                with Design School by HACA
                            </span>
                        </h2>

                        {/* Paragraph */}
                        {/* Desktop */}
                        <p
                            className="m-0 hidden lg:block"
                            style={{
                                fontFamily: SWITZER,
                                fontWeight: 500,
                                fontSize: 20,
                                lineHeight: "100%",
                                letterSpacing: "-0.02em",
                                color: "#000000B2",
                            }}
                        >
                            Why HACA&apos;s UI UX Design Course in Calicut Stands Out
                        </p>
                        {/* Mobile */}
                        <p
                            className="m-0 lg:hidden"
                            style={{
                                fontFamily: VC,
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: "110%",
                                letterSpacing: "-0.03em",
                                color: "#000000B2",
                            }}
                        >
                            Why HACA&apos;s UI UX Design Course in Calicut Stands Out
                        </p>
                    </div>

                    {/* Pills — Mobile */}
                    <div className="flex w-full flex-col items-center gap-[20px] lg:hidden">
                        {PILLS.map((label, idx) => (
                            <span
                                key={label}
                                className={[
                                    "flex w-full items-center justify-center rounded-[999px]",
                                    "px-[22px] py-[14px]",
                                    "transition-all duration-700 ease-out",
                                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                ].join(" ")}
                                style={{
                                    backgroundColor: PILL_BG,
                                    fontFamily: SWITZER,
                                    fontWeight: 500,
                                    fontSize: 14,
                                    lineHeight: "120%",
                                    letterSpacing: "-0.02em",
                                    color: "#000000",
                                    textAlign: "center",
                                    transitionDelay: `${Math.min(idx * 70, 500)}ms`,
                                }}
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* Pills — Desktop */}
                    <div className="hidden w-full flex-col items-center gap-[20px] lg:flex">
                        {DESKTOP_ROWS.map((row, rowIdx) => (
                            <div key={rowIdx} className="flex w-full items-center justify-center gap-[20px]">
                                {row.map((label, idx) => {
                                    const stagger = rowIdx * 3 + idx;
                                    return (
                                        <span
                                            key={label}
                                            className={[
                                                "inline-flex items-center justify-center rounded-[999px] text-white",
                                                "h-[54px] px-[28px]",
                                                "transition-all duration-700 ease-out",
                                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                            ].join(" ")}
                                            style={{
                                                backgroundColor: PILL_BG,
                                                fontFamily: SWITZER,
                                                fontWeight: 500,
                                                fontSize: 16,
                                                lineHeight: "100%",
                                                letterSpacing: "-0.02em",
                                                transitionDelay: `${Math.min(stagger * 70, 500)}ms`,
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {label}
                                        </span>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
