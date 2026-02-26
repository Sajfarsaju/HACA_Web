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
            style={{
                backgroundColor: "transparent",
                minHeight: windowWidth < 640 ? "auto" : "828px",
                padding: windowWidth < 640 ? "60px 0" : "100px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: windowWidth < 640 ? "36px" : "60px",
                width: "100%",
            }}
            className="w-full relative overflow-hidden"
        >
            {/* Left Gradient Decorations */}
            <div style={{ position: "absolute", top: "55%", left: 0, transform: "translateY(-50%)", zIndex: 0, pointerEvents: "none" }}>
                <Image
                    src="/photos/schools/tech/youtubGradientLeft1.svg"
                    alt=""
                    width={658}
                    height={1062}
                    style={{ display: "block", marginLeft: "-120px" }}
                />
                <Image
                    src="/photos/schools/tech/youtubGradientLeft2.svg"
                    alt=""
                    width={443}
                    height={923}
                    style={{ position: "absolute", top: "55%", left: "-60px", transform: "translateY(-50%)" }}
                />
            </div>

            {/* Right Gradient Decorations */}
            <div style={{ position: "absolute", top: "55%", right: 0, transform: "translateY(-50%)", zIndex: 0, pointerEvents: "none" }}>
                <Image
                    src="/photos/schools/tech/youtubGradientRight1.svg"
                    alt=""
                    width={658}
                    height={1062}
                    style={{ display: "block", marginRight: "-120px" }}
                />
                <Image
                    src="/photos/schools/tech/youtubGradientRight2.svg"
                    alt=""
                    width={443}
                    height={923}
                    style={{ position: "absolute", top: "55%", right: "-60px", transform: "translateY(-50%)" }}
                />
            </div>

            {/* Header */}
            <div style={{ zIndex: 10 }} className="flex flex-col items-center gap-4 text-center px-6">
                <h2
                    style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(28px, 5vw, 60px)",
                        lineHeight: "1.1",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",
                        maxWidth: "1440px",
                    }}
                >
                    Insights We Share on YouTube
                </h2>
                <p
                    style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2vw, 24px)",
                        lineHeight: "140%",
                        letterSpacing: "-0.2px",
                        color: "#A7A7A7",
                        maxWidth: "1029px",
                    }}
                >
                    Our YouTube content reflects ongoing lessons from work in progress, evolving trends, experiments, and outcomes.
                </p>
            </div>

            {/* Carousel Stage */}
            <div
                style={{
                    zIndex: 10,
                    width: "100%",
                    height: `${centerH + 40}px`,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
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
                            style={{
                                position: "absolute",
                                width: `${cardW}px`,
                                height: `${cardH}px`,
                                borderRadius: isCenter ? "23.57px" : "19.64px",
                                overflow: "hidden",
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
                                cursor: isCenter ? "default" : "pointer",
                                zIndex: isCenter ? 2 : 1,
                                pointerEvents: isVisible ? "auto" : "none",
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
            <div style={{ zIndex: 10 }} className="flex gap-4">
                <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                        width: "33.48px",
                        height: "33.48px",
                        borderRadius: "50%",
                        border: "0.72px solid #FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#000000",
                        flexShrink: 0,
                        transform: "rotate(90deg)",
                        cursor: "pointer",
                        transition: "opacity 0.2s ease",
                    }}
                    className="hover:!opacity-100"
                >
                    <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="prev" width={12} height={12} className="brightness-0 invert" />
                </button>
                <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                        width: "33.48px",
                        height: "33.48px",
                        borderRadius: "50%",
                        border: "0.72px solid #FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#000000",
                        flexShrink: 0,
                        transform: "rotate(-90deg)",
                        cursor: "pointer",
                        transition: "opacity 0.2s ease",
                    }}
                    className="hover:!opacity-80"
                >
                    <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="next" width={12} height={12} className="brightness-0 invert" />
                </button>
            </div>
        </section>
    );
}
