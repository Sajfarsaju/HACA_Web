"use client"

import React from "react"
import { MarketingFeaturesGrid } from "@/components/marketing/MarketingFeaturesGrid"

/**
 * Sits directly under stats (same column as the play-video block).
 * Horizontal inset comes from `.content-container` in MarketingImpactSection; no extra px here.
 */
export function MarketingApproachSection() {
    return (
        <div
            className="box-border w-full min-w-0 max-w-full overflow-x-hidden px-0 opacity-100"
            role="region"
            aria-labelledby="marketing-approach-title"
        >
            <div className="w-full pt-[clamp(12px,2vw,24px)] pb-[clamp(16px,2.5vw,36px)]">
                <div className="box-border mx-auto w-full min-w-0 max-w-[1320px] px-0">
                    {/* Desktop: same 4-col + 40px gutter as feature grid — heading starts at column 3 */}
                    <div
                        className="
                            mx-auto flex w-full max-w-[min(345px,100%)] flex-col gap-[clamp(16px,3vw,28px)]
                            sm:max-w-[min(100%,480px)] lg:mx-0 lg:max-w-none
                            lg:grid lg:grid-cols-4 lg:items-start lg:gap-x-[40px] lg:gap-y-0
                        "
                    >
                        {/* Col 1: Ellipse + Our Approach */}
                        <div className="flex min-h-[28px] w-auto max-w-full shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] self-start lg:col-span-1 lg:min-h-[34px] lg:pt-1">
                            <span
                                className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#015AFF] lg:h-3 lg:w-3"
                                aria-hidden
                            />
                            <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.8vw,18px)] font-medium leading-none tracking-normal text-white">
                                Our Approach
                            </p>
                        </div>

                        {/* Col 2: spacer — aligns grid with feature columns below */}
                        <div className="hidden min-h-0 min-w-0 lg:col-span-1 lg:block" aria-hidden />

                        {/* Cols 3–4: main title (matches screenshot: left edge = column 3) */}
                        <h2
                            id="marketing-approach-title"
                            className="
                                w-full min-w-0 max-w-full text-left
                                min-h-0 pb-1
                                font-semibold tracking-normal text-white
                                [font-family:'Darker_Grotesque',sans-serif]
                                text-[clamp(1.625rem,5.8vw,2.25rem)] leading-[95%]
                                lg:col-span-2 lg:max-w-none lg:min-h-[114px] lg:pb-0 lg:text-[50px] lg:leading-[115%]
                            "
                        >
                            <span className="block lg:hidden">
                                Why Marketing School
                                <br />
                                Feels Like the Right
                                <br />
                                Decision
                            </span>
                            <span className="hidden lg:block">
                                Why Marketing School Feels Like
                                <br />
                                the Right Decision
                            </span>
                        </h2>
                    </div>

                    <div className="mt-[clamp(28px,4.5vw,48px)] w-full min-w-0">
                        <MarketingFeaturesGrid />
                    </div>
                </div>
            </div>
        </div>
    )
}
