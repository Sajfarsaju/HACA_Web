"use client";

import { TechNavbar } from "@/components/sections/tech/TechNavbar";
import { motion } from "framer-motion";
import { BANNER_VISIBLE_H, DESIGN_H, DESIGN_W } from "./constants";

interface TechCoursesHeroProps {
    scale: number;
}

export function TechCoursesHero({ scale }: TechCoursesHeroProps) {
    return (
        <div
            className="relative z-20 w-full overflow-x-hidden overflow-y-hidden hidden md:block"
            style={{
                height: `${BANNER_VISIBLE_H * scale}px`,
            }}
        >
            <section
                className="tech-main-hero-canvas tech-courses-hero-canvas absolute top-0 left-1/2 w-[1440px] h-[1044px] overflow-x-hidden bg-[#111111]"
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
                        Courses We Offer
                    </h1>
                    <p
                        className="w-[1275px] m-0 text-[24px] leading-none text-[#A7A7A7] font-normal"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Learn practical tech and AI skills through hands-on courses built for real-world work.
                    </p>
                </motion.div>

                <motion.div
                    className="tech-promo-box"
                    initial={{ opacity: 0, scale: 0.95, x: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%" }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    style={{
                        position: "absolute",
                        top: "400px",
                        left: "50%",
                        width: "1692px",
                        height: "52px",
                        background: "#D9D9D91A",
                        border: "1px solid transparent",
                        boxShadow: "0px 4px 4px 0px #00000040",
                        backdropFilter: "blur(12px)",
                        padding: "10px 0",
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                    }}
                >
                    <div style={{ overflow: "hidden", width: "100%", height: "100%", display: "flex", alignItems: "center", borderRadius: "inherit" }}>
                        <motion.div
                            className="flex items-center shrink-0"
                            animate={{ x: [0, -806] }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear",
                            }}
                            style={{ display: "flex", alignItems: "center", gap: "30px", paddingLeft: "30px" }}
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-[30px] shrink-0">
                                    <span style={{ color: "#FFFFFF", fontSize: "20px", lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>★</span>
                                    <span style={{ width: "726px", height: "24px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "20px", display: "flex", alignItems: "center" }}>Enroll in our flagship programs and get the Applied AI Course worth ₹10,000 FREE</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
