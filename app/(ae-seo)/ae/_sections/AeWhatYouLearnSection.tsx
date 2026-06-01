"use client";

import { useState } from "react";

type Module = {
    id: string;
    moduleLabel: string;
    shortTitle: string;
    description: string;
    topicsLabel: string;
    bullets: readonly string[];
};

const MAIN_MODULES: readonly Module[] = [
    {
        id: "m1", moduleLabel: "Module 1", shortTitle: "Fundamentals of Digital Marketing",
        description: "Learn the core concepts and landscape of digital marketing.",
        topicsLabel: "Topics include:",
        bullets: [
            "Definition of Business",
            "What is marketing",
            "Goal of marketing",
            "Traditional vs Digital marketing",
            "Understanding the Brand and Buyer persona",
            "Types of Digital Marketing",
            "Channel Priority",
        ],
    },
    {
        id: "m2", moduleLabel: "Module 2", shortTitle: "Personal Branding",
        description: "Build your professional identity in the digital space.",
        topicsLabel: "Topics include:",
        bullets: [
            "What is Personal Branding",
            "Growth formula — G = S + V + T",
            "What is Niching and Types of Niche",
            "How to figure out your niche",
            "Building personal branding for Instagram",
            "Building personal branding on LinkedIn",
            "Ghostwriting",
            "Tools for Personal branding",
            "How to work with a client for Personal branding services",
        ],
    },
    {
        id: "m3", moduleLabel: "Module 3", shortTitle: "Content Writing & Copywriting",
        description: "Master persuasive writing for digital channels.",
        topicsLabel: "Topics include:",
        bullets: [
            "Introduction to content writing vs copywriting",
            "Short-form writing: social media captions, carousels, threads",
            "Long-form writing: blogs, website pages, newsletters",
            "SEO content writing basics",
            "Blog writing framework and templates",
            "Video script writing and hooks",
            "Case study writing & Thought leadership content",
            "Copywriting frameworks: AIDA, PAS, BAB",
            "Writing for Meta Ads, Google Ads, and landing pages",
            "Email subject lines and body copy",
        ],
    },
    {
        id: "m4", moduleLabel: "Module 4", shortTitle: "WordPress Web Development",
        description: "Build and manage professional websites without deep coding knowledge.",
        topicsLabel: "Topics include:",
        bullets: [
            "Domain and hosting setup",
            "WordPress installation and basics",
            "Themes and plugins introduction",
            "Building a website using Elementor builder",
            "Creating landing pages and subpages",
            "Lead capture forms and CRM integration",
            "Basic SEO setup using Yoast or Rank Math plugin",
            "Website speed optimization basics",
            "Website security and backups",
            "Freelancing overview for web development",
        ],
    },
    {
        id: "m5", moduleLabel: "Module 5", shortTitle: "Social Media Marketing",
        description: "Grow brands across Instagram, LinkedIn, TikTok and more.",
        topicsLabel: "Topics include:",
        bullets: [
            "Introduction to social media marketing",
            "Understanding platform algorithms",
            "Target audience and buyer persona creation",
            "Brand archetypes and brand positioning",
            "Content buckets and content pillars",
            "Choosing the right platform for your business",
            "Creating a content calendar",
            "Social media campaigns and growth strategies",
            "Community management & Social media audit",
            "Social media analytics and performance tracking",
        ],
    },
    {
        id: "m6", moduleLabel: "Module 6", shortTitle: "Search Engine Optimization (SEO)",
        description: "Drive organic traffic through strategic on-page and off-page optimisation.",
        topicsLabel: "Topics include:",
        bullets: [
            "SEO fundamentals and types: On-page, Off-page, Technical, Local SEO",
            "Keyword research strategies using short-tail, long-tail, primary, secondary keywords",
            "On-page optimization: meta tags, headings, URLs, internal linking, sitemaps",
            "Technical SEO: indexing, redirects, audits, speed optimization, tool integrations",
            "Off-page SEO: guest posting, directory listings, authority building",
            "Local SEO: Google Business Profile, NAP consistency, UAE-focused strategies",
            "Advanced SEO: AEO, GEO, AIO, Voice Search, Featured Snippets, Google E-E-A-T",
            "AI tools for SEO: ChatGPT and Claude",
        ],
    },
    {
        id: "m7", moduleLabel: "Module 7", shortTitle: "Meta Ads (Performance Marketing)",
        description: "Run high-converting campaigns on Facebook and Instagram.",
        topicsLabel: "Topics include:",
        bullets: [
            "Meta Business Manager and Ads Manager setup",
            "Campaign structure: Campaign, Ad Set, Ad",
            "Types of campaigns, objectives, and audiences: Core, Custom, Lookalike",
            "Meta Ads copywriting and ad creative design",
            "Competitor ad research using Meta Ads Library",
            "Meta Pixel setup, A/B testing, and retargeting strategies",
            "Lead generation campaigns and ROI / ROAS calculation",
            "Campaign reporting, optimization, and metrics",
        ],
    },
    {
        id: "m8", moduleLabel: "Module 8", shortTitle: "Google Ads (Performance Marketing)",
        description: "Drive measurable results through Google's advertising ecosystem.",
        topicsLabel: "Topics include:",
        bullets: [
            "Introduction to Google Ads and SEM",
            "Google Ads account setup and campaign structure",
            "Search campaigns, Display advertising, YouTube ads, Shopping campaigns",
            "Keyword research and match types",
            "Bidding strategies, budgeting, and ad extensions",
            "Conversion tracking setup and Google Tag Manager basics",
            "Remarketing on Google",
            "Google Ads reporting, KPIs, and Editor basics",
        ],
    },
    {
        id: "m9", moduleLabel: "Module 9", shortTitle: "WhatsApp & Email Marketing",
        description: "Build direct communication channels with high engagement rates.",
        topicsLabel: "Topics include:",
        bullets: [
            "WhatsApp Business account setup and in-built automations",
            "WhatsApp broadcast vs API — Wati.io, Doubletick, AutoChat",
            "WhatsApp for lead nurturing",
            "Introduction to email marketing and ROI",
            "List building, segmentation, and email copywriting",
            "Drip campaigns and automation sequences",
            "Mailchimp setup and campaign creation",
            "Email analytics and optimization",
        ],
    },
    {
        id: "m10", moduleLabel: "Module 10", shortTitle: "Shopify & E-Commerce Development",
        description: "Build and grow online stores that convert visitors into customers.",
        topicsLabel: "Topics include:",
        bullets: [
            "What is E-Commerce and D2C",
            "Unit economics and strategies for a successful e-commerce store",
            "Basics of dropshipping and why Shopify",
            "Setting up your first Shopify store and product listing optimization",
            "Payment gateway setup and store launch",
            "Basic CRO, abandoned cart strategy, and e-commerce analytics",
            "D2C brand building basics",
        ],
    },
] as const;

