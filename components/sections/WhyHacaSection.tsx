"use client"

import React from "react"
import Image from "next/image"

const cards = [
    {
        heading: "Mentors Who\nWork in the Field",
        paragraph:
            "Our mentors are the professionals who work in marketing, design, coding, and finance every day. They share what they've learned from real experience.",
    },
    {
        heading: "Skills Built on\nReal Projects",
        paragraph:
            "Every course at HACA is built around live projects. You don't just learn concepts — you apply them, get feedback, and build a portfolio that speaks for itself.",
    },
    {
        heading: "Placement Support\nThat Works",
        paragraph:
            "From resume reviews to interview prep and direct connections with 200+ placement partners, HACA ensures you're ready the moment opportunity comes.",
    },
    {
        heading: "One Platform,\nFour Schools",
        paragraph:
            "Marketing, Design, Tech, and Finance — all under one roof. Whether you know your path or are still exploring, HACA has a school built just for you.",
    },
]

export function WhyHacaSection() {
    return (
        <section className="w-full section-4k min-h-[576px] mx-auto px-[clamp(16px,2.5vw,60px)] py-[clamp(40px,6vw,80px)] flex flex-row justify-between items-center gap-[clamp(16px,2vw,40px)] opacity-100 max-[900px]:flex-col max-[900px]:items-center max-[900px]:min-h-auto max-[900px]:p-[60px_40px] max-[900px]:gap-[36px] max-md:p-[clamp(20px,5vw,40px)_clamp(14px,5vw,24px)] max-md:gap-[clamp(18px,4vw,26px)] overflow-hidden">
            {/* ── Left Column ── */}
            <div className="min-w-0 max-w-[453px] flex flex-col items-start text-left gap-[20px] shrink-0 max-[900px]:max-w-full max-[900px]:items-center max-[900px]:text-center max-md:gap-[clamp(8px,2vw,12px)] max-md:w-full">
                {/* Badge */}
                <button className="w-[175px] h-[64px] -ml-[6px] flex items-center justify-center p-0 rounded-[100px] border-none bg-transparent cursor-default max-[900px]:ml-0 max-md:w-[130px] max-md:h-[48px]" aria-label="Why HACA">
                    <Image
                        src="/photos/main/why haca.svg"
                        alt="Why HACA"
                        width={175}
                        height={64}
                        className="w-full h-full object-contain"
                    />
                </button>

                {/* Heading + Paragraph */}
                <div className="flex flex-col items-start text-left gap-[16px] max-[900px]:items-center max-[900px]:text-center max-md:gap-[clamp(10px,3vw,16px)]">
                    <h2 className="font-rethink font-bold text-[clamp(22px,2.5vw,32px)] leading-[110%] tracking-[0%] text-[#ffffff] m-0 max-[900px]:text-[28px] max-md:text-[clamp(20px,5.5vw,26px)] max-md:max-w-full">The &apos;Why&apos; Behind HACA</h2>
                    <p className="font-rethink font-medium text-[clamp(14px,1.5vw,20px)] leading-[140%] tracking-[0%] text-[#A7ADBE] m-0 max-w-[461px] max-[900px]:text-[17px] max-[900px]:max-w-full max-md:text-[clamp(13px,3.5vw,16px)] max-md:text-center">
                        You&apos;ll learn real skills, gain real experience, and get real
                        opportunities, all in one place. That&apos;s what HACA is all about.
                    </p>
                </div>
            </div>

            {/* ── Right: 2×2 Flip Card Grid ── */}
            {/* Note: In tailwind we use group on the parent to accomplish the hover effects for the layers inside. The CSS logic for the glow background on mobile and desktop has been maintained using arbitrary values. */}
            <div className="min-w-0 flex-1 max-w-[644px] grid grid-cols-2 gap-[clamp(10px,1.5vw,22px)] rounded-[24px] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(30,80,255,0.55)_0%,rgba(15,30,120,0.35)_35%,rgba(0,3,25,0.0)_70%)] max-[900px]:flex-none max-[900px]:w-max max-[900px]:max-w-full max-[900px]:gap-[16px] max-[900px]:justify-items-center max-[900px]:mx-auto max-md:grid-cols-1 max-md:gap-[16px] max-md:w-full max-md:rounded-[20px] max-md:bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(30,80,255,0.55)_0%,rgba(15,30,120,0.35)_35%,rgba(0,3,25,0.0)_70%)] max-md:justify-items-center">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="group w-full h-[clamp(140px,14vw,193px)] rounded-[20px] border border-[rgba(35,45,107,0.8)] bg-[rgba(0,3,25,0.88)] p-[clamp(14px,1.5vw,20px)] overflow-hidden relative cursor-default shadow-[inset_0_0_30px_rgba(20,60,200,0.07)] max-[900px]:w-full max-[900px]:max-w-[335px] max-[900px]:h-auto max-[900px]:min-h-[193px] max-[900px]:p-[20px] max-[900px]:rounded-[20px] max-[900px]:border max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-start max-[900px]:items-center max-[900px]:mx-auto max-md:max-w-[335px] max-md:h-auto max-md:min-h-[193px] max-md:p-[20px] max-md:rounded-[20px] max-md:border max-md:border-[#232D6B] max-md:shadow-[inset_0_0_30px_rgba(20,60,200,0.06)] max-md:mx-auto"
                    >
                        {/* Grid background with subtle lines and fade (soft at bottom-left, clearer toward top-right) */}
                        <div
                            className="pointer-events-none absolute inset-[1px] rounded-[18px]"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(to right, rgba(51,85,170,0.14) 0, rgba(51,85,170,0.14) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(to bottom, rgba(51,85,170,0.14) 0, rgba(51,85,170,0.14) 1px, transparent 1px, transparent 28px)",
                                backgroundBlendMode: "screen",
                                backgroundPosition: "left bottom",
                                WebkitMaskImage:
                                    "linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.9) 72%, rgba(0,0,0,1) 85%)",
                                maskImage:
                                    "linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.9) 72%, rgba(0,0,0,1) 85%)",
                            }}
                        />

                        {/* Gradient border overlay matching Figma radial stroke */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-[20px] border z-[1]"
                            style={{
                                borderWidth: "1.11px",
                                borderImageSlice: 1,
                                borderImageSource:
                                    "radial-gradient(151.12% 142.53% at 100% -42.64%, rgba(181, 211, 253, 0.3) 0%, rgba(181, 211, 253, 0) 88.4%)",
                            }}
                        />

                        <div className="w-full h-full relative z-[2] flex flex-col justify-end max-[900px]:static max-[900px]:justify-start max-[900px]:items-center max-[900px]:gap-[6px] max-[900px]:h-auto max-[900px]:w-[239px] max-[900px]:max-w-full max-[900px]:min-w-0 max-md:justify-start max-md:gap-[6px] max-md:w-[239px] max-md:max-w-full max-md:min-w-0">
                            {/* Heading layer - visible on tablet/mobile; display:contents removes wrapper on tablet/mobile */}
                            <div className="absolute bottom-0 left-0 w-full min-w-0 shrink-0 transition-transform duration-400 ease-in-out opacity-100 translate-y-0 group-hover:-translate-y-[110%] group-hover:opacity-0 max-[900px]:contents max-md:contents">
                                <h3 className="font-rethink font-semibold text-[clamp(18px,1.8vw,24px)] leading-[110%] tracking-[-0.02em] text-[#ffffff] m-0 max-[900px]:font-semibold max-[900px]:text-[20px] max-[900px]:leading-[110%] max-[900px]:tracking-[-0.02em] max-[900px]:text-center max-md:font-semibold max-md:text-[20px] max-md:leading-[110%] max-md:tracking-[-0.02em] max-md:text-center">
                                    {card.heading.split("\n").map((line, li) => (
                                        <React.Fragment key={li}>
                                            {line}
                                            {li < card.heading.split("\n").length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                            {/* Paragraph layer - visible on tablet/mobile; display:contents removes wrapper on tablet/mobile */}
                            <div className="absolute bottom-0 left-0 w-full min-w-0 transition-all duration-400 ease-in-out opacity-0 translate-y-[100%] group-hover:translate-y-0 group-hover:opacity-100 max-[900px]:contents max-md:contents">
                                <p className="font-rethink font-medium text-[clamp(12px,1vw,14px)] leading-[140%] tracking-[-0.02em] text-[#A7ADBE] m-0 break-words max-[900px]:font-medium max-[900px]:text-[14px] max-[900px]:leading-[110%] max-[900px]:tracking-[-0.02em] max-[900px]:text-center max-md:font-medium max-md:text-[14px] max-md:leading-[110%] max-md:tracking-[-0.02em] max-md:text-center">{card.paragraph}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
