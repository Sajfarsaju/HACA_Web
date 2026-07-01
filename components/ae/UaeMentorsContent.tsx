"use client";

import { type ReactNode, useEffect, useState } from "react";

import { MentorsAutoScroll, type MentorItem } from "@/components/marketing/MentorsAutoScroll";

const FALLBACK_MENTORS: MentorItem[] = [
    { id: "anandu-murali", name: "Anandu Murali", role: "Ecommerce, Shopify Mentor", imageSrc: "/photos/schools/ae/Anandu Murali.webp" },
    { id: "hiba-nishad", name: "Hiba Nishad", role: "Content, Copy Writing Mentor", imageSrc: "/photos/schools/ae/Hiba Nishad.webp" },
    { id: "jadesh-vp", name: "Jadesh VP", role: "AI Content Creator Mentor", imageSrc: "/photos/schools/ae/Jadesh VP.webp" },
    { id: "manisha-shetty", name: "Manisha Shetty", role: "Wordpress Mentor", imageSrc: "/photos/schools/ae/Manisha Shetty.webp" },
];

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
                    setMentors(
                        data.mentors.map((m: { _id: string; name: string; designation: string; photoUrl: string }) => ({
                            id: m._id,
                            name: m.name,
                            role: m.designation,
                            imageSrc: m.photoUrl,
                        }))
                    );
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
                        className="m-0 max-w-[min(100%,520px)] text-left font-semibold tracking-[-0.04em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,5vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision] lg:max-w-[min(100%,600px)] lg:text-[55px] lg:leading-[1.08]"
                    >
                        {heading}
                    </h2>
                    <p className="m-0 max-w-[min(100%,560px)] text-left font-normal leading-[1.55] text-[#4A4A4A] text-[clamp(15px,2vw,17px)] [font-family:'Satoshi',sans-serif] lg:max-w-[440px] lg:shrink-0 lg:self-end lg:text-[16px] lg:leading-[1.6]">
                        {introCopy}
                    </p>
                </header>

                <MentorsAutoScroll mentors={mentors} ariaLabel="UAE mentors" />
            </div>
        </section>
    );
}
