import type { Metadata } from "next";

/** Production site — matches legacy WordPress URLs (Option A). */
export const DESIGN_SCHOOL_SEO_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

export const DESIGN_SCHOOL_SEO_PATHS = [
    "/graphic-designing-course-in-kerala",
    "/graphic-design-classes-online",
    "/video-editing-course-in-calicut",
    "/graphic-designing-course-in-calicut",
    "/ui-ux-design-course-in-calicut",
    "/introduction-to-graphic-design",
    "/creative-design-and-communication",
] as const;

export type DesignSchoolSeoPath = (typeof DESIGN_SCHOOL_SEO_PATHS)[number];

export type DesignSchoolSeoSlug = DesignSchoolSeoPath extends `/${infer S}` ? S : never;

export function isDesignSchoolSeoPath(pathname: string): pathname is DesignSchoolSeoPath {
    return (DESIGN_SCHOOL_SEO_PATHS as readonly string[]).includes(pathname);
}

type PageSeo = {
    title: string;
    description: string;
    h1: string;
    eyebrow?: string;
    intro: string[];
    highlights?: string[];
};

export const DESIGN_SCHOOL_SEO_PAGES: Record<DesignSchoolSeoSlug, PageSeo> = {
    "graphic-designing-course-in-kerala": {
        title: "Graphic Designing Course in Kerala | HACA Design School",
        description:
            "Join HACA Design School for Kerala’s practical graphic design training—live mentorship, portfolio-first learning, and placement support across graphic design, motion, UI/UX, and branding.",
        eyebrow: "Design School by HACA",
        h1: "Choose the best graphic designing course in Kerala",
        intro: [
            "If you notice typography on menus, fix friends’ posters, or sketch ideas on every blank page, you already think like a designer. Our flagship program turns that instinct into a structured, industry-ready skill set.",
            "We go beyond software tutorials. You learn layout, colour, typography, branding, motion, UI/UX, and video editing with real briefs, feedback from agency-based mentors, and a portfolio employers actually read.",
        ],
        highlights: [
            "Offline Creative Design & Communication program with internship exposure",
            "Graphic design, motion graphics, video editing, UI/UX, and branding in one journey",
            "Placement support, mock interviews, and recruiter-facing portfolio reviews",
        ],
    },
    "graphic-design-classes-online": {
        title: "Graphic Design Classes Online | HACA Design School",
        description:
            "Live, hands-on graphic design classes online from HACA—learn layout, typography, branding, UI/UX, and motion from anywhere in India with mentor feedback and portfolio support.",
        eyebrow: "Learn designing the way it should be",
        h1: "Take graphic design classes online",
        intro: [
            "This is not a passive video library you forget in a week. It is a live creative program with mentor sessions, assignments, and critique—built for learners across India who want to create, improve, and get hired without leaving home.",
            "You will work through graphic design, branding, UI/UX, and video editing tracks with a multidisciplinary lens so you graduate with a toolkit agencies expect today—including generative AI where it genuinely helps your process.",
        ],
        highlights: [
            "Online programs from short bootcamps to multi-month deep dives",
            "Figma-recognised learning environment and creative EdTech platform",
            "Community events, jams, and placement-oriented portfolio work",
        ],
    },
    "video-editing-course-in-calicut": {
        title: "Video Editing Course in Calicut | HACA Design School",
        description:
            "Career-focused video editing course in Calicut (online too)—visual storytelling, Premiere Pro, After Effects, sound design, colour grading, and portfolio-ready projects with HACA mentors.",
        eyebrow: "Trusted by creators across Kerala",
        h1: "The video editing course in Calicut built for storytellers",
        intro: [
            "Editing is not only about cuts and music—it is pacing, emotion, and clarity. We teach you to read footage, shape narrative, and deliver work that holds up on social, ads, and long-form content.",
            "Alongside industry tools, you will explore cinematography basics, sound design, colour grading, and how AI can speed up repetitive tasks while you stay in creative control.",
        ],
        highlights: [
            "Premiere Pro, After Effects, Photoshop, and DaVinci Resolve in the workflow",
            "Showreel-oriented projects and mentor feedback from working editors",
            "Pathways into freelance, agency, and in-house roles with placement support",
        ],
    },
    "graphic-designing-course-in-calicut": {
        title: "Graphic Designing Course in Calicut | HACA Design School",
        description:
            "Offline graphic designing course in Calicut at HACA—five-month Creative Design & Communication with graphic design, motion, video, UI/UX, branding, internships, and placement help.",
        eyebrow: "Your creativity deserves a place to grow",
        h1: "Join the best graphic designing course in Calicut",
        intro: [
            "Calicut learners get our full flagship studio-style program: five months offline with real projects, critique culture, and a portfolio you can take straight to interviews.",
            "You will graduate thinking like a designer—strong on layout, identity systems, motion, and digital product basics—not only knowing where the buttons are in software.",
        ],
        highlights: [
            "Graphic design, motion graphics, video editing, UI/UX, and branding modules",
            "Internship-style exposure and recruiter prep",
            "Mentors from agencies and brands you will recognise from their client lists",
        ],
    },
    "ui-ux-design-course-in-calicut": {
        title: "UI/UX Design Course in Calicut | HACA Design School",
        description:
            "Three-month, career-ready UI/UX design course in Calicut (online available)—research, IA, wireframes, Figma, prototyping, and AI-aware workflows with HACA Design School.",
        eyebrow: "Build a serious career in product design",
        h1: "Join the career-ready UI/UX design course in Calicut",
        intro: [
            "We combine design thinking with execution: stakeholder research, competitor scans, personas, flows, wireframes, UI systems in Figma, and prototypes you can user-test and ship.",
            "Whether you are fresh out of school or switching from another field, the pace is practical—weekly outcomes, mentor critique, and artefacts you can show in a product interview loop.",
        ],
        highlights: [
            "Research through prototyping in one continuous arc",
            "Responsive layouts, design guidelines, and collaboration-ready handoff habits",
            "Connects naturally with our graphic design and branding programs if you want a broader creative profile",
        ],
    },
    "introduction-to-graphic-design": {
        title: "Introduction to Graphic Design | HACA Design School",
        description:
            "Ten-week online introduction to graphic design—layout, typography, colour, branding basics, Photoshop & Illustrator, plus creative strategy and LinkedIn visibility with HACA mentors.",
        eyebrow: "Unleash your creativity",
        h1: "Learn graphic design online from the ground up",
        intro: [
            "Perfect if you want a structured first step before committing to a longer program. Sessions balance foundations—layout, composition, type, colour—with tool confidence in Photoshop and Illustrator.",
            "Bonus modules touch creative ads, personal branding, and a LinkedIn masterclass so you can talk about your work as clearly as you design it.",
        ],
        highlights: [
            "Modules on layout, branding communication, manipulation, and creative design",
            "Exposure to Midjourney and DALL·E as ideation assistants—not replacements for craft",
            "Natural bridge into our deeper Creative Design & Communication or AI graphic programs",
        ],
    },
    "creative-design-and-communication": {
        title: "Creative Design and Communication | HACA Design School",
        description:
            "HACA’s Creative Design & Communication program—graphic design, motion, video editing, UI/UX, and brand design in one multidisciplinary offline journey with demos and mentor support.",
        eyebrow: "Design School from the house of HACA",
        h1: "Creative design & communication flagship program",
        intro: [
            "This is the umbrella experience that ties visual storytelling, identity, motion, interface craft, and editing into one coherent creative education—how modern studios actually staff projects.",
            "Book a demo to see the workspace culture, mentor bench, and the kind of portfolio reviews you will live with for five intensive months.",
        ],
        highlights: [
            "Major projects spanning graphic, motion, video, UI/UX, and brand design",
            "Leadership visibility from Design School heads and specialist mentors",
            "Scholarship, E-Cell, and alumni community touchpoints shared across HACA",
        ],
    },
};

export function buildDesignSchoolSeoMetadata(slug: DesignSchoolSeoSlug): Metadata {
    const page = DESIGN_SCHOOL_SEO_PAGES[slug];
    const path = `/${slug}` as const;
    const canonical = `${DESIGN_SCHOOL_SEO_SITE_URL}${path}`;

    return {
        title: page.title,
        description: page.description,
        alternates: { canonical },
        openGraph: {
            title: page.title,
            description: page.description,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: page.title,
            description: page.description,
        },
    };
}

export function designSchoolSeoJsonLd(slug: DesignSchoolSeoSlug) {
    const page = DESIGN_SCHOOL_SEO_PAGES[slug];
    const path = `/${slug}`;
    const url = `${DESIGN_SCHOOL_SEO_SITE_URL}${path}`;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.title,
        description: page.description,
        url,
        isPartOf: {
            "@type": "WebSite",
            name: "Haris & Co Academy",
            url: DESIGN_SCHOOL_SEO_SITE_URL,
        },
    };
}
