import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import {
    SchoolPlacementSection,
    type PlacementItem,
} from "@/components/success-story/SchoolPlacementSection";

export const metadata: Metadata = {
    title: "Success Stories | HACA",
    description:
        "They studied across our schools. Now they're building creative careers across agencies, brands, and studios.",
};

type PlacementGroup = {
    schoolName: string;
    items: PlacementItem[];
};

/** Must match admin dropdown + API `schoolName` */
const SCHOOL_NAMES = ["Marketing School", "Design School", "Tech School"] as const;

async function fetchPlacementGroups(): Promise<PlacementGroup[]> {
    const base =
        process.env.NEXT_PUBLIC_BACKEND_URL ??
        process.env.BACKEND_URL ??
        "http://127.0.0.1:5000";
    try {
        const res = await fetch(`${base}/api/placements/grouped?limit=200`, {
            cache: "no-store",
        });
        if (!res.ok) return [];
        const data = (await res.json()) as { groups?: PlacementGroup[] };
        return Array.isArray(data.groups) ? data.groups : [];
    } catch {
        return [];
    }
}

export default async function SuccessStoryPage() {
    const placementGroups = await fetchPlacementGroups();

    return (
        <div
            className="w-full bg-transparent overflow-x-hidden md:pt-20 lg:pt-0 flex flex-col justify-between"
            style={{ minHeight: "2325px" }}
        >
            <div className="flex-grow">
                <section
                    className="w-full flex pt-6 sm:pt-12 md:pt-[100px] lg:pt-[120px] pb-6 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-10 lg:px-[60px] flex-col items-center justify-start gap-8 sm:gap-12 md:gap-[50px] overflow-hidden"
                    style={{
                        height: "auto",
                        minHeight: "1684px",
                    }}
                >
                    <div
                        className="flex flex-col items-center justify-center text-center gap-[20px] mx-auto text-black"
                        style={{
                            width: "100%",
                            maxWidth: "788px",
                            height: "auto",
                        }}
                    >
                        <h1 className="font-rethink font-bold tracking-[0%] text-[#FFFFFF] m-0 w-full max-w-full min-w-0 h-auto md:w-auto text-[26px] md:text-[58px] leading-[1.2] md:leading-[1.2] text-center">
                            Success Story
                        </h1>
                        <p className="font-rethink font-bold tracking-[0%] text-[#A7ADBE] m-0 w-full min-w-0 max-w-full h-auto text-[14px] md:text-[20px] leading-[1.25] sm:leading-relaxed md:leading-[34px] text-center break-words">
                            They studied across our schools. Now they’re building creative careers across
                            agencies, brands, and studios.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] w-full items-center">
                        {SCHOOL_NAMES.map((schoolName) => {
                            const apiGroup = placementGroups.find((g) => g.schoolName === schoolName);
                            const apiItems = apiGroup?.items ?? [];

                            return (
                                <div
                                    key={schoolName}
                                    className="flex flex-col gap-6 sm:gap-[30px] w-full max-w-[1387px]"
                                >
                                    <h2
                                        className="font-rethink font-medium tracking-[0%] text-[#FFFFFF] m-0 self-start text-[24px] md:text-[32px] leading-[100%]"
                                        style={{ fontWeight: 500 }}
                                    >
                                        {schoolName}
                                    </h2>

                                    <SchoolPlacementSection schoolName={schoolName} items={apiItems} />
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
