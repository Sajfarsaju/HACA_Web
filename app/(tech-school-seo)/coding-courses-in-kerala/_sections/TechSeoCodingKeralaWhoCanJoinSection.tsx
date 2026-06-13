import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-who-join-heading";

const WHO_CAN_JOIN = [
    "Beginners with basic knowledge of HTML, CSS, and JavaScript",
    "Fresh graduates seeking industry-ready skills",
    "Self-taught developers aiming to upgrade to full-stack",
    "Developers who want to integrate AI into web applications",
    "Students preparing for job roles, internships, and freelancing",
] as const;

export function TechSeoCodingKeralaWhoCanJoinSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-labelledby={HEADING_ID}
        >
            <div className="flex flex-col items-center gap-[30px] px-5 py-10 lg:gap-[40px] lg:px-[60px] lg:py-[60px]">

                <h2
                    id={HEADING_ID}
                    className="m-0 text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:text-[40px]"
                >
                    Who Can Join?
                </h2>

                {/* Mobile: stacked column */}
                <div className="flex w-full flex-col gap-[12px] lg:hidden">
                    {WHO_CAN_JOIN.map((label) => (
                        <div
                            key={label}
                            className="flex w-full items-center gap-[14px] rounded-[14px] px-5 py-4"
                            style={{
                                backgroundColor: "#11062D",
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.35)",
                            }}
                        >
                            <span
                                className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#6949FF]"
                                aria-hidden
                            />
                            <span className="font-manrope text-[15px] font-medium leading-[140%] text-white">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Desktop: flex-wrap centered */}
                <div className="hidden w-full flex-wrap justify-center gap-[14px] lg:flex">
                    {WHO_CAN_JOIN.map((label) => (
                        <div
                            key={label}
                            className="flex items-center gap-[12px] rounded-[14px] px-5 py-4"
                            style={{
                                backgroundColor: "#11062D",
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.35)",
                            }}
                        >
                            <span
                                className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#6949FF]"
                                aria-hidden
                            />
                            <span className="font-manrope text-[16px] font-medium leading-[140%] text-white">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
