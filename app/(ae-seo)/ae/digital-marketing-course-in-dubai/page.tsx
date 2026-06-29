import { buildHacaDubaiDigitalMarketingMetadata } from "@/lib/marketing-school-seo";

import { DubaiHeroSection } from "./_sections/DubaiHeroSection";
import { DubaiTrustedPressStatsSection } from "./_sections/DubaiTrustedPressStatsSection";
import { DubaiHiringNetworkSection } from "./_sections/DubaiHiringNetworkSection";
import { DubaiSuccessStoriesSection } from "./_sections/DubaiSuccessStoriesSection";
import { DubaiWhatYouLearnSection } from "./_sections/DubaiWhatYouLearnSection";
import { DubaiLearningFormatsSection } from "./_sections/DubaiLearningFormatsSection";
import { DubaiToolsCertificationsSection } from "./_sections/DubaiToolsCertificationsSection";
import { DubaiSmarterLearnSection } from "./_sections/DubaiSmarterLearnSection";
import { DubaiJobReadyCareersSection } from "./_sections/DubaiJobReadyCareersSection";
import { DubaiExclusiveBenefitsSection } from "./_sections/DubaiExclusiveBenefitsSection";
import { DubaiJourneySection } from "./_sections/DubaiJourneySection";
import { DubaiCtaSection } from "./_sections/DubaiCtaSection";
import { DubaiLearnerStoriesSection } from "./_sections/DubaiLearnerStoriesSection";
import { DubaiMentorsSection } from "./_sections/DubaiMentorsSection";
import { DubaiGuestExpertsSection } from "./_sections/DubaiGuestExpertsSection";
import { DubaiStudentResultsSection } from "./_sections/DubaiStudentResultsSection";
import { DubaiRecognizedSection } from "./_sections/DubaiRecognizedSection";
import { DubaiBlogInsightsSection } from "./_sections/DubaiBlogInsightsSection";
import { DubaiHacaCultureSection } from "./_sections/DubaiHacaCultureSection";
import { DubaiFaqSection } from "./_sections/DubaiFaqSection";
import { DubaiClosingCtaSection } from "./_sections/DubaiClosingCtaSection";

export const metadata = buildHacaDubaiDigitalMarketingMetadata();

export default function HacaDubaiDigitalMarketingPage() {
    return (
        <div className="w-full">
            <DubaiHeroSection />
            <DubaiTrustedPressStatsSection />
            <DubaiHiringNetworkSection />
            <DubaiSuccessStoriesSection />
            <DubaiWhatYouLearnSection />
            <DubaiLearningFormatsSection />
            <DubaiToolsCertificationsSection />
            <DubaiSmarterLearnSection />
            <DubaiJobReadyCareersSection />
            <DubaiExclusiveBenefitsSection />
            <DubaiJourneySection />
            <DubaiCtaSection />
            <DubaiLearnerStoriesSection />
            <DubaiMentorsSection />
            <DubaiGuestExpertsSection />
            <DubaiStudentResultsSection />
            <DubaiRecognizedSection />
            <DubaiBlogInsightsSection />
            <DubaiHacaCultureSection />
            <DubaiFaqSection />
            <DubaiClosingCtaSection />
        </div>
    );
}
