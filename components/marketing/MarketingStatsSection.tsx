"use client"

import React, { useEffect, useRef, useState } from "react"

const RAW_STATS = [
    { value: 600, suffix: "+", label: "Successful\nStudents &\nCounting" },
    { value: 350, suffix: "+", label: "Hours of\nHands-On\nLearning" },
    { value: 150, suffix: "+", label: "Expert\nMentors\nGuiding You" },
    { value: 200, suffix: "+", label: "Partner\nCompanies\nfor Careers" },
]

export function MarketingStatsSection() {
    const [progress, setProgress] = useState(0) // 0 → 1
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!sectionRef.current || hasAnimated) return

        const el = sectionRef.current

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return

                let frameId: number
                const duration = 1200 // ms
                const start = performance.now()

                const tick = (now: number) => {
                    const elapsed = now - start
                    const t = Math.min(1, elapsed / duration)
                    const eased = 1 - Math.pow(1 - t, 3)
                    setProgress(eased)

                    if (t < 1) {
                        frameId = requestAnimationFrame(tick)
                    } else {
                        setHasAnimated(true)
                    }
                }

                frameId = requestAnimationFrame(tick)
                observer.disconnect()

                return () => {
                    if (frameId) cancelAnimationFrame(frameId)
                }
            },
            { threshold: 0.25 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [hasAnimated])

    return (
        <section ref={sectionRef} className="w-full bg-black">
            <style jsx>{`
                .stat-label {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 120%;
                    letter-spacing: 0%;
                    color: #8a8a8a;
                    width: 66px;
                    height: 51px;
                    opacity: 1;
                    display: flex;
                    align-items: center;
                }
            `}</style>
            <div className="w-full max-w-[1320px] mx-auto px-[clamp(16px,4.16vw,60px)] py-[clamp(28px,3.5vw,44px)]">
                {/* Desktop */}
                <div className="hidden md:flex w-full items-center justify-between gap-[clamp(18px,3vw,42px)]">
                    {RAW_STATS.map((stat) => {
                        const current = Math.round(stat.value * progress)
                        return (
                            <div
                                key={stat.label}
                                className="flex items-center gap-[clamp(10px,1.2vw,16px)]"
                            >
                                <div className="flex items-baseline">
                                    <span className="font-rethink font-semibold text-white text-[clamp(44px,4.6vw,66px)] leading-[1]">
                                        {current}
                                    </span>
                                    <span className="font-rethink font-semibold text-[#015AFF] text-[clamp(44px,4.6vw,66px)] leading-[1] ml-[6px]">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <span className="stat-label whitespace-pre-line">
                                    {stat.label}
                                </span>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile */}
                <div className="md:hidden w-full max-w-[343px] mx-auto grid grid-cols-2 gap-x-[22px] gap-y-[38px]">
                    {RAW_STATS.map((stat, index) => {
                        const current = Math.round(stat.value * progress)
                        const align =
                            index === 1 || index === 3 ? "justify-self-end text-right" : "justify-self-start text-left"

                        return (
                            <div key={stat.label} className={`flex flex-col ${align}`}>
                                <div className="flex items-baseline">
                                    <span className="font-rethink font-semibold text-white text-[64px] leading-[1]">
                                        {current}
                                    </span>
                                    <span className="font-rethink font-semibold text-[#015AFF] text-[64px] leading-[1] ml-[6px]">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <span className="stat-label whitespace-pre-line mt-[10px]">
                                    {stat.label}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

