import type { Metadata } from "next";

/** Production site — matches legacy WordPress URL. */
export const MARKETING_SCHOOL_SEO_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

/** Canonical path for the Calicut digital marketing SEO landing page. */
export const DIGITAL_MARKETING_CALICUT_SEO_PATH = "/digital-marketing-course-in-calicut" as const;

/** @deprecated Use {@link DIGITAL_MARKETING_CALICUT_SEO_PATH} — kept for redirects. */
export const LEGACY_MARKETING_CALICUT_SEO_PATH = "/marketing-course-in-calicut" as const;

export type MarketingCalicutFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_CALICUT_FAQS: MarketingCalicutFaqItem[] = [
    {
        id: "calicut-faq-1",
        question: "Who can join the Digital Marketing Course in Calicut?",
        answer:
            "Anyone with a genuine interest in marketing can join—students, fresh graduates, working professionals, freelancers, and business owners. You do not need a marketing background; we start from fundamentals and build up to advanced, job-ready skills.",
    },
    {
        id: "calicut-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. HACA offers flexible learning paths so you can study online or attend offline sessions in Calicut, depending on the program you choose. Our team can help you pick the format that fits your schedule and goals.",
    },
    {
        id: "calicut-faq-3",
        question: "How long is the course, and what will I learn?",
        answer:
            "Our flagship digital marketing program runs for six months and covers SEO, paid ads, social media, content, analytics, AI tools, and real campaign execution. You graduate with practical skills and portfolio work, not just theory.",
    },
    {
        id: "calicut-faq-4",
        question: "What makes HACA the best digital marketing institute in Calicut?",
        answer:
            "HACA is backed by a working marketing agency, so your training mirrors real client work. You learn from practitioners, work on live-style projects, and get mentorship focused on careers—not only certificates.",
    },
    {
        id: "calicut-faq-5",
        question: "Will I get real-world experience during the offline course?",
        answer:
            "Yes. Offline learners work on hands-on exercises, campaign setups, and project-based assignments that reflect what agencies and brands expect. The goal is confidence you can apply skills from day one on the job.",
    },
    {
        id: "calicut-faq-6",
        question: "Do you provide placement assistance?",
        answer:
            "We support you with resume guidance, interview preparation, and placement assistance through our network and career team. Many alumni have moved into roles across agencies, brands, and freelance paths.",
    },
    {
        id: "calicut-faq-7",
        question: "Is this course suitable for beginners or experienced marketers?",
        answer:
            "Both. Beginners get a clear step-by-step foundation, while experienced marketers can sharpen strategy, analytics, and advanced channels. Mentors adapt feedback to your current level.",
    },
    {
        id: "calicut-faq-8",
        question: "Will I have access to mentors after the course ends?",
        answer:
            "You stay connected to the HACA community and can reach out for guidance as you grow in your career. Alumni support and networking help you keep learning after the program ends.",
    },
    {
        id: "calicut-faq-9",
        question: "Can I work while doing the course?",
        answer:
            "Yes. Many students balance work or other commitments. Online and flexible batch options are designed for working professionals who want to upskill without leaving their current job.",
    },
    {
        id: "calicut-faq-10",
        question: "How do I enrol?",
        answer:
            "Contact HACA through our website or visit our Calicut centre to speak with the admissions team. We will walk you through batches, fees, and the right program—and help you reserve your seat.",
    },
];

const PAGE_TITLE = "Digital Marketing Course in Calicut | 350+ Hours of Training";
const PAGE_DESCRIPTION =
    "Join HACA's digital marketing course in Calicut—350+ hours of AI-integrated training, real brand projects, online and offline batches, expert mentors, and placement support. Enquire now.";

export function isMarketingSchoolSeoPath(pathname: string): boolean {
    return (
        pathname === DIGITAL_MARKETING_CALICUT_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_CALICUT_SEO_PATH}/`) ||
        pathname === LEGACY_MARKETING_CALICUT_SEO_PATH ||
        pathname.startsWith(`${LEGACY_MARKETING_CALICUT_SEO_PATH}/`)
    );
}

export function buildDigitalMarketingCalicutSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_CALICUT_SEO_PATH}`;

    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Calicut",
            "digital marketing institute Calicut",
            "marketing course Calicut",
            "HACA marketing school",
            "SEO course Calicut",
            "Google Ads course Calicut",
        ],
    };
}

export function digitalMarketingCalicutSeoJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_CALICUT_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: PAGE_TITLE,
                description: PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Calicut",
                description: PAGE_DESCRIPTION,
                provider: {
                    "@type": "EducationalOrganization",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
                url,
                educationalLevel: "Beginner to Advanced",
                courseMode: ["Onsite", "Online"],
                inLanguage: "en",
                areaServed: {
                    "@type": "City",
                    name: "Kozhikode",
                    alternateName: "Calicut",
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: MARKETING_CALICUT_FAQS.map((item) => ({
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
