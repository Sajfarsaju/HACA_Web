"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    TechCoursesGlobalBg,
    TechCoursesStyles,
} from "@/components/sections/tech-courses";
import {
    TechProjectsHero,
    TechProjectsMobileHero,
    TechProjectsHeaderSection,
} from "@/components/sections/tech-projects";
import { DESIGN_W, MOBILE_DESIGN_W } from "@/components/sections/tech-courses/constants";

type ProjectCardConfig = {
    title: string;
    imageSrc: string;
    studentLabel: string;
    studentName: string;
    technologies: string;
};

const BASE_PROJECT_CARDS: ProjectCardConfig[] = [
    {
        title: "Swalpam Music Kelkam",
        imageSrc: "/photos/Tech/Rectangle 3 (4).svg",
        studentLabel: "Student",
        studentName: "Shaheen",
        technologies:
            "Frontend: Flutter • Backend: Node.js / Firebase • APIs: Mapbox API, Google Maps API (for geolocation, directions and live tracking) • Database: Firebase Firestore • Other Tools: GitHub, Postman, Figma (for UI design)",
    },
    {
        title: "Kerigo",
        imageSrc: "/photos/Tech/Rectangle 3 (5).svg",
        studentLabel: "Student",
        studentName: "Afthab Backer, Sidra, Thanseeh",
        technologies:
            "Frontend: Flutter • Backend: Node.js / Firebase • APIs: Mapbox API, Google Maps API (for geolocation, directions and live tracking) • Database: Firebase Firestore • Other Tools: GitHub, Postman, Figma (for UI design)",
    },
    {
        title: "nearbyStay",
        imageSrc: "/photos/Tech/Rectangle 3 (6).svg",
        studentLabel: "Student",
        studentName: "Rahul Chandran",
        technologies:
            "Next.js (React) • Vercel (hosting) • Supabase (backend for authentication and database) • CSS / Tailwind CSS for styling • JavaScript / TypeScript",
    },
];

export default function TechProjectsPage() {
    const [mounted, setMounted] = useState(false);
    const [scales, setScales] = useState({ desktop: 1, mobile: 1 });
    const [viewportWidth, setViewportWidth] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
        const update = () => {
            const width = window.innerWidth;
            const containerWidth = Math.min(width, DESIGN_W);
            setScales({
                desktop: containerWidth / DESIGN_W,
                mobile: width / MOBILE_DESIGN_W,
            });
            setViewportWidth(width);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    if (!mounted) {
        return <main style={{ background: "#0B0B0B", minHeight: "100vh" }} />;
    }

    const rows: ProjectCardConfig[][] = Array.from({ length: 4 }).map(() => BASE_PROJECT_CARDS);

    const isTabletOrBelow = viewportWidth !== null && viewportWidth <= 1023;
    const visibleRows = isTabletOrBelow ? rows.slice(0, 2) : rows;
    const visibleCardsFlat: ProjectCardConfig[] = isTabletOrBelow
        ? rows
              .slice(0, 2)
              .flat()
        : [];

    return (
        <main
            className="tech-page-root tech-projects-page"
            style={{
                background: "#0B0B0B",
                minHeight: "100vh",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <TechCoursesGlobalBg />
            <TechProjectsHero scale={scales.desktop} />
            <TechProjectsMobileHero scale={scales.mobile} />
            <TechProjectsHeaderSection />

            {/* Mobile only: DOTsBG (1).svg background — starts from description, faded at top, up to end of 6th card */}
            <div className="tech-projects-mobile-dots-bg" aria-hidden="true">
                <Image
                    src="/photos/Tech/DOTsBG (1).svg"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                />
            </div>

            {/* Mobile only: Group 23 (1).svg — starts from toolbar ("All" section), ends at last card bottom */}
            <div className="tech-projects-mobile-group23-bg" aria-hidden="true">
                <Image
                    src="/photos/Tech/Group 23 (1).svg"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                />
            </div>

            {/* Projects cards grid: same layout/styling as Tech Courses section */}
            <section className="tech-projects-cards-section w-full flex flex-col items-center justify-center relative overflow-hidden mt-[60px] pb-[200px] px-[60px] box-border">
                {/* Desktop only: main background image, starts 20px above first card */}
                <div className="tech-projects-cards-bg" aria-hidden="true">
                    <Image
                        src="/photos/Tech/Image (5).svg"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                </div>
                {/* Desktop only: purple gradient (Gradient2 (2).svg) — starts ~10px below description, smooth top/bottom/sides */}
                <div className="tech-projects-cards-gradient2" aria-hidden="true">
                    <Image
                        src="/photos/Tech/Gradient2 (2).svg"
                        alt=""
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                </div>
                <div className="tech-projects-cards-inner w-full max-w-[1320px] flex flex-col gap-10">
                    {isTabletOrBelow ? (
                        <div className="tech-projects-grid-row w-full max-w-[1320px] flex flex-wrap justify-between items-stretch gap-6">
                            {visibleCardsFlat.map((card, index) => (
                                <article
                                    key={index}
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

                                    {/* Bottom: student, technologies, CTA — 3rd card: grow so Live Demo aligns to bottom */}
                                    <div
                                        className={`tech-project-card-bottom w-full min-h-[232px] flex flex-col justify-between gap-5 ${index % 3 === 2 ? "flex-1" : ""}`}
                                    >
                                        {/* Student label */}
                                        <div className="tech-project-card-student w-full min-h-10 font-['Outfit',sans-serif] text-base leading-none text-white">
                                            <span className="font-semibold">{card.studentLabel}</span>
                                            <br />
                                            <span className="font-light">{card.studentName}</span>
                                        </div>

                                        {/* Technologies */}
                                        <div className="tech-project-card-tech w-full min-h-[120px] font-['Outfit',sans-serif] text-base leading-[1.4] text-white">
                                            <span className="font-semibold">Technologies</span>
                                            <br />
                                            <span className="font-light">{card.technologies}</span>
                                        </div>

                                        {/* CTA button */}
                                        <div className="tech-project-card-cta">
                                            <Image
                                                src="/photos/Tech/frame (1).svg"
                                                alt="Live demo"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        visibleRows.map((row, rowIndex) => (
                            <div key={rowIndex} className="tech-projects-grid-row w-full max-w-[1320px] flex justify-between items-stretch gap-6">
                                {row.map((card, cardIndex) => (
                                    <article
                                        key={`${rowIndex}-${cardIndex}`}
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

                                        {/* Bottom: student, technologies, CTA — 3rd card: grow so Live Demo aligns to bottom */}
                                        <div
                                            className={`tech-project-card-bottom w-full min-h-[232px] flex flex-col justify-between gap-5 ${cardIndex === 2 ? "flex-1" : ""}`}
                                        >
                                            {/* Student label */}
                                            <div className="tech-project-card-student w-full min-h-10 font-['Outfit',sans-serif] text-base leading-none text-white">
                                                <span className="font-semibold">{card.studentLabel}</span>
                                                <br />
                                                <span className="font-light">{card.studentName}</span>
                                            </div>

                                            {/* Technologies */}
                                            <div className="tech-project-card-tech w-full min-h-[120px] font-['Outfit',sans-serif] text-base leading-[1.4] text-white">
                                                <span className="font-semibold">Technologies</span>
                                                <br />
                                                <span className="font-light">{card.technologies}</span>
                                            </div>

                                            {/* CTA button */}
                                            <div className="tech-project-card-cta">
                                                <Image
                                                    src="/photos/Tech/frame (1).svg"
                                                    alt="Live demo"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </section>

            <TechCoursesStyles />
        </main>
    );
}

