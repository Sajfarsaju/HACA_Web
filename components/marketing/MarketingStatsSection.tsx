"use client"

import React, { useEffect, useRef, useState } from "react"

const RAW_STATS = [
    { value: 350, suffix: "+", lines: ["Hours of", "Hands-On", "Learning"] },
    { value: 5000, suffix: "+", lines: ["Successful", "Students &", "Counting"] },
    { value: 200, suffix: "+", lines: ["Partner", "Companies", "for Careers"] },
    { value: 150, suffix: "+", lines: ["Expert", "Mentors", "Guiding You"] },
]

export function MarketingStatsSection() {
    const [progress, setProgress] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!sectionRef.current || hasAnimated) return

        const el = sectionRef.current

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return

                let frameId: number
                const duration = 1200
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
        <section ref={sectionRef} className="w-full bg-transparent">
            <style>{`
                .stat-number,
                .stat-plus {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 500;
                    font-style: normal;
                    font-size: 68px;
                    line-height: 100%;
                    letter-spacing: 0%;
                    opacity: 1;
                }

                .stat-number {
                    color: var(--impact-text, #ffffff);
                }

                .stat-plus {
                    color: #015aff;
                }

                .stat-label {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: clamp(12px, 1.1vw, 14px);
                    line-height: 120%;
                    letter-spacing: 0%;
                    color: #8a8a8a;
                    width: clamp(66px, 8vw, 92px);
                    height: calc(3 * 1.2em);
                    opacity: 1;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .mobile-stat-num,
                .mobile-stat-plus {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 500;
                    font-style: normal;
                    font-size: 40px;
                    line-height: 100%;
                    letter-spacing: 0%;
                }
                .mobile-stat-num {
                    color: var(--impact-text, #ffffff);
                }
                .mobile-stat-plus {
                    color: #015aff;
                    margin-left: 4px;
                }
                .mobile-stat-label {
                    font-family: "Satoshi", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 14px;
                    line-height: 120%;
                    letter-spacing: 0%;
                    color: #8a8a8a;
                    width: 74.101px;
                    height: 51px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    white-space: nowrap;
                    overflow: hidden;
                }
            `}</style>
            <div className="mx-auto w-full max-w-[1320px] px-0 py-[clamp(16px,2.5vw,32px)]">
                {/* Desktop: single row only (md+) */}
                <div className="hidden w-full items-center justify-between gap-[clamp(18px,3vw,42px)] md:flex">
                    {RAW_STATS.map((stat) => {
                        const current = Math.round(stat.value * progress)
                        return (
                            <div
                                key={stat.lines.join("|")}
                                className="flex items-center gap-[clamp(10px,1.2vw,16px)]"
                            >
                                <div className="flex items-baseline">
                                    <span className="stat-number">
                                        {current}
                                    </span>
                                    <span className="stat-plus ml-[6px]">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <span className="stat-label">
                                    {stat.lines.map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < stat.lines.length - 1 ? <br /> : null}
                                        </React.Fragment>
                                    ))}
                                </span>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile only */}
                <div className="mobile-stats md:hidden mx-auto flex w-full min-w-0 max-w-[min(300px,100%)] min-h-0 flex-col gap-5 opacity-100">
                    {RAW_STATS.map((stat, index) => {
                        const current = Math.round(stat.value * progress)
                        const rowAlign =
                            index === 1 || index === 3
                                ? "flex w-full shrink-0 flex-row items-center justify-end gap-[10px]"
                                : "flex w-full shrink-0 flex-row items-center justify-start gap-[10px]"

                        return (
                            <div key={stat.lines.join("|")} className={`${rowAlign} min-w-0`}>
                                <div className="flex h-[48px] w-[min(100px,28vw)] shrink-0 flex-row flex-nowrap items-center justify-start">
                                    <span className="mobile-stat-num !text-[clamp(1.75rem,8vw,2.375rem)] !leading-none">
                                        {current}
                                    </span>
                                    <span className="mobile-stat-plus !text-[clamp(1.75rem,8vw,2.375rem)] !leading-none">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <span className="mobile-stat-label">
                                    {stat.lines.map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < stat.lines.length - 1 ? <br /> : null}
                                        </React.Fragment>
                                    ))}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
