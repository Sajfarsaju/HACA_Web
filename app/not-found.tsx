"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

export default function NotFound() {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-0 px-6 py-16 text-center"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
        >
            {/* Ambient glow */}
            <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: "min(700px, 90vw)", height: "min(700px, 90vw)",
                    background: "radial-gradient(circle, rgba(26,79,255,0.13) 0%, transparent 68%)",
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
            />

            {/* 404 number block */}
            <motion.div
                className="relative select-none"
                initial={{ opacity: 0, y: 36, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            >
                {/* Blue glow blur */}
                <span
                    className="pointer-events-none absolute inset-0 flex items-center justify-center font-bold leading-none"
                    aria-hidden
                    style={{
                        fontSize: "clamp(72px, 16vw, 190px)",
                        letterSpacing: "-0.04em",
                        background: "linear-gradient(180deg, #4C75FF 0%, #1A4FFF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "blur(38px)",
                        opacity: 0.4,
                    }}
                >404</span>

                {/* Main number */}
                <motion.span
                    className="relative block font-bold leading-none"
                    style={{
                        fontSize: "clamp(72px, 16vw, 190px)",
                        letterSpacing: "-0.04em",
                        background: "linear-gradient(180deg, #ffffff 25%, rgba(255,255,255,0.42) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >404</motion.span>

                {/* Reflection — hidden on mobile */}
                <span
                    className="pointer-events-none hidden md:block font-bold leading-none"
                    style={{
                        fontSize: "clamp(72px, 16vw, 190px)",
                        letterSpacing: "-0.04em",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 60%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transform: "scaleY(-1) translateY(-6px)",
                        maskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
                    }}
                    aria-hidden
                >404</span>
            </motion.div>

            {/* Vertical divider */}
            <motion.div
                className="w-px my-4 md:my-6"
                style={{
                    height: 40,
                    background: "linear-gradient(to bottom, transparent, rgba(76,117,255,0.55), transparent)",
                }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
                aria-hidden
            />

            {/* Body */}
            <div className="relative z-10 flex flex-col items-center gap-5 max-w-[480px]">

                <motion.h1
                    {...fadeUp(0.52)}
                    className="m-0 font-bold text-white leading-[115%]"
                    style={{ fontSize: "clamp(20px, 3.8vw, 40px)" }}
                >
                    This page packed its bags and left.
                </motion.h1>

                <motion.div {...fadeUp(0.64)}>
                    <Link href="/" aria-label="Back to home" className="no-underline">
                        <motion.span
                            className="inline-flex items-center justify-center gap-2.5 h-[50px] md:h-[52px] px-7 md:px-8 rounded-[100px] font-semibold text-[14px] md:text-[15px] text-[#000210] bg-white cursor-pointer"
                            style={{ boxShadow: "0 4px 24px rgba(76,117,255,0.18), 0 1px 3px rgba(0,0,0,0.25)" }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 8px 40px rgba(76,117,255,0.48), 0 2px 8px rgba(0,0,0,0.25)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        >
                            Back to Home
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="#000210" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.span>
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}
