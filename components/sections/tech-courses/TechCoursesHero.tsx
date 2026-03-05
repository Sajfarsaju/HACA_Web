"use client";

import Image from "next/image";
import { TechNavbar } from "@/components/sections/tech/TechNavbar";
import { BANNER_VISIBLE_H, DESIGN_H, DESIGN_W } from "./constants";

interface TechCoursesHeroProps {
    scale: number;
}

export function TechCoursesHero({ scale }: TechCoursesHeroProps) {
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

                <TechNavbar />

                <div
                    className="tech-courses-hero-text-desktop absolute top-[230px] left-1/2 -translate-x-1/2 w-[1275px] flex flex-col items-center gap-10 text-center"
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
                </div>

                <div
                    className="tech-promo-box"
                    style={{
                        position: "absolute",
                        top: "400px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "1692px",
                        height: "52px",
                        background: "#D9D9D91A",
                        border: "1px solid transparent",
                        boxShadow: "0px 4px 4px 0px #00000040",
                        backdropFilter: "blur(12px)",
                        padding: "10px 30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                    }}
                >
                    <span style={{ width: "20px", height: "32px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>*</span>
                    <span style={{ width: "726px", height: "24px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "20px", display: "flex", alignItems: "center" }}>Enroll in our flagship programs and get the Applied AI Course worth ₹10,000 FREE</span>
                    <span style={{ width: "20px", height: "32px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>*</span>
                    <span style={{ width: "726px", height: "24px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "20px", display: "flex", alignItems: "center" }}>Enroll in our flagship programs and get the Applied AI Course worth ₹10,000 FREE</span>
                    <span style={{ width: "20px", height: "32px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>*</span>
                </div>
            </section>
        </div>
    );
}
