import Image from "next/image";

const HEADING_ID = "marketing-seo-kannur-mentors-brought-home-heading";

const INTRO =
    "Our mentors have achieved significant wins, not just for campaigns, but for changing how brands grow online. Learn from the same people who made it happen.";

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

type MentorWinPhoto = {
    id: string;
    imageSrc: string;
    alt: string;
};

const MENTOR_WIN_PHOTOS: MentorWinPhoto[] = AWARD_FILES.map((file, i) => ({
    id: `mentor-award-${i + 1}`,
    imageSrc: awardSrc(file),
    alt: `HACA mentor award and campaign win ${i + 1}`,
}));

function MentorWinPhotoCard({ photo, index }: { photo: MentorWinPhoto; index: number }) {
    const gradient = PHOTO_GRADIENTS[index % PHOTO_GRADIENTS.length];

    return (
        <li className="h-[300px] w-[300px] shrink-0">
            <figure
                className="relative m-0 h-full w-full overflow-hidden rounded-lg"
                style={{ background: gradient }}
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
    );
}

export function MarketingSeoMentorsBroughtHomeSection() {
    return (
        <section
            id="marketing-seo-kannur-mentors-brought-home"
            className="w-full bg-white text-black opacity-100"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-6 py-5
                    min-h-[518px]
                    lg:min-h-[575px] lg:gap-[60px] lg:py-[50px]
                "
            >
                <header
                    className="
                        mx-auto flex w-full max-w-[375px] flex-col items-center gap-[10px] px-5
                        lg:max-w-[800px] lg:px-0
                    "
                >
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full max-w-[335px] text-center font-semibold tracking-[-0.05em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:max-w-[690px] lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        <span className="lg:hidden">
                            Our Mentors Brought
                            <br />
                            These Home
                        </span>
                        <span className="hidden lg:inline">Our Mentors Brought These Home</span>
                    </h2>
                    <p
                        className="
                            m-0 w-full max-w-[335px] text-center font-medium text-[#000000B2]
                            text-[16px] leading-[1.2] tracking-normal
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[800px] lg:text-[18px]
                        "
                    >
                        {INTRO}
                    </p>
                </header>

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
                        aria-label="Mentor campaign wins and highlights"
                    >
                        {MENTOR_WIN_PHOTOS.map((photo, index) => (
                            <MentorWinPhotoCard key={photo.id} photo={photo} index={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
