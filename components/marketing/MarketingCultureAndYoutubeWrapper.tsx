"use client"

import React, { useEffect, useRef, useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"

export function MarketingCultureAndYoutubeWrapper({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const [isLight, setIsLight] = useState(false)
    useMotionValueEvent(scrollYProgress, "change", (v) => setIsLight(v > 0.08))

    useEffect(() => {
        const node = ref.current
        if (!node) return
        node.style.setProperty("--cy-text", isLight ? "#000000" : "#FFFFFF")
        window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark: !isLight } }))
    }, [isLight])

    return (
        <div
            ref={ref}
            style={{ ["--cy-text" as string]: "#FFFFFF" }}
        >
            {children}
        </div>
    )
}
