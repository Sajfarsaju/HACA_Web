"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";
import { BottomReserveCta } from "./BottomReserveCta";
import { ConditionalFooter } from "./ConditionalFooter";

export function ClientLayoutProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isTechSchool =
        pathname === "/schools/tech" ||
        pathname.startsWith("/schools/tech/") ||
        pathname === "/tech-school" ||
        pathname.startsWith("/tech-school/");
    const isMarketingSchool =
        pathname === "/marketing-school" ||
        pathname.startsWith("/marketing-school/") ||
        pathname === "/schools/marketing" ||
        pathname.startsWith("/schools/marketing/");
    const isHome = pathname === "/";
    const isFinanceSchool =
        pathname === "/finance-school" ||
        pathname.startsWith("/finance-school/");

    return (
        <>
            {!isTechSchool && !isMarketingSchool && !isFinanceSchool && <Navbar />}
            <main className="flex-grow w-full overflow-x-hidden">
                {children}
                <ConditionalFooter />
            </main>
            {!isTechSchool && !isMarketingSchool && !isFinanceSchool && <WhatsAppButton />}
            {isHome && <BottomReserveCta />}
        </>
    );
}
