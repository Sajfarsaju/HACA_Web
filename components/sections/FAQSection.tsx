"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

/* ── FAQ data — updated with dummy answers ── */
const faqs = [
    {
        id: 1,
        question: "What is HACA, and how is it different from other institutes?",
        answer: "HACA is a production-grade learning platform that focuses on real-world engineering practices. Unlike traditional institutes, we prioritize performance, design systems, and developer efficiency through a hands-on, project-based curriculum.",
    },
    {
        id: 2,
        question: "What courses does HACA offer for beginners?",
        answer: "We offer foundational courses in Web Development, UI/UX Design, and Digital Marketing specifically tailored for beginners to build a strong professional portfolio from scratch.",
    },
    {
        id: 3,
        question: "Do I need prior experience to join HACA programs?",
        answer: "No prior experience is required for our beginner modules. We guide you through the basics of design and development before moving into advanced production-ready concepts.",
    },
    {
        id: 4,
        question: "What kind of support does HACA provide after placement?",
        answer: "Our support continues even after you land a job. We provide mentorship, code reviews, and access to our alumni network to ensure you thrive in your new professional role.",
    },
    {
        id: 5,
        question: "How long does it take to complete a course at HACA?",
        answer: "Course duration varies from 3 to 6 months depending on the program intensity and the specific track you choose, ensuring you have enough time to master the required skills.",
    },
]

export function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(null)

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="w-full section-4k mx-auto bg-[#000210] p-[40px_60px_70px_60px] flex flex-row items-start justify-between box-border max-lg:flex-col max-lg:items-center max-lg:gap-[26px] max-md:p-[20px_16px] max-md:gap-[26px]" aria-label="FAQ">

            {/* ─── Left: Header ─── */}
            <div className="w-[420px] shrink-0 flex flex-col items-start gap-[20px] max-lg:w-full max-lg:items-center max-lg:gap-[7.97px] max-md:max-w-[335px]">

                {/* Pill button — same style pattern (111×42 inner pill) */}
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="FAQ">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">FAQ</span>
                    <span className="flex items-center justify-center shrink-0 w-[26px] h-[26px] max-md:w-[20px] max-md:h-[20px]" aria-hidden="true">
                        {/* Arrow circle matching pill visual style */}
                        <svg className="w-full h-full" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="#1A4FFF" />
                            <path d="M9.5 13H16.5M16.5 13L13.5 10M16.5 13L13.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>

                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#FFFFFF] m-0 w-[420px] text-left max-lg:w-full max-lg:max-w-[420px] max-lg:text-center max-md:text-[22px] max-md:max-w-[317px]">
                    The More You Know, the Easier the Choice Becomes
                </h2>
            </div>

            {/* ─── Right: FAQ accordion ─── */}
            <div className="w-[800px] shrink-0 flex flex-col gap-[20px] max-[1300px]:w-auto max-[1300px]:flex-1 max-[1300px]:ml-[40px] max-lg:ml-0 max-lg:w-full max-lg:max-w-[600px] max-md:max-w-[335px] max-md:gap-[10px]" role="list">
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
