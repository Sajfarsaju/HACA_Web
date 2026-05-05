"use client"

import React, { useEffect, useRef } from "react"
import { useScroll, useSpring, useTransform } from "framer-motion"

export function MarketingCoursesAndMentorsWrapper({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    const progress  = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    // black → white, stays white
    const bgColor   = useTransform(progress, [0, 0.3, 1], ["#000000", "#FFFFFF", "#FFFFFF"])
    const textColor = useTransform(progress, [0, 0.3, 1], ["#FFFFFF", "#000000", "#000000"])

    useEffect(() => {
        const node = ref.current
        if (!node) return
        node.style.setProperty("--cm-bg",   bgColor.get())
        node.style.setProperty("--cm-text", textColor.get())
        const unsubBg  = bgColor.on("change",   v => node.style.setProperty("--cm-bg",   v))
        const unsubTxt = textColor.on("change", v => node.style.setProperty("--cm-text", v))
        return () => { unsubBg(); unsubTxt() }
    }, [bgColor, textColor])

    return (
        <div
            ref={ref}
            style={{
                ["--cm-bg" as string]:   "#000000",
                ["--cm-text" as string]: "#ffffff",
                backgroundColor: "var(--cm-bg)",
            }}
        >
            {children}
        </div>
    )
}
