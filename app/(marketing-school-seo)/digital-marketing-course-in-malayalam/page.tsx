import {
    buildDigitalMarketingMalayalamSeoMetadata,
    digitalMarketingMalayalamJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroMalayalam } from "./_sections/MarketingSeoHeroMalayalam";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyMalayalamIntroSection } from "./_sections/MarketingSeoAgencyMalayalamIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "./_sections/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoWhatYouLearnSection } from "./_sections/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "./_sections/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoToolsHiredSection";
import { MarketingSeoSmarterLearnSection } from "./_sections/MarketingSeoSmarterLearnSection";
import { MarketingSeoLearningIsntEnoughSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoLearningIsntEnoughSection";
import { MarketingSeoExclusiveBenefitsSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoExclusiveBenefitsSection";
import { MarketingSeoTestimonialsSection } from "./_sections/MarketingSeoTestimonialsSection";
import { MarketingSeoMentorsSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoMentorsSection";
import { MarketingSeoGuestExpertsSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoGuestExpertsSection";
import { MarketingCareerWinsSection } from "@/components/marketing/MarketingCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "@/components/marketing/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoMalayalamFaqSection } from "./_sections/MarketingSeoMalayalamFaqSection";
import { MarketingSeoMalayalamCtaSection } from "./_sections/MarketingSeoMalayalamCtaSection";

export const metadata = buildDigitalMarketingMalayalamSeoMetadata();

export default function DigitalMarketingCourseInMalayalamPage() {
    const jsonLd = digitalMarketingMalayalamJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroMalayalam />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyMalayalamIntroSection />
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
                <MarketingSeoMalayalamFaqSection />
                <MarketingSeoMalayalamCtaSection />
            </div>
        </>
    );
}
