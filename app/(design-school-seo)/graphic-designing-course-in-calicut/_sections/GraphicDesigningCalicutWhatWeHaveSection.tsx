"use client";

import React, { useEffect, useRef, useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const PILLS = [
    { label: "All major design skills in one course", bg: "#FF5C00" },
    { label: "Offline, hands-on learning", bg: "#8F56FF" },
    { label: "Agency mentors", bg: "#FF5659" },
    { label: "Placement support + internship", bg: "#29C76B" },
    { label: "Portfolio that actually gets you hired", bg: "#2592FF" },
    { label: "Agency-style learning environment", bg: "#F4B400" },
    { label: "Scholarships available", bg: "#FF4DFF" },
] as const;

// Desktop rows match comp screenshot: 3 / 2 / 2 centered.
const DESKTOP_ROWS: ReadonlyArray<ReadonlyArray<(typeof PILLS)[number]>> = [
    [PILLS[0], PILLS[1], PILLS[2]],
    [PILLS[3], PILLS[4]],
    [PILLS[5], PILLS[6]],
] as const;

// Mobile order + full-width pills match the provided screenshot.
const MOBILE_PILLS: ReadonlyArray<{ pill: (typeof PILLS)[number]; full: boolean }> = [
    { pill: PILLS[0], full: true }, // orange (full)
    { pill: PILLS[1], full: false }, // purple
    { pill: PILLS[2], full: false }, // red
    { pill: PILLS[5], full: true }, // yellow (full)
    { pill: PILLS[6], full: false }, // pink
    { pill: PILLS[3], full: false }, // green
    { pill: PILLS[4], full: true }, // blue (full)
] as const;

export function GraphicDesigningCalicutWhatWeHaveSection() {
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
            { threshold: 0.25 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} className="w-full bg-white">
            <div
                className={[
                    "mx-auto w-full max-w-[1440px] box-border",
                    /* Desktop frame */
                    "lg:px-[60px] lg:py-[60px] lg:min-h-[522px]",
                    /* Mobile frame */
                    "px-4 py-5",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[30px]">
                    <div className="flex w-full flex-col items-center gap-3 text-center">
                        <h2 className="m-0 w-full text-center text-black">
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(34px, 4.2vw, 56px)",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Learn the HACA Way
                                <br />
                                with Our Creative
                                <br />
                                Design &amp;
                                <br />
                                Communication
                                <br />
                                Course
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
                                Learn the HACA Way with Our Creative
                                <br />
                                Design &amp; Communication Course
                            </span>
                        </h2>
                        <p
                            className="m-0 text-[#656565]"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "28px",
                                letterSpacing: "0",
                            }}
                        >
                            What You&apos;ll Get in the Course
                        </p>
                    </div>

                    {/* Pills */}
                    {/* Mobile + tablet (`<lg`) */}
                    <div className="w-full lg:hidden">
                        {/* Mobile: single column, left-aligned pills (like screenshot) */}
                        <div className="flex w-full max-w-[343px] flex-col items-start gap-[18px] sm:hidden">
                            {MOBILE_PILLS.map(({ pill, full }, idx) => {
                                return (
                                    <span
                                        key={pill.label}
                                        className={[
                                            "inline-flex max-w-full items-center justify-center rounded-[999px] text-white",
                                            full ? "w-full" : "w-fit",
                                            "h-[48px] px-[22px]",
                                            "transition-all duration-700 ease-out",
                                            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                        ].join(" ")}
                                        style={{
                                            backgroundColor: pill.bg,
                                            fontFamily: vc,
                                            fontWeight: 500,
                                            fontStyle: "normal",
                                            fontSize: "14px",
                                            lineHeight: "28px",
                                            letterSpacing: "0",
                                            transitionDelay: `${Math.min(idx * 70, 420)}ms`,
                                        }}
                                    >
                                        {pill.label}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Tablet: centered wrap, two-ish rows depending on width */}
                        <div className="hidden w-full flex-wrap items-center justify-center gap-3 sm:flex lg:hidden">
                            {PILLS.map((pill, idx) => (
                                <span
                                    key={pill.label}
                                    className={[
                                        "inline-flex w-fit max-w-full items-center justify-center rounded-[999px] px-5 py-3 text-white",
                                        "transition-all duration-700 ease-out",
                                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                    ].join(" ")}
                                    style={{
                                        backgroundColor: pill.bg,
                                        fontFamily: vc,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "28px",
                                        letterSpacing: "0",
                                        transitionDelay: `${Math.min(idx * 70, 420)}ms`,
                                    }}
                                >
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="hidden w-full flex-col items-center gap-4 lg:flex">
                        {DESKTOP_ROWS.map((row, rowIdx) => (
                            <div key={rowIdx} className="flex w-full items-center justify-center gap-5">
                                {row.map((pill, idx) => {
                                    const stagger = rowIdx * 3 + idx;
                                    return (
                                        <span
                                            key={pill.label}
                                            className={[
                                                "inline-flex w-fit max-w-full items-center justify-center rounded-[999px] text-white",
                                                "h-[48px] px-[22px]",
                                                "transition-all duration-700 ease-out",
                                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                            ].join(" ")}
                                            style={{
                                                backgroundColor: pill.bg,
                                                fontFamily: vc,
                                                fontWeight: 500,
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                lineHeight: "28px",
                                                letterSpacing: "0",
                                                transitionDelay: `${Math.min(stagger * 70, 420)}ms`,
                                            }}
                                        >
                                            {pill.label}
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

