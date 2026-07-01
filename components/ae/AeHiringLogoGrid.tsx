"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BASE = "/photos/ae/hiring";

const ALL_LOGOS = [
    // Group 1 — Dubai logos
    { key: "med7",            src: `${BASE}/med7-clinic-logo.png`,     alt: "Med7 Clinic" },
    { key: "rebuild",         src: `${BASE}/rebuild-logo.svg`,          alt: "Rebuild" },
    { key: "yaz",             src: `${BASE}/yaz-logo.svg`,              alt: "Yaz" },
    { key: "dubai-1",         src: `${BASE}/dubai-logo-1.svg`,          alt: "Hiring Partner" },
    { key: "dubai-2",         src: `${BASE}/dubai-logo-2.svg`,          alt: "Hiring Partner" },
    { key: "logos",           src: `${BASE}/logos-logo.svg`,            alt: "Hiring Partner" },
    { key: "kord",            src: `${BASE}/kord-logo.png`,             alt: "KORD" },
    { key: "dubai-3",         src: `${BASE}/dubai-logo-3.png`,          alt: "Hiring Partner" },
    { key: "hayal",           src: `${BASE}/hayal-logo.webp`,           alt: "Hayal" },
    // Group 2 — UAE, Riyadh, Muscat, Qatar logos
    { key: "uae-1",           src: `${BASE}/uae-logo-1.svg`,            alt: "Hiring Partner UAE" },
    { key: "uae-2",           src: `${BASE}/uae-logo-2.webp`,           alt: "Hiring Partner UAE" },
    { key: "psi",             src: `${BASE}/psi-logo.webp`,             alt: "PSI" },
    { key: "e8",              src: `${BASE}/e8-logo.svg`,               alt: "E8" },
    { key: "fezey",           src: `${BASE}/fezey-logo.png`,            alt: "Fezey" },
    { key: "tbwa",            src: `${BASE}/tbwa-logo.svg`,             alt: "TBWA Raad" },
    { key: "great-solutions", src: `${BASE}/great-solutions-logo.png`,  alt: "Great Solutions" },
    { key: "genesys",         src: `${BASE}/genesys-logo.svg`,          alt: "Genesys" },
    { key: "qatar",           src: `${BASE}/qatar-logo.webp`,           alt: "Qatar Partner" },
];

const GROUPS = [ALL_LOGOS.slice(0, 9), ALL_LOGOS.slice(9, 18)];

type Logo = (typeof ALL_LOGOS)[number];

function LogoGrid({ logos }: { logos: Logo[] }) {
    return (
        <div
            className="grid h-full w-full grid-cols-3 grid-rows-3"
            role="list"
            aria-label="Hiring partner logos"
        >
            {logos.map(({ key, src, alt }, index) => {
                const col = index % 3;
                const row = Math.floor(index / 3);
                const showRight = col < 2;
                const showBottom = row < 2;
                return (
                    <div
                        key={key}
                        role="listitem"
                        className={[
                            "relative flex min-h-0 min-w-0 items-center justify-center bg-black px-2 py-2 lg:px-4 lg:py-4",
                            showRight ? "border-r-[0.46px] border-[#B2B2B24D] lg:border-r-[0.93px]" : "",
                            showBottom ? "border-b-[0.46px] border-[#B2B2B24D] lg:border-b-[0.93px]" : "",
                        ].join(" ")}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={160}
                            height={48}
                            className="h-auto max-h-[15px] w-auto max-w-[min(100px,28vw)] object-contain object-center brightness-0 invert lg:max-h-[31px] lg:max-w-[129px]"
                            sizes="(max-width: 1023px) 100px, 130px"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export function AeHiringLogoGrid() {
    const [activeGroup, setActiveGroup] = useState(0);

    useEffect(() => {
        // 4s display + 800ms fade transition
        const interval = setInterval(() => {
            setActiveGroup((prev) => (prev + 1) % GROUPS.length);
        }, 4800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full shrink-0 lg:mx-0 lg:mt-0 lg:w-[680px] lg:max-w-[680px]">
            <div className="box-border overflow-hidden rounded-none border-[0.46px] border-[#B2B2B24D] lg:border-[0.93px]">
                <div className="relative h-[184.227px] w-full lg:h-[373.953px]">
                    {GROUPS.map((group, gi) => (
                        <div
                            key={gi}
                            aria-hidden={gi !== activeGroup}
                            className={[
                                "absolute inset-0 transition-opacity duration-[800ms] ease-in-out",
                                gi === activeGroup ? "opacity-100" : "opacity-0",
                            ].join(" ")}
                        >
                            <LogoGrid logos={group} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
