"use client";

import React, { useState, useRef, useEffect } from "react"
import { PressLogos } from "@/components/sections/PressLogos"
import { MarketingStatsSection } from "@/components/marketing/MarketingStatsSection"
import { MarketingApproachSection } from "@/components/marketing/MarketingApproachSection"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"

export function MarketingImpactSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const VIDEO_SRC = "";

    const togglePlay = () => {
        if (videoRef.current) {
            isPlaying ? videoRef.current.pause() : videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    // ── Scroll-driven stack animation ───────────────────────────────────────
    const scrollY      = useMotionValue(0);
    const sectionTopRef = useRef(0);

    // Measure section's absolute top once (and on resize)
    useEffect(() => {
        const measure = () => {
            if (!wrapperRef.current) return;
            let top = 0, node: HTMLElement | null = wrapperRef.current;
            while (node) { top += node.offsetTop; node = node.offsetParent as HTMLElement | null; }
            sectionTopRef.current = top;
        };
        measure();
        window.addEventListener("resize", measure, { passive: true });
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        const onScroll = () => scrollY.set(window.scrollY);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollY]);

    const ANIM_RANGE = 420; // px of scroll over which the transition plays

    // Progress 0→1: starts when section enters viewport, ends ANIM_RANGE px later.
    // Math.max(0, …) ensures progress is always 0 at scroll=0 regardless of
    // how tall the hero is relative to the viewport.
    const rawProgress = useTransform(scrollY, v => {
        const animStart = Math.max(0, sectionTopRef.current - window.innerHeight);
        return Math.max(0, Math.min(1, (v - animStart) / ANIM_RANGE));
    });
    const progress  = useSpring(rawProgress, { stiffness: 80, damping: 25 });

    const bgColor   = useTransform(progress, [0, 1], ["#FFFFFF", "#000000"]);
    const textColor = useTransform(progress, [0, 1], ["#000000", "#ffffff"]);

    return (
        <motion.section
            ref={wrapperRef}
            id="marketing-impact"
                className="w-full flex flex-col items-center opacity-100 overflow-hidden"
                style={{
                    minHeight: "1666.82px",
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    gap: "30px",
                    backgroundColor: bgColor,
                }}
            >
                {/* Desktop Styles */}
                <style jsx>{`
                    section {
                        min-height: 1666.82px;
                        padding-top: 40px;
                        padding-bottom: 40px;
                    }
                    .content-container {
                        padding-left: clamp(16px, 4.16vw, 60px);
                        padding-right: clamp(16px, 4.16vw, 60px);
                        width: 100%;
                        max-width: 1440px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .about-us-container {
                        width: 100%;
                        max-width: 1320px;
                        min-height: clamp(152px, 15vw, 198px);
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: center;
                        gap: clamp(20px, 27vw, 393px);
                        opacity: 1;
                    }
                    .info-button {
                        width: auto;
                        min-width: max-content;
                        height: clamp(16px, 2vw, 22px);
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        align-items: center;
                        gap: clamp(7.47px, 1vw, 10px);
                        flex-shrink: 0;
                    }
                    .blue-dot {
                        width: clamp(8.215px, 0.8vw, 11px);
                        height: clamp(8.215px, 0.8vw, 11px);
                        background: #015aff;
                        border-radius: 50%;
                        flex-shrink: 0;
                    }
                    .info-text {
                        width: auto;
                        min-width: max-content;
                        height: clamp(16px, 2vw, 22px);
                        font-family: "Satoshi", sans-serif;
                        font-weight: 500;
                        font-size: clamp(12px, 1.1vw, 16px);
                        line-height: 100%;
                        white-space: nowrap;
                        flex-shrink: 0;
                    }
                    .note-text {
                        width: 100%;
                        max-width: 702px;
                        height: auto;
                        min-height: 152px;
                        font-family: "Satoshi", sans-serif;
                        font-weight: 300;
                        font-size: 28px;
                        line-height: 140%;
                    }
                    .video-section-wrapper {
                        margin-top: clamp(20px, 3vw, 40px);
                        width: 100%;
                        max-width: 1320px;
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                        justify-content: flex-start;
                        box-sizing: border-box;
                    }
                    .video-container {
                        position: relative;
                        width: 100%;
                        height: clamp(256px, 40vw, 579px);
                        background: #111;
                        border-radius: 0px;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .video-element {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .play-pause-btn {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) rotate(0deg);
                        width: clamp(158.55px, 12.8vw, 184px);
                        height: clamp(51.61px, 4.2vw, 60px);
                        z-index: 10;
                        border: none;
                        background: transparent;
                        padding: 0;
                        cursor: pointer;
                        opacity: 1;
                        transition: opacity 0.3s ease, transform 0.3s ease;
                    }
                    @media (max-width: 768px) {
                        section {
                            min-height: 2645.01px;
                            padding-top: 20px;
                            padding-bottom: 40px;
                        }
                        .about-us-container {
                            width: 343px;
                            max-width: 100%;
                            height: auto;
                            min-height: 198px;
                            flex-direction: column;
                            gap: 20px;
                            align-items: flex-start;
                        }
                        .info-button,
                        .info-text {
                            white-space: nowrap;
                        }
                        .note-text {
                            width: 343px;
                            height: auto;
                            min-height: 162px;
                            font-size: 20px;
                            font-weight: 300;
                            line-height: 130%;
                        }
                        .video-container {
                            max-width: 343px;
                            border-radius: 2.84px;
                        }
                    }
                `}</style>

                {/* Press Logo Container - Full Width */}
                <div className="w-full">
                    <PressLogos />
                </div>

                {/* Content constrained by horizontal padding */}
                <div className="content-container">
                    {/* About Us Portion */}
                    <div className="about-us-container">
                        <div className="info-button">
                            <div className="blue-dot" />
                            <motion.span className="info-text" style={{ color: textColor }}>
                                About Marketing School
                            </motion.span>
                        </div>
                        <motion.div className="note-text" style={{ color: textColor }}>
                            Here, we don't just explain marketing; we make you apply it. You'll run ads, write copy,
                            build websites, optimise for SEO, launch campaigns, and fix mistakes, with someone guiding
                            you whenever you get stuck.
                        </motion.div>
                    </div>

                    {/* Video Container Portion */}
                    <div className="video-section-wrapper flex w-full min-w-0 max-w-[1320px] flex-col self-stretch items-stretch">
                        <div className="video-container">
                            {/* Background photo */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/photos/main/Rectangle 2.png"
                                    alt=""
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>

                            <video
                                ref={videoRef}
                                className={`video-element relative z-1 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
                                style={{ pointerEvents: isPlaying ? "auto" : "none" }}
                                playsInline
                                loop
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                aria-label="Marketing application demonstration video"
                            >
                                {VIDEO_SRC ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
                                Your browser does not support the video tag.
                            </video>

                            <button
                                className="play-pause-btn"
                                onClick={togglePlay}
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/photos/schools/marketing/play-pause-btn.svg"
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </button>
                        </div>

                        <div className="mt-[clamp(16px,2.5vw,28px)] w-full min-w-0 shrink-0 px-0">
                            <motion.p
                                className="m-0 pb-[clamp(10px,1.5vw,16px)] text-left [font-family:'Darker_Grotesque',sans-serif] text-[clamp(22px,3.2vw,32px)] font-semibold leading-[100%] tracking-[-0.02em]"
                                style={{ color: textColor }}
                            >
                                Our Journey in Simple Numbers
                            </motion.p>
                            <MarketingStatsSection />
                        </div>

                        <div className="box-border w-full min-w-0 shrink-0 px-0">
                            <MarketingApproachSection />
                        </div>
                    </div>
                </div>
        </motion.section>
    )
}
