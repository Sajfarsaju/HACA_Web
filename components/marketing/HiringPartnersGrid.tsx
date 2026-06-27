"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type HiringPartnerLogo = {
    src: string;
    alt: string;
};

const PAGE_SIZE = 9;
const DISPLAY_MS = 4000;
const FADE_MS = 500;

function splitPages(logos: HiringPartnerLogo[]): HiringPartnerLogo[][] {
    const pages: HiringPartnerLogo[][] = [];
    for (let i = 0; i < logos.length; i += PAGE_SIZE) {
        pages.push(logos.slice(i, i + PAGE_SIZE));
    }
    return pages;
}

function buildCells(
    logos: HiringPartnerLogo[],
    animated: boolean,
): (HiringPartnerLogo | null)[] {
    if (animated) {
        const cells: (HiringPartnerLogo | null)[] = [...logos];
        while (cells.length < PAGE_SIZE) cells.push(null);
        return cells;
    }
    const rem = logos.length % 3;
    return rem === 0 ? logos : [...logos, ...(Array(3 - rem).fill(null) as null[])];
}

export function HiringPartnersGrid({ logos }: { logos: HiringPartnerLogo[] }) {
    const pages = splitPages(logos);
    const animated = pages.length > 1;

    const [page, setPage] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        if (!animated) return;
        timerRef.current = setTimeout(() => setFading(true), DISPLAY_MS);
        return () => clearTimeout(timerRef.current);
    }, [page, animated]);

    function handleTransitionEnd(e: React.TransitionEvent) {
        if (e.propertyName !== "opacity" || !fading) return;
        setPage((p) => (p + 1) % pages.length);
        setFading(false);
    }

    const cells = buildCells(pages[page] ?? [], animated);
    const totalRows = Math.ceil(cells.length / 3);

    return (
        <div className="box-border overflow-hidden rounded-none border-[0.46px] border-[#B2B2B24D] lg:border-[0.93px]">
            <div
                className="grid w-full grid-cols-3"
                role="list"
                aria-label="Hiring partner logos"
                style={animated ? { opacity: fading ? 0 : 1, transition: `opacity ${FADE_MS}ms ease-in-out` } : undefined}
                onTransitionEnd={animated ? handleTransitionEnd : undefined}
            >
                {cells.map((logo, index) => {
                    const col = index % 3;
                    const row = Math.floor(index / 3);
                    return (
                        <div
                            key={logo ? logo.src : `empty-${index}`}
                            role={logo ? "listitem" : undefined}
                            className={[
                                "relative flex min-h-0 min-w-0 items-center justify-center bg-black px-2 py-2 min-h-[61px] lg:px-4 lg:py-4 lg:min-h-[124px]",
                                col < 2 ? "border-r-[0.46px] border-[#B2B2B24D] lg:border-r-[0.93px]" : "",
                                row < totalRows - 1 ? "border-b-[0.46px] border-[#B2B2B24D] lg:border-b-[0.93px]" : "",
                            ].join(" ")}
                        >
                            {logo && (
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={160}
                                    height={48}
                                    className="h-auto max-h-[15px] w-auto max-w-[min(100px,28vw)] object-contain object-center brightness-0 invert lg:max-h-[31px] lg:max-w-[129px]"
                                    sizes="(max-width: 1023px) 100px, 130px"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
