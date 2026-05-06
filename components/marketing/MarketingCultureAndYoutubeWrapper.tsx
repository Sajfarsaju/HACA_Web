"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

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
    }, [isLight])

    return (
        <motion.div
            ref={ref}
            animate={{ backgroundColor: isLight ? "#FFFFFF" : "#000000" }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ ["--cy-text" as string]: "#FFFFFF" }}
        >
            {children}
        </motion.div>
    )
}
