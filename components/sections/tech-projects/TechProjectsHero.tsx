"use client";

import Image from "next/image";
import { TechNavbar } from "@/components/sections/tech/TechNavbar";
import { BANNER_VISIBLE_H, DESIGN_H, DESIGN_W } from "@/components/sections/tech-courses/constants";

interface TechProjectsHeroProps {
    scale: number;
}

export function TechProjectsHero({ scale }: TechProjectsHeroProps) {
    return (
        <div
            className="tech-main-hero-wrapper"
            style={{
                height: `${BANNER_VISIBLE_H * scale}px`,
                position: "relative",
                zIndex: 20,
            }}
        >
            <section
                className="tech-main-hero-canvas"
                style={{
                    transform: `translateX(-50%) scale(${scale})`,
                    transformOrigin: "top center",
                    left: "50%",
                    height: `${DESIGN_H}px`,
                    position: "absolute",
                    width: `${DESIGN_W}px`,
                }}
            >
                <div className="tech-main-hero-bg-layer">
                    <Image src="/photos/Tech/Gradiant.svg" alt="Gradient" fill className="tech-main-hero-bg-img" priority />
                    <div className="tech-main-hero-ellipse-wrap">
                        <Image src="/photos/Tech/Ellipse 2.svg" alt="Ellipse Gradient" fill className="tech-main-hero-bg-img" priority />
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
                        Student Projects
                    </h1>
                    <p
                        className="w-[1275px] m-0 text-[24px] leading-none text-[#A7A7A7] font-normal"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Every project you see below started as an idea in class and grew into something worth showing off.
                    </p>
                </div>
            </section>
        </div>
    );
}

