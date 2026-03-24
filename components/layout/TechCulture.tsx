"use client";

import Image from "next/image";
import React from "react";

// ── Bento Cell ─────────────────────────────────────────────────────────
interface BentoCellProps {
    label: string;
    imgSrc?: string;
    style?: React.CSSProperties;
    className?: string;
}

// Purple / dark theme only — no orange in gallery borders
const GRADIENT_BORDER = `linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
    linear-gradient(90deg, rgba(105,74,255,0.55) 0%, rgba(132,0,255,0.45) 50%, rgba(60,30,120,0.5) 100%)`;

function BentoCell({ label, imgSrc, style, className = "" }: BentoCellProps) {
    return (
        <div
            className={`relative box-border ${className}`}
            style={style}
        >
            {/* Gradient border ring — mask cuts out center, only border shows */}
            <div
                className="absolute inset-0 rounded-[inherit] p-[0.91px] z-[2] pointer-events-none"
                style={{
                    background: GRADIENT_BORDER,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />
            {/* Content — fills full cell, gives Image fill a definite bounding box */}
            <div className="absolute inset-0 rounded-[inherit] overflow-hidden z-[1] flex items-center justify-center">
                {imgSrc ? (
                    <Image src={imgSrc} alt={`Culture photo ${label}`} fill className="object-cover" />
                ) : (
                    <span className="font-outfit text-white/20 text-[11px] tracking-[0.1em] uppercase">
                        {label}
                    </span>
                )}
            </div>
        </div>
    );
}

// ── TechCulture Section ─────────────────────────────────────────────────
export function TechCulture() {
    return (
        <section className="relative z-10 w-full flex flex-col items-center min-h-auto">
            {/* Inner content container — responsive padding & gap */}
            <div className="w-full flex flex-col items-center px-4 sm:px-8 lg:px-[60px] py-12 sm:py-16 lg:py-[80px] gap-8 sm:gap-10 lg:gap-[60px]">

                {/* Title */}
                <h2 className="text-center w-full max-w-[684px] font-outfit font-normal text-[clamp(26px,4.5vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF]">
                    This Is What It Feels Like to Belong Here
                </h2>

                {/* ── DESKTOP (≥ lg) — 3-column proportional flex grid ── */}
                <div className="hidden md:flex w-full max-w-[1319px] gap-[10px] items-start overflow-hidden">
                    {/* Col 1 (412/1319 ratio) */}
                    <div className="flex-[412_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <BentoCell label="Culture Photo A" imgSrc="/photos/schools/tech/cultureGrid1.png" className="w-full h-[242px] rounded-[10px]" />
                        <BentoCell label="Culture Photo B" imgSrc="/photos/schools/tech/cultureGrid2.png" className="w-full h-[515px] rounded-[19.97px]" />
                    </div>

                    {/* Col 2 (433/1319 ratio) */}
                    <div className="flex-[433_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <BentoCell label="Culture Photo C" imgSrc="/photos/schools/tech/cultureGrid3.png" className="w-full h-[242px] rounded-[10px]" />
                        <div className="flex gap-[10px] w-full">
                            <BentoCell label="Culture Photo D" className="flex-1 h-[211px] rounded-[19.97px]" />
                            <BentoCell label="Culture Photo E" className="flex-1 h-[211px] rounded-[19.97px]" />
                        </div>
                        <BentoCell label="Culture Photo F" className="w-full h-[294px] rounded-[19.97px]" />
                    </div>

                    {/* Col 3 (474/1319 ratio) */}
                    <div className="flex-[474_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <BentoCell label="Culture Photo G" imgSrc="/photos/schools/tech/cultureGrid7.png" className="w-full h-[498px] rounded-[19.97px]" />
                        <div className="flex gap-[10px] w-full">
                            <BentoCell label="Culture Photo H" className="flex-1 h-[259px] rounded-[19.97px]" />
                            <BentoCell label="Culture Photo I" className="flex-1 h-[259px] rounded-[19.97px]" />
                        </div>
                    </div>
                </div>

                {/* ── TABLET (sm–lg) — 2-column grid ── */}
                <div className="hidden sm:flex md:hidden w-full gap-[10px] items-start">
                    {/* Left column */}
                    <div className="flex-1 flex flex-col gap-[10px] min-w-0">
                        <BentoCell label="Culture Photo A" imgSrc="/photos/schools/tech/cultureGrid1.png" className="w-full h-[160px] rounded-[10px]" />
                        <BentoCell label="Culture Photo B" imgSrc="/photos/schools/tech/cultureGrid2.png" className="w-full h-[280px] rounded-[14px]" />
                        <BentoCell label="Culture Photo C" imgSrc="/photos/schools/tech/cultureGrid3.png" className="w-full h-[160px] rounded-[10px]" />
                        <div className="flex gap-[10px] w-full">
                            <BentoCell label="Photo D" className="flex-1 h-[130px] rounded-[14px]" />
                            <BentoCell label="Photo E" className="flex-1 h-[130px] rounded-[14px]" />
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="flex-1 flex flex-col gap-[10px] min-w-0">
                        <BentoCell label="Culture Photo G" imgSrc="/photos/schools/tech/cultureGrid7.png" className="w-full h-[300px] rounded-[14px]" />
                        <BentoCell label="Culture Photo F" className="w-full h-[170px] rounded-[14px]" />
                        <div className="flex gap-[10px] w-full">
                            <BentoCell label="Photo H" className="flex-1 h-[140px] rounded-[14px]" />
                            <BentoCell label="Photo I" className="flex-1 h-[140px] rounded-[14px]" />
                        </div>
                    </div>
                </div>

                {/* ── MOBILE (< sm) — single column ── */}
                <div className="flex flex-col sm:hidden w-full gap-[10px]">
                    {[
                        { label: "Culture Photo A", imgSrc: "/photos/schools/tech/cultureGrid1.png", h: 180, r: "10px" },
                        { label: "Culture Photo B", imgSrc: "/photos/schools/tech/cultureGrid2.png", h: 200, r: "14px" },
                        { label: "Culture Photo C", imgSrc: "/photos/schools/tech/cultureGrid3.png", h: 180, r: "10px" },
                        { label: "Culture Photo G", imgSrc: "/photos/schools/tech/cultureGrid7.png", h: 220, r: "14px" },
                        { label: "Culture Photo F", imgSrc: undefined, h: 180, r: "14px" },
                    ].map(({ label, imgSrc, h, r }) => (
                        <BentoCell key={label} label={label} imgSrc={imgSrc} style={{ height: `${h}px`, borderRadius: r }} className="w-full" />
                    ))}
                    {/* D & E side by side */}
                    <div className="flex gap-[10px] w-full">
                        <BentoCell label="Photo D" className="flex-1 h-[140px] rounded-[14px]" />
                        <BentoCell label="Photo E" className="flex-1 h-[140px] rounded-[14px]" />
                    </div>
                    {/* H & I side by side */}
                    <div className="flex gap-[10px] w-full">
                        <BentoCell label="Photo H" className="flex-1 h-[140px] rounded-[14px]" />
                        <BentoCell label="Photo I" className="flex-1 h-[140px] rounded-[14px]" />
                    </div>
                </div>

            </div>
        </section>
    );
}
