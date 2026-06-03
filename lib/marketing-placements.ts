import axios from "axios";

export const MARKETING_SCHOOL_NAME = "Marketing School";

export type MarketingPlacementItem = {
    _id: string;
    title: string | null;
    imageUrl: string;
};

type PlacementGroup = {
    schoolName: string;
    items: MarketingPlacementItem[];
};

function getBackendBase() {
    return (
        process.env.NEXT_PUBLIC_BACKEND_URL ??
        process.env.BACKEND_URL ??
        "http://127.0.0.1:5000"
    );
}

/** Marketing School cards from `/api/placements/grouped` (same source as success story page). */
export async function fetchMarketingSchoolPlacements(): Promise<MarketingPlacementItem[]> {
    try {
        const { data } = await axios.get<{ groups?: PlacementGroup[] }>(
            `${getBackendBase()}/api/placements/grouped?limit=200`,
            { headers: { "Cache-Control": "no-store" } }
        );
        const groups = Array.isArray(data.groups) ? data.groups : [];
        const marketingGroup = groups.find((g) => g.schoolName === MARKETING_SCHOOL_NAME);
        return marketingGroup?.items ?? [];
    } catch {
        return [];
    }
}

/** Placeholder cards when the API returns no marketing placements yet. */
export function marketingPlacementFallbackItems(count = 12): MarketingPlacementItem[] {
    return Array.from({ length: count }, (_, i) => ({
        _id: `marketing-placement-fallback-${i}`,
        title: null,
        imageUrl: "",
    }));
}
