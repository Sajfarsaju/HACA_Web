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

    // Admin uses its own full-page layout
    if (pathname === "/admin" || pathname.startsWith("/admin/")) {
        return null;
    }

    // Hide global footer on all Tech School routes (home, courses, projects, etc.)
    if (pathname === "/schools/tech" || pathname.startsWith("/schools/tech/")) {
        return null;
    }

    return <Footer />;
}
