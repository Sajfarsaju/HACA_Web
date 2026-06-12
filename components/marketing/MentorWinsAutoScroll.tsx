"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

const PHOTO_GRADIENTS = [
    "linear-gradient(145deg, #E6EFFF 0%, #C5DBFF 45%, #8BB8FF 100%)",
    "linear-gradient(145deg, #D9F967 0%, #9fcc4a 55%, #7fb032 100%)",
    "linear-gradient(145deg, #F48E28 0%, #d97218 55%, #b85a12 100%)",
    "linear-gradient(145deg, #1DA1F2 0%, #178cd8 55%, #0f6fab 100%)",
    "linear-gradient(145deg, #E8F1FF 0%, #0066FF 70%, #0047B3 100%)",
    "linear-gradient(145deg, #FFE8F0 0%, #FF6B9D 50%, #C9184A 100%)",
    "linear-gradient(145deg, #F5F0FF 0%, #9B7EDE 50%, #5E35B1 100%)",
    "linear-gradient(145deg, #FFF4E6 0%, #FFB347 50%, #E65100 100%)",
] as const;

const AWARD_FILES = [
    "award 1.webp", "award 2.webp", "award 3.webp", "award 4.webp",
    "award 5.webp", "award 6.webp", "award 7.webp", "award 8.webp",
] as const;

const PHOTOS = AWARD_FILES.map((file, i) => ({
    id: `mentor-award-${i + 1}`,
    imageSrc: `/photos/schools/marketing/${encodeURIComponent(file)}`,
    alt: `HACA mentor award and campaign win ${i + 1}`,
    gradient: PHOTO_GRADIENTS[i % PHOTO_GRADIENTS.length],
}));

export function MentorWinsAutoScroll() {
    const ref = useRef<HTMLDivElement>(null);
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

    const doubled = [...PHOTOS, ...PHOTOS];

    return (
        <div
            ref={ref}
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
            onTouchStart={() => { paused.current = true; }}
            onTouchEnd={() => { setTimeout(() => { paused.current = false; }, 1500); }}
            className="
                relative w-full min-h-[300px] overflow-x-auto overflow-y-hidden
                [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2
                lg:static lg:left-auto lg:w-full lg:max-w-none lg:translate-x-0
            "
        >
            <ul
                className="m-0 flex w-max list-none flex-row gap-4 p-0 px-5 lg:px-0"
                aria-label="Mentor campaign wins and highlights"
            >
                {doubled.map((photo, i) => (
                    <li key={`${photo.id}-${i}`} className="h-[300px] w-[300px] shrink-0">
                        <figure
                            className="relative m-0 h-full w-full overflow-hidden rounded-lg"
                            style={{ background: photo.gradient }}
                        >
                            <Image
                                src={photo.imageSrc}
                                alt={photo.alt}
                                fill
                                className="object-cover object-center"
                                sizes="300px"
                            />
                            <figcaption className="sr-only">{photo.alt}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    );
}
