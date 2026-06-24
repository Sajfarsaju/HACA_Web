import {
    buildPythonCalicutSeoMetadata,
    pythonCalicutJsonLd,
} from "@/lib/tech-school-seo";

import { TechSeoPythonCalicutHeroSection } from "./_sections/TechSeoPythonCalicutHeroSection";
import { TechSeoPythonCalicutDifferentSection } from "./_sections/TechSeoPythonCalicutDifferentSection";
import { TechSeoPythonCalicutSuccessStoriesSection } from "./_sections/TechSeoPythonCalicutSuccessStoriesSection";
import { TechSeoPythonCalicutWhatYouLearnSection } from "./_sections/TechSeoPythonCalicutWhatYouLearnSection";
import { TechSeoPythonCalicutCtaSection } from "./_sections/TechSeoPythonCalicutCtaSection";
import { TechSeoPythonCalicutToolsSection } from "./_sections/TechSeoPythonCalicutToolsSection";
import { TechSeoPythonCalicutMentorsSection } from "./_sections/TechSeoPythonCalicutMentorsSection";
import { TechSeoPythonCalicutWhyChooseSection } from "./_sections/TechSeoPythonCalicutWhyChooseSection";
import { TechSeoPythonCalicutCareerOutcomesSection } from "./_sections/TechSeoPythonCalicutCareerOutcomesSection";
import { TechSeoPythonCalicutLearnersSection } from "./_sections/TechSeoPythonCalicutLearnersSection";
import { TechSeoPythonCalicutFaqSection } from "./_sections/TechSeoPythonCalicutFaqSection";
import { TechSeoPythonCalicutEnrollCtaSection } from "./_sections/TechSeoPythonCalicutEnrollCtaSection";

export const metadata = buildPythonCalicutSeoMetadata();

export default function PythonCourseInCalicutPage() {
    const jsonLd = pythonCalicutJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full bg-transparent">
                <TechSeoPythonCalicutHeroSection />
                <TechSeoPythonCalicutDifferentSection />
                <TechSeoPythonCalicutSuccessStoriesSection />
                <TechSeoPythonCalicutWhatYouLearnSection />
                <TechSeoPythonCalicutCtaSection />
                <TechSeoPythonCalicutToolsSection />
                <TechSeoPythonCalicutMentorsSection />
                <TechSeoPythonCalicutWhyChooseSection />
                <TechSeoPythonCalicutCareerOutcomesSection />
                <TechSeoPythonCalicutLearnersSection />
                <TechSeoPythonCalicutFaqSection />
                <TechSeoPythonCalicutEnrollCtaSection />
            </div>
        </>
    );
}
