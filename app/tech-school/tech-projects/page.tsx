"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TechCoursesGlobalBg, TechCoursesStyles } from "@/components/sections/tech-courses";
import { TechProjectsHero, TechProjectsMobileHero, TechProjectsHeaderSection } from "@/components/sections/tech-projects";
import { DESIGN_W, MOBILE_DESIGN_W } from "@/components/sections/tech-courses/constants";
import { TechDotsBackground } from "@/components/tech/TechDotsBackground";
import { TechPageGradientBg } from "@/components/tech/TechPageGradientBg";
import { TechFooter } from "@/components/layout/TechFooter";
import { TechWhatsAppFloatingButton } from "@/components/layout/TechWhatsAppFloatingButton";
import { SectionReveal } from "@/components/animations/SectionReveal";

const img = (name: string) => `/photos/Tech/projects/${encodeURIComponent(name)}.webp`;

type ProjectCategory = "all" | "python" | "mern" | "data-ai";
type SortOrder = "latest" | "oldest";

type ProjectCard = {
    title: string;
    imageSrc: string;
    category: string;
    student: string;
    techLabel: "Technologies" | "Tools Used";
    technologies: string;
    description: string;
    highlights: string[];
};

type ProjectSection = {
    id: ProjectCategory;
    heading: string;
    accent: string;
    cards: ProjectCard[];
};

