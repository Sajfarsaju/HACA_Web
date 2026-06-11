"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getPublicBackendBase } from "@/lib/placements-api";

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
            {/* Content — no flex centering: it can leave gaps with `fill` images; cover must fill the box */}
            <div className="absolute inset-0 rounded-[inherit] overflow-hidden z-[1]">
                {imgSrc ? (
                    <Image
                        src={imgSrc}
                        alt={`Culture photo ${label}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover object-center"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                ) : (
                    <span className="font-outfit text-white/20 text-[11px] tracking-[0.1em] uppercase">
                        {label}
                    </span>
                )}
            </div>
        </div>
    );
}

// Static fallbacks for slots that already have local photos
const STATIC_FALLBACK: Record<number, string> = {
    0: "/photos/schools/tech/cultureGrid1.webp",
    1: "/photos/schools/tech/cultureGrid2.webp",
    2: "/photos/schools/tech/cultureGrid3.webp",
    6: "/photos/schools/tech/cultureGrid7.webp",
};

// ── TechCulture Section ─────────────────────────────────────────────────
export function TechCulture() {
    const reduceMotion = useReducedMotion();
    const [photoMap, setPhotoMap] = useState<Map<number, string>>(new Map());

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/culture-photos?school=${encodeURIComponent("Tech School")}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { photos?: { slotIndex: number; imageUrl: string }[] } | null) => {
                if (data?.photos && data.photos.length > 0) {
                    const map = new Map<number, string>();
                    for (const p of data.photos) map.set(p.slotIndex, p.imageUrl);
                    setPhotoMap(map);
                }
            })
            .catch(() => {});
    }, []);

    // API photo takes priority; fall back to static local file if available
    const src = (slot: number) => photoMap.get(slot) ?? STATIC_FALLBACK[slot];

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: reduceMotion ? 0 : 0.05,
            },
        },
    } as const;

    const item = {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
        },
    } as const;

    return (
        <section className="relative z-10 w-full flex flex-col items-center min-h-auto">
            {/* Inner content container — responsive padding & gap */}
            <div className="w-full flex flex-col items-center px-4 sm:px-8 lg:px-[60px] py-12 sm:py-16 lg:py-[80px] gap-8 sm:gap-10 lg:gap-[60px]">

                {/* Title */}
                <h2 className="text-center w-full max-w-[684px] font-outfit font-normal text-[clamp(26px,4.5vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF]">
                    This Is What It Feels Like to Belong Here
                </h2>

                {/* ── DESKTOP (≥ lg) — 3-column proportional flex grid ── */}
                <motion.div
                    className="hidden md:flex w-full max-w-[1319px] gap-[10px] items-start overflow-hidden"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
                >
                    {/* Col 1 (412/1319 ratio) */}
                    <div className="flex-[412_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo A" imgSrc={src(0)} className="w-full h-[242px] rounded-[10px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo B" imgSrc={src(1)} className="w-full h-[515px] rounded-[19.97px]" />
                        </motion.div>
                    </div>

                    {/* Col 2 (433/1319 ratio) */}
                    <div className="flex-[433_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo C" imgSrc={src(2)} className="w-full h-[242px] rounded-[10px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo D" imgSrc={src(3)}className="w-full h-[211px] rounded-[19.97px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo E" imgSrc={src(4)}className="w-full h-[211px] rounded-[19.97px]" />
                            </motion.div>
                        </div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo F" imgSrc={src(5)}className="w-full h-[294px] rounded-[19.97px]" />
                        </motion.div>
                    </div>

                    {/* Col 3 (474/1319 ratio) */}
                    <div className="flex-[474_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo G" imgSrc={src(6)} className="w-full h-[498px] rounded-[19.97px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo H" imgSrc={src(7)}className="w-full h-[259px] rounded-[19.97px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo I" imgSrc={src(8)}className="w-full h-[259px] rounded-[19.97px]" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── TABLET (sm–lg) — 2-column grid ── */}
                <motion.div
                    className="hidden sm:flex md:hidden w-full gap-[10px] items-start"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
                >
                    {/* Left column */}
                    <div className="flex-1 flex flex-col gap-[10px] min-w-0">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo A" imgSrc={src(0)} className="w-full h-[160px] rounded-[10px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo B" imgSrc={src(1)} className="w-full h-[280px] rounded-[14px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo C" imgSrc={src(2)} className="w-full h-[160px] rounded-[10px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo D" imgSrc={src(3)}className="w-full h-[130px] rounded-[14px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo E" imgSrc={src(4)}className="w-full h-[130px] rounded-[14px]" />
                            </motion.div>
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="flex-1 flex flex-col gap-[10px] min-w-0">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo G" imgSrc={src(6)} className="w-full h-[300px] rounded-[14px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo F" imgSrc={src(5)}className="w-full h-[170px] rounded-[14px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo H" imgSrc={src(7)}className="w-full h-[140px] rounded-[14px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo I" imgSrc={src(8)}className="w-full h-[140px] rounded-[14px]" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── MOBILE (< sm) — Figma 4-row layout, 343px reference, fully responsive ── */}
                <motion.div
                    className="flex flex-col sm:hidden w-full max-w-[343px] mx-auto gap-[6px]"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.14, margin: "0px 0px 20% 0px" }}
                >
                    {/* Row 1 — img1: 200px, img2: 137px, height: 125px */}
                    <motion.div variants={item} className="flex gap-[6px] w-full" style={{ aspectRatio: "343/125" }}>
                        <BentoCell
                            label="Culture Photo A"
                            imgSrc={src(0)}
                            style={{ flex: "200 0 0%", borderRadius: "6.55px" }}
                        />
                        <BentoCell
                            label="Culture Photo B"
                            imgSrc={src(1)}
                            style={{ flex: "137 0 0%", borderRadius: "10.32px" }}
                        />
                    </motion.div>

                    {/* Row 2 — img1: 174px, img2: 163px, height: 170px */}
                    <motion.div variants={item} className="flex gap-[6px] w-full" style={{ aspectRatio: "343/170" }}>
                        <BentoCell
                            label="Culture Photo C"
                            imgSrc={src(2)}
                            style={{ flex: "174 0 0%", borderRadius: "6.8px" }}
                        />
                        <BentoCell
                            label="Culture Photo G"
                            imgSrc={src(6)}
                            style={{ flex: "163 0 0%", borderRadius: "9.83px" }}
                        />
                    </motion.div>

                    {/* Row 3 — img1: 138px, img2: 199px, height: 140px */}
                    <motion.div variants={item} className="flex gap-[6px] w-full" style={{ aspectRatio: "343/140" }}>
                        <BentoCell
                            label="Culture Photo D"
                            imgSrc={src(3)}
                            style={{ flex: "138 0 0%", borderRadius: "9.83px" }}
                        />
                        <BentoCell
                            label="Culture Photo E"
                            imgSrc={src(4)}
                            style={{ flex: "199 0 0%", borderRadius: "6.69px" }}
                        />
                    </motion.div>

                    {/* Row 4 — img1: 168px, img2: 169px, height: 130px */}
                    <motion.div variants={item} className="flex gap-[6px] w-full" style={{ aspectRatio: "343/130" }}>
                        <BentoCell
                            label="Culture Photo H"
                            imgSrc={src(7)}
                            style={{ flex: "168 0 0%", borderRadius: "5.93px" }}
                        />
                        <BentoCell
                            label="Culture Photo I"
                            imgSrc={src(8)}
                            style={{ flex: "169 0 0%", borderRadius: "5.93px" }}
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
