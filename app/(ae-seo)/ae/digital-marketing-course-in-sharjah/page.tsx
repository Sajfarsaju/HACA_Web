import { buildHacaSharjahDigitalMarketingMetadata } from "@/lib/marketing-school-seo";

import { SharjahHeroSection } from "./_sections/SharjahHeroSection";
import { SharjahTrustedPressStatsSection } from "./_sections/SharjahTrustedPressStatsSection";
import { SharjahHiringNetworkSection } from "./_sections/SharjahHiringNetworkSection";
import { SharjahSuccessStoriesSection } from "./_sections/SharjahSuccessStoriesSection";
import { SharjahWhatYouLearnSection } from "./_sections/SharjahWhatYouLearnSection";
import { SharjahLearningFormatsSection } from "./_sections/SharjahLearningFormatsSection";
import { SharjahToolsCertificationsSection } from "./_sections/SharjahToolsCertificationsSection";
import { SharjahSmarterLearnSection } from "./_sections/SharjahSmarterLearnSection";
import { SharjahJobReadyCareersSection } from "./_sections/SharjahJobReadyCareersSection";
import { SharjahExclusiveBenefitsSection } from "./_sections/SharjahExclusiveBenefitsSection";
import { SharjahJourneySection } from "./_sections/SharjahJourneySection";
import { SharjahCtaSection } from "./_sections/SharjahCtaSection";
import { SharjahLearnerStoriesSection } from "./_sections/SharjahLearnerStoriesSection";
import { SharjahMentorsSection } from "./_sections/SharjahMentorsSection";
import { SharjahGuestExpertsSection } from "./_sections/SharjahGuestExpertsSection";
import { SharjahStudentResultsSection } from "./_sections/SharjahStudentResultsSection";
import { SharjahRecognizedSection } from "./_sections/SharjahRecognizedSection";
import { SharjahBlogInsightsSection } from "./_sections/SharjahBlogInsightsSection";
import { SharjahHacaCultureSection } from "./_sections/SharjahHacaCultureSection";
import { SharjahFaqSection } from "./_sections/SharjahFaqSection";
import { SharjahClosingCtaSection } from "./_sections/SharjahClosingCtaSection";

export const metadata = buildHacaSharjahDigitalMarketingMetadata();

export default function HacaSharjahDigitalMarketingPage() {
    return (
        <div className="w-full">
            <SharjahHeroSection />
            <SharjahTrustedPressStatsSection />
            <SharjahHiringNetworkSection />
            <SharjahSuccessStoriesSection />
            <SharjahWhatYouLearnSection />
            <SharjahLearningFormatsSection />
            <SharjahToolsCertificationsSection />
            <SharjahSmarterLearnSection />
            <SharjahJobReadyCareersSection />
            <SharjahExclusiveBenefitsSection />
            <SharjahJourneySection />
            <SharjahCtaSection />
            <SharjahLearnerStoriesSection />
            <SharjahMentorsSection />
            <SharjahGuestExpertsSection />
            <SharjahStudentResultsSection />
            <SharjahRecognizedSection />
            <SharjahBlogInsightsSection />
            <SharjahHacaCultureSection />
            <SharjahFaqSection />
            <SharjahClosingCtaSection />
        </div>
    );
}
