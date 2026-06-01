"use client";

import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;
const SWITZER = "'Switzer', var(--font-outfit), sans-serif";

const ROLES = [
    "Product Designer",
    "UI Designer",
    "UX Designer",
    "Visual Designer",
    "UX Research Assistant",
    "UI UX Designer",
    "Interaction Designer",
    "Frontend Designer (UI-focused)",
] as const;

export function UiUxDesignCalicutCareersSection() {
    const row1 = ROLES.slice(0, 5);
    const row2 = ROLES.slice(5);

    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col items-center gap-4 lg:gap-[40px]">

                    {/* Heading */}
                    <h2 className="m-0 w-full max-w-[1052px] text-center text-black">
                        <span
                            className="lg:hidden"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "35px",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            UI/UX Career Opportunities After This Course
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
                            UI/UX Career Opportunities
                            <br />
                            After This Course
                        </span>
                    </h2>

                    {/* Paragraph */}
                    <p
                        className="m-0 text-center"
                        style={{
                            fontFamily: SWITZER,
                            fontWeight: 500,
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            lineHeight: "120%",
                            letterSpacing: "-0.02em",
                            color: "#000000B2",
                            maxWidth: 600,
                        }}
                    >
                        Once you build your portfolio, you can explore these UI UX design careers in India:
                    </p>

                    {/* Mobile: single column, centered pills */}
                    <div className="flex w-full flex-col items-center gap-y-[2px] md:hidden">
                        {ROLES.map((role) => (
                            <div
                                key={role}
                                className="inline-flex h-[50px] w-fit items-center justify-center rounded-[20px] bg-black px-5 text-white"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(14px, 4vw, 16px)",
                                    lineHeight: "120%",
                                    letterSpacing: "-0.01em",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {role}
                            </div>
                        ))}
                    </div>

                    {/* Desktop/tablet: row 1 (5) + row 2 (3) */}
                    <div className="hidden w-full max-w-[1052px] flex-col items-center gap-y-[2px] md:flex">
                        {[row1, row2].map((row, rowIdx) => (
                            <div
                                key={rowIdx}
                                className="flex w-full flex-nowrap items-center justify-center gap-x-[2px]"
                            >
                                {row.map((role) => (
                                    <div
                                        key={role}
                                        className="inline-flex h-[60px] w-fit items-center justify-center rounded-[20px] bg-black px-5 text-white"
                                        style={{
                                            fontFamily: vc,
                                            fontWeight: 500,
                                            fontStyle: "normal",
                                            fontSize: "clamp(14px, 1.4vw, 18px)",
                                            lineHeight: "120%",
                                            letterSpacing: "-0.01em",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
