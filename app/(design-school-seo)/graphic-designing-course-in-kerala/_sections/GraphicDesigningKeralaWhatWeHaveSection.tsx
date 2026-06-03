"use client";

import React, { useEffect, useRef, useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type Pill = { label: string; desktopLabel?: string; bg: string };

const PILLS: Pill[] = [
    { label: "Every essential design skill included in one course", desktopLabel: "Every essential design skill\nincluded in one course", bg: "#FF5C00" },
    { label: "Practical offline sessions with real project exposure", desktopLabel: "Practical offline sessions\nwith real project exposure", bg: "#8F56FF" },
    { label: "Guidance from industry professionals and agency mentors", desktopLabel: "Guidance from industry\nprofessionals and agency mentors", bg: "#FF5659" },
    { label: "Portfolio-focused learning designed for real hiring opportunities", bg: "#29C76B" },
    { label: "Internship and placement assistance", bg: "#2592FF" },
    { label: "Scholarship opportunities for eligible students", bg: "#F4B400" },
    { label: "A professional agency-like creative learning atmosphere", bg: "#FF4DFF" },
];

const DESKTOP_ROWS: ReadonlyArray<ReadonlyArray<Pill>> = [
    [PILLS[0], PILLS[1], PILLS[2]],
    [PILLS[3], PILLS[4]],
    [PILLS[5], PILLS[6]],
];

const MOBILE_PILLS: ReadonlyArray<{ pill: Pill; full: boolean }> = [
    { pill: PILLS[0], full: true },
    { pill: PILLS[1], full: true },
    { pill: PILLS[2], full: false },
    { pill: PILLS[5], full: false },
    { pill: PILLS[6], full: true },
    { pill: PILLS[3], full: true },
    { pill: PILLS[4], full: false },
] as const;

export function GraphicDesigningKeralaWhatWeHaveSection() {
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
                    "lg:px-[60px] lg:py-[60px] lg:min-h-[522px]",
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
                                Build Skills That
                                <br />
                                Modern Creative
                                <br />
                                Industries Need
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
                                Build Skills That Modern Creative Industries Need
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
                            What You&apos;ll Experience in the CDC Program
                        </p>
                    </div>

                    {/* Mobile: xs (<640px) */}
                    <div className="flex w-full flex-col items-center gap-[clamp(12px,3.5vw,18px)] sm:hidden">
                        {MOBILE_PILLS.map(({ pill, full }, idx) => (
                            <span
                                key={pill.label}
                                className={[
                                    "inline-flex max-w-full items-center justify-center text-center rounded-[999px] text-white",
                                    full ? "w-full" : "w-fit",
                                    "transition-all duration-700 ease-out",
                                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                ].join(" ")}
                                style={{
                                    backgroundColor: pill.bg,
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(12px, 3.5vw, 14px)",
                                    lineHeight: "1.4",
                                    letterSpacing: "0",
                                    paddingTop: "clamp(10px, 3vw, 14px)",
                                    paddingBottom: "clamp(10px, 3vw, 14px)",
                                    paddingLeft: "clamp(14px, 4.5vw, 22px)",
                                    paddingRight: "clamp(14px, 4.5vw, 22px)",
                                    transitionDelay: `${Math.min(idx * 70, 420)}ms`,
                                }}
                            >
                                {pill.label}
                            </span>
                        ))}
                    </div>

                    {/* Mobile: sm–md (640px–1023px) */}
                    <div className="hidden w-full flex-wrap items-center justify-center sm:flex lg:hidden"
                        style={{ gap: "clamp(8px, 2vw, 14px)" }}
                    >
                        {PILLS.map((pill, idx) => (
                            <span
                                key={pill.label}
                                className={[
                                    "inline-flex w-fit max-w-full items-center justify-center rounded-[999px] text-white",
                                    "transition-all duration-700 ease-out",
                                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                ].join(" ")}
                                style={{
                                    backgroundColor: pill.bg,
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(12px, 1.8vw, 14px)",
                                    lineHeight: "1.4",
                                    letterSpacing: "0",
                                    paddingTop: "clamp(7px, 1.4vw, 12px)",
                                    paddingBottom: "clamp(7px, 1.4vw, 12px)",
                                    paddingLeft: "clamp(14px, 3vw, 20px)",
                                    paddingRight: "clamp(14px, 3vw, 20px)",
                                    transitionDelay: `${Math.min(idx * 70, 420)}ms`,
                                }}
                            >
                                {pill.label}
                            </span>
                        ))}
                    </div>

                    {/* Desktop */}
                    <div className="hidden w-full flex-col items-center gap-4 lg:flex">
                        {DESKTOP_ROWS.map((row, rowIdx) => {
                            const isTallRow = rowIdx === 0;
                            return (
                                <div
                                    key={rowIdx}
                                    className="flex w-full items-center justify-center"
                                    style={{ gap: isTallRow ? "clamp(8px, 1.2vw, 14px)" : "clamp(12px, 1.8vw, 20px)" }}
                                >
                                    {row.map((pill, idx) => {
                                        const stagger = rowIdx * 3 + idx;
                                        const displayLabel = isTallRow && pill.desktopLabel ? pill.desktopLabel : pill.label;
                                        return (
                                            <span
                                                key={pill.label}
                                                className={[
                                                    "inline-flex w-fit items-center justify-center rounded-[999px] text-white text-center",
                                                    isTallRow
                                                        ? "whitespace-pre-line leading-[1.25] py-[10px] px-[clamp(18px,2vw,28px)]"
                                                        : "h-[48px] px-[22px] whitespace-nowrap",
                                                    "transition-all duration-700 ease-out",
                                                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                                ].join(" ")}
                                                style={{
                                                    backgroundColor: pill.bg,
                                                    fontFamily: vc,
                                                    fontWeight: 500,
                                                    fontStyle: "normal",
                                                    fontSize: "clamp(13px, 1.1vw, 15px)",
                                                    letterSpacing: "0",
                                                    minHeight: isTallRow ? "clamp(56px, 5.5vw, 68px)" : undefined,
                                                    transitionDelay: `${Math.min(stagger * 70, 420)}ms`,
                                                }}
                                            >
                                                {displayLabel}
                                            </span>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
