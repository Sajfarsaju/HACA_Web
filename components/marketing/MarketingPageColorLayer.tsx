"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function MarketingPageColorLayer({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: Event) => {
            const { isDark: d } = (e as CustomEvent<{ isDark: boolean }>).detail
            setIsDark(d)
        }
        window.addEventListener("marketing-page-color", handler)
        return () => window.removeEventListener("marketing-page-color", handler)
    }, [])

    useEffect(() => {
        const node = ref.current
        if (!node) return
        node.style.setProperty("--mp-text", isDark ? "#ffffff" : "#000000")
    }, [isDark])

    return (
        <motion.div
            ref={ref}
            animate={{
                backgroundColor: isDark ? "#000000" : "#ffffff",
                color: isDark ? "#ffffff" : "#000000",
            }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ ["--mp-text" as string]: "#000000" }}
        >
            {children}
        </motion.div>
    )
}
