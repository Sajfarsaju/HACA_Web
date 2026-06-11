import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { MentorPhotoFrame } from "@/components/mentors/MentorPhotoFrame";

export const metadata: Metadata = {
    title: "Mentors | HACA",
    description:
        "A team of passionate creatives, marketers, designers, and developers dedicated to sharing industry knowledge, practical skills, and career-building guidance.",
};

type Mentor = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
    linkedinUrl?: string | null;
};

const SCHOOLS: { key: string; label: string }[] = [
    { key: "HACA",             label: "HACA"             },
    { key: "Design School",    label: "Design School"    },
    { key: "Marketing School", label: "Marketing School" },
    { key: "Tech School",      label: "Tech School"      },
];

async function getMentorsBySchool(school: string): Promise<Mentor[]> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
        const res = await fetch(
            `${backendUrl}/api/mentors?school=${encodeURIComponent(school)}`,
            { next: { revalidate: 60 } }
        );
        if (!res.ok) return [];
        const data = await res.json();
        return data.mentors ?? [];
    } catch {
        return [];
    }
}

function MentorCard({ mentor }: { mentor: Mentor }) {
    return (
        <article className="w-full max-w-[317px] max-lg:max-w-[300px] mx-auto flex flex-col">
            {/* Photo container */}
            <MentorPhotoFrame
                src={mentor.photoUrl}
                alt={mentor.name}
                sizes="(max-width: 1024px) 300px, 317px"
                className="rounded-t-[15.85px] max-lg:rounded-t-[15px] border-[#25317D] border-[1px] max-lg:border-[0.95px] px-[clamp(17.03px,1.3vw,18px)] py-[clamp(17.98px,1.35vw,19px)] bg-[linear-gradient(340.87deg,rgba(0,2,15,0)_23.42%,rgba(15,47,153,0.2)_74.9%,rgba(26,79,255,0.2)_90.34%)]"
            />

            {/* Name + designation + LinkedIn */}
            <div
                className="
                    w-full flex items-center justify-between
                    bg-[#000319]
                    border border-[#232D6B]
                    rounded-b-[15.85px]
                    p-[15.85px]
                    h-[80.7px]
                    max-lg:rounded-b-[15px]
                    max-lg:p-[15px]
                    max-lg:h-[74px]
                "
                style={{ borderWidth: "0.79px" }}
            >
                <div className="flex min-w-0 flex-col gap-[2px]">
                    <p className="m-0 font-rethink font-medium text-[14px] leading-[100%] tracking-[-0.02em] text-[#6D7792]">
                        {mentor.designation}
                    </p>
                    <h3 className="m-0 font-rethink font-semibold text-[24px] max-lg:text-[20px] leading-[100%] tracking-[-0.02em] text-white truncate">
                        {mentor.name}
                    </h3>
                </div>

                {mentor.linkedinUrl ? (
                    <Link
                        href={mentor.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${mentor.name} on LinkedIn`}
                        className="shrink-0 opacity-95 hover:opacity-100 transition-opacity"
                    >
                        <Image
                            src="/photos/main/linkedin icon.svg"
                            alt="" aria-hidden="true"
                            width={24}
                            height={24}
                            className="h-[23.775px] w-[23.775px] max-lg:h-[22.5px] max-lg:w-[22.5px]"
                        />
                    </Link>
                ) : (
                    <span className="shrink-0 opacity-60" aria-hidden>
                        <Image
                            src="/photos/main/linkedin icon.svg"
                            alt="" aria-hidden="true"
                            width={24}
                            height={24}
                            className="h-[23.775px] w-[23.775px] max-lg:h-[22.5px] max-lg:w-[22.5px]"
                        />
                    </span>
                )}
            </div>
        </article>
    );
}

export default async function MentorsPage() {
    const schoolMentors = await Promise.all(
        SCHOOLS.map(async (s) => ({ ...s, mentors: await getMentorsBySchool(s.key) }))
    );
    const filledSchools = schoolMentors.filter((s) => s.mentors.length > 0);

    return (
        <div className="w-full bg-transparent overflow-x-hidden flex flex-col justify-between min-h-screen">
            <div className="flex-grow">
                <section
                    className="
                        w-full flex flex-col items-center justify-start overflow-hidden
                        pt-12 md:pt-[100px] lg:pt-[120px]
                        px-4 md:px-10 lg:px-[60px]
                        pb-10 lg:pb-16
                        gap-[50px] lg:gap-[70px]
                    "
                >
                    {/* Page heading */}
                    <div className="w-full max-w-[788px] mx-auto flex flex-col items-center gap-[10px] lg:gap-[20px]">
                        <h1 className="w-full font-rethink font-bold text-[26px] lg:text-[58px] leading-[120%] lg:leading-[110%] text-center text-white m-0">
                            The Mentors Behind Your Success
                        </h1>
                        <p className="w-full font-rethink font-semibold lg:font-normal text-[14px] lg:text-[20px] leading-[115%] text-center text-[#A7ADBE] m-0">
                            A team of passionate creatives, marketers, designers, and developers dedicated to
                            sharing industry knowledge, practical skills, and career-building guidance.
                        </p>
                    </div>

                    {filledSchools.length === 0 ? (
                        <p className="text-center text-[#A7ADBE] text-sm">
                            Mentor profiles coming soon.
                        </p>
                    ) : (
                        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[50px] lg:gap-[70px]">
                            {filledSchools.map((school) => (
                                <div key={school.key} className="flex flex-col gap-[24px] lg:gap-[36px]">
                                    {/* School label */}
                                    <div className="flex items-center gap-[14px]">
                                        <h2 className="m-0 font-rethink font-bold text-[20px] lg:text-[32px] leading-[110%] tracking-[-0.02em] text-white">
                                            {school.label}
                                        </h2>
                                        <div className="flex-1 h-[1px] bg-[#25317D] opacity-60" />
                                    </div>

                                    {/* Desktop: 4-col grid */}
                                    <div className="hidden lg:grid w-full max-w-[1320px] mx-auto grid-cols-4 gap-x-[20px] gap-y-[20px]">
                                        {school.mentors.map((m) => (
                                            <MentorCard key={m._id} mentor={m} />
                                        ))}
                                    </div>

                                    {/* Mobile/tablet: single column */}
                                    <div className="lg:hidden w-full max-w-[343px] mx-auto flex flex-col gap-[20px]">
                                        {school.mentors.map((m) => (
                                            <MentorCard key={m._id} mentor={m} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <Footer />
        </div>
    );
}
