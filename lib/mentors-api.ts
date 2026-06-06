import { getBackendBase } from "@/lib/placements-api";

export type PublicMentor = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
    linkedinUrl?: string | null;
    schoolName?: string;
};

/** Fetch mentors for a school (server components). */
export async function fetchMentorsBySchool(
    schoolName: string
): Promise<PublicMentor[]> {
    try {
        const res = await fetch(
            `${getBackendBase()}/api/mentors?school=${encodeURIComponent(schoolName)}`,
            { cache: "no-store" }
        );
        if (!res.ok) {
            if (process.env.NODE_ENV === "development") {
                console.error("[fetchMentorsBySchool]", res.status, schoolName);
            }
            return [];
        }
        const data: { mentors?: PublicMentor[] } = await res.json();
        if (!Array.isArray(data.mentors)) return [];
        return data.mentors.filter((m) => m.name?.trim() && m.photoUrl?.trim());
    } catch (err) {
        if (process.env.NODE_ENV === "development") {
            console.error("[fetchMentorsBySchool]", err);
        }
        return [];
    }
}

/** Fetch all mentors (e.g. /mentors page). */
export async function fetchAllMentors(): Promise<PublicMentor[]> {
    try {
        const res = await fetch(`${getBackendBase()}/api/mentors`, {
            cache: "no-store",
        });
        if (!res.ok) return [];
        const data: { mentors?: PublicMentor[] } = await res.json();
        if (!Array.isArray(data.mentors)) return [];
        return data.mentors.filter((m) => m.name?.trim() && m.photoUrl?.trim());
    } catch {
        return [];
    }
}

/** Public mentors list (optional filter by admin `schoolName`, e.g. "HACA"). */
export async function fetchPublicMentors(school?: string): Promise<PublicMentor[]> {
    try {
        const qs =
            typeof school === "string" && school.trim()
                ? `?school=${encodeURIComponent(school.trim())}`
                : "";
        const res = await fetch(`${getBackendBase()}/api/mentors${qs}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];
        const data: { mentors?: PublicMentor[] } = await res.json();
        return Array.isArray(data.mentors) ? data.mentors : [];
    } catch {
        return [];
    }
}
