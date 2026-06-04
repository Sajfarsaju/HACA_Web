import { NextRequest, NextResponse } from "next/server";

function getBackendBase() {
    const url =
        process.env.NEXT_PUBLIC_BACKEND_URL ||
        process.env.BACKEND_URL ||
        "http://127.0.0.1:5000";
    return url.replace(/\/$/, "");
}

/** Same-origin proxy → Express `/api/mentors` (avoids CORS / wrong public URL in browser). */
export async function GET(request: NextRequest) {
    const school = request.nextUrl.searchParams.get("school");
    const target = new URL(`${getBackendBase()}/api/mentors`);
    if (school) target.searchParams.set("school", school);

    try {
        const res = await fetch(target.toString(), { cache: "no-store" });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        const message = err instanceof Error ? err.message : "Mentors fetch failed";
        return NextResponse.json({ error: message, mentors: [] }, { status: 502 });
    }
}
