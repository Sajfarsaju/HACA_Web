"use client";

import { useState } from "react";

const HEADING_ID = "dubai-faq-heading";

type AeFaqItem = {
    id: string;
    question: string;
    answer: string;
};

const AE_FAQS: AeFaqItem[] = [
    {
        id: "dubai-faq-1",
        question: "Which is the best Digital Marketing Course in Dubai for beginners?",
        answer:
            "The best Digital Marketing Course in Dubai for beginners should focus on practical exposure, live projects, mentor support, AI-powered learning, and placement guidance. HACA's AI-integrated learning approach helps learners build industry-ready skills through hands-on execution instead of theory-heavy learning.",
    },
    {
        id: "dubai-faq-2",
        question: "Is this digital marketing training suitable for freshers?",
        answer:
            "Yes. This course is designed for beginners, students, fresh graduates, working professionals, entrepreneurs, and career switchers who want to develop practical digital marketing skills and gain real-world exposure.",
    },
    {
        id: "dubai-faq-3",
        question: "Can I join a Digital Marketing Course without prior experience?",
        answer:
            "Absolutely. You do not need previous experience to start learning digital marketing. The course begins with fundamentals and gradually progresses into advanced concepts, practical tools, AI integrations, and live projects.",
    },
    {
        id: "dubai-faq-4",
        question: "Is digital marketing a good career choice in Dubai and UAE?",
        answer:
            "Yes. Businesses across Dubai and the UAE continue investing in SEO, performance marketing, paid advertising, ecommerce, and online growth strategies. This creates growing demand for professionals in content marketing, social media, analytics, and digital strategy roles.",
    },
    {
        id: "dubai-faq-5",
        question: "How long does it take to complete a Digital Marketing Course in Dubai, UAE?",
        answer:
            "The course duration depends on the learning format. HACA's AI-integrated program is designed as a structured learning journey that combines live sessions, practical assignments, projects, and specialization modules over multiple months.",
    },
];

function PlusIcon({ open }: { open: boolean }) {
    return (
        <span
            className={[
                "relative inline-block h-[22px] w-[22px] shrink-0 text-[#0066FF]",
                "transition-transform duration-200 ease-out lg:h-[28px] lg:w-[28px]",
                open ? "rotate-45" : "rotate-0",
            ].join(" ")}
            aria-hidden
        >
            <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current" />
        </span>
    );
}

function FaqAccordionItem({
    item,
    open,
    onToggle,
}: {
    item: AeFaqItem;
    open: boolean;
    onToggle: () => void;
}) {
    const panelId = `${item.id}-panel`;
    const buttonId = `${item.id}-button`;

    return (
        <div className="w-full min-w-0">
            <h3 className="m-0">
                <button
                    id={buttonId}
                    type="button"
                    onClick={onToggle}
                    className="
                        flex w-full min-w-0 cursor-pointer items-center justify-between gap-4 text-left
                        py-[18px] lg:h-[88px] lg:gap-6 lg:py-0
                    "
                    aria-expanded={open}
                    aria-controls={panelId}
                >
                    <span className="min-w-0 font-['Satoshi',sans-serif] text-[16px] font-medium leading-[1.25] text-white lg:text-[24px] lg:leading-[1.2]">
                        {item.question}
                    </span>
                    <PlusIcon open={open} />
                </button>
            </h3>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
            >
                <div className="overflow-hidden">
                    <p className="m-0 pb-[18px] pr-10 font-['Satoshi',sans-serif] text-[15px] font-normal leading-[1.5] text-white/70 lg:pb-6 lg:pr-16 lg:text-[18px]">
                        {item.answer}
                    </p>
                </div>
            </div>

            <div className="border-t border-white/20 py-[10px] lg:py-[18px]" aria-hidden />
        </div>
    );
}

export function DubaiFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section
            id="dubai-faq"
            className="w-full bg-black text-white"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[30px]
                    px-5 py-5
                    lg:gap-[50px] lg:px-[60px] lg:py-10
                "
            >
                <header className="flex w-full min-w-0 flex-col">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full text-left font-semibold tracking-[-0.01em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:max-w-[min(100%,720px)] lg:text-[55px] lg:leading-[1.1]
                        "
                    >
                        <span className="block">Frequently Asked Questions</span>
                        
                    </h2>
                </header>

                <div className="w-full min-w-0">
                    <div
                        className="flex w-full min-w-0 flex-col"
                        role="list"
                        aria-label="Frequently asked questions about the digital marketing course in UAE"
                    >
                        {AE_FAQS.map((item) => (
                            <div key={item.id} role="listitem">
                                <FaqAccordionItem
                                    item={item}
                                    open={openId === item.id}
                                    onToggle={() =>
                                        setOpenId((prev) => (prev === item.id ? null : item.id))
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
