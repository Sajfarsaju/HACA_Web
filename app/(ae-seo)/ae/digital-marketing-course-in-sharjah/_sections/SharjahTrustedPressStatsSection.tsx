"use client";

import Image from "next/image";
import React from "react";

const PRESS_LOGOS = [
    {
        key: "tedx",
        src: "/photos/main/tedx.svg",
        alt: "TEDx",
        wrapperClass:
            "flex h-[clamp(36px,5vw,52px)] shrink-0 items-center justify-center w-[clamp(56px,7vw,88px)] max-md:w-[56px]",
        width: 240,
        height: 81,
        imgClass: "h-auto w-full max-h-[40px] object-contain object-center opacity-95",
    },
    {
        key: "khaleej-times",
        src: "/photos/ae/khaleej-times.svg",
        alt: "Khaleej Times",
        wrapperClass:
            "flex h-[clamp(28px,4vw,40px)] shrink-0 items-center justify-center w-[clamp(120px,14vw,200px)] max-md:w-[min(115px,28vw)]",
        width: 230,
        height: 40,
        imgClass: "h-auto w-full object-contain brightness-0 invert opacity-95",
    },
    {
        key: "ads-world",
        src: "/photos/ae/ads-world.svg",
        alt: "Ads:World",
        wrapperClass:
            "flex h-[clamp(28px,4vw,40px)] shrink-0 items-center justify-center w-[clamp(100px,12vw,170px)] max-md:w-[min(100px,28vw)]",
        width: 192,
        height: 40,
        imgClass: "h-auto w-full object-contain brightness-0 invert opacity-95",
    },
    {
        key: "gulf-suprabhaatham",
        src: "/photos/main/press new 1.svg",
        alt: "Gulf Suprabhaatham",
        wrapperClass:
            "flex h-[clamp(28px,4vw,40px)] shrink-0 items-center justify-center w-[clamp(88px,10vw,150px)] max-md:w-[min(85px,26vw)]",
        width: 160,
        height: 40,
        imgClass: "h-auto w-full object-contain brightness-0 invert opacity-95",
    },
] as const;

const MARQUEE_TRACK = [...PRESS_LOGOS, ...PRESS_LOGOS];

const STATS = [
    { id: "hours",        value: "150",  suffix: "+", lines: ["Live Learning", "Hours"] as const },
    { id: "students",     value: "5000", suffix: "+", lines: ["Students",  "Trained"] as const },
    { id: "partners",     value: "100",  suffix: "+", lines: ["Hiring",    "Partners"] as const },
    { id: "mentors",      value: "100",  suffix: "+", lines: ["Mentor",    "Practitioners"] as const },
] as const;

const HEADING_ID = "sharjah-trusted-heading";

export function SharjahTrustedPressStatsSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <style>{`
                @keyframes sharjah-press-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .sharjah-press-marquee-track {
                    display: flex;
                    width: max-content;
                    align-items: center;
                    gap: clamp(20px, 5vw, 56px);
                    animation: sharjah-press-marquee 36s linear infinite;
                    will-change: transform;
                }
                .sharjah-press-marquee-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .sharjah-press-marquee-track {
                        animation: none;
                        transform: none;
                    }
                }
                .sharjah-stat-num {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 500;
                    font-size: clamp(40px, 6vw, 68px);
                    line-height: 100%;
                    letter-spacing: 0;
                    color: #ffffff;
                }
                .sharjah-stat-plus {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 500;
                    font-size: clamp(40px, 6vw, 68px);
                    line-height: 100%;
                    letter-spacing: 0;
                    color: #015aff;
                    margin-left: 6px;
                }
                .sharjah-stat-label {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 400;
                    font-size: clamp(12px, 1.1vw, 14px);
                    line-height: 120%;
                    letter-spacing: 0;
                    color: #8a8a8a;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    white-space: nowrap;
                }
            `}</style>

            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col items-center px-[clamp(16px,4.16vw,60px)] py-[clamp(40px,6vw,80px)] md:px-[clamp(24px,5vw,48px)]">

                <p
                    className="m-0 mb-[clamp(14px,2vw,24px)] text-center text-[14px] font-medium leading-none text-[#b0b0b0] md:text-[15px] lg:text-[16px]"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                    We&apos;re Proudly Featured On:
                </p>

                <p className="sr-only">
                    HACA has been featured in TEDx, Khaleej Times, Ads:World, Gulf Suprabhaatham and other leading publications.
                </p>

                {/* Marquee */}
                <div
                    className="mb-[clamp(28px,5vw,48px)] w-full min-w-0 overflow-hidden"
                    aria-hidden="true"
                >
                    <div className="sharjah-press-marquee-track">
                        {MARQUEE_TRACK.map((logo, index) => (
                            <div key={`${logo.key}-${index}`} className={logo.wrapperClass}>
                                <Image
                                    src={logo.src}
                                    alt=""
                                    width={logo.width}
                                    height={logo.height}
                                    className={logo.imgClass}
                                    sizes="(max-width: 768px) 120px, 200px"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h2
                    id={HEADING_ID}
                    className="m-0 mb-[clamp(32px,5vw,56px)] max-w-[min(920px,100%)] text-center font-semibold text-[clamp(28px,6vw,52px)] leading-[1.05] tracking-[-0.02em] text-white [text-rendering:geometricPrecision] md:text-[clamp(36px,4.2vw,48px)] lg:text-[clamp(40px,3.2vw,56px)]"
                    style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                >
                    Milestones Built Through Learning &amp; Growth
                </h2>

                {/* Desktop stats row */}
                <ul
                    role="list"
                    className="hidden w-full max-w-[1320px] list-none flex-row items-center justify-between gap-[clamp(12px,2vw,28px)] p-0 md:flex"
                >
                    {STATS.map((stat) => (
                        <li
                            key={stat.id}
                            className="flex min-w-0 list-none items-center gap-[clamp(8px,1.2vw,16px)]"
                        >
                            <div className="flex shrink-0 items-baseline whitespace-nowrap">
                                <span className="sharjah-stat-num">{stat.value}</span>
                                <span className="sharjah-stat-plus">{stat.suffix}</span>
                            </div>
                            <p className="sharjah-stat-label">
                                {stat.lines.map((line, i) => (
                                    <React.Fragment key={line}>
                                        {line}
                                        {i < stat.lines.length - 1 ? <br /> : null}
                                    </React.Fragment>
                                ))}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Mobile stats staggered */}
                <ul role="list" className="flex w-full max-w-[1320px] list-none flex-col gap-5 p-0 md:hidden">
                    {STATS.map((stat, index) => {
                        const rowAlign =
                            index === 1 || index === 3
                                ? "flex w-full list-none flex-row items-center justify-end gap-[10px]"
                                : "flex w-full list-none flex-row items-center justify-start gap-[10px]";
                        return (
                            <li key={stat.id} className={`${rowAlign} min-w-0`}>
                                <div className="flex shrink-0 flex-nowrap items-center justify-start">
                                    <span className="sharjah-stat-num">{stat.value}</span>
                                    <span className="sharjah-stat-plus">{stat.suffix}</span>
                                </div>
                                <p className="sharjah-stat-label min-h-[48px] w-[min(100px,28vw)]">
                                    {stat.lines.map((line, i) => (
                                        <React.Fragment key={line}>
                                            {line}
                                            {i < stat.lines.length - 1 ? <br /> : null}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}
