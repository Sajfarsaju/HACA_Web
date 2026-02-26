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

    if (pathname === "/schools/tech") {
        return null;
    }

    return <Footer />;
}
