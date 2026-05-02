import type { Metadata } from "next";
import { MarketingHeroSection } from "@/components/marketing/MarketingHeroSection";
import { MarketingImpactSection } from "@/components/marketing/MarketingImpactSection";
import { MarketingCoursesSection } from "@/components/marketing/MarketingCoursesSection";
import { MarketingMentorsSection } from "@/components/marketing/MarketingMentorsSection";
import { MarketingCultureSection } from "@/components/marketing/MarketingCultureSection";
import { MarketingYoutubeHubSection } from "@/components/marketing/MarketingYoutubeHubSection";
import { MarketingPlacementsSection } from "@/components/marketing/MarketingPlacementsSection";
import { MarketingTestimonialsSection } from "@/components/marketing/MarketingTestimonialsSection";
import { MarketingFaqSection } from "@/components/marketing/MarketingFaqSection";
import { MarketingFooter } from "@/components/marketing/MarketingFooter"
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar"

export const metadata: Metadata = {
    title: "Marketing School | HACA",
    description: "HACA Marketing School page.",
}

export default function MarketingSchoolPage() {
    return (
        <main className="w-full min-h-screen bg-white overflow-x-hidden">
            <MarketingNavbar />
            <MarketingHeroSection />
            <MarketingImpactSection />
            <MarketingCoursesSection />
            <MarketingMentorsSection />
            <MarketingPlacementsSection />
            <MarketingCultureSection />
            <MarketingYoutubeHubSection />
            <MarketingTestimonialsSection />
            <MarketingFaqSection />
            <MarketingFooter />
        </main>
    );
}
