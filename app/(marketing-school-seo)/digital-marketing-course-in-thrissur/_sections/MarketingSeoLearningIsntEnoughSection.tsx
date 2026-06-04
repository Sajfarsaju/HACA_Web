import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-seo-thrissur-learning-isnt-enough-heading";

function marketingAsset(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

/** Desktop Contact Us pill + arrow (matches `MarketingNavbar` desktop link). */
function LearnMoreLink({ href, ariaLabel }: { href: string; ariaLabel: string }) {
    return (
        <Link
            href={href}
            className="group relative flex h-[60px] w-[182px] shrink-0 cursor-pointer items-center no-underline"
            aria-label={ariaLabel}
        >
            <div className="absolute left-0 top-0 flex h-[60px] w-[177px] items-center rounded-[30px] bg-[#E6EFFF] pl-[20px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                <span
                    className="whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Learn More
                </span>
            </div>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" />
        </Link>
    );
}

type FeatureCardProps = {
    logoSrc: string;
    logoLabel: string;
    titlePrefix: string;
    titleLineDesktop: string;
    titleLineMobileBeforeBreak: string;
    titleLineMobileAfterBreak: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
    learnHref: string;
    learnAriaLabel: string;
};

function FeatureCard({
    logoSrc,
    logoLabel,
    titlePrefix,
    titleLineDesktop,
    titleLineMobileBeforeBreak,
    titleLineMobileAfterBreak,
    body,
    imageSrc,
    imageAlt,
    learnHref,
    learnAriaLabel,
}: FeatureCardProps) {
    return (
        <div
            className="
                w-full min-w-0 max-lg:rounded-[16px] max-lg:bg-gradient-to-b max-lg:from-[#666666] max-lg:to-black max-lg:p-px
                lg:h-full lg:bg-transparent lg:p-0
            "
        >
            <article
                className="
                    flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[15px] bg-[#000212]
                    p-[clamp(16px,4.2vw,20px)] md:p-[clamp(18px,3.2vw,28px)]
                    lg:h-full lg:min-h-[600px] lg:rounded-[16px] lg:bg-black lg:p-[clamp(24px,3.5vw,40px)]
                "
            >
                {/* Logo — 81×40 */}
                <div className="relative h-10 w-[81px] shrink-0">
                    <Image src={logoSrc} alt={logoLabel} fill className="object-contain object-left-top" sizes="81px" />
                </div>

                <div className="mt-[clamp(16px,3.5vw,30px)] flex min-h-0 w-full flex-1 flex-col lg:mt-[clamp(20px,3vw,30px)]">
                    <div
                        className="
                            flex w-full max-w-full flex-col gap-[clamp(20px,4vw,30px)]
                            lg:max-w-full lg:min-h-[194px] lg:justify-between lg:gap-0
                        "
                    >
                        <div className="flex flex-col gap-[clamp(10px,2.5vw,14px)] lg:gap-2">
                            <h3
                                className="
                                    m-0 w-full text-white [font-family:'Darker_Grotesque',sans-serif] tracking-[-0.05em]
                                    [text-rendering:geometricPrecision]
                                "
                            >
                                <span className="text-[30px] font-semibold leading-[150%] lg:hidden">{titlePrefix}</span>
                                <span className="lg:hidden">
                                    <span className="text-[26px] font-bold leading-[95%]"> {titleLineMobileBeforeBreak}</span>
                                    <br />
                                    <span className="text-[26px] font-bold leading-[95%]">{titleLineMobileAfterBreak}</span>
                                </span>
                                <span className="hidden lg:flex lg:flex-col lg:gap-0 lg:leading-[1.05]">
                                    <span className="text-[30px] font-semibold leading-[1.05]">{titlePrefix}</span>
                                    {titleLineDesktop ? (
                                        <span className="text-[30px] font-bold leading-[1.05]">{titleLineDesktop}</span>
                                    ) : null}
                                </span>
                            </h3>
                            <p
                                className="
                                    m-0 w-full text-white
                                    text-[16px] font-medium leading-[150%] tracking-[-0.05em]
                                    [font-family:'Satoshi',sans-serif]
                                    lg:font-normal lg:leading-[120%]
                                "
                            >
                                {body}
                            </p>
                        </div>
                        <LearnMoreLink href={learnHref} ariaLabel={learnAriaLabel} />
                    </div>

                    {/* Bottom image */}
                    <div
                        className="
                            relative mx-auto mt-[clamp(20px,4vw,32px)] w-full max-w-[min(100%,clamp(260px,88vw,420px))]
                            shrink-0 overflow-hidden rounded-[8px]
                            h-[clamp(180px,38vw,240px)] sm:h-[clamp(200px,34vw,260px)]
                            md:max-w-[min(100%,clamp(320px,72vw,480px))] md:h-[clamp(220px,30vw,280px)]
                            lg:mt-auto lg:max-w-full lg:h-[clamp(200px,20vw,280px)] lg:min-h-[clamp(200px,20vw,280px)]
                            xl:h-[clamp(220px,18vw,300px)] xl:min-h-[clamp(220px,18vw,300px)]
                        "
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover object-bottom"
                            sizes="(max-width: 1023px) 90vw, (max-width: 1440px) 45vw, 640px"
                        />
                    </div>
                </div>
            </article>
        </div>
    );
}

export function MarketingSeoLearningIsntEnoughSection() {
    return (
        <section
            className="box-border w-full min-w-0 bg-black text-white"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    box-border mx-auto flex w-full min-w-0 max-w-[1440px] flex-col
                    px-[clamp(16px,4.16vw,60px)] pt-[clamp(20px,4.5vw,40px)] pb-[clamp(20px,4.5vw,40px)]
                    md:px-[clamp(24px,5vw,48px)] md:pt-[clamp(24px,4vw,44px)] md:pb-[clamp(24px,4vw,44px)]
                    lg:min-h-[882px] lg:px-[60px] lg:pt-[clamp(44px,5vw,60px)] lg:pb-[clamp(28px,4vw,40px)]
                "
            >
                <div
                    className="
                        mx-auto flex w-full min-w-0 max-w-[1320px] flex-col gap-[clamp(20px,4vw,30px)]
                        lg:min-h-[782px] lg:gap-[clamp(36px,5vw,60px)]
                    "
                >
                    <header className="mx-auto flex w-full max-w-[min(800px,100%)] flex-col gap-[clamp(8px,1.5vw,10px)] lg:min-h-[122px]">
                        <h2
                            id={HEADING_ID}
                            className="
                                m-0 w-full text-center font-semibold tracking-[-0.01em] text-white
                                [font-family:'Darker_Grotesque',sans-serif]
                                text-[36px] leading-[95%] [text-rendering:geometricPrecision]
                                lg:text-[55px] lg:leading-[110%]
                            "
                        >
                            <span className="block">Learning Doesn&apos;t Stop</span>
                            <span className="block">Inside Classrooms</span>
                        </h2>
                    </header>

                    <div
                        className="
                            flex w-full min-w-0 flex-col gap-[clamp(20px,4vw,30px)]
                            lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:items-stretch lg:gap-x-[clamp(20px,2.8vw,40px)] lg:gap-y-0
                        "
                    >
                        <FeatureCard
                            logoSrc={marketingAsset("Group 41768 1.svg")}
                            logoLabel="REWIRED"
                            titlePrefix="REWIRED:"
                            titleLineDesktop="Marketing Insights You Won&apos;t Find Through Search"
                            titleLineMobileBeforeBreak="Marketing Insights You"
                            titleLineMobileAfterBreak="Won&apos;t Find Through Search"
                            body="Access exclusive sessions where professionals share real experiences, frameworks and industry learnings."
                            imageSrc={marketingAsset("Group 1.webp")}
                            imageAlt="REWIRED invite-only series visuals"
                            learnHref="/enquire"
                            learnAriaLabel="Learn more about REWIRED"
                        />
                        <FeatureCard
                            logoSrc={marketingAsset("image 103.svg")}
                            logoLabel="Creator's Club"
                            titlePrefix="Creator's Club"
                            titleLineDesktop=""
                            titleLineMobileBeforeBreak=""
                            titleLineMobileAfterBreak=""
                            body="Join a collaborative community of creators, marketers and learners."
                            imageSrc={marketingAsset("Group 2.webp")}
                            imageAlt="Creator's Club community at HACA"
                            learnHref="/enquire"
                            learnAriaLabel="Learn more about Creator's Club"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
