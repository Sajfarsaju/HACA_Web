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
        <section className="faq-outer" aria-label="FAQ">

            {/* ─── Left: Header ─── */}
            <div className="faq-header">

                {/* Pill button — same style pattern (111×42 inner pill) */}
                <button className="faq-pill-btn" aria-label="FAQ">
                    <span className="faq-pill-text">FAQ</span>
                    <span className="faq-pill-arrow" aria-hidden="true">
                        {/* Arrow circle matching pill visual style */}
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="#1A4FFF" />
                            <path d="M9.5 13H16.5M16.5 13L13.5 10M16.5 13L13.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>

                <h2 className="faq-heading">
                    The More You Know, the Easier the Choice Becomes
                </h2>
            </div>

            {/* ─── Right: FAQ accordion ─── */}
            <div className="faq-list" role="list">
                {faqs.map((faq) => {
                    const isOpen = openId === faq.id
                    return (
                        <div
                            key={faq.id}
                            className={`faq-card${isOpen ? " faq-card--open" : ""}`}
                            role="listitem"
                        >
                            <button
                                className="faq-card-btn"
                                aria-expanded={isOpen}
                                onClick={() => toggle(faq.id)}
                            >
                                <span className="faq-question">{faq.question}</span>

                                {/* Plus icon: 38×38 desktop, 20×20 mobile */}
                                <span className={`faq-icon-wrap${isOpen ? " faq-icon-wrap--open" : ""}`}>
                                    <Image
                                        src="/photos/main/plus icon.svg"
                                        alt={isOpen ? "Collapse" : "Expand"}
                                        width={38}
                                        height={38}
                                        className="faq-icon"
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
                                        className="faq-answer-wrap"
                                    >
                                        <div className="faq-answer">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}
