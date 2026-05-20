import type { Metadata } from "next";

/** Production site — matches legacy WordPress URL. */
export const MARKETING_SCHOOL_SEO_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

/** Canonical path for the Calicut digital marketing SEO landing page. */
export const DIGITAL_MARKETING_CALICUT_SEO_PATH = "/digital-marketing-course-in-calicut" as const;

/** Canonical path for the Kerala digital marketing SEO landing page. */
export const DIGITAL_MARKETING_KERALA_SEO_PATH = "/digital-marketing-course-in-kerala" as const;

/** Canonical path for the Kannur digital marketing SEO landing page. */
export const DIGITAL_MARKETING_KANNUR_SEO_PATH = "/digital-marketing-course-in-kannur" as const;

/** Canonical path for the Trivandrum digital marketing SEO landing page. */
export const DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH = "/digital-marketing-course-in-trivandrum" as const;

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
        pathname.startsWith(`${LEGACY_MARKETING_CALICUT_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_KERALA_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_KERALA_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_KANNUR_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_KANNUR_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH}/`)
    );
}

// ─────────────────────────────────────────────────────────────
// Kerala SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingKeralaFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_KERALA_FAQS: MarketingKeralaFaqItem[] = [
    {
        id: "kerala-faq-1",
        question: "Who can join the Digital Marketing Course in Kerala?",
        answer:
            "Students, fresh graduates, working professionals, freelancers, and business owners from across Kerala are welcome. No prior marketing background is needed — we build from fundamentals to advanced, job-ready skills.",
    },
    {
        id: "kerala-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. Join our 6-month offline AI-integrated program at our Calicut (Kozhikode) centre, or our 5-month online batch from anywhere in Kerala. Both formats include live sessions, mentor support, and hands-on projects.",
    },
    {
        id: "kerala-faq-3",
        question: "What is the course duration, and what skills will I gain?",
        answer:
            "Programs range from 2-month mastery courses to 5–6 month AI-integrated tracks. You will learn SEO, Google Ads, Meta Ads, content marketing, copywriting, social media, e-commerce, AI tools, analytics, and real campaign execution with portfolio-ready work.",
    },
    {
        id: "kerala-faq-4",
        question: "What makes this the best digital marketing institute in Kerala?",
        answer:
            "HACA is backed by a working marketing agency, so training mirrors real client work. You learn from practitioners with genuine industry experience, work on live-style projects, and receive career support — not just a certificate.",
    },
    {
        id: "kerala-faq-5",
        question: "Can I get a job after completing a digital marketing course?",
        answer:
            "Yes. Our career team provides resume guidance, mock interviews, and placement assistance through our industry network. Alumni across Kerala have secured roles at agencies, brands, and as independent freelancers.",
    },
    {
        id: "kerala-faq-6",
        question: "How do I enrol?",
        answer:
            "Fill in the enquiry form on our website or call us directly. Our team will help you choose the right batch and format — online or offline — based on your goals and schedule.",
    },
];

const KERALA_PAGE_TITLE = "Digital Marketing Course in Kerala | AI-Integrated Training | HACA";
const KERALA_PAGE_DESCRIPTION =
    "Join HACA's digital marketing course in Kerala — 350+ hours of AI-integrated training, online and offline batches, real brand projects, expert mentors, and placement support. Learn from anywhere in Kerala.";

export function buildDigitalMarketingKeralaSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KERALA_SEO_PATH}`;

    return {
        title: KERALA_PAGE_TITLE,
        description: KERALA_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: KERALA_PAGE_TITLE,
            description: KERALA_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: KERALA_PAGE_TITLE,
            description: KERALA_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Kerala",
            "digital marketing institute Kerala",
            "online digital marketing course Kerala",
            "best digital marketing course Kerala",
            "digital marketing training Kerala",
            "SEO course Kerala",
            "Google Ads course Kerala",
            "digital marketing course Kochi",
            "digital marketing course Thiruvananthapuram",
            "HACA marketing school Kerala",
        ],
    };
}

export function digitalMarketingKeralaJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KERALA_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: KERALA_PAGE_TITLE,
                description: KERALA_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Kerala",
                description: KERALA_PAGE_DESCRIPTION,
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
                mainEntity: MARKETING_KERALA_FAQS.map((item) => ({
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

// ─────────────────────────────────────────────────────────────
// Kannur SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingKannurFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_KANNUR_FAQS: MarketingKannurFaqItem[] = [
    {
        id: "kannur-faq-1",
        question: "Which is the best Digital Marketing Course in Kannur for beginners?",
        answer:
            "HACA's Digital Marketing Course in Kannur is designed with a beginner-friendly approach that combines practical learning, AI-integrated tools, real projects, and mentorship.",
    },
    {
        id: "kannur-faq-2",
        question: "What is the salary of an entry-level digital marketer in Kannur?",
        answer:
            "Entry-level digital marketers in Kannur typically earn around ₹15,000 to ₹30,000+ per month, depending on skills, specialization, internships, certifications, and practical experience. Opportunities across agencies, startups, local businesses, ecommerce brands, and growing digital companies in Kannur and nearby cities can offer strong learning exposure and long-term career growth.",
    },
    {
        id: "kannur-faq-3",
        question: "Who can join the Digital Marketing Course in Kannur?",
        answer:
            "Anyone who has completed 12th grade or equivalent can join. This course is suitable for students, graduates, working professionals, freelancers, entrepreneurs, and career switchers looking to build practical digital marketing skills.",
    },
    {
        id: "kannur-faq-4",
        question: "Do you provide placement assistance after course completion?",
        answer:
            "Yes. We provide placement support that includes resume building, portfolio guidance, mock interviews, and career preparation sessions.",
    },
    {
        id: "kannur-faq-5",
        question: "Can non-technical students learn digital marketing?",
        answer:
            "Absolutely. No coding or technical background is required to start learning digital marketing.",
    },
    {
        id: "kannur-faq-6",
        question: "Can I start freelancing after completing the course?",
        answer:
            "Yes. The course helps you build practical skills and a portfolio that can support freelance opportunities and client work.",
    },
];

const KANNUR_PAGE_TITLE = "Digital Marketing Course in Kannur | AI-Integrated Training | HACA";
const KANNUR_PAGE_DESCRIPTION =
    "Join HACA's digital marketing course in Kannur — AI-integrated training, online and offline batches, real brand projects, expert mentors, and placement support. Build job-ready skills from Kannur.";

export function buildDigitalMarketingKannurSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KANNUR_SEO_PATH}`;

    return {
        title: KANNUR_PAGE_TITLE,
        description: KANNUR_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: KANNUR_PAGE_TITLE,
            description: KANNUR_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: KANNUR_PAGE_TITLE,
            description: KANNUR_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Kannur",
            "digital marketing institute Kannur",
            "online digital marketing course Kannur",
            "best digital marketing course Kannur",
            "digital marketing training Kannur",
            "SEO course Kannur",
            "Google Ads course Kannur",
            "HACA marketing school Kannur",
            "digital marketing course Kerala",
        ],
    };
}

