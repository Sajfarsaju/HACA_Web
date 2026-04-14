"use client";

import { TechNavbar } from "@/components/sections/tech/TechNavbar";
import { motion } from "framer-motion";
import { BANNER_VISIBLE_H, DESIGN_H, DESIGN_W } from "@/components/sections/tech-courses/constants";

interface TechProjectsHeroProps {
    scale: number;
}

export function TechProjectsHero({ scale }: TechProjectsHeroProps) {
    return (
        <div
            className="relative z-20 w-full overflow-x-hidden overflow-y-hidden hidden md:block"
            style={{
                height: `${BANNER_VISIBLE_H * scale}px`,
            }}
        >
            <section
                className="tech-main-hero-canvas absolute top-0 left-1/2 w-[1440px] h-[1044px] overflow-x-hidden bg-[#111111]"
                style={{
                    transform: `translateX(-50%) scale(${scale})`,
                    transformOrigin: "top center",
                    left: "50%",
                    height: `${DESIGN_H}px`,
                    width: `${DESIGN_W}px`,
                }}
            >
                {/* ── TOP GRADIENT (CSS — animated) ── */}
                <div aria-hidden="true" className="absolute z-0 pointer-events-none"
                    style={{ width: '1593.45px', height: '374px', top: '-219px', left: '-36px' }}>
                    <div className="hero-grad-outer-d" style={{
                        position: 'absolute', width: '1580.98px', height: '355.6px',
                        top: 0, left: 0, borderRadius: '50%',
                        background: 'linear-gradient(261.66deg, rgba(255,86,0,1) 17.08%, rgba(105,74,255,1) 72.9%)',
                        filter: 'blur(70px) saturate(1.25) contrast(1.03)',
                    }} />
                    <div className="hero-grad-inner-d" style={{
                        position: 'absolute', width: '981.61px', height: '175.12px',
                        top: '81.3px', left: '266.48px', borderRadius: '50%',
                        background: '#FFFFFF',
                        filter: 'blur(90px) saturate(1.08)',
                        opacity: 0.76,
                    }} />
                </div>

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