const BONUS_MODULES: readonly Module[] = [
    {
        id: "b1", moduleLabel: "Bonus Module 1", shortTitle: "Creative Strategy",
        description: "Develop compelling creative concepts that resonate and convert.",
        topicsLabel: "Topics include:",
        bullets: [
            "Brand identity basics",
            "Visual storytelling for digital marketing",
            "Ad creative strategy frameworks",
            "How to brief a designer or videographer",
            "Creative testing and iteration",
            "Winning ad creative patterns",
            "Psychology behind high-performing creatives",
        ],
    },
    {
        id: "b2", moduleLabel: "Bonus Module 2", shortTitle: "Portfolio Building",
        description: "Build a job-ready portfolio that showcases your real skills.",
        topicsLabel: "Topics include:",
        bullets: [
            "What to include in your digital marketing portfolio",
            "How to structure and present your work",
            "AI-assisted portfolio creation",
            "Resume building for digital marketers",
            "LinkedIn profile optimization for job hunting or freelancing",
            "Mock interview preparation",
        ],
    },
    {
        id: "b3", moduleLabel: "Bonus Module 3", shortTitle: "Canva Design Basics & CapCut Video Editing Basics",
        description: "Create professional visuals and short-form videos.",
        topicsLabel: "Topics include:",
        bullets: [
            "Introduction to graphic design and visual principles",
            "Getting started with Canva",
            "Creating social media posts, carousels, and stories",
            "Introduction to Canva AI features",
            "Introduction to short-form video content",
            "CapCut interface and basics",
            "Cutting, trimming, captions, and transitions",
            "Creating Reels and short-form videos",
        ],
    },
    {
        id: "b4", moduleLabel: "Bonus Module 4", shortTitle: "Agency Building",
        description: "Learn how to start and grow your own digital marketing agency.",
        topicsLabel: "Topics include:",
        bullets: [
            "How to start and scale a digital marketing agency",
            "Choosing your niche and services",
            "Pricing your services",
            "Writing proposals and pitching clients",
            "Client onboarding and management",
            "Managing projects with tools: ClickUp, Notion, Trello",
            "Hiring and building a team",
            "Scaling your agency",
        ],
    },
    {
        id: "b5", moduleLabel: "Bonus Module 5", shortTitle: "Marketplace Marketing",
        description: "Sell and market products on leading marketplaces.",
        topicsLabel: "Topics include:",
        bullets: [
            "Amazon marketplace basics",
            "Noon UAE marketplace basics",
            "Product listing and optimization",
            "Marketplace advertising basics",
        ],
    },
] as const;

const PANEL_STYLE = {
    backgroundColor: "rgba(217,217,217,0.1)",
    boxShadow: "0px 3.11px 3.11px 0px #00000040",
    backdropFilter: "blur(9.33px)",
} as const;

