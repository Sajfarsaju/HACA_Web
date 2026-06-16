"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PlacementCardMedia } from "@/components/success-story/PlacementCardMedia";
import { getPublicBackendBase, type PlacementGroup, type PlacementItem } from "@/lib/placements-api";

const FONT = '"VC Nudge Trial Normal", sans-serif' as const;
const DESIGN_SCHOOL_NAME = "Design School";
const PLACEHOLDER_COUNT = 8;

export function GraphicDesignOnlineStudentsWorkSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [placements, setPlacements] = useState<PlacementItem[] | null>(null);
    const dragRef = useRef<{
        pointerId: number;
        startClientX: number;
        startScrollLeft: number;
    } | null>(null);

    useEffect(() => {
        let cancelled = false;
        async function run() {
            try {
                const res = await fetch(`${getPublicBackendBase()}/api/placements/grouped?limit=200`, {
                    cache: "no-store",
                });
                if (!res.ok) return;
                const data: { groups?: PlacementGroup[] } = await res.json();
                const groups = Array.isArray(data.groups) ? data.groups : [];
                const design = groups.find((g) => g.schoolName === DESIGN_SCHOOL_NAME);
                const items = Array.isArray(design?.items) ? design!.items : [];
                if (!cancelled) setPlacements(items);
            } catch {
                /* keep placeholders */
            }
        }
        run();
        return () => { cancelled = true; };
    }, []);

    const endDrag = useCallback(() => {
        dragRef.current = null;
        const el = scrollRef.current;
        if (el) el.style.removeProperty("cursor");
    }, []);

    const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0 || dragRef.current) return;
        const el = scrollRef.current;
        if (!el) return;
        dragRef.current = {
            pointerId: e.pointerId,
            startClientX: e.clientX,
            startScrollLeft: el.scrollLeft,
        };
        el.style.cursor = "grabbing";
        el.setPointerCapture(e.pointerId);

        const onMove = (ev: PointerEvent) => {
            if (!dragRef.current || ev.pointerId !== dragRef.current.pointerId) return;
            el.scrollLeft = dragRef.current.startScrollLeft - (ev.clientX - dragRef.current.startClientX);
        };
        const onUp = (ev: PointerEvent) => {
            if (!dragRef.current || ev.pointerId !== dragRef.current.pointerId) return;
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
            document.removeEventListener("pointercancel", onUp);
            try { el.releasePointerCapture(ev.pointerId); } catch { /* already released */ }
            endDrag();
        };
        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onUp);
        document.addEventListener("pointercancel", onUp);
    }, [endDrag]);

    const cards: (PlacementItem | null)[] =
        placements && placements.length > 0
            ? placements
            : Array.from({ length: PLACEHOLDER_COUNT }, () => null);

    return (
        <section className="w-full overflow-hidden bg-white" aria-labelledby="gd-online-students-work-heading">
            <style>{`
                .gd-online-students-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                .gd-online-students-scroll::-webkit-scrollbar { display: none; }
            `}</style>

            {/* Heading — left-aligned, inside max-width container */}
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 pt-10 pb-[36px] lg:px-[60px] lg:pt-[60px] lg:pb-[48px]">
                <h2
                    id="gd-online-students-work-heading"
                    className="m-0 text-black"
                    style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(32px, 4vw, 45px)",
                        lineHeight: "110%",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Where Our Students<br />Are Working Today
                </h2>
            </div>

            {/* Full-bleed horizontal scroll strip */}
            <div
                ref={scrollRef}
                className="gd-online-students-scroll w-full cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain select-none"
                style={{ touchAction: "pan-x", WebkitOverflowScrolling: "touch" }}
                onPointerDown={onPointerDown}
                aria-label="Placement cards — scroll horizontally"
            >
                <div
                    className="flex w-max flex-row flex-nowrap items-stretch"
                    style={{
                        gap: "16px",
                        paddingLeft: "clamp(20px, 4.17vw, 60px)",
                        paddingRight: "clamp(20px, 4.17vw, 60px)",
                        paddingBottom: "60px",
                    }}
                >
                    {cards.map((item, i) => (
                        <div
                            key={item?._id ?? `ph-${i}`}
                            className="relative shrink-0 overflow-hidden rounded-[14px] bg-[#E8E8E8]"
                            style={{
                                width: 409.61407470703125,
                                height: 464.624267578125,
                            }}
                            aria-label={item?.title ?? "Design school placement"}
                            aria-hidden={!item}
                        >
                            <PlacementCardMedia
                                imageUrl={item?.imageUrl ?? null}
                                alt={item?.title ?? "Design school placement"}
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
