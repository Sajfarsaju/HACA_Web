"use client";

import { useState } from "react";

const HEADING_ID = "ae-faq-heading";

type AeFaqItem = {
    id: string;
    question: string;
    answer: string;
};

const AE_FAQS: AeFaqItem[] = [
    {
        id: "ae-faq-1",
        question: "Which is the best Digital Marketing Course in UAE for beginners?",
        answer:
            "The best digital marketing course for beginners should focus on practical learning, real projects, mentorship, AI tools, and placement support. HACA's AI-Integrated Digital Marketing Course in UAE is designed to help learners build job-ready skills through hands-on execution.",
    },
    {
        id: "ae-faq-2",
        question: "Is this Digital Marketing Course suitable for freshers?",
        answer:
            "Yes, our digital marketing course is suitable for freshers as this course is designed for beginners, students, freshers, career switchers, entrepreneurs, and working professionals looking to build practical digital marketing skills.",
    },
    {
        id: "ae-faq-3",
        question: "Can I learn digital marketing without previous experience?",
        answer:
            "Yes you can learn digital marketing without prior marketing experience. At HACA, plenty of learners begin without any previous marketing experience, so our course starts with the basics and steadily moves to advanced topics.",
    },
    {
        id: "ae-faq-4",
        question: "Is digital marketing a good career option in UAE?",
        answer:
            "Yes, digital marketing is a good career option in the UAE. As businesses continue to invest in online growth, demand for SEO specialists, paid media experts, content marketers, and digital strategists continues to grow across the UAE and GCC.",
    },
    {
        id: "ae-faq-5",
        question: "What is the average digital marketing salary in UAE?",
        answer:
            "In the UAE, digital marketing salaries depend on experience, specialization, industry, and company size. Entry-level professionals usually earn AED 4,000–8,000 per month, while those with 2–5 years of experience in SEO, paid ads, and performance marketing may earn AED 8,000–15,000 per month or more. Senior specialists and managers can earn AED 15,000–30,000+ per month. Expertise in AI marketing, automation, analytics, and performance marketing often leads to stronger salary growth.",
    },
    {
        id: "ae-faq-6",
        question: "What certifications will I receive after completing the course?",
        answer:
            "You'll receive a HACA course completion certificate along with globally recognised certifications from Google, Meta, and HubSpot — strengthening your profile for UAE and international job markets.",
    },
    {
        id: "ae-faq-7",
        question: "Do you offer placement support after the course?",
        answer:
            "Yes. HACA provides 100% placement assistance including resume building, portfolio preparation, mock interviews, LinkedIn optimisation, and direct referrals to our hiring network across the UAE and GCC.",
    },
    {
        id: "ae-faq-8",
        question: "Is the course available online and offline in UAE?",
        answer:
            "Yes. HACA offers both online and offline learning options so you can choose the format that suits your schedule — whether you prefer live in-person sessions or flexible remote learning.",
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

export function AeFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section
            id="ae-faq"
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
                        <span className="block">Questions People Usually</span>
                        <span className="block">Ask</span>
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
