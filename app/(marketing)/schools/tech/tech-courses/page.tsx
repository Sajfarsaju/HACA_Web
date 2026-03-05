"use client";

import { useEffect, useState } from "react";
import {
    TechCoursesGlobalBg,
    TechCoursesHero,
    TechCoursesMobileHero,
    TechCoursesHeaderSection,
    TechCoursesListSection,
    TechCoursesStyles,
} from "@/components/sections/tech-courses";
import { DESIGN_W, MOBILE_DESIGN_W } from "@/components/sections/tech-courses/constants";
import { TechFooter } from "@/components/layout/TechFooter";

export default function CoursesPage() {
    const [mounted, setMounted] = useState(false);
    const [scales, setScales] = useState({ desktop: 1, mobile: 1 });

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

    if (!mounted) {
        return <main style={{ background: "#111111", minHeight: "100vh" }} />;
    }

    return (
        <main
            className="tech-page-root"
            style={{
                background: "#111111",
                minHeight: "100vh",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <TechCoursesGlobalBg />
            <TechCoursesHero scale={scales.desktop} />
            <TechCoursesMobileHero scale={scales.mobile} />
            <TechCoursesHeaderSection />
            <TechCoursesListSection desktopScale={scales.desktop} />
            <TechCoursesStyles />

            {/* Footer: match Tech home footer */}
            <div className="relative z-10 bg-[#111111]">
                <TechFooter />
            </div>
        </main>
    );
}
