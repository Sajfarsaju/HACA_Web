export type PlacementItem = {
    _id: string;
    title: string | null;
    imageUrl: string;
    createdAt?: string | null;
};

export type PlacementGroup = {
    schoolName: string;
    items: PlacementItem[];
};

const COLUMNS = 5;
const CARDS_PER_COL = 7;
export const PLACEMENT_TOTAL_SLOTS = COLUMNS * CARDS_PER_COL;

const SCHOOL_BY_COLUMN: [string, string, string] = [
    "Tech School",
    "Marketing School",
    "Design School",
];

/** Server + build: prefers public URL, then private BACKEND_URL. */
export function getBackendBase() {
    const url =
        process.env.NEXT_PUBLIC_BACKEND_URL ||
        process.env.BACKEND_URL ||
        "http://127.0.0.1:5000";
    return url.replace(/\/$/, "");
}

/** Browser/client components: only NEXT_PUBLIC_* (never BACKEND_URL). */
export function getPublicBackendBase() {
    const url =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000";
    return url.replace(/\/$/, "");
}

/** Public grouped placements (Success Story + home placement grid). */
export async function fetchPlacementGroups(): Promise<PlacementGroup[]> {
    try {
        const res = await fetch(
            `${getBackendBase()}/api/placements/grouped?limit=200`,
            { cache: "no-store" }
        );
        if (!res.ok) {
            if (process.env.NODE_ENV === "development") {
                console.error(
                    "[fetchPlacementGroups] HTTP",
                    res.status,
                    res.statusText
                );
            }
            return [];
        }
        const data: { groups?: PlacementGroup[] } = await res.json();
        return Array.isArray(data.groups) ? data.groups : [];
    } catch (err) {
        if (process.env.NODE_ENV === "development") {
            console.error("[fetchPlacementGroups]", err);
        }
        return [];
    }
}

/**
 * Column-major slots for the home placement marquee.
 * Col 0–2: latest 7 per school (Tech, Marketing, Design).
 * Col 3–4: remaining cards merged, sorted by latest first.
 */
export function buildPlacementSlots(
    groups: PlacementGroup[]
): (PlacementItem | null)[] {
    const bySchool = new Map<string, PlacementItem[]>();
    for (const g of groups) {
        if (g.schoolName && Array.isArray(g.items)) {
            bySchool.set(g.schoolName, g.items);
        }
    }

    const next: (PlacementItem | null)[] = Array.from(
        { length: PLACEMENT_TOTAL_SLOTS },
        () => null
    );
    const usedIds = new Set<string>();

    SCHOOL_BY_COLUMN.forEach((schoolName, colIndex) => {
        const schoolItems = bySchool.get(schoolName) ?? [];
        for (let i = 0; i < CARDS_PER_COL; i++) {
            const item = schoolItems[i] ?? null;
            const slotIndex = colIndex * CARDS_PER_COL + i;
            next[slotIndex] = item;
            if (item) usedIds.add(item._id);
        }
    });

    const allItems: PlacementItem[] = [];
    for (const g of groups) {
        if (Array.isArray(g.items)) allItems.push(...g.items);
    }
    const pool = allItems.filter((item) => !usedIds.has(item._id));
    const mixedLatest = [...pool].sort((a, b) => {
        const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return tb - ta;
    });

    for (let c = 0; c < 2; c++) {
        const colIndex = 3 + c;
        for (let i = 0; i < CARDS_PER_COL; i++) {
            const slotIndex = colIndex * CARDS_PER_COL + i;
            const pick = mixedLatest[c * CARDS_PER_COL + i];
            next[slotIndex] = pick ?? null;
        }
    }

    return next;
}
