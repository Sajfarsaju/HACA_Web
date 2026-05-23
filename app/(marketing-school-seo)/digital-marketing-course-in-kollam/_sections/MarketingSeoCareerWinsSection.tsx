import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-seo-kollam-career-wins-heading";

const VIEW_MORE_HREF = "/marketing-school/success-story";

const THUMB_1 = "/photos/schools/marketing/3e0b6431c0a1ce2edb5d9f2b9cf1935a0298f97d.webp";
const THUMB_2 = "/photos/schools/marketing/700659e2027945d5a13c08eb0820dca74b2bce51.webp";
const THUMB_3 = "/photos/schools/marketing/e8f4127c19d1ab67ffbd3ef91b18894f38b5261a.webp";

type CareerWinVideo = {
    id: string;
    name: string;
    role: string;
    thumbSrc: string;
    thumbFit: "cover" | "contain";
    href: string;
};

const VIDEOS: CareerWinVideo[] = [
    {
        id: "faseela-usman",
        name: "Faseela Usman",
        role: "Creative Co-ordinator",
        thumbSrc: THUMB_1,
        thumbFit: "cover",
        href: VIEW_MORE_HREF,
    },
    {
        id: "shamil",
        name: "Shamil",
        role: "Digital Marketer",
        thumbSrc: THUMB_2,
        thumbFit: "contain",
        href: VIEW_MORE_HREF,
    },
    {
        id: "favas",
        name: "Favas",
        role: "Performance Marketer",
        thumbSrc: THUMB_3,
        thumbFit: "cover",
        href: VIEW_MORE_HREF,
    },
];

const INTRO_LINE_A =
    "Behind every placement and achievement is a learner who started with curiosity and took the first step";
const INTRO_LINE_B =
    "toward building new skills.";
const INTRO_FULL = `${INTRO_LINE_A} ${INTRO_LINE_B}`;

function MobileViewMoreArrow() {
    return (
        <span
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden"
            aria-hidden
        >
            <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block shrink-0 text-white">
                <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth={2.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}

function CareerWinsViewMoreLink() {
    return (
        <Link
            href={VIEW_MORE_HREF}
            className="
                group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="View more alumni career wins and success stories"
        >
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal text-black lg:hidden">
                View More
            </span>
            <MobileViewMoreArrow />

            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span
                    className="flex h-full items-center whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    View More
                </span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    );
}

export function MarketingSeoCareerWinsSection() {
    return (
        <section
            id="marketing-seo-kollam-career-wins"
            className="w-full bg-white text-black opacity-100"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] min-h-[649.88px] flex-col
                    gap-[100px] p-5
                    lg:min-h-[699px] lg:gap-[30px] lg:px-[60px] lg:pb-10 lg:pt-[60px]
                "
            >
                <header className="flex w-full flex-col items-center gap-4 text-center lg:gap-5">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 max-w-[min(100%,720px)] font-semibold tracking-[-0.03em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,5.2vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.08]
                        "
                    >
                        <span className="block">Growth Stories</span>
                        <span className="block">Worth Watching</span>
                    </h2>
                    <p
                        className="
                            m-0 max-w-[min(100%,640px)] min-w-0 font-normal leading-[1.55] text-[#4A4A4A]
                            text-[clamp(15px,2vw,17px)]
                            [font-family:'Satoshi',sans-serif]
                            lg:mx-auto lg:min-h-[44px] lg:w-full lg:max-w-[912px] lg:font-medium lg:text-[17px] lg:leading-[1.2] lg:tracking-[-0.02em] lg:text-center xl:text-[18px]
                        "
                    >
                        <span className="lg:hidden">{INTRO_FULL}</span>
                        <span className="hidden lg:block">{INTRO_LINE_A}</span>
                        <span className="hidden lg:block">{INTRO_LINE_B}</span>
                    </p>
                </header>

                <div className="min-w-0 w-full lg:flex-1 lg:min-h-0">
                    <ul
                        className="
                            m-0 flex list-none flex-row items-stretch gap-6 overflow-x-auto overflow-y-hidden p-0
                            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                            lg:gap-[30px]
                        "
                        aria-label="Alumni career win stories"
                    >
                        {VIDEOS.map((v) => (
                            <li key={v.id} className="min-w-0 shrink-0">
                                <article className="flex w-[min(300px,78vw)] flex-col gap-3 sm:w-[min(340px,72vw)] lg:w-[min(400px,28vw)] lg:max-w-[420px]">
                                    <Link
                                        href={v.href}
                                        className="block text-inherit no-underline outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#0066FF]"
                                        aria-label={`${v.name}, ${v.role} — alumni career story`}
                                    >
                                        <figure className="m-0">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
                                                <Image
                                                    src={v.thumbSrc}
                                                    alt={`${v.name}, ${v.role}, HACA Marketing School alumni story`}
                                                    fill
                                                    className={
                                                        v.thumbFit === "contain"
                                                            ? "object-contain object-center"
                                                            : "object-cover object-center"
                                                    }
                                                    sizes="(max-width: 1024px) 78vw, 400px"
                                                />
                                            </div>
                                            <figcaption className="mt-3 flex flex-col gap-1 text-left">
                                                <span className="font-['Satoshi',sans-serif] text-[clamp(16px,1.8vw,18px)] font-bold leading-tight text-black">
                                                    {v.name}
                                                </span>
                                                <span className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,15px)] font-medium leading-snug text-[#6B6B6B]">
                                                    {v.role}
                                                </span>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full shrink-0 items-center justify-center">
                    <CareerWinsViewMoreLink />
                </div>
            </div>
        </section>
    );
}
