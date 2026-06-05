"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

export function NotAvailableContent() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-5 py-24">

            {/* Content card */}
            <div className="relative z-10 flex flex-col items-center text-center gap-8 w-full max-w-[640px] max-md:gap-6">

                {/* Icon badge */}
                <motion.div {...fadeUp(0)} className="flex items-center justify-center">
                    <div className="relative w-[80px] h-[80px] max-md:w-[64px] max-md:h-[64px] rounded-full bg-[linear-gradient(135deg,#1A4FFF22,#1A4FFF44)] border border-[rgba(26,79,255,0.35)] flex items-center justify-center shadow-[0_0_40px_rgba(26,79,255,0.25)]">
                        <motion.div
                            className="absolute inset-0 rounded-full border border-[rgba(26,79,255,0.3)]"
                            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            aria-hidden="true"
                        />
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 9v4M12 17h.01" stroke="#4C75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#4C75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Label */}
                <motion.div {...fadeUp(0.1)}>
                    <span className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] backdrop-blur-sm px-4 py-2 rounded-full font-rethink text-[13px] text-[#A7ADBE] tracking-wide uppercase">
                        Page Unavailable
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    {...fadeUp(0.18)}
                    className="font-rethink font-bold text-[clamp(28px,5.5vw,52px)] leading-[110%] text-white m-0"
                >
                    This Service Is{" "}
                    <span className="bg-[linear-gradient(90deg,#4C75FF,#7B9FFF)] bg-clip-text text-transparent">
                        No Longer Available
                    </span>
                </motion.h1>

                {/* Divider */}
                <motion.div
                    {...fadeUp(0.24)}
                    className="w-[60px] h-[3px] rounded-full bg-[linear-gradient(90deg,#1A4FFF,#4C75FF)]"
                    aria-hidden="true"
                />

                {/* Body text */}
                <motion.div {...fadeUp(0.30)} className="flex flex-col gap-3">
                    <p className="font-rethink text-[clamp(15px,2vw,18px)] leading-[170%] text-[#A7ADBE] m-0">
                        The service or content previously available on this page is no longer offered.
                    </p>
                    <p className="font-rethink text-[clamp(15px,2vw,18px)] leading-[170%] text-[#A7ADBE] m-0">
                        We invite you to explore our other services and resources available on our website.
                    </p>
                    <p className="font-rethink text-[clamp(15px,2vw,18px)] leading-[170%] text-[#6B7280] m-0">
                        Thank you for visiting.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div {...fadeUp(0.38)}>
                    <Link href="/" aria-label="Back to HACA Home" className="no-underline">
                        <motion.span
                            className="group relative inline-flex items-center justify-center gap-3 h-[54px] px-8 max-md:h-[48px] max-md:px-6 rounded-[100px] bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] font-rethink font-medium text-[16px] max-md:text-[15px] text-white overflow-hidden shadow-[0_8px_32px_rgba(26,79,255,0.35)] cursor-pointer"
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(26,79,255,0.5)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <svg
                                width="18" height="18" viewBox="0 0 24 24" fill="none"
                                className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                                aria-hidden="true"
                            >
                                <path d="M19 12H5M12 5l-7 7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Home
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Explore links */}
                <motion.div {...fadeUp(0.46)} className="flex flex-wrap justify-center gap-3 mt-2">
                    {[
                        { label: "Design School", href: "/design-school" },
                        { label: "Marketing School", href: "/marketing-school" },
                        { label: "Tech School", href: "/tech-school" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="no-underline inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] font-rethink text-[13px] text-[#A7ADBE] hover:border-[rgba(26,79,255,0.5)] hover:text-white hover:bg-[rgba(26,79,255,0.1)] transition-all duration-200"
                        >
                            {link.label}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}
