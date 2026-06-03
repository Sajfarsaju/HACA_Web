"use client";

import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const ROLES = [
    "Graphic Designer",
    "Visual Designer",
    "Brand Designer",
    "UI/UX Designer",
    "Motion Graphic Artist",
    "Video Editor",
    "Creative Designer",
    "Social Media Designer",
    "Illustration Artist",
    "Junior Art Director",
] as const;

export function GraphicDesigningKeralaBecomeSection() {
    const row1 = ROLES.slice(0, 5);
    const row2 = ROLES.slice(5, 10);

    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col items-center gap-3 sm:gap-4 lg:gap-[40px]">
                    <div className="flex w-full max-w-[1052px] flex-col items-center gap-3 text-center">
                        <h2 className="m-0 w-full text-balance text-black">
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
                                Career Opportunities After
                                <br />
                                Design School&apos;s CDC Course
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
                                Career Opportunities After Design School&apos;s CDC Course
                            </span>
                        </h2>
                        <p
                            className="m-0 w-full max-w-[700px] text-black/60"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.4vw, 16px)",
                                lineHeight: "120%",
                            }}
                        >
                            Our Graphic Designing Course in Kerala prepares you for multiple creative roles across agencies, startups, production houses, and freelance careers.
                        </p>
                    </div>

                    {/* Mobile: single column */}
                    <div className="flex w-full max-w-[1052px] flex-col items-center gap-y-[2px] md:hidden">
                        {ROLES.map((role) => (
                            <div
                                key={role}
                                className="inline-flex h-[50px] w-fit items-center justify-center rounded-[20px] bg-black px-4 text-white"
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

                    {/* Desktop/tablet: two rows */}
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
                                            fontSize: "clamp(14px, 1.4vw, 16px)",
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
