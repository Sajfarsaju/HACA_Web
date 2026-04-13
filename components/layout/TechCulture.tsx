"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

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

// ── TechCulture Section ─────────────────────────────────────────────────
export function TechCulture() {
    const reduceMotion = useReducedMotion();

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
            transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
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
                            <BentoCell label="Culture Photo A" imgSrc="/photos/schools/tech/cultureGrid1.png" className="w-full h-[242px] rounded-[10px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo B" imgSrc="/photos/schools/tech/cultureGrid2.png" className="w-full h-[515px] rounded-[19.97px]" />
                        </motion.div>
                    </div>

                    {/* Col 2 (433/1319 ratio) */}
                    <div className="flex-[433_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo C" imgSrc="/photos/schools/tech/cultureGrid3.png" className="w-full h-[242px] rounded-[10px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo D" className="w-full h-[211px] rounded-[19.97px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo E" className="w-full h-[211px] rounded-[19.97px]" />
                            </motion.div>
                        </div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo F" className="w-full h-[294px] rounded-[19.97px]" />
                        </motion.div>
                    </div>

                    {/* Col 3 (474/1319 ratio) */}
                    <div className="flex-[474_1_0%] min-w-0 flex flex-col gap-[10px]">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo G" imgSrc="/photos/schools/tech/cultureGrid7.png" className="w-full h-[498px] rounded-[19.97px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo H" className="w-full h-[259px] rounded-[19.97px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Culture Photo I" className="w-full h-[259px] rounded-[19.97px]" />
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
                            <BentoCell label="Culture Photo A" imgSrc="/photos/schools/tech/cultureGrid1.png" className="w-full h-[160px] rounded-[10px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo B" imgSrc="/photos/schools/tech/cultureGrid2.png" className="w-full h-[280px] rounded-[14px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo C" imgSrc="/photos/schools/tech/cultureGrid3.png" className="w-full h-[160px] rounded-[10px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo D" className="w-full h-[130px] rounded-[14px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo E" className="w-full h-[130px] rounded-[14px]" />
                            </motion.div>
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="flex-1 flex flex-col gap-[10px] min-w-0">
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo G" imgSrc="/photos/schools/tech/cultureGrid7.png" className="w-full h-[300px] rounded-[14px]" />
                        </motion.div>
                        <motion.div variants={item}>
                            <BentoCell label="Culture Photo F" className="w-full h-[170px] rounded-[14px]" />
                        </motion.div>
                        <div className="flex gap-[10px] w-full">
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo H" className="w-full h-[140px] rounded-[14px]" />
                            </motion.div>
                            <motion.div variants={item} className="flex-1">
                                <BentoCell label="Photo I" className="w-full h-[140px] rounded-[14px]" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── MOBILE (< sm) — single column ── */}
                <motion.div
                    className="flex flex-col sm:hidden w-full gap-[10px]"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.14, margin: "0px 0px 20% 0px" }}
                >
                    {[
                        { label: "Culture Photo A", imgSrc: "/photos/schools/tech/cultureGrid1.png", h: 180, r: "10px" },
                        { label: "Culture Photo B", imgSrc: "/photos/schools/tech/cultureGrid2.png", h: 200, r: "14px" },
                        { label: "Culture Photo C", imgSrc: "/photos/schools/tech/cultureGrid3.png", h: 180, r: "10px" },
                        { label: "Culture Photo G", imgSrc: "/photos/schools/tech/cultureGrid7.png", h: 220, r: "14px" },
                        { label: "Culture Photo F", imgSrc: undefined, h: 180, r: "14px" },
                    ].map(({ label, imgSrc, h, r }) => (
                        <motion.div key={label} variants={item}>
                            <BentoCell label={label} imgSrc={imgSrc} style={{ height: `${h}px`, borderRadius: r }} className="w-full" />
                        </motion.div>
                    ))}
                    {/* D & E side by side */}
                    <div className="flex gap-[10px] w-full">
                        <motion.div variants={item} className="flex-1">
                            <BentoCell label="Photo D" className="w-full h-[140px] rounded-[14px]" />
                        </motion.div>
                        <motion.div variants={item} className="flex-1">
                            <BentoCell label="Photo E" className="w-full h-[140px] rounded-[14px]" />
                        </motion.div>
                    </div>
                    {/* H & I side by side */}
                    <div className="flex gap-[10px] w-full">
                        <motion.div variants={item} className="flex-1">
                            <BentoCell label="Photo H" className="w-full h-[140px] rounded-[14px]" />
                        </motion.div>
                        <motion.div variants={item} className="flex-1">
                            <BentoCell label="Photo I" className="w-full h-[140px] rounded-[14px]" />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
