"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const COLUMNS = [0, 1, 2, 3, 4]
const CARDS_PER_COL = 7

export function PlacementSection() {
    const columnRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const directions = COLUMNS.map((idx) => (idx % 2 === 0 ? 1 : -1))
        let frameId: number

        const step = () => {
            columnRefs.current.forEach((el, index) => {
                if (!el) return

                const maxScroll = el.scrollHeight - el.clientHeight
                if (maxScroll <= 0) return

                const speed = 0.8 // pixels per frame; tweak if needed
                let next = el.scrollTop + directions[index] * speed

                // Looping behavior that preserves direction:
                // - if going up and we hit the top, jump to bottom and keep going up
                // - if going down and we hit the bottom, jump to top and keep going down
                if (directions[index] === -1 && next <= 0) {
                    next = maxScroll
                } else if (directions[index] === 1 && next >= maxScroll) {
                    next = 0
                }

                el.scrollTop = next
            })

            frameId = requestAnimationFrame(step)
        }

        frameId = requestAnimationFrame(step)

        return () => {
            if (frameId) cancelAnimationFrame(frameId)
        }
    }, [])

    return (
        <section className="w-full section-4k min-h-[1074px] mx-auto pt-[84px] px-[60px] pb-[32px] flex flex-col items-center gap-[36px] opacity-100 overflow-hidden max-[600px]:max-w-full max-[600px]:min-h-[666px] max-[600px]:p-[20px] max-[600px]:gap-[26px]">
            {/* ── Header: Badge + Heading ── */}
            <div className="w-full max-w-[min(1320px,91vw)] flex flex-col items-center gap-[20px] max-[600px]:max-w-[335px] max-[600px]:gap-[7.97px]">
                {/* Badge Button */}
                <button className="w-[242px] h-[64px] flex items-center justify-center p-0 rounded-[100px] border-none bg-transparent cursor-default max-[600px]:w-[175px] max-[600px]:h-[46px]" aria-label="Student Placements">
                    <Image
                        src="/photos/main/student placements.svg"
                        alt="Student Placements"
                        width={242}
                        height={64}
                        className="w-full h-full object-contain"
                    />
                </button>

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] tracking-[0%] text-[#ffffff] text-center m-0 max-[600px]:text-[22px] max-[600px]:max-w-[253px]">
                    They Started Right Where <br /> You Are
                </h2>
            </div>

            {/* ── Card Grid: each column scrolls vertically, cards clip at container ── */}
            <div className="w-full max-w-[min(1320px,91vw)] h-[700px] grid grid-cols-5 gap-[20px] overflow-hidden items-stretch max-[1200px]:grid-cols-4 max-[1200px]:h-[750px] max-[900px]:grid-cols-3 max-[900px]:h-[700px] max-[600px]:max-w-[335px] max-[600px]:h-[500px] max-[600px]:grid-cols-2 max-[600px]:gap-[13px]">
                {COLUMNS.map((colIdx) => (
                    <div
                        key={colIdx}
                        ref={(el) => {
                            columnRefs.current[colIdx] = el
                        }}
                        className="flex flex-col gap-[20px] overflow-hidden min-h-0 max-[1200px]:[&:nth-child(5)]:hidden max-[900px]:[&:nth-child(n+4)]:hidden max-[600px]:[&:nth-child(n+3)]:hidden"
                    >
                        {Array.from({ length: CARDS_PER_COL }).map((_, cardIdx) => (
                            <div key={cardIdx} className="relative w-full aspect-[248/270] shrink-0 rounded-bl-[10px] rounded-br-[10px] overflow-hidden bg-[#1a1a2e] max-[600px]:aspect-[161/176] max-[600px]:rounded-bl-[6.52px] max-[600px]:rounded-br-[6.52px]">
                                <Image
                                    src="/photos/main/placement card.png"
                                    alt="Student placement"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 767px) 161px, 248px"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* ── View More Button ── */}
            <div className="flex justify-center">
                <motion.button
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
