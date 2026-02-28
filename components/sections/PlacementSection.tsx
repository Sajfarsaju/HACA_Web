"use client"

import React from "react"
import Image from "next/image"

// 5 columns on desktop, 2 on mobile
// Each column has 3 stacked cards
const COLUMNS = [0, 1, 2, 3, 4]
const CARDS_PER_COL = 3

export function PlacementSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[1074px] mx-auto pt-[84px] px-[60px] pb-[32px] flex flex-col items-center gap-[36px] opacity-100 overflow-hidden max-[600px]:max-w-full max-[600px]:min-h-[666px] max-[600px]:p-[20px] max-[600px]:gap-[26px]">
            {/* ── Header: Badge + Heading ── */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[20px] max-[600px]:max-w-[335px] max-[600px]:gap-[7.97px]">
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

            {/* ── Card Grid ── */}
            <div className="w-full max-w-[1320px] max-h-[700px] grid grid-cols-5 gap-[20px] overflow-hidden items-start max-[1200px]:grid-cols-4 max-[1200px]:max-h-[750px] max-[900px]:grid-cols-3 max-[900px]:max-h-full max-[600px]:max-w-[335px] max-[600px]:max-h-[500px] max-[600px]:grid-cols-2 max-[600px]:gap-[13px]">
                {COLUMNS.map((colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-[20px] [&:nth-child(even)]:-mt-[30px] max-[1200px]:[&:nth-child(5)]:hidden max-[900px]:[&:nth-child(n+4)]:hidden max-[900px]:[&:nth-child(even)]:-mt-[25px] max-[600px]:[&:nth-child(n+3)]:hidden max-[600px]:[&:nth-child(even)]:-mt-[20px]">
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
                <button className="w-[227px] h-[55px] p-0 rounded-[100px] border-none bg-transparent cursor-pointer flex items-center justify-center max-[600px]:w-[182px] max-[600px]:h-[46px] max-[600px]:rounded-[82px]">
                    <Image
                        src="/photos/main/view more placement.svg"
                        alt="View more placements"
                        width={227}
                        height={55}
                        className="w-full h-full object-contain"
                    />
                </button>
            </div>
        </section>
    )
}
