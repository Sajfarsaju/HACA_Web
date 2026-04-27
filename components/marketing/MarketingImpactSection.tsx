"use client";

import React, { useState, useRef } from "react"
import { PressLogos } from "@/components/sections/PressLogos"
import { MarketingStatsSection } from "@/components/marketing/MarketingStatsSection"
import { MarketingApproachSection } from "@/components/marketing/MarketingApproachSection"
import Image from "next/image"

export function MarketingImpactSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const VIDEO_SRC = ""

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
                className="w-full bg-black opacity-100 overflow-hidden py-[clamp(20px,3vw,40px)]"
            >
                {/* Press Logo Container - Full Width */}
                <div className="w-full">
                    <PressLogos />
                </div>

                {/* Content constrained by horizontal padding */}
                <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col items-center gap-[clamp(20px,3vw,30px)] px-[clamp(16px,4.16vw,60px)]">
                    {/* About Us Portion */}
                    <div className="flex w-full min-w-0 max-w-[1320px] flex-col items-start gap-5 md:flex-row md:items-start md:justify-between md:gap-[clamp(20px,27vw,393px)]">
                        <div className="flex shrink-0 items-center gap-2">
                            <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#015AFF]" aria-hidden />
                            <span className="font-['Satoshi',sans-serif] text-[clamp(12px,1.1vw,16px)] font-medium leading-none text-white">
                                About Marketing School
                            </span>
                        </div>
                        <div className="w-full min-w-0 max-w-[702px] font-['Satoshi',sans-serif] text-[clamp(18px,2.2vw,28px)] font-light leading-[1.35] text-white md:leading-[1.4]">
                            Here, we don’t just explain marketing; we make you apply it. You’ll run ads, write copy,
                            build websites, optimise for SEO, launch campaigns, and fix mistakes, with someone guiding
                            you whenever you get stuck.
                        </div>
                    </div>

                    {/* Video Container Portion */}
                    <div className="mt-[clamp(16px,3vw,40px)] flex w-full min-w-0 max-w-[1320px] flex-col self-stretch items-stretch">
                        <div className="relative w-full overflow-hidden rounded-[2.84px] bg-[#111] md:rounded-none [aspect-ratio:1320/579] max-md:[aspect-ratio:343/256]">
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
                                className={`relative z-[1] h-full w-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
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
                                className="absolute left-1/2 top-1/2 z-10 h-[clamp(51.61px,4.2vw,60px)] w-[clamp(158.55px,12.8vw,184px)] -translate-x-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent p-0 transition-opacity duration-300"
                                onClick={togglePlay}
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                <div className="relative h-full w-full">
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
                            <p className="m-0 pb-[clamp(10px,1.5vw,16px)] text-left text-white [font-family:'Darker_Grotesque',sans-serif] text-[clamp(22px,3.2vw,32px)] font-semibold leading-[100%] tracking-[-0.02em]">
                                Our Journey in Simple Numbers
                            </p>
                            <MarketingStatsSection />
                        </div>

                        <div className="box-border w-full min-w-0 shrink-0 px-0">
                            <MarketingApproachSection />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
