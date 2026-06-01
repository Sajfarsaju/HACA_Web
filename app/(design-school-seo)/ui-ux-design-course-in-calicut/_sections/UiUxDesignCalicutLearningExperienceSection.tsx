"use client";

import Image from "next/image";
import { useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const FALLBACK_GRADIENT = "linear-gradient(135deg, #E0F4FF 0%, #C4E8FF 100%)";

// Desktop row 1 — grow ratios match varying widths in the design
const ROW1 = [
    { src: "/photos/schools/design/seo/learning-1.webp", grow: 400 },
    { src: "/photos/schools/design/seo/learning-2.webp", grow: 262 },
    { src: "/photos/schools/design/seo/learning-3.webp", grow: 336 },
    { src: "/photos/schools/design/seo/learning-4.webp", grow: 269 },
];

// Desktop row 2
const ROW2 = [
    { src: "/photos/schools/design/seo/learning-5.webp", grow: 323 },
    { src: "/photos/schools/design/seo/learning-6.webp", grow: 262 },
    { src: "/photos/schools/design/seo/learning-7.webp", grow: 302 },
    { src: "/photos/schools/design/seo/learning-8.webp", grow: 380 },
];

// Mobile rows — 2 cols, varying widths
const MOBILE_ROWS = [
    [
        { src: "/photos/schools/design/seo/learning-1.webp", grow: 205 },
        { src: "/photos/schools/design/seo/learning-2.webp", grow: 134 },
    ],
    [
        { src: "/photos/schools/design/seo/learning-3.webp", grow: 166 },
        { src: "/photos/schools/design/seo/learning-4.webp", grow: 174 },
    ],
    [
        { src: "/photos/schools/design/seo/learning-5.webp", grow: 134 },
        { src: "/photos/schools/design/seo/learning-6.webp", grow: 205 },
    ],
    [
        { src: "/photos/schools/design/seo/learning-7.webp", grow: 174 },
        { src: "/photos/schools/design/seo/learning-8.webp", grow: 166 },
    ],
];

function PhotoCard({ src, grow, height }: { src: string; grow: number; height: number }) {
    const [err, setErr] = useState(false);

    return (
        <div
            className="relative min-w-0 overflow-hidden rounded-[10px] lg:rounded-[20px]"
            style={{ flexGrow: grow, height, background: FALLBACK_GRADIENT }}
        >
            {!err && (
                <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    onError={() => setErr(true)}
                />
            )}
        </div>
    );
}

export function UiUxDesignCalicutLearningExperienceSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-[20px] py-[30px] lg:px-[60px] lg:py-[60px]">
                <div className="flex flex-col gap-[30px] lg:gap-[60px]">
                    <h2
                        className="m-0 text-center text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(35px, 3.2vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Learning Experience at Design School
                    </h2>

                    {/* Mobile: 4 rows × 2 cols */}
                    <div className="flex flex-col gap-[10px] lg:hidden">
                        {MOBILE_ROWS.map((row, ri) => (
                            <div key={ri} className="flex w-full gap-[10px]">
                                {row.map((card, ci) => (
                                    <PhotoCard key={ci} src={card.src} grow={card.grow} height={151} />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Desktop: 2 rows × 4 cols */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-[11px]">
                        <div className="flex w-full gap-[11px]">
                            {ROW1.map((card, i) => (
                                <PhotoCard key={i} src={card.src} grow={card.grow} height={295} />
                            ))}
                        </div>
                        <div className="flex w-full gap-[11px]">
                            {ROW2.map((card, i) => (
                                <PhotoCard key={i} src={card.src} grow={card.grow} height={295} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
