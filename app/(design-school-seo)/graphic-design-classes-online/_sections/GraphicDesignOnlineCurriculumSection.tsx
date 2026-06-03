"use client";

import { useState } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type CurriculumItem = {
    id: string;
    title: string;
    description: string;
};

type CurriculumGroup = {
    id: string;
    category: string;
    accentColor: string;
    items: CurriculumItem[];
};

const CURRICULUM: CurriculumGroup[] = [
    {
        id: "foundations",
        category: "Design Foundations",
        accentColor: "#FF5C00",
        items: [
            {
                id: "intro-design",
                title: "Introduction to Design & Visual Communication",
                description: "Understand how visuals influence communication and why good design goes beyond aesthetics.",
            },
            {
                id: "core-principles",
                title: "Core Design Principles",
                description: "Learn balance, hierarchy, contrast, spacing, and alignment through practical design activities.",
            },
            {
                id: "layout-composition",
                title: "Layout & Composition Techniques",
                description: "Discover how to organise visual elements to improve communication and readability.",
            },
            {
                id: "typography",
                title: "Typography & Visual Hierarchy",
                description: "Understand fonts, structure, and attention flow to make your designs feel intentional.",
            },
            {
                id: "colour-theory",
                title: "Colour Theory for Digital Design",
                description: "Learn how colour influences perception and improves visual storytelling.",
            },
        ],
    },
    {
        id: "creative-skills",
        category: "Creative Skills",
        accentColor: "#8F56FF",
        items: [
            {
                id: "image-manipulation",
                title: "Image Manipulation & Composition",
                description: "Learn how to work with visuals creatively and create polished design outputs.",
            },
            {
                id: "social-media-design",
                title: "Social Media & Marketing Design",
                description: "Create graphics used in real campaigns while understanding audience behaviour and content formats.",
            },
        ],
    },
    {
        id: "bonus",
        category: "Bonus Learning",
        accentColor: "#29C76B",
        items: [
            {
                id: "logo-design",
                title: "Introduction to Logo Design",
                description: "Understand the thinking process behind visual identity creation.",
            },
            {
                id: "linkedin-branding",
                title: "LinkedIn Personal Branding Masterclass",
                description: "Learn how to present yourself professionally and build an online presence.",
            },
            {
                id: "portfolio-dev",
                title: "Portfolio Development Guidance",
                description: "Get support while selecting and showcasing your strongest work.",
            },
            {
                id: "community-access",
                title: "Lifetime Community Access",
                description: "Continue learning and stay connected with resources and updates.",
            },
        ],
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
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CurriculumItemRow({ item, open, onToggle, accentColor }: {
    item: CurriculumItem;
    open: boolean;
    onToggle: () => void;
    accentColor: string;
}) {
    const panelId = `gd-online-curr-${item.id}-panel`;
    const btnId = `gd-online-curr-${item.id}-btn`;
    return (
        <div className="border-b border-black/08" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <button
                id={btnId}
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open}
                aria-controls={panelId}
            >
                <span
                    className="text-[15px] font-medium leading-[130%] text-black lg:text-[17px]"
                    style={{ fontFamily: vc }}
                >
                    {item.title}
                </span>
                <ChevronDown open={open} />
            </button>
            <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <p
                        className="m-0 pb-4 text-[14px] leading-[155%] text-black/60 lg:text-[15px]"
                        style={{ fontFamily: vc }}
                    >
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function CurriculumGroup({ group }: { group: CurriculumGroup }) {
    const [openId, setOpenId] = useState<string | null>(null);
    return (
        <div className="flex w-full flex-col gap-0 rounded-2xl border border-black/08 overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ backgroundColor: group.accentColor }}
            >
                <span
                    className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white lg:text-[15px]"
                    style={{ fontFamily: vc }}
                >
                    {group.category}
                </span>
            </div>
            <div className="flex flex-col px-5">
                {group.items.map((item) => (
                    <CurriculumItemRow
                        key={item.id}
                        item={item}
                        open={openId === item.id}
                        onToggle={() => setOpenId((p) => (p === item.id ? null : item.id))}
                        accentColor={group.accentColor}
                    />
                ))}
            </div>
        </div>
    );
}

export function GraphicDesignOnlineCurriculumSection() {
    return (
        <section className="w-full bg-[#FCFCFC]" aria-labelledby="gd-online-curriculum-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col gap-8 lg:gap-[50px]">
                    <div className="flex flex-col gap-3">
                        <h2
                            id="gd-online-curriculum-heading"
                            className="m-0 w-full max-w-[700px] text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 600,
                                fontSize: "clamp(26px, 3.5vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            What You&apos;ll Learn in This Online Graphic Designing Course
                        </h2>
                        <p
                            className="m-0 max-w-[680px] text-[15px] leading-[155%] text-black/60 lg:text-[16px]"
                            style={{ fontFamily: vc }}
                        >
                            This course focuses on helping you understand how visual communication works before jumping into tools. You&apos;ll gradually move from fundamentals to practical creative execution.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
                        {CURRICULUM.map((group) => (
                            <CurriculumGroup key={group.id} group={group} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
