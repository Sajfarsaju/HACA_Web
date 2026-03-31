"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import { SectionReveal } from "@/components/animations/SectionReveal";

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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <TechCoursesHeaderSection />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <TechCoursesListSection desktopScale={scales.desktop} />
            </motion.div>
            <TechCoursesStyles />

            {/* Footer: match Tech home footer */}
            <div className="relative z-10 bg-[#111111]">
                <TechFooter />
            </div>
        </main>
    );
}

