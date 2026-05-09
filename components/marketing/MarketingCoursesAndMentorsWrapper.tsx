"use client"

import React, { useEffect, useRef, useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"

export function MarketingCoursesAndMentorsWrapper({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const [isLight, setIsLight] = useState(false)
    useMotionValueEvent(scrollYProgress, "change", (v) => setIsLight(v > 0.08))

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark: !isLight } }))
    }, [isLight])

    return (
        <div
            ref={ref}
        >
            {children}
        </div>
    )
}
