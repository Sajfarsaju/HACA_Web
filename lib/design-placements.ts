import axios from "axios";

export const DESIGN_SCHOOL_NAME = "Design School";

export const DESIGN_PLACEMENT_FALLBACK_IMAGE =
    "/photos/schools/design/placements/Rectangle 42.png";

export type DesignPlacementItem = {
    _id: string;
    title: string | null;
    imageUrl: string;
};

type PlacementGroup = {
    schoolName: string;
    items: DesignPlacementItem[];
};

function getBackendBase() {
    return (
        process.env.NEXT_PUBLIC_BACKEND_URL ??
        process.env.BACKEND_URL ??
        "http://127.0.0.1:5000"
    );
}

/** Design School cards from `/api/placements/grouped` (same source as success story page). */
export async function fetchDesignSchoolPlacements(): Promise<DesignPlacementItem[]> {
    try {
        const { data } = await axios.get<{ groups?: PlacementGroup[] }>(
            `${getBackendBase()}/api/placements/grouped?limit=200`,
            { headers: { "Cache-Control": "no-store" } }
        );
        const groups = Array.isArray(data.groups) ? data.groups : [];
        const designGroup = groups.find((g) => g.schoolName === DESIGN_SCHOOL_NAME);
        return designGroup?.items ?? [];
    } catch {
        return [];
    }
}

/** Placeholder cards when the API returns no design placements yet. */
export function designPlacementFallbackItems(count = 5): DesignPlacementItem[] {
    return Array.from({ length: count }, (_, i) => ({
        _id: `design-teaser-fallback-${i}`,
        title: null,
        imageUrl: DESIGN_PLACEMENT_FALLBACK_IMAGE,
    }));
}
