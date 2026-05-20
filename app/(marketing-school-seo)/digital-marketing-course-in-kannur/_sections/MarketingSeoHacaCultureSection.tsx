import Image from "next/image";

const HEADING_ID = "marketing-seo-kannur-haca-culture-heading";

const SUBTITLE = "Learning here goes beyond classes.";

const PHOTO_GRADIENTS = [
    "linear-gradient(145deg, #2a2a2a 0%, #4a4a4a 45%, #1a1a2e 100%)",
    "linear-gradient(145deg, #1e3a5f 0%, #0066FF 55%, #003d99 100%)",
    "linear-gradient(145deg, #3d2c4a 0%, #9B7EDE 50%, #5E35B1 100%)",
    "linear-gradient(145deg, #2d3436 0%, #636e72 55%, #2d3436 100%)",
    "linear-gradient(145deg, #F48E28 0%, #d97218 55%, #b85a12 100%)",
    "linear-gradient(145deg, #0f4c3a 0%, #2ecc71 50%, #27ae60 100%)",
] as const;

type CultureTile = {
    id: string;
    width: number;
    alt: string;
    imageSrc?: string;
};

const CULTURE_ROW_1: CultureTile[] = [
    { id: "c-r1-1", width: 300, alt: "HACA culture moment 1" },
    { id: "c-r1-2", width: 300, alt: "HACA culture moment 2" },
    { id: "c-r1-3", width: 240, alt: "HACA culture moment 3" },
    { id: "c-r1-4", width: 315, alt: "HACA culture moment 4" },
    { id: "c-r1-5", width: 271, alt: "HACA culture moment 5" },
    { id: "c-r1-6", width: 381, alt: "HACA culture moment 6" },
];

const CULTURE_ROW_2: CultureTile[] = [
    { id: "c-r2-1", width: 365, alt: "HACA culture moment 7" },
    { id: "c-r2-2", width: 240, alt: "HACA culture moment 8" },
    { id: "c-r2-3", width: 300, alt: "HACA culture moment 9" },
    { id: "c-r2-4", width: 240, alt: "HACA culture moment 10" },
    { id: "c-r2-5", width: 430, alt: "HACA culture moment 11" },
    { id: "c-r2-6", width: 300, alt: "HACA culture moment 12" },
];

function CulturePhotoTile({ tile, gradientIndex }: { tile: CultureTile; gradientIndex: number }) {
    const gradient = PHOTO_GRADIENTS[gradientIndex % PHOTO_GRADIENTS.length];

    return (
        <li
            className="relative h-[300px] shrink-0 overflow-hidden rounded-lg"
            style={{ width: tile.width }}
        >
            {tile.imageSrc ? (
                <Image
                    src={tile.imageSrc}
                    alt={tile.alt}
                    fill
                    className="object-cover object-center"
                    sizes={`${tile.width}px`}
                />
            ) : (
                <div
                    className="absolute inset-0 rounded-lg"
                    style={{ background: gradient }}
                    aria-hidden
                />
            )}
        </li>
    );
}

function CultureMarqueeRow({
    tiles,
    direction,
    rowLabel,
}: {
    tiles: CultureTile[];
    direction: "ltr" | "rtl";
    rowLabel: string;
}) {
    const loop = [...tiles, ...tiles];
    const trackClass =
        direction === "ltr" ? "haca-culture-marquee-row1-track" : "haca-culture-marquee-row2-track";

    return (
        <div className="w-full min-w-0 overflow-hidden" aria-label={rowLabel}>
            <ul className={`m-0 flex w-max list-none flex-row gap-2 p-0 ${trackClass}`}>
                {loop.map((tile, i) => (
                    <CulturePhotoTile key={`${tile.id}-${i}`} tile={tile} gradientIndex={i % tiles.length} />
                ))}
            </ul>
        </div>
    );
}

export function MarketingSeoHacaCultureSection() {
    return (
        <section
            id="marketing-seo-kannur-haca-culture"
            className="flex w-full flex-col gap-10 bg-[#0F0F0F] text-white opacity-100 lg:gap-[60px]"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <style>{`
                @keyframes haca-culture-marquee-ltr {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes haca-culture-marquee-rtl {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .haca-culture-marquee-row1-track {
                    animation: haca-culture-marquee-ltr 55s linear infinite;
                    will-change: transform;
                }
                .haca-culture-marquee-row2-track {
                    animation: haca-culture-marquee-rtl 58s linear infinite;
                    will-change: transform;
                }
                .haca-culture-marquee-row1-track:hover,
                .haca-culture-marquee-row2-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .haca-culture-marquee-row1-track,
                    .haca-culture-marquee-row2-track {
                        animation: none;
                        transform: none;
                    }
                }
            `}</style>

            <div
                className="
                    mx-auto box-border w-full min-w-0 max-w-[1440px] px-5 pt-6
                    lg:px-[60px] lg:pt-10
                "
            >
                <header className="mx-auto flex w-full max-w-[375px] flex-col items-center gap-[10px] text-center lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full font-semibold tracking-[-0.01em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.1]
                        "
                    >
                        <span className="block">Life at HACA</span>
                    </h2>
                    <p
                        className="
                            m-0 w-full text-[16px] font-normal leading-[1.5] tracking-[-0.05em] text-[#FFFFFFE5]
                        "
                        style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
                    >
                        {SUBTITLE}
                    </p>
                </header>
            </div>

            <div
                className="
                    relative flex w-screen max-w-[100vw] flex-col gap-2
                    left-1/2 -translate-x-1/2 pb-5
                    lg:pb-10
                "
            >
                <p className="sr-only">
                    Scrolling gallery of HACA campus culture and community moments. Top row moves left to right;
                    bottom row moves right to left.
                </p>
                <CultureMarqueeRow
                    tiles={CULTURE_ROW_1}
                    direction="ltr"
                    rowLabel="HACA culture photos, row one"
                />
                <CultureMarqueeRow
                    tiles={CULTURE_ROW_2}
                    direction="rtl"
                    rowLabel="HACA culture photos, row two"
                />
            </div>
        </section>
    );
}
