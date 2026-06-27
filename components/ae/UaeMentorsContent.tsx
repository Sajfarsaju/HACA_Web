"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

const CARD_BG = "#E8F0FE";

type MentorItem = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
};

const FALLBACK_MENTORS: MentorItem[] = [
    { _id: "anandu-murali", name: "Anandu Murali", designation: "Ecommerce, Shopify Mentor", photoUrl: "/photos/schools/ae/Anandu Murali.webp" },
    { _id: "hiba-nishad", name: "Hiba Nishad", designation: "Content, Copy Writing Mentor", photoUrl: "/photos/schools/ae/Hiba Nishad.webp" },
    { _id: "jadesh-vp", name: "Jadesh VP", designation: "AI Content Creator Mentor", photoUrl: "/photos/schools/ae/Jadesh VP.webp" },
    { _id: "manisha-shetty", name: "Manisha Shetty", designation: "Wordpress Mentor", photoUrl: "/photos/schools/ae/Manisha Shetty.webp" },
];

function MentorCard({ mentor }: { mentor: MentorItem }) {
    return (
        <li className="min-w-0">
            <article className="flex flex-col gap-[10px]">
                <div
                    className="relative aspect-square w-full overflow-hidden rounded-[16px]"
                    style={{ backgroundColor: CARD_BG }}
                >
                    <Image
                        src={mentor.photoUrl}
                        alt={`${mentor.name}, ${mentor.designation} at HACA UAE`}
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        unoptimized={mentor.photoUrl.startsWith("http")}
                    />
                </div>
                <div className="flex min-h-0 flex-col gap-1 text-left">
                    <h3 className="m-0 font-bold tracking-normal text-black [font-family:'Satoshi',sans-serif] text-[clamp(1.125rem,2.2vw,1.25rem)] leading-tight">
                        {mentor.name}
                    </h3>
                    <p className="m-0 font-medium leading-snug text-[#6B6B6B] [font-family:'Satoshi',sans-serif] text-[clamp(13px,1.4vw,15px)]">
                        {mentor.designation}
                    </p>
                </div>
            </article>
        </li>
    );
}

type Props = {
    sectionId: string;
    headingId: string;
    heading: ReactNode;
    introCopy: string;
};

export function UaeMentorsContent({ sectionId, headingId, heading, introCopy }: Props) {
    const [mentors, setMentors] = useState<MentorItem[]>(FALLBACK_MENTORS);

    useEffect(() => {
        const base = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
        fetch(`${base}/api/mentors?school=UAE%20School`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                if (Array.isArray(data?.mentors) && data.mentors.length > 0) {
                    setMentors(data.mentors);
                }
            })
            .catch(() => {});
    }, []);

    return (
        <section
            id={sectionId}
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={headingId}
        >
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(28px,4vw,48px)] px-[clamp(16px,4.16vw,60px)] py-[clamp(32px,4vw,48px)] md:px-[clamp(24px,5vw,48px)] lg:gap-12 lg:px-[60px] lg:py-[60px]">
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                    <h2
                        id={headingId}
                        className="m-0 max-w-[min(100%,520px)] text-left font-semibold tracking-[-0.04em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,5vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision] lg:max-w-[min(100%,420px)] lg:text-[55px] lg:leading-[1.08]"
                    >
                        {heading}
                    </h2>
                    <p className="m-0 max-w-[min(100%,560px)] text-left font-normal leading-[1.55] text-[#4A4A4A] text-[clamp(15px,2vw,17px)] [font-family:'Satoshi',sans-serif] lg:max-w-[440px] lg:shrink-0 lg:self-end lg:text-[16px] lg:leading-[1.6]">
                        {introCopy}
                    </p>
                </header>

                <ul className="m-0 grid w-full list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
                    {mentors.map((mentor) => (
                        <MentorCard key={mentor._id} mentor={mentor} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
