"use client";

import { usePathname } from "next/navigation";
import { isDesignSchoolSeoPath } from "@/lib/design-school-seo";
import { isMarketingSchoolSeoPath } from "@/lib/marketing-school-seo";
import { isTechSchoolSeoPath } from "@/lib/tech-school-seo";
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
    const isMarketingSchoolSeo = isMarketingSchoolSeoPath(pathname);
    const isTechSchoolSeo = isTechSchoolSeoPath(pathname);
    const isDesignSchool =
        pathname === "/design-school" ||
        pathname.startsWith("/design-school/") ||
        pathname === "/schools/design" ||
        pathname.startsWith("/schools/design/") ||
        isDesignSchoolSeoPath(pathname);
    const isFinanceSchool =
        pathname === "/finance-school" ||
        pathname.startsWith("/finance-school/");
    const isHome = pathname === "/";
    const excludeLayout =
        isTechSchool ||
        isTechSchoolSeo ||
        isMarketingSchool ||
        isMarketingSchoolSeo ||
        isDesignSchool ||
        isFinanceSchool;

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
