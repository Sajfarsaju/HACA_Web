import { Metadata } from "next";
import axios from "axios";
import { Footer } from "@/components/layout/Footer";
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";
import {
    SchoolPlacementSection,
    type PlacementItem,
} from "@/components/success-story/SchoolPlacementSection";

export const metadata: Metadata = {
    title: "Success Stories | Marketing School | HACA",
    description:
        "Our graduates are building real marketing careers across different roles and companies.",
};

type PlacementGroup = {
    schoolName: string;
    items: PlacementItem[];
};

async function fetchMarketingPlacements(): Promise<PlacementItem[]> {
    const base =
        process.env.NEXT_PUBLIC_BACKEND_URL ??
        process.env.BACKEND_URL ??
        "http://127.0.0.1:5000";

    try {
        const { data } = await axios.get<{ groups?: PlacementGroup[] }>(
            `${base}/api/placements/grouped?limit=200`,
            {
                headers: { "Cache-Control": "no-store" },
            }
        );
        const groups = Array.isArray(data.groups) ? data.groups : [];
        const marketingGroup = groups.find((g) => g.schoolName === "Marketing School");
        return marketingGroup?.items ?? [];
    } catch {
        return [];
    }
}

export default async function MarketingSuccessStoryPage() {
    const marketingItems = await fetchMarketingPlacements();

    // Ensure at least 16 cards for the initial grid; keep ALL items if more than 16.
    const items: PlacementItem[] =
        marketingItems.length >= 16
            ? marketingItems
            : marketingItems.length > 0
              ? Array.from({ length: 16 }).map((_, i) => {
                    const baseItem = marketingItems[i % marketingItems.length];
                    return { ...baseItem, _id: `${baseItem._id}-copy-${i}` };
                })
              : [];

    return (
        <div className="w-full bg-white overflow-x-hidden min-h-screen flex flex-col justify-between text-black">
            <MarketingNavbar />
            
            <div className="flex-grow flex flex-col items-center w-full">
                {/* Desktop max-width: 1440px container */}
                <section className="w-full max-w-[1440px] flex flex-col gap-[14px] md:gap-[40px] pt-[40px] pb-[40px] px-[16px] md:px-[19px] mx-auto overflow-hidden">
                    {/* Inner content wrapper for heading */}
                    <div className="flex flex-col items-center justify-center text-center gap-[14px] md:gap-[20px] w-full mx-auto md:h-auto md:max-w-none max-w-[375px]">
                        <h1 
                            className="font-darker-grotesque font-semibold text-[36px] md:text-[56px] leading-[95%] text-black m-0 tracking-[0%]"
                            style={{ fontFamily: "Darker Grotesque, sans-serif", fontWeight: 600 }}
                        >
                            Success Story
                        </h1>
                        <p 
                            className="font-darker-grotesque font-semibold text-[16px] md:text-[20px] leading-[95%] md:leading-[140%] text-center text-black m-0 max-w-[800px]"
                            style={{ fontFamily: "Darker Grotesque, sans-serif", fontWeight: 600 }}
                        >
                            Our graduates are building real marketing careers across different roles and companies.
                        </p>
                    </div>

                    <div className="flex flex-col w-full items-center">
                        <div className="w-full">
                            <SchoolPlacementSection schoolName="Marketing School" items={items} />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
