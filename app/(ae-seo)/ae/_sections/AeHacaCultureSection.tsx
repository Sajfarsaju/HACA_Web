const HEADING_ID = "ae-haca-culture-heading";

const SUBTITLE = "Be part of a community where ideas grow, friendships form, and every day brings something new to learn.";

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
    { id: "c-r1-1", width: 300, alt: "HACA UAE culture moment 1" },
    { id: "c-r1-2", width: 300, alt: "HACA UAE culture moment 2" },
    { id: "c-r1-3", width: 240, alt: "HACA UAE culture moment 3" },
    { id: "c-r1-4", width: 315, alt: "HACA UAE culture moment 4" },
    { id: "c-r1-5", width: 271, alt: "HACA UAE culture moment 5" },
    { id: "c-r1-6", width: 381, alt: "HACA UAE culture moment 6" },
];

const CULTURE_ROW_2: CultureTile[] = [
    { id: "c-r2-1", width: 365, alt: "HACA UAE culture moment 7" },
    { id: "c-r2-2", width: 240, alt: "HACA UAE culture moment 8" },
    { id: "c-r2-3", width: 300, alt: "HACA UAE culture moment 9" },
    { id: "c-r2-4", width: 240, alt: "HACA UAE culture moment 10" },
    { id: "c-r2-5", width: 430, alt: "HACA UAE culture moment 11" },
    { id: "c-r2-6", width: 300, alt: "HACA UAE culture moment 12" },
];

function CulturePhotoTile({ tile, gradientIndex }: { tile: CultureTile; gradientIndex: number }) {
    const gradient = PHOTO_GRADIENTS[gradientIndex % PHOTO_GRADIENTS.length];

    return (
        <li
            className="relative h-[300px] shrink-0 overflow-hidden rounded-lg"
            style={{ width: tile.width }}
        >
            <div
                className="absolute inset-0 rounded-lg"
                style={{ background: gradient }}
                aria-hidden
            />
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
        direction === "ltr" ? "ae-culture-marquee-row1-track" : "ae-culture-marquee-row2-track";

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

export function AeHacaCultureSection() {
    return (
        <section
            id="ae-haca-culture"
            className="flex w-full flex-col gap-10 bg-[#0F0F0F] text-white opacity-100 lg:gap-[60px]"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <style>{`
                @keyframes ae-culture-marquee-ltr {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes ae-culture-marquee-rtl {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ae-culture-marquee-row1-track {
                    animation: ae-culture-marquee-ltr 55s linear infinite;
                    will-change: transform;
                }
                .ae-culture-marquee-row2-track {
                    animation: ae-culture-marquee-rtl 58s linear infinite;
                    will-change: transform;
                }
                .ae-culture-marquee-row1-track:hover,
                .ae-culture-marquee-row2-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .ae-culture-marquee-row1-track,
                    .ae-culture-marquee-row2-track {
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
                <header className="mx-auto flex w-full max-w-[375px] flex-col items-start gap-[10px] lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full font-semibold tracking-[-0.01em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.1]
                        "
                    >
                        Experience Life at HACA
                    </h2>
                    <p
                        className="
                            m-0 w-full text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-[#FFFFFFE5]
                            lg:text-[18px]
                        "
                        style={{ fontFamily: "Satoshi, sans-serif" }}
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
                    Scrolling gallery of HACA UAE campus culture and community moments. Top row moves left to right;
                    bottom row moves right to left.
                </p>
                <CultureMarqueeRow
                    tiles={CULTURE_ROW_1}
                    direction="ltr"
                    rowLabel="HACA UAE culture photos, row one"
                />
                <CultureMarqueeRow
                    tiles={CULTURE_ROW_2}
                    direction="rtl"
                    rowLabel="HACA UAE culture photos, row two"
                />
            </div>
        </section>
    );
}
