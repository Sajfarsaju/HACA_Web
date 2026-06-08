import {
    buildDigitalMarketingKochiSeoMetadata,
    digitalMarketingKochiJsonLd,
} from "@/lib/marketing-school-seo";
import { MarketingSeoHeroKochi } from "./_sections/MarketingSeoHeroKochi";
import { MarketingSeoTrustedPressStatsSection } from "./_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyKochiIntroSection } from "./_sections/MarketingSeoAgencyKochiIntroSection";
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
import { MarketingSeoKochiFaqSection } from "./_sections/MarketingSeoKochiFaqSection";
import { MarketingSeoKochiCtaSection } from "./_sections/MarketingSeoKochiCtaSection";

export const metadata = buildDigitalMarketingKochiSeoMetadata();

export default function DigitalMarketingCourseInKochiPage() {
    const jsonLd = digitalMarketingKochiJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full">
                <MarketingSeoHeroKochi />
                <MarketingSeoTrustedPressStatsSection />
                <MarketingSeoAgencyKochiIntroSection />
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
                <MarketingSeoKochiFaqSection />
                <MarketingSeoKochiCtaSection />
            </div>
        </>
    );
}
