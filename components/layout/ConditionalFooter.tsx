"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { TechFooter } from "./TechFooter";

export function ConditionalFooter() {
    const pathname = usePathname();

    // Hide global footer on success-story page
    if (pathname === "/success-story") {
        return null;
    }

    // Hide global footer on all Tech School routes (home, courses, projects, etc.)
    if (pathname === "/tech-school" || pathname.startsWith("/tech-school/")) {
        return null;
    }

    return <Footer />;
}
