"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function ConditionalNavbar() {
    const pathname = usePathname();

    // Paths where we want to hide the main global Navbar
    const hideOnPaths = [
        "/schools/tech",
        "/schools/tech/tech-courses"
    ];


    const shouldHide = hideOnPaths.some(path => pathname === path || pathname.startsWith(path + "/"));

    if (shouldHide) return null;

    return <Navbar />;
}
