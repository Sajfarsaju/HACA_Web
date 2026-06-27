"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

const CARD_BG = "#E5EDF7";
const GUEST_STROKE = "rgba(0, 102, 255, 0.38)";

type GuestItem = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
};

const FALLBACK_GUESTS: GuestItem[] = [
    { _id: "prasad-karthik", name: "Prasad Karthik", designation: "SEO Strategist", photoUrl: "/photos/schools/marketing/Prasad%20Karthik.png" },
    { _id: "mohammed-alfan", name: "Mohammed Alfan", designation: "Founder - Rows&Columns", photoUrl: "/photos/schools/marketing/Mohammed%20Alfan.png" },
    { _id: "minhaj", name: "Minhaj", designation: "Creative Strategy Mentor", photoUrl: "/photos/schools/marketing/Minhaj.png" },
    { _id: "mohammed", name: "Mohammed", designation: "Founder of Rows&Columns", photoUrl: "/photos/schools/marketing/Mohammed.png" },
];

function GuestCard({ guest }: { guest: GuestItem }) {
    return (
        <li className="min-w-0">
            <article className="flex flex-col gap-[10px]">
                <div
                    className="relative aspect-square w-full overflow-hidden rounded-[16px]"
                    style={{ backgroundColor: CARD_BG }}
                >
                    <span
                        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center text-center text-[clamp(2.25rem,9vw,3.75rem)] font-black uppercase leading-none tracking-[-0.02em] text-transparent [font-family:'Darker_Grotesque',sans-serif]"
                        style={{ WebkitTextStroke: `2px ${GUEST_STROKE}` }}
                        aria-hidden
                    >
                        GUEST
                    </span>
                    <div className="absolute inset-0 z-[1]">
                        <Image
                            src={guest.photoUrl}
                            alt={`${guest.name}, ${guest.designation}, guest expert at HACA UAE`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            unoptimized={guest.photoUrl.startsWith("http")}
                        />
                    </div>
                </div>
                <div className="flex min-h-0 flex-col gap-1 text-left">
                    <h3 className="m-0 font-bold tracking-normal text-black [font-family:'Satoshi',sans-serif] text-[clamp(1.125rem,2.2vw,1.25rem)] leading-tight">
                        {guest.name}
                    </h3>
                    <p className="m-0 font-medium leading-snug text-[#6B6B6B] [font-family:'Satoshi',sans-serif] text-[clamp(13px,1.4vw,15px)]">
                        {guest.designation}
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
};

export function UaeGuestExpertsContent({ sectionId, headingId, heading }: Props) {
    const [guests, setGuests] = useState<GuestItem[]>(FALLBACK_GUESTS);

    useEffect(() => {
        const base = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";

        fetch(`${base}/api/mentors?school=UAE%20Guest`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                if (Array.isArray(data?.mentors) && data.mentors.length > 0) {
                    setGuests(data.mentors);
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
                <header>
                    <h2
                        id={headingId}
                        className="m-0 max-w-[min(100%,720px)] text-left font-semibold tracking-[-0.04em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,5vw,3rem)] leading-[1.05] [text-rendering:geometricPrecision] lg:text-[55px] lg:leading-[1.08]"
                    >
                        {heading}
                    </h2>
                </header>

                <ul className="m-0 grid w-full list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
                    {guests.map((guest) => (
                        <GuestCard key={guest._id} guest={guest} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
