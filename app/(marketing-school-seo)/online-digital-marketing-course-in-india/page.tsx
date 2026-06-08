import {
    buildOnlineDigitalMarketingIndiaSeoMetadata,
    digitalMarketingIndiaJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroIndia } from "./_sections/MarketingSeoHeroIndia";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyIndiaIntroSection } from "./_sections/MarketingSeoAgencyIndiaIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "./_sections/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoWhatYouLearnSection } from "./_sections/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "./_sections/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoToolsHiredSection";
import { MarketingSeoSmarterLearnSection } from "./_sections/MarketingSeoSmarterLearnSection";
import { MarketingSeoLearningIsntEnoughSection } from "./_sections/MarketingSeoLearningIsntEnoughSection";
import { MarketingSeoExclusiveBenefitsSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoExclusiveBenefitsSection";
import { MarketingSeoTestimonialsSection } from "./_sections/MarketingSeoTestimonialsSection";
import { MarketingSeoMentorsSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoMentorsSection";
import { MarketingSeoGuestExpertsSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoGuestExpertsSection";
import { MarketingCareerWinsSection } from "@/components/marketing/MarketingCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "@/components/marketing/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "../digital-marketing-course-in-kannur/_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "./_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "./_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoIndiaFaqSection } from "./_sections/MarketingSeoIndiaFaqSection";
import { MarketingSeoIndiaCtaSection } from "./_sections/MarketingSeoIndiaCtaSection";

export const metadata = buildOnlineDigitalMarketingIndiaSeoMetadata();

export default function OnlineDigitalMarketingCourseInIndiaPage() {
    const jsonLd = digitalMarketingIndiaJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroIndia />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyIndiaIntroSection />
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
                <MarketingSeoIndiaFaqSection />
                <MarketingSeoIndiaCtaSection />
            </div>
        </>
    );
}
