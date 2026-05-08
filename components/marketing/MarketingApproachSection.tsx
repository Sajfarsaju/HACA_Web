"use client"

import React from "react"
import { MarketingFeaturesGrid } from "@/components/marketing/MarketingFeaturesGrid"

export function MarketingApproachSection() {
    return (
        <div
            className="box-border w-full min-w-0 max-w-full overflow-x-hidden opacity-100
                        px-4 md:px-[clamp(24px,5vw,48px)] lg:px-[clamp(16px,3.5vw,48px)] xl:px-[60px]"
            role="region"
            aria-labelledby="marketing-approach-title"
        >
            <div className="w-full pt-[clamp(12px,2vw,24px)] pb-[clamp(16px,2.5vw,36px)]">
                <div className="box-border mx-auto w-full min-w-0 max-w-[1320px] px-0">
                    {/* [1fr label | 3fr heading] — heading on the right ¾, guaranteed 2 lines */}
                    <div
                        className="
                            flex w-full flex-col gap-[clamp(16px,3vw,28px)]
                            max-w-full
                            sm:max-w-[min(100%,480px)] lg:mx-0 lg:max-w-none
                            lg:grid lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-x-[40px] lg:gap-y-0
                        "
                    >
                        {/* Col 1 (1fr): label */}
                        <div className="flex min-h-[28px] w-auto max-w-full shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] self-start lg:min-h-[34px] lg:pt-1">
                            <span
                                className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#015AFF] lg:h-3 lg:w-3"
                                aria-hidden
                            />
                            <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.8vw,18px)] lg:text-[16px] font-medium leading-none tracking-normal text-white">
                                Our Approach
                            </p>
                        </div>

                        {/* Col 2 (3fr): heading on the right */}
                        <h2
                            id="marketing-approach-title"
                            className="
                                w-full min-w-0 max-w-full text-left
                                min-h-0 pb-1
                                font-semibold tracking-normal [font-family:'Darker_Grotesque',sans-serif]
                                text-[clamp(1.625rem,5.8vw,2.25rem)] leading-[95%]
                                lg:max-w-none lg:pb-0 lg:text-[clamp(34px,3.4vw,50px)] lg:leading-[115%]
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
