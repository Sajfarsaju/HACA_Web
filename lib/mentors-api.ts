import { getBackendBase } from "@/lib/placements-api";

export type PublicMentor = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
    linkedinUrl?: string | null;
};

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
