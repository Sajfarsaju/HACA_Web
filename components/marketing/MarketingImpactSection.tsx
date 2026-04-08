"use client";

import React, { useState, useRef } from "react"
import { PressLogos } from "@/components/sections/PressLogos"
import { MarketingStatsSection } from "@/components/marketing/MarketingStatsSection"
import Image from "next/image"

export function MarketingImpactSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <section
                id="marketing-impact"
                className="w-full bg-[#000000] flex flex-col items-center opacity-100 overflow-hidden"
                style={{
                    minHeight: "1666.82px",
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    gap: "30px",
                }}
            >
                {/* Desktop Styles (using CSS variables for clean responsive handling if needed, or standard tailwind) */}
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
                        width: clamp(65.68px, 6vw, 88px);
                        height: clamp(16px, 2vw, 22px);
                        display: flex;
                        flex-direction: row;
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
                        width: clamp(50px, 5vw, 67px);
                        height: clamp(16px, 2vw, 22px);
                        color: #ffffff;
                        font-family: "Satoshi", sans-serif;
                        font-weight: 500;
                        font-size: clamp(12px, 1.1vw, 16px);
                        line-height: 100%;
                        white-space: nowrap;
                    }
                    .note-text {
                        width: 100%;
                        max-width: 702px;
                        height: auto;
                        min-height: 152px;
                        color: #ffffff;
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
                        justify-content: center;
                    }
                    .video-container {
                        position: relative;
                        width: 100%;
                        height: clamp(256px, 40vw, 579px);
                        background: #111; /* Fallback */
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
                            height: auto;
                            min-height: 198px;
                            flex-direction: column;
                            gap: 20px;
                            align-items: flex-start;
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
                            <span className="info-text">About Us</span>
                        </div>
                        <div className="note-text">
                            Here, we don’t just explain marketing; we make you apply it. You’ll run ads, write copy,
                            build websites, optimise for SEO, launch campaigns, and fix mistakes, with someone guiding
                            you whenever you get stuck.
                        </div>
                    </div>

                    {/* Video Container Portion */}
                    <div className="video-section-wrapper flex flex-col items-center">
                        <div className="video-container">
                            {/* Background photo from Haca360Section */}
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
                                {/* Fallback src or future real source */}
                                <source src="" type="video/mp4" />
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

                        <div className="w-full mt-[clamp(24px,3vw,40px)]">
                            <MarketingStatsSection />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
