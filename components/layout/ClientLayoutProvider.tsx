"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";
import { BottomReserveCta } from "./BottomReserveCta";

export function ClientLayoutProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isTechSchool = pathname === "/schools/tech" || pathname.startsWith("/schools/tech/");
    const isHome = pathname === "/";

    return (
        <>
            {!isTechSchool && <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {!isTechSchool && <WhatsAppButton />}
            {isHome && <BottomReserveCta />}
        </>
    );
}
