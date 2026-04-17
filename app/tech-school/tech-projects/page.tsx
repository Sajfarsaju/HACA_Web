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

type ProjectCategory = "all" | "web-application" | "automation";
type SortOrder = "latest" | "oldest";

type ProjectCardConfig = {
    title: string;
    imageSrc: string;
    studentLabel: string;
    studentName: string;
    technologies: string;
    category: ProjectCategory;
};

const BASE_PROJECT_CARDS: ProjectCardConfig[] = [
    {
        title: "Swalpam Music Kelkam",
        imageSrc: "/photos/Tech/Rectangle 3 (4).svg",
        studentLabel: "Student",
        studentName: "Shaheen",
        technologies:
            "Frontend: Flutter • Backend: Node.js / Firebase • APIs: Mapbox API, Google Maps API (for geolocation, directions and live tracking) • Database: Firebase Firestore • Other Tools: GitHub, Postman, Figma (for UI design)",
        category: "web-application",
    },
    {
        title: "Kerigo",
        imageSrc: "/photos/Tech/Rectangle 3 (5).svg",
        studentLabel: "Student",
        studentName: "Afthab Backer, Sidra, Thanseeh",
        technologies:
            "Frontend: Flutter • Backend: Node.js / Firebase • APIs: Mapbox API, Google Maps API (for geolocation, directions and live tracking) • Database: Firebase Firestore • Other Tools: GitHub, Postman, Figma (for UI design)",
        category: "web-application",
    },
    {
        title: "nearbyStay",
        imageSrc: "/photos/Tech/Rectangle 3 (6).svg",
        studentLabel: "Student",
        studentName: "Rahul Chandran",
        technologies:
            "Next.js (React) • Vercel (hosting) • Supabase (backend for authentication and database) • CSS / Tailwind CSS for styling • JavaScript / TypeScript",
        category: "automation",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 64, scale: 0.92 },
    visible: (idx: number) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring" as const, stiffness: 240, damping: 22, mass: 0.75, delay: (idx % 3) * 0.12 },
    }),
};

