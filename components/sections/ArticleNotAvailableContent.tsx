"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

export function ArticleNotAvailableContent() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-5 py-20">

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-8 w-full max-w-[620px] max-md:gap-6">

                {/* Icon badge */}
                <motion.div {...fadeUp(0)} className="flex items-center justify-center">
                    <div className="relative w-[76px] h-[76px] max-md:w-[62px] max-md:h-[62px] rounded-full bg-[linear-gradient(135deg,rgba(26,79,255,0.12),rgba(26,79,255,0.22))] border border-[rgba(26,79,255,0.32)] flex items-center justify-center shadow-[0_0_36px_rgba(26,79,255,0.2)]">
                        <motion.div
                            className="absolute inset-0 rounded-full border border-[rgba(26,79,255,0.28)]"
                            animate={{ scale: [1, 1.28, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                            aria-hidden
                        />
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#4C75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#4C75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Label pill */}
                <motion.div {...fadeUp(0.1)}>
                    <span className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] backdrop-blur-sm px-4 py-2 rounded-full font-rethink text-[13px] text-[#A7ADBE] tracking-wide uppercase">
                        Article Unavailable
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    {...fadeUp(0.18)}
                    className="font-rethink font-bold text-[clamp(26px,5vw,48px)] leading-[112%] text-white m-0"
                >
                    Article No Longer{" "}
                    <span className="bg-[linear-gradient(90deg,#4C75FF,#7B9FFF)] bg-clip-text text-transparent">
                        Available
                    </span>
                </motion.h1>

                {/* Divider */}
                <motion.div
                    {...fadeUp(0.24)}
                    className="w-[56px] h-[3px] rounded-full bg-[linear-gradient(90deg,#1A4FFF,#4C75FF)]"
                    aria-hidden
                />

                {/* Body text */}
                <motion.div {...fadeUp(0.30)} className="flex flex-col gap-3 max-w-[540px]">
                    <p className="font-rethink text-[clamp(14px,1.9vw,17px)] leading-[175%] text-[#A7ADBE] m-0">
                        The article you are looking for is no longer available.
                    </p>
                    <p className="font-rethink text-[clamp(14px,1.9vw,17px)] leading-[175%] text-[#A7ADBE] m-0">
                        This page has been retained for reference purposes, but the content has been removed and is no longer being maintained.
                    </p>
                    <p className="font-rethink text-[clamp(14px,1.9vw,17px)] leading-[175%] text-[#A7ADBE] m-0">
                        Please visit our blog section to explore our latest articles and insights.
                    </p>
                    <p className="font-rethink text-[clamp(14px,1.9vw,17px)] leading-[175%] text-[#6B7280] m-0">
                        Thank you for your understanding.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div {...fadeUp(0.38)}>
                    <Link href="/blog" aria-label="Visit our blog" className="no-underline">
                        <motion.span
                            className="group inline-flex items-center justify-center gap-2.5 h-[52px] max-md:h-[46px] px-8 max-md:px-6 rounded-[100px] bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] font-rethink font-medium text-[16px] max-md:text-[14px] text-white cursor-pointer shadow-[0_8px_28px_rgba(26,79,255,0.32)]"
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(26,79,255,0.5)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Explore Our Blog
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.span>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}
