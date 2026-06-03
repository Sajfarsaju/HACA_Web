"use client"

import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import axios from "axios"
import { PlacementCardMedia } from "@/components/success-story/PlacementCardMedia"
import {
    buildPlacementSlots,
    getPublicBackendBase,
    type PlacementGroup,
    type PlacementItem,
    PLACEMENT_TOTAL_SLOTS,
} from "@/lib/placements-api"

export type { PlacementGroup, PlacementItem } from "@/lib/placements-api"

const COLUMNS = [0, 1, 2, 3, 4]
const CARDS_PER_COL = 7
const EMPTY_SLOTS = Array.from({ length: PLACEMENT_TOTAL_SLOTS }, () => null)

/** Same card shell as success-story `SchoolPlacementSection`. */
const placementCardClassName =
    "group relative flex flex-col bg-[#0A0C16] overflow-hidden border border-[#232D6B]/30 hover:border-[#232D6B] transition-all duration-500 shadow-2xl w-full shrink-0 min-w-0 rounded-[10px] aspect-[247.6561737060547/270]"

export function PlacementSection({
    initialSlots,
}: {
    /** Pre-built slots from the server (home page). */
    initialSlots?: (PlacementItem | null)[];
}) {
    const router = useRouter()
    const hasServerSlots = Boolean(initialSlots?.some((slot) => slot != null))
    const [clientSlots, setClientSlots] = useState<(PlacementItem | null)[] | null>(
        null
    )

    const slots = useMemo(() => {
        if (hasServerSlots && initialSlots) return initialSlots
        if (clientSlots?.some((slot) => slot != null)) return clientSlots
        return EMPTY_SLOTS
    }, [hasServerSlots, initialSlots, clientSlots])

    useEffect(() => {
        if (hasServerSlots) return
        axios
            .get<{ groups?: PlacementGroup[] }>(
                `${getPublicBackendBase()}/api/placements/grouped?limit=200`
            )
            .then(({ data }) => {
                const groups = data.groups
                if (!Array.isArray(groups) || groups.length === 0) return
                setClientSlots(buildPlacementSlots(groups))
            })
            .catch(() => {})
    }, [hasServerSlots])

    return (
        <section className="w-full section-4k mx-auto pt-[84px] px-[60px] pb-[32px] flex flex-col items-center gap-[36px] opacity-100 overflow-hidden max-[600px]:max-w-full max-[600px]:p-[20px_clamp(16px,5vw,24px)] max-[600px]:gap-[26px]">
            <style>{`
                @keyframes placement-scroll-up {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
                @keyframes placement-scroll-down {
                    from { transform: translateY(-50%); }
                    to { transform: translateY(0); }
                }
                .animate-placement-up {
                    animation: placement-scroll-up 40s linear infinite;
                }
                .animate-placement-down {
                    animation: placement-scroll-down 40s linear infinite;
                }
                .placement-column:hover {
                    animation-play-state: paused;
                }
            `}</style>
            {/* ── Header: Badge + Heading ── */}
            <div className="w-full max-w-[min(1320px,91vw)] max-md:max-w-none flex flex-col items-center gap-[20px] max-[600px]:gap-[7.97px] max-[600px]:max-w-none">
                {/* Badge Button */}
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="Student Placements">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">Student Placements</span>
                    <span className="flex items-center justify-center shrink-0 w-[38px] h-[26px] max-md:w-[24px] max-md:h-[16.42px]" aria-hidden="true">
                        <Image
                            src="/photos/main/blue arrow.svg"
                            alt="" aria-hidden="true"
                            width={38}
                            height={26}
                            className="w-full h-full object-contain"
                        />
                    </span>
                </button>

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] tracking-[0%] text-[#ffffff] text-center m-0 max-[600px]:text-[22px] max-[600px]:max-w-none">
                    They Started Right Where <br /> you are
                </h2>
            </div>

            {/* ── Card Grid: each column scrolls vertically, cards clip at container ── */}
            <div className="w-full max-w-[min(1320px,91vw)] max-md:max-w-none h-[500px] grid grid-cols-5 gap-[20px] overflow-hidden items-stretch max-[1200px]:grid-cols-4 max-[1200px]:h-[550px] max-[900px]:grid-cols-3 max-[900px]:h-[500px] max-[600px]:mx-auto max-[600px]:w-full max-[600px]:max-w-none max-[600px]:h-[min(400px,calc(100vw*1.25))] max-[600px]:grid-cols-2 max-[600px]:gap-[clamp(10px,3.2vw,13px)]">
                {COLUMNS.map((colIdx) => {
                    const isUp = colIdx % 2 !== 0;
                    return (
                        <div
                            key={colIdx}
                            className={`flex flex-col gap-[20px] overflow-hidden min-h-0 max-[1200px]:[&:nth-child(5)]:hidden max-[900px]:[&:nth-child(n+4)]:hidden max-[600px]:[&:nth-child(n+3)]:hidden max-[600px]:gap-[clamp(10px,3.2vw,20px)]`}
                        >
                            <div className={`flex flex-col gap-[20px] placement-column ${isUp ? 'animate-placement-up' : 'animate-placement-down'}`}>
                                {[...Array(2)].map((_, loopIdx) => (
                                    <React.Fragment key={loopIdx}>
                                        {Array.from({ length: CARDS_PER_COL }).map((_, cardIdx) => {
                                            const slotIndex = colIdx * CARDS_PER_COL + cardIdx
                                            const item = slots[slotIndex]
                                            return (
                                                <div key={`${colIdx}-${cardIdx}-${item?._id ?? "empty"}-${loopIdx}`} className={placementCardClassName}>
                                                    <div className="relative w-full h-full overflow-hidden flex-1 min-h-0">
                                                        <PlacementCardMedia
                                                            imageUrl={item?.imageUrl ?? null}
                                                            alt={item?.title || "Student placement"}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── View More Button ── */}
            <div className="flex justify-center">
                <motion.button
                        type="button"
                        onClick={() => router.push("/success-story")}
                        className="group relative w-[227px] h-[55px] rounded-[100px] border-none cursor-pointer flex items-center justify-center bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[24px] max-[600px]:w-[182px] max-[600px]:h-[46px] max-[600px]:rounded-[82px] max-[600px]:px-[18px] overflow-hidden"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                    >
                        <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-[600px]:font-normal max-[600px]:text-[14px] max-[600px]:leading-[22.19px]">
                            View More Placements
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-[600px]:font-normal max-[600px]:text-[14px] max-[600px]:leading-[22.19px]">
                            View More Placements
                        </span>
                    </motion.button>
            </div>
        </section>
    )
}
