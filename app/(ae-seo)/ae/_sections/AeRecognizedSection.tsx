import Image from "next/image";

const HEADING_ID = "ae-recognized-heading";

const AWARD_FILES = [
    "award 1.webp",
    "award 2.webp",
    "award 3.webp",
    "award 4.webp",
    "award 5.webp",
    "award 6.webp",
    "award 7.webp",
    "award 8.webp",
] as const;

function awardSrc(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

const PHOTOS = AWARD_FILES.map((file, i) => ({
    id: `recognized-${i + 1}`,
    imageSrc: awardSrc(file),
    alt: `HACA mentor award and industry achievement ${i + 1}`,
}));

export function AeRecognizedSection() {
    return (
        <section
            id="ae-recognized"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-6 py-5
                    lg:gap-[60px] lg:py-[50px]
                "
            >
                {/* Heading + description */}
                <header
                    className="
                        mx-auto flex w-full max-w-[375px] flex-col items-center gap-[10px] px-5
                        lg:max-w-[1100px] lg:px-0
                    "
                >
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full text-center font-semibold tracking-[-0.05em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:max-w-none lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        Recognized for Creating Real Impact
                    </h2>
                    <p
                        className="
                            m-0 w-full max-w-[335px] text-center font-medium text-[#000000B2]
                            text-[16px] leading-[1.2] tracking-normal
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[800px] lg:text-[18px] lg:leading-[1.5]
                        "
                    >
                        Our mentors have been part of award-winning work and industry achievements that
                        showcase their expertise and contribution.
                    </p>
                </header>

                {/* Horizontal scroll photo strip */}
                <div
                    className="
                        relative w-full min-h-[300px] overflow-x-auto overflow-y-hidden
                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                        max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2
                        lg:static lg:left-auto lg:w-full lg:max-w-none lg:translate-x-0
                    "
                >
                    <ul
                        className="m-0 flex w-max list-none flex-row gap-4 p-0 px-5 lg:mx-auto lg:max-w-[2512px] lg:px-0"
                        aria-label="Mentor awards and industry achievements"
                    >
                        {PHOTOS.map((photo) => (
                            <li key={photo.id} className="h-[300px] w-[300px] shrink-0">
                                <figure className="relative m-0 h-full w-full overflow-hidden rounded-lg bg-neutral-200">
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
            </div>
        </section>
    );
}
