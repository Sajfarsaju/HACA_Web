"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";
import { BottomReserveCta } from "./BottomReserveCta";

export function ClientLayoutProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isTechSchool = pathname === "/tech-school" || pathname.startsWith("/tech-school/");
    const isHome = pathname === "/";

    return (
        <>
            {!isTechSchool && <Navbar />}
            <main className="flex-1 min-h-0">
                {children}
            </main>
            {!isTechSchool && <WhatsAppButton />}
            {isHome && <BottomReserveCta />}
        </>
    );
}
