import Image from "next/image";

const HEADING_ID = "marketing-kerala-mentors-heading";

const CARD_BG = "#E8F0FE";

type Mentor = {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
};

const MENTORS: Mentor[] = [
    {
        id: "hima",
        name: "Hima",
        role: "Google Ads Mentor",
        imageSrc: "/photos/schools/marketing/mentors/hima.svg",
    },
    {
        id: "arshad",
        name: "Arshad",
        role: "Business Development Mentor",
        imageSrc: "/photos/schools/marketing/mentors/arshad.svg",
    },
    {
        id: "jawadha",
        name: "Jawadha",
        role: "Social Media Marketing Mentor",
        imageSrc: "/photos/schools/marketing/mentors/jawadha.svg",
    },
    {
        id: "minhaj",
        name: "Minhaj",
        role: "Creative Strategy Mentor",
        imageSrc: "/photos/schools/marketing/mentors/minhaj.svg",
    },
];

const INTRO_COPY =
    "Our mentors aren't \"just trainers.\" They've built campaigns and brands for companies like Volkswagen, Walkaroo, TCS, Care n Cure, and Kairali TMT. You'll be learning from the very people shaping the industry.";

export function MarketingSeoMentorsSection() {
    return (
        <section
            id="marketing-kerala-mentors"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(28px,4vw,48px)]
                    px-[clamp(16px,4.16vw,60px)] py-[clamp(32px,4vw,48px)]
                    md:px-[clamp(24px,5vw,48px)]
                    lg:gap-12 lg:px-[60px] lg:py-[60px]
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 max-w-[min(100%,520px)] text-left font-semibold tracking-[-0.04em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,5vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:max-w-[min(100%,560px)] lg:text-[55px] lg:leading-[1.08]
                        "
                    >
                        <span className="block">Learn from the Expert</span>
                        <span className="block">Mentors</span>
                    </h2>
                    <p
                        className="
                            m-0 max-w-[min(100%,560px)] text-left font-normal leading-[1.55] text-[#4A4A4A]
                            text-[clamp(15px,2vw,17px)]
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[min(100%,520px)] lg:pt-1 lg:text-left lg:text-[18px] lg:leading-[1.6]
                        "
                    >
                        {INTRO_COPY}
                    </p>
                </header>

                <ul
                    className="
                        m-0 grid w-full list-none grid-cols-1 gap-8 p-0
                        sm:grid-cols-2
                        lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10
                    "
                >
                    {MENTORS.map((mentor) => (
                        <li key={mentor.id} className="min-w-0">
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                    ))}
                </ul>
            </div>
        </section>
    );
}
