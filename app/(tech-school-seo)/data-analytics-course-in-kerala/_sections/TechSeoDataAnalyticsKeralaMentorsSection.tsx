"use client";

import { TechMentorsCarousel } from "@/components/layout/TechMentorsCarousel";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "data-analytics-kerala-mentors-heading";

export function TechSeoDataAnalyticsKeralaMentorsSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col items-center gap-[30px] px-4 py-5 lg:gap-[60px] lg:px-[60px] lg:py-10">
                <div className="flex w-full flex-col items-center gap-5 text-center lg:max-w-[1349px] lg:gap-6">
                    <h2
                        id={HEADING_ID}
                        className="m-0 font-manrope text-[26px] font-semibold leading-[62px] tracking-[-0.02em] text-white lg:text-[40px]"
                    >
                        Your Mentors
                    </h2>
                    <p className="m-0 w-full max-w-[343px] font-manrope text-sm font-normal leading-[120%] tracking-[-0.2px] text-[#C6C6C6B2] lg:max-w-[1349px] lg:text-lg lg:leading-[33.6px]">
                        You&apos;ll learn from people who&apos;ve built products, written code, and solved
                        real problems.
                    </p>
                </div>

                <TechMentorsCarousel
                    className="w-full"
                    showBackgroundEffects={false}
                    showNavigation={false}
                    autoAdvanceMs={4000}
                />

                <TechSeoSectionBottomRule inset />
            </div>
        </section>
    );
}
