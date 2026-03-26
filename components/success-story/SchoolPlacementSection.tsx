"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import { PlacementCardMedia } from "@/components/success-story/PlacementCardMedia";

export type PlacementItem = {
    _id: string;
    title: string | null;
    imageUrl: string;
};

const PLACEHOLDER_COUNT = 4;

/** Matches `grid-cols-1 sm:grid-cols-2 xl:grid-cols-4` on the success-story page. */
function subscribeVisibleCount(callback: () => void) {
    const mqXl = window.matchMedia("(min-width: 1280px)");
    const mqSm = window.matchMedia("(min-width: 640px)");
    const onChange = () => callback();
    mqXl.addEventListener("change", onChange);
    mqSm.addEventListener("change", onChange);
    return () => {
        mqXl.removeEventListener("change", onChange);
        mqSm.removeEventListener("change", onChange);
    };
}

function getVisibleCountSnapshot(): number {
    if (typeof window === "undefined") return 1;
    if (window.matchMedia("(min-width: 1280px)").matches) return 4;
    if (window.matchMedia("(min-width: 640px)").matches) return 2;
    return 1;
}

function getServerVisibleCount(): number {
    return 1;
}

function useRowCapacity(): number {
    return useSyncExternalStore(
        subscribeVisibleCount,
        getVisibleCountSnapshot,
        getServerVisibleCount
    );
}

const cardClassName =
    "group relative flex flex-col bg-[#0A0C16] overflow-hidden border border-[#232D6B]/30 hover:border-[#232D6B] transition-all duration-500 shadow-2xl w-full min-w-0 rounded-[10px] aspect-[247.6561737060547/270]";

const gridClassName =
    "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8";

type Props = {
    schoolName: string;
    items: PlacementItem[];
};

export function SchoolPlacementSection({ schoolName, items }: Props) {
    const rowCapacity = useRowCapacity();
    const [expanded, setExpanded] = useState(false);

    const firstRow = items.slice(0, rowCapacity);
    const rest = items.slice(rowCapacity);
    const hasMore = rest.length > 0;

    const renderCard = useCallback(
        (item: PlacementItem) => (
            <div key={item._id} className={cardClassName}>
                <div className="relative w-full h-full overflow-hidden flex-1 min-h-0">
                    <PlacementCardMedia
                        imageUrl={item.imageUrl}
                        alt={item.title || schoolName}
                    />
                </div>
            </div>
        ),
        [schoolName]
    );

    if (items.length === 0) {
        return (
            <div className={gridClassName}>
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                    <div
                        key={`placeholder-${schoolName}-${i}`}
                        className={cardClassName}
                    >
                        <div className="relative w-full h-full overflow-hidden flex-1 min-h-0">
                            <PlacementCardMedia imageUrl={null} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {!expanded ? (
                <>
                    <div className={gridClassName}>
                        {firstRow.map((item) => renderCard(item))}
                    </div>
                    {hasMore ? (
                        <button
                            type="button"
                            onClick={() => setExpanded(true)}
                            className="font-rethink font-medium tracking-[0%] text-[#A7ADBE] hover:text-[#FFFFFF] m-0 self-center text-[15px] md:text-[16px] leading-[100%] underline underline-offset-4 decoration-[#232D6B]/50 hover:decoration-[#FFFFFF]/60 transition-colors"
                        >
                            View more
                        </button>
                    ) : null}
                </>
            ) : (
                <>
                    <div className={gridClassName}>
                        {items.map((item) => renderCard(item))}
                    </div>
                    <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        className="font-rethink font-medium tracking-[0%] text-[#A7ADBE] hover:text-[#FFFFFF] m-0 self-center text-[15px] md:text-[16px] leading-[100%] underline underline-offset-4 decoration-[#232D6B]/50 hover:decoration-[#FFFFFF]/60 transition-colors"
                    >
                        View less
                    </button>
                </>
            )}
        </div>
    );
}
