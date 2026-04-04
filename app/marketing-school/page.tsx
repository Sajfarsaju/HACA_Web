import type { Metadata } from "next";
import { MarketingHeroSection } from "@/components/marketing/MarketingHeroSection";
import { MarketingImpactSection } from "@/components/marketing/MarketingImpactSection";
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";

export const metadata: Metadata = {
    title: "Marketing School | HACA",
    description: "HACA Marketing School page.",
};

export default function MarketingSchoolPage() {
    return (
        <main className="w-full min-h-screen bg-white overflow-x-hidden">
            <MarketingNavbar />
            <MarketingHeroSection />
            <MarketingImpactSection />
        </main>
    );
}
