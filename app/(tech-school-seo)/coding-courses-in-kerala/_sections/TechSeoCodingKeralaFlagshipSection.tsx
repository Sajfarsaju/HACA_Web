import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HIGHLIGHTS = [
    { bold: "Learn the complete MERN Stack",              rest: " – HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB." },
    { bold: "Build AI-powered applications",              rest: " with practical AI integration techniques." },
    { bold: "Work on real-world projects",                rest: " that reflect current industry requirements." },
    { bold: "Master both frontend and backend development", rest: " in a single program." },
    { bold: "Gain hands-on experience",                   rest: " in building scalable web applications." },
    { bold: "Beginner-friendly curriculum",               rest: " designed for aspiring developers." },
    { bold: "Industry-focused training",                  rest: " aligned with modern development practices." },
    { bold: "Develop job-ready skills",                   rest: " for Full Stack and AI-powered development roles." },
] as const;

const DESCRIPTION_PARAS = [
    "Perfect for those looking for a practical Full Stack Developer Course in Kerala. Our MERN + AI Full Stack Program combines frontend, backend, database development and artificial intelligence integration into one complete learning journey.",
    "Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and AI application development while building real projects that match current industry requirements.",
    "This program is designed to transform beginners into confident developers capable of building scalable web applications and AI-powered platforms.",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FlagshipPill() {
    return (
        <>
            {/* Desktop pill */}
            <span className="hidden lg:inline-flex h-[43px] w-[216px] shrink-0 items-center gap-[10px] rounded-[20px] border border-[#00000033] bg-[#D9D9D91A] px-[10px]">
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden>
                    <path d="M6 1L0.5 8H5L4 13L9.5 6H5L6 1Z" fill="white" />
                </svg>
                <span className="font-manrope text-[16px] font-semibold leading-[16px] text-white">
                    Our Flagship Program
                </span>
            </span>
            {/* Mobile pill */}
            <span className="inline-flex h-[43px] w-[196px] shrink-0 items-center gap-[10px] rounded-[20px] border border-[#00000033] bg-[#D9D9D91A] px-[10px] lg:hidden">
                <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden>
                    <path d="M6 1L0.5 8H5L4 13L9.5 6H5L6 1Z" fill="white" />
                </svg>
                <span className="font-manrope text-[14px] font-semibold leading-[16px] text-white">
                    Our Flagship Program
                </span>
            </span>
        </>
    );
}

function BulletList({ onPurple }: { onPurple: boolean }) {
    return (
        <ul className="m-0 flex list-none flex-col gap-[12px] p-0">
            {HIGHLIGHTS.map((item) => (
                <li key={item.bold} className="flex items-start gap-[10px]">
                    <span
                        className={`mt-[6px] h-[8px] w-[8px] shrink-0 rounded-full ${
                            onPurple ? "bg-white/70" : "bg-[#6949FF]"
                        }`}
                        aria-hidden
                    />
                    <p className="m-0 font-manrope text-[14px] leading-[150%]">
                        <strong className="font-semibold text-white">{item.bold}</strong>
                        <span className={onPurple ? "text-white/70" : "text-[#C6C6C6B2]"}>{item.rest}</span>
                    </p>
                </li>
            ))}
        </ul>
    );
}

/* Purple noise card — reused for right panel (desktop) and full card (mobile) */
function PurpleCard({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`relative overflow-hidden rounded-[24px] ${className ?? ""}`}
            style={{ background: "linear-gradient(150deg, #9035FF 0%, #7020FF 55%, #5910EC 100%)" }}
        >
            {/* SVG noise grain overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
                    backgroundSize: "300px 300px",
                    mixBlendMode: "overlay" as const,
                    opacity: 0.5,
                }}
                aria-hidden
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function TechSeoCodingKeralaFlagshipSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-label="Our Flagship Program: MERN + AI Full Stack Developer Program"
        >
            {/* ══ Mobile layout ════════════════════════════════════════ */}
            <div className="flex flex-col gap-[16px] px-5 py-8 lg:hidden">
                <FlagshipPill />

                <PurpleCard>
                    <div className="flex flex-col gap-[20px] p-[20px]">
                        {/* Heading */}
                        <h2 className="m-0 font-outfit text-[20px] font-medium leading-[120%] text-white">
                            MERN + AI Full Stack Developer Program
                        </h2>

                        {/* Duration */}
                        <div className="flex w-[259px] flex-col gap-[10px]">
                            <span className="font-manrope text-[16px] font-semibold leading-[100%] text-white">
                                Duration :
                            </span>
                            <span className="font-manrope text-[14px] font-normal leading-[100%] text-white">
                                5 Months Training + 1 Month Capstone Project
                            </span>
                        </div>

                        {/* Learning Method */}
                        <div className="flex flex-col gap-[4px]">
                            <span className="font-manrope text-[16px] font-semibold leading-[110%] text-white">
                                Learning Method :
                            </span>
                            <span className="font-manrope text-[16px] font-normal leading-[140%] text-white/80">
                                Project-Based, Beginner-Friendly, Industry-Oriented
                            </span>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-[8px]">
                            {DESCRIPTION_PARAS.map((para, i) => (
                                <p
                                    key={i}
                                    className="m-0 font-manrope text-[14px] font-normal leading-[140%] text-white/60"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Bullet list */}
                        <BulletList onPurple />
                    </div>
                </PurpleCard>
            </div>

            {/* ══ Desktop layout ═══════════════════════════════════════ */}
            <div className="hidden lg:flex lg:items-stretch lg:gap-[40px] lg:px-[60px] lg:py-[50px]">
                {/* Left column */}
                <div className="flex flex-1 flex-col gap-[22px]">
                    <FlagshipPill />

                    <h2 className="m-0 w-[325px] font-manrope text-[32px] font-semibold leading-[120%] text-white">
                        MERN + AI Full Stack Developer Program
                    </h2>

                    {/* Learning Method */}
                    <p className="m-0 font-manrope text-[16px] leading-[140%]">
                        <span className="font-semibold text-white">Learning Method : </span>
                        <span className="font-normal text-[#C6C6C6B2]">
                            Project-Based &nbsp;•&nbsp; Beginner-Friendly &nbsp;•&nbsp; Industry-Oriented
                        </span>
                    </p>

                    {/* Bullet list */}
                    <BulletList onPurple={false} />
                </div>

                {/* Duration — top-right, no background */}
                <div className="flex h-[79px] w-[215px] shrink-0 flex-col gap-[10px] self-start">
                    <span className="font-manrope text-[18px] font-semibold leading-[100%] text-white">
                        Duration :
                    </span>
                    <span className="font-manrope text-[16px] font-normal leading-[100%] text-[#C6C6C6B2]">
                        5 Months Training +{" "}
                        <br />
                        1 Month Capstone Project
                    </span>
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
