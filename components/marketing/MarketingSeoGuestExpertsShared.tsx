"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";

const SCHOOL_KEY = "Marketing India Guest";
const CARD_BG = "#E5EDF7";
const GUEST_STROKE = "rgba(0, 102, 255, 0.38)";

type Expert = {
    _id: string;
    name: string;
    designation: string;
    photoUrl: string;
    guestWatermark?: boolean;
};

const FALLBACK: Expert[] = [
    {
        _id: "f1",
        name: "Prasad Karthik",
        designation: "SEO Strategist",
        photoUrl: "/photos/schools/marketing/Prasad%20Karthik.webp",
    },
    {
        _id: "f2",
        name: "Mohammed Alfan",
        designation: "Founder - Rows&Columns",
        photoUrl: "/photos/schools/marketing/Mohammed%20Alfan.webp",
    },
    {
        _id: "f3",
        name: "Minhaj",
        designation: "Creative Strategy Mentor",
        photoUrl: "/photos/schools/marketing/Minhaj.webp",
        guestWatermark: true,
    },
    {
        _id: "f4",
        name: "Mohammed",
        designation: "Founder of Rows&Columns",
        photoUrl: "/photos/schools/marketing/Mohammed.webp",
    },
];

type Props = {
    sectionId: string;
    headingId: string;
    /** Each string renders as a <span className="block"> */
    headingLines: string[];
    tagline: string;
    /** Right-aligns the tagline at lg breakpoint. Default: false (left) */
    taglineRight?: boolean;
    /** Uses items-start instead of items-end on the header at lg. Default: false */
    headerItemsStart?: boolean;
    /** Adds lg:pt-1 to the tagline paragraph. Default: false */
    taglinePt?: boolean;
};

export function MarketingSeoGuestExpertsShared({
    sectionId,
    headingId,
    headingLines,
    tagline,
    taglineRight = false,
    headerItemsStart = false,
    taglinePt = false,
}: Props) {
    const [experts, setExperts] = useState<Expert[]>([]);

    useEffect(() => {
        fetch(
            `${getPublicBackendBase()}/api/mentors?school=${encodeURIComponent(SCHOOL_KEY)}`
        )
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { mentors?: Expert[] } | null) => {
                if (data?.mentors && data.mentors.length > 0) {
                    setExperts(data.mentors);
                }
            })
            .catch(() => {});
    }, []);

    const display = experts.length > 0 ? experts : FALLBACK;

    return (
        <section
            id={sectionId}
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={headingId}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(28px,4vw,48px)]
                    px-[clamp(16px,4.16vw,60px)] py-[clamp(32px,4vw,48px)]
                    md:px-[clamp(24px,5vw,48px)]
                    lg:gap-12 lg:px-[60px] lg:py-[60px]
                "
            >
                <header
                    className={`flex w-full min-w-0 flex-col gap-5 lg:flex-row lg:justify-between lg:gap-10 ${
                        headerItemsStart ? "lg:items-start" : "lg:items-end"
                    }`}
                >
                    <h2
                        id={headingId}
                        className="
                            m-0 max-w-[min(100%,640px)] text-left font-semibold tracking-[-0.04em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,5vw,3rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:max-w-[min(100%,720px)] lg:text-[55px] lg:leading-[1.08]
                        "
                    >
                        {headingLines.map((line, i) => (
                            <span key={i} className="block">
                                {line}
                            </span>
                        ))}
                    </h2>
                    <p
                        className={`
                            m-0 max-w-[min(100%,420px)] text-left font-normal leading-[1.5] text-[#6B6B6B]
                            text-[clamp(14px,1.8vw,16px)]
                            [font-family:'Satoshi',sans-serif]
                            ${taglinePt ? "lg:pt-1 " : ""}${taglineRight ? "lg:text-right" : "lg:text-left"} lg:text-[17px] lg:leading-[1.55]
                        `}
                    >
                        {tagline}
                    </p>
                </header>

                <ul
                    className="
                        m-0 grid w-full list-none grid-cols-1 gap-8 p-0
                        sm:grid-cols-2
                        lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10
                    "
                >
                    {display.map((expert, i) => (
                        <li key={expert._id ?? i} className="min-w-0">
                            <article className="flex flex-col gap-[10px]">
                                <div
                                    className="relative aspect-square w-full overflow-hidden rounded-[16px]"
                                    style={{ backgroundColor: CARD_BG }}
                                >
                                    {expert.guestWatermark ? (
                                        <span
                                            className="
                                                pointer-events-none absolute inset-0 z-0 flex select-none
                                                items-center justify-center text-center
                                                text-[clamp(2.25rem,9vw,3.75rem)] font-black uppercase
                                                leading-none tracking-[-0.02em] text-transparent
                                                [font-family:'Darker_Grotesque',sans-serif]
                                            "
                                            style={{
                                                WebkitTextStroke: `2px ${GUEST_STROKE}`,
                                            }}
                                            aria-hidden
                                        >
                                            GUEST
                                        </span>
                                    ) : null}
                                    <div className="absolute inset-0 z-[1]">
                                        <Image
                                            src={expert.photoUrl}
                                            alt={`${expert.name}, ${expert.designation}, guest expert at HACA Marketing School`}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                </div>
                                <div className="flex min-h-0 flex-col gap-1 text-left">
                                    <h3
                                        className="
                                            m-0 font-bold tracking-normal text-black
                                            [font-family:'Satoshi',sans-serif]
                                            text-[clamp(1.125rem,2.2vw,1.25rem)] leading-tight
                                        "
                                    >
                                        {expert.name}
                                    </h3>
                                    <p
                                        className="
                                            m-0 font-medium leading-snug text-[#6B6B6B]
                                            [font-family:'Satoshi',sans-serif]
                                            text-[clamp(13px,1.4vw,15px)]
                                        "
                                    >
                                        {expert.designation}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
