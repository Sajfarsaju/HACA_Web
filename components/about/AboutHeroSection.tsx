"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

export function AboutHeroSection() {
    return (
        <section className="w-full section-4k mx-auto pt-[120px] pb-[80px] flex flex-col items-center gap-[100px] px-[clamp(20px,4vw,60px)] max-md:pt-[24px] max-md:pb-[60px] max-md:gap-[30px]">
            <div className="w-full max-w-[788px] mx-auto flex flex-col gap-[clamp(20px,2.5vw,20px)]">
                <motion.h1
                    className="w-full font-rethink font-bold text-[clamp(32px,4vw,54px)] leading-[1.1] text-center text-white m-0"
                    {...fadeUp}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    About us
                </motion.h1>
                <motion.p
                    className="w-full font-rethink font-bold text-[clamp(14px,1.4vw,20px)] leading-[clamp(17px,2.1vw,34px)] text-center text-[#A7ADBE] m-0"
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    A quick overview of what HACA is all about and how we help you build real skills, gain industry exposure, and step confidently into your career.
                </motion.p>
            </div>

            <div className="w-full flex flex-row justify-between items-start gap-[clamp(24px,3vw,40px)] px-[clamp(12px,3vw,60px)] max-md:px-0 max-md:flex-col max-md:gap-[30px]">
                <motion.div
                    className="relative w-[clamp(260px,34vw,487px)] aspect-[487/537] rounded-[20px] overflow-hidden bg-[#10152F] shrink-0 max-md:w-full max-md:max-w-[335px] max-md:aspect-[335/286] max-md:mx-auto"
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <Image
                        src="/photos/main/about-hero.jpg"
                        alt="Students learning at HACA"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 335px, (max-width: 1200px) 34vw, 487px"
                        priority
                    />
                </motion.div>

                <motion.div
                    className="w-full max-w-[clamp(320px,48vw,741px)] flex flex-col gap-[50px] max-md:max-w-[335px] max-md:gap-[20px] max-md:mx-auto"
                    {...fadeUp}
                    transition={{ duration: 0.6, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <h2 className="w-full max-w-[min(597px,100%)] font-rethink font-semibold text-[clamp(26px,4vw,48px)] leading-[110%] text-white m-0">
                        Industry-Ready Skill Training Institute in India &amp; UAE
                    </h2>

                    <div className="w-full max-w-[min(741px,100%)] flex flex-col gap-[20px]">
                        <h3 className="font-rethink font-semibold text-[clamp(20px,3vw,36px)] leading-[34px] text-white m-0">
                            Welcome to HACA
                        </h3>
                        <p className="font-rethink font-medium text-[clamp(16px,1.25vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                            HACA ( Haris &amp; Co Academy ) is a multidisciplinary professional training institute built to prepare
                            students for the real world of work. Backed by an active agency ecosystem, HACA focuses on skill-first
                            education across Digital Marketing, Design, Technology, and Finance.
                            <br />
                            <br />
                            For the past 4 years, we’ve helped learners build industry-ready skills through hands-on training, real
                            projects, and exposure to live agency workflows. At HACA, learning doesn’t stop at theory. Students work
                            the way professionals do.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
