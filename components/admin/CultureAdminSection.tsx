"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { PlacementCropModal } from "./PlacementCropModal";

// ─── Types ────────────────────────────────────────────────────────────────────

type CultureSlot = {
    _id: string;
    slotIndex: number;
    imageUrl: string;
};

type SchoolConfig = {
    name: string;
    label: string;
    slots: number;
    layout: "rows12" | "bento9" | "grid9" | "design" | "marketing" | "design-seo" | "haca-home";
};

type SlotSpec = { slot: number; dw: number; dh: number; desktopOnly?: true; mw?: number; mh?: number };

// ─── School configs ───────────────────────────────────────────────────────────

const SCHOOLS: SchoolConfig[] = [
    { name: "Marketing SEO",    label: "Marketing SEO Pages (11 pages)", slots: 12, layout: "rows12"    },
    { name: "AE School",        label: "AE School — UAE Pages",          slots: 12, layout: "rows12"    },
    { name: "Design School",    label: "Design School",                  slots: 9,  layout: "design"    },
    { name: "Tech School",      label: "Tech School",                    slots: 9,  layout: "bento9"    },
    { name: "Marketing School", label: "Marketing School (Main Page)",   slots: 9,  layout: "marketing" },
    { name: "Design SEO",       label: "Design School SEO Pages",        slots: 8,  layout: "design-seo" },
    { name: "HACA Home",        label: "HACA Home Page",                 slots: 7,  layout: "haca-home" },
];

// Tile widths for the Marketing SEO / AE 12-slot scrolling rows
const ROW1_WIDTHS = [300, 300, 240, 315, 271, 381]; // slots 0–5, height 300px each
const ROW2_WIDTHS = [365, 240, 300, 240, 430, 300]; // slots 6–11, height 300px each