const SECTIONS: ProjectSection[] = [
    {
        id: "python",
        heading: "Python Projects",
        accent: "#3B82F6",
        cards: [
            {
                title: "SecondHome",
                imageSrc: img("SecondHome"),
                category: "API Project",
                student: "Jithin Joseph",
                techLabel: "Technologies",
                technologies: "HTML • Django • JavaScript • Tailwind CSS",
                description:
                    "A hotel search platform that fetches real-time hotel listings, pricing, ratings, and images through external hotel APIs. Users can search destinations and instantly view updated hotel information.",
                highlights: ["Real-time hotel data", "Dynamic API integration", "Location-based search", "Mobile-responsive interface"],
            },
            {
                title: "RoadAssist",
                imageSrc: img("RoadAssist"),
                category: "Django Project",
                student: "Jithin Joseph",
                techLabel: "Technologies",
                technologies: "HTML • CSS • Django • JavaScript • MySQL",
                description:
                    "A roadside assistance platform that helps users request emergency fuel delivery, towing services, puncture repair, and roadside support during vehicle breakdowns.",
                highlights: ["Emergency service requests", "Fuel delivery system", "Worker dashboard", "Real-time request management", "Complaint tracking"],
            },
            {
                title: "Where In The World?",
                imageSrc: img("Where In The World"),
                category: "Django Project",
                student: "Shamna EK",
                techLabel: "Technologies",
                technologies: "HTML • CSS • Django",
                description:
                    "A country explorer application that helps users discover countries, filter regions, and access detailed geographical information through REST Countries API integration.",
                highlights: ["Country search", "Region filtering", "Population insights", "Border country exploration", "REST API integration"],
            },
            {
                title: "PWD Portal",
                imageSrc: img("PWD Portal"),
                category: "Django Project",
                student: "Shamna EK",
                techLabel: "Technologies",
                technologies: "HTML • CSS • Django",
                description:
                    "A digital complaint management system for road maintenance where citizens can report road issues and track repair progress.",
                highlights: ["Complaint submission", "Image upload support", "Engineer dashboard", "Status tracking", "Road repair management"],
            },
            {
                title: "Find Your Travel Partner (FYTP)",
                imageSrc: img("Find Your Travel Partner"),
                category: "Django Project",
                student: "Fijas Muhammed C P",
                techLabel: "Technologies",
                technologies: "HTML • CSS • Django • MySQL",
                description:
                    "A carpooling platform that connects travelers heading in the same direction, helping them share rides and reduce travel costs.",
                highlights: ["Ride matching", "Travel post creation", "Ride requests", "User communication", "Cost-sharing system"],
            },
        ],
    },
    {
        id: "mern",
        heading: "MERN Projects",
        accent: "#10B981",
        cards: [
            {
                title: "AI-Integrated E-Commerce Platform",
                imageSrc: img("AI-Integrated E-Commerce Platform"),
                category: "AI Full Stack Project",
                student: "Akshay Shaji (MS02)",
                techLabel: "Technologies",
                technologies: "React • Node.js • MongoDB • Tailwind CSS",
                description:
                    "An AI-powered e-commerce platform featuring smart product discovery, chatbot assistance, secure payments, authentication, and a complete admin management system.",
                highlights: ["AI product search", "Gemini chatbot", "Google Login", "Payment integration", "Order tracking", "Admin dashboard"],
            },
            {
                title: "MusicPlay",
                imageSrc: img("MusicPlay"),
                category: "Full Stack Project",
                student: "Rinshad (MS03)",
                techLabel: "Technologies",
                technologies: "React • Node.js • MongoDB • Tailwind CSS",
                description:
                    "A music streaming platform where users can stream music, create playlists, like songs, and manage personal music collections.",
                highlights: ["Music streaming", "Playlist creation", "Sleep timer", "Cloud song uploads", "User management", "Dark & light mode"],
            },
            {
                title: "ShoppingCart",
                imageSrc: img("ShoppingCart"),
                category: "Frontend Project",
                student: "Rinshad (MS03)",
                techLabel: "Technologies",
                technologies: "React • Tailwind CSS • API Integration",
                description:
                    "A modern e-commerce frontend application featuring product browsing, shopping cart functionality, and state persistence.",
                highlights: ["Product catalog", "Cart management", "Redux Toolkit", "Persistent cart", "Responsive UI"],
            },
            {
                title: "Portfolio",
                imageSrc: img("Portfolio"),
                category: "Frontend Project",
                student: "Rinshad (MS03)",
                techLabel: "Technologies",
                technologies: "React • Tailwind CSS • Framer Motion",
                description:
                    "A personal portfolio website showcasing projects, skills, achievements, and professional experience through modern interactive design.",
                highlights: ["Animated interface", "Responsive design", "Project showcase", "Interactive sections"],
            },
        ],
    },
    {
        id: "data-ai",
        heading: "Data Analytics & AI Projects",
        accent: "#A855F7",
        cards: [
            {
                title: "Real-time Weather Analysis Dashboard",
                imageSrc: img("Real-time Weather Analysis Dashboard"),
                category: "Power BI Dashboard",
                student: "Shibil Rahman",
                techLabel: "Tools Used",
                technologies: "Power BI • Python • APIs",
                description:
                    "Interactive weather intelligence dashboard displaying temperature trends, air quality, rainfall probability, humidity, wind speed, and weather forecasts.",
                highlights: ["Weather forecasting", "Air quality monitoring", "Rainfall prediction", "Sunrise & sunset analytics"],
            },
            {
                title: "Fitness Management Dashboard",
                imageSrc: img("Fitness Management Dashboard"),
                category: "Power BI Dashboard",
                student: "Arya Nanda",
                techLabel: "Tools Used",
                technologies: "Power BI • Excel • Data Modelling",
                description:
                    "A comprehensive fitness analytics dashboard designed to monitor gym operations, member performance, revenue, expenses, profit, and client growth.",
                highlights: ["Membership distribution analysis", "Revenue and profit tracking", "Client growth monitoring", "Member performance insights"],
            },
            {
                title: "SLA Key Metrics Performance Dashboard",
                imageSrc: img("SLA Key Metrics Performance Dashboard"),
                category: "Business Intelligence Dashboard",
                student: "Shibil Rahman",
                techLabel: "Tools Used",
                technologies: "Power BI • Excel • Data Analytics",
                description:
                    "A service performance dashboard that measures SLA achievement across different service categories, countries, and regions with interactive compliance reports.",
                highlights: ["SLA achievement monitoring", "Monthly performance trends", "Priority-level impact analysis", "Regional performance comparison"],
            },
            {
                title: "Electric Vehicle Data Analysis Dashboard",
                imageSrc: img("Electric Vehicle Data Analysis Dashboard"),
                category: "Tableau Dashboard",
                student: "",
                techLabel: "Tools Used",
                technologies: "Tableau • Data Visualization • Analytics",
                description:
                    "A Tableau-powered dashboard that visualises electric vehicle adoption trends across the United States, covering EV growth, vehicle distribution, and manufacturer performance.",
                highlights: ["EV adoption trend analysis", "Manufacturer performance comparison", "BEV vs PHEV distribution", "Regional growth insights"],
            },
            {
                title: "Real-Time E-Commerce Dashboard & Customer Churn Prediction",
                imageSrc: img("Real-Time E-Commerce Dashboard & Customer Churn Prediction"),
                category: "Predictive Analytics Dashboard",
                student: "Sabeel",
                techLabel: "Tools Used",
                technologies: "Power BI • Python • Machine Learning",
                description:
                    "A real-time analytics solution that tracks sales and revenue performance while predicting customer churn to improve retention strategies.",
                highlights: ["Live sales and revenue tracking", "Customer churn prediction", "High-risk customer identification", "Retention strategy insights"],
            },
            {
                title: "Book Recommender System Using Machine Learning",
                imageSrc: img("Book Recommender System Using Machine Learning"),
                category: "Machine Learning Project",
                student: "Farzin",
                techLabel: "Tools Used",
                technologies: "Python • Machine Learning • Recommendation Algorithms",
                description:
                    "A recommendation engine that suggests books based on user preferences and reading interests through similarity analysis on an interactive web platform.",
                highlights: ["Personalized book recommendations", "Preference-based suggestions", "Similarity analysis algorithms", "Interactive recommendation engine"],
            },
            {
                title: "Anchor – Customer Churn Analysis App",
                imageSrc: img("Anchor – Customer Churn Analysis App"),
                category: "Machine Learning Application",
                student: "Farzin",
                techLabel: "Tools Used",
                technologies: "Python • Streamlit • Machine Learning",
                description:
                    "A customer churn prediction application built to help businesses identify customers who are likely to leave, with visual insights to support retention strategies.",
                highlights: ["Churn risk prediction", "Customer behavior analysis", "Retention opportunity identification", "Interactive business dashboard"],
            },
            {
                title: "Sales & Revenue Dashboard for December 2025",
                imageSrc: img("Sales & Revenue Dashboard for December 2025"),
                category: "Business Analytics Dashboard",
                student: "",
                techLabel: "Tools Used",
                technologies: "Power BI • Excel • Data Visualization",
                description:
                    "A sales intelligence dashboard built using real-world client data to analyze revenue trends, transaction performance, payment methods, and sales team effectiveness.",
                highlights: ["Revenue and profit analysis", "Payment method insights", "Sales executive performance tracking", "Customer behavior analytics"],
            },
        ],
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 48, scale: 0.93 },
    visible: (idx: number) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring" as const, stiffness: 240, damping: 22, mass: 0.75, delay: (idx % 3) * 0.1 },
    }),
};

