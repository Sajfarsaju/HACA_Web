import { Fragment } from "react";

import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const STATS = [
    { id: "hours",    count: "600+", label: "Hours Live Training" },
    { id: "projects", count: "10+",  label: "Industry Projects" },
    { id: "learners", count: "100+", label: "Learners Trained" },
] as const;

export function TechSeoCodingKeralaIntroStatsSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-labelledby="coding-kerala-intro-heading"
        >
            <div className="flex flex-col items-center gap-[30px] px-5 py-10 lg:gap-[60px] lg:px-[60px] lg:py-[50px]">

                {/* ── Stats ───────────────────────────────────────────── */}

                {/* Mobile: single centered column */}
                <div className="flex flex-col items-center gap-5 lg:hidden">
                    {STATS.map((stat, index) => (
                        <Fragment key={stat.id}>
                            {index > 0 && (
                                <span
                                    className="h-[14px] w-[14px] shrink-0 rounded-full bg-[#321362]"
                                    aria-hidden
                                />
                            )}
                            <div className="flex w-[149px] flex-col items-center gap-[5px]">
                                <span className="text-center font-manrope text-[14px] font-normal leading-[28px] text-[#C6C6C6B2]">
                                    {stat.label}
                                </span>
                                <span className="text-center font-manrope text-[50px] font-semibold leading-[120%] text-white">
                                    {stat.count}
                                </span>
                            </div>
                        </Fragment>
                    ))}
                </div>

                {/* Desktop: horizontal row, space-between */}
                <div className="hidden w-full items-center justify-between lg:flex">
                    {STATS.map((stat, index) => (
                        <Fragment key={stat.id}>
                            {index > 0 && (
                                <span
                                    className="h-[16px] w-[16px] shrink-0 rounded-full bg-[#321362]"
                                    aria-hidden
                                />
                            )}
                            <div className="flex h-[110px] w-[149px] flex-col items-center justify-center gap-[10px]">
                                <span className="text-center font-manrope text-[14px] font-normal leading-[28px] text-[#C6C6C6B2]">
                                    {stat.label}
                                </span>
                                <span className="text-center font-manrope text-[60px] font-semibold leading-[120%] text-white">
                                    {stat.count}
                                </span>
                            </div>
                        </Fragment>
                    ))}
                </div>

                {/* ── Heading + description ─────────────────────────── */}
                <div className="flex w-full max-w-[918px] flex-col items-center gap-5">

                    <h2
                        id="coding-kerala-intro-heading"
                        className="m-0 w-full max-w-[313px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[878px] lg:text-[50px]"
                    >
                        Start Your Tech Career with HACA&apos;s Practical Coding Courses in Kerala
                    </h2>

                    <div className="flex w-full max-w-[343px] flex-col gap-3 lg:max-w-[668px]">
                        <p className="m-0 text-center font-manrope text-[14px] font-normal leading-[120%] text-[#C6C6C6B2]">
                            At Tech School, we help students become industry-ready developers through
                            project-based AI-integrated coding courses in Kerala. Whether you are a
                            beginner, graduate, working professional, freelancer, or entrepreneur, our
                            programs are designed to help you learn modern technologies through
                            practical implementation.
                        </p>
                        <p className="m-0 text-center font-manrope text-[14px] font-normal leading-[120%] text-[#C6C6C6B2]">
                            Learn from one of Kerala&apos;s leading software training institutes and
                            master full-stack development, AI application building, backend systems,
                            mobile apps, data analytics and automation tools.
                        </p>
                    </div>
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
