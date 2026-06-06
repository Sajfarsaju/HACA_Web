"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";

const FALLBACK_GRADIENT = "linear-gradient(135deg, #E0F4FF 0%, #C4E8FF 100%)";

const FALLBACK_SRCS: Record<number, string> = {
    0: "/photos/schools/design/seo/learning-1.webp",
    1: "/photos/schools/design/seo/learning-2.webp",
    2: "/photos/schools/design/seo/learning-3.webp",
    3: "/photos/schools/design/seo/learning-4.webp",
    4: "/photos/schools/design/seo/learning-5.webp",
    5: "/photos/schools/design/seo/learning-6.webp",
    6: "/photos/schools/design/seo/learning-7.webp",
    7: "/photos/schools/design/seo/learning-8.webp",
};

const ROW1 = [
    { slot: 0, grow: 400 },
    { slot: 1, grow: 262 },
    { slot: 2, grow: 336 },
    { slot: 3, grow: 269 },
];
const ROW2 = [
    { slot: 4, grow: 323 },
    { slot: 5, grow: 262 },
    { slot: 6, grow: 302 },
    { slot: 7, grow: 380 },
];
const MOBILE_ROWS = [
    [{ slot: 0, grow: 205 }, { slot: 1, grow: 134 }],
    [{ slot: 2, grow: 166 }, { slot: 3, grow: 174 }],
    [{ slot: 4, grow: 134 }, { slot: 5, grow: 205 }],
    [{ slot: 6, grow: 174 }, { slot: 7, grow: 166 }],
];

function PhotoCard({ src, grow, height, radius }: { src: string; grow: number; height: number; radius: string }) {
    const [err, setErr] = useState(false);
    const hasSrc = !err && src;

    return (
        <div
            className="relative min-w-0 overflow-hidden"
            style={{
                flexGrow: grow,
                flexShrink: 1,
                flexBasis: "0%",
                height,
                borderRadius: radius,
                background: hasSrc ? undefined : FALLBACK_GRADIENT,
            }}
        >
            {hasSrc && (
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

export function DesignSeoCultureGrid() {
    const [photoMap, setPhotoMap] = useState<Map<number, string>>(new Map());

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/culture-photos?school=${encodeURIComponent("Design SEO")}`)
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

    const src = (slot: number) => photoMap.get(slot) ?? FALLBACK_SRCS[slot];

    return (
        <div className="w-full">
            {/* Mobile: 4 rows × 2 cols */}
            <div className="flex flex-col gap-[10px] lg:hidden">
                {MOBILE_ROWS.map((row, ri) => (
                    <div key={ri} className="flex gap-[10px]">
                        {row.map(({ slot, grow }) => (
                            <PhotoCard key={slot} src={src(slot)} grow={grow} height={151} radius="10.25px" />
                        ))}
                    </div>
                ))}
            </div>

            {/* Desktop: 2 rows × 4 cols */}
            <div className="hidden w-full lg:flex lg:flex-col lg:gap-[11px]">
                <div className="flex w-full gap-[11px]">
                    {ROW1.map(({ slot, grow }) => (
                        <PhotoCard key={slot} src={src(slot)} grow={grow} height={295} radius="20px" />
                    ))}
                </div>
                <div className="flex w-full gap-[11px]">
                    {ROW2.map(({ slot, grow }) => (
                        <PhotoCard key={slot} src={src(slot)} grow={grow} height={295} radius="20px" />
                    ))}
                </div>
            </div>
        </div>
    );
}
