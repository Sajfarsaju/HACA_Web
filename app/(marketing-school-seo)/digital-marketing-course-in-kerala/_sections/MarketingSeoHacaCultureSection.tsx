import Image from "next/image";

const HEADING_ID = "marketing-kerala-haca-culture-heading";

const INTRO =
    "Here, learning meets creativity where you'll be a part of a community that nurtures ideas, celebrates successes, and challenges you to grow beyond limits.";

const CULTURE_BASE = "/photos/schools/marketing/culture";

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
    { id: "c-r1-1", width: 300, alt: "HACA community moment", imageSrc: `${CULTURE_BASE}/rectangle-34.png` },
    { id: "c-r1-2", width: 300, alt: "HACA students celebrating", imageSrc: `${CULTURE_BASE}/rectangle-36.png` },
    { id: "c-r1-3", width: 240, alt: "HACA classroom culture", imageSrc: `${CULTURE_BASE}/rectangle-39.png` },
    { id: "c-r1-4", width: 315, alt: "HACA graduation moment", imageSrc: `${CULTURE_BASE}/rectangle-41.png` },
    { id: "c-r1-5", width: 271, alt: "HACA creative session", imageSrc: `${CULTURE_BASE}/rectangle-35.png` },
    { id: "c-r1-6", width: 381, alt: "HACA group learning", imageSrc: `${CULTURE_BASE}/rectangle-40.png` },
];

const CULTURE_ROW_2: CultureTile[] = [
    { id: "c-r2-1", width: 365, alt: "HACA student community", imageSrc: `${CULTURE_BASE}/rectangle-38.png` },
    { id: "c-r2-2", width: 240, alt: "HACA workshop moment", imageSrc: `${CULTURE_BASE}/rectangle-37.png` },
    { id: "c-r2-3", width: 300, alt: "HACA campus life", imageSrc: `${CULTURE_BASE}/rectangle-42.png` },
    { id: "c-r2-4", width: 240, alt: "HACA team collaboration", imageSrc: `${CULTURE_BASE}/rectangle-34.png` },
    { id: "c-r2-5", width: 430, alt: "HACA community gathering", imageSrc: `${CULTURE_BASE}/rectangle-36.png` },
    { id: "c-r2-6", width: 300, alt: "HACA learning environment", imageSrc: `${CULTURE_BASE}/rectangle-39.png` },
];

function CulturePhotoTile({ tile, gradientIndex }: { tile: CultureTile; gradientIndex: number }) {
    const gradient = PHOTO_GRADIENTS[gradientIndex % PHOTO_GRADIENTS.length];

    return (
        <li
            className="relative h-[300px] shrink-0 overflow-hidden rounded-[12px]"
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
                    className="absolute inset-0 rounded-[12px]"
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
        direction === "ltr" ? "kerala-culture-marquee-row1-track" : "kerala-culture-marquee-row2-track";

    return (
        <div className="w-full min-w-0 overflow-hidden" aria-label={rowLabel}>
            <ul className={`m-0 flex w-max list-none flex-row gap-[15px] p-0 ${trackClass}`}>
                {loop.map((tile, i) => (
                    <CulturePhotoTile key={`${tile.id}-${i}`} tile={tile} gradientIndex={i % tiles.length} />
                ))}
            </ul>
        </div>
    );
}

/**
 * Kerala SEO — Why HACA Feels Different: dual infinite photo marquees on black.
 */
export function MarketingSeoHacaCultureSection() {
    return (
        <section
            id="marketing-kerala-haca-culture"
            className="flex w-full flex-col gap-10 bg-black text-white opacity-100 lg:gap-[60px]"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <style>{`
                @keyframes kerala-culture-marquee-ltr {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes kerala-culture-marquee-rtl {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .kerala-culture-marquee-row1-track {
                    animation: kerala-culture-marquee-ltr 55s linear infinite;
                    will-change: transform;
                }
                .kerala-culture-marquee-row2-track {
                    animation: kerala-culture-marquee-rtl 58s linear infinite;
                    will-change: transform;
                }
                .kerala-culture-marquee-row1-track:hover,
                .kerala-culture-marquee-row2-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .kerala-culture-marquee-row1-track,
                    .kerala-culture-marquee-row2-track {
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
                <header className="mx-auto flex w-full max-w-[335px] flex-col items-start gap-[10px] text-left lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full font-semibold tracking-[-0.05em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        <span className="lg:hidden">
                            Why HACA
                            <br />
                            Feels Different
                        </span>
                        <span className="hidden lg:inline lg:whitespace-nowrap">Why HACA Feels Different</span>
                    </h2>
                    <p
                        className="
                            m-0 w-full max-w-[335px] font-normal leading-[1.5] tracking-[-0.05em] text-[#FFFFFFE5]
                            [font-family:'Satoshi',sans-serif] text-[16px]
                            lg:max-w-[720px] lg:text-[18px] lg:leading-[1.5] lg:tracking-normal
                        "
                    >
                        {INTRO}
                    </p>
                </header>
            </div>

            <div
                className="
                    relative flex w-screen max-w-[100vw] flex-col gap-[15px]
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
