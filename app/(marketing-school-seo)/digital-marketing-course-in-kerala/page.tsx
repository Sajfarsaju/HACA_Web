import {
    buildDigitalMarketingKeralaSeoMetadata,
    digitalMarketingKeralaJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroKerala } from "./_sections/MarketingSeoHeroKerala";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyKeralaIntroSection } from "./_sections/MarketingSeoAgencyKeralaIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "./_sections/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoWhatYouLearnSection } from "./_sections/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "./_sections/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "./_sections/MarketingSeoToolsHiredSection";
import { MarketingSeoPrepareIndustrySection } from "./_sections/MarketingSeoPrepareIndustrySection";
import { MarketingSeoSmarterLearnSection } from "./_sections/MarketingSeoSmarterLearnSection";
import { MarketingSeoLearningIsntEnoughSection } from "./_sections/MarketingSeoLearningIsntEnoughSection";
import { MarketingSeoExclusiveBenefitsSection } from "./_sections/MarketingSeoExclusiveBenefitsSection";
import { MarketingSeoMentorsSection } from "./_sections/MarketingSeoMentorsSection";
import { MarketingSeoGuestExpertsSection } from "./_sections/MarketingSeoGuestExpertsSection";
import { MarketingSeoCareerWinsSection } from "./_sections/MarketingSeoCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "./_sections/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "./_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "./_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "./_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoKeralaFaqSection } from "./_sections/MarketingSeoKeralaFaqSection";
import { MarketingSeoKeralaCtaSection } from "./_sections/MarketingSeoKeralaCtaSection";

export const metadata = buildDigitalMarketingKeralaSeoMetadata();

export default function DigitalMarketingCourseInKeralaPage() {
    const jsonLd = digitalMarketingKeralaJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroKerala />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyKeralaIntroSection />
                <MarketingSeoSuccessStoriesIntroSection />
                <MarketingSeoWhatYouLearnSection />
                <MarketingSeoCoursesSection />
                <MarketingSeoToolsHiredSection />
                <MarketingSeoPrepareIndustrySection />
                <MarketingSeoSmarterLearnSection />
                <MarketingSeoLearningIsntEnoughSection />
                <MarketingSeoExclusiveBenefitsSection />
                <MarketingSeoMentorsSection />
                <MarketingSeoGuestExpertsSection />
                <MarketingSeoCareerWinsSection />
                <MarketingSeoBlogInsightsSection />
                <MarketingSeoMentorsBroughtHomeSection />
                <MarketingSeoJobReadyCareersSection />
                <MarketingSeoHacaCultureSection />
                <MarketingSeoKeralaFaqSection />
                <MarketingSeoKeralaCtaSection />
            </div>
        </>
    );
}
