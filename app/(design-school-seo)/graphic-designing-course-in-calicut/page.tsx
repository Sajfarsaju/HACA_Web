import { GraphicDesigningCalicutHeroSection } from "@/components/design/GraphicDesigningCalicutHeroSection";
import { GraphicDesigningCalicutStatsSection } from "@/components/design/GraphicDesigningCalicutStatsSection";
import { GraphicDesigningCalicutWhatWeHaveSection } from "@/components/design/GraphicDesigningCalicutWhatWeHaveSection";
import { GraphicDesigningCalicutFlagshipProgramSection } from "@/components/design/GraphicDesigningCalicutFlagshipProgramSection";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

/**
 * Navbar: `app/(design-school-seo)/layout.tsx` (`DesignSchoolNavbar`).
 */
export const metadata = buildDesignSchoolSeoMetadata("graphic-designing-course-in-calicut");

export default function GraphicDesigningCourseInCalicutPage() {
    return (
        <>
            <GraphicDesigningCalicutHeroSection />
            <GraphicDesigningCalicutStatsSection />
            <GraphicDesigningCalicutWhatWeHaveSection />
            <GraphicDesigningCalicutFlagshipProgramSection />
        </>
    );
}