function ChevronDown({ open }: { open: boolean }) {
    return (
        <svg
            className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden
        >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ModuleAccordion({ module, open, onToggle, idPrefix = "" }: {
    module: Module; open: boolean; onToggle: () => void; idPrefix?: string;
}) {
    const panelId = `${idPrefix}${module.id}-panel`;
    const btnId   = `${idPrefix}${module.id}-btn`;

    return (
        <div className="w-full min-w-0">
            <div className="flex w-full flex-col">
                {/* Module label pill */}
                <div
                    className="flex h-10 w-fit shrink-0 items-center px-[10px]"
                    style={{ backgroundColor: "#015AFF", borderTopRightRadius: "10px" }}
                >
                    <span
                        className="whitespace-nowrap text-[16px] font-medium leading-[125%] text-white"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        {module.moduleLabel}
                    </span>
                </div>

                {/* Title trigger */}
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

            {/* Expandable panel */}
            <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <div className="mt-1.5 rounded-[12px] p-4" style={PANEL_STYLE}>
                        <div className="flex flex-col gap-2.5">
                            <p className="m-0 text-[14px] font-normal leading-[140%] text-[#FFFFFFB2]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                                {module.description}
                            </p>
                            <p className="m-0 text-[14px] font-semibold leading-[120%] text-[#FFFFFFB2]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                                {module.topicsLabel}
                            </p>
                            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                                {module.bullets.map((b) => (
                                    <li
                                        key={b}
                                        className="m-0 text-[14px] font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                                        style={{ fontFamily: "Satoshi, sans-serif" }}
                                    >
                                        {b}
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

function ModuleGroup({ modules, gap, className = "", idPrefix = "" }: {
    modules: readonly Module[]; gap: string; className?: string; idPrefix?: string;
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

export function AeWhatYouLearnSection() {
    const col1 = MAIN_MODULES.slice(0, 5);
    const col2 = MAIN_MODULES.slice(5, 10);

    const bonusCol1 = BONUS_MODULES.slice(0, 3);
    const bonusCol2 = BONUS_MODULES.slice(3, 5);

    return (
        <section className="w-full bg-black text-white" aria-labelledby="ae-what-you-learn-heading">
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[40px] px-[clamp(16px,4.16vw,60px)] py-[clamp(32px,5vw,60px)]">

                {/* ── Main modules block ── */}
                <div className="flex flex-col gap-[30px] lg:flex-row lg:items-center lg:gap-[clamp(40px,5vw,80px)]">

                    {/* Left: heading + description */}
                    <div className="flex flex-col gap-5 lg:w-[360px] lg:shrink-0">
                        <h2
                            id="ae-what-you-learn-heading"
                            className="m-0 text-left text-[28px] font-semibold leading-[105%] tracking-[-0.01em] text-white lg:text-[clamp(30px,2.8vw,40px)]"
                            style={{ fontFamily: "Darker Grotesque, serif" }}
                        >
                            What You&apos;ll Learn to be the Top 1% Digital Marketer
                        </h2>
                        <p
                            className="m-0 text-left text-[15px] font-medium leading-[150%] text-[#FFFFFFB2] lg:text-[16px]"
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                            This is designed around execution. Every module focuses on building skills you can actually use.
                        </p>
                    </div>

                    {/* Right: 2-column accordion grid */}
                    <div className="flex min-w-0 flex-1 flex-col gap-[30px] lg:hidden">
                        <ModuleGroup modules={[...MAIN_MODULES]} gap="gap-[30px]" idPrefix="mob-main-" />
                    </div>
                    <div className="hidden min-w-0 flex-1 lg:flex lg:gap-[35px]">
                        <ModuleGroup modules={col1} gap="gap-[35px]" className="flex-1" idPrefix="d1-main-" />
                        <ModuleGroup modules={col2} gap="gap-[35px]" className="flex-1" idPrefix="d2-main-" />
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full border-t border-[#B2B2B24D]" />

                {/* ── Bonus modules block ── */}
                <div className="flex flex-col gap-[30px] lg:flex-row lg:items-center lg:gap-[clamp(40px,5vw,80px)]">

                    {/* Left: heading */}
                    <div className="flex flex-col gap-5 lg:w-[360px] lg:shrink-0">
                        <h2
                            className="m-0 text-left text-[28px] font-semibold leading-[105%] tracking-[-0.01em] text-white lg:text-[clamp(30px,2.8vw,40px)]"
                            style={{ fontFamily: "Darker Grotesque, serif" }}
                        >
                            Bonus Learning Designed for Career Growth
                        </h2>
                    </div>

                    {/* Right: 2-column bonus accordion grid */}
                    <div className="flex min-w-0 flex-1 flex-col gap-[30px] lg:hidden">
                        <ModuleGroup modules={[...BONUS_MODULES]} gap="gap-[30px]" idPrefix="mob-bonus-" />
                    </div>
                    <div className="hidden min-w-0 flex-1 lg:flex lg:gap-[35px]">
                        <ModuleGroup modules={bonusCol1} gap="gap-[35px]" className="flex-1" idPrefix="d1-bonus-" />
                        <ModuleGroup modules={bonusCol2} gap="gap-[35px]" className="flex-1" idPrefix="d2-bonus-" />
                    </div>
                </div>

            </div>
        </section>
    );
}
