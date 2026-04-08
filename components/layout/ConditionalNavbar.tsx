"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { FinanceNavbar } from "./FinanceNavbar";

export function ConditionalNavbar() {
    const pathname = usePathname();

    // Paths where we want to hide the main global Navbar
    const hideOnPaths = [
        "/tech-school",
        "/tech-school/tech-courses",
        "/tech-school/tech-projects",
        "/finance-school",
    ];


    const shouldHide = hideOnPaths.some(path => pathname === path || pathname.startsWith(path + "/"));

    if (shouldHide) {
        if (pathname.startsWith("/finance-school")) {
            return <FinanceNavbar />;
        }
        return null;
    }

    return <Navbar />;
}
