"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

const CARD_BG = "#E8F0FE";

export type MentorItem = {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
};

function MentorCard({ mentor }: { mentor: MentorItem }) {
    return (
        <li className="w-[200px] shrink-0 lg:w-[250px]" aria-hidden={undefined}>
            <article className="flex flex-col gap-[10px]">
                <div
                    className="relative aspect-square w-full overflow-hidden rounded-[16px]"
                    style={{ backgroundColor: CARD_BG }}
                >
                    <Image
                        src={mentor.imageSrc}
                        alt={`${mentor.name}, ${mentor.role} at HACA Marketing School`}
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width:1024px) 200px, 250px"
                    />
                </div>
                <div className="flex min-h-0 flex-col gap-1 text-left">
                    <h3
                        className="
                            m-0 font-bold tracking-normal text-black
                            [font-family:'Satoshi',sans-serif]
                            text-[clamp(1.125rem,2.2vw,1.25rem)] leading-tight
                        "
                    >
                        {mentor.name}
                    </h3>
                    <p
                        className="
                            m-0 font-medium leading-snug text-[#6B6B6B]
                            [font-family:'Satoshi',sans-serif]
                            text-[clamp(13px,1.4vw,15px)]
                        "
                    >
                        {mentor.role}
                    </p>
                </div>
            </article>
        </li>
    );
}

export function MentorsAutoScroll({ mentors }: { mentors: MentorItem[] }) {
    const ref = useRef<HTMLUListElement>(null);
    const paused = useRef(false);
    const raf = useRef<number | undefined>(undefined);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const tick = () => {
            if (!paused.current && el) {
                el.scrollLeft += 1;
                const half = el.scrollWidth / 2;
                if (el.scrollLeft >= half) {
                    el.scrollLeft -= half;
                }
            }
            raf.current = requestAnimationFrame(tick);
        };

        raf.current = requestAnimationFrame(tick);
        return () => {
            if (raf.current !== undefined) cancelAnimationFrame(raf.current);
        };
    }, []);

    const doubled = [...mentors, ...mentors];

    return (
        <ul
            ref={ref}
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
            onTouchStart={() => { paused.current = true; }}
            onTouchEnd={() => { setTimeout(() => { paused.current = false; }, 1500); }}
            className="
                m-0 flex w-full list-none flex-row gap-6 overflow-x-auto p-0
                [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
            aria-label="Marketing school mentors"
        >
            {doubled.map((mentor, i) => (
                <MentorCard key={`${mentor.id}-${i}`} mentor={mentor} />
            ))}
        </ul>
    );
}
