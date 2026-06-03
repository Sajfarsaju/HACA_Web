"use client";

import { useState } from "react";

import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

type LearnModule = {
    id: string;
    moduleLabel: string;
    shortTitle: string;
    description: string;
    topicsLabel: string;
    bullets: readonly string[];
    variant?: "default" | "capstone";
};

const LEARN_MODULES: readonly LearnModule[] = [
    {
        id: "module-1",
        moduleLabel: "Module 1",
        shortTitle: "Frontend Development",
        description: "Build responsive user interfaces that look and perform like real production applications.",
        topicsLabel: "Topics include:",
        bullets: [
            "HTML5 and CSS3",
            "Responsive Design",
            "JavaScript ES6+",
            "React JS",
            "Redux and Context API",
            "Tailwind CSS",
            "Modern UI Architecture",
        ],
    },
    {
        id: "module-2",
        moduleLabel: "Module 2",
        shortTitle: "Backend Development",
        description: "Learn how real backend systems are built and deployed.",
        topicsLabel: "Topics include:",
        bullets: [
            "Node.js Fundamentals",
            "Express.js Framework",
            "REST API Development",
            "Authentication Systems",
            "JWT Security",
            "Payment Integration",
            "Middleware Architecture",
        ],
    },
    {
        id: "module-3",
        moduleLabel: "Module 3",
        shortTitle: "Database Development",
        description: "Understand how large scale applications manage and process data.",
        topicsLabel: "Topics include:",
        bullets: [
            "MongoDB",
            "Mongoose",
            "Schema Design",
            "Relationships",
            "Aggregations",
            "Database Optimization",
        ],
    },
    {
        id: "module-4",
        moduleLabel: "Module 4",
        shortTitle: "AI Integration",
        description: "Move beyond traditional coding and create AI powered products.",
        topicsLabel: "Topics include:",
        bullets: [
            "AI Fundamentals",
            "Large Language Models",
            "Prompt Engineering",
            "Gemini API Integration",
            "AI Chatbot Development",
            "Smart Search Systems",
            "Admin Workflow Automation",
        ],
    },
    {
        id: "capstone",
        moduleLabel: "Capstone",
        shortTitle: "Capstone Project",
        description: "Build a complete MERN + AI application and showcase your skills to employers.",
        topicsLabel: "You will:",
        bullets: [
            "Build a complete MERN stack application",
            "Integrate AI features using Gemini API",
            "Deploy the full application online",
            "Build a portfolio-ready project",
            "Demonstrate end-to-end development skills",
        ],
        variant: "capstone",
    },
];

