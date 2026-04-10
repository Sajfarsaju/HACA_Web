"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { TocItem } from "@/lib/blog-types"

type Props = {
    items: TocItem[]
}

export function InThisArticle({ items }: Props) {
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <div
            className="w-full max-md:max-w-none max-w-[335px] md:max-w-full lg:max-w-[384px] flex flex-col gap-5 p-5 rounded-[20px] border border-[#232D6B] bg-[#000319]"
            style={{ fontFamily: "var(--font-manrope), var(--font-rethink-sans), sans-serif" }}
        >
            {/* Heading: "In this article" + down arrow */}
            <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2.5 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#232D6B] rounded"
                aria-expanded={isExpanded}
            >
                <span className="font-semibold text-[18px] leading-[100%] tracking-[-0.02em] text-white">
                    In this article
                </span>
                <ChevronDown
                    className={`w-3 h-3.5 text-white shrink-0 transition-transform duration-200 ${isExpanded ? "" : "-rotate-90"}`}
                    strokeWidth={2.5}
                />
            </button>

            {/* Separator line */}
            <div className="w-full h-px bg-[#A7ADBE] shrink-0" />

            {/* Points container - collapsible, 14px gap between items */}
            {isExpanded && (
                <div className="flex flex-col gap-[14px]">
                    {items.map((item) => (
                        <div key={item.number} className="flex flex-col gap-[14px]">
                            <div className="flex items-start gap-2.5">
                                <span className="font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] shrink-0">
                                    {item.number}.
                                </span>
                                <button
                                    type="button"
                                    className="font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] text-left hover:text-white/90 transition-colors"
                                    onClick={() => {
                                        if (!item.anchorId) return
                                        const el = document.getElementById(item.anchorId)
                                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                                    }}
                                >
                                    {item.label}
                                </button>
                            </div>
                            {item.subItems?.map((sub) => (
                                <div
                                    key={sub.number}
                                    className="flex items-start gap-2.5 pl-6 md:pl-7"
                                >
                                    <span className="font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] shrink-0">
                                        {sub.number}
                                    </span>
                                    <button
                                        type="button"
                                        className="font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] text-left hover:text-white/90 transition-colors"
                                        onClick={() => {
                                            if (!sub.anchorId) return
                                            const el = document.getElementById(sub.anchorId)
                                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                                        }}
                                    >
                                        {sub.label}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
