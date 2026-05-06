"use client";

import React, { useMemo, useState } from "react"

const ACCENT = "#0066FF"
const CT = "0.55s ease"

type FaqItem = {
    id: string
    q: string
    a: string
}

const FAQS: FaqItem[] = [
    {
        id: "faq-1",
        q: "Do I need any background in marketing to join?",
        a: "No. You don't need prior marketing knowledge. We start from zero and gradually move to advanced, AI-integrated marketing concepts. All you need is curiosity, commitment, and the willingness to learn by doing.",
    },
    {
        id: "faq-2",
        q: "Can working professionals or housewives join this course?",
        a: "Yes. We have evening batches with live online learning. Many working professionals, housewives,  freelancers, and business owners choose the online program for flexibility.",
    },
    {
        id: "faq-3",
        q: "What career roles can I apply for after completing the digital marketing program?",
        a: "You'll be ready for roles like Social Media Manager, Digital Marketing Specialist, SEO Analyst, Content Strategist, Performance Marketer, Brand Manager, or even start freelancing.",
    },
    {
        id: "faq-4",
        q: "What is the monthly income of a digital marketer?",
        a: "A fresher digital marketer usually starts between ₹18,000 and ₹35,000 per month in India. With strong skills and a well-structured portfolio, it can even exceed ₹40K in a few months. As your portfolio and experience grow, so does your income.",
    },
    {
        id: "faq-5",
        q: "Is a 6-month digital marketing course worth it?",
        a: "It is worth it if you actually learn by doing. If those 6 months include real campaigns, ad setups, SEO work, and guidance, you can learn a lot in that time.",
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
        <section id="marketing-faq" className="w-full" aria-labelledby="marketing-faq-heading">
            <div className="mx-auto box-border w-full min-w-0 max-w-[1440px] px-[clamp(16px,4.16vw,60px)] py-[clamp(20px,3vw,40px)]">
                <div className="mx-auto flex w-full min-w-0 flex-col gap-[clamp(18px,5.2vw,36px)] lg:min-h-[690px] lg:max-w-[1320px] lg:gap-[60px]">
                    <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                        <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                            <span className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3" style={{ backgroundColor: ACCENT }} aria-hidden />
                            <p
                                className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                                style={{ color: "var(--tf-text, #000000)", transition: `color ${CT}` }}
                            >
                                FAQs
                            </p>
                        </div>

                        <h2
                            id="marketing-faq-heading"
                            className="
                                w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                                [font-family:'Darker_Grotesque',sans-serif]
                                text-[clamp(2.25rem,8vw,3.25rem)] leading-[1.05]
                                lg:w-auto lg:ml-auto lg:max-w-[min(100%,720px)] lg:text-left lg:leading-[1.08]
                            "
                            style={{ color: "var(--tf-text, #000000)", transition: `color ${CT}` }}
                        >
                            {heading}
                        </h2>
                    </header>

                    <div className="w-full min-w-0">
                        <div className="flex w-full min-w-0 flex-col">
                            {FAQS.map((item) => {
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
                                            <span
                                                className="min-w-0 font-['Satoshi',sans-serif] text-[clamp(16px,4.2vw,20px)] font-medium leading-[1.25] lg:text-[24px] lg:leading-[1.2]"
                                                style={{ color: "var(--tf-text, #000000)", transition: `color ${CT}` }}
                                            >
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
                                                <p
                                                    className="m-0 pb-[clamp(18px,2.4vw,24px)] pr-[clamp(40px,6vw,64px)] font-['Satoshi',sans-serif] text-[clamp(14px,1.6vw,18px)] font-normal leading-[1.5]"
                                                    style={{ color: "var(--tf-text-muted, rgba(0,0,0,0.7))", transition: `color ${CT}` }}
                                                >
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="py-[clamp(8px,3.2vw,12px)] lg:py-[18px] border-t"
                                            style={{ borderColor: "var(--tf-border, #000000)", transition: `border-color ${CT}` }}
                                            aria-hidden
                                        />
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
