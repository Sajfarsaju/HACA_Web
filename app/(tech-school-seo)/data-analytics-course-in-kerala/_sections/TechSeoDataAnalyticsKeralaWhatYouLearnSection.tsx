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
        shortTitle: "Getting Started with Data Analytics",
        description: "Start with the foundations of analytics and understand why data matters.",
        topicsLabel: "You'll learn:",
        bullets: [
            "What Data Analytics is and why businesses rely on it",
            "Types of data and analytics",
            "Key concepts explained simply",
            "How AI is transforming analytics workflows",
            "Real examples of AI powered analytics in action",
        ],
    },
    {
        id: "module-2",
        moduleLabel: "Module 2",
        shortTitle: "Python for Data Analytics",
        description: "Build a strong coding foundation from scratch.",
        topicsLabel: "Topics include:",
        bullets: [
            "Python fundamentals",
            "Variables, operators and data types",
            "Conditions, loops and functions",
            "Object-Oriented Programming concepts",
            "File handling and exceptions",
            "Jupyter Notebook setup",
            "OpenAI API and Hugging Face basics",
            "Mini project included",
        ],
    },
    {
        id: "module-3",
        moduleLabel: "Module 3",
        shortTitle: "Python Libraries for Analytics",
        description: "Learn the tools analysts use every day.",
        topicsLabel: "Topics include:",
        bullets: [
            "NumPy for fast data calculations",
            "Pandas for cleaning and analysis",
            "Matplotlib and Seaborn for visualization",
            "Exploratory Data Analysis techniques",
            "AI powered tools for cleaning and visualizing data",
        ],
    },
    {
        id: "module-4",
        moduleLabel: "Module 4",
        shortTitle: "MySQL",
        description: "Learn how databases work and how analysts extract valuable insights.",
        topicsLabel: "Topics include:",
        bullets: [
            "Database basics and RDBMS concepts",
            "MySQL Workbench setup",
            "SQL queries and filtering",
            "Sorting and grouping data",
            "Joins and string functions",
            "Stored procedures and views",
            "Using AI to generate smarter SQL",
        ],
    },
    {
        id: "module-5",
        moduleLabel: "Module 5",
        shortTitle: "Advanced Excel",
        description: "Master one of the most used tools in analytics.",
        topicsLabel: "Topics include:",
        bullets: [
            "Excel fundamentals to dashboards",
            "Data formatting and filtering",
            "VLOOKUP, HLOOKUP and Index Match",
            "Pivot tables and charts",
            "Macros and automation",
            "AI assisted Excel analysis",
        ],
    },
    {
        id: "module-6",
        moduleLabel: "Module 6",
        shortTitle: "Statistics Made Simple",
        description: "Understand the math behind smart decisions.",
        topicsLabel: "Topics include:",
        bullets: [
            "Descriptive and inferential statistics",
            "Mean, median and mode",
            "Histograms, scatterplots and boxplots",
            "Probability concepts",
            "Normal distribution",
            "Confidence intervals and Central Limit Theorem",
            "AI in statistical analysis",
        ],
    },
    {
        id: "module-7",
        moduleLabel: "Module 7",
        shortTitle: "Power BI",
        description: "Turn business data into powerful insights.",
        topicsLabel: "Topics include:",
        bullets: [
            "Power BI basics",
            "Importing and cleaning data",
            "Data modeling techniques",
            "DAX formulas simplified",
            "Dashboard creation",
            "AI-generated insights",
            "Real world projects",
        ],
    },
    {
        id: "module-8",
        moduleLabel: "Module 8",
        shortTitle: "Tableau",
        description: "Learn to tell stories through data visualization.",
        topicsLabel: "Topics include:",
        bullets: [
            "Connecting data sources",
            "Charts, filters and parameters",
            "Dual-axis visualisations",
            "Dashboard creation",
            "Forecasting techniques",
            "Tableau Public publishing",
            "AI-assisted workflows",
        ],
    },
    {
        id: "module-9",
        moduleLabel: "Module 9",
        shortTitle: "AI Tools for Analytics",
        description: "Discover how AI can automate your analytics workflow.",
        topicsLabel: "Topics include:",
        bullets: [
            "AI powered cleaning tools",
            "Smart reporting and dashboard tools",
            "Predictive and prescriptive analytics",
            "Finding hidden patterns with AI",
            "Ethical use of AI in data analytics",
        ],
    },
    {
        id: "capstone",
        moduleLabel: "Capstone",
        shortTitle: "Capstone Project",
        description: "Bring together everything you've learned.",
        topicsLabel: "You will:",
        bullets: [
            "Clean and analyze a complete dataset",
            "Generate AI powered insights",
            "Build interactive dashboards",
            "Present findings using Power BI or Tableau",
            "Showcase a complete real world analytics solution",
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
            {/* Header: module pill stacked above title pill */}
            <div className="flex w-full flex-col">
                {/* Module label pill — top-right radius only */}
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

                {/* Title pill / accordion trigger — no top-left radius */}
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

            {/* Expandable content panel */}
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

// Manages single-open behaviour for a group of accordions
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

export function TechSeoDataAnalyticsKeralaWhatYouLearnSection() {
    const regularModules = LEARN_MODULES.filter((m) => m.variant !== "capstone");
    const capstone = LEARN_MODULES.find((m) => m.variant === "capstone")!;

    // Split into 3 columns for desktop independent expand behaviour
    const col1 = regularModules.filter((_, i) => i % 3 === 0); // 1, 4, 7
    const col2 = regularModules.filter((_, i) => i % 3 === 1); // 2, 5, 8
    const col3 = regularModules.filter((_, i) => i % 3 === 2); // 3, 6, 9

    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby="data-analytics-kerala-what-you-learn-heading"
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-5 md:gap-[30px] lg:gap-[60px] lg:py-5">
                <h2
                    id="data-analytics-kerala-what-you-learn-heading"
                    className="m-0 mx-auto w-full max-w-[303px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[624px] lg:text-[40px]"
                >
                    What You&apos;ll Learn in HACA&apos;s Data Analytics Course
                </h2>

                {/* Desktop: 3 independent flex columns — expanding one column doesn't affect others */}
                <div className="hidden lg:flex lg:w-full lg:flex-col lg:gap-[35px]">
                    <div className="flex w-full gap-[35px]">
                        <ModuleGroup modules={col1} gap="gap-[35px]" className="flex-1" idPrefix="d1-" />
                        <ModuleGroup modules={col2} gap="gap-[35px]" className="flex-1" idPrefix="d2-" />
                        <ModuleGroup modules={col3} gap="gap-[35px]" className="flex-1" idPrefix="d3-" />
                    </div>
                    <CapstoneCard module={capstone} />
                </div>

                {/* Mobile: flat ordered list (1→2→3→…→9) */}
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
