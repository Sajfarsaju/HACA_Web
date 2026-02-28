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
    if (width < 480) {
        // Mobile: single card only, nearly full-width
        return { centerW: width - 48, centerH: (width - 48) * 0.5625, sideW: 0, sideH: 0, gap: 0, showSide: false };
    } else if (width < 768) {
        // Large Mobile: center card + tiny side peek
        const centerW = Math.min(400, width - 64);
        return { centerW, centerH: centerW * 0.5625, sideW: 120, sideH: 120 * 0.5625, gap: 20, showSide: true };
    } else if (width < 1024) {
        // Tablet
        const centerW = Math.min(480, width - 200);
        return { centerW, centerH: centerW * 0.5625, sideW: 200, sideH: 200 * 0.5625, gap: 24, showSide: true };
    } else if (width < 1280) {
        // Small Desktop
        return { centerW: 520, centerH: 520 * 0.5625, sideW: 360, sideH: 360 * 0.5625, gap: 32, showSide: true };
    } else {
        // Full Desktop
        return { centerW: 600, centerH: 369.23, sideW: 500, sideH: 307.69, gap: 40, showSide: true };
    }
}

function getOffset(index: number, active: number, total: number) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

export function TechYoutube() {
    const [active, setActive] = useState(1);
    const [windowWidth, setWindowWidth] = useState(1280);

    const handleResize = useCallback(() => setWindowWidth(window.innerWidth), []);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const prev = () => setActive((i) => (i - 1 + THUMBNAILS.length) % THUMBNAILS.length);
    const next = () => setActive((i) => (i + 1) % THUMBNAILS.length);

    const total = THUMBNAILS.length;
    const { centerW, centerH, sideW, sideH, gap, showSide } = getCardSizes(windowWidth);

    return (
        <section
            className="w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center min-h-auto py-[60px] gap-[36px] sm:min-h-[828px] sm:py-[100px] sm:gap-[60px]"
        >
            {/* Left Gradient Decorations */}
            <div className="absolute top-[55%] left-0 -translate-y-1/2 z-0 pointer-events-none">
                <Image
                    src="/photos/schools/tech/youtubGradientLeft1.svg"
                    alt=""
                    width={658}
                    height={1062}
                    className="block -ml-[120px]"
                />
                <Image
                    src="/photos/schools/tech/youtubGradientLeft2.svg"
                    alt=""
                    width={443}
                    height={923}
                    className="absolute top-[55%] left-[-60px] -translate-y-1/2"
                />
            </div>

            {/* Right Gradient Decorations */}
            <div className="absolute top-[55%] right-0 -translate-y-1/2 z-0 pointer-events-none">
                <Image
                    src="/photos/schools/tech/youtubGradientRight1.svg"
                    alt=""
                    width={658}
                    height={1062}
                    className="block -mr-[120px]"
                />
                <Image
                    src="/photos/schools/tech/youtubGradientRight2.svg"
                    alt=""
                    width={443}
                    height={923}
                    className="absolute top-[55%] right-[-60px] -translate-y-1/2"
                />
            </div>

            {/* Header */}
            <div className="z-10 flex flex-col items-center gap-4 text-center px-6">
                <h2 className="font-outfit font-normal text-[clamp(28px,5vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] max-w-[1440px]">
                    Insights We Share on YouTube
                </h2>
                <p className="font-outfit font-normal text-[clamp(14px,2vw,24px)] leading-[140%] tracking-[-0.2px] text-[#A7A7A7] max-w-[1029px]">
                    Our YouTube content reflects ongoing lessons from work in progress, evolving trends, experiments, and outcomes.
                </p>
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
                    if (offset !== 0) {
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
                            className={`absolute overflow-hidden ${isCenter ? 'cursor-default z-[2]' : 'cursor-pointer z-[1]'} ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
                            style={{
                                width: `${cardW}px`,
                                height: `${cardH}px`,
                                borderRadius: isCenter ? "23.57px" : "19.64px",
                                background: isCenter
                                    ? `linear-gradient(#111111, #111111) padding-box, linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%) border-box`
                                    : "transparent",
                                border: isCenter ? "1.07px solid transparent" : "0.89px solid rgba(255,255,255,0.15)",
                                boxShadow: isCenter
                                    ? "0px 0px 60px rgba(255, 86, 0, 0.15), 0px 0px 20px rgba(105, 74, 255, 0.1)"
                                    : "none",
                                transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.96})`,
                                opacity: isCenter ? 1 : isVisible ? 0.55 : 0,
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
            <div className="z-10 flex gap-4">
                <button
                    onClick={prev}
                    aria-label="Previous"
                    className="w-[33.48px] h-[33.48px] rounded-full border-[0.72px] border-[#FFFFFF] flex items-center justify-center bg-[#000000] shrink-0 rotate-90 cursor-pointer transition-opacity duration-200 hover:!opacity-100 opacity-80"
                >
                    <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="prev" width={12} height={12} className="brightness-0 invert" />
                </button>
                <button
                    onClick={next}
                    aria-label="Next"
                    className="w-[33.48px] h-[33.48px] rounded-full border-[0.72px] border-[#FFFFFF] flex items-center justify-center bg-[#000000] shrink-0 -rotate-90 cursor-pointer transition-opacity duration-200 hover:!opacity-80"
                >
                    <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="next" width={12} height={12} className="brightness-0 invert" />
                </button>
            </div>
        </section>
    );
}
