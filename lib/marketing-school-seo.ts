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

/** Canonical path for the Kollam digital marketing SEO landing page. */
export const DIGITAL_MARKETING_KOLLAM_SEO_PATH = "/digital-marketing-course-in-kollam" as const;

/** Canonical path for the Kasaragod digital marketing SEO landing page. */
export const DIGITAL_MARKETING_KASARAGOD_SEO_PATH = "/digital-marketing-course-in-kasaragod" as const;

/** Canonical path for the Palakkad digital marketing SEO landing page. */
export const DIGITAL_MARKETING_PALAKKAD_SEO_PATH = "/digital-marketing-course-in-palakkad" as const;

/** Canonical path for the Wayanad digital marketing SEO landing page. */
export const DIGITAL_MARKETING_WAYANAD_SEO_PATH = "/digital-marketing-course-in-wayanad" as const;

/** Canonical path for the Kochi digital marketing SEO landing page. */
export const DIGITAL_MARKETING_KOCHI_SEO_PATH = "/digital-marketing-course-in-kochi" as const;

/** Canonical path for the Malappuram digital marketing SEO landing page. */
export const DIGITAL_MARKETING_MALAPPURAM_SEO_PATH = "/digital-marketing-course-in-malappuram" as const;

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
            "Anyone who has completed 12th grade or equivalent can join. Whether you're a student, working professional, or looking to switch careers, this course is designed to build your skills from scratch.",
    },
    {
        id: "calicut-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. HACA's Digital Marketing Course in Calicut is available both online and offline, so you can pick the mode that fits your schedule and learning style.",
    },
    {
        id: "calicut-faq-3",
        question: "How long is HACA's digital marketing course, and what will I learn?",
        answer:
            "The offline digital marketing course runs for 6 months, including 1 month of hands-on internship experience, covering SEO, social media, email marketing, paid ads, analytics, and more. The online course is scheduled for 5 months and follows the same advanced curriculum with live, interactive sessions.",
    },
    {
        id: "calicut-faq-4",
        question: "What makes HACA the best digital marketing institute in Calicut?",
        answer:
            "HACA follows a 90% practical and 10% theory-based learning approach, helping students gain real industry exposure through mentorship, live projects, internships, and placement support. That's one of the reasons students consider HACA among the best institutes for digital marketing courses in Calicut.",
    },
    {
        id: "calicut-faq-5",
        question: "Will I get real-world experience during the offline course?",
        answer:
            "Absolutely. You'll work on live projects, run campaigns for real brands, and apply your skills during an internship as part of the course.",
    },
    {
        id: "calicut-faq-6",
        question: "Do you provide placement assistance?",
        answer:
            "Yes. HACA offers 100% placement assistance with resume support, mock interviews, portfolio preparation, and career guidance to help students become industry-ready and secure their first digital marketing role.",
    },
    {
        id: "calicut-faq-7",
        question: "Is this course suitable for beginners or experienced marketers?",
        answer:
            "Both! Beginners get a strong foundation in digital marketing, while experienced marketers can upgrade their skills, learn advanced strategies, and explore specialisation options.",
    },
    {
        id: "calicut-faq-8",
        question: "Will I have access to mentors after the course ends?",
        answer:
            "Yes. HACA provides lifetime access to our community, including mentors, alumni, and industry experts for networking and guidance.",
    },
    {
        id: "calicut-faq-9",
        question: "Can I work while doing the course?",
        answer:
            "Yes. Our online batch is designed for working professionals, with evening sessions and flexible learning options. Offline students can manage their schedule with our structured 5-month program.",
    },
    {
        id: "calicut-faq-10",
        question: "How do I enrol?",
        answer:
            "You can reach out via our website or contact us directly to check course availability. Book your slot by clicking the Join Now button on this page.",
    },
];

