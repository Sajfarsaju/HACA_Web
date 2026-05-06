"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function MarketingTestimonialsAndFaqWrapper({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const [isDark, setIsDark] = useState(false)
    useMotionValueEvent(scrollYProgress, "change", (v) => setIsDark(v > 0.08))

    useEffect(() => {
        const node = ref.current
        if (!node) return
        node.style.setProperty("--tf-bg",         isDark ? "#000000" : "#FFFFFF")
        node.style.setProperty("--tf-text",        isDark ? "#FFFFFF" : "#000000")
        node.style.setProperty("--tf-text-muted",  isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)")
        node.style.setProperty("--tf-border",      isDark ? "#FFFFFF" : "#000000")
    }, [isDark])

    return (
        <motion.div
            ref={ref}
            animate={{ backgroundColor: isDark ? "#000000" : "#FFFFFF" }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
                ["--tf-bg" as string]:        "#FFFFFF",
                ["--tf-text" as string]:      "#000000",
                ["--tf-text-muted" as string]:"rgba(0,0,0,0.7)",
                ["--tf-border" as string]:    "#000000",
            }}
        >
            {children}
        </motion.div>
    )
}
