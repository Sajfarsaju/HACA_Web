"use client";

import { useState } from "react";

const HEADING_ID = "sharjah-faq-heading";

type AeFaqItem = {
    id: string;
    question: string;
    answer: string;
};

const AE_FAQS: AeFaqItem[] = [
    {
        id: "sharjah-faq-1",
        question: "Which Digital Marketing Course in Sharjah is suitable for beginners?",
        answer:
            "A beginner friendly Digital Marketing Course in Sharjah should focus on practical implementation, project exposure, mentor support, and modern AI integrated learning rather than theory alone. Learning through real tasks helps build stronger industry readiness.",
    },
    {
        id: "sharjah-faq-2",
        question: "Who can join this Digital Marketing training program?",
        answer:
            "This program is suitable for students, fresh graduates, entrepreneurs, working professionals, freelancers, and anyone looking to build practical digital marketing skills.",
    },
    {
        id: "sharjah-faq-3",
        question: "Do I need previous marketing experience to join?",
        answer:
            "No prior experience is required. The learning journey begins with core concepts and gradually moves into practical strategies, tools, and advanced implementation.",
    },
    {
        id: "sharjah-faq-4",
        question: "Does digital marketing offer career opportunities in Sharjah and UAE?",
        answer:
            "Yes. Businesses across Sharjah and UAE continue investing in SEO, paid campaigns, ecommerce, social media, and online growth, increasing the demand for skilled digital professionals.",
    },
    {
        id: "sharjah-faq-5",
        question: "Will I receive practical exposure during the course?",
        answer:
            "Yes. Learners work on assignments, projects, campaigns, and practical activities designed to help build confidence through hands-on experience.",
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

export function SharjahFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section
            id="sharjah-faq"
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
                        <span className="block">Frequently Asked</span>
                        <span className="block">Questions</span>
                    </h2>
                </header>

                <div className="w-full min-w-0">
                    <div
                        className="flex w-full min-w-0 flex-col"
                        role="list"
                        aria-label="Frequently asked questions about the digital marketing course in Sharjah"
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
