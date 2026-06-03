"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PhotoGallery } from "./PhotoGallery"
import { PressLogos } from "./PressLogos"
import { StatsSection } from "./StatsSection"
import { AboutHacaSection } from "./AboutHacaSection"
import { Haca360Section } from "./Haca360Section"
import { SectionReveal } from "@/components/animations/SectionReveal"

export function Hero() {
    return (
        <section className="w-full section-4k mx-auto pb-[60px] bg-transparent relative max-md:pb-0 md:pt-[70px] lg:pt-[80px] max-md:pt-0">
            {/* ── Inner Container ── */}
            <div className="w-full flex flex-col items-center gap-[32px] max-md:gap-[24px] lg:gap-[40px]">

                {/* ──────────────────────────────────────
                    UPPER CONTAINER
                    (desktop: 780px wide, mobile: full width)
                    ────────────────────────────────────── */}
                <div className="w-full max-w-[780px] flex flex-col items-center gap-[32px] max-md:max-w-full max-md:pt-0 max-md:px-[20px] max-md:gap-[20px] md:px-[32px] lg:px-0 lg:gap-[24px]">

                    {/* ── First Container: Info button + Heading + Paragraph ── */}
                    <div className="w-full flex flex-col items-center max-md:gap-[10px] min-[768px]:gap-[11px] lg:gap-[7px]">

                        {/* Info Button */}
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="Academy from the House of Haris&Co">
                                <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">Academy from the House of Haris&amp;Co</span>
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
                        </motion.div>

                        {/* Text Container */}
                        <div className="w-full flex flex-col items-center gap-[20px] max-md:gap-[9.05px] lg:gap-[13px]">
                            {/* Heading */}
                            <motion.div
                                className="w-full flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p className="font-rethink font-bold text-[58px] leading-[69.6px] tracking-normal text-center text-white m-0 lg:text-[54px] lg:leading-[65px] max-md:text-[26px] max-md:leading-[31.5px]">Skills Are the New Degree,</p>
                                <p className="font-rethink font-bold text-[58px] leading-[69.6px] tracking-normal text-center text-white m-0 lg:text-[54px] lg:leading-[65px] max-md:text-[26px] max-md:leading-[31.5px]">Build Yours with HACA.</p>
                            </motion.div>

                            {/* Paragraph */}
                            <motion.div
                                className="w-full flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <p className="font-rethink font-medium text-[18px] leading-[27px] tracking-normal text-center text-[#A7ADBE] m-0 md:line-clamp-2 lg:line-clamp-none lg:whitespace-nowrap max-md:text-[14px] max-md:leading-[15px]">
                                    At HACA, every course is built to make you career-ready in Digital Marketing, Design, Tech, or Finance.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── Button Container ── */}
                    <motion.div
                        className="flex flex-row items-center justify-center gap-[12px] md:gap-[30px]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link
                            href="/courses"
                            className="flex items-center justify-center no-underline"
                        >
                            <motion.button
                                className="group relative w-[137px] h-[46px] md:w-[174px] md:h-[55px] rounded-[100px] border-none bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] flex items-center justify-center px-[18px] md:px-[24px] cursor-pointer overflow-hidden"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                            >
                                <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[14px] md:text-[18px] leading-[22.19px] md:leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    Explore Courses
                                </span>
                                <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[14px] md:text-[18px] leading-[22.19px] md:leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                    Explore Courses
                                </span>
                            </motion.button>
                        </Link>
                        <Link
                            href="/enquire"
                            className="flex items-center justify-center no-underline"
                        >
                            <motion.button
                                className="group relative w-[137px] h-[46px] md:w-[166px] md:h-[55px] rounded-[100px] border-none bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] flex items-center justify-center px-[18px] md:px-[24px] cursor-pointer overflow-hidden"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                            >
                                <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[14px] md:text-[18px] leading-[22.19px] md:leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    Get a Call Back
                                </span>
                                <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[14px] md:text-[18px] leading-[22.19px] md:leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                    Get a Call Back
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* ── Additional SVGs (World Education Summit & Admission Open) ── */}
                    <motion.div
                        className="flex flex-col items-center gap-[20px] max-md:gap-[15.2px] lg:gap-[13px] lg:-mt-[11px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Image
                            src="/photos/main/World-Education-Summit 1 new.webp"
                            alt="World Education Summit"
                            width={341}
                            height={63}
                            className="w-[341px] h-[63px] object-contain max-md:w-[213.8px] max-md:h-[39.5px]"
                        />

                        {/* Admission Open: hug content (no fixed width = no dead space right of text) */}
                        <div className="w-full flex justify-center">
                        <div className="inline-flex items-center justify-center gap-[8px] h-[20px] max-md:h-[15px] shrink-0">
                            <style>{`
                                @keyframes haca-blink {
                                    0%, 100% { opacity: 0.25; }
                                    50% { opacity: 1; }
                                }
                            `}</style>
                            {/* Blinking green light */}
                            <div
                                className="relative w-[18px] h-[18px]"
                                style={{ animation: "haca-blink 1.2s ease-in-out infinite" }}
                            >
                                {/* Outer glow circle */}
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: "#0DDE33", opacity: 0.2481 }}
                                />
                                {/* Inner solid circle */}
                                <div
                                    className="absolute w-[8px] h-[8px] rounded-full"
                                    style={{ background: "#0DDE33", top: 5, left: 5 }}
                                />
                            </div>
                            {/* Text */}
                            <span className="font-rethink font-medium text-[14px] leading-[19.2px] tracking-[0] text-[#A7ADBE]">
                                Admission Open
                            </span>
                        </div>
                        </div>
                    </motion.div>
                </div>
                {/* END hero-upper */}

                {/* Immediately visible block */}
                <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                >
                    <PhotoGallery />
                </motion.div>

                <SectionReveal className="w-full" duration={0.55} y={28} delay={0.05}>
                    <PressLogos />
                </SectionReveal>

                <SectionReveal className="w-full" duration={0.55} y={28} delay={0.05}>
                    <StatsSection />
                </SectionReveal>

                <SectionReveal className="w-full" duration={0.55} y={28} delay={0.05}>
                    <AboutHacaSection />
                </SectionReveal>

                <SectionReveal className="w-full" duration={0.55} y={28} delay={0.05}>
                    <Haca360Section />
                </SectionReveal>
            </div>
            {/* END hero-inner */}
        </section>
    )
}
