import {
    buildDigitalMarketingCalicutSeoMetadata,
    digitalMarketingCalicutSeoJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroCalicut } from "@/components/marketing/MarketingSeoHeroCalicut";
import { MarketingSeoAgencyCalicutIntroSection } from "@/components/marketing/MarketingSeoAgencyCalicutIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "@/components/marketing/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoTrustedPressStatsSection } from "@/components/marketing/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoWhatYouLearnSection } from "@/components/marketing/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "@/components/marketing/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "@/components/marketing/MarketingSeoToolsHiredSection";
import { MarketingSeoSmarterLearnSection } from "@/components/marketing/MarketingSeoSmarterLearnSection";
import { MarketingSeoLearningIsntEnoughSection } from "@/components/marketing/MarketingSeoLearningIsntEnoughSection";
import { MarketingSeoExclusiveBenefitsSection } from "@/components/marketing/MarketingSeoExclusiveBenefitsSection";
import { MarketingSeoTestimonialsSection } from "@/components/marketing/MarketingSeoTestimonialsSection";
import { MarketingSeoMentorsSection } from "@/components/marketing/MarketingSeoMentorsSection";
import { MarketingSeoGuestExpertsSection } from "@/components/marketing/MarketingSeoGuestExpertsSection";
import { MarketingSeoCareerWinsSection } from "@/components/marketing/MarketingSeoCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "@/components/marketing/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "@/components/marketing/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "@/components/marketing/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "@/components/marketing/MarketingSeoHacaCultureSection";
import { MarketingSeoCalicutFaqSection } from "@/components/marketing/MarketingSeoCalicutFaqSection";
import { MarketingSeoCalicutCtaSection } from "@/components/marketing/MarketingSeoCalicutCtaSection";

export const metadata = buildDigitalMarketingCalicutSeoMetadata();

export default function DigitalMarketingCourseInCalicutPage() {
    const jsonLd = digitalMarketingCalicutSeoJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroCalicut />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyCalicutIntroSection />
                <MarketingSeoSuccessStoriesIntroSection />
                <MarketingSeoWhatYouLearnSection />
                <MarketingSeoCoursesSection />
                <MarketingSeoToolsHiredSection />
                <MarketingSeoSmarterLearnSection />
                <MarketingSeoLearningIsntEnoughSection />
                <MarketingSeoExclusiveBenefitsSection />
                <MarketingSeoTestimonialsSection />
                <MarketingSeoMentorsSection />
                <MarketingSeoGuestExpertsSection />
                <MarketingSeoCareerWinsSection />
                <MarketingSeoBlogInsightsSection />
                <MarketingSeoMentorsBroughtHomeSection />
                <MarketingSeoJobReadyCareersSection />
                <MarketingSeoHacaCultureSection />
                <MarketingSeoCalicutFaqSection />
                <MarketingSeoCalicutCtaSection />
            </div>
        </>
    );
}
