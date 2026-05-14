import React from "react";

import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";
import { MarketingPageColorLayer } from "@/components/marketing/MarketingPageColorLayer";

export default function MarketingSchoolSeoGroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MarketingPageColorLayer>
            <main className="flex min-h-0 w-full flex-col overflow-x-hidden">
                <MarketingNavbar />
                {children}
                <MarketingFooter />
            </main>
        </MarketingPageColorLayer>
    );
}

