"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ACCENT_GRADIENTS = [
    "linear-gradient(145deg, #D9F967 0%, #9fcc4a 55%, #7fb032 100%)",
    "linear-gradient(145deg, #F48E28 0%, #d97218 55%, #b85a12 100%)",
    "linear-gradient(145deg, #1DA1F2 0%, #178cd8 55%, #0f6fab 100%)",
] as const;

const FALLBACK_ROW1 = ["Muhammed Shibili K", "Sanila Sherin", "Rasika", "Amina Fathima", "Nihal Rahman", "Devika S", "Arjun Varma", "Sneha Mol"];
const FALLBACK_ROW2 = ["Rasika", "Muhammed Shibili K", "Sanila Sherin", "Fathima N", "Kiran S Kumar", "Anjali Menon", "Rohit Nair", "Meera Joseph"];

type PlacementItem = { _id: string; imageUrl: string; title: string | null };

function StaticPlacementCard({ name, accentIndex }: { name: string; accentIndex: number }) {
    const bg = ACCENT_GRADIENTS[accentIndex % ACCENT_GRADIENTS.length];
    return (
        <article
            className="flex h-[186.022px] w-[161.847px] shrink-0 flex-col overflow-hidden rounded-[5.24px] bg-white text-black shadow-sm lg:h-[279.697px] lg:w-[243.348px] lg:rounded-[7.88px]"
            aria-label={`Placement success story: ${name}, Digital Marketing Executive`}
        >
            <div className="flex shrink-0 items-center justify-center px-1.5 pt-1.5 lg:px-2 lg:pt-2">
                <div className="relative h-[10px] w-[72px] opacity-90 lg:h-[14px] lg:w-[100px]">
                    <Image
                        src="/photos/schools/marketing/marketing%20school%20logo.svg"
                        alt="" aria-hidden="true"
                        fill
                        className="object-contain object-center"
                        sizes="100px"
                    />
                </div>
            </div>
            <div className="flex min-h-0 flex-1 gap-1 px-1.5 pb-1 pt-0.5 lg:gap-1.5 lg:px-2 lg:pb-1.5 lg:pt-1">
                <div className="flex min-w-0 flex-1 flex-col justify-center text-[7px] font-medium leading-[120%] text-black/80 lg:text-[9px]">
                    <p className="m-0 font-medium text-black/90">Upskill ചെയ്‌തു നേടിയ Career</p>
                    <p className="m-0 mt-0.5 text-[6px] text-black/55 lg:text-[8px]">From training to placement—your next chapter starts here.</p>
                </div>
                <div
                    className="relative w-[38%] shrink-0 overflow-hidden rounded-[3px] lg:w-[40%] lg:rounded-[4px]"
                    style={{ background: bg }}
                    aria-hidden
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    <div className="absolute bottom-1 left-1 grid h-[22px] w-[22px] place-items-center rounded-full bg-[#0066FF] text-[5px] font-bold uppercase leading-none text-white shadow-sm lg:bottom-1.5 lg:left-1.5 lg:h-[28px] lg:w-[28px] lg:text-[6px]">
                        Placed
                    </div>
                </div>
            </div>
            <div
                className="grid shrink-0 grid-cols-2 gap-0 border-t border-white/25 text-white"
                style={{ background: bg }}
            >
                <div className="flex flex-col justify-center border-r border-white/25 px-1.5 py-1.5 lg:px-2 lg:py-2">
                    <span className="text-[5px] font-medium uppercase tracking-wide text-white/80 lg:text-[6px]">Name</span>
                    <span className="text-[8px] font-semibold leading-tight lg:text-[10px]">{name}</span>
                    <div className="mt-1 h-[12px] max-w-[56px] rounded bg-white/90 lg:mt-1.5 lg:h-[14px] lg:max-w-[72px]" aria-hidden />
                </div>
                <div className="flex flex-col justify-center px-1.5 py-1.5 lg:px-2 lg:py-2">
                    <span className="text-[5px] font-medium uppercase tracking-wide text-white/80 lg:text-[6px]">Placed as</span>
                    <span className="text-[8px] font-semibold leading-tight lg:text-[10px]">Digital Marketing Executive</span>
                </div>
            </div>
        </article>
    );
}

