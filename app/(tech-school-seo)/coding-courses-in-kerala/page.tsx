import {
    buildCodingKeralaSeoMetadata,
    codingKeralaJsonLd,
} from "@/lib/tech-school-seo";

import { TechSeoCodingKeralaHeroSection } from "./_sections/TechSeoCodingKeralaHeroSection";
import { TechSeoCodingKeralaFlagshipSection } from "./_sections/TechSeoCodingKeralaFlagshipSection";
import { TechSeoCodingKeralaDifferentSection } from "./_sections/TechSeoCodingKeralaDifferentSection";
import { TechSeoCodingKeralaWhatYouLearnSection } from "./_sections/TechSeoCodingKeralaWhatYouLearnSection";
import { TechSeoCodingKeralaProjectsSection } from "./_sections/TechSeoCodingKeralaProjectsSection";
import { TechSeoCodingKeralaToolsSection } from "./_sections/TechSeoCodingKeralaToolsSection";
import { TechSeoCodingKeralaCareerOutcomesSection } from "./_sections/TechSeoCodingKeralaCareerOutcomesSection";
import { TechSeoCodingKeralaLearnersSection } from "./_sections/TechSeoCodingKeralaLearnersSection";
import { TechSeoCodingKeralaEnrollCtaSection } from "./_sections/TechSeoCodingKeralaEnrollCtaSection";
import { TechSeoCodingKeralaExploreCoursesSection } from "./_sections/TechSeoCodingKeralaExploreCoursesSection";
import { TechSeoCodingKeralaWhyChooseSection } from "./_sections/TechSeoCodingKeralaWhyChooseSection";
import { TechSeoCodingKeralaWhoCanJoinSection } from "./_sections/TechSeoCodingKeralaWhoCanJoinSection";
import { TechSeoCodingKeralaSuccessStoriesSection } from "./_sections/TechSeoCodingKeralaSuccessStoriesSection";
import { TechSeoCodingKeralaFaqSection } from "./_sections/TechSeoCodingKeralaFaqSection";
import { TechSeoCodingKeralaBottomCtaSection } from "./_sections/TechSeoCodingKeralaBottomCtaSection";

export const metadata = buildCodingKeralaSeoMetadata();

export default function CodingCoursesInKeralaPage() {
    const jsonLd = codingKeralaJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full bg-[#000010]">
                <TechSeoCodingKeralaHeroSection />
                <TechSeoCodingKeralaFlagshipSection />
                <TechSeoCodingKeralaDifferentSection />
                <TechSeoCodingKeralaWhatYouLearnSection />
                <TechSeoCodingKeralaProjectsSection />
                <TechSeoCodingKeralaToolsSection />
                <TechSeoCodingKeralaCareerOutcomesSection />
                <TechSeoCodingKeralaLearnersSection />
                <TechSeoCodingKeralaEnrollCtaSection />
                <TechSeoCodingKeralaExploreCoursesSection />
                <TechSeoCodingKeralaWhyChooseSection />
                <TechSeoCodingKeralaWhoCanJoinSection />
                <TechSeoCodingKeralaSuccessStoriesSection />
                <TechSeoCodingKeralaFaqSection />
                <TechSeoCodingKeralaBottomCtaSection />
            </div>
        </>
    );
}
