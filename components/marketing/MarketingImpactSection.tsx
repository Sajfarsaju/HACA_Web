"use client";

import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { PressLogos } from "@/components/sections/PressLogos"
import { MarketingStatsSection } from "@/components/marketing/MarketingStatsSection"
import { MarketingApproachSection } from "@/components/marketing/MarketingApproachSection"
import { ALT } from "@/lib/image-alt-text"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function MarketingImpactSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const wrapperRef = useRef<HTMLElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start end", "end start"],
    });
    const [isDark, setIsDark] = useState(false);
    useMotionValueEvent(scrollYProgress, "change", (v) => setIsDark(v > 0.08));

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark } }));
    }, [isDark]);

    useEffect(() => {
        if (!isPlaying) return;
        function handleClickOutside(e: MouseEvent) {
            if (videoContainerRef.current && !videoContainerRef.current.contains(e.target as Node)) {
                setIsPlaying(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isPlaying]);

    return (
        <section
            ref={wrapperRef}
            id="marketing-impact"
            className="w-full flex flex-col items-center opacity-100 overflow-hidden"
            style={{
                minHeight: "1666.82px",
                paddingTop: "40px",
                paddingBottom: "40px",
                gap: "30px",
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
                        height: auto;
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
                        height: auto;
                        font-family: "Satoshi", sans-serif;
                        font-weight: 500;
                        font-size: 16px;
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
                            width: 100%;
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
                        .info-text {
                            font-size: 14px;
                        }
                        .note-text {
                            width: 100%;
                            height: auto;
                            min-height: 162px;
                            font-size: 20px;
                            font-weight: 300;
                            line-height: 130%;
                        }
                        .video-container {
                            width: 100%;
                            max-width: none;
                            border-radius: 2.84px;
                        }
                        .video-section-wrapper {
                            padding-left: 0px;
                            padding-right: 0px;
                            box-sizing: border-box;
                        }
                        .impact-stats-block {
                            padding-left: 0px;
                            padding-right: 0px;
                            box-sizing: border-box;
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
                            <span className="info-text">
                                About Marketing School
                            </span>
                        </div>
                        <div className="note-text">
                            Here, we don&apos;t just explain marketing; we make you apply it. You&apos;ll run ads, write copy,
                            build websites, optimise for SEO, launch campaigns, and fix mistakes, with someone guiding
                            you whenever you get stuck.
                        </div>
                    </div>

                    {/* Video Container Portion */}
                    <div className="video-section-wrapper flex w-full min-w-0 max-w-[1320px] flex-col self-stretch items-stretch">
                        <div ref={videoContainerRef} className="video-container relative overflow-hidden">
                            {isPlaying ? (
                                <iframe
                                    src="https://www.youtube.com/embed/y-iyA5UXJLk?rel=0&modestbranding=1&autoplay=1"
                                    title="Marketing School — application demonstration"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ width: "100%", height: "100%", border: "none" }}
                                />
                            ) : (
                                <>
                                    {/* YouTube thumbnail poster — reduced opacity */}
                                    <div className="absolute inset-0 z-0 opacity-60">
                                        <Image
                                            src="https://img.youtube.com/vi/y-iyA5UXJLk/maxresdefault.jpg"
                                            alt={ALT.marketingImpactVideo}
                                            fill
                                            className="object-cover object-center"
                                            priority
                                        />
                                    </div>
                                    {/* Smooth glow on hover via CSS — Motion handles scale separately */}
                                    <style>{`
                                        .play-svg-btn {
                                            transition: filter 0.5s ease;
                                        }
                                        .play-svg-btn:hover {
                                            filter: drop-shadow(0 0 18px rgba(255,255,255,0.5));
                                        }
                                    `}</style>

                                    {/* Wrapper handles centering; Motion only scales so transform doesn't conflict */}
                                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 10, width: "clamp(158.55px, 12.8vw, 184px)", height: "clamp(51.61px, 4.2vw, 60px)" }}>
                                        <motion.button
                                            className="play-svg-btn"
                                            onClick={() => setIsPlaying(true)}
                                            aria-label="Play video"
                                            style={{ width: "100%", height: "100%", background: "transparent", border: "none", padding: 0, cursor: "pointer", position: "relative" }}
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.94 }}
                                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        >
                                            <Image
                                                src="/photos/schools/marketing/play-pause-btn.svg"
                                                alt=""
                                                aria-hidden="true"
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.button>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="impact-stats-block mt-[clamp(16px,2.5vw,28px)] w-full min-w-0 shrink-0 px-0">
                            <MarketingStatsSection />
                        </div>

                        <div className="box-border w-full min-w-0 shrink-0 px-0">
                            <MarketingApproachSection />
                        </div>
                    </div>
                </div>
        </section>
    )
}