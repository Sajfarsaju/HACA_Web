"use client";

import { useState } from "react";
import { MARKETING_INDIA_FAQS } from "@/lib/marketing-school-seo";

const SECTION_HEADING_ID = "marketing-india-faq-heading";

function PlusMinusIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="shrink-0 transition-transform duration-200"
        >
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className={`transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function FaqItem({ item, isOpen, onToggle }: {
    item: typeof MARKETING_INDIA_FAQS[number];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <li className="border-b border-white/10 last:border-b-0">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-start justify-between gap-4 bg-transparent py-5 text-left"
            >
                <span
                    className="text-[18px] font-medium leading-[140%] tracking-[-0.01em] text-white lg:text-[20px]"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                    {item.question}
                </span>
                <span className="mt-[2px] shrink-0 text-white">
                    <PlusMinusIcon open={isOpen} />
                </span>
            </button>
            {isOpen && (
                <div className="pb-5">
                    <p
                        className="m-0 text-[16px] font-normal leading-[160%] tracking-[-0.01em] text-[#FFFFFFB2] lg:text-[17px]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        {item.answer}
                    </p>
                </div>
            )}
        </li>
    );
}

export function MarketingSeoIndiaFaqSection() {
    const [openId, setOpenId] = useState<string | null>(MARKETING_INDIA_FAQS[0]?.id ?? null);

    const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="w-full bg-black text-white" aria-labelledby={SECTION_HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-[clamp(40px,6vw,80px)] md:px-[clamp(24px,5vw,48px)] lg:gap-[60px] lg:px-[60px]">
                <h2
                    id={SECTION_HEADING_ID}
                    className="m-0 text-center font-semibold text-[clamp(28px,6vw,48px)] leading-[1.05] tracking-[-0.01em] text-white [font-family:'Darker_Grotesque',sans-serif] [text-rendering:geometricPrecision] lg:text-[55px] lg:leading-[110%]"
                >
                    Frequently Asked Questions
                </h2>
                <ul
                    className="mx-auto m-0 w-full max-w-[min(860px,100%)] list-none p-0"
                    aria-label="Frequently asked questions about HACA's online digital marketing course in India"
                >
                    {MARKETING_INDIA_FAQS.map((item) => (
                        <FaqItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() => toggle(item.id)}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
