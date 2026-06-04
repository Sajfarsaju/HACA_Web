"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, type ReactNode } from "react"

const faqAnswerLinkClass =
    "text-[#FFFFFF] underline underline-offset-[3px] decoration-[#A7ADBE]/60 hover:decoration-[#FFFFFF] transition-colors"

const faqs: { id: number; question: string; answer: ReactNode }[] = [
    {
        id: 1,
        question: "What is HACA, and how is it different from other institutes?",
        answer: (
            <>
                HACA is a practical, job-oriented academy built inside Haris&Co., one of{" "}
                <a
                    href="https://harisand.co/digital-marketing-agency-in-kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={faqAnswerLinkClass}
                >
                    Kerala’s leading digital marketing agencies.
                </a>{" "}
                Every course here is designed inside a real agency environment, so instead of just learning theories, you work on live projects, real brands, and hands-on campaigns. That’s what makes HACA one of the most career-focused institutes in Kerala for digital marketing, design, tech, and finance.
            </>
        ),
    },
    {
        id: 2,
        question: "Which courses are offered at HACA?",
        answer: "We currently have four schools under HACA: Marketing, Design, Tech, and Finance. Each one focuses on building practical, job-ready skills through hands-on training and real-world experience.",
    },
    {
        id: 3,
        question: "Are HACA courses beginner-friendly?",
        answer: "Absolutely. You don’t need prior experience to join. Whether you’re a 12th pass-out, college student, or someone switching careers, our mentors teach everything from scratch with real examples and projects.",
    },
    {
        id: 4,
        question: "Does HACA offer online or offline classes?",
        answer: (
            <>
                HACA offers both offline and online courses, depending on the program. Our offline campuses in{" "}
                <a
                    href="https://harisandcoacademy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={faqAnswerLinkClass}
                >
                    Calicut
                </a>{" "}
                and{" "}
                <a href="https://www.haca.ae/" target="_blank" rel="noopener noreferrer" className={faqAnswerLinkClass}>
                    Dubai
                </a>{" "}
                are built for hands-on collaboration and real project experience, while select programs are also available online for flexible learning. You can visit the individual school pages to know which courses are offered online and offline.
            </>
        ),
    },
    {
        id: 5,
        question: "Which is the best institute for digital marketing, design, and tech courses in Kerala?",
        answer: "If you’re looking for agency-based learning that leads to actual jobs, HACA is among the top-rated choices in Kerala. We’re backed by Haris&Co., have 500+ placement partners, and focus purely on career outcomes, not theory.",
    },
]

export function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(null)

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="w-full section-4k mx-auto bg-[#000210] p-[40px_60px_70px_60px] flex flex-row items-start justify-between box-border max-lg:flex-col max-lg:items-center max-lg:gap-[26px] max-md:p-[20px_clamp(16px,5vw,24px)] max-md:gap-[26px]" aria-label="FAQ">

            {/* ─── Left: Header ─── */}
            <div className="w-[420px] shrink-0 flex flex-col items-start gap-[20px] max-lg:w-full max-lg:items-center max-lg:gap-[7.97px] max-md:max-w-none">

                {/* Pill button — same style pattern (111×42 inner pill) */}
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="FAQ">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">FAQ</span>
                    <span className="flex items-center justify-center shrink-0 w-[38px] h-[26px] max-md:w-[24px] max-md:h-[16.42px]" aria-hidden="true">
                        <Image
                            src="/photos/main/blue arrow.svg"
                            alt=""
                            width={38}
                            height={26}
                            className="w-full h-full object-contain"
                        />
                    </span>
                </button>

                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#FFFFFF] m-0 w-[420px] text-left max-lg:w-full max-lg:max-w-[420px] max-lg:text-center max-md:text-[22px] max-md:max-w-[317px]">
                    The More You Know, the Easier the Choice Becomes
                </h2>
            </div>

            {/* ─── Right: FAQ accordion ─── */}
            <div className="w-[800px] shrink-0 flex flex-col gap-[20px] max-[1300px]:w-auto max-[1300px]:flex-1 max-[1300px]:ml-[40px] max-lg:ml-0 max-lg:w-full max-lg:max-w-[600px] max-md:max-w-none max-md:gap-[10px]" role="list">
                {faqs.map((faq, i) => {
                    const isOpen = openId === faq.id
                    return (
                        <motion.div
                            key={faq.id}
                            className={`w-full border rounded-[20px] bg-[#000319] box-border overflow-hidden max-md:rounded-[6.7px] max-md:border-[0.42px] ${isOpen ? "border-[rgba(37,49,125,0.5)]" : "border-[#25317D]"}`}
                            role="listitem"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px 0px -40px 0px", amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                        >
                            <button
                                className="w-full flex flex-row items-center justify-between gap-[30px] p-[16px_30px] bg-transparent border-none cursor-pointer text-left box-border min-h-[70px] max-md:p-[10px_12px] max-md:gap-[12.56px] max-md:min-h-[54px]"
                                aria-expanded={isOpen}
                                onClick={() => toggle(faq.id)}
                            >
                                <span className="font-rethink font-semibold text-[20px] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] flex-1 text-left max-md:text-[14px]">{faq.question}</span>

                                {/* Plus icon: 38×38 desktop, 20×20 mobile */}
                                <span className={`shrink-0 w-[38px] h-[38px] flex items-center justify-center transition-transform duration-300 ease max-md:w-[20px] max-md:h-[20px] ${isOpen ? "rotate-45" : ""}`}>
                                    <Image
                                        src="/photos/main/plus icon.svg"
                                        alt={isOpen ? "Collapse" : "Expand"}
                                        width={38}
                                        height={38}
                                        className="w-[38px] h-[38px] block max-md:w-[20px] max-md:h-[20px]"
                                    />
                                </span>
                            </button>

                            {/* FAQ Answer with smooth height transition */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-[0_30px_20px_30px] font-rethink font-normal text-[16px] leading-[160%] text-[#A7ADBE] box-border max-md:p-[0_12px_14px_12px] max-md:text-[13px]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )
                })}
            </div>

        </section>
    )
}
