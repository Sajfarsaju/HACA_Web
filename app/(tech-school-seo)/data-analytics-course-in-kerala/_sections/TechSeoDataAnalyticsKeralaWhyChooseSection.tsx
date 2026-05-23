import { TechWhyChooseCarousel } from "@/components/layout/TechWhyChoose";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "data-analytics-kerala-why-choose-heading";

export function TechSeoDataAnalyticsKeralaWhyChooseSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col items-center gap-[30px] px-4 py-5 lg:gap-[60px] lg:px-[60px] lg:py-10">
                <div className="flex w-full max-w-[343px] flex-col items-center gap-[10px] text-center lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:max-w-[705px] lg:text-[40px]"
                    >
                        Why choose HACA Tech School for Data Analytics?
                    </h2>
                    <p className="m-0 w-full font-manrope text-sm font-normal leading-[120%] tracking-[-0.2px] text-[#C6C6C6B2] lg:text-lg lg:leading-[33.6px]">
                        Learn Python, SQL, Power BI, Tableau, and AI-driven analytics through hands-on
                        projects, expert mentorship, and a curriculum designed to make you job-ready across
                        Kerala.
                    </p>
                </div>

                <TechWhyChooseCarousel className="w-full" />

                <TechSeoSectionBottomRule inset />
            </div>
        </section>
    );
}
