"use client";

import Image from "next/image";
import { TechNavbar } from "@/components/sections/tech/TechNavbar";
import { motion } from "framer-motion";
import { BANNER_VISIBLE_H, DESIGN_H, DESIGN_W } from "@/components/sections/tech-courses/constants";

interface TechProjectsHeroProps {
    scale: number;
}

export function TechProjectsHero({ scale }: TechProjectsHeroProps) {
    return (
        <div
            className="relative z-20 w-full overflow-hidden hidden md:block"
            style={{
                height: `${BANNER_VISIBLE_H * scale}px`,
            }}
        >
            <section
                className="tech-main-hero-canvas absolute top-0 left-1/2 w-[1440px] h-[1044px] overflow-hidden bg-[#111111]"
                style={{
                    transform: `translateX(-50%) scale(${scale})`,
                    transformOrigin: "top center",
                    left: "50%",
                    height: `${DESIGN_H}px`,
                    width: `${DESIGN_W}px`,
                }}
            >
                <div className="absolute inset-0 w-[1593.45px] h-[304px] top-[-29px] left-[-36px] opacity-100 z-0 pointer-events-none">
                    <Image src="/photos/Tech/Gradiant.svg" alt="Gradient" fill className="!object-cover" priority />
                    <div className="absolute inset-0 z-[1]">
                        <Image src="/photos/Tech/Ellipse 2.svg" alt="Ellipse Gradient" fill className="!object-cover" priority />
                    </div>
                </div>

                {/* Soft fade: navbar gradient blends into hero theme (same as tech home) */}
                <div
                    className="absolute left-0 right-0 z-[3] pointer-events-none"
                    style={{
                        top: "80px",
                        height: "220px",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(17,17,17,0.12) 20%, rgba(17,17,17,0.4) 50%, rgba(17,17,17,0.85) 85%, #111111 100%)",
                    }}
                    aria-hidden="true"
                />

                <TechNavbar />

                <motion.div
                    className="tech-courses-hero-text-desktop absolute top-[230px] left-1/2 -translate-x-1/2 w-[1275px] flex flex-col items-center gap-10 text-center z-[5]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1
                        className="w-[1275px] m-0 text-[60px] leading-none text-white font-normal"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Student Projects
                    </h1>
                    <p
                        className="w-[1275px] m-0 text-[24px] leading-none text-[#A7A7A7] font-normal"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Every project you see below started as an idea in class and grew into something worth showing off.
                    </p>
                </motion.div>


            </section>
        </div>
    );
}

