"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

export function ClientLayoutProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isTechSchool = pathname === "/schools/tech";

    return (
        <>
            {!isTechSchool && <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {!isTechSchool && <WhatsAppButton />}
        </>
    );
}
