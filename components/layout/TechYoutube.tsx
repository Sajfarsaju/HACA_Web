"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const THUMBNAILS = [
    { src: "/photos/schools/tech/Yutub1.png", alt: "YouTube Thumbnail 1" },
    { src: "/photos/schools/tech/YutubDataThumbnail.png", alt: "YouTube Data Thumbnail" },
    { src: "/photos/schools/tech/Yutub3.png", alt: "YouTube Thumbnail 3" },
    { src: "/photos/schools/tech/Yutub1.png", alt: "YouTube Thumbnail 4" },
    { src: "/photos/schools/tech/YutubDataThumbnail.png", alt: "YouTube Thumbnail 5" },
    { src: "/photos/schools/tech/Yutub3.png", alt: "YouTube Thumbnail 6" },
];

function getCardSizes(width: number) {
    // Very small screens (e.g. 320px): single centered card
    if (width < 360) {
        const centerW = width - 48;
        const centerH = centerW * 0.5625;
        return {
            centerW,
            centerH,
            sideW: 0,
            sideH: 0,
            gap: 0,
            showSide: false,
            centerRadius: 11.22,
            sideRadius: 9.35,
            centerBorderWidth: 0.51,
            sideBorderWidth: 0.43,
        };
    }

    // Mobile (375px–425px etc): one main card with side peeks, specific Figma sizes
    if (width < 480) {
        const centerW = 285.71429443359375;
        const centerH = 175.82418823242188;
        const sideH = 146.52015686035156;
        const sideW = centerW * (sideH / centerH);
        return {
            centerW,
            centerH,
            sideW,
            sideH,
            gap: 16,
            showSide: true,
            centerRadius: 11.22,
            sideRadius: 9.35,
            centerBorderWidth: 0.51,
            sideBorderWidth: 0.43,
        };
    }

    // Large Mobile / small tablet
    if (width < 768) {
        const centerW = Math.min(400, width - 64);
        const centerH = centerW * 0.5625;
        const sideW = 120;
        const sideH = 120 * 0.5625;
        return {
            centerW,
            centerH,
            sideW,
            sideH,
            gap: 20,
            showSide: true,
            centerRadius: 23.57,
            sideRadius: 19.64,
            centerBorderWidth: 1.07,
            sideBorderWidth: 0.89,
        };
    }

    // Tablet
    if (width < 1024) {
        const centerW = Math.min(480, width - 200);
        const centerH = centerW * 0.5625;
        const sideW = 200;
        const sideH = 200 * 0.5625;
        return {
            centerW,
            centerH,
            sideW,
            sideH,
            gap: 24,
            showSide: true,
            centerRadius: 23.57,
            sideRadius: 19.64,
            centerBorderWidth: 1.07,
            sideBorderWidth: 0.89,
        };
    }

    // Small Desktop
    if (width < 1280) {
        return {
            centerW: 520,
            centerH: 520 * 0.5625,
            sideW: 360,
            sideH: 360 * 0.5625,
            gap: 32,
            showSide: true,
            centerRadius: 23.57,
            sideRadius: 19.64,
            centerBorderWidth: 1.07,
            sideBorderWidth: 0.89,
        };
    }

    // Full Desktop and 4K
    return {
        centerW: 600,
        centerH: 369.23,
        sideW: 500,
        sideH: 307.69,
        gap: 40,
        showSide: true,
        centerRadius: 23.57,
        sideRadius: 19.64,
        centerBorderWidth: 1.07,
        sideBorderWidth: 0.89,
    };
}

function getOffset(index: number, active: number, total: number) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

