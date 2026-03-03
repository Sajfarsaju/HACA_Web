"use client"

import React from "react"

export function StatsSection() {
    const stats = [
        { number: "15+", label: "Professional Courses" },
        { number: "150+", label: "Expert Mentors" },
        { number: "200+", label: "Placement Partners" },
        { number: "1000+", label: "Placements" },
    ]

    return (
        <section className="w-full max-w-[min(1100px,76vw)] mx-auto p-[clamp(35px,5vw,60px)] flex justify-center items-center max-md:max-w-full max-md:py-[35px] max-md:px-[20px]">
            <div className="w-full flex flex-row justify-center items-center gap-[clamp(30px,4vw,51px)] relative opacity-100 flex-nowrap max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:justify-items-center max-[900px]:items-center max-[900px]:gap-y-[40px] max-[900px]:gap-x-[20px] max-[900px]:w-[95%]">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center text-center min-w-[clamp(100px,15vw,200px)] max-md:items-start max-md:text-left max-md:min-w-unset max-md:w-full max-md:max-w-[120px] [&:nth-of-type(even)]:max-md:ml-[30px]">
                            <span className="font-rethink font-semibold text-[clamp(30px,4.5vw,58px)] leading-[110%] text-white block">
                                {stat.number}
                            </span>
                            <span className="font-rethink font-semibold text-[clamp(14px,2vw,18px)] leading-[110%] text-[#A7ADBE] whitespace-pre-line block mt-[5px]">
                                {stat.label}
                            </span>
                        </div>
                        {/* Desktop: vertical line between items */}
                        {index < stats.length - 1 && (
                            <div className="shrink-0 w-[1px] h-[43px] bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] rounded-[100px] opacity-100 max-[900px]:hidden" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
                {/* Mobile: plus crosshair at 2×2 grid junction */}
                <div className="hidden max-[900px]:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[41px] h-[41px] items-center justify-center pointer-events-none z-[1]" aria-hidden="true">
                    <div className="absolute w-[0.68px] h-[70.955px] bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] rounded-[68.26px] opacity-100" />
                    <div className="absolute w-[70.955px] h-[0.68px] bg-[linear-gradient(90deg,#4C75FF_0%,#1A4FFF_100%)] rounded-[68.26px] opacity-100" />
                </div>
            </div>
        </section>
    )
}
