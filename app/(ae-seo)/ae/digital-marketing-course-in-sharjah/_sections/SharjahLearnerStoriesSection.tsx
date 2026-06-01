import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "sharjah-learner-stories-heading";
const VIEW_MORE_HREF = "/marketing-school/success-story";

const THUMB_1 = "/photos/schools/marketing/3e0b6431c0a1ce2edb5d9f2b9cf1935a0298f97d.webp";
const THUMB_2 = "/photos/schools/marketing/700659e2027945d5a13c08eb0820dca74b2bce51.webp";
const THUMB_3 = "/photos/schools/marketing/e8f4127c19d1ab67ffbd3ef91b18894f38b5261a.webp";

type LearnerVideo = {
    id: string;
    name: string;
    role: string;
    thumbSrc: string;
    thumbFit: "cover" | "contain";
};

const VIDEOS: LearnerVideo[] = [
    { id: "faseela-usman", name: "Faseela Usman", role: "Creative Co-ordinator", thumbSrc: THUMB_1, thumbFit: "cover" },
    { id: "shamil",        name: "Shamil",        role: "Digital Marketer",       thumbSrc: THUMB_2, thumbFit: "contain" },
    { id: "favas-1",       name: "Favas",         role: "Performance Marketer",   thumbSrc: THUMB_3, thumbFit: "cover" },
    { id: "favas-2",       name: "Favas",         role: "Performance Marketer",   thumbSrc: THUMB_3, thumbFit: "cover" },
];

function ViewMoreLink() {
    return (
        <Link
            href={VIEW_MORE_HREF}
            className="
                group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-white max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="View more learner stories"
        >
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] text-black lg:hidden">
                View More
            </span>
            <span
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden"
                aria-hidden
            >
                <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block text-white">
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
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

export function SharjahLearnerStoriesSection() {
    return (
        <section
            id="sharjah-learner-stories"
            className="w-full bg-black text-white"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-[40px] px-5 py-[40px]
                    lg:gap-[30px] lg:px-[60px] lg:pb-10 lg:pt-[60px]
                "
            >
                {/* Heading */}
                <header className="flex w-full flex-col items-center gap-4 text-center">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 max-w-[min(100%,720px)] font-semibold tracking-[-0.03em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,5.2vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.08]
                        "
                    >
                        Stories Shared By Learners Across UAE
                    </h2>
                </header>

                {/* Video cards — horizontal scroll */}
                <div className="min-w-0 w-full">
                    <ul
                        className="
                            m-0 flex list-none flex-row items-stretch gap-6 overflow-x-auto overflow-y-hidden p-0
                            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                            lg:gap-[30px]
                        "
                        aria-label="Learner video stories"
                    >
                        {VIDEOS.map((v) => (
                            <li key={v.id} className="min-w-0 shrink-0">
                                <article className="flex w-[min(300px,78vw)] flex-col gap-3 sm:w-[min(340px,72vw)] lg:w-[min(400px,28vw)] lg:max-w-[420px]">
                                    <Link
                                        href={VIEW_MORE_HREF}
                                        className="block text-inherit no-underline outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#0066FF]"
                                        aria-label={`${v.name}, ${v.role} — learner story`}
                                    >
                                        <figure className="m-0">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
                                                <Image
                                                    src={v.thumbSrc}
                                                    alt={`${v.name}, ${v.role}, HACA UAE learner story`}
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
                                                <span className="font-['Satoshi',sans-serif] text-[clamp(16px,1.8vw,18px)] font-bold leading-tight text-white">
                                                    {v.name}
                                                </span>
                                                <span className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,15px)] font-medium leading-snug text-[#FFFFFFB2]">
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

                {/* View More CTA */}
                <div className="flex w-full shrink-0 items-center justify-center">
                    <ViewMoreLink />
                </div>
            </div>
        </section>
    );
}
