import React from "react";
import { DesignSchoolIntroAnimation } from "@/components/design/DesignSchoolIntroAnimation";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import { DesignHeroVideoTransition } from "@/components/design/DesignHeroVideoTransition";
import { DesignPressLogos } from "@/components/design/DesignPressLogos";
import { DesignStatsSection } from "@/components/design/DesignStatsSection";
import { DesignProgramsHeadingSection } from "@/components/design/DesignProgramsHeadingSection";
import { DesignProgramsSection } from "@/components/design/DesignProgramsSection";
import { DesignWhyCreativitySection } from "@/components/design/DesignWhyCreativitySection";
import { DesignFigmaRecognizedSection } from "@/components/design/DesignFigmaRecognizedSection";
import { DesignEnterCreativeZoneSection } from "@/components/design/DesignEnterCreativeZoneSection";
import { DesignMentorsSection } from "@/components/design/DesignMentorsSection";
import { DesignPlacementsTeaserSection } from "@/components/design/DesignPlacementsTeaserSection";
import {
    designPlacementFallbackItems,
    fetchDesignSchoolPlacements,
} from "@/lib/design-placements";
import { DesignStudentProjectsSection } from "@/components/design/DesignStudentProjectsSection";
import { DesignTestimonialsSection } from "@/components/design/DesignTestimonialsSection";
import { DesignFaqSection } from "@/components/design/DesignFaqSection";
import { DesignSchoolFooter } from "@/components/design/DesignSchoolFooter";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";

/** Match testimonials / hero typography on design school pages */
const DESIGN_HEADING_FONT = '"VC Nudge Trial Normal", sans-serif'
const DESIGN_SERIF_FONT = '"IvyPresto Display", serif';

export const metadata = buildSitePageMetadata({
  title: "Master Graphic Design & UI/UX Skills | Design School by HACA",
  description:
    "Join Design School at HACA to master graphic design, UI/UX, and motion graphics with expert mentors. Learn through hands-on projects and real-world applications!",
  canonical: "https://harisandcoacademy.com/design-school/",
});

export default async function DesignSchoolPage() {
    const designPlacements = await fetchDesignSchoolPlacements();
    const placementTeaserItems =
        designPlacements.length > 0 ? designPlacements : designPlacementFallbackItems(5);

    return (
        <div
            className="w-full bg-[#FCFCFC] min-h-screen"
            style={{
                fontFamily: DESIGN_HEADING_FONT,
                "--font-heading": DESIGN_HEADING_FONT,
                "--font-serif": DESIGN_SERIF_FONT,
            } as React.CSSProperties}
        >
            <DesignSchoolIntroAnimation />
            <DesignSchoolNavbar />

            {/* Hero → Video scroll transition */}
            <DesignHeroVideoTransition />

            {/* Press logos */}
            <div className="w-full max-w-[1440px] mx-auto">
                <DesignPressLogos />
            </div>

            {/* Stats section */}
            <DesignStatsSection />

            {/* Programs heading */}
            <DesignProgramsHeadingSection />

            {/* Programs cards */}
            <DesignProgramsSection />

            {/* Why Creativity section */}
            <DesignWhyCreativitySection />

            {/* Figma recognized section */}
            <DesignFigmaRecognizedSection />

            {/* Enter creative zone */}
            <DesignEnterCreativeZoneSection />

            {/* Mentors section */}
            <DesignMentorsSection />

            {/* Placements teaser */}
            <DesignPlacementsTeaserSection items={placementTeaserItems} />

            {/* Student projects */}
            <DesignStudentProjectsSection />

            {/* Testimonials */}
            <DesignTestimonialsSection />

            {/* FAQ */}
            <div className="flex w-full justify-center">
                <DesignFaqSection font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
            </div>

            <DesignSchoolFooter font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
        </div>
    );
}
