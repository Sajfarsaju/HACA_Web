import { Footer } from "@/components/layout/Footer";
import {
    SchoolPlacementSection,
    type PlacementItem,
} from "@/components/success-story/SchoolPlacementSection";
import { fetchPlacementGroups } from "@/lib/placements-api";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";

export const metadata = buildSitePageMetadata({
  title: "Success Story - Haris & Co Academy",
  description: "Marketing Design School",
  canonical: "https://harisandcoacademy.com/success-story/",
});

/** Must match admin dropdown + API `schoolName` */
const SCHOOL_NAMES = ["Marketing School", "Design School", "Tech School", "UAE School"] as const;

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
                    <div className="w-full max-w-[788px] mx-auto flex flex-col gap-[clamp(20px,2.5vw,20px)]">
                        <h1 className="w-full font-rethink font-bold text-[clamp(26px,4vw,54px)] leading-[34px] text-center text-white m-0">
                            Success Story
                        </h1>
                        <p className="w-full font-rethink font-bold text-[clamp(14px,1.4vw,20px)] leading-[clamp(17px,2.1vw,34px)] text-center text-[#A7ADBE] m-0">
                            They studied across our schools. Now they’re building creative careers across
                            agencies, brands, and studios.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] w-full items-center">
                        {SCHOOL_NAMES.map((schoolName) => {
                            const apiGroup = placementGroups.find((g) => g.schoolName === schoolName);
                            const apiItems: PlacementItem[] = apiGroup?.items ?? [];

                            return (
                                <div
                                    key={schoolName}
                                    className="flex flex-col gap-6 sm:gap-[30px] w-full max-w-[1387px]"
                                >
                                    <h2
                                        className="font-rethink font-medium tracking-[0%] text-[#FFFFFF] m-0 self-start max-md:self-center max-md:text-center text-[24px] md:text-[32px] leading-[100%]"
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
