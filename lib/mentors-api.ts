export type PublicMentor = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
    linkedinUrl?: string | null;
    schoolName?: string;
};

function getBackendBase() {
    const url =
        process.env.NEXT_PUBLIC_BACKEND_URL ||
        process.env.BACKEND_URL ||
        "http://127.0.0.1:5000";
    return url.replace(/\/$/, "");
}

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
