"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";

const PHOTO_GRADIENTS = [
    "linear-gradient(145deg, #2a2a2a 0%, #4a4a4a 45%, #1a1a2e 100%)",
    "linear-gradient(145deg, #1e3a5f 0%, #0066FF 55%, #003d99 100%)",
    "linear-gradient(145deg, #3d2c4a 0%, #9B7EDE 50%, #5E35B1 100%)",
    "linear-gradient(145deg, #2d3436 0%, #636e72 55%, #2d3436 100%)",
    "linear-gradient(145deg, #F48E28 0%, #d97218 55%, #b85a12 100%)",
    "linear-gradient(145deg, #0f4c3a 0%, #2ecc71 50%, #27ae60 100%)",
] as const;

type Tile = { slotIndex: number; width: number; alt: string };

const ROW_1: Tile[] = [
    { slotIndex: 0, width: 300, alt: "HACA culture moment 1" },
    { slotIndex: 1, width: 300, alt: "HACA culture moment 2" },
    { slotIndex: 2, width: 240, alt: "HACA culture moment 3" },
    { slotIndex: 3, width: 315, alt: "HACA culture moment 4" },
    { slotIndex: 4, width: 271, alt: "HACA culture moment 5" },
    { slotIndex: 5, width: 381, alt: "HACA culture moment 6" },
];

const ROW_2: Tile[] = [
    { slotIndex: 6, width: 365, alt: "HACA culture moment 7" },
    { slotIndex: 7, width: 240, alt: "HACA culture moment 8" },
    { slotIndex: 8, width: 300, alt: "HACA culture moment 9" },
    { slotIndex: 9, width: 240, alt: "HACA culture moment 10" },
    { slotIndex: 10, width: 430, alt: "HACA culture moment 11" },
    { slotIndex: 11, width: 300, alt: "HACA culture moment 12" },
];

type Props = {
    subtitle: string;
    schoolName: string; // "Marketing SEO" or "AE School"
};

const HEADING_ID = "haca-culture-heading";

export function MarketingSeoCultureShared({ subtitle, schoolName }: Props) {
    const headingId = HEADING_ID;
    const [photoMap, setPhotoMap] = useState<Map<number, string>>(new Map());

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/culture-photos?school=${encodeURIComponent(schoolName)}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { photos?: { slotIndex: number; imageUrl: string }[] } | null) => {
                if (data?.photos && data.photos.length > 0) {
                    const map = new Map<number, string>();
                    for (const p of data.photos) map.set(p.slotIndex, p.imageUrl);
                    setPhotoMap(map);
                }
            })
            .catch(() => {});
    }, [schoolName]);

    function renderRow(tiles: Tile[]) {
        return tiles.map((tile, i) => {
            const src = photoMap.get(tile.slotIndex);
            return (
                <li
                    key={tile.slotIndex}
                    className="relative h-[300px] shrink-0 overflow-hidden rounded-lg"
                    style={{ width: tile.width }}
                >
                    {src ? (
                        <Image
                            src={src}
                            alt={tile.alt}
                            fill
                            className="object-cover object-center"
                            sizes={`${tile.width}px`}
                        />
                    ) : (
                        <div
                            className="absolute inset-0 rounded-lg"
                            style={{ background: PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length] }}
                        />
                    )}
                </li>
            );
        });
    }

    return (
        <section
            className="w-full bg-white text-black overflow-hidden"
            aria-labelledby={headingId}
        >
            <div className="mx-auto w-full max-w-[1440px] px-[clamp(16px,4.17vw,60px)] py-[clamp(32px,4vw,60px)] flex flex-col gap-[clamp(20px,3vw,40px)]">
                <h2
                    id={headingId}
                    className="
                        m-0 font-semibold tracking-[-0.03em] text-black
                        [font-family:'Darker_Grotesque',sans-serif]
                        text-[clamp(1.75rem,5vw,3rem)] leading-[1.08]
                    "
                >
                    {subtitle}
                </h2>

                <div className="flex flex-col gap-[clamp(6px,1vw,10px)]">
                    <ul
                        className="flex list-none flex-row gap-[clamp(4px,0.7vw,8px)] overflow-x-auto p-0 m-0"
                        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"] }}
                        aria-label="Culture photos row 1"
                    >
                        {renderRow(ROW_1)}
                    </ul>
                    <ul
                        className="flex list-none flex-row gap-[clamp(4px,0.7vw,8px)] overflow-x-auto p-0 m-0"
                        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"] }}
                        aria-label="Culture photos row 2"
                    >
                        {renderRow(ROW_2)}
                    </ul>
                </div>
            </div>
        </section>
    );
}