function ChevronDown({ open }: { open: boolean }) {
    return (
        <svg
            className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const PANEL_STYLE = {
    backgroundColor: "rgba(217,217,217,0.1)",
    boxShadow: "0px 3.11px 3.11px 0px #00000040",
    backdropFilter: "blur(9.33px)",
} as const;

function ModuleAccordion({
    module,
    open,
    onToggle,
    idPrefix = "",
}: {
    module: LearnModule;
    open: boolean;
    onToggle: () => void;
    idPrefix?: string;
}) {
    const panelId = `${idPrefix}${module.id}-panel`;
    const btnId = `${idPrefix}${module.id}-btn`;

    return (
        <div className="w-full min-w-0">
            <div className="flex w-full flex-col">
                <div
                    className="flex h-10 w-[85px] shrink-0 items-center px-[10px]"
                    style={{ backgroundColor: "#321362", borderTopRightRadius: "10px" }}
                >
                    <span
                        className="whitespace-nowrap text-[16px] font-medium leading-[125%] text-white"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        {module.moduleLabel}
                    </span>
                </div>

                <button
                    id={btnId}
                    type="button"
                    onClick={onToggle}
                    className="flex h-10 w-full items-center justify-between gap-2 px-[10px] text-left text-white"
                    style={{
                        ...PANEL_STYLE,
                        borderTopRightRadius: "16px",
                        borderBottomRightRadius: "16px",
                        borderBottomLeftRadius: "16px",
                    }}
                    aria-expanded={open}
                    aria-controls={panelId}
                >
                    <span
                        className="min-w-0 truncate text-[16px] font-medium leading-[125%]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        {module.shortTitle}
                    </span>
                    <ChevronDown open={open} />
                </button>
            </div>

            <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <div
                        className="mt-1.5 rounded-[12px] p-4"
                        style={PANEL_STYLE}
                    >
                        <div className="flex flex-col gap-2.5">
                            <p
                                className="m-0 text-[14px] font-normal leading-[140%] text-[#FFFFFFB2]"
                                style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                                {module.description}
                            </p>
                            <p
                                className="m-0 text-[14px] font-semibold leading-[120%] text-[#FFFFFFB2]"
                                style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                                {module.topicsLabel}
                            </p>
                            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                                {module.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="m-0 text-[14px] font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                                        style={{ fontFamily: "Satoshi, sans-serif" }}
                                    >
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModuleGroup({
    modules,
    gap,
    className = "",
    idPrefix = "",
}: {
    modules: LearnModule[];
    gap: string;
    className?: string;
    idPrefix?: string;
}) {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <div className={`flex flex-col ${gap} ${className}`}>
            {modules.map((m) => (
                <ModuleAccordion
                    key={m.id}
                    module={m}
                    open={openId === m.id}
                    onToggle={() => setOpenId((prev) => (prev === m.id ? null : m.id))}
                    idPrefix={idPrefix}
                />
            ))}
        </div>
    );
}

function CapstoneCard({ module }: { module: LearnModule }) {
    return (
        <article
            className="relative flex min-h-[250px] w-full flex-col gap-5 overflow-hidden rounded-[22px] p-5 shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px] lg:col-span-3 lg:min-h-[200px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-[60px] lg:py-8"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
        >
            <span
                className="pointer-events-none absolute z-0 -bottom-36 left-1/2 h-[420px] w-[420px] -translate-x-1/2"
                style={{
                    background:
                        "radial-gradient(circle at center, #8F37FF59 0%, rgba(143,55,255,0.22) 28%, rgba(143,55,255,0.1) 48%, rgba(143,55,255,0.04) 62%, transparent 72%)",
                }}
                aria-hidden
            />

            <div className="relative z-[1] flex w-full max-w-[303px] flex-col gap-2.5 lg:max-w-[342px] lg:shrink-0">
                <h3 className="m-0 font-manrope text-2xl font-semibold leading-[120%] text-white lg:text-[30px]">
                    Capstone Project
                </h3>
                <p className="m-0 text-center font-manrope text-base font-normal leading-[100%] text-[#FFFFFFB2] lg:text-left lg:text-lg">
                    Bring together everything you&apos;ve learned.
                </p>
            </div>

            <div className="relative z-[1] flex w-full flex-col gap-2.5 lg:ml-auto lg:w-fit lg:max-w-[480px] lg:shrink-0 lg:self-center">
                <p className="m-0 font-manrope text-base font-semibold leading-[120%] text-[#FFFFFFB2]">
                    {module.topicsLabel}
                </p>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {module.bullets.map((bullet) => (
                        <li
                            key={bullet}
                            className="m-0 font-manrope text-base font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                        >
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export function TechSeoCodingKeralaWhatYouLearnSection() {
    const regularModules = LEARN_MODULES.filter((m) => m.variant !== "capstone");
    const capstone = LEARN_MODULES.find((m) => m.variant === "capstone")!;

    const col1 = regularModules.filter((_, i) => i % 2 === 0);
    const col2 = regularModules.filter((_, i) => i % 2 === 1);

    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby="coding-kerala-what-you-learn-heading"
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-5 md:gap-[30px] lg:gap-[60px] lg:py-5">
                <h2
                    id="coding-kerala-what-you-learn-heading"
                    className="m-0 mx-auto w-full max-w-[303px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[700px] lg:text-[40px]"
                >
                    What You Will Learn in Our Flagship Program
                </h2>

                {/* Desktop: 2 independent flex columns */}
                <div className="hidden lg:flex lg:w-full lg:flex-col lg:gap-[35px]">
                    <div className="flex w-full gap-[35px]">
                        <ModuleGroup modules={col1} gap="gap-[35px]" className="flex-1" idPrefix="d1-" />
                        <ModuleGroup modules={col2} gap="gap-[35px]" className="flex-1" idPrefix="d2-" />
                    </div>
                    <CapstoneCard module={capstone} />
                </div>

                {/* Mobile: flat ordered list */}
                <div className="flex flex-col gap-[30px] lg:hidden">
                    <ModuleGroup modules={regularModules} gap="gap-[30px]" idPrefix="mob-" />
                    <CapstoneCard module={capstone} />
                </div>

                <div className="lg:hidden">
                    <TechSeoSectionBottomRule inset />
                </div>
            </div>
        </section>
    );
}