const GRID9_LABELS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Per-school per-slot crop aspect ratios (width/height), matching the live page exactly
const SLOT_ASPECTS: Record<string, Record<number, number>> = {
    "Marketing SEO": {
        0: 300 / 300,  1: 300 / 300,  2: 240 / 300,  3: 315 / 300,   4: 271 / 300,  5: 381 / 300,
        6: 365 / 300,  7: 240 / 300,  8: 300 / 300,  9: 240 / 300,  10: 430 / 300, 11: 300 / 300,
    },
    "AE School": {
        0: 300 / 300,  1: 300 / 300,  2: 240 / 300,  3: 315 / 300,   4: 271 / 300,  5: 381 / 300,
        6: 365 / 300,  7: 240 / 300,  8: 300 / 300,  9: 240 / 300,  10: 430 / 300, 11: 300 / 300,
    },
    "Design School": {
        0: 237.40 / 235.00,
        1: 350.49 / 214.74,
        2: 256.42 / 262.69,
        3: 422.17 / 411.00,
        4: 350.60 / 200.25,
        5: 350.60 / 200.25,
        6: 399.95 / 200.00,
        7: 240.00 / 253.50,
        8: 240.00 / 253.50,
    },
    "Tech School": {
        0: 412 / 242,  1: 412 / 515,
        2: 433 / 242,  3: 216.5 / 211,  4: 216.5 / 211,  5: 433 / 294,
        6: 474 / 498,  7: 237 / 259,    8: 237 / 259,
    },
    "Marketing School": {
        0: 313.49 / 455.00,  1: 423.57 / 217.00,  2: 207.59 / 217.00,
        3: 315.58 / 335.00,  4: 315.58 / 217.00,  5: 315.58 / 455.00,
        6: 199.21 / 218.00,  7: 426.72 / 218.00,  8: 315.58 / 335.00,
    },
    "HACA Home": {
        0: 449 / 302,  1: 341 / 302,  2: 490 / 302,
        3: 214 / 305,  4: 350 / 305,  5: 350 / 305,  6: 350 / 305,
    },
    // Aspect = (grow / 1267) * (1287 / 295) — flex-grow ratios from the live Design SEO page
    "Design SEO": {
        0: 400 * 1287 / (1267 * 295),
        1: 262 * 1287 / (1267 * 295),
        2: 336 * 1287 / (1267 * 295),
        3: 269 * 1287 / (1267 * 295),
        4: 323 * 1287 / (1267 * 295),
        5: 262 * 1287 / (1267 * 295),
        6: 302 * 1287 / (1267 * 295),
        7: 380 * 1287 / (1267 * 295),
    },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const GRADIENTS = [
    "linear-gradient(145deg,#1e3a5f 0%,#0066FF 55%,#003d99 100%)",
    "linear-gradient(145deg,#3d2c4a 0%,#9B7EDE 50%,#5E35B1 100%)",
    "linear-gradient(145deg,#0f4c3a 0%,#2ecc71 50%,#27ae60 100%)",
    "linear-gradient(145deg,#2a2a2a 0%,#4a4a4a 45%,#1a1a2e 100%)",
    "linear-gradient(145deg,#F48E28 0%,#d97218 55%,#b85a12 100%)",
    "linear-gradient(145deg,#2d3436 0%,#636e72 55%,#2d3436 100%)",
];

// ─── Tile components ──────────────────────────────────────────────────────────

// Used by flex-based layouts (Rows12, Bento, SimpleGrid9, HacaHome)
function SlotTile({
    slotIndex, label, imageUrl, aspectClass, widthStyle, onUpload, onDelete, uploading,
}: {
    slotIndex: number; label: string; imageUrl?: string;
    aspectClass?: string; widthStyle?: React.CSSProperties;
    onUpload: (slot: number) => void; onDelete: (slot: number) => void; uploading: boolean;
}) {
    return (
        <div
            className={`group relative overflow-hidden rounded-lg cursor-pointer select-none ${aspectClass ?? "aspect-square"}`}
            style={{ background: imageUrl ? undefined : GRADIENTS[slotIndex % GRADIENTS.length], minWidth: 0, ...widthStyle }}
            onClick={() => !uploading && onUpload(slotIndex)}
            title={`Slot ${label} — click to upload`}
        >
            {imageUrl && (
                <Image src={imageUrl} alt={`Culture slot ${label}`} fill sizes="200px" className="object-cover object-center" unoptimized />
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-white text-xs font-medium">
                    {uploading ? "Uploading…" : imageUrl ? "Replace" : "Upload"}
                </span>
            </div>
            <span className="absolute bottom-1 left-1.5 text-[10px] font-bold text-white/70 z-10 pointer-events-none">{label}</span>
            {imageUrl && (
                <button
                    type="button"
                    className="absolute top-1 right-1 z-20 w-5 h-5 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => { e.stopPropagation(); onDelete(slotIndex); }}
                    aria-label="Remove photo"
                >
                    <span className="text-white text-[10px] font-bold leading-none">×</span>
                </button>
            )}
        </div>
    );
}

// Used by Design School's absolute-positioned collage
function AbsSlot({
    slot, left, top, width, height, imageUrl, onUpload, onDelete, uploading,
}: {
    slot: number; left: string; top: string; width: string; height: string;
    imageUrl?: string; onUpload: (s: number) => void; onDelete: (s: number) => void; uploading: boolean;
}) {
    return (
        <div
            className="absolute overflow-hidden rounded group cursor-pointer"
            style={{ left, top, width, height }}
            onClick={() => !uploading && onUpload(slot)}
            title={`Slot ${slot + 1} — click to upload`}
        >
            {imageUrl
                ? <Image src={imageUrl} alt="" fill sizes="200px" className="object-cover object-center" unoptimized />
                : <div className="absolute inset-0" style={{ background: GRADIENTS[slot % GRADIENTS.length] }} />
            }
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <span className="text-white text-[9px] font-medium">
                    {uploading ? "Uploading…" : imageUrl ? "Replace" : "Upload"}
                </span>
            </div>
            <span className="absolute bottom-0.5 left-1 text-[8px] font-bold text-white/60 z-10 pointer-events-none">{slot + 1}</span>
            {imageUrl && (
                <button
                    type="button"
                    className="absolute top-0.5 right-0.5 z-20 w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => { e.stopPropagation(); onDelete(slot); }}
                >
                    <span className="text-white text-[9px] font-bold leading-none">×</span>
                </button>
            )}
        </div>
    );
}

// ─── Layout renderers ─────────────────────────────────────────────────────────

function Rows12Grid({
    photoMap, viewMode, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; viewMode: "desktop" | "mobile";
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    if (viewMode === "mobile") {
        return (
            <div className="flex flex-col gap-2">
                <p className="text-xs text-[#9aa3b8]">Mobile: all 12 tiles in a single horizontal scroll row</p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {Array.from({ length: 12 }, (_, i) => (
                        <SlotTile
                            key={i} slotIndex={i} label={`${i + 1}`}
                            imageUrl={photoMap.get(i)?.imageUrl}
                            widthStyle={{ flexShrink: 0, width: 80, height: 80 }}
                            aspectClass="aspect-square"
                            onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === i}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs text-[#9aa3b8]">Desktop: 2 scrollable rows (widths proportional to actual tile widths)</p>
            {[ROW1_WIDTHS, ROW2_WIDTHS].map((widths, rowIdx) => {
                const totalW = widths.reduce((a, b) => a + b, 0);
                return (
                    <div key={rowIdx} className="flex gap-1.5 overflow-x-auto pb-1">
                        {widths.map((w, i) => {
                            const slot = rowIdx * 6 + i;
                            return (
                                <SlotTile
                                    key={slot} slotIndex={slot} label={`${slot + 1}`}
                                    imageUrl={photoMap.get(slot)?.imageUrl}
                                    widthStyle={{ flexShrink: 0, width: `${(w / totalW) * 100 * 7}px`, height: "120px" }}
                                    aspectClass=""
                                    onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

function BentoGrid({
    photoMap, viewMode, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; viewMode: "desktop" | "mobile";
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    const LABELS = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    const tile = (slot: number, aspect: string, extra?: React.CSSProperties) => (
        <SlotTile
            key={slot} slotIndex={slot} label={LABELS[slot]}
            imageUrl={photoMap.get(slot)?.imageUrl}
            aspectClass={aspect} widthStyle={extra}
            onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
        />
    );

    if (viewMode === "mobile") {
        return (
            <div className="flex flex-col gap-2 max-w-[280px]">
                <p className="text-xs text-[#9aa3b8]">Mobile layout</p>
                <div className="flex gap-1.5">{tile(0, "aspect-[200/125]", { flex: "200 0 0%" })}{tile(1, "aspect-[137/125]", { flex: "137 0 0%" })}</div>
                <div className="flex gap-1.5">{tile(2, "aspect-[174/170]", { flex: "174 0 0%" })}{tile(6, "aspect-[163/170]", { flex: "163 0 0%" })}</div>
                <div className="flex gap-1.5">{tile(3, "aspect-[138/140]", { flex: "138 0 0%" })}{tile(4, "aspect-[199/140]", { flex: "199 0 0%" })}</div>
                <div className="flex gap-1.5">{tile(7, "aspect-[168/130]", { flex: "168 0 0%" })}{tile(8, "aspect-[169/130]", { flex: "169 0 0%" })}</div>
            </div>
        );
    }

    return (
        <div className="flex gap-2 max-w-[540px]">
            <div className="flex flex-col gap-2" style={{ flex: "412 0 0%", minWidth: 0 }}>
                {tile(0, "aspect-[412/242]")}
                {tile(1, "aspect-[412/515]")}
            </div>
            <div className="flex flex-col gap-2" style={{ flex: "433 0 0%", minWidth: 0 }}>
                {tile(2, "aspect-[433/242]")}
                <div className="flex gap-2">
                    {tile(3, "aspect-square", { flex: 1 })}
                    {tile(4, "aspect-square", { flex: 1 })}
                </div>
                {tile(5, "aspect-[433/294]")}
            </div>
            <div className="flex flex-col gap-2" style={{ flex: "474 0 0%", minWidth: 0 }}>
                {tile(6, "aspect-[474/498]")}
                <div className="flex gap-2">
                    {tile(7, "aspect-square", { flex: 1 })}
                    {tile(8, "aspect-square", { flex: 1 })}
                </div>
            </div>
        </div>
    );
}

function SimpleGrid9({
    photoMap, labels, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; labels: string[];
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    return (
        <div className="grid grid-cols-3 gap-2 max-w-[420px]">
            {labels.map((lbl, i) => (
                <SlotTile
                    key={i} slotIndex={i} label={lbl}
                    imageUrl={photoMap.get(i)?.imageUrl}
                    aspectClass="aspect-square"
                    onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === i}
                />
            ))}
        </div>
    );
}

// Design School: exact Figma collage proportions (canvas 1320 × 878.09)
function DesignGrid9({
    photoMap, viewMode, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; viewMode: "desktop" | "mobile";
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    const tile = (slot: number, aspect: string, ws?: React.CSSProperties) => (
        <SlotTile
            key={slot} slotIndex={slot} label={`${slot + 1}`}
            imageUrl={photoMap.get(slot)?.imageUrl}
            aspectClass={aspect} widthStyle={ws}
            onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
        />
    );

    if (viewMode === "mobile") {
        return (
            <div className="flex flex-col gap-[10px] max-w-[320px]">
                <p className="text-xs text-[#9aa3b8] mb-1">Mobile layout · slot 6 (desktop-only) not shown</p>
                {/* Row 1 */}
                <div className="flex gap-[10px] items-end">
                    {tile(0, "", { flex: "185.54 0 0%", aspectRatio: 185.54 / 114.29 })}
                    {tile(1, "", { flex: "136.48 0 0%", aspectRatio: 136.48 / 139.81 })}
                </div>
                {/* Row 2 */}
                <div className="flex gap-[10px] items-start">
                    {tile(2, "", { flex: "178.65 0 0%", aspectRatio: 178.65 / 177.58 })}
                    <div style={{ flex: "146.70 0 0%", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {tile(3, "aspect-[146.70/83.79]", { width: "100%" })}
                        {tile(4, "aspect-[146.70/83.79]", { width: "100%" })}
                    </div>
                </div>
                {/* Row 3 — slot 6 full width */}
                {tile(6, "aspect-[335/167.52]")}
                {/* Row 4 */}
                <div className="flex gap-[6.57px]">
                    {tile(7, "", { flex: "157.67 0 0%", aspectRatio: 157.67 / 166.54 })}
                    {tile(8, "", { flex: "157.67 0 0%", aspectRatio: 157.67 / 166.54 })}
                </div>
            </div>
        );
    }

    const CW = 1320, CH = 878.09;
    const px = (v: number) => `${(v / CW) * 100}%`;
    const py = (v: number) => `${(v / CH) * 100}%`;

    const slots = [
        { slot: 0, l: 906.80,   t: 0,       w: 237.40,  h: 235.00  },
        { slot: 1, l: 259.78,   t: 237.48,  w: 350.49,  h: 214.74  },
        { slot: 2, l: 626.52,   t: 189.53,  w: 256.42,  h: 262.69  },
        { slot: 3, l: 0,        t: 467.09,  w: 422.17,  h: 411.00  },
        { slot: 4, l: 439.33,   t: 466.63,  w: 350.60,  h: 200.25  },
        { slot: 5, l: 439.33,   t: 677.75,  w: 350.60,  h: 200.25  },
        { slot: 6, l: 920.05,   t: 251.77,  w: 399.95,  h: 200.00  },
        { slot: 7, l: 806.45,   t: 467.09,  w: 240.00,  h: 253.50  },
        { slot: 8, l: 1073.08,  t: 467.09,  w: 240.00,  h: 253.50  },
    ];

    return (
        <div className="w-full max-w-[640px]">
            <p className="text-xs text-[#9aa3b8] mb-2">Desktop collage — matches live page proportions exactly</p>
            <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ aspectRatio: `${CW}/${CH}`, background: "rgba(252,252,252,0.06)" }}
            >
                <div
                    className="absolute rounded bg-white/5 flex items-center justify-center"
                    style={{ left: px(0), top: py(0), width: px(750), height: py(169) }}
                >
                    <span className="text-[8px] text-white/25">heading</span>
                </div>
                <div
                    className="absolute rounded bg-white/5 flex items-center justify-center"
                    style={{ left: px(806.45), top: py(737.09), width: px(461), height: py(141) }}
                >
                    <span className="text-[8px] text-white/25">text + button</span>
                </div>
                {slots.map(({ slot, l, t, w, h }) => (
                    <AbsSlot
                        key={slot} slot={slot}
                        left={px(l)} top={py(t)} width={px(w)} height={py(h)}
                        imageUrl={photoMap.get(slot)?.imageUrl}
                        onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
                    />
                ))}
            </div>
        </div>
    );
}

// Marketing School Main: exact Figma mosaic proportions (canvas 1320 × 693 desktop, 343 × 372 mobile)
function MarketingMosaicGrid({
    photoMap, viewMode, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; viewMode: "desktop" | "mobile";
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    if (viewMode === "mobile") {
        // Mobile canvas: 343 × 372 — only slots 0,1,4,6,7 appear; 2,3,5,8 are desktop-only
        const MCW = 343, MCH = 372;
        const mpx = (v: number) => `${(v / MCW) * 100}%`;
        const mpy = (v: number) => `${(v / MCH) * 100}%`;

        const mSlots = [
            { slot: 0, l: 0,      t: 3.74,   w: 167.6248, h: 243.2933 },
            { slot: 1, l: 174.05, t: 0,       w: 168.9459, h: 116.1503 },
            { slot: 4, l: 174.05, t: 126.71,  w: 168.9459, h: 118.4967 },
            { slot: 6, l: 0.42,   t: 253.42,  w: 106.5174, h: 116.5669 },
            { slot: 7, l: 114.57, t: 253.99,  w: 228.1715, h: 116.5669 },
        ];

        return (
            <div className="w-full max-w-[300px]">
                <p className="text-xs text-[#9aa3b8] mb-2">Mobile layout · slots 3, 4, 6, 9 are desktop-only</p>
                <div
                    className="relative w-full rounded-lg overflow-hidden"
                    style={{ aspectRatio: `${MCW}/${MCH}`, background: "rgba(0,0,0,0.18)" }}
                >
                    {mSlots.map(({ slot, l, t, w, h }) => (
                        <AbsSlot
                            key={slot} slot={slot}
                            left={mpx(l)} top={mpy(t)} width={mpx(w)} height={mpy(h)}
                            imageUrl={photoMap.get(slot)?.imageUrl}
                            onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
                        />
                    ))}
                </div>
            </div>
        );
    }

    const CW = 1320, CH = 693;
    const px = (v: number) => `${(v / CW) * 100}%`;
    const py = (v: number) => `${(v / CH) * 100}%`;

    const slots = [
        { slot: 0, l: 0,       t: 0,   w: 313.4869,  h: 455 },
        { slot: 1, l: 333.41,  t: 0,   w: 423.5743,  h: 217 },
        { slot: 2, l: 776.9,   t: 0,   w: 207.5933,  h: 217 },
        { slot: 3, l: 1004.42, t: 0,   w: 315.5838,  h: 335 },
        { slot: 4, l: 333.41,  t: 238, w: 315.5838,  h: 217 },
        { slot: 5, l: 668.91,  t: 238, w: 315.5838,  h: 455 },
        { slot: 6, l: 0,       t: 475, w: 199.2057,  h: 218 },
        { slot: 7, l: 222.27,  t: 475, w: 426.7196,  h: 218 },
        { slot: 8, l: 1004.42, t: 358, w: 315.5838,  h: 335 },
    ];

    return (
        <div className="w-full max-w-[640px]">
            <p className="text-xs text-[#9aa3b8] mb-2">Desktop mosaic — matches live page proportions exactly</p>
            <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ aspectRatio: `${CW}/${CH}`, background: "rgba(0,0,0,0.18)" }}
            >
                {slots.map(({ slot, l, t, w, h }) => (
                    <AbsSlot
                        key={slot} slot={slot}
                        left={px(l)} top={py(t)} width={px(w)} height={py(h)}
                        imageUrl={photoMap.get(slot)?.imageUrl}
                        onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
                    />
                ))}
            </div>
        </div>
    );
}

// HACA Home: row 1 = 3 photos (desktop) / 2 photos (mobile), row 2 = 4 photos (desktop) / 2 photos (mobile)
function HacaHomeGrid({
    photoMap, viewMode, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; viewMode: "desktop" | "mobile";
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    const ROW1: SlotSpec[] = [
        { slot: 0, dw: 449, dh: 302, mw: 196.42, mh: 173.95 },
        { slot: 1, dw: 341, dh: 302, mw: 127.73, mh: 174.37 },
        { slot: 2, dw: 490, dh: 302, desktopOnly: true },
    ];
    const ROW2: SlotSpec[] = [
        { slot: 3, dw: 214, dh: 305, mw: 123.26, mh: 175.68 },
        { slot: 4, dw: 350, dh: 305, mw: 201.60, mh: 175.68 },
        { slot: 5, dw: 350, dh: 305, desktopOnly: true },
        { slot: 6, dw: 350, dh: 305, desktopOnly: true },
    ];

    const tile = (s: SlotSpec, w: number, h: number) => (
        <SlotTile
            key={s.slot} slotIndex={s.slot} label={`${s.slot + 1}`}
            imageUrl={photoMap.get(s.slot)?.imageUrl}
            widthStyle={{ flex: `${w} 0 0%`, aspectRatio: w / h }}
            aspectClass=""
            onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === s.slot}
        />
    );

    if (viewMode === "mobile") {
        return (
            <div className="flex flex-col gap-2 max-w-[320px]">
                <p className="text-xs text-[#9aa3b8]">Mobile: 2×2 (slots 3, 6, 7 are desktop-only)</p>
                <div className="flex gap-2">
                    {ROW1.filter(s => !s.desktopOnly).map(s => tile(s, s.mw!, s.mh!))}
                </div>
                <div className="flex gap-2">
                    {ROW2.filter(s => !s.desktopOnly).map(s => tile(s, s.mw!, s.mh!))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 max-w-[640px]">
            <p className="text-xs text-[#9aa3b8]">Desktop: row 1 — 3 photos, row 2 — 4 photos</p>
            <div className="flex gap-2">{ROW1.map(s => tile(s, s.dw, s.dh))}</div>
            <div className="flex gap-2">{ROW2.map(s => tile(s, s.dw, s.dh))}</div>
        </div>
    );
}

// Design SEO: 2 flex rows × 4 cols (desktop), 4 flex rows × 2 cols (mobile)
// Grow values mirror the live UiUxDesignCalicutLearningExperienceSection layout
const DSEO_ROW1 = [
    { slot: 0, grow: 400 },
    { slot: 1, grow: 262 },
    { slot: 2, grow: 336 },
    { slot: 3, grow: 269 },
];
const DSEO_ROW2 = [
    { slot: 4, grow: 323 },
    { slot: 5, grow: 262 },
    { slot: 6, grow: 302 },
    { slot: 7, grow: 380 },
];
const DSEO_MOBILE = [
    [{ slot: 0, grow: 205 }, { slot: 1, grow: 134 }],
    [{ slot: 2, grow: 166 }, { slot: 3, grow: 174 }],
    [{ slot: 4, grow: 134 }, { slot: 5, grow: 205 }],
    [{ slot: 6, grow: 174 }, { slot: 7, grow: 166 }],
];

function DesignSeoGrid({
    photoMap, viewMode, onUpload, onDelete, uploadingSlot,
}: {
    photoMap: Map<number, CultureSlot>; viewMode: "desktop" | "mobile";
    onUpload: (s: number) => void; onDelete: (s: number) => void; uploadingSlot: number | null;
}) {
    if (viewMode === "mobile") {
        return (
            <div className="flex flex-col gap-2 max-w-[320px]">
                <p className="text-xs text-[#9aa3b8] mb-1">Mobile layout · 4 rows × 2 cols</p>
                {DSEO_MOBILE.map((row, ri) => (
                    <div key={ri} className="flex gap-2">
                        {row.map(({ slot, grow }) => (
                            <SlotTile
                                key={slot} slotIndex={slot} label={`${slot + 1}`}
                                imageUrl={photoMap.get(slot)?.imageUrl}
                                widthStyle={{ flexGrow: grow, flexShrink: 1, flexBasis: "0%", height: "80px" }}
                                aspectClass=""
                                onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2 max-w-[640px]">
            <p className="text-xs text-[#9aa3b8] mb-1">Desktop layout · 2 rows × 4 cols (proportional to live page widths)</p>
            {[DSEO_ROW1, DSEO_ROW2].map((row, ri) => (
                <div key={ri} className="flex gap-2">
                    {row.map(({ slot, grow }) => (
                        <SlotTile
                            key={slot} slotIndex={slot} label={`${slot + 1}`}
                            imageUrl={photoMap.get(slot)?.imageUrl}
                            widthStyle={{ flexGrow: grow, flexShrink: 1, flexBasis: "0%", height: "110px" }}
                            aspectClass=""
                            onUpload={onUpload} onDelete={onDelete} uploading={uploadingSlot === slot}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function CultureAdminSection({
    token, backendUrl, showToast,
}: {
    token: string; backendUrl: string;
    showToast: (msg: string, type?: "error" | "success") => void;
}) {
    const [selectedSchool, setSelectedSchool] = useState<SchoolConfig>(SCHOOLS[0]);
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
    const [photoMap, setPhotoMap] = useState<Map<number, CultureSlot>>(new Map());
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadingSlot, setUploadingSlot] = useState<number | null>(null);
    const [cropOpen, setCropOpen] = useState(false);
    const [cropSrc, setCropSrc] = useState<string>("");
    const [cropAspect, setCropAspect] = useState<number>(1);

    const loadSlots = useCallback(async (school: string) => {
        try {
            const res = await axios.get(`${backendUrl}/api/admin/culture-photos`, {
                params: { school },
                headers: { Authorization: `Bearer ${token}` },
            });
            const photos: CultureSlot[] = res.data.photos ?? [];
            const map = new Map<number, CultureSlot>();
            for (const p of photos) map.set(p.slotIndex, p);
            setPhotoMap(map);
        } catch { /* non-critical */ }
    }, [backendUrl, token]);

    useEffect(() => { loadSlots(selectedSchool.name); }, [selectedSchool, loadSlots]);

    function handleSlotClick(slot: number) {
        const aspect = SLOT_ASPECTS[selectedSchool.name]?.[slot] ?? 1;
        setCropAspect(aspect);
        setUploadingSlot(slot);
        fileInputRef.current?.click();
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) { setUploadingSlot(null); return; }
        setCropSrc(URL.createObjectURL(file));
        setCropOpen(true);
        e.target.value = "";
    }

    async function handleCropDone(file: File) {
        setCropOpen(false);
        if (uploadingSlot === null) return;
        setLoading(true);
        try {
            const form = new FormData();
            form.append("photo", file, file.name);
            form.append("schoolName", selectedSchool.name);
            form.append("slotIndex", String(uploadingSlot));
            await axios.post(`${backendUrl}/api/admin/culture-photos`, form, {
                headers: { Authorization: `Bearer ${token}` },
            });
            showToast(`Slot ${uploadingSlot + 1} uploaded ✓`, "success");
            await loadSlots(selectedSchool.name);
        } catch (err) {
            const msg = axios.isAxiosError(err) ? err.response?.data?.error ?? err.message : String(err);
            showToast(msg);
        } finally {
            setLoading(false);
            setUploadingSlot(null);
        }
    }

    function handleCropCancel() {
        setCropOpen(false);
        setUploadingSlot(null);
    }

    async function handleDelete(slot: number) {
        const existing = photoMap.get(slot);
        if (!existing) return;
        setLoading(true);
        try {
            await axios.delete(`${backendUrl}/api/admin/culture-photos/${existing._id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            showToast("Photo removed", "success");
            await loadSlots(selectedSchool.name);
        } catch (err) {
            const msg = axios.isAxiosError(err) ? err.response?.data?.error ?? err.message : String(err);
            showToast(msg);
        } finally {
            setLoading(false);
        }
    }

    const gridProps = { photoMap, viewMode, onUpload: handleSlotClick, onDelete: handleDelete, uploadingSlot };

    return (
        <div className="space-y-8">
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

            <PlacementCropModal
                imageSrc={cropSrc}
                open={cropOpen}
                onClose={handleCropCancel}
                onCropped={handleCropDone}
                aspect={cropAspect}
            />

            <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md">
                <h2 className="mb-4 font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                    Culture Photos
                </h2>
                <p className="mb-5 text-sm text-[#9aa3b8]">
                    Select a school, then click any slot to upload. Each slot crops to the exact aspect ratio it occupies on the live page.
                </p>

                {/* School pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {SCHOOLS.map((s) => (
                        <button
                            key={s.name}
                            type="button"
                            onClick={() => { setSelectedSchool(s); setViewMode("desktop"); }}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                                selectedSchool.name === s.name
                                    ? "bg-[#4C75FF] text-white"
                                    : "bg-white/[0.08] text-[#9aa3b8] hover:text-white hover:bg-white/15"
                            }`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>

                {/* View toggle */}
                <div className="flex items-center gap-3 mb-6">
                    {(["desktop", "mobile"] as const).map((mode) => (
                        <button
                            key={mode}
                            type="button"
                            onClick={() => setViewMode(mode)}
                            className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
                                viewMode === mode ? "bg-white/15 text-white" : "text-[#9aa3b8] hover:text-white"
                            }`}
                        >
                            {mode === "desktop" ? "🖥 Desktop" : "📱 Mobile"}
                        </button>
                    ))}
                    <span className="text-xs text-[#9aa3b8] ml-auto">
                        {selectedSchool.slots} slots · {photoMap.size} uploaded
                    </span>
                    {loading && <span className="text-xs text-[#9aa3b8] animate-pulse">Saving…</span>}
                </div>

                {/* Slot grid */}
                <div className="overflow-x-auto">
                    {selectedSchool.layout === "rows12"    && <Rows12Grid {...gridProps} />}
                    {selectedSchool.layout === "bento9"    && <BentoGrid {...gridProps} />}
                    {selectedSchool.layout === "grid9"     && <SimpleGrid9 photoMap={photoMap} labels={GRID9_LABELS} onUpload={handleSlotClick} onDelete={handleDelete} uploadingSlot={uploadingSlot} />}
                    {selectedSchool.layout === "design"    && <DesignGrid9 photoMap={photoMap} viewMode={viewMode} onUpload={handleSlotClick} onDelete={handleDelete} uploadingSlot={uploadingSlot} />}
                    {selectedSchool.layout === "marketing"  && <MarketingMosaicGrid photoMap={photoMap} viewMode={viewMode} onUpload={handleSlotClick} onDelete={handleDelete} uploadingSlot={uploadingSlot} />}
                    {selectedSchool.layout === "design-seo" && <DesignSeoGrid photoMap={photoMap} viewMode={viewMode} onUpload={handleSlotClick} onDelete={handleDelete} uploadingSlot={uploadingSlot} />}
                    {selectedSchool.layout === "haca-home"  && <HacaHomeGrid {...gridProps} />}
                </div>

                <p className="mt-4 text-[11px] text-[#9aa3b8]">
                    Click a slot to upload · Hover to replace or delete · Crop ratio matches that slot&apos;s exact live-page dimensions
                </p>
            </section>
        </div>
    );
}
