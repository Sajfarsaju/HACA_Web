"use client";

import React, { useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;
const SWITZER = "'Switzer', var(--font-outfit), sans-serif";

type FAQ = { id: string; question: string; answer: string };

const FAQS: FAQ[] = [
    {
        id: "q1",
        question: "Can I learn UI UX design online?",
        answer:
            "Yes, HACA offers a fully online UI/UX design course designed for beginners and career-switchers. You get access to recorded lessons, live sessions with mentors, and real project briefs — all from home.",
    },
    {
        id: "q2",
        question: "What is the best UI UX Design Course in Calicut?",
        answer:
            "HACA Design School's UI/UX course in Calicut is rated highly for its practical approach, industry mentor guidance, and portfolio-focused curriculum. Students get hands-on experience with Figma and AI design tools.",
    },
    {
        id: "q3",
        question: "How long does it take to learn UI/UX design and become job-ready?",
        answer:
            "With HACA's structured program, most students become job-ready in 3 to 6 months. The course covers theory, tools, and real project work so you graduate with a strong portfolio.",
    },
    {
        id: "q4",
        question: "What are the career opportunities after completing a UI/UX course?",
        answer:
            "Graduates can pursue roles such as UI Designer, UX Designer, Product Designer, Interaction Designer, and Visual Designer. Both freelance and full-time opportunities are available across startups, agencies, and tech companies.",
    },
    {
        id: "q5",
        question: "What is the starting salary for UI/UX designers in Kerala?",
        answer:
            "UI/UX designers in Kerala typically start with a salary between ₹2.5–4.5 LPA, depending on their portfolio, skills, and the company. Designers with strong portfolios often command higher packages.",
    },
    {
        id: "q6",
        question: "Can I do freelance work after completing a UI/UX course?",
        answer:
            "Yes. UI/UX is one of the best fields for freelancing. After completing the course and building your portfolio, you can take on projects for app design, website redesign, branding, and more.",
    },
    {
        id: "q7",
        question: "Why is a portfolio important in UI/UX design?",
        answer:
            "Your portfolio is your proof of skill. Recruiters and clients judge your ability based on the real work you show, not just certificates. HACA's curriculum is designed to help you build a portfolio from day one.",
    },
];

function PlusIcon({ open }: { open: boolean }) {
    return (
        <div
            className="flex shrink-0 items-center justify-center"
            style={{
                width: 24,
                height: 24,
                borderRadius: 9999,
                backgroundColor: "#14BCFF",
                padding: 6.46,
                boxSizing: "border-box",
            }}
            aria-hidden
        >
            <svg
                width="11.08"
                height="11.08"
                viewBox="0 0 11 11"
                fill="none"
                style={{
                    transition: "transform 0.25s ease",
                    transform: open ? "rotate(45deg)" : "rotate(0deg)",
                }}
            >
                <line x1="5.54" y1="0" x2="5.54" y2="11.08" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="0" y1="5.54" x2="11.08" y2="5.54" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function FaqItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: FAQ;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="w-full flex flex-col">
            {/* Full-row clickable button */}
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent p-0 text-left"
                style={{ gap: 36 }}
                aria-expanded={isOpen}
            >
                <span
                    className="hidden lg:block"
                    style={{
                        fontFamily: vc,
                        fontWeight: 500,
                        fontSize: 20,
                        lineHeight: "120%",
                        letterSpacing: "0%",
                        color: "#0A0A0A",
                    }}
                >
                    {faq.question}
                </span>
                <span
                    className="block lg:hidden"
                    style={{
                        fontFamily: SWITZER,
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: "120%",
                        letterSpacing: "0%",
                        color: "#0A0A0A",
                    }}
                >
                    {faq.question}
                </span>

                <PlusIcon open={isOpen} />
            </button>

            {/* Answer */}
            {isOpen && (
                <p
                    className="m-0 mt-3 lg:mt-4"
                    style={{
                        fontFamily: SWITZER,
                        fontWeight: 400,
                        fontSize: "clamp(14px, 1.1vw, 16px)",
                        lineHeight: "150%",
                        color: "#000000B2",
                        maxWidth: 900,
                    }}
                >
                    {faq.answer}
                </p>
            )}

            {/* Divider */}
            <div className="mt-[18px] w-full border-t border-[#0A0A0A33] lg:mt-[24px]" aria-hidden />
        </div>
    );
}

export function UiUxDesignCalicutFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) =>
        setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-[20px] py-[30px] lg:px-[60px] lg:py-[40px]">
                <div className="flex flex-col gap-[30px] lg:gap-[40px]">
                    {/* Heading */}
                    <h2
                        className="m-0 text-left text-black lg:text-center"
                        style={{
                            fontFamily: SWITZER,
                            fontWeight: 500,
                            fontStyle: "normal",
                            lineHeight: "110%",
                        }}
                    >
                        <span
                            className="block lg:hidden"
                            style={{ fontSize: 35, letterSpacing: "-0.02em" }}
                        >
                            Here's What People Ask
                        </span>
                        <span
                            className="hidden lg:block"
                            style={{ fontSize: 45, letterSpacing: "-0.01em" }}
                        >
                            Here's What People Ask
                        </span>
                    </h2>

                    {/* FAQ list */}
                    <div
                        className="flex w-full flex-col"
                        style={{ gap: "clamp(26px, 4.13vw, 59.45px)" }}
                    >
                        {FAQS.map((faq) => (
                            <FaqItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => toggle(faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
