import { TechSeoDataAnalyticsKeralaDifferentSection } from "./_sections/TechSeoDataAnalyticsKeralaDifferentSection";
import { TechSeoDataAnalyticsKeralaHeroSection } from "./_sections/TechSeoDataAnalyticsKeralaHeroSection";
import { TechSeoDataAnalyticsKeralaSuccessStoriesSection } from "./_sections/TechSeoDataAnalyticsKeralaSuccessStoriesSection";
import { TechSeoDataAnalyticsKeralaCtaSection } from "./_sections/TechSeoDataAnalyticsKeralaCtaSection";
import { TechSeoDataAnalyticsKeralaMentorsSection } from "./_sections/TechSeoDataAnalyticsKeralaMentorsSection";
import { TechSeoDataAnalyticsKeralaWhyChooseSection } from "./_sections/TechSeoDataAnalyticsKeralaWhyChooseSection";
import { TechSeoDataAnalyticsKeralaToolsSection } from "./_sections/TechSeoDataAnalyticsKeralaToolsSection";
import { TechSeoDataAnalyticsKeralaWhatYouLearnSection } from "./_sections/TechSeoDataAnalyticsKeralaWhatYouLearnSection";
import {
    buildDataAnalyticsKeralaSeoMetadata,
    dataAnalyticsKeralaJsonLd,
} from "@/lib/tech-school-seo";

export const metadata = buildDataAnalyticsKeralaSeoMetadata();

export default function DataAnalyticsCourseInKeralaPage() {
    const jsonLd = dataAnalyticsKeralaJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full bg-[#000010]">
                <TechSeoDataAnalyticsKeralaHeroSection />
                <TechSeoDataAnalyticsKeralaDifferentSection />
                <TechSeoDataAnalyticsKeralaSuccessStoriesSection />
                <TechSeoDataAnalyticsKeralaWhatYouLearnSection />
                <TechSeoDataAnalyticsKeralaCtaSection />
                <TechSeoDataAnalyticsKeralaToolsSection />
                <TechSeoDataAnalyticsKeralaMentorsSection />
                <TechSeoDataAnalyticsKeralaWhyChooseSection />
            </div>
        </>
    );
}
