"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const HEADING_ID = "marketing-seo-kollam-testimonials-heading";

type Testimonial = {
    id: string;
    quote: string;
    name: string;
    role: string;
};

const TESTIMONIALS: Testimonial[] = [
    {
        id: "t-1",
        quote:
            "I completed my Digital Marketing course at HACA (Haris & Co Academy), and it was a great experience. The classes were clear, practical, and easy to understand. The mentors were very supportive and always ready to help. I learned real skills that I can use in real projects. I highly recommend HACA for anyone who wants to start or grow in digital marketing.",
        name: "Fathima Faathi",
        role: "Digital Marketer",
    },
    {
        id: "t-2",
        quote:
            "The sessions were structured, hands-on, and focused on execution. The feedback loops helped me improve fast, and the support was consistent throughout the course.",
        name: "Nadha Faizal",
        role: "Digital Marketer",
    },
    {
        id: "t-3",
        quote:
            "I loved the practical approach—ads, copy, landing pages, and tracking. It made the learning feel real and helped me build confidence to apply for roles.",
        name: "Rahul Kumar",
        role: "Marketing Associate",
    },
];

const QUOTE_MARK_SRC = "/images/testimonials/inverted-comma.svg";

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
    );
}

export function MarketingSeoTestimonialsSection() {
    const [active, setActive] = useState(0);
    const total = TESTIMONIALS.length;
    const t = TESTIMONIALS[active];

    const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);
    const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);

    return (
        <section
            id="marketing-seo-kollam-testimonials"
            className="w-full bg-black text-white"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(24px,4vw,40px)]
                    px-[clamp(16px,4.16vw,60px)] py-[clamp(28px,4vw,48px)]
                    md:px-[clamp(24px,5vw,48px)]
                    lg:gap-10 lg:px-[60px] lg:py-[60px]
                "
            >
                <header className="w-full min-w-0 max-w-[min(720px,100%)]">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 text-left font-semibold tracking-[-0.05em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,6.5vw,3.4375rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.1]
                        "
                    >
                        <span className="block">Stories Shared by</span>
                        <span className="block">Our Learners</span>
                    </h2>
                </header>

                <div className="flex w-full min-w-0 flex-col items-center gap-[clamp(20px,3vw,28px)]">
                    <div className="relative mx-auto w-full max-w-[min(100%,940px)] pt-[clamp(22px,3vw,32px)]">
                        <div className="pointer-events-none absolute left-[clamp(14px,2vw,24px)] top-[calc(clamp(22px,3vw,32px)-4px)] z-10 -translate-y-[72%] bg-black px-2">
                            <Image
                                src={QUOTE_MARK_SRC}
                                alt=""
                                width={80}
                                height={57}
                                className="h-auto w-[clamp(56px,12vw,80px)]"
                                aria-hidden
                            />
                        </div>

                        <blockquote
                            key={t.id}
                            className="
                                relative m-0 flex min-h-0 w-full flex-col gap-6 rounded-[16px] border border-white/20 bg-transparent
                                px-[clamp(18px,3vw,28px)] pb-[clamp(20px,3vw,32px)] pt-[clamp(28px,4vw,40px)]
                                lg:gap-8 lg:px-10 lg:pb-10 lg:pt-12
                            "
                        >
                            <p
                                className="
                                    m-0 text-left font-normal tracking-normal text-white
                                    text-[clamp(15px,3.6vw,18px)] leading-[1.5]
                                    [font-family:'Satoshi',sans-serif]
                                    lg:text-[20px] lg:leading-[1.55]
                                "
                                aria-live="polite"
                            >
                                {t.quote}
                            </p>
                            <footer className="mt-auto text-left">
                                <cite className="not-italic">
                                    <span className="block font-['Satoshi',sans-serif] text-[clamp(16px,2.2vw,20px)] font-bold leading-none text-white">
                                        {t.name}
                                    </span>
                                    <span className="mt-2 block font-['Satoshi',sans-serif] text-[clamp(13px,1.6vw,14px)] font-medium leading-none text-[#FFFFFFB2]">
                                        {t.role}
                                    </span>
                                </cite>
                            </footer>
                        </blockquote>
                    </div>

                    <nav className="flex w-full items-center justify-center gap-2.5" aria-label="Testimonial slides">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 hover:scale-105 active:scale-95 md:h-[48px] md:w-[48px]"
                        >
                            <ArrowIcon dir="left" />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next testimonial"
                            className="grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 hover:scale-105 active:scale-95 md:h-[48px] md:w-[48px]"
                        >
                            <ArrowIcon dir="right" />
                        </button>
                    </nav>
                </div>
            </div>
        </section>
    );
}