export default function TechProjectsPage() {
    const reduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const [scales, setScales] = useState({ desktop: 1, mobile: 1 });
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState<ProjectCategory>("all");
    const [sortOrder, setSortOrder] = useState<SortOrder>("latest");

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            setScales({
                desktop: width / DESIGN_W,
                mobile: width / MOBILE_DESIGN_W,
            });
        };
        const timeoutId = setTimeout(() => {
            setMounted(true);
            update();
        }, 0);
        window.addEventListener("resize", update);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", update);
        };
    }, []);

    const filteredSections = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        const sections = SECTIONS
            .filter((s) => category === "all" || s.id === category)
            .map((s) => ({
                ...s,
                cards: query
                    ? s.cards.filter((c) =>
                        `${c.title} ${c.student} ${c.technologies} ${c.description}`.toLowerCase().includes(query)
                      )
                    : [...s.cards],
            }))
            .filter((s) => s.cards.length > 0);

        if (sortOrder === "oldest") {
            return sections.map((s) => ({ ...s, cards: [...s.cards].reverse() }));
        }
        return sections;
    }, [category, searchQuery, sortOrder]);

    if (!mounted) {
        return <main style={{ background: "#111111", minHeight: "100vh" }} />;
    }

    return (
        <main
            className="tech-page-root tech-projects-page"
            style={{
                background: "#111111",
                minHeight: "100vh",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <TechWhatsAppFloatingButton />
            <TechPageGradientBg />
            <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
                <TechDotsBackground />
            </div>
            <TechCoursesGlobalBg />
            <TechProjectsHero scale={scales.desktop} />
            <TechProjectsMobileHero scale={scales.mobile} />
            <SectionReveal>
                <TechProjectsHeaderSection
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    category={category}
                    onCategoryChange={setCategory}
                    sortOrder={sortOrder}
                    onSortOrderChange={setSortOrder}
                />
            </SectionReveal>

            {/* Project Sections */}
            <div className="relative z-[5] w-full flex flex-col items-center gap-20 px-4 sm:px-6 lg:px-[60px] pb-24 pt-8">
                {filteredSections.length === 0 ? (
                    <p className="font-outfit text-[#A7A7A7] text-[15px] py-10">
                        No projects found. Try a different search or filter.
                    </p>
                ) : filteredSections.map((section) => (
                    <SectionReveal key={section.id}>
                        <section className="w-full max-w-[1320px] flex flex-col gap-10">
                            {/* Section heading */}
                            <div className="flex flex-col gap-3">
                                <div
                                    className="w-10 h-1 rounded-full"
                                    style={{ background: section.accent }}
                                />
                                <h2
                                    className="m-0 font-outfit font-semibold text-white"
                                    style={{ fontSize: "clamp(22px, 3vw, 34px)", lineHeight: "1.2" }}
                                >
                                    {section.heading}
                                </h2>
                            </div>

                            {/* Cards grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.cards.map((card, index) => (
                                    <motion.article
                                        key={card.title}
                                        custom={index}
                                        variants={reduceMotion ? undefined : cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.08 }}
                                        className="tech-project-card flex flex-col rounded-[22px] overflow-hidden bg-[#D9D9D91A] border border-transparent shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px]"
                                    >
                                        {/* Image */}
                                        <div className="relative w-full h-[200px] shrink-0">
                                            <Image
                                                src={card.imageSrc}
                                                alt={card.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                                            />
                                            {/* Category badge */}
                                            <span
                                                className="absolute top-3 left-3 font-outfit font-semibold"
                                                style={{
                                                    fontSize: "11px",
                                                    padding: "4px 10px",
                                                    borderRadius: "100px",
                                                    background: "rgba(0,0,0,0.65)",
                                                    backdropFilter: "blur(8px)",
                                                    color: section.accent,
                                                    border: `1px solid ${section.accent}55`,
                                                }}
                                            >
                                                {card.category}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-[14px] p-5">
                                            <h3
                                                className="m-0 font-outfit font-semibold text-white"
                                                style={{ fontSize: "17px", lineHeight: "1.35" }}
                                            >
                                                {card.title}
                                            </h3>

                                            {card.student && (
                                                <div className="font-outfit" style={{ fontSize: "13px", lineHeight: "1.4" }}>
                                                    <span className="font-semibold text-white">Student</span>
                                                    <br />
                                                    <span className="font-light text-[#A7A7A7]">{card.student}</span>
                                                </div>
                                            )}

                                            <div className="font-outfit" style={{ fontSize: "13px", lineHeight: "1.4" }}>
                                                <span className="font-semibold text-white">{card.techLabel}</span>
                                                <br />
                                                <span className="font-light text-[#A7A7A7]">{card.technologies}</span>
                                            </div>

                                            <p
                                                className="m-0 font-outfit font-light text-[#A7A7A7]"
                                                style={{ fontSize: "13px", lineHeight: "1.6" }}
                                            >
                                                {card.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="flex flex-wrap gap-[6px]">
                                                {card.highlights.map((h) => (
                                                    <span
                                                        key={h}
                                                        className="font-outfit"
                                                        style={{
                                                            fontSize: "11px",
                                                            padding: "4px 10px",
                                                            borderRadius: "100px",
                                                            color: "#A7A7A7",
                                                            background: "rgba(255,255,255,0.05)",
                                                            border: "1px solid rgba(255,255,255,0.08)",
                                                        }}
                                                    >
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </section>
                    </SectionReveal>
                ))}
            </div>

            <TechCoursesStyles />

            <div className="relative z-10 bg-[#111111]">
                <TechFooter />
            </div>
        </main>
    );
}
