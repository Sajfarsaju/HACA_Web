import {
    buildDigitalMarketingErnakulamSeoMetadata,
    digitalMarketingErnakulamJsonLd,
} from "@/lib/marketing-school-seo";

// Reuse all generic Kochi sections (same content area — Ernakulam district)
import { MarketingSeoHeroKochi } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoHeroKochi";
import { MarketingSeoTrustedPressStatsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoTrustedPressStatsSection";
import { MarketingSeoAgencyKochiIntroSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoAgencyKochiIntroSection";
import { MarketingSeoSuccessStoriesIntroSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoSuccessStoriesIntroSection";
import { MarketingSeoWhatYouLearnSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoWhatYouLearnSection";
import { MarketingSeoCoursesSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoCoursesSection";
import { MarketingSeoToolsHiredSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoToolsHiredSection";
import { MarketingSeoSmarterLearnSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoSmarterLearnSection";
import { MarketingSeoLearningIsntEnoughSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoLearningIsntEnoughSection";
import { MarketingSeoExclusiveBenefitsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoExclusiveBenefitsSection";
import { MarketingSeoTestimonialsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoTestimonialsSection";
import { MarketingSeoMentorsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoMentorsSection";
import { MarketingSeoGuestExpertsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoGuestExpertsSection";
import { MarketingSeoCareerWinsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoCareerWinsSection";
import { MarketingSeoBlogInsightsSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoBlogInsightsSection";
import { MarketingSeoMentorsBroughtHomeSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoMentorsBroughtHomeSection";
import { MarketingSeoJobReadyCareersSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoJobReadyCareersSection";
import { MarketingSeoHacaCultureSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoHacaCultureSection";
import { MarketingSeoKochiCtaSection } from "../digital-marketing-course-in-kochi/_sections/MarketingSeoKochiCtaSection";

// Ernakulam-specific FAQ section with its own questions and canonical FAQ schema
import { MarketingSeoErnakulamFaqSection } from "./_sections/MarketingSeoErnakulamFaqSection";

export const metadata = buildDigitalMarketingErnakulamSeoMetadata();

export default function DigitalMarketingCourseInErnakulamPage() {
    const jsonLd = digitalMarketingErnakulamJsonLd();

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
                <MarketingSeoCareerWinsSection />
                <MarketingSeoBlogInsightsSection />
                <MarketingSeoMentorsBroughtHomeSection />
                <MarketingSeoJobReadyCareersSection />
                <MarketingSeoHacaCultureSection />
                <MarketingSeoErnakulamFaqSection />
                <MarketingSeoKochiCtaSection />
            </div>
        </>
    );
}
