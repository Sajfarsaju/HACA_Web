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
        id: "da-kerala-faq-1",
        question: "Who can join HACA's Data Analytics Course in Kerala?",
        answer:
            "Anyone with curiosity for data can join — students, fresh graduates, working professionals, career switchers, and business owners. No prior programming or statistics background is required. The course is designed to take you from fundamentals to job-ready skills.",
    },
    {
        id: "da-kerala-faq-2",
        question: "What tools and technologies will I learn in this course?",
        answer:
            "You will learn Python, SQL, Excel, Power BI, Tableau, and AI-driven analytics tools. The curriculum covers data cleaning, exploratory data analysis, data visualisation, statistical analysis, and real-world business analytics projects.",
    },
    {
        id: "da-kerala-faq-3",
        question: "How long is the Data Analytics Course in Kerala?",
        answer:
            "The course runs for 5 months with live interactive sessions. Both online and offline formats are available. Online batches are accessible from anywhere in Kerala. Offline training is available at HACA's Kozhikode campus. Both cover the same curriculum with hands-on projects, mentorship, and placement support.",
    },
    {
        id: "da-kerala-faq-4",
        question: "Do I need programming knowledge to join the data analytics course?",
        answer:
            "No prior programming knowledge is required. The course begins with Python and SQL from scratch, making it accessible for complete beginners. Students who already have a programming background will find the pace comfortable and can focus on applying skills directly to real datasets.",
    },
    {
        id: "da-kerala-faq-5",
        question: "What is the salary for a data analyst in Kerala?",
        answer:
            "Entry-level data analysts in Kerala typically earn between ₹20,000 and ₹45,000 per month depending on skills, tools expertise, and the employer. Analysts with strong Python, SQL, and Power BI skills at tech companies, startups, or MNCs can earn significantly more. Freelance and remote data analytics roles are also growing rapidly.",
    },
    {
        id: "da-kerala-faq-6",
        question: "Is the Data Analytics Course available online from anywhere in Kerala?",
        answer:
            "Yes. HACA's online Data Analytics Course is available to learners from across Kerala — including Kochi, Thiruvananthapuram, Thrissur, Kozhikode, Kannur, Kollam, Palakkad, and all other districts. Live sessions are conducted in the evening to suit working professionals and students.",
    },
    {
        id: "da-kerala-faq-7",
        question: "What career roles can I pursue after completing the course?",
        answer:
            "After completing the Data Analytics Course, you can pursue roles such as Data Analyst, Business Intelligence Analyst, SQL Analyst, Power BI Developer, Python Data Analyst, Marketing Analyst, Operations Analyst, and Reporting Analyst. The course also prepares you for freelance data projects and remote roles.",
    },
    {
        id: "da-kerala-faq-8",
        question: "Will I get placement support after the data analytics course?",
        answer:
            "Yes. HACA provides placement assistance including resume building, portfolio guidance, mock interviews, and access to our hiring network. Both online and offline students receive career support to help them find data analytics opportunities.",
    },
    {
        id: "da-kerala-faq-9",
        question: "What is the difference between data analytics and data science?",
        answer:
            "Data analytics focuses on examining existing datasets to draw conclusions, identify trends, and support business decisions using tools like SQL, Excel, Python, and Power BI. Data science is broader and involves building predictive models and machine learning systems. HACA's Data Analytics Course builds the foundational skills that are relevant to both fields.",
    },
    {
        id: "da-kerala-faq-10",
        question: "How do I enrol in HACA's Data Analytics Course in Kerala?",
        answer:
            "You can enrol by clicking the Join Now or Book Your Seat button on this page. Alternatively, call us or fill out the enquiry form and our team will guide you through batch options, schedule, and fee details.",
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
