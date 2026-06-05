import { VideoEditingCalicutHeroSection } from "@/components/design/VideoEditingCalicutHeroSection";
import { VideoEditingCalicutStatsSection } from "@/components/design/VideoEditingCalicutStatsSection";
import { VideoEditingCalicutWhatYouLearnSection } from "@/components/design/VideoEditingCalicutWhatYouLearnSection";
import { VideoEditingCalicutToolsSection } from "@/components/design/VideoEditingCalicutToolsSection";
import { VideoEditingCalicutAchieveSection } from "@/components/design/VideoEditingCalicutAchieveSection";
import { VideoEditingCalicutExploreProgramsSection } from "@/components/design/VideoEditingCalicutExploreProgramsSection";
import { VideoEditingCalicutWhatMakesDifferentSection } from "@/components/design/VideoEditingCalicutWhatMakesDifferentSection";
import { VideoEditingCalicutMentorsSection } from "@/components/design/VideoEditingCalicutMentorsSection";
import { DesignSchoolSeoPlacementsSection } from "@/components/design/DesignSchoolSeoPlacementsSection";
import { VideoEditingCalicutLearningCultureSection } from "@/components/design/VideoEditingCalicutLearningCultureSection";
import { VideoEditingCalicutTestimonialsSection } from "@/components/design/VideoEditingCalicutTestimonialsSection";
import { VideoEditingCalicutFaqSection } from "@/components/design/VideoEditingCalicutFaqSection";
import { VideoEditingCalicutCtaSection } from "@/components/design/VideoEditingCalicutCtaSection";
import { DesignSchoolFooter } from "@/components/design/DesignSchoolFooter";
import { buildDesignSchoolSeoMetadata, designSchoolSeoJsonLd } from "@/lib/design-school-seo";

const DESIGN_HEADING_FONT = '"VC Nudge Trial Normal", sans-serif';
const DESIGN_SERIF_FONT = '"IvyPresto Display", serif';

export const metadata = buildDesignSchoolSeoMetadata("video-editing-course-in-calicut");

export default function VideoEditingCourseInCalicutPage() {
    const jsonLd = designSchoolSeoJsonLd("video-editing-course-in-calicut");

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <VideoEditingCalicutHeroSection />
            <VideoEditingCalicutStatsSection />
            <VideoEditingCalicutWhatYouLearnSection />
            <VideoEditingCalicutToolsSection />
            <VideoEditingCalicutAchieveSection />
            <VideoEditingCalicutExploreProgramsSection />
            <VideoEditingCalicutWhatMakesDifferentSection />
            <VideoEditingCalicutMentorsSection />
            <DesignSchoolSeoPlacementsSection />
            <VideoEditingCalicutLearningCultureSection />
            <VideoEditingCalicutTestimonialsSection />
            <VideoEditingCalicutFaqSection />
            <VideoEditingCalicutCtaSection />
            <DesignSchoolFooter
                font={DESIGN_HEADING_FONT}
                serif={DESIGN_SERIF_FONT}
                staticTheme={{ background: "#8F56FF", accent: "#FF5C00" }}
            />
        </>
    );
}
