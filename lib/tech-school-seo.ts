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

// ─── Python Course in Calicut ─────────────────────────────────────────────────

export const PYTHON_CALICUT_SEO_PATH = "/python-course-in-calicut" as const;

export type PythonCalicutFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const PYTHON_CALICUT_FAQS: PythonCalicutFaqItem[] = [
    {
        id: "py-calicut-faq-beginner",
        question: "Is this Python course suitable for beginners?",
        answer:
            "Yes, our Python program in Calicut is designed for beginners, students, fresh graduates, career switchers, and working professionals. You don't need coding experience to get started.",
    },
    {
        id: "py-calicut-faq-certificate",
        question: "Will I get a certificate after completing the course?",
        answer:
            "Yes, you'll receive a course completion certificate after successfully finishing the program and project requirements.",
    },
    {
        id: "py-calicut-faq-ai",
        question: "Is AI included in this training?",
        answer:
            "Yes, you'll learn NumPy, Pandas, Prompt Engineering, AI agents, LangChain, LangGraph and build AI-integrated applications.",
    },
    {
        id: "py-calicut-faq-projects",
        question: "What projects will I build?",
        answer:
            "You'll build AI-powered web applications, smart dashboards, authentication systems, AI-enabled chat applications, full-stack Django + React projects, REST API powered platforms, end-to-end Gen AI applications, and industry-ready capstone projects deployed online.",
    },
    {
        id: "py-calicut-faq-why-haca",
        question: "Why choose HACA Tech School for Python training in Calicut?",
        answer:
            "HACA Tech School combines Python, Django, React, and Generative AI with project-based learning, career guidance, industry exposure, and placement support to help learners become job ready.",
    },
];

const PYTHON_CALICUT_PAGE_TITLE =
    "Python Course in Calicut | Django, React & Gen AI Training | HACA";

const PYTHON_CALICUT_PAGE_DESCRIPTION =
    "Join HACA's Python Course in Calicut — hands-on training in Advanced Python, Django, React, REST APIs, LangChain, and Generative AI. Offline and online batches, expert mentors, real projects, and placement support. Become a job-ready AI full-stack developer in 5 months.";

export function buildPythonCalicutSeoMetadata() {
    const canonical = `${TECH_SCHOOL_SEO_SITE_URL}${PYTHON_CALICUT_SEO_PATH}`;

    return {
        title: PYTHON_CALICUT_PAGE_TITLE,
        description: PYTHON_CALICUT_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: PYTHON_CALICUT_PAGE_TITLE,
            description: PYTHON_CALICUT_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website" as const,
        },
        twitter: {
            card: "summary_large_image" as const,
            title: PYTHON_CALICUT_PAGE_TITLE,
            description: PYTHON_CALICUT_PAGE_DESCRIPTION,
        },
        keywords: [
            "python course in calicut",
            "python training in calicut",
            "python course calicut",
            "best python course in calicut",
            "python django course calicut",
            "python full stack course calicut",
            "python django react course",
            "generative ai python course calicut",
            "langchain course calicut",
            "ai python training calicut",
            "python course in kozhikode",
            "python course in kerala",
            "full stack python course calicut",
            "HACA python course calicut",
            "online python course calicut",
        ],
    };
}

export function pythonCalicutJsonLd() {
    const url = `${TECH_SCHOOL_SEO_SITE_URL}${PYTHON_CALICUT_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: PYTHON_CALICUT_PAGE_TITLE,
                description: PYTHON_CALICUT_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: TECH_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Python Course in Calicut",
                description: PYTHON_CALICUT_PAGE_DESCRIPTION,
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
                    "@type": "City",
                    name: "Calicut",
                    containedInPlace: {
                        "@type": "State",
                        name: "Kerala",
                    },
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: PYTHON_CALICUT_FAQS.map((item) => ({
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
        pathname.startsWith(`${DATA_ANALYTICS_KERALA_SEO_PATH}/`) ||
        pathname === PYTHON_CALICUT_SEO_PATH ||
        pathname.startsWith(`${PYTHON_CALICUT_SEO_PATH}/`)
    );
}
