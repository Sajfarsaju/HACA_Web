import type { Metadata } from "next";

export const TECH_SCHOOL_SEO_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

/** Tech School SEO landing page shell background (navbar + page). */
export const TECH_SEO_PAGE_BG = "#000010" as const;

export const DATA_ANALYTICS_KERALA_SEO_PATH = "/data-analytics-course-in-kerala" as const;

export type DataAnalyticsKeralaFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const DATA_ANALYTICS_KERALA_FAQS: DataAnalyticsKeralaFaqItem[] = [
    {
        id: "da-kerala-faq-best-beginners",
        question: "Which is the best Data Analytics Course in Kerala for beginners?",
        answer:
            "HACA Tech School offers a beginner-friendly Data Analytics Course in Kerala with AI-integrated learning, real projects, small cohort training, and placement support.",
    },
    {
        id: "da-kerala-faq-no-coding",
        question: "Can I learn Data Analytics without coding experience?",
        answer:
            "Yes, you can learn data analytics without coding experience. At HACA Tech School, we teach Python and all core concepts from scratch.",
    },
    {
        id: "da-kerala-faq-career",
        question: "Is Data Analytics a good career option in Kerala?",
        answer:
            "Yes, Data Analytics is one of the fastest-growing career paths, with opportunities across IT, healthcare, finance, e-commerce, marketing, and startups.",
    },
    {
        id: "da-kerala-faq-who-can-join",
        question: "Who can join this Data Analytics Course?",
        answer:
            "Students, fresh graduates, working professionals, freelancers, entrepreneurs, and career switchers can join this data analytics course.",
    },
    {
        id: "da-kerala-faq-cohort",
        question: "What is cohort-based learning?",
        answer:
            "Cohort based learning means learning in small batches with direct mentor interaction, collaboration, and personalized attention.",
    },
];

const DATA_ANALYTICS_KERALA_PAGE_TITLE =
    "Data Analytics Course in Kerala | Python, SQL & Power BI Training | HACA";

const DATA_ANALYTICS_KERALA_PAGE_DESCRIPTION =
    "Join HACA's Data Analytics Course in Kerala — hands-on training in Python, SQL, Power BI, Excel, and AI-driven analytics. Online and offline batches, expert mentors, live projects, and placement support. Build job-ready data skills from anywhere in Kerala.";

export function buildDataAnalyticsKeralaSeoMetadata(): Metadata {
    const canonical = `${TECH_SCHOOL_SEO_SITE_URL}${DATA_ANALYTICS_KERALA_SEO_PATH}`;

    return {
        title: DATA_ANALYTICS_KERALA_PAGE_TITLE,
        description: DATA_ANALYTICS_KERALA_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: DATA_ANALYTICS_KERALA_PAGE_TITLE,
            description: DATA_ANALYTICS_KERALA_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: DATA_ANALYTICS_KERALA_PAGE_TITLE,
            description: DATA_ANALYTICS_KERALA_PAGE_DESCRIPTION,
        },
        keywords: [
            "data analytics course in Kerala",
            "data analytics training Kerala",
            "data analyst course in Kerala",
            "best data analytics course in Kerala",
            "data analytics institute Kerala",
            "Python data analytics course Kerala",
            "SQL course Kerala",
            "Power BI course Kerala",
            "data science course Kerala",
            "business analytics course Kerala",
            "data analytics course for beginners Kerala",
            "data analytics course Kochi",
            "data analytics course Kozhikode",
            "HACA data analytics Kerala",
            "online data analytics course Kerala",
        ],
    };
}

export function dataAnalyticsKeralaJsonLd() {
    const url = `${TECH_SCHOOL_SEO_SITE_URL}${DATA_ANALYTICS_KERALA_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: DATA_ANALYTICS_KERALA_PAGE_TITLE,
                description: DATA_ANALYTICS_KERALA_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: TECH_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Data Analytics Course in Kerala",
                description: DATA_ANALYTICS_KERALA_PAGE_DESCRIPTION,
                provider: {
                    "@type": "EducationalOrganization",
                    name: "Haris & Co Academy",
                    url: TECH_SCHOOL_SEO_SITE_URL,
                },
                url,
                educationalLevel: "Beginner to Advanced",
                courseMode: ["Onsite", "Online"],
                inLanguage: "en",
                areaServed: {
                    "@type": "State",
                    name: "Kerala",
                    containedInPlace: {
                        "@type": "Country",
                        name: "India",
                    },
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: DATA_ANALYTICS_KERALA_FAQS.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            },
        ],
    };
}

/** True for Tech School SEO landing routes (route group does not add a URL prefix). */
export function isTechSchoolSeoPath(pathname: string): boolean {
    return (
        pathname === DATA_ANALYTICS_KERALA_SEO_PATH ||
        pathname.startsWith(`${DATA_ANALYTICS_KERALA_SEO_PATH}/`)
    );
}
