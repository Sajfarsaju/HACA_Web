import { Metadata } from "next";
import { schoolData } from "@/lib/schools-data";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import { DesignHeroVideoTransition } from "@/components/design/DesignHeroVideoTransition";
import { DesignPressLogos } from "@/components/design/DesignPressLogos";
import { DesignStatsSection } from "@/components/design/DesignStatsSection";
import { DesignProgramsHeadingSection } from "@/components/design/DesignProgramsHeadingSection";
import { DesignProgramsSection } from "@/components/design/DesignProgramsSection";
import { DesignWhyCreativitySection } from "@/components/design/DesignWhyCreativitySection";

const school = schoolData.design;

export const metadata: Metadata = {
    title: `${school.title} | HACA`,
    description: school.description,
};

export default function DesignSchoolPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
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
        </div>
    );
}