export default function TechProjectsPage() {
    const reduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const [scales, setScales] = useState({ desktop: 1, mobile: 1 });
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);
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
            setViewportWidth(width);
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

    const isTabletOrBelow = viewportWidth !== null && viewportWidth <= 1023;

    const filteredCards = useMemo(() => {
        const allCards: ProjectCardConfig[] = Array.from({ length: 4 }).flatMap(() => BASE_PROJECT_CARDS);

        const normalizedQuery = searchQuery.trim().toLowerCase();

        let next = allCards.filter((card) => {
            const matchesCategory = category === "all" || card.category === category;
            const haystack =
                `${card.title} ${card.studentName} ${card.technologies}`.toLowerCase();
            const matchesSearch = !normalizedQuery || haystack.includes(normalizedQuery);
            return matchesCategory && matchesSearch;
        });

        if (sortOrder === "oldest") {
            next = [...next].reverse();
        }

        return next;
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
            {/* Purple + orange gradient — same as TechPathSection */}
            <TechPageGradientBg />
            {/* Cursor-interactive dot grid — same as TechSchool home */}
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

            {/* Projects cards grid: same layout/styling as Tech Courses section */}
                <section className="tech-projects-cards-section w-full flex flex-col items-center justify-center relative overflow-hidden box-border">
                    <div className="tech-projects-cards-inner w-full max-w-[1320px] flex flex-col gap-10">
                        {filteredCards.length === 0 ? (
                            <div className="w-full text-center text-[#A7A7A7] font-outfit text-[16px] py-10">
                                No projects found. Try a different search or filter.
                            </div>
                        ) : isTabletOrBelow ? (
                            <div key={`${category}-${searchQuery}-${sortOrder}-mobile`} className="tech-projects-grid-row w-full max-w-[1320px] flex flex-wrap justify-between items-stretch gap-6">
                                {filteredCards.slice(0, 6).map((card, index) => (
                                    <motion.article
                                        key={index}
                                        custom={index}
                                        variants={reduceMotion ? undefined : cardVariants}
                                        initial="hidden"
                                        {...(index < 2
                                            ? { animate: "visible" }
                                            : { whileInView: "visible", viewport: { once: true, amount: 0, margin: "0px 0px 120px 0px" } }
                                        )}
                                        className="tech-project-card w-full flex flex-col gap-5 rounded-[22px] p-5 md:p-6 bg-[#D9D9D91A] border border-transparent shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px] box-border"
                                    >
                                        {/* Top: title + image */}
                                        <div className="tech-project-card-top w-full flex flex-col gap-[13px]">
                                            <h3 className="tech-project-card-title w-full h-8 m-0 font-['Outfit',sans-serif] font-semibold text-2xl leading-none text-white">
                                                {card.title}
                                            </h3>
                                            <div className="tech-project-card-image-wrap w-full h-[186px] rounded-[14px] overflow-hidden relative">
                                                <Image
                                                    src={card.imageSrc}
                                                    alt={card.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom: student, technologies, CTA */}
                                        <div className="tech-project-card-bottom w-full min-h-[232px] flex flex-col justify-between gap-5">
                                            {/* Student label */}
                                            <div className="tech-project-card-student w-full min-h-10 font-['Outfit',sans-serif] text-base leading-none text-white">
                                                <span className="font-semibold">{card.studentLabel}</span>
                                                <br />
                                                <span className="font-light tech-project-card-student-name">{card.studentName}</span>
                                            </div>

                                            {/* Technologies */}
                                            <div className="tech-project-card-tech w-full min-h-[120px] font-['Outfit',sans-serif] text-base leading-[1.4] text-white">
                                                <span className="font-semibold">Technologies</span>
                                                <br />
                                                <span className="font-light tech-project-card-tech-desc">{card.technologies}</span>
                                            </div>

                                            {/* CTA button */}
                                            <div className="tech-project-card-cta relative w-[160px] h-[40px]">
                                                <Image
                                                    src="/photos/Tech/frame (1).svg"
                                                    alt="Live demo"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        ) : (
                            <div key={`${category}-${searchQuery}-${sortOrder}-desktop`} className="w-full max-w-[1320px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCards.map((card, index) => (
                                    <motion.article
                                        key={index}
                                        custom={index}
                                        variants={reduceMotion ? undefined : cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.15 }}
                                        className="tech-project-card flex flex-col gap-5 rounded-[22px] p-5 md:p-6 bg-[#D9D9D91A] border border-transparent shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px] box-border"
                                    >
                                        {/* Top: title + image */}
                                        <div className="tech-project-card-top w-full flex flex-col gap-[13px]">
                                            <h3 className="tech-project-card-title w-full h-8 m-0 font-['Outfit',sans-serif] font-semibold text-2xl leading-none text-white">
                                                {card.title}
                                            </h3>
                                            <div className="tech-project-card-image-wrap w-full h-[186px] rounded-[14px] overflow-hidden relative">
                                                <Image
                                                    src={card.imageSrc}
                                                    alt={card.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom: student, technologies, CTA */}
                                        <div className="tech-project-card-bottom w-full min-h-[232px] flex flex-col justify-between gap-5">
                                            {/* Student label */}
                                            <div className="tech-project-card-student w-full min-h-10 font-['Outfit',sans-serif] text-base leading-none text-white">
                                                <span className="font-semibold">{card.studentLabel}</span>
                                                <br />
                                                <span className="font-light tech-project-card-student-name">{card.studentName}</span>
                                            </div>

                                            {/* Technologies */}
                                            <div className="tech-project-card-tech w-full min-h-[120px] font-['Outfit',sans-serif] text-base leading-[1.4] text-white">
                                                <span className="font-semibold">Technologies</span>
                                                <br />
                                                <span className="font-light tech-project-card-tech-desc">{card.technologies}</span>
                                            </div>

                                            {/* CTA button */}
                                            <div className="tech-project-card-cta relative w-[160px] h-[40px]">
                                                <Image
                                                    src="/photos/Tech/frame (1).svg"
                                                    alt="Live demo"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

            <TechCoursesStyles />

            {/* Footer: match Tech home footer */}
            <div className="relative z-10 bg-[#111111]">
                <TechFooter />
            </div>
        </main>
    );
}

