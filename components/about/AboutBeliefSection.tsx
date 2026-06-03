"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function AboutBeliefSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] py-[40px] flex flex-col items-center gap-[clamp(30px,3.5vw,44px)] px-[clamp(20px,4vw,60px)]">
            {/* Heading */}
            <h2 className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(26px,2.2vw,36px)] leading-[27px] text-center text-white m-0 max-md:max-w-[335px] max-md:font-semibold max-md:leading-[110%]">
                The Belief That Drives Us
            </h2>

            {/* Paragraph */}
            <p className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[125%] text-center text-[#A7ADBE] m-0 max-md:max-w-[335px] max-md:leading-[28px]">
                Dreams don&apos;t get hired. Skills with the right attitude do.
                <br />
                Every school at HACA is designed to unlock a different kind of talent. The only question is: which one&apos;s yours?
            </p>

            {/* Buttons container: row on desktop, column on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[clamp(20px,3vw,44px)]">
                {/* Explore Our Courses - primary CTA */}
                <Link
                    href="/courses"
                    className="inline-flex w-full max-w-[209px] max-md:max-w-[174.45px] no-underline"
                    aria-label="Explore our courses"
                >
                    <motion.button
                        type="button"
                        className="group relative w-full md:h-[55px] max-md:min-h-[46px] rounded-[100px] max-md:rounded-[83.64px] border-none bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] flex items-center justify-center px-[clamp(16.73px,1.5vw,20px)] cursor-pointer overflow-hidden"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                    >
                        <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[clamp(15px,1.25vw,18px)] leading-[clamp(22.58px,1.7vw,27px)] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            Explore Our Courses
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[clamp(15px,1.25vw,18px)] leading-[clamp(22.58px,1.7vw,27px)] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                            Explore Our Courses
                        </span>
                    </motion.button>
                </Link>

                <div
                    className="bg-white/60 w-[clamp(72px,24vw,96px)] h-px md:bg-white/70 md:w-px md:h-[clamp(28px,2.3vw,36px)] shrink-0"
                    aria-hidden
                />

                {/* Talk to Our Team - secondary */}
                <Link
                    href="/enquire"
                    className="inline-flex w-full max-w-[178px] max-md:max-w-[149.45px] no-underline"
                    aria-label="Talk to our team"
                >
                    <motion.button
                        type="button"
                        className="group relative w-full md:h-[55px] max-md:min-h-[46px] rounded-[100px] max-md:rounded-[83.64px] border-none bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] flex items-center justify-center px-[clamp(16.73px,1.5vw,20px)] cursor-pointer overflow-hidden"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                    >
                        <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[clamp(15px,1.25vw,18px)] leading-[clamp(22.58px,1.7vw,27px)] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            Talk to Our Team
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[clamp(15px,1.25vw,18px)] leading-[clamp(22.58px,1.7vw,27px)] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                            Talk to Our Team
                        </span>
                    </motion.button>
                </Link>
            </div>
        </section>
    )
}
