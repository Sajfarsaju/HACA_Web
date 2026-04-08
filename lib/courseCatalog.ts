export type CourseMode = "Offline" | "Online"

export type Course = {
    id: number
    _id?: string               // MongoDB id — present for DB-backed courses
    title: string              // Course name on the card
    name?: string              // Alias for title (DB field)
    categorySlug: "marketing" | "design" | "tech" | "finance"
    category: string
    mode: CourseMode
    trainingSummary: string
    popupHeading?: string      // Heading inside the course detail popup (DB-driven)
    amount?: string            // Current price, e.g. "₹80,000"
    originalAmount?: string    // Struck-through original price, e.g. "₹85,000"
    modules?: CourseModule[]   // DB-driven modules (overrides static lookup)
}

export type CourseModule = {
    id: number
    label: string
    title: string
    content: string
}


/** Formats the top badge: "Offline  |  5 Months Training + 1 Month Internship" */
export function formatCourseBadgeLine(course: Pick<Course, "mode" | "trainingSummary">): string {
    const tail = course.trainingSummary.replace(/\s*·\s*/g, " + ")
    return `${course.mode}  |  ${tail}`
}

const marketingModules: CourseModule[] = [
    {
        id: 1,
        label: "Module 1",
        title: "Creative & Brand Foundations",
        content:
            "Build a strong creative mindset, understand brand positioning, and learn how messaging connects to real campaigns across digital channels.",
    },
    {
        id: 2,
        label: "Module 2",
        title: "Content Strategy & Storytelling",
        content:
            "Plan content calendars, write for different platforms, and use AI tools responsibly to speed up ideation and iteration.",
    },
    {
        id: 3,
        label: "Module 3",
        title: "Performance Marketing & Funnels",
        content:
            "Set up tracking, read performance data, and optimize paid and organic funnels with practical exercises on live-style briefs.",
    },
    {
        id: 4,
        label: "Module 4",
        title: "SEO & Discoverability",
        content:
            "Technical and on-page SEO essentials, keyword research workflows, and how to measure organic growth over time.",
    },
    {
        id: 5,
        label: "Module 5",
        title: "Capstone & Portfolio Review",
        content:
            "Consolidate projects into a portfolio narrative, present outcomes, and receive mentor feedback before internship placement.",
    },
]

const designModules: CourseModule[] = [
    {
        id: 1,
        label: "Module 1",
        title: "Visual Language & Layout Systems",
        content: "Typography, grids, and composition habits used in professional design workflows.",
    },
    {
        id: 2,
        label: "Module 2",
        title: "Brand & Identity Design",
        content: "Logo systems, color tokens, and building cohesive brand guidelines.",
    },
    {
        id: 3,
        label: "Module 3",
        title: "UI Design for Products",
        content: "Component thinking, responsive layouts, and handoff-ready files.",
    },
    {
        id: 4,
        label: "Module 4",
        title: "Motion & Micro-interactions",
        content: "Light motion principles and prototyping for clearer user feedback.",
    },
    {
        id: 5,
        label: "Module 5",
        title: "Portfolio & Presentation",
        content: "Curate case studies and present design decisions with clarity.",
    },
]

const techModules: CourseModule[] = [
    {
        id: 1,
        label: "Module 1",
        title: "Data Foundations & SQL",
        content: "Core querying, joins, and cleaning data for reliable analysis.",
    },
    {
        id: 2,
        label: "Module 2",
        title: "Analytics & Dashboards",
        content: "KPI design, visualization choices, and stakeholder-ready reporting.",
    },
    {
        id: 3,
        label: "Module 3",
        title: "Python for Analytics",
        content: "Pandas basics, notebooks, and reproducible analysis patterns.",
    },
    {
        id: 4,
        label: "Module 4",
        title: "AI-Assisted Analysis",
        content: "Using AI tools to accelerate exploration while staying accountable to data quality.",
    },
    {
        id: 5,
        label: "Module 5",
        title: "Capstone Project",
        content: "End-to-end project from question to insight with mentor review.",
    },
]

const financeModules: CourseModule[] = [
    {
        id: 1,
        label: "Module 1",
        title: "Accounting Core & Statements",
        content: "Journal entries, ledgers, and reading financial statements with confidence.",
    },
    {
        id: 2,
        label: "Module 2",
        title: "Financial Intelligence",
        content: "Ratios, cash flow, and decision signals used by finance teams.",
    },
    {
        id: 3,
        label: "Module 3",
        title: "Tax & Compliance Basics",
        content: "Foundational compliance awareness for business contexts.",
    },
    {
        id: 4,
        label: "Module 4",
        title: "Forecasting & Budgeting",
        content: "Simple models, variance thinking, and scenario planning.",
    },
    {
        id: 5,
        label: "Module 5",
        title: "Case Studies & Review",
        content: "Apply concepts to realistic cases and refine your analysis narrative.",
    },
]

const MODULES_BY_SLUG: Record<Course["categorySlug"], CourseModule[]> = {
    marketing: marketingModules,
    design: designModules,
    tech: techModules,
    finance: financeModules,
}

export function getModulesForCourse(course: Pick<Course, "categorySlug">): CourseModule[] {
    return MODULES_BY_SLUG[course.categorySlug] ?? marketingModules
}

export const COURSES: Course[] = [
    {
        id: 1,
        title: "Basic to Advanced AI-Integrated Digital Marketing Course",
        categorySlug: "marketing",
        category: "Digital Marketing",
        mode: "Offline",
        trainingSummary: "6 Months Training · 1 Month Internship",
    },
    {
        id: 2,
        title: "Creative Design and Communication",
        categorySlug: "design",
        category: "Design",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Internship",
    },
    {
        id: 3,
        title: "Advanced Data Analytics with AI",
        categorySlug: "tech",
        category: "Tech",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Project",
    },
    {
        id: 4,
        title: "Advance Practical Accounting & Financial Intelligence",
        categorySlug: "finance",
        category: "Finance",
        mode: "Online",
        trainingSummary: "6 Months Training",
    },
    {
        id: 5,
        title: "Basic to Advanced AI-Integrated Digital Marketing Course",
        categorySlug: "marketing",
        category: "Digital Marketing",
        mode: "Offline",
        trainingSummary: "6 Months Training · 1 Month Internship",
    },
    {
        id: 6,
        title: "Creative Design and Communication",
        categorySlug: "design",
        category: "Design",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Internship",
    },
    {
        id: 7,
        title: "Advanced Data Analytics with AI",
        categorySlug: "tech",
        category: "Tech",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Project",
    },
    {
        id: 8,
        title: "Advance Practical Accounting & Financial Intelligence",
        categorySlug: "finance",
        category: "Finance",
        mode: "Online",
        trainingSummary: "6 Months Training",
    },
    {
        id: 9,
        title: "Basic to Advanced AI-Integrated Digital Marketing Course",
        categorySlug: "marketing",
        category: "Digital Marketing",
        mode: "Offline",
        trainingSummary: "6 Months Training · 1 Month Internship",
    },
    {
        id: 10,
        title: "Creative Design and Communication",
        categorySlug: "design",
        category: "Design",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Internship",
    },
    {
        id: 11,
        title: "Advanced Data Analytics with AI",
        categorySlug: "tech",
        category: "Tech",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Project",
    },
    {
        id: 12,
        title: "Advance Practical Accounting & Financial Intelligence",
        categorySlug: "finance",
        category: "Finance",
        mode: "Online",
        trainingSummary: "6 Months Training",
    },
]
