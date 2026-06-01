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
        shortTitle: "Web Development Fundamentals",
        description: "Start by understanding how modern websites and applications actually work.",
        topicsLabel: "You'll learn:",
        bullets: [
            "Introduction to web development",
            "Client-server architecture",
            "How the request-response cycle works",
            "Frontend vs backend vs full stack development",
            "Understanding how real web applications function",
        ],
    },
    {
        id: "module-2",
        moduleLabel: "Module 2",
        shortTitle: "Python Programming (Core to Advanced)",
        description: "Build a strong programming foundation from scratch.",
        topicsLabel: "Topics include:",
        bullets: [
            "Python installation and environment setup",
            "Virtual environments and Jupyter notebooks",
            "Variables and syntax fundamentals",
            "Data types and operators",
            "Conditional statements and loops",
            "Iterations and list comprehensions",
            "Type hinting concepts",
            "Hands-on coding exercises and mini projects",
        ],
    },
    {
        id: "module-3",
        moduleLabel: "Module 3",
        shortTitle: "Advanced Python & Data Handling",
        description: "Move beyond basics and work with data efficiently.",
        topicsLabel: "Topics include:",
        bullets: [
            "Advanced string and number concepts",
            "Lists and tuples",
            "Sets and dictionaries",
            "JSON data processing",
            "Efficient data handling techniques",
            "Real-world data handling examples",
        ],
    },
    {
        id: "module-4",
        moduleLabel: "Module 4",
        shortTitle: "Functions & Functional Programming",
        description: "Learn to write cleaner, reusable, and scalable code.",
        topicsLabel: "Topics include:",
        bullets: [
            "Functions and return types",
            "Arguments and parameter handling",
            "Lambda expressions",
            "Functional programming concepts",
            "Writing efficient code structures",
        ],
    },
    {
        id: "module-5",
        moduleLabel: "Module 5",
        shortTitle: "AI-Powered Python Libraries",
        description: "Explore libraries used in analytics and intelligent applications.",
        topicsLabel: "Topics include:",
        bullets: [
            "NumPy for calculations and data processing",
            "Pandas and DataFrames",
            "Matplotlib for visualisation",
            "Data analysis workflows",
            "AI-powered data handling concepts",
        ],
    },
    {
        id: "module-6",
        moduleLabel: "Module 6",
        shortTitle: "Python Modules & Programming Concepts",
        description: "Understand debugging and improve application reliability.",
        topicsLabel: "Topics include:",
        bullets: [
            "Built-in Python modules",
            "os, sys, math and random libraries",
            "Exception handling",
            "Debugging concepts",
            "Writing cleaner applications",
        ],
    },
    {
        id: "module-7",
        moduleLabel: "Module 7",
        shortTitle: "Object-Oriented Programming",
        description: "Understand how real software applications are built.",
        topicsLabel: "Topics include:",
        bullets: [
            "Classes and objects",
            "Constructors",
            "Encapsulation and abstraction",
            "Inheritance",
            "Polymorphism",
            "Practical OOP implementation",
        ],
    },
    {
        id: "module-8",
        moduleLabel: "Module 8",
        shortTitle: "Database & MySQL",
        description: "Learn how applications store and manage data.",
        topicsLabel: "Topics include:",
        bullets: [
            "Database fundamentals",
            "MySQL setup and configuration",
            "SQL queries and filtering",
            "Data joins and operations",
            "Python MySQL connectivity",
            "CRUD operations with Python and MySQL",
        ],
    },
    {
        id: "module-9",
        moduleLabel: "Module 9",
        shortTitle: "Frontend Development",
        description: "Create responsive and user-friendly interfaces.",
        topicsLabel: "Topics include:",
        bullets: [
            "HTML5 fundamentals",
            "Semantic page structures",
            "CSS styling techniques",
            "Responsive design principles",
            "Dashboard styling practices",
        ],
    },
    {
        id: "module-10",
        moduleLabel: "Module 10",
        shortTitle: "Django Web Framework",
        description: "Build powerful backend applications using Django.",
        topicsLabel: "Topics include:",
        bullets: [
            "Introduction to Django",
            "MVT architecture",
            "Models and ORM",
            "Authentication systems",
            "Views and template rendering",
            "Image uploads and processing",
            "Connecting Django with MySQL",
        ],
    },
    {
        id: "module-11",
        moduleLabel: "Module 11",
        shortTitle: "REST APIs with Django",
        description: "Learn how applications communicate with each other.",
        topicsLabel: "Topics include:",
        bullets: [
            "REST API concepts",
            "Django REST Framework",
            "Serializers and routers",
            "API integration",
            "API deployment practices",
        ],
    },
    {
        id: "module-12",
        moduleLabel: "Module 12",
        shortTitle: "Generative AI & AI Agents",
        description: "Discover how AI systems and intelligent workflows are built.",
        topicsLabel: "Topics include:",
        bullets: [
            "Introduction to Generative AI",
            "Prompt engineering",
            "AI agents and architectures",
            "Retrieval Augmented Generation (RAG)",
            "Contextual prompting",
            "Multi-agent workflows",
            "ChromaDB integration",
            "Streamlit applications",
        ],
    },
    {
        id: "module-13",
        moduleLabel: "Module 13",
        shortTitle: "LangChain & LangGraph",
        description: "Build AI-powered applications and intelligent workflows.",
        topicsLabel: "Topics include:",
        bullets: [
            "LangChain fundamentals",
            "LangChain libraries and components",
            "AI application development",
            "Introduction to LangGraph",
            "AI workflow systems",
            "Advanced agent-based applications",
        ],
    },
    {
        id: "module-14",
        moduleLabel: "Module 14",
        shortTitle: "Modern JavaScript",
        description: "Build strong frontend programming foundations.",
        topicsLabel: "Topics include:",
        bullets: [
            "JavaScript fundamentals",
            "Variables and operators",
            "Arrays and objects",
            "Loops and conditions",
            "Destructuring concepts",
            "Modern array methods",
        ],
    },
    {
        id: "module-15",
        moduleLabel: "Module 15",
        shortTitle: "DOM & Browser Interaction",
        description: "Bring websites to life with dynamic interactions.",
        topicsLabel: "Topics include:",
        bullets: [
            "DOM manipulation",
            "Event handling",
            "Dynamic UI updates",
            "Interactive user experiences",
        ],
    },
    {
        id: "module-16",
        moduleLabel: "Module 16",
        shortTitle: "React.js",
        description: "Learn one of the most widely used frontend frameworks.",
        topicsLabel: "Topics include:",
        bullets: [
            "React fundamentals",
            "JSX and components",
            "Props and state",
            "React hooks",
            "Forms and validation",
            "Tailwind CSS styling",
            "Custom hooks",
        ],
    },
    {
        id: "module-17",
        moduleLabel: "Module 17",
        shortTitle: "Advanced React & State Management",
        description: "Build scalable applications with smarter state management.",
        topicsLabel: "Topics include:",
        bullets: [
            "Context API",
            "React Router",
            "Route handling",
            "Redux",
            "Actions and reducers",
            "Store management",
        ],
    },
    {
        id: "module-18",
        moduleLabel: "Module 18",
        shortTitle: "Full Stack Integration & Projects",
        description: "Bring everything together and build complete applications.",
        topicsLabel: "Topics include:",
        bullets: [
            "Django React integration",
            "AI integration into applications",
            "End-to-end project development",
            "Deployment and best practices",
            "Industry-ready capstone project",
        ],
    },
    {
        id: "capstone",
        moduleLabel: "Capstone",
        shortTitle: "Capstone Project",
        description: "Bring together everything you've learned and build a complete AI-powered application.",
        topicsLabel: "You will:",
        bullets: [
            "Build a full-stack Django + React application",
            "Integrate AI capabilities into your project",
            "Work with APIs and databases",
            "Deploy a live application",
            "Showcase a portfolio-ready capstone project",
            "Build a real-world solution that demonstrates your skills",
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

export function TechSeoPythonCalicutWhatYouLearnSection() {
    const regularModules = LEARN_MODULES.filter((m) => m.variant !== "capstone");
    const capstone = LEARN_MODULES.find((m) => m.variant === "capstone")!;

    // Split into 3 columns for desktop (18 modules = 6 per column)
    const col1 = regularModules.filter((_, i) => i % 3 === 0); // 1,4,7,10,13,16
    const col2 = regularModules.filter((_, i) => i % 3 === 1); // 2,5,8,11,14,17
    const col3 = regularModules.filter((_, i) => i % 3 === 2); // 3,6,9,12,15,18

    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby="python-calicut-what-you-learn-heading"
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-5 md:gap-[30px] lg:gap-[60px] lg:py-5">
                <h2
                    id="python-calicut-what-you-learn-heading"
                    className="m-0 mx-auto w-full max-w-[303px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[700px] lg:text-[40px]"
                >
                    What You&apos;ll Learn and Build in Our Python Course in Calicut
                </h2>

                {/* Desktop: 3 independent flex columns */}
                <div className="hidden lg:flex lg:w-full lg:flex-col lg:gap-[35px]">
                    <div className="flex w-full gap-[35px]">
                        <ModuleGroup modules={col1} gap="gap-[35px]" className="flex-1" idPrefix="d1-" />
                        <ModuleGroup modules={col2} gap="gap-[35px]" className="flex-1" idPrefix="d2-" />
                        <ModuleGroup modules={col3} gap="gap-[35px]" className="flex-1" idPrefix="d3-" />
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