const PAGE_TITLE = "Best Digital Marketing Course in Calicut | 500+ Hours | HACA";
const PAGE_DESCRIPTION =
    "Join HACA's AI-integrated Digital Marketing Course in Calicut — 500+ hours of training, real brand projects, SEO, Google Ads, Meta Ads, AI tools, online and offline batches, expert mentors, and 100% placement support. Awarded Best Institute for Upskilling – World Education Summit 2024.";

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
        pathname.startsWith(`${DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_KOLLAM_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_KOLLAM_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_KASARAGOD_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_KASARAGOD_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_PALAKKAD_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_PALAKKAD_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_MALAPPURAM_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_MALAPPURAM_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_WAYANAD_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_WAYANAD_SEO_PATH}/`) ||
        pathname === DIGITAL_MARKETING_KOCHI_SEO_PATH ||
        pathname.startsWith(`${DIGITAL_MARKETING_KOCHI_SEO_PATH}/`)
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
            "Anyone who has completed 12th grade or equivalent can join. Whether you're a student, working professional, freelancer, or looking to switch careers, HACA's Digital Marketing Course in Kerala is designed to build your skills from scratch, all the way to advanced, job-ready level.",
    },
    {
        id: "kerala-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. HACA's Digital Marketing Course in Kerala is available both online and offline. You can join our 6-month offline program at our Kozhikode (Calicut) campus or opt for our 5-month online batch from anywhere in Kerala. Both include live sessions, mentor support, and hands-on projects.",
    },
    {
        id: "kerala-faq-3",
        question: "What makes HACA the best digital marketing institute in Kerala?",
        answer:
            "HACA follows a 90% practical and 10% theory-based learning approach, helping students gain real industry exposure through mentorship, live projects, internships, and placement support. Our AI-integrated curriculum, covering AEO, GEO, automation, and advanced tools, is one of the reasons students consider HACA among the best institutes for digital marketing in Kerala.",
    },
    {
        id: "kerala-faq-4",
        question: "Do you provide placement assistance?",
        answer:
            "Yes. HACA offers 100% placement assistance with resume support, mock interviews, portfolio preparation, and career guidance to help students become industry-ready and secure their first digital marketing role.",
    },
    {
        id: "kerala-faq-5",
        question: "How do I enrol?",
        answer:
            "You can reach out via our website or contact us directly to check course availability. Book your slot by clicking the Join Now button on this page.",
    },
];