export function TechYoutube() {
    const [active, setActive] = useState(1);
    const [windowWidth, setWindowWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1280
    );

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const total = THUMBNAILS.length;

    // Auto-advance every 3 seconds; timer resets when user clicks arrow (same as mentor/placement)
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((i) => (i + 1) % total);
        }, 3000);
        return () => clearInterval(timer);
    }, [active, total]);

    const prev = () => setActive((i) => (i - 1 + total) % total);
    const next = () => setActive((i) => (i + 1) % total);
    const {
        centerW,
        centerH,
        sideW,
        sideH,
        gap,
        showSide,
        centerRadius,
        sideRadius,
        centerBorderWidth,
        sideBorderWidth,
    } = getCardSizes(windowWidth);

    return (
        <section
            className="w-full relative overflow-visible bg-transparent flex flex-col items-center justify-center min-h-auto py-[60px] -mb-[100px] sm:mb-0 gap-[36px] sm:min-h-[828px] sm:py-[100px] sm:gap-[60px]"
        >
            {/* Header */}
            <div className="z-10 flex flex-col items-center gap-4 text-center px-6">
                <h2 className="font-outfit font-normal text-[clamp(28px,5vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] max-w-[1440px]">
                    Insights We Share on YouTube
                </h2>
                <p className="font-outfit font-normal text-[clamp(14px,2vw,24px)] leading-[140%] tracking-[-0.2px] text-[#A7A7A7] max-w-[1029px]">
                    Our YouTube content reflects ongoing lessons from work in progress, evolving trends, experiments, and outcomes.
                </p>
            </div>

            {/* Background decorative gradients for cards */}
            <div 
                className="absolute inset-x-0 top-[200px] bottom-[100px] pointer-events-none z-0"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
            >
                {/* Left side — Group 50.svg touches left edge exactly matching side card width */}
                <div className="absolute -left-[80px] md:left-0 top-1/2 -translate-y-1/2 w-[250px] h-[400px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px] opacity-100 mix-blend-screen">
                    <Image
                        src="/photos/schools/tech/Group 50.svg"
                        alt=""
                        fill
                        className="object-fill brightness-100 saturate-[1.2]"
                        aria-hidden
                    />
                </div>
                {/* Right side — Group 49.svg touches right edge exactly matching side card width */}
                <div className="absolute -right-[80px] md:right-0 top-1/2 -translate-y-1/2 w-[250px] h-[400px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px] opacity-100 mix-blend-screen">
                    <Image
                        src="/photos/schools/tech/Group 49.svg"
                        alt=""
                        fill
                        className="object-fill brightness-100 saturate-[1.2]"
                        aria-hidden
                    />
                </div>
            </div>

            {/* Carousel Stage */}
            <div
                className="z-10 w-full relative flex items-center justify-center overflow-hidden"
                style={{ height: `${centerH + 40}px` }}
            >
                {THUMBNAILS.map((thumb, i) => {
                    const offset = getOffset(i, active, total);
                    const isCenter = offset === 0;
                    const isVisible = showSide ? Math.abs(offset) <= 1 : isCenter;

                    const cardW = isCenter ? centerW : sideW;
                    const cardH = isCenter ? centerH : sideH;

                    // Compute the horizontal position of each card
                    let translateX = 0;
                    if (offset !== 0 && showSide) {
                        const centerHalf = centerW / 2;
                        const sideHalf = sideW / 2;
                        translateX = offset > 0
                            ? centerHalf + gap + sideHalf + (offset - 1) * (sideW + gap)
                            : -(centerHalf + gap + sideHalf) + (offset + 1) * (sideW + gap);
                    }

                    return (
                        <div
                            key={i}
                            onClick={() => {
                                if (offset === -1) prev();
                                if (offset === 1) next();
                            }}
                            className={`absolute overflow-hidden ${isCenter ? "cursor-default z-[2]" : "cursor-pointer z-[1]"} ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                            style={{
                                width: `${cardW}px`,
                                height: `${cardH}px`,
                                borderRadius: `${isCenter ? centerRadius : sideRadius}px`,
                                background: isCenter
                                    ? `linear-gradient(#111111, #111111) padding-box, linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%) border-box`
                                    : "transparent",
                                border: isCenter
                                    ? `${centerBorderWidth}px solid transparent`
                                    : `${sideBorderWidth}px solid rgba(255,255,255,0.15)`,
                                boxShadow: "none",
                                transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.96})`,
                                opacity: isVisible ? 1 : 0,
                                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease, box-shadow 0.5s ease",
                            }}
                        >
                            <Image src={thumb.src} alt={thumb.alt} fill className="object-fill" />
                            {isCenter && (
                                <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center gap-4 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                    </div>
                                    <span className="text-white uppercase tracking-[0.2em] font-medium text-xs drop-shadow-md">Watch Now</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Navigation Controls */}
            <div className="z-10 flex gap-4 -mt-[26px] sm:mt-0">
                <button
                    onClick={prev}
                    aria-label="Previous"
                    className="rounded-full border-[#FFFFFF] flex items-center justify-center bg-[#000000] shrink-0 rotate-90 cursor-pointer transition-opacity duration-200 hover:opacity-80"
                    style={{ width: "46.67px", height: "46.67px", borderWidth: "1px", opacity: 1 }}
                >
                    <Image 
                        src="/photos/schools/tech/Arrow_FAQ.svg" 
                        alt="prev" 
                        width={18} height={18} 
                        className="brightness-0 invert" 
                        style={{ width: "17.71px", height: "17.71px" }}
                    />
                </button>
                <button
                    onClick={next}
                    aria-label="Next"
                    className="rounded-full border-[#FFFFFF] flex items-center justify-center bg-[#000000] shrink-0 -rotate-90 cursor-pointer transition-opacity duration-200 hover:opacity-80"
                    style={{ width: "46.67px", height: "46.67px", borderWidth: "1px", opacity: 1 }}
                >
                    <Image 
                        src="/photos/schools/tech/Arrow_FAQ.svg" 
                        alt="next" 
                        width={18} height={18} 
                        className="brightness-0 invert" 
                        style={{ width: "17.71px", height: "17.71px" }}
                    />
                </button>
            </div>
        </section>
    );
}
