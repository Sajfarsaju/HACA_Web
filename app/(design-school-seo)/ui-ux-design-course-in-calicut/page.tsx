import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";
import { DesignStoriesInsightsSection } from "@/components/design/DesignStoriesInsightsSection";
import { DesignSchoolFooter } from "@/components/design/DesignSchoolFooter";

const DESIGN_HEADING_FONT = '"VC Nudge Trial Normal", sans-serif';
const DESIGN_SERIF_FONT = '"IvyPresto Display", serif';
import { UiUxDesignCalicutHeroSection } from "./_sections/UiUxDesignCalicutHeroSection";
import { UiUxDesignCalicutWhatWeHaveSection } from "./_sections/UiUxDesignCalicutWhatWeHaveSection";
import { UiUxDesignCalicutWhyChooseSection } from "./_sections/UiUxDesignCalicutWhyChooseSection";
import { UiUxDesignCalicutCurriculumSection } from "./_sections/UiUxDesignCalicutCurriculumSection";
import { UiUxDesignCalicutToolsSection } from "./_sections/UiUxDesignCalicutToolsSection";
import { UiUxDesignCalicutOutcomesSection } from "./_sections/UiUxDesignCalicutOutcomesSection";
import { UiUxDesignCalicutPlacementsSection } from "./_sections/UiUxDesignCalicutPlacementsSection";
import { UiUxDesignCalicutTestimonialsSection } from "./_sections/UiUxDesignCalicutTestimonialsSection";
import { UiUxDesignCalicutCareersSection } from "./_sections/UiUxDesignCalicutCareersSection";
import { UiUxDesignCalicutMentorsSection } from "./_sections/UiUxDesignCalicutMentorsSection";
import { UiUxDesignCalicutExploreProgramsSection } from "./_sections/UiUxDesignCalicutExploreProgramsSection";
import { UiUxDesignCalicutLearningExperienceSection } from "./_sections/UiUxDesignCalicutLearningExperienceSection";
import { UiUxDesignCalicutPortfolioSection } from "./_sections/UiUxDesignCalicutPortfolioSection";
import { UiUxDesignCalicutFaqSection } from "./_sections/UiUxDesignCalicutFaqSection";
import { UiUxDesignCalicutCtaSection } from "./_sections/UiUxDesignCalicutCtaSection";

export const metadata = buildDesignSchoolSeoMetadata("ui-ux-design-course-in-calicut");

export default function UiUxDesignCourseInCalicutPage() {
    return (
        <>
            <UiUxDesignCalicutHeroSection />
            <UiUxDesignCalicutWhatWeHaveSection />
            <UiUxDesignCalicutCurriculumSection />
            <UiUxDesignCalicutToolsSection />
            <UiUxDesignCalicutOutcomesSection />
            <UiUxDesignCalicutPlacementsSection />
            <UiUxDesignCalicutTestimonialsSection />
            <UiUxDesignCalicutCareersSection />
            <UiUxDesignCalicutMentorsSection />
            <UiUxDesignCalicutExploreProgramsSection />
            <UiUxDesignCalicutWhyChooseSection />
            <UiUxDesignCalicutLearningExperienceSection />
            <UiUxDesignCalicutPortfolioSection />
            <div className="w-full bg-[#FCFCFC] flex justify-center">
                <DesignStoriesInsightsSection font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
            </div>
            <UiUxDesignCalicutFaqSection />
            <UiUxDesignCalicutCtaSection />
            <DesignSchoolFooter font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
        </>
    );
}