export function digitalMarketingKannurJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KANNUR_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: KANNUR_PAGE_TITLE,
                description: KANNUR_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Kannur",
                description: KANNUR_PAGE_DESCRIPTION,
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
                    name: "Kannur",
                    containedInPlace: {
                        "@type": "State",
                        name: "Kerala",
                        containedInPlace: {
                            "@type": "Country",
                            name: "India",
                        },
                    },
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: MARKETING_KANNUR_FAQS.map((item) => ({
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

// ─────────────────────────────────────────────────────────────
// Trivandrum SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingTrivandrumFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_TRIVANDRUM_FAQS: MarketingTrivandrumFaqItem[] = [
    {
        id: "trivandrum-faq-1",
        question: "Who can join the Digital Marketing Course in Trivandrum?",
        answer:
            "Anyone who has completed 12th grade or equivalent can join. Whether you're a student, working professional, freelancer, entrepreneur, or career switcher, this course is designed to build practical digital marketing skills from scratch.",
    },
    {
        id: "trivandrum-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. HACA's Digital Marketing Course is available both online and offline, so you can pick the mode that fits your schedule and learning style.",
    },
    {
        id: "trivandrum-faq-3",
        question: "How long is HACA's digital marketing course, and what will I learn?",
        answer:
            "The offline digital marketing course runs for 6 months, including 1-month of hands-on internship experience, covering SEO, social media, email marketing, paid ads, analytics, and more. The online course is scheduled for 5 months and follows the same advanced curriculum with live, interactive sessions.",
    },
    {
        id: "trivandrum-faq-4",
        question: "What makes HACA the best digital marketing institute in Trivandrum?",
        answer:
            "HACA follows a 90% practical and 10% theory-based learning approach, helping students gain real industry exposure through mentorship, live projects, internships, and placement support.",
    },
    {
        id: "trivandrum-faq-5",
        question: "Will I get real-world experience during the course?",
        answer:
            "Yes. You'll work on live projects, run campaigns for real brands, and apply your skills during an internship as part of the course.",
    },
    {
        id: "trivandrum-faq-6",
        question: "Do you provide placement assistance?",
        answer:
            "Yes. HACA offers 100% placement assistance with resume support, mock interviews, portfolio preparation, and career guidance to help students become industry-ready.",
    },
    {
        id: "trivandrum-faq-7",
        question: "Is this course suitable for beginners or experienced marketers?",
        answer:
            "Both! Beginners get a strong foundation in digital marketing, while experienced marketers can upgrade their skills, learn advanced strategies, and explore specialisation options.",
    },
    {
        id: "trivandrum-faq-8",
        question: "Will I have access to mentors after the course ends?",
        answer:
            "Yes. HACA provides lifetime access to our community, including mentors, alumni, and industry experts for networking and guidance.",
    },
    {
        id: "trivandrum-faq-9",
        question: "Can I work while doing the course?",
        answer:
            "Yes. Our online batch is designed for working professionals, with evening sessions and flexible learning options.",
    },
    {
        id: "trivandrum-faq-10",
        question: "How do I enrol?",
        answer:
            "You can reach out via our website or contact us directly to check course availability and book your slot.",
    },
];

const TRIVANDRUM_PAGE_TITLE = "Digital Marketing Course in Trivandrum | AI-Integrated Training | HACA";
const TRIVANDRUM_PAGE_DESCRIPTION =
    "Join HACA's digital marketing course in Trivandrum — AI-integrated training, online and offline batches, real brand projects, expert mentors, and placement support. Build job-ready skills.";

export function buildDigitalMarketingTrivandrumSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH}`;

    return {
        title: TRIVANDRUM_PAGE_TITLE,
        description: TRIVANDRUM_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: TRIVANDRUM_PAGE_TITLE,
            description: TRIVANDRUM_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: TRIVANDRUM_PAGE_TITLE,
            description: TRIVANDRUM_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Trivandrum",
            "digital marketing institute Trivandrum",
            "online digital marketing course Trivandrum",
            "best digital marketing course Trivandrum",
            "digital marketing training Trivandrum",
            "SEO course Trivandrum",
            "Google Ads course Trivandrum",
            "digital marketing course Thiruvananthapuram",
            "HACA marketing school Trivandrum",
            "digital marketing course after 12th Trivandrum",
        ],
    };
}

export function digitalMarketingTrivandrumJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: TRIVANDRUM_PAGE_TITLE,
                description: TRIVANDRUM_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Trivandrum",
                description: TRIVANDRUM_PAGE_DESCRIPTION,
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
                    name: "Thiruvananthapuram",
                    alternateName: "Trivandrum",
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: MARKETING_TRIVANDRUM_FAQS.map((item) => ({
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
