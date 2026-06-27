import { buildHacaAeSeoMetadata } from "@/lib/marketing-school-seo";

import { AeHeroSection } from "./_sections/AeHeroSection";
import { AeTrustedPressStatsSection } from "./_sections/AeTrustedPressStatsSection";
import { AeHiringNetworkSection } from "./_sections/AeHiringNetworkSection";
import { AeSuccessStoriesSection } from "./_sections/AeSuccessStoriesSection";
import { AeWhatYouLearnSection } from "./_sections/AeWhatYouLearnSection";
import { AeLearningFormatsSection } from "./_sections/AeLearningFormatsSection";
import { AeToolsCertificationsSection } from "./_sections/AeToolsCertificationsSection";
import { AeSmarterLearnSection } from "./_sections/AeSmarterLearnSection";
import { AeJobReadyCareersSection } from "./_sections/AeJobReadyCareersSection";
import { AeExclusiveBenefitsSection } from "./_sections/AeExclusiveBenefitsSection";
import { AeJourneySection } from "./_sections/AeJourneySection";
import { AeCtaSection } from "./_sections/AeCtaSection";
import { AeLearnerStoriesSection } from "./_sections/AeLearnerStoriesSection";
import { AeMentorsSection } from "./_sections/AeMentorsSection";
import { AeGuestExpertsSection } from "./_sections/AeGuestExpertsSection";
import { AeStudentResultsSection } from "./_sections/AeStudentResultsSection";
import { AeRecognizedSection } from "./_sections/AeRecognizedSection";
import { AeBlogInsightsSection } from "./_sections/AeBlogInsightsSection";
import { AeHacaCultureSection } from "./_sections/AeHacaCultureSection";
import { AeFaqSection } from "./_sections/AeFaqSection";
import { AeClosingCtaSection } from "./_sections/AeClosingCtaSection";

export const metadata = buildHacaAeSeoMetadata();

export default function HacaAePage() {
    return (
        <div className="w-full">
            <AeHeroSection />
            <AeTrustedPressStatsSection />
            <AeHiringNetworkSection />
            <AeSuccessStoriesSection />
            <AeWhatYouLearnSection />
            <AeLearningFormatsSection />
            <AeToolsCertificationsSection />
            <AeSmarterLearnSection />
            <AeJobReadyCareersSection />
            <AeExclusiveBenefitsSection />
            <AeJourneySection />
            <AeCtaSection />
            <AeLearnerStoriesSection />
            <AeMentorsSection />
            <AeGuestExpertsSection />
            <AeGuestExpertsSection />
            <AeStudentResultsSection />
            <AeRecognizedSection />
            <AeBlogInsightsSection />
            <AeHacaCultureSection />
            <AeFaqSection />
            <AeClosingCtaSection />
        </div>
    );
}
