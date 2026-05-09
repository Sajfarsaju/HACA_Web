"use client";

import Image from "next/image"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

const ACCENT = "#0066FF"

type Testimonial = {
    id: string
    quote: string
    name: string
    role: string
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: "t-1",
        quote: "I completed my Digital Marketing course at HACA (Haris & Co Academy), and it was a great experience. The classes were clear, practical, and easy to understand. The mentors were very supportive and always ready to help. I learned real skills that I can use in real projects. I highly recommend HACA for anyone who wants to start or grow in digital marketing.",
        name: "Fathima Faathi",
        role: "Digital Marketer",
    },
    {
        id: "t-2",
        quote: "The sessions were structured, hands-on, and focused on execution. The feedback loops helped me improve fast, and the support was consistent throughout the course.",
        name: "Nadha Faizal",
        role: "Digital Marketer",
    },
    {
        id: "t-3",
        quote: "I loved the practical approach—ads, copy, landing pages, and tracking. It made the learning feel real and helped me build confidence to apply for roles.",
        name: "Rahul Kumar",
        role: "Marketing Associate",
    },
]

const COLOR_TRANSITION = "0.55s ease"

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d={dir === "left" ? "M19 12H5m0 0 6-6m-6 6 6 6" : "M5 12h14m0 0-6-6m6 6-6 6"}
                stroke="currentColor"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function MarketingTestimonialsSection() {
    const [active, setActive] = useState(0)
    const [isDark, setIsDark] = useState(false)
    const total = TESTIMONIALS.length

    useEffect(() => {
        const handler = (e: Event) => {
            const { isDark: d } = (e as CustomEvent<{ isDark: boolean }>).detail
            setIsDark(d)
        }
        window.addEventListener("marketing-page-color", handler)
        return () => window.removeEventListener("marketing-page-color", handler)
    }, [])

    const t = TESTIMONIALS[active]

    const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total])
    const next = useCallback(() => setActive((a) => (a + 1) % total), [total])

    const heading = useMemo(
        () => (
            <span className="inline-block text-left leading-[1]">
                <span className="block whitespace-nowrap">Hear It From Those Who&apos;ve</span>
                <span className="block">Been There</span>
            </span>
        ),
        []
    )

    return (
        <section
            id="marketing-testimonials"
            className="w-full"
            aria-labelledby="marketing-testimonials-heading"
        >
            <div
                className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(22px,2.8vw,40px)] px-[clamp(16px,4.16vw,60px)] py-[clamp(18px,2.6vw,30px)] lg:h-[600.8242px]"
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3" style={{ backgroundColor: ACCENT }} aria-hidden />
                        <p
                            className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                            style={{ color: "var(--tf-text, #000000)", transition: `color ${COLOR_TRANSITION}` }}
                        >
                            Testimonials
                        </p>
                    </div>

                    <h2
                        id="marketing-testimonials-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-right lg:leading-[1.08]
                        "
                        style={{ color: "var(--tf-text, #000000)", transition: `color ${COLOR_TRANSITION}` }}
                    >
                        {heading}
                    </h2>
                </header>

                <div className="relative flex w-full min-w-0 flex-1 flex-col items-center justify-center">
                    <div className="relative mx-auto w-full max-w-[min(100%,940px)] pt-[clamp(26px,3.2vw,36px)]">
                        {/* Quote mark — bg matches section so it "cuts" the card border */}
                        <motion.div
                            className="pointer-events-none absolute left-[clamp(18px,2.6vw,30px)] top-[calc(clamp(26px,3.2vw,36px)-6px)] z-10 -translate-y-[80%] px-2"
                            animate={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
                            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <Image
                                src="/images/testimonials/inverted-comma.svg"
                                alt=""
                                width={80}
                                height={57}
                                className="h-auto w-[clamp(62px,5vw,80px)]"
                                aria-hidden
                                priority
                            />
                        </motion.div>

                        {/* Card */}
                        <div
                            className="
                                flex flex-col
                                rounded-[20px] bg-transparent
                                px-[clamp(16px,2.2vw,20px)] pb-[clamp(16px,2.2vw,20px)] pt-[clamp(20px,2.8vw,30px)]
                                gap-[clamp(16px,2.4vw,26px)]
                                lg:h-[312px] lg:w-[940px] lg:px-[20px] lg:pb-[20px] lg:pt-[30px] lg:gap-[26px]
                            "
                            style={{ border: "1px solid", borderColor: "var(--tf-border, #000000)", transition: `border-color ${COLOR_TRANSITION}` }}
                        >
                            <div
                                className="
                                    m-0 text-left font-['Satoshi',sans-serif] font-medium tracking-normal text-[clamp(14px,1.8vw,18px)]
                                    leading-[1.45]
                                    lg:h-[169px] lg:w-[900px] lg:text-[24px] lg:leading-[1]
                                    overflow-hidden
                                "
                                style={{ color: "var(--tf-text, #000000)", transition: `color ${COLOR_TRANSITION}` }}
                            >
                                {t.id === "t-1" ? (
                                    <>
                                        <div className="hidden lg:flex flex-col gap-[6px]">
                                            <span className="block">I completed my Digital Marketing course at HACA (Haris &amp; Co Academy), and it</span>
                                            <span className="block">was a great experience. The classes were clear, practical, and easy to understand.</span>
                                            <span className="block">The mentors were very supportive and always ready to help. I learned real skills that</span>
                                            <span className="block">I can use in real projects. I highly recommend HACA for anyone who wants to start</span>
                                            <span className="block">or grow in digital marketing.</span>
                                        </div>
                                        <span className="lg:hidden">{t.quote}</span>
                                    </>
                                ) : (
                                    <span>{t.quote}</span>
                                )}
                            </div>

                            <div className="text-left lg:mt-auto">
                                <p
                                    className="m-0 font-['Satoshi',sans-serif] text-[clamp(16px,1.9vw,20px)] font-bold leading-none"
                                    style={{ color: "var(--tf-text, #000000)", transition: `color ${COLOR_TRANSITION}` }}
                                >
                                    {t.name}
                                </p>
                                <p className="mt-2 m-0 font-['Satoshi',sans-serif] text-[clamp(12px,1.3vw,14px)] font-medium leading-none text-[#A7ADBE]">
                                    {t.role}
                                </p>
                            </div>

                            {/* Mobile-only arrows */}
                            <div className="flex w-full items-center justify-center gap-[clamp(8px,1vw,10px)] md:hidden">
                                <button type="button" onClick={prev} aria-label="Previous testimonial" className="grid h-[clamp(40px,4.2vw,48px)] w-[clamp(40px,4.2vw,48px)] cursor-pointer place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 active:scale-95">
                                    <ArrowIcon dir="left" />
                                </button>
                                <button type="button" onClick={next} aria-label="Next testimonial" className="grid h-[clamp(40px,4.2vw,48px)] w-[clamp(40px,4.2vw,48px)] cursor-pointer place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 active:scale-95">
                                    <ArrowIcon dir="right" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tablet/Desktop arrows */}
                    <div className="mt-[clamp(16px,2.8vw,24px)] hidden w-full items-center justify-center gap-[clamp(8px,1vw,10px)] md:flex">
                        <button type="button" onClick={prev} aria-label="Previous testimonial" className="grid h-[clamp(40px,4.2vw,48px)] w-[clamp(40px,4.2vw,48px)] cursor-pointer place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 hover:scale-105 active:scale-95">
                            <ArrowIcon dir="left" />
                        </button>
                        <button type="button" onClick={next} aria-label="Next testimonial" className="grid h-[clamp(40px,4.2vw,48px)] w-[clamp(40px,4.2vw,48px)] cursor-pointer place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 hover:scale-105 active:scale-95">
                            <ArrowIcon dir="right" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
