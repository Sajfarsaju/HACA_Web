import type { Metadata } from "next";
import { DesignSchoolIntroAnimation } from "@/components/design/DesignSchoolIntroAnimation";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import {
    SchoolPlacementSection,
    type PlacementItem,
} from "@/components/success-story/SchoolPlacementSection";
import {
    DESIGN_PLACEMENT_FALLBACK_IMAGE,
    fetchDesignSchoolPlacements,
} from "@/lib/design-placements";

export const metadata: Metadata = {
    title: "Design School Success Story | HACA",
    description: "Design School success stories.",
};

const FALLBACK_CARD_IMAGE_SRC = DESIGN_PLACEMENT_FALLBACK_IMAGE;

export default async function DesignSchoolSuccessStoryPage() {
    const designItems = await fetchDesignSchoolPlacements();

    // Ensure at least 16 cards for the initial grid; keep ALL items if more than 16.
    const items: PlacementItem[] =
        designItems.length >= 16
            ? designItems
            : designItems.length > 0
              ? Array.from({ length: 16 }).map((_, i) => {
                    const baseItem = designItems[i % designItems.length];
                    return { ...baseItem, _id: `${baseItem._id}-copy-${i}` };
                })
              : Array.from({ length: 16 }).map((_, i) => ({
                    _id: `design-fallback-${i}`,
                    title: null,
                    imageUrl: FALLBACK_CARD_IMAGE_SRC,
                }));

    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolIntroAnimation />
            <DesignSchoolNavbar />

            {/* Title block */}
            <section className="max-w-[1440px] mx-auto w-full h-auto md:h-auto pt-[40px] px-[20px] pb-0 flex flex-col gap-[10px] items-start text-left md:items-start md:text-left md:px-6 lg:px-[60px] md:pb-0 md:gap-[4px]">
                <h1
                    className="w-[335px] h-[142px] md:w-[675px] md:h-[161px] text-[40px] md:text-[70px] leading-[120%] text-black mx-0 text-left md:text-left"
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                >
                    From Learning Here to Getting{" "}
                    <span style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300 }} className="italic">
                        Hired
                    </span>
                </h1>
            </section>

            {/* Cards section */}
            <section className="w-full pt-[10px] pb-[40px] flex flex-col gap-[50px] md:pt-[20px] lg:min-h-[1260px]">
                <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[60px]">
                    <SchoolPlacementSection schoolName="Design School" items={items} />
                </div>
            </section>
        </div>
    );
}

