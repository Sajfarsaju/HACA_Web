import {
    buildDigitalMarketingKollamSeoMetadata,
    digitalMarketingKollamJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroKollam } from "./_sections/MarketingSeoHeroKollam";
import { MarketingSeoAgencyKollamIntroSection } from "./_sections/MarketingSeoAgencyKollamIntroSection";
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
import { MarketingCareerWinsSection } from "@/components/marketing/MarketingCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "@/components/marketing/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "./_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "./_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "./_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoKollamFaqSection } from "./_sections/MarketingSeoKollamFaqSection";
import { MarketingSeoKollamCtaSection } from "./_sections/MarketingSeoKollamCtaSection";

export const metadata = buildDigitalMarketingKollamSeoMetadata();

export default function DigitalMarketingCourseInKollamPage() {
    const jsonLd = digitalMarketingKollamJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroKollam />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyKollamIntroSection />
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
                <MarketingSeoKollamFaqSection />
                <MarketingSeoKollamCtaSection />
            </div>
        </>
    );
}
