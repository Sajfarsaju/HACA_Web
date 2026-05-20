import Image from "next/image";

const HEADING_ID = "marketing-seo-trivandrum-guest-experts-heading";

const CARD_BG = "#E5EDF7";
const GUEST_STROKE = "rgba(0, 102, 255, 0.38)";

function marketingPhotoSrc(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

type GuestExpert = {
    id: string;
    name: string;
    role: string;
    file: string;
    guestWatermark?: boolean;
};

const GUEST_EXPERTS: GuestExpert[] = [
    {
        id: "prasad-karthik",
        name: "Prasad Karthik",
        role: "SEO Strategist",
        file: "Prasad Karthik.png",
    },
    {
        id: "mohammed-alfan",
        name: "Mohammed Alfan",
        role: "Founder - Rows&Columns",
        file: "Mohammed Alfan.png",
    },
    {
        id: "minhaj",
        name: "Minhaj",
        role: "Creative Strategy Mentor",
        file: "Minhaj.png",
        guestWatermark: true,
    },
    {
        id: "mohammed",
        name: "Mohammed",
        role: "Founder of Rows&Columns",
        file: "Mohammed.png",
    },
];

const TAGLINE = "Stories, Secrets & Strategies from Industry Experts.";

export function MarketingSeoGuestExpertsSection() {
    return (
        <section
            id="marketing-seo-trivandrum-guest-experts"
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
                <header className="flex w-full min-w-0 flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 max-w-[min(100%,640px)] text-left font-semibold tracking-[-0.04em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,5vw,3rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:max-w-[min(100%,720px)] lg:text-[55px] lg:leading-[1.08]
                        "
                    >
                        <span className="block">Guest Experts to Guide</span>
                        <span className="block">Your Next Step</span>
                    </h2>
                    <p
                        className="
                            m-0 max-w-[min(100%,420px)] text-left font-normal leading-[1.5] text-[#6B6B6B]
                            text-[clamp(14px,1.8vw,16px)]
                            [font-family:'Satoshi',sans-serif]
                            lg:text-right lg:text-[17px] lg:leading-[1.55]
                        "
                    >
                        {TAGLINE}
                    </p>
                </header>

                <ul
                    className="
                        m-0 grid w-full list-none grid-cols-1 gap-8 p-0
                        sm:grid-cols-2
                        lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10
                    "
                >
                    {GUEST_EXPERTS.map((expert) => (
                        <li key={expert.id} className="min-w-0">
                            <article className="flex flex-col gap-[10px]">
                                <div
                                    className="relative aspect-square w-full overflow-hidden rounded-[16px]"
                                    style={{ backgroundColor: CARD_BG }}
                                >
                                    {expert.guestWatermark ? (
                                        <span
                                            className="
                                                pointer-events-none absolute inset-0 z-0 flex select-none
                                                items-center justify-center text-center
                                                text-[clamp(2.25rem,9vw,3.75rem)] font-black uppercase
                                                leading-none tracking-[-0.02em] text-transparent
                                                [font-family:'Darker_Grotesque',sans-serif]
                                            "
                                            style={{
                                                WebkitTextStroke: `2px ${GUEST_STROKE}`,
                                            }}
                                            aria-hidden
                                        >
                                            GUEST
                                        </span>
                                    ) : null}
                                    <div className="absolute inset-0 z-[1]">
                                        <Image
                                            src={marketingPhotoSrc(expert.file)}
                                            alt={`${expert.name}, ${expert.role}, guest expert at HACA Marketing School`}
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                </div>
                                <div className="flex min-h-0 flex-col gap-1 text-left">
                                    <h3
                                        className="
                                            m-0 font-bold tracking-normal text-black
                                            [font-family:'Satoshi',sans-serif]
                                            text-[clamp(1.125rem,2.2vw,1.25rem)] leading-tight
                                        "
                                    >
                                        {expert.name}
                                    </h3>
                                    <p
                                        className="
                                            m-0 font-medium leading-snug text-[#6B6B6B]
                                            [font-family:'Satoshi',sans-serif]
                                            text-[clamp(13px,1.4vw,15px)]
                                        "
                                    >
                                        {expert.role}
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
