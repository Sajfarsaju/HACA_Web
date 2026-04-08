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
    const isDesignSchool =
        pathname === "/design-school" ||
        pathname.startsWith("/design-school/") ||
        pathname === "/schools/design" ||
        pathname.startsWith("/schools/design/");
    const isHome = pathname === "/";
        
    const excludeLayout = isTechSchool || isMarketingSchool || isDesignSchool;
    // console.log(excludeLayout);
    

    return (
        <>
            {!excludeLayout && <Navbar />}
            <main className="flex-grow w-full overflow-x-hidden">
                {children}
                <ConditionalFooter />
            </main>
            {!excludeLayout && <WhatsAppButton />}
            {isHome && <BottomReserveCta />}
        </>
    );
}
