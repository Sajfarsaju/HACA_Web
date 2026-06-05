"use client";

import { usePathname } from "next/navigation";
import { isDesignSchoolSeoPath } from "@/lib/design-school-seo";
import { isMarketingSchoolSeoPath } from "@/lib/marketing-school-seo";
import { isTechSchoolSeoPath } from "@/lib/tech-school-seo";
import { WHATSAPP_CHAT_URL } from "@/lib/whatsapp";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";
import { ReturnToHacaButton } from "./ReturnToHacaButton";
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
    const isDesignSchoolSeo = isDesignSchoolSeoPath(pathname);
    const isDesignSchool =
        pathname === "/design-school" ||
        pathname.startsWith("/design-school/") ||
        pathname === "/schools/design" ||
        pathname.startsWith("/schools/design/") ||
        isDesignSchoolSeo;
    // Navbar: excluded on all school pages (they have their own)
    const excludeLayout =
        isTechSchool ||
        isTechSchoolSeo ||
        isMarketingSchool ||
        isMarketingSchoolSeo ||
        isDesignSchool;

    // WhatsApp: tech school pages have their own TechWhatsAppFloatingButton.
    // Marketing-seo, AE, and design-seo pages have their own buttons in their layouts.
    // General pages and marketing/design main pages show the button here.
    const showWhatsApp = !isTechSchool && !isTechSchoolSeo && !isMarketingSchoolSeo && !isDesignSchoolSeo;

    return (
        <>
            {!excludeLayout && <Navbar />}
            <main className="flex-grow w-full overflow-x-hidden">
                {children}
                <ConditionalFooter />
            </main>
            {showWhatsApp && <WhatsAppButton href={WHATSAPP_CHAT_URL} />}
            <ReturnToHacaButton />
        </>
    );
}
