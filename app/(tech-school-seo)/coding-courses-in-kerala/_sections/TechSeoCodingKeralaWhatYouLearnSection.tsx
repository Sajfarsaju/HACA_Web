"use client";

import { useState } from "react";

import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

// ── Data ──────────────────────────────────────────────────────────────────────

type Module = {
    id: string;
    tabLabel: string;
    title: string;
    description: string;
    bullets: readonly string[];
};

type ProjectItem = {
    id: string;
    name: string;
    description?: string;
    bullets?: readonly string[];
};

type ProjectGroup = {
    id: string;
    title: string;
    items: readonly ProjectItem[];
};

const MODULES: readonly Module[] = [
    {
        id: "module-1",
        tabLabel: "Module 1",
        title: "Frontend Development",
        description:
            "Build responsive user interfaces that look and perform like real production applications",
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
        tabLabel: "Module 2",
        title: "Backend Development",
        description: "Learn how real backend systems are built and deployed.",
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
        tabLabel: "Module 3",
        title: "Database Development",
        description:
            "Understand how large scale applications manage and process data.",
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
        tabLabel: "Module 4",
        title: "AI Integration",
        description:
            "Move beyond traditional coding and create AI powered products.",
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
];

const PROJECT_GROUPS: readonly ProjectGroup[] = [
    {
        id: "major-projects",
        title: "Major Portfolio Projects",
        items: [
            {
                id: "social-media",
                name: "MERN Social Media Platform",
                description:
                    "Build authentication systems, profiles, messaging, feeds, comments and deployment workflows.",
            },
            {
                id: "ecommerce",
                name: "AI-Powered E-Commerce Platform",
                description: "Create an advanced application with:",
                bullets: [
                    "AI Chatbot Support",
                    "Smart Product Search",
                    "Payment Gateway Integration",
                    "Admin Automation Features",
                    "Deployment Ready Architecture",
                ],
            },
        ],
    },
    {
        id: "mini-projects",
        title: "Mini Projects",
        items: [
            { id: "html-clone",   name: "Website Clone using HTML and CSS" },
            { id: "js-crud",      name: "JavaScript CRUD Application" },
            { id: "react-crud",   name: "React CRUD Platform" },
            { id: "rest-api",     name: "REST API Project" },
            { id: "mongodb-proj", name: "MongoDB Integration Project" },
        ],
    },
];

// ── Shared primitives ─────────────────────────────────────────────────────────

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

const ROW_BG = { backgroundColor: "#11062D", boxShadow: "0px 3px 3px 0px #00000040" } as const;
const PANEL_BG = { backgroundColor: "rgba(17,6,45,0.85)", boxShadow: "0px 3px 3px 0px #00000040" } as const;
const TAB_RADIUS = { borderTopLeftRadius: "10px", borderTopRightRadius: "10px" } as const;
const ROW_RADIUS = { borderTopRightRadius: "16px", borderBottomRightRadius: "16px", borderBottomLeftRadius: "16px" } as const;

function AccordionCard({
    tabLabel,
    title,
    open,
    onToggle,
    btnId,
    panelId,
    children,
}: {
    tabLabel: string;
    title: string;
    open: boolean;
    onToggle: () => void;
    btnId: string;
    panelId: string;
    children: React.ReactNode;
}) {
    return (
        <div className="w-full">
            {/* Purple tab */}
            <div
                className="flex h-[34px] w-fit items-center px-[10px]"
                style={{ backgroundColor: "#321362", ...TAB_RADIUS }}
            >
                <span className="whitespace-nowrap font-manrope text-[14px] font-medium leading-[125%] text-white">
                    {tabLabel}
                </span>
            </div>

            {/* Row button */}
            <button
                id={btnId}
                type="button"
                onClick={onToggle}
                className="flex h-[52px] w-full items-center justify-between gap-2 px-[14px] text-left text-white"
                style={{ ...ROW_BG, ...ROW_RADIUS }}
                aria-expanded={open}
                aria-controls={panelId}
            >
                <span className="min-w-0 truncate font-manrope text-[16px] font-medium leading-[125%]">
                    {title}
                </span>
                <ChevronDown open={open} />
            </button>

            {/* Animated panel */}
            <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <div className="mt-1.5 rounded-[12px] p-4" style={PANEL_BG}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Module accordion stack ────────────────────────────────────────────────────

function ModuleStack({ idPrefix }: { idPrefix: string }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId((p) => (p === id ? null : id));

    return (
        <div className="flex flex-col gap-[16px]">
            {MODULES.map((mod) => (
                <AccordionCard
                    key={mod.id}
                    tabLabel={mod.tabLabel}
                    title={mod.title}
                    open={openId === mod.id}
                    onToggle={() => toggle(mod.id)}
                    btnId={`${idPrefix}${mod.id}-btn`}
                    panelId={`${idPrefix}${mod.id}-panel`}
                >
                    <div className="flex flex-col gap-2.5">
                        <p className="m-0 font-manrope text-[14px] font-normal leading-[140%] text-[#FFFFFFB2]">
                            {mod.description}
                        </p>
                        <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                            {mod.bullets.map((b) => (
                                <li
                                    key={b}
                                    className="m-0 font-manrope text-[14px] font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                                >
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </AccordionCard>
            ))}
        </div>
    );
}

// ── Project accordion stack ───────────────────────────────────────────────────

function ProjectStack({ idPrefix }: { idPrefix: string }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId((p) => (p === id ? null : id));

    return (
        <div className="flex flex-col gap-[16px]">
            {PROJECT_GROUPS.map((group) => (
                <AccordionCard
                    key={group.id}
                    tabLabel="Projects"
                    title={group.title}
                    open={openId === group.id}
                    onToggle={() => toggle(group.id)}
                    btnId={`${idPrefix}${group.id}-btn`}
                    panelId={`${idPrefix}${group.id}-panel`}
                >
                    <div className="flex flex-col gap-3">
                        {group.items.map((item) => (
                            <div key={item.id} className="flex flex-col gap-1.5">
                                <p className="m-0 font-manrope text-[14px] font-semibold leading-[120%] text-white">
                                    {item.name}
                                </p>
                                {item.description && (
                                    <p className="m-0 font-manrope text-[14px] font-normal leading-[140%] text-[#FFFFFFB2]">
                                        {item.description}
                                    </p>
                                )}
                                {item.bullets && (
                                    <ul className="m-0 flex list-none flex-col gap-1 p-0">
                                        {item.bullets.map((b) => (
                                            <li
                                                key={b}
                                                className="m-0 font-manrope text-[13px] font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                                            >
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </AccordionCard>
            ))}
        </div>
    );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function TechSeoCodingKeralaWhatYouLearnSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-labelledby="coding-kerala-what-you-learn-heading"
        >
            <div className="flex flex-col gap-[30px] px-5 py-10 lg:gap-[40px] lg:px-[60px] lg:py-[60px]">

                {/* Section heading */}
                <h2
                    id="coding-kerala-what-you-learn-heading"
                    className="m-0 mx-auto w-full max-w-[303px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[600px] lg:text-[40px]"
                >
                    What You Will Learn in Our Flagship Program
                </h2>

                {/* ── Mobile layout ── */}
                <div className="flex flex-col gap-[16px] lg:hidden">
                    <ModuleStack idPrefix="mob-" />
                    <hr className="mt-[14px] border-t border-[#FFFFFF1A]" />
                    <h3 className="m-0 font-manrope text-[22px] font-semibold leading-[120%] text-white">
                        Build Projects That Employers Actually Want To See
                    </h3>
                    <ProjectStack idPrefix="mob-proj-" />
                </div>

                {/* ── Desktop layout ── */}
                <div className="hidden lg:flex lg:gap-[40px]">

                    {/* Left: all 4 modules */}
                    <div className="flex-1">
                        <ModuleStack idPrefix="desk-" />
                    </div>

                    {/* Right: build projects heading + project accordions */}
                    <div className="flex flex-1 flex-col gap-[20px]">
                        <h3 className="m-0 font-manrope text-[30px] font-semibold leading-[120%] text-white">
                            Build Projects That Employers Actually Want To See
                        </h3>
                        <hr className="border-t border-[#FFFFFF1A]" />
                        <ProjectStack idPrefix="desk-proj-" />
                    </div>
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