function ImagePlacementCard({ item }: { item: PlacementItem }) {
    return (
        <div
            className="relative h-[186.022px] w-[161.847px] shrink-0 overflow-hidden rounded-[5.24px] bg-white/10 lg:h-[279.697px] lg:w-[243.348px] lg:rounded-[7.88px]"
            aria-label={item.title || "Placement success story"}
        >
            <Image
                src={item.imageUrl}
                alt={item.title || "Placement card"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 162px, 244px"
            />
        </div>
    );
}

function ensureMinLength<T>(arr: T[], minLen: number): T[] {
    let result = [...arr];
    while (result.length < minLen) result = [...result, ...arr];
    return result.slice(0, minLen);
}

export function MarketingPlacementsMarquee() {
    const [apiItems, setApiItems] = useState<PlacementItem[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/placements/grouped`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                const group = data?.groups?.find(
                    (g: { schoolName: string }) => g.schoolName === "Marketing School"
                );
                if (Array.isArray(group?.items) && group.items.length > 0) {
                    setApiItems(group.items);
                }
            })
            .catch(() => {});
    }, []);

    const useApi = apiItems.length > 0;

    const row1 = useApi
        ? [...ensureMinLength(apiItems, 8), ...ensureMinLength(apiItems, 8)]
        : [...FALLBACK_ROW1, ...FALLBACK_ROW1];

    const row2 = useApi
        ? [...ensureMinLength([...apiItems].reverse(), 8), ...ensureMinLength([...apiItems].reverse(), 8)]
        : [...FALLBACK_ROW2, ...FALLBACK_ROW2];

    return (
        <>
            <style>{`
                @keyframes ss-marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes ss-marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ss-marquee-row1-track {
                    animation: ss-marquee-right 48s linear infinite;
                    will-change: transform;
                }
                .ss-marquee-row2-track {
                    animation: ss-marquee-left 52s linear infinite;
                    will-change: transform;
                }
                .ss-marquee-row1-track:hover,
                .ss-marquee-row2-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .ss-marquee-row1-track,
                    .ss-marquee-row2-track {
                        animation: none;
                        transform: none;
                    }
                }
            `}</style>
            <p className="sr-only">
                Animated showcase of student placement success stories. Cards scroll continuously for visual emphasis.
            </p>
            <div className="relative w-full overflow-x-hidden lg:min-h-[599px]">
                <div className="flex w-full flex-col gap-[30px]" aria-hidden="true">
                    <div className="w-full min-w-0 overflow-hidden">
                        <div className="ss-marquee-row1-track flex w-max flex-row gap-[19.95px] lg:gap-[30px]">
                            {useApi
                                ? (row1 as PlacementItem[]).map((item, i) => (
                                    <ImagePlacementCard key={`r1-${i}-${item._id}`} item={item} />
                                ))
                                : (row1 as string[]).map((name, i) => (
                                    <StaticPlacementCard key={`r1-${i}-${name}`} name={name} accentIndex={i % FALLBACK_ROW1.length} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full min-w-0 overflow-hidden">
                        <div className="ss-marquee-row2-track flex w-max flex-row gap-[19.95px] lg:gap-[30px]">
                            {useApi
                                ? (row2 as PlacementItem[]).map((item, i) => (
                                    <ImagePlacementCard key={`r2-${i}-${item._id}`} item={item} />
                                ))
                                : (row2 as string[]).map((name, i) => (
                                    <StaticPlacementCard key={`r2-${i}-${name}`} name={name} accentIndex={(i + 1) % FALLBACK_ROW2.length} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
