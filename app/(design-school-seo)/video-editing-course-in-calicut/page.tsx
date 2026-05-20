import { VideoEditingCalicutHeroSection } from "@/components/design/VideoEditingCalicutHeroSection";
import { VideoEditingCalicutStatsSection } from "@/components/design/VideoEditingCalicutStatsSection";
import { buildDesignSchoolSeoMetadata, designSchoolSeoJsonLd } from "@/lib/design-school-seo";

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
        </>
    );
}
