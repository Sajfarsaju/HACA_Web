import type { Metadata } from "next";

import { MarketingSeoHeroCalicut } from "@/components/marketing/MarketingSeoHeroCalicut";
import { MarketingSeoAgencyCalicutIntroSection } from "@/components/marketing/MarketingSeoAgencyCalicutIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "@/components/marketing/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoTrustedPressStatsSection } from "@/components/marketing/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoWhatYouLearnSection } from "@/components/marketing/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "@/components/marketing/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "@/components/marketing/MarketingSeoToolsHiredSection";
import { MarketingSeoSmarterLearnSection } from "@/components/marketing/MarketingSeoSmarterLearnSection";

export const metadata: Metadata = {
    title: "Marketing Course in Calicut | HACA Marketing School",
    description:
        "Career-focused digital marketing course in Calicut by HACA Marketing School—hands-on learning, mentorship, real projects, and placement support.",
};

export default function MarketingCourseInCalicutSeoPage() {
    return (
        <div className="w-full">
            <MarketingSeoHeroCalicut />
            <MarketingSeoTrustedPressStatsSection />
            <MarketingSeoAgencyCalicutIntroSection />
            <MarketingSeoSuccessStoriesIntroSection />
            <MarketingSeoWhatYouLearnSection />
            <MarketingSeoCoursesSection />
            <MarketingSeoToolsHiredSection />
            <MarketingSeoSmarterLearnSection />
        </div>
    );
}
