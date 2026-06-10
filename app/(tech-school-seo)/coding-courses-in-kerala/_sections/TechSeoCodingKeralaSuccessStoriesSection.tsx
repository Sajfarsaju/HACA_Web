"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const PLACEMENTS = [
    "/photos/schools/tech/placements/IMG_20260205_135110_480.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135132_304.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135156_730.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135237_626.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135304_434.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135329_601.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135354_480.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135421_019.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135441_651.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135511_739.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135540_651.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135602_603.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135623_589.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135657_154.jpg",
] as const;

const SUCCESS_STORY_SLIDE_COUNT = PLACEMENTS.length;

type CardSizeSpec = {
    centerW: number;
    centerH: number;
    sideW: number;
    sideH: number;
    centerRadius: number;
    sideRadius: number;
    centerBorder: number;
    sideBorder: number;
    gap: number;
    showSide: boolean;
};

function getCardSizes(width: number): CardSizeSpec {
    if (width >= 1024) {
        return {
            centerW: 415.70233154296875,
            centerH: 480.58074951171875,
            sideW: 348.0841979980469,
            sideH: 402.4094543457031,
            centerRadius: 24.03,
            sideRadius: 20.12,
            centerBorder: 1.2,
            sideBorder: 1.01,
            gap: 30.3,
            showSide: true,
        };
    }

    if (width < 360) {
        const centerW = width - 48;
        const centerH = centerW * (319.9342346191406 / 276.74310302734375);
        return {
            centerW,
            centerH,
            sideW: 0,
            sideH: 0,
            centerRadius: 16,
            sideRadius: 13.39,
            centerBorder: 0.8,
            sideBorder: 0.67,
            gap: 0,
            showSide: false,
        };
    }

    return {
        centerW: 276.74310302734375,
        centerH: 319.9342346191406,
        sideW: 231.7280731201172,
        sideH: 267.8937072753906,
        centerRadius: 16,
        sideRadius: 13.39,
        centerBorder: 0.8,
        sideBorder: 0.67,
        gap: 16,
        showSide: true,
    };
}

function getOffset(index: number, active: number, total: number) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

function SuccessStoryCard({
    src,
    borderRadius,
    borderWidth,
    isCenter,
}: {
    src: string;
    borderRadius: number;
    borderWidth: number;
    isCenter: boolean;
}) {
    return (
        <div
            className="relative h-full w-full overflow-hidden border-solid border-white/25"
            style={{
                borderRadius: `${borderRadius}px`,
                borderWidth: `${borderWidth}px`,
            }}
        >
            <Image
                src={src}
                fill
                alt="Placement story"
                className="object-cover"
                sizes={isCenter ? "(max-width: 768px) 80vw, 416px" : "(max-width: 768px) 40vw, 348px"}
            />
        </div>
    );
}

function SuccessStoriesCarousel() {
    const [active, setActive] = useState(0);
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

    const total = SUCCESS_STORY_SLIDE_COUNT;

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((i) => (i + 1) % total);
        }, 3000);
        return () => clearInterval(timer);
    }, [active, total]);

    const sizes = getCardSizes(windowWidth);
    const {
        centerW,
        centerH,
        sideW,
        sideH,
        centerRadius,
        sideRadius,
        centerBorder,
        sideBorder,
        gap,
        showSide,
    } = sizes;

    return (
        <div
            className="relative flex w-full items-center justify-center overflow-visible"
            style={{ height: `${centerH + 40}px` }}
            aria-roledescription="carousel"
            aria-label="Student success stories"
        >
            {Array.from({ length: total }, (_, i) => {
                const offset = getOffset(i, active, total);
                const isCenter = offset === 0;
                const isVisible = showSide ? Math.abs(offset) <= 1 : isCenter;

                const cardW = isCenter ? centerW : sideW;
                const cardH = isCenter ? centerH : sideH;
                const radius = isCenter ? centerRadius : sideRadius;
                const border = isCenter ? centerBorder : sideBorder;

                let translateX = 0;
                if (offset !== 0) {
                    const centerHalf = centerW / 2;
                    const sideHalf = sideW / 2;
                    translateX =
                        offset > 0
                            ? centerHalf + gap + sideHalf + (offset - 1) * (sideW + gap)
                            : -(centerHalf + gap + sideHalf) + (offset + 1) * (sideW + gap);
                }

                return (
                    <div
                        key={i}
                        className={`absolute cursor-default overflow-visible ${isCenter ? "z-[2]" : "z-[1]"} ${
                            isVisible ? "pointer-events-auto" : "pointer-events-none"
                        }`}
                        style={{
                            width: `${cardW}px`,
                            height: `${cardH}px`,
                            transform: `translateX(${translateX}px)`,
                            opacity: isCenter ? 1 : isVisible ? 0.55 : 0,
                            transition:
                                "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease",
                        }}
                        onClick={() => setActive(i)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActive(i);
                            }
                        }}
                        role="button"
                        tabIndex={isVisible ? 0 : -1}
                        aria-current={isCenter ? "true" : undefined}
                    >
                        <SuccessStoryCard src={PLACEMENTS[i % PLACEMENTS.length]} borderRadius={radius} borderWidth={border} isCenter={isCenter} />
                    </div>
                );
            })}
        </div>
    );
}

export function TechSeoCodingKeralaSuccessStoriesSection() {
    return (
        <section
            className="relative mx-auto w-full max-w-[1440px] overflow-visible bg-transparent"
            aria-labelledby="coding-kerala-success-stories-heading"
        >
            <div className="relative z-10 mx-auto flex w-full max-w-[1307px] flex-col items-center gap-[30px] px-4 py-5 lg:gap-[60px] lg:px-0 lg:py-0">
                <h2
                    id="coding-kerala-success-stories-heading"
                    className="m-0 w-full text-center font-manrope text-[26px] font-semibold leading-[110%] text-white lg:text-[40px] lg:leading-[120%]"
                >
                    Meet Our Proud Placements
                </h2>

                <SuccessStoriesCarousel />
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
