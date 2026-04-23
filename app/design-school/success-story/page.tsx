import type { Metadata } from "next";
import axios from "axios";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import {
    SchoolPlacementSection,
    type PlacementItem,
} from "@/components/success-story/SchoolPlacementSection";

export const metadata: Metadata = {
    title: "Design School Success Story | HACA",
    description: "Design School success stories.",
};

type PlacementGroup = {
    schoolName: string;
    items: PlacementItem[];
};

const FALLBACK_CARD_IMAGE_SRC = "/photos/schools/design/placements/Rectangle 42.png";

async function fetchDesignPlacements(): Promise<PlacementItem[]> {
    const base =
        process.env.NEXT_PUBLIC_BACKEND_URL ??
        process.env.BACKEND_URL ??
        "http://127.0.0.1:5000";

    try {
        const { data } = await axios.get<{ groups?: PlacementGroup[] }>(
            `${base}/api/placements/grouped?limit=200`,
            { headers: { "Cache-Control": "no-store" } }
        );
        const groups = Array.isArray(data.groups) ? data.groups : [];
        const designGroup = groups.find((g) => g.schoolName === "Design School");
        return designGroup?.items ?? [];
    } catch {
        return [];
    }
}

export default async function DesignSchoolSuccessStoryPage() {
    const designItems = await fetchDesignPlacements();

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
            <DesignSchoolNavbar />

            {/* Title block */}
            <section className="max-w-[1440px] mx-auto w-full h-[301px] pt-[40px] pr-[60px] pb-[40px] pl-[60px] flex flex-col gap-[40px]">
                <h1
                    className="w-[335px] h-[142px] md:w-[675px] md:h-[161px] text-[40px] md:text-[70px] leading-[120%] text-black"
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                >
                    From Learning Here to Getting{" "}
                    <span style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300 }} className="italic">
                        Hired
                    </span>
                </h1>
            </section>

            {/* Cards section */}
            <section className="w-full pt-[40px] pb-[40px] flex flex-col gap-[50px] lg:min-h-[1260px]">
                <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[60px]">
                    <SchoolPlacementSection schoolName="Design School" items={items} />
                </div>
            </section>
        </div>
    );
}

