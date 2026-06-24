import Image from "next/image";
import Link from "next/link";

import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HERO_PATTERN =
    "/photos/Tech/seo/f889a6b526d3394b21534d414b853cab3287cf14.webp";

function HeroCtaButton({
    href,
    label,
    variant,
}: {
    href: string;
    label: string;
    variant: "primary" | "ghost";
}) {
    return (
        <Link
            href={href}
            className={[
                "inline-flex shrink-0 items-center justify-center font-manrope text-[16px] font-semibold leading-[110%] no-underline transition-opacity hover:opacity-80 lg:text-[18px]",
                variant === "primary"
                    ? "h-[46px] rounded-[10px] bg-[#6949FF] px-[18px] py-[14px] text-white lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4"
                    : "h-[46px] rounded-[10px] bg-white px-[18px] py-[14px] text-black lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4",
            ].join(" ")}
        >
            {label}
        </Link>
    );
}

export function TechSeoCodingKeralaHeroSection() {
    return (
        <section
            className="relative mx-auto box-border w-full max-w-[1441px] overflow-x-clip bg-transparent z-10"
            aria-labelledby="coding-kerala-hero-heading"
        >
            <div className="relative flex flex-col px-5 pb-10 pt-6 lg:min-h-[700px] lg:px-[60px] lg:pb-[60px] lg:pt-10">

                {/* Desktop: hero image — absolute top-right */}
                <div
                    className="pointer-events-none absolute right-[60px] top-10 z-0 hidden lg:block"
                    aria-hidden="true"
                >
                    <Image
                        src={HERO_PATTERN}
                        alt=""
                        width={484}
                        height={436}
                        className="h-[436px] w-[484px] object-contain"
                        priority
                    />
                </div>

                {/* Mobile: hero image — top, centered */}
                <div className="mb-6 flex w-full justify-center lg:hidden" aria-hidden="true">
                    <Image
                        src={HERO_PATTERN}
                        alt=""
                        width={250}
                        height={250}
                        className="h-[250px] w-[250px] object-contain"
                        priority
                    />
                </div>

                {/* Text content — pushed to bottom on desktop via mt-auto */}
                <div className="relative z-10 flex flex-col gap-5 lg:mt-auto lg:gap-6">

                    {/* Offline / Online pill */}
                    <div
                        className="inline-flex h-[35px] w-[115px] items-center justify-center gap-[10px] rounded-[20px] px-[10px]"
                        style={{ backgroundColor: "#11062D" }}
                    >
                        <span className="font-manrope text-[14px] font-medium leading-[110%] text-white">
                            Offline/ Online
                        </span>
                    </div>

                    {/* Paragraph — subtitle / tagline */}
                    <p className="m-0 font-manrope text-[16px] font-medium leading-[110%] text-[#C6C6C6B2] lg:max-w-[653px] lg:text-[26px] lg:leading-[120%]">
                        Searching for the Best AI-Integrated Coding Courses in Kerala?
                    </p>

                    {/* H1 heading */}
                    <h1
                        id="coding-kerala-hero-heading"
                        className="m-0 font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[878px] lg:text-[50px]"
                    >
                        Build Future Ready Tech Skills With{" "}
                        <br className="hidden lg:block" />
                        Kerala&apos;s Practical AI Tech School by HACA
                    </h1>

                    {/* CTA buttons */}
                    <div className="flex items-center gap-[20px] lg:gap-[40px]">
                        <HeroCtaButton href="/enquire" label="Join Now" variant="primary" />
                        <HeroCtaButton
                            href="/enquire"
                            label="Get a free consultation"
                            variant="ghost"
                        />
                    </div>
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
