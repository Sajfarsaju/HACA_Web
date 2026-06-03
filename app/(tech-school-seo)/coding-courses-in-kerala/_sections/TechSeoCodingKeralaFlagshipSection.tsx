import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-flagship-heading";

const PROGRAM_HIGHLIGHTS = [
    "Learn the complete MERN Stack – HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
    "Build AI-powered applications with practical AI integration techniques.",
    "Work on real-world projects that reflect current industry requirements.",
    "Master both frontend and backend development in a single program.",
    "Gain hands-on experience in building scalable web applications.",
    "Beginner-friendly curriculum designed for aspiring developers.",
    "Industry-focused training aligned with modern development practices.",
    "Develop job-ready skills for Full Stack and AI-powered development roles.",
] as const;

export function TechSeoCodingKeralaFlagshipSection() {
    return (
        <section
            className="mx-auto box-border w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-4 py-5 lg:gap-[40px] lg:px-[60px] lg:py-10">
                <div className="flex w-full flex-col gap-2.5">
                    <p className="m-0 font-manrope text-sm font-semibold uppercase tracking-[0.1em] text-[#6949FF] lg:text-base">
                        Our Flagship Program
                    </p>
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:max-w-[800px] lg:text-[40px]"
                    >
                        MERN + AI Full Stack Developer Program
                    </h2>
                    <div className="mt-1 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6949FF40] bg-[#6949FF1A] px-4 py-1.5 font-manrope text-[13px] font-medium text-[#A78BFF] lg:text-[14px]">
                            6 Months (5 Months Training + 1 Month Capstone)
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFFFFF20] bg-[#FFFFFF0D] px-4 py-1.5 font-manrope text-[13px] font-medium text-[#C6C6C6B2] lg:text-[14px]">
                            Project-Based &nbsp;·&nbsp; Beginner-Friendly &nbsp;·&nbsp; Industry-Oriented
                        </span>
                    </div>
                </div>

                <div
                    className="relative box-border w-full overflow-hidden rounded-[22px] p-5 shadow-[0px_4px_4px_0px_#00000040] lg:p-[40px]"
                    style={{
                        background: "linear-gradient(135deg, #100430 0%, #0a0220 50%, #000010 100%)",
                        border: "1px solid rgba(105,73,255,0.25)",
                    }}
                >
                    <span
                        className="pointer-events-none absolute -bottom-24 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-30"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(105,73,255,0.5) 0%, transparent 70%)",
                        }}
                        aria-hidden
                    />

                    <ul className="relative z-[1] m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:gap-4">
                        {PROGRAM_HIGHLIGHTS.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span
                                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6949FF]"
                                    aria-hidden
                                >
                                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="font-manrope text-[13px] font-medium leading-[140%] text-[#C6C6C6B2] lg:text-[15px]">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
