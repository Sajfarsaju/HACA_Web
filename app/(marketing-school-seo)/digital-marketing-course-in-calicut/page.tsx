import {
    buildDigitalMarketingCalicutSeoMetadata,
    digitalMarketingCalicutSeoJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroCalicut } from "./_sections/MarketingSeoHeroCalicut";
import { MarketingSeoAgencyCalicutIntroSection } from "./_sections/MarketingSeoAgencyCalicutIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "./_sections/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoWhatYouLearnSection } from "./_sections/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "./_sections/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "./_sections/MarketingSeoToolsHiredSection";
import { MarketingSeoSmarterLearnSection } from "./_sections/MarketingSeoSmarterLearnSection";
import { MarketingSeoLearningIsntEnoughSection } from "./_sections/MarketingSeoLearningIsntEnoughSection";
import { MarketingSeoExclusiveBenefitsSection } from "./_sections/MarketingSeoExclusiveBenefitsSection";
import { MarketingSeoTestimonialsSection } from "./_sections/MarketingSeoTestimonialsSection";
import { MarketingSeoMentorsSection } from "./_sections/MarketingSeoMentorsSection";
import { MarketingSeoGuestExpertsSection } from "./_sections/MarketingSeoGuestExpertsSection";
import { MarketingSeoCareerWinsSection } from "./_sections/MarketingSeoCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "./_sections/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "./_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "./_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "./_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoCalicutFaqSection } from "./_sections/MarketingSeoCalicutFaqSection";
import { MarketingSeoCalicutCtaSection } from "./_sections/MarketingSeoCalicutCtaSection";

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
