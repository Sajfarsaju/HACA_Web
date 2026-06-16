"use client";

import { useEffect, useRef, useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const WHY_ITEMS = [
    "Beginner-friendly learning structure",
    "Learn industry tools with guided support",
    "Step-by-step design training",
    "AI-powered creative workflows",
    "Portfolio development from day one",
    "Real projects instead of repetitive exercises",
    "Learn from practising designers",
    "Placement support and freelance guidance",
    "Flexible EMI options available",
    "Lifetime access to learning resources",
] as const;

// Desktop: 3 / 3 / 3 / 1
const DESKTOP_ROWS: ReadonlyArray<ReadonlyArray<string>> = [
    [WHY_ITEMS[0], WHY_ITEMS[1], WHY_ITEMS[2]],
    [WHY_ITEMS[3], WHY_ITEMS[4], WHY_ITEMS[5]],
    [WHY_ITEMS[6], WHY_ITEMS[7], WHY_ITEMS[8]],
    [WHY_ITEMS[9]],
];

export function GraphicDesignOnlineWhyChooseSection() {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} className="w-full bg-white" aria-labelledby="gd-online-why-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[30px]">

                    {/* Heading + subtitle — centered */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h2 id="gd-online-why-heading" className="m-0 text-black text-center">
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontSize: "35px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Learn Graphic Design<br />Online with HACA<br />Design School
                            </span>
                            <span
                                className="hidden lg:inline"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontSize: "60px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Learn Graphic Design Online with<br />HACA Design School
                            </span>
                        </h2>
                        <p
                            className="m-0 text-[#656565]"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "28px",
                            }}
                        >
                            Why Students Choose Our Online Graphic Design Course
                        </p>
                    </div>

                    {/* Mobile pills — one per row, centered */}
                    <div className="flex w-full flex-col items-center gap-[14px] lg:hidden">
                        {WHY_ITEMS.map((label, idx) => (
                            <span
                                key={label}
                                className={[
                                    "inline-flex items-center justify-center rounded-[999px] text-white whitespace-nowrap",
                                    "h-[48px] px-[22px]",
                                    "transition-all duration-700 ease-out",
                                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                ].join(" ")}
                                style={{
                                    backgroundColor: "#29C76B",
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "28px",
                                    transitionDelay: `${Math.min(idx * 70, 500)}ms`,
                                }}
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* Desktop pills — 3 / 3 / 3 / 1 rows */}
                    <div className="hidden w-full flex-col items-center gap-4 lg:flex">
                        {DESKTOP_ROWS.map((row, rowIdx) => (
                            <div key={rowIdx} className="flex w-full items-center justify-center gap-5">
                                {row.map((label, idx) => {
                                    const stagger = rowIdx * 3 + idx;
                                    return (
                                        <span
                                            key={label}
                                            className={[
                                                "inline-flex items-center justify-center rounded-[999px] text-white whitespace-nowrap",
                                                "h-[56px] px-[32px]",
                                                "transition-all duration-700 ease-out",
                                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                                            ].join(" ")}
                                            style={{
                                                backgroundColor: "#29C76B",
                                                fontFamily: vc,
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "28px",
                                                transitionDelay: `${Math.min(stagger * 70, 560)}ms`,
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
