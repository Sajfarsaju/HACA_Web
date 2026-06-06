"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";

type Thumbnail = { src: string; alt: string; youtubeId?: string };

const STATIC_THUMBNAILS: Thumbnail[] = [
    { src: "/photos/schools/tech/Yutub1.webp",            alt: "YouTube Thumbnail 1" },
    { src: "/photos/schools/tech/YutubDataThumbnail.webp", alt: "YouTube Data Thumbnail" },
    { src: "/photos/schools/tech/Yutub3.webp",            alt: "YouTube Thumbnail 3" },
    { src: "/photos/schools/tech/Yutub1.webp",            alt: "YouTube Thumbnail 4" },
    { src: "/photos/schools/tech/YutubDataThumbnail.webp", alt: "YouTube Data Thumbnail 5" },
    { src: "/photos/schools/tech/Yutub3.webp",            alt: "YouTube Thumbnail 6" },
];

function getYouTubeId(url: string): string | null {
    const patterns = [
        /[?&]v=([^&\s]+)/,
        /youtu\.be\/([^?&\s]+)/,
        /embed\/([^?&\s]+)/,
        /shorts\/([^?&\s]+)/,
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return null;
}

function getCardSizesBase(width: number) {
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

export type TechYoutubeCarouselProps = {
    variant?: "default" | "seo";
    showSideGradients?: boolean;
    autoAdvanceMs?: number;
    /** Edge-to-edge stage (no horizontal inset); use overflow-visible for peeks. */
    fullWidthStage?: boolean;
    className?: string;
};

function getCardSizes(width: number, fullWidthStage: boolean) {
    if (fullWidthStage && width < 360) {
        const centerW = width;
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

    if (fullWidthStage && width < 480) {
        const centerW = Math.min(285.71429443359375, width * 0.78);
        const centerH = centerW * (175.82418823242188 / 285.71429443359375);
        const sideH = centerH * (146.52015686035156 / 175.82418823242188);
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

    if (fullWidthStage && width < 768) {
        const centerW = Math.min(400, width * 0.82);
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

    if (fullWidthStage && width < 1024) {
        const centerW = Math.min(520, width * 0.62);
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

    return getCardSizesBase(width);
}

export function TechYoutubeCarousel({
    variant = "default",
    showSideGradients = true,
    autoAdvanceMs = 3000,
    fullWidthStage = false,
    className = "",
}: TechYoutubeCarouselProps) {
    const stageLabelId = useId();
    const [thumbnails, setThumbnails] = useState<Thumbnail[]>(STATIC_THUMBNAILS);
    const [playingIdx, setPlayingIdx] = useState<number | null>(null);

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/founder-videos?category=tech-school`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { videos?: { youtubeUrl: string }[] } | null) => {
                if (data?.videos && data.videos.length > 0) {
                    const fetched: Thumbnail[] = data.videos.map((v, i) => {
                        const id = getYouTubeId(v.youtubeUrl);
                        return {
                            src: id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : STATIC_THUMBNAILS[i % STATIC_THUMBNAILS.length].src,
                            alt: `Tech School YouTube video ${i + 1}`,
                            youtubeId: id ?? undefined,
                        };
                    });
                    setThumbnails(fetched);
                }
            })
            .catch(() => {});
    }, []);

    const [active, setActive] = useState(1);
    const [isHoveringStage, setIsHoveringStage] = useState(false);
    const [windowWidth, setWindowWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1280,
    );

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const total = thumbnails.length;

    // Clear playing when carousel advances
    useEffect(() => { setPlayingIdx(null); }, [active]);

    useEffect(() => {
        if (isHoveringStage) return;
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const timer = setInterval(() => {
            setActive((i) => (i + 1) % total);
        }, autoAdvanceMs);
        return () => clearInterval(timer);
    }, [total, isHoveringStage, autoAdvanceMs]);

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
    } = getCardSizes(windowWidth, fullWidthStage);

    return (
        <div
            className={`relative w-full overflow-visible ${fullWidthStage ? "max-w-[100vw]" : ""} ${className}`}
        >
            {showSideGradients ? (
                <div
                    className="pointer-events-none absolute inset-x-0 top-[120px] bottom-[60px] z-0 lg:top-[200px] lg:bottom-[100px]"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                    }}
                    aria-hidden
                >
                    <div className="absolute -left-[80px] top-1/2 h-[400px] w-[250px] -translate-y-1/2 opacity-100 mix-blend-screen md:left-0 md:h-[600px] md:w-[400px] lg:h-[700px] lg:w-[500px]">
                        <Image
                            src="/photos/schools/tech/Group 50.svg"
                            alt="" aria-hidden="true"
                            fill
                            className="object-fill brightness-100 saturate-[1.2]"
                        />
                    </div>
                    <div className="absolute -right-[80px] top-1/2 h-[400px] w-[250px] -translate-y-1/2 opacity-100 mix-blend-screen md:right-0 md:h-[600px] md:w-[400px] lg:h-[700px] lg:w-[500px]">
                        <Image
                            src="/photos/schools/tech/Group 49.svg"
                            alt="" aria-hidden="true"
                            fill
                            className="object-fill brightness-100 saturate-[1.2]"
                        />
                    </div>
                </div>
            ) : null}

            <div
                className={`relative z-10 flex w-full items-center justify-center ${fullWidthStage ? "overflow-visible" : "overflow-hidden"}`}
                style={{ height: `${centerH + 40}px` }}
                role="group"
                aria-roledescription="carousel"
                aria-labelledby={stageLabelId}
                onMouseEnter={() => setIsHoveringStage(true)}
                onMouseLeave={() => setIsHoveringStage(false)}
                onFocusCapture={() => setIsHoveringStage(true)}
                onBlurCapture={() => setIsHoveringStage(false)}
            >
                <p id={stageLabelId} className="sr-only">
                    Learner video highlights carousel. Use side previews or wait for slides to advance
                    automatically.
                </p>

                {thumbnails.map((thumb, i) => {
                    const offset = getOffset(i, active, total);
                    const isCenter = offset === 0;
                    const isVisible = showSide ? Math.abs(offset) <= 1 : isCenter;
                    const cardW = isCenter ? centerW : sideW;
                    const cardH = isCenter ? centerH : sideH;
                    const isPlaying = isCenter && playingIdx === i;

                    let translateX = 0;
                    if (offset !== 0 && showSide) {
                        const centerHalf = centerW / 2;
                        const sideHalf = sideW / 2;
                        translateX =
                            offset > 0
                                ? centerHalf + gap + sideHalf + (offset - 1) * (sideW + gap)
                                : -(centerHalf + gap + sideHalf) + (offset + 1) * (sideW + gap);
                    }

                    return (
                        <div
                            key={`${thumb.src}-${i}`}
                            onClick={() => {
                                if (offset === -1) { prev(); return; }
                                if (offset === 1)  { next(); return; }
                                if (isCenter && thumb.youtubeId) {
                                    setPlayingIdx(isPlaying ? null : i);
                                }
                            }}
                            className={`absolute overflow-hidden ${isCenter ? (thumb.youtubeId ? "z-[2] cursor-pointer" : "z-[2] cursor-default") : "z-[1] cursor-pointer"} ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
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
                                transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.96})`,
                                opacity: isVisible ? 1 : 0,
                                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease",
                            }}
                        >
                            {isPlaying && thumb.youtubeId ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${thumb.youtubeId}?autoplay=1&rel=0`}
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full border-0"
                                />
                            ) : (
                                <>
                                    <Image src={thumb.src} alt={thumb.alt} fill className="object-fill" unoptimized={thumb.src.startsWith("https://img.youtube.com")} />
                                    {isCenter ? (
                                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 hover:opacity-100">
                                            <div className="relative z-10 flex h-[78px] w-[94px] cursor-pointer items-center justify-center transition-transform duration-300 ease-in-out hover:scale-[1.08] max-md:h-[60px] max-md:w-[67px] max-[480px]:h-[48px] max-[480px]:w-[48px]">
                                                <Image src="/photos/Tech/gridicons_play copy.svg" alt="" width={94} height={78} aria-hidden />
                                                <div className="relative left-[8px] flex h-[78px] w-[78px] items-center justify-center max-md:left-[5px] max-md:h-[53px] max-md:w-[53px] max-[480px]:left-[3px] max-[480px]:h-[40px] max-[480px]:w-[40px]">
                                                    <Image src="/photos/Tech/Vector (1).svg" alt="Play video" width={78} height={78} className="h-full w-full object-contain drop-shadow-[0_4px_24px_rgba(105,74,255,0.55)]" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