const KERALA_PAGE_TITLE = "Best Digital Marketing Course in Kerala | 500+ Hours | HACA";
const KERALA_PAGE_DESCRIPTION =
    "Join HACA's AI-integrated Digital Marketing Course in Kerala — 500+ hours of training, real brand projects, SEO, Google Ads, Meta Ads, AI tools, AEO, GEO, online and offline batches, expert mentors, and 100% placement support. Awarded Best Institute for Upskilling – World Education Summit 2024.";

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
            "best digital marketing course in Kerala",
            "digital marketing institute Kerala",
            "online digital marketing course Kerala",
            "digital marketing training Kerala",
            "AI integrated digital marketing course Kerala",
            "digital marketing course with placement Kerala",
            "SEO course Kerala",
            "Google Ads course Kerala",
            "Meta Ads course Kerala",
            "digital marketing course Kozhikode",
            "digital marketing course Kochi",
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
        question: "Who can join this Digital Marketing Course in Trivandrum?",
        answer:
            "Anyone who has completed 12th grade or equivalent can join. Whether you're a student, professional, freelancer, entrepreneur, or career switcher from Thiruvananthapuram, this course is designed to help you build practical digital marketing skills from scratch.",
    },
    {
        id: "trivandrum-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. Learners from Thiruvananthapuram can attend live online sessions or choose offline training at HACA's Kozhikode campus based on their convenience and learning preference.",
    },
    {
        id: "trivandrum-faq-3",
        question: "How long is HACA's digital marketing course, and what will I learn?",
        answer:
            "The offline course runs for 6 months, including internship opportunities at our Kozhikode campus. The online program runs for 5 months with live interactive sessions covering SEO, social media marketing, Google Ads, AI tools, e-Commerce, analytics, content marketing, and more.",
    },
    {
        id: "trivandrum-faq-4",
        question: "What makes HACA a trusted choice for digital marketing learners from Trivandrum?",
        answer:
            "HACA follows a 90% practical and 10% theory-based learning approach, helping students gain real industry exposure through mentorship, live projects, internships, and placement support. This helps learners gain industry-ready skills relevant to Trivandrum's growing digital, startup, and Technopark ecosystem.",
    },
    {
        id: "trivandrum-faq-5",
        question: "Will I get real-world experience during the offline course?",
        answer:
            "Absolutely. You'll work on live projects, run campaigns for real brands, and apply your skills during an internship as part of the course.",
    },
    {
        id: "trivandrum-faq-6",
        question: "Do you provide placement assistance?",
        answer:
            "Yes. HACA provides placement assistance for both online and offline students, including resume support, mock interviews, portfolio preparation, and career guidance to help learners prepare for digital marketing opportunities.",
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
        question: "Is this course suitable for working professionals in Trivandrum?",
        answer:
            "Yes. Our online batch is designed for working professionals, with evening sessions and flexible learning options. Offline students can manage their schedule with our structured 6-month program.",
    },
    {
        id: "trivandrum-faq-10",
        question: "How do I enrol?",
        answer:
            "You can reach out via our website or contact us directly to check course availability. Book your slot by clicking the Join Now button on this page.",
    },
    {
        id: "trivandrum-faq-11",
        question: "Does HACA have hiring partners in Trivandrum?",
        answer:
            "Yes. HACA has digital marketing hiring partners and industry connections across Kerala, including opportunities connected to agencies, startups, ecommerce businesses, and companies in Trivandrum's growing digital ecosystem.",
    },
    {
        id: "trivandrum-faq-12",
        question: "What is the salary of an entry-level digital marketer in Trivandrum?",
        answer:
            "Entry-level digital marketers in Thiruvananthapuram typically earn around ₹15,000 to ₹30,000+ per month depending on skills, specialization, internships, certifications, and the company. Roles in Technopark companies, agencies, startups, and ecommerce brands may offer higher growth opportunities.",
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

// ─────────────────────────────────────────────────────────────
// Kollam SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingKollamFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_KOLLAM_FAQS: MarketingKollamFaqItem[] = [
    {
        id: "kollam-faq-1",
        question: "Which is the best Digital Marketing Course in Kollam for beginners?",
        answer:
            "The best Digital Marketing Course in Kollam for beginners is the one that focuses on practical learning rather than only classroom theory. Look for a course that includes live projects, mentor guidance, industry-relevant tools, updated topics like AI in marketing, and career support. HACA follows this practical approach through AI-integrated learning, project-based training, and mentor support designed to help learners gain real-world exposure.",
    },
    {
        id: "kollam-faq-2",
        question: "What is the salary of an entry-level digital marketer in Kollam?",
        answer:
            "Freshers typically earn around ₹15,000 to ₹30,000+, depending on skills, practical experience and specialisation.",
    },
    {
        id: "kollam-faq-3",
        question: "Who can join the Digital Marketing Course in Kollam?",
        answer:
            "Students, graduates, entrepreneurs, freelancers and professionals can join.",
    },
    {
        id: "kollam-faq-4",
        question: "Do you provide placement support?",
        answer:
            "Yes, we do provide placement support. Resume guidance, portfolio support and interview preparation are included.",
    },
    {
        id: "kollam-faq-5",
        question: "Can non-technical students learn digital marketing?",
        answer:
            "Yes, a non-technical student can learn digital marketing as no technical background is needed.",
    },
    {
        id: "kollam-faq-6",
        question: "Can I start freelancing after completing this course?",
        answer:
            "Yes, you can start freelancing after completing this course. Projects and portfolio activities can help support freelance opportunities.",
    },
];

const KOLLAM_PAGE_TITLE = "Digital Marketing Course in Kollam | AI-Integrated Training | HACA";
const KOLLAM_PAGE_DESCRIPTION =
    "Join HACA's digital marketing course in Kollam — AI-integrated training, online and offline batches, real brand projects, expert mentors, and placement support. Build job-ready digital marketing skills from Kollam.";

export function buildDigitalMarketingKollamSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KOLLAM_SEO_PATH}`;

    return {
        title: KOLLAM_PAGE_TITLE,
        description: KOLLAM_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: KOLLAM_PAGE_TITLE,
            description: KOLLAM_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: KOLLAM_PAGE_TITLE,
            description: KOLLAM_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Kollam",
            "digital marketing institute Kollam",
            "online digital marketing course Kollam",
            "best digital marketing course Kollam",
            "digital marketing training Kollam",
            "SEO course Kollam",
            "Google Ads course Kollam",
            "HACA marketing school Kollam",
            "digital marketing course Kerala",
        ],
    };
}

export function digitalMarketingKollamJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KOLLAM_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: KOLLAM_PAGE_TITLE,
                description: KOLLAM_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Kollam",
                description: KOLLAM_PAGE_DESCRIPTION,
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
                    name: "Kollam",
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
                mainEntity: MARKETING_KOLLAM_FAQS.map((item) => ({
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
// Palakkad SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingPalakkadFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_PALAKKAD_FAQS: MarketingPalakkadFaqItem[] = [
    {
        id: "palakkad-faq-1",
        question: "Which is the best Digital Marketing Course in Palakkad for beginners?",
        answer:
            "The best Digital Marketing Course in Palakkad focuses on practical implementation, AI integrated learning, projects and mentorship. HACA follows this approach through industry-focused training and live execution.",
    },
    {
        id: "palakkad-faq-2",
        question: "What is the starting salary of a digital marketer in Palakkad?",
        answer:
            "Entry-level professionals can earn approximately ₹15,000–₹30,000+ depending on skills and practical experience.",
    },
    {
        id: "palakkad-faq-3",
        question: "Who can join this course?",
        answer:
            "Students who have completed their 12th, graduates, professionals, entrepreneurs and freelancers can join this course.",
    },
    {
        id: "palakkad-faq-4",
        question: "Do you provide placement support?",
        answer:
            "Yes, we do provide placement support. Resume building, portfolio guidance and interview preparation are included.",
    },
    {
        id: "palakkad-faq-5",
        question: "Can beginners without technical knowledge learn digital marketing?",
        answer:
            "Yes, as a beginner, you can learn digital marketing without technical expertise; you only need basic computer skills.",
    },
    {
        id: "palakkad-faq-6",
        question: "Can I start freelancing after course completion?",
        answer:
            "Yes you can start freelancing after completion of the course. Practical projects and portfolio work can support freelance opportunities.",
    },
];

const PALAKKAD_PAGE_TITLE = "Best Digital Marketing Course in Palakkad | 500+ Hours | HACA";
const PALAKKAD_PAGE_DESCRIPTION =
    "Join HACA's AI-integrated Digital Marketing Course in Palakkad — 500+ hours of training, real brand projects, SEO, Google Ads, Meta Ads, AEO, GEO, AI tools, online and offline batches, expert mentors, and 100% placement support. Awarded Best Institute for Upskilling – World Education Summit 2024.";

export function buildDigitalMarketingPalakkadSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_PALAKKAD_SEO_PATH}`;

    return {
        title: PALAKKAD_PAGE_TITLE,
        description: PALAKKAD_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: PALAKKAD_PAGE_TITLE,
            description: PALAKKAD_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: PALAKKAD_PAGE_TITLE,
            description: PALAKKAD_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Palakkad",
            "best digital marketing course in Palakkad",
            "digital marketing institute Palakkad",
            "online digital marketing course Palakkad",
            "digital marketing training Palakkad",
            "AI integrated digital marketing course Palakkad",
            "digital marketing course with placement Palakkad",
            "SEO course Palakkad",
            "Google Ads course Palakkad",
            "digital marketing course Palghat",
            "digital marketing course Ottapalam",
            "HACA marketing school Palakkad",
            "digital marketing course Kerala",
        ],
    };
}

export function digitalMarketingPalakkadJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_PALAKKAD_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: PALAKKAD_PAGE_TITLE,
                description: PALAKKAD_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Palakkad",
                description: PALAKKAD_PAGE_DESCRIPTION,
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
                    name: "Palakkad",
                    alternateName: "Palghat",
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
                mainEntity: MARKETING_PALAKKAD_FAQS.map((item) => ({
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
// Kasaragod SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingKasaragodFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_KASARAGOD_FAQS: MarketingKasaragodFaqItem[] = [
    {
        id: "kasaragod-faq-1",
        question: "Which is the best Digital Marketing Course in Kasaragod for beginners?",
        answer:
            "Learners searching for beginner-friendly marketing training usually benefit more from project-based learning, mentor support, and updated AI-focused topics. HACA follows an AI integrated, project based approach designed to help learners build real-world skills.",
    },
    {
        id: "kasaragod-faq-2",
        question: "What is the starting salary of a digital marketer in Kasaragod?",
        answer:
            "Freshers can earn around Rs.15,000 to Rs.25,000+ depending on practical skills, experience and specialization.",
    },
    {
        id: "kasaragod-faq-3",
        question: "Do you offer placement support?",
        answer:
            "Yes. Resume support, portfolio guidance and interview preparation are included.",
    },
    {
        id: "kasaragod-faq-4",
        question: "Can non technical students learn digital marketing?",
        answer:
            "Yes. No technical background is required.",
    },
    {
        id: "kasaragod-faq-5",
        question: "Can I begin freelancing after completing the course?",
        answer:
            "Yes. Practical projects and portfolio development help learners start freelance opportunities.",
    },
];

const KASARAGOD_PAGE_TITLE = "Best Digital Marketing Course in Kasaragod | 500+ Hours | HACA";
const KASARAGOD_PAGE_DESCRIPTION =
    "Join HACA's AI-integrated Digital Marketing Course in Kasaragod — 500+ hours of training, real brand projects, SEO, Google Ads, Meta Ads, AEO, GEO, AI tools, online and offline batches, expert mentors, and 100% placement support. Awarded Best Institute for Upskilling – World Education Summit 2024.";

export function buildDigitalMarketingKasaragodSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KASARAGOD_SEO_PATH}`;

    return {
        title: KASARAGOD_PAGE_TITLE,
        description: KASARAGOD_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: KASARAGOD_PAGE_TITLE,
            description: KASARAGOD_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: KASARAGOD_PAGE_TITLE,
            description: KASARAGOD_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Kasaragod",
            "best digital marketing course in Kasaragod",
            "digital marketing institute Kasaragod",
            "online digital marketing course Kasaragod",
            "digital marketing training Kasaragod",
            "AI integrated digital marketing course Kasaragod",
            "digital marketing course with placement Kasaragod",
            "SEO course Kasaragod",
            "Google Ads course Kasaragod",
            "digital marketing course Kanhangad",
            "HACA marketing school Kasaragod",
            "digital marketing course Kerala",
        ],
    };
}

export function digitalMarketingKasaragodJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KASARAGOD_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: KASARAGOD_PAGE_TITLE,
                description: KASARAGOD_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Kasaragod",
                description: KASARAGOD_PAGE_DESCRIPTION,
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
                    name: "Kasaragod",
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
                mainEntity: MARKETING_KASARAGOD_FAQS.map((item) => ({
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
// Malappuram SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingMalappuramFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_MALAPPURAM_FAQS: MarketingMalappuramFaqItem[] = [
    {
        id: "malappuram-faq-1",
        question: "Who can join the Digital Marketing Course in Malappuram?",
        answer:
            "Anyone who has completed 12th grade or equivalent can join. Students, fresh graduates, working professionals, freelancers, entrepreneurs, and career switchers from Malappuram are all welcome. No prior marketing background is required.",
    },
    {
        id: "malappuram-faq-2",
        question: "Can I choose between online and offline learning?",
        answer:
            "Yes. Learners from Malappuram can attend live online sessions from home or choose offline training at HACA's Kozhikode campus based on their preference and schedule.",
    },
    {
        id: "malappuram-faq-3",
        question: "How long is HACA's digital marketing course, and what will I learn?",
        answer:
            "The offline course runs for 6 months including internship at our Kozhikode campus. The online program runs for 5 months with live interactive sessions covering SEO, social media marketing, Google Ads, AI tools, e-Commerce, analytics, content marketing, and more.",
    },
    {
        id: "malappuram-faq-4",
        question: "What makes HACA a trusted choice for digital marketing learners from Malappuram?",
        answer:
            "HACA follows a 90% practical and 10% theory-based learning approach, helping students gain real industry exposure through mentorship, live projects, internships, and placement support. This prepares learners for opportunities in Malappuram's growing business and digital ecosystem.",
    },
    {
        id: "malappuram-faq-5",
        question: "Will I get real-world experience during the course?",
        answer:
            "Absolutely. You'll work on live projects, run campaigns for real brands, and apply your skills during an internship as part of the offline course program.",
    },
    {
        id: "malappuram-faq-6",
        question: "Do you provide placement assistance?",
        answer:
            "Yes. HACA provides placement assistance for both online and offline students, including resume support, mock interviews, portfolio preparation, and career guidance to help learners find digital marketing opportunities.",
    },
    {
        id: "malappuram-faq-7",
        question: "Is this course suitable for beginners or experienced marketers?",
        answer:
            "Both. Beginners get a strong foundation in digital marketing, while experienced marketers can upgrade their skills, learn advanced strategies, and explore specialisation options.",
    },
    {
        id: "malappuram-faq-8",
        question: "Is this course suitable for working professionals in Malappuram?",
        answer:
            "Yes. Our online batch is designed for working professionals with evening sessions and flexible learning options. Offline students can manage their schedule with our structured 6-month program.",
    },
    {
        id: "malappuram-faq-9",
        question: "What is the salary of an entry-level digital marketer in Malappuram?",
        answer:
            "Entry-level digital marketers in Malappuram typically earn around ₹15,000 to ₹30,000+ per month depending on skills, specialization, internships, certifications, and the company. Roles at agencies, startups, retail brands, and ecommerce businesses offer strong career growth potential.",
    },
    {
        id: "malappuram-faq-10",
        question: "How do I enrol?",
        answer:
            "You can reach out via our website or contact us directly to check course availability. Book your slot by clicking the Join Now button on this page.",
    },
];

const MALAPPURAM_PAGE_TITLE = "Digital Marketing Course in Malappuram | AI-Integrated Training | HACA";
const MALAPPURAM_PAGE_DESCRIPTION =
    "Join HACA's digital marketing course in Malappuram — AI-integrated training, online and offline batches, real brand projects, expert mentors, and placement support. Build job-ready digital marketing skills from Malappuram.";

export function buildDigitalMarketingMalappuramSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_MALAPPURAM_SEO_PATH}`;

    return {
        title: MALAPPURAM_PAGE_TITLE,
        description: MALAPPURAM_PAGE_DESCRIPTION,
        alternates: { canonical },
        robots: { index: true, follow: true },
        openGraph: {
            title: MALAPPURAM_PAGE_TITLE,
            description: MALAPPURAM_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: MALAPPURAM_PAGE_TITLE,
            description: MALAPPURAM_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Malappuram",
            "digital marketing institute Malappuram",
            "online digital marketing course Malappuram",
            "best digital marketing course Malappuram",
            "digital marketing training Malappuram",
            "SEO course Malappuram",
            "Google Ads course Malappuram",
            "HACA marketing school Malappuram",
            "digital marketing course Kerala",
        ],
    };
}

export function digitalMarketingMalappuramJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_MALAPPURAM_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: MALAPPURAM_PAGE_TITLE,
                description: MALAPPURAM_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Malappuram",
                description: MALAPPURAM_PAGE_DESCRIPTION,
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
                    name: "Malappuram",
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
                mainEntity: MARKETING_MALAPPURAM_FAQS.map((item) => ({
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
            "best digital marketing course in Calicut",
            "digital marketing institute Calicut",
            "digital marketing training Calicut",
            "digital marketing course Kozhikode",
            "best digital marketing institute in Calicut",
            "AI integrated digital marketing course Calicut",
            "online digital marketing course Calicut",
            "SEO course Calicut",
            "Google Ads course Calicut",
            "Meta Ads course Calicut",
            "digital marketing course with placement Calicut",
            "HACA marketing school Calicut",
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

// ─────────────────────────────────────────────────────────────
// Wayanad SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingWayanadFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_WAYANAD_FAQS: MarketingWayanadFaqItem[] = [
    {
        id: "wayanad-faq-1",
        question: "Which is the best Digital Marketing Course in Wayanad for beginners?",
        answer:
            "The best Digital Marketing Course for beginners focuses on practical implementation, live projects, AI-integrated learning and mentor support. HACA follows this approach through industry-focused learning methods.",
    },
    {
        id: "wayanad-faq-2",
        question: "What is the salary of an entry-level digital marketer in Wayanad?",
        answer:
            "Freshers can typically earn between ₹15,000 to ₹30,000+ depending on skills and practical exposure.",
    },
    {
        id: "wayanad-faq-3",
        question: "Who can join this AI-integrated marketing program?",
        answer:
            "Students, graduates, entrepreneurs, freelancers and professionals can join.",
    },
    {
        id: "wayanad-faq-4",
        question: "Do you provide placement support?",
        answer:
            "Yes. Resume guidance, portfolio preparation and interview support are included.",
    },
    {
        id: "wayanad-faq-5",
        question: "Can non-technical students learn digital marketing?",
        answer:
            "Yes. No technical background is needed.",
    },
    {
        id: "wayanad-faq-6",
        question: "Can I start freelancing after completing the course?",
        answer:
            "Yes. Portfolio projects and assignments can help support freelance opportunities.",
    },
];

const WAYANAD_PAGE_TITLE = "Best Digital Marketing Course in Wayanad | 500+ Hours | HACA";
const WAYANAD_PAGE_DESCRIPTION =
    "Join HACA's AI-integrated Digital Marketing Course in Wayanad — 500+ hours of training, real brand projects, SEO, Google Ads, Meta Ads, AEO, GEO, AI tools, online and offline batches, expert mentors, and 100% placement support. Awarded Best Institute for Upskilling – World Education Summit 2024.";

export function buildDigitalMarketingWayanadSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_WAYANAD_SEO_PATH}`;

    return {
        title: WAYANAD_PAGE_TITLE,
        description: WAYANAD_PAGE_DESCRIPTION,
        alternates: { canonical },
        openGraph: {
            title: WAYANAD_PAGE_TITLE,
            description: WAYANAD_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: WAYANAD_PAGE_TITLE,
            description: WAYANAD_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Wayanad",
            "best digital marketing course in Wayanad",
            "digital marketing institute Wayanad",
            "online digital marketing course Wayanad",
            "digital marketing training Wayanad",
            "AI integrated digital marketing course Wayanad",
            "digital marketing course with placement Wayanad",
            "SEO course Wayanad",
            "Google Ads course Wayanad",
            "digital marketing course Kalpetta",
            "digital marketing course Mananthavady",
            "HACA marketing school Wayanad",
            "digital marketing course after 12th Wayanad",
        ],
    };
}

export function digitalMarketingWayanadJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_WAYANAD_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: WAYANAD_PAGE_TITLE,
                description: WAYANAD_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Wayanad",
                description: WAYANAD_PAGE_DESCRIPTION,
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
                    name: "Wayanad",
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
                mainEntity: MARKETING_WAYANAD_FAQS.map((item) => ({
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
// Kochi SEO page
// ─────────────────────────────────────────────────────────────

export type MarketingKochiFaqItem = {
    id: string;
    question: string;
    answer: string;
};

export const MARKETING_KOCHI_FAQS: MarketingKochiFaqItem[] = [
    {
        id: "kochi-faq-1",
        question: "Which is the best Digital Marketing Course in Kochi for beginners?",
        answer:
            "HACA's Digital Marketing Course in Kochi is built for beginners and working professionals alike. With a 90% practical and 10% theory approach, AI-integrated tools, live projects, and mentorship from industry experts, it is widely considered one of the best digital marketing courses available to Kochi learners — both online and offline.",
    },
    {
        id: "kochi-faq-2",
        question: "Can I join the Digital Marketing Course from Kochi online?",
        answer:
            "Yes. Learners from Kochi, Ernakulam, Kakkanad, Edappally, and nearby areas can join our live online batch and get the same mentor access, real projects, and placement support as campus students — without relocating. Offline training is available at our Kozhikode campus.",
    },
    {
        id: "kochi-faq-3",
        question: "What will I learn in HACA's Digital Marketing Course in Kochi?",
        answer:
            "You will learn SEO, Google Ads, Meta Ads, content marketing, email marketing, e-commerce and Shopify marketing, website development, AI tools and automation, influencer marketing, and analytics — all through hands-on projects and live interactive sessions covering 500+ hours of training.",
    },
    {
        id: "kochi-faq-4",
        question: "Does HACA provide placement support for students from Kochi?",
        answer:
            "Yes. HACA provides 100% placement assistance including resume building, mock interviews, portfolio preparation, and career guidance. Many of our Kochi students have secured digital marketing roles in agencies, startups, and corporate brands across Kerala and India.",
    },
    {
        id: "kochi-faq-5",
        question: "What is the salary of a digital marketer in Kochi?",
        answer:
            "Entry-level digital marketers in Kochi typically earn Rs.18,000 to Rs.35,000+ per month, with scope for growth into performance marketing, SEO, and management roles. Kochi's thriving IT corridor, fintech, and e-commerce ecosystem creates strong demand for skilled digital marketers.",
    },
    {
        id: "kochi-faq-6",
        question: "Is there a certificate after completing the Digital Marketing Course in Kochi?",
        answer:
            "Yes. You receive an industry-recognised certificate from HACA Marketing School on completing the course. We also guide you to earn certifications from Google, Meta, and HubSpot to strengthen your professional profile.",
    },
    {
        id: "kochi-faq-7",
        question: "How do I enrol in the Digital Marketing Course from Kochi?",
        answer:
            "Click the Join Now or Enquire Now button on this page, or visit our contact page. Our admissions team will walk you through batch schedules, course options, and any queries you have before you begin.",
    },
];

const KOCHI_PAGE_TITLE = "Best Digital Marketing Course in Kochi | 500+ Hours | HACA";
const KOCHI_PAGE_DESCRIPTION =
    "Join HACA's AI-integrated Digital Marketing Course in Kochi — 500+ hours of training, real brand projects, SEO, Google Ads, Meta Ads, AEO, GEO, AI tools, online and offline batches, expert mentors, and 100% placement support. Awarded Best Institute for Upskilling – World Education Summit 2024.";

export function buildDigitalMarketingKochiSeoMetadata(): Metadata {
    const canonical = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KOCHI_SEO_PATH}`;

    return {
        title: KOCHI_PAGE_TITLE,
        description: KOCHI_PAGE_DESCRIPTION,
        alternates: { canonical },
        openGraph: {
            title: KOCHI_PAGE_TITLE,
            description: KOCHI_PAGE_DESCRIPTION,
            url: canonical,
            siteName: "Haris & Co Academy",
            locale: "en_IN",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: KOCHI_PAGE_TITLE,
            description: KOCHI_PAGE_DESCRIPTION,
        },
        keywords: [
            "digital marketing course in Kochi",
            "best digital marketing course in Kochi",
            "digital marketing institute Kochi",
            "online digital marketing course Kochi",
            "digital marketing training Kochi",
            "AI integrated digital marketing course Kochi",
            "digital marketing course with placement Kochi",
            "SEO course Kochi",
            "Google Ads course Kochi",
            "digital marketing course Ernakulam",
            "digital marketing course Cochin",
            "HACA marketing school Kochi",
            "digital marketing course after 12th Kochi",
        ],
    };
}

export function digitalMarketingKochiJsonLd() {
    const url = `${MARKETING_SCHOOL_SEO_SITE_URL}${DIGITAL_MARKETING_KOCHI_SEO_PATH}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: KOCHI_PAGE_TITLE,
                description: KOCHI_PAGE_DESCRIPTION,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Haris & Co Academy",
                    url: MARKETING_SCHOOL_SEO_SITE_URL,
                },
            },
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: "Digital Marketing Course in Kochi",
                description: KOCHI_PAGE_DESCRIPTION,
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
                    name: "Kochi",
                    alternateName: "Cochin",
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
                mainEntity: MARKETING_KOCHI_FAQS.map((item) => ({
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
