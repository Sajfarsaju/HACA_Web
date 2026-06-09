import {
    buildDigitalMarketingPalakkadSeoMetadata,
    digitalMarketingPalakkadJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroPalakkad } from "./_sections/MarketingSeoHeroPalakkad";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyPalakkadIntroSection } from "./_sections/MarketingSeoAgencyPalakkadIntroSection";
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
import { MarketingCareerWinsSection } from "@/components/marketing/MarketingCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "@/components/marketing/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "./_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "./_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "./_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoPalakkadFaqSection } from "./_sections/MarketingSeoPalakkadFaqSection";
import { MarketingSeoPalakkadCtaSection } from "./_sections/MarketingSeoPalakkadCtaSection";

export const metadata = buildDigitalMarketingPalakkadSeoMetadata();

export default function DigitalMarketingCourseInPalakkadPage() {
    const jsonLd = digitalMarketingPalakkadJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroPalakkad />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyPalakkadIntroSection />
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
                <MarketingCareerWinsSection />
                <MarketingSeoBlogInsightsSection />
                <MarketingSeoMentorsBroughtHomeSection />
                <MarketingSeoJobReadyCareersSection />
                <MarketingSeoHacaCultureSection />
                <MarketingSeoPalakkadFaqSection />
                <MarketingSeoPalakkadCtaSection />
            </div>
        </>
    );
}
