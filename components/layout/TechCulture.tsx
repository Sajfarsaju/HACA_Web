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

const GRADIENT_BORDER = `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
    linear-gradient(90deg, rgba(255,86,0,0.68) 0%, rgba(105,74,255,0.68) 100%)`;

function BentoCell({ label, imgSrc, style, className = "" }: BentoCellProps) {
    return (
        <div
            style={{
                position: "relative",
                boxSizing: "border-box",
                ...style,
            }}
        >
            {/* Gradient border ring — mask cuts out center, only border shows */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    padding: "0.91px",
                    background: GRADIENT_BORDER,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            />
            {/* Content — fills full cell, gives Image fill a definite bounding box */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    overflow: "hidden",
                    zIndex: 1,
                }}
                className={`flex items-center justify-center ${className}`}
            >
                {imgSrc ? (
                    <Image src={imgSrc} alt={`Culture photo ${label}`} fill className="object-cover" />
                ) : (
                    <span style={{
                        fontFamily: "var(--font-outfit)",
                        color: "rgba(255,255,255,0.2)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                    }}>
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
        <section
            className="w-full flex flex-col items-center"
            style={{
                minHeight: "auto",
            }}
        >
            {/* Inner content container — responsive padding & gap */}
            <div className="w-full flex flex-col items-center px-4 sm:px-8 lg:px-[60px] py-12 sm:py-16 lg:py-[80px] gap-8 sm:gap-10 lg:gap-[60px]">

                {/* Title */}
                <h2
                    className="text-center w-full"
                    style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(26px, 4.5vw, 60px)",
                        lineHeight: "1.1",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",
                        maxWidth: "684px",
                    }}
                >
                    This Is What It Feels Like to Belong Here
                </h2>

                {/* ── DESKTOP (≥ lg) — 3-column proportional flex grid ── */}
                <div
                    className="hidden md:flex w-full"
                    style={{ maxWidth: "1319px", gap: "10px", alignItems: "flex-start", overflow: "hidden" }}
                >
                    {/* Col 1 (412/1319 ratio) */}
                    <div style={{ flex: "412 1 0%", minWidth: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                        <BentoCell label="Culture Photo A" imgSrc="/photos/schools/tech/cultureGrid1.png" style={{ width: "100%", height: "242px", borderRadius: "10px" }} />
                        <BentoCell label="Culture Photo B" imgSrc="/photos/schools/tech/cultureGrid2.png" style={{ width: "100%", height: "515px", borderRadius: "19.97px" }} />
                    </div>

                    {/* Col 2 (433/1319 ratio) */}
                    <div style={{ flex: "433 1 0%", minWidth: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                        <BentoCell label="Culture Photo C" imgSrc="/photos/schools/tech/cultureGrid3.png" style={{ width: "100%", height: "242px", borderRadius: "10px" }} />
                        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                            <BentoCell label="Culture Photo D" style={{ flex: 1, height: "211px", borderRadius: "19.97px" }} />
                            <BentoCell label="Culture Photo E" style={{ flex: 1, height: "211px", borderRadius: "19.97px" }} />
                        </div>
                        <BentoCell label="Culture Photo F" style={{ width: "100%", height: "294px", borderRadius: "19.97px" }} />
                    </div>

                    {/* Col 3 (474/1319 ratio) */}
                    <div style={{ flex: "474 1 0%", minWidth: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                        <BentoCell label="Culture Photo G" imgSrc="/photos/schools/tech/cultureGrid7.png" style={{ width: "100%", height: "498px", borderRadius: "19.97px" }} />
                        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                            <BentoCell label="Culture Photo H" style={{ flex: 1, height: "259px", borderRadius: "19.97px" }} />
                            <BentoCell label="Culture Photo I" style={{ flex: 1, height: "259px", borderRadius: "19.97px" }} />
                        </div>
                    </div>
                </div>

                {/* ── TABLET (sm–lg) — 2-column grid ── */}
                <div className="hidden sm:flex md:hidden w-full gap-[10px] items-start">
                    {/* Left column */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>
                        <BentoCell label="Culture Photo A" imgSrc="/photos/schools/tech/cultureGrid1.png" style={{ width: "100%", height: "160px", borderRadius: "10px" }} />
                        <BentoCell label="Culture Photo B" imgSrc="/photos/schools/tech/cultureGrid2.png" style={{ width: "100%", height: "280px", borderRadius: "14px" }} />
                        <BentoCell label="Culture Photo C" imgSrc="/photos/schools/tech/cultureGrid3.png" style={{ width: "100%", height: "160px", borderRadius: "10px" }} />
                        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                            <BentoCell label="Photo D" style={{ flex: 1, height: "130px", borderRadius: "14px" }} />
                            <BentoCell label="Photo E" style={{ flex: 1, height: "130px", borderRadius: "14px" }} />
                        </div>
                    </div>
                    {/* Right column */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", minWidth: 0 }}>
                        <BentoCell label="Culture Photo G" imgSrc="/photos/schools/tech/cultureGrid7.png" style={{ width: "100%", height: "300px", borderRadius: "14px" }} />
                        <BentoCell label="Culture Photo F" style={{ width: "100%", height: "170px", borderRadius: "14px" }} />
                        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                            <BentoCell label="Photo H" style={{ flex: 1, height: "140px", borderRadius: "14px" }} />
                            <BentoCell label="Photo I" style={{ flex: 1, height: "140px", borderRadius: "14px" }} />
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
                        <BentoCell key={label} label={label} imgSrc={imgSrc} style={{ width: "100%", height: `${h}px`, borderRadius: r }} />
                    ))}
                    {/* D & E side by side */}
                    <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                        <BentoCell label="Photo D" style={{ flex: 1, height: "140px", borderRadius: "14px" }} />
                        <BentoCell label="Photo E" style={{ flex: 1, height: "140px", borderRadius: "14px" }} />
                    </div>
                    {/* H & I side by side */}
                    <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                        <BentoCell label="Photo H" style={{ flex: 1, height: "140px", borderRadius: "14px" }} />
                        <BentoCell label="Photo I" style={{ flex: 1, height: "140px", borderRadius: "14px" }} />
                    </div>
                </div>

            </div>
        </section>
    );
}
