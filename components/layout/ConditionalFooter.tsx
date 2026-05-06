"use client";

import { usePathname } from "next/navigation";
import { isDesignSchoolSeoPath } from "@/lib/design-school-seo";
import { Footer } from "./Footer";

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
    if (pathname === "/tech-school" || pathname.startsWith("/tech-school/")) {
        return null;
    }
    if (pathname === "/schools/tech" || pathname.startsWith("/schools/tech/")) {
        return null;
    }

    // Marketing School uses its own layout (no global HACA footer)
    if (pathname === "/marketing-school" || pathname.startsWith("/marketing-school/")) {
        return null;
    }
    if (pathname === "/schools/marketing" || pathname.startsWith("/schools/marketing/")) {
        return null;
    }

    // Design School uses its own layout (no global HACA footer)
    if (pathname === "/design-school" || pathname.startsWith("/design-school/")) {
        return null;
    }
    if (isDesignSchoolSeoPath(pathname)) {
        return null;
    }
    if (pathname === "/schools/design" || pathname.startsWith("/schools/design/")) {
        return null;
    }

    return <Footer />;
}
