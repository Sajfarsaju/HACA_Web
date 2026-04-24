"use client";

import React, { useMemo, useState } from "react"

const ACCENT = "#0066FF"

type FaqItem = {
    id: string
    q: string
    a: string
}

const FAQS: FaqItem[] = [
    {
        id: "faq-1",
        q: "Do I need any background in marketing to join?",
        a: "No. We start from fundamentals and quickly move into hands-on practice. You’ll learn by doing—running campaigns, writing copy, and fixing real mistakes with mentor support.",
    },
    {
        id: "faq-2",
        q: "Can working professionals join this course?",
        a: "Yes. The program is designed to fit alongside work. You’ll have structured outcomes each week and support from mentors so you can stay consistent without burning out.",
    },
    {
        id: "faq-3",
        q: "What career roles can I apply for after completing the digital marketing program?",
        a: "Based on your portfolio and strengths, you can apply for roles like Digital Marketer, Performance Marketer, Social Media Marketer, Content Marketer, SEO Associate, and Growth/Marketing Executive.",
    },
    {
        id: "faq-4",
        q: "What is the monthly income of a digital marketer?",
        a: "It depends on location, skills, and experience. We focus on building proof-of-work (projects + results) so you can confidently apply and negotiate based on what you can do.",
    },
    {
        id: "faq-5",
        q: "Is a 6-month digital marketing course worth it?",
        a: "Yes—if it’s execution-first. In 6 months you can build a portfolio, learn the tools, and develop repeatable skills. The key is consistent practice and feedback, not just watching videos.",
    },
]

function PlusIcon({ open }: { open: boolean }) {
    return (
        <span
            className={[
                "relative inline-block h-[22px] w-[22px] text-[#0066FF] lg:h-[28px] lg:w-[28px]",
                "transition-transform duration-200 ease-out",
                open ? "rotate-45" : "rotate-0",
            ].join(" ")}
            aria-hidden
        >
            <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current" />
        </span>
    )
}

export function MarketingFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null)
    const heading = useMemo(
        () => (
            <>
                Most Asked Questions by
                <br />
                Students Like You
            </>
        ),
        []
    )

    return (
        <section id="marketing-faq" className="w-full bg-black" aria-labelledby="marketing-faq-heading">
            <div className="mx-auto box-border w-full min-w-0 max-w-[1440px] px-[clamp(16px,4.16vw,60px)] py-[clamp(20px,3vw,40px)]">
                {/* Desktop frame: 1320×690 with 60px internal gap (matches screenshot specs) */}
                <div className="mx-auto flex w-full min-w-0 flex-col gap-[clamp(18px,5.2vw,36px)] lg:min-h-[690px] lg:max-w-[1320px] lg:gap-[60px]">
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3" style={{ backgroundColor: ACCENT }} aria-hidden />
                        <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal text-white">
                            FAQs
                        </p>
                    </div>

                    <h2
                        id="marketing-faq-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(2.25rem,8vw,3.25rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-right lg:leading-[1.08]
                        "
                    >
                        {heading}
                    </h2>
                </header>

                <div className="w-full min-w-0">
                    <div className="flex w-full min-w-0 flex-col">
                        {FAQS.map((item, idx) => {
                            const open = openId === item.id
                            return (
                                <div key={item.id} className="w-full min-w-0">
                                    <button
                                        type="button"
                                        onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                                        className="
                                            flex w-full min-w-0 items-center justify-between gap-6 text-left
                                            py-[clamp(18px,2.6vw,28px)]
                                            lg:h-[88px] lg:py-0
                                        "
                                        aria-expanded={open}
                                        aria-controls={`${item.id}-panel`}
                                    >
                                        <span className="min-w-0 font-['Satoshi',sans-serif] text-[clamp(16px,4.2vw,20px)] font-medium leading-[1.25] text-white lg:text-[24px] lg:leading-[1.2]">
                                            {item.q}
                                        </span>
                                        <span className="shrink-0">
                                            <PlusIcon open={open} />
                                        </span>
                                    </button>

                                    <div
                                        id={`${item.id}-panel`}
                                        className={[
                                            "grid transition-[grid-template-rows] duration-300 ease-out",
                                            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                        ].join(" ")}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="m-0 pb-[clamp(18px,2.4vw,24px)] pr-[clamp(40px,6vw,64px)] font-['Satoshi',sans-serif] text-[clamp(14px,1.6vw,18px)] font-normal leading-[1.5] text-white/70">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Divider line */}
                                    <div
                                        className="py-[clamp(8px,3.2vw,12px)] lg:py-[18px] border-t border-[#FFFFFF]"
                                        aria-hidden
                                    />
                                    {idx === FAQS.length - 1 ? null : null}
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

