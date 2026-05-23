import {
    buildDigitalMarketingWayanadSeoMetadata,
    digitalMarketingWayanadJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroWayanad } from "./_sections/MarketingSeoHeroWayanad";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyWayanadIntroSection } from "./_sections/MarketingSeoAgencyWayanadIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "./_sections/MarketingSeoSuccessStoriesIntroSection";
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
import { MarketingSeoWayanadFaqSection } from "./_sections/MarketingSeoWayanadFaqSection";
import { MarketingSeoWayanadCtaSection } from "./_sections/MarketingSeoWayanadCtaSection";

export const metadata = buildDigitalMarketingWayanadSeoMetadata();

export default function DigitalMarketingCourseInWayanadPage() {
    const jsonLd = digitalMarketingWayanadJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroWayanad />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyWayanadIntroSection />
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
                <MarketingSeoWayanadFaqSection />
                <MarketingSeoWayanadCtaSection />
            </div>
        </>
    );
}
