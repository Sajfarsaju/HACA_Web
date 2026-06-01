"use client";

import { TechYoutubeCarousel } from "@/components/layout/TechYoutubeCarousel";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "python-calicut-learners-heading";

const LEARNERS_DESCRIPTION =
    "HACA Python course students and graduates share real stories about projects, mentorship, and building job-ready full-stack development skills in Calicut.";

export function TechSeoPythonCalicutLearnersSection() {
    return (
        <section
            className="w-full overflow-visible bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="flex w-full flex-col gap-[30px] py-5 lg:gap-[60px] lg:py-10">
                <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 text-center lg:max-w-[1029px] lg:gap-6 lg:px-[60px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:text-[40px]"
                    >
                        See What Our Learners Have to Say
                    </h2>
                    <p className="m-0 w-full max-w-[343px] font-manrope text-sm font-normal leading-[140%] tracking-[-0.2px] text-[#C6C6C6B2] lg:max-w-[1029px] lg:text-lg lg:leading-[33.6px]">
                        {LEARNERS_DESCRIPTION}
                    </p>
                </div>

                <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
                    <TechYoutubeCarousel
                        variant="seo"
                        showSideGradients
                        fullWidthStage
                        className="w-full"
                    />
                </div>

                <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[60px]">
                    <TechSeoSectionBottomRule inset />
                </div>
            </div>
        </section>
    );
}
