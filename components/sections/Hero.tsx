"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PhotoGallery } from "./PhotoGallery"
import { PressLogos } from "./PressLogos"
import { StatsSection } from "./StatsSection"
import { AboutHacaSection } from './AboutHacaSection'
import { Haca360Section } from './Haca360Section'

export function Hero() {
    return (
        <section className="w-full section-4k mx-auto pt-[100px] pb-[60px] bg-transparent relative max-md:pt-0 max-md:pb-0">
            {/* ── Inner Container ── */}
            <div className="w-full flex flex-col items-center gap-[36px] max-md:gap-[34px]">

                {/* ──────────────────────────────────────
                    UPPER CONTAINER
                    (desktop: 780px wide, mobile: full width)
                    ────────────────────────────────────── */}
                <div className="w-full max-w-[780px] flex flex-col items-center gap-[50px] max-md:max-w-full max-md:pt-0 max-md:px-[20px] max-md:gap-[26px] md:px-[32px] lg:px-0">

                    {/* ── First Container: Info button + Heading + Paragraph ── */}
                    <div className="w-full flex flex-col items-center gap-[16px] max-md:gap-[10px]">

                        {/* Info Button */}
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="/photos/main/Info Button.svg"
                                alt="Info"
                                width={371}
                                height={64}
                                className="w-[371px] h-[64px] object-contain max-md:w-[271px] max-md:h-[46px]"
                                priority
                            />
                        </motion.div>

                        {/* Text Container */}
                        <div className="w-full flex flex-col items-center gap-[20px] max-md:gap-[9.05px]">
                            {/* Heading */}
                            <motion.div
                                className="w-full flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p className="font-rethink font-bold text-[58px] leading-[69.6px] tracking-normal text-center text-white m-0 max-md:text-[26px] max-md:leading-[31.5px]">Skills Are the New Degree,</p>
                                <p className="font-rethink font-bold text-[58px] leading-[69.6px] tracking-normal text-center text-white m-0 max-md:text-[26px] max-md:leading-[31.5px]">Build Yours with HACA.</p>
                            </motion.div>

                            {/* Paragraph */}
                            <motion.div
                                className="w-full flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <p className="font-rethink font-medium text-[18px] leading-[27px] tracking-normal text-center text-[#A7ADBE] m-0 max-md:text-[14px] max-md:leading-[15px]">
                                    At HACA, every course is built to make you career-ready in Digital Marketing, Design, Tech, or Finance.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── Button Container (desktop: two buttons, mobile: one button) ── */}

                    {/* Desktop Button Row */}
                    <motion.div
                        className="flex items-center justify-center gap-[30px] max-md:hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link href="/courses" className="flex items-center justify-center no-underline transition-transform duration-200 ease-out hover:scale-[1.04]">
                            <Image
                                src="/photos/main/explore course btn.svg"
                                alt="Explore Courses"
                                width={174}
                                height={55}
                                className="object-contain"
                            />
                        </Link>
                        <Link href="/contact" className="flex items-center justify-center no-underline transition-transform duration-200 ease-out hover:scale-[1.04]">
                            <Image
                                src="/photos/common/call back btn.svg"
                                alt="Call Back"
                                width={166}
                                height={55}
                                className="object-contain"
                            />
                        </Link>
                    </motion.div>

                    {/* Mobile Button (single) */}
                    <motion.div
                        className="hidden max-md:flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link href="/schools" className="flex items-center justify-center no-underline transition-transform duration-200 ease-out hover:scale-[1.04]">
                            <Image
                                src="/photos/main/explore school btn.svg"
                                alt="Explore Schools"
                                width={137}
                                height={46}
                                className="object-contain"
                            />
                        </Link>
                    </motion.div>

                    {/* ── Additional SVGs (World Education Summit & Admission Open) ── */}
                    <motion.div
                        className="flex flex-col items-center gap-[20px] max-md:gap-[15.2px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Image
                            src="/photos/main/World-Education-Summit 1.svg"
                            alt="World Education Summit"
                            width={341}
                            height={63}
                            className="w-[341px] h-[63px] object-contain max-md:w-[213.8px] max-md:h-[39.5px]"
                        />
                        <Image
                            src="/photos/main/admisn opn.svg"
                            alt="Admission Open"
                            width={196}
                            height={20}
                            className="w-[196px] h-[20px] object-contain max-md:w-[149px] max-md:h-[15px]"
                        />
                    </motion.div>
                </div>
                {/* END hero-upper */}

                {/* Photo Card Scrolling Gallery */}
                <PhotoGallery />

                {/* Press Logos Section */}
                <PressLogos />

                {/* Stats Section */}
                <StatsSection />

                {/* About HACA Section */}
                <AboutHacaSection />

                {/* HACA 360 Section */}
                <Haca360Section />
            </div>
            {/* END hero-inner */}
        </section>
    )
}
