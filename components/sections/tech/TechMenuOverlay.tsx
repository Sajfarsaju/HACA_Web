"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { RefObject } from "react";

export type TechNavLink = { href: string; label: string };

const panelVariants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.85 },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] as const },
    },
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.05 } },
};

const linkVariants: Variants = {
    hidden: { opacity: 0, x: 28 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.15 + i * 0.06,
            duration: 0.38,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

export function TechMenuOverlay({
    isOpen,
    onClose,
    navLinks,
    containerRef,
}: {
    isOpen: boolean;
    onClose: () => void;
    navLinks: readonly TechNavLink[];
    containerRef?: RefObject<HTMLDivElement | null>;
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    ref={containerRef as unknown as any}
                    className="tech-nav-dropdown fixed inset-0 z-[9999] flex"
                    style={{ pointerEvents: "auto" }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* Panel — slides in from the right */}
                    <motion.div
                        className="relative ml-auto w-[85%] max-w-[420px] min-h-screen py-10 px-6 flex flex-col items-start overflow-y-auto"
                        style={{
                            background: "#D9D9D91A",
                            border: "0.72px solid #00000033",
                            boxShadow: "0px 2.89px 2.89px 0px #00000040",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                        }}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors z-10"
                            aria-label="Close menu"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Nav links — stagger in */}
                        <nav className="flex w-full flex-col gap-0.5 mt-10 items-start self-stretch">
                            {navLinks.map(({ href, label }, i) => (
                                <motion.div
                                    key={href}
                                    custom={i}
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="w-full"
                                >
                                    <Link
                                        href={href}
                                        onClick={onClose}
                                        className="font-outfit font-normal text-[22px] leading-[1.3] text-white no-underline py-4 px-4 rounded-[12px] transition-all duration-[250ms] ease-in-out hover:bg-white/10 w-full text-left block"
                                    >
                                        {label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Let's Connect */}
                            <motion.div
                                custom={navLinks.length}
                                variants={linkVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link
                                    href="/contact"
                                    onClick={onClose}
                                    className="group relative mt-5 flex w-[130px] h-[44px] shrink-0 rounded-[8px] px-[10px] py-[10px] bg-white text-[#1a1a1a] font-outfit font-semibold text-[14px] leading-none no-underline overflow-hidden ml-4"
                                >
                                    <span className="absolute inset-0 flex h-[44px] w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                        Let&apos;s Connect
                                    </span>
                                    <span className="pointer-events-none absolute inset-0 flex h-[44px] w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                        Let&apos;s Connect
                                    </span>
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Legal + socials */}
                        <motion.div
                            className="mt-auto pt-12 w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.45, duration: 0.4 } }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                                <Link href="/privacy-policy" onClick={onClose} className="font-outfit font-normal text-[13px] text-white/60 no-underline hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-conditions" onClick={onClose} className="font-outfit font-normal text-[13px] text-white/60 no-underline hover:text-white transition-colors">
                                    Terms and conditions
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-outfit font-normal text-[13px] text-white/60 no-underline hover:text-white transition-colors">
                                    Instagram
                                </Link>
                                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-outfit font-normal text-[13px] text-white/60 no-underline hover:text-white transition-colors">
                                    Youtube
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
