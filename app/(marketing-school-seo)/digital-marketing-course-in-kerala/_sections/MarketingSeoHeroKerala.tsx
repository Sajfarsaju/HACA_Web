"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const WORLD_EDUCATION_LOGO = "/photos/schools/marketing/world%20summit%202.svg";
const HERO_PHOTO = "/photos/schools/marketing/rizwan%20marketing%202.webp";
const PATTERN_LIGHT = "/photos/schools/marketing/Pattern 5.svg";
const PATTERN_DARK = "/photos/schools/marketing/Pattern 6.svg";
const SCROLL_ARROW = "/photos/schools/marketing/solar_arrow-up-broken.svg";

function HeroPillCta({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="group relative inline-flex h-[44px] w-fit items-center no-underline md:h-[60px]"
            aria-label={label}
        >
            <span className="flex h-full items-center rounded-[22px] bg-[#E6EFFF] pl-[14px] pr-[54px] text-black md:rounded-[30px] md:pl-[20px] md:pr-[72px]">
                <span
                    className="whitespace-nowrap text-[16px] leading-[100%] md:text-[18px]"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                >
                    {label}
                </span>
            </span>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" />
        </Link>
    );
}

export function MarketingSeoHeroKerala() {
    const [isDark, setIsDark] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const prevProgress = useRef(0);

    useEffect(() => {
        const handler = (e: Event) => {
            const { isDark: d } = (e as CustomEvent<{ isDark: boolean }>).detail;
            setIsDark(d);
        };
        window.addEventListener("marketing-page-color", handler);
        return () => window.removeEventListener("marketing-page-color", handler);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const prev = prevProgress.current;
        prevProgress.current = v;

        if (prev < 0.08 && v >= 0.08) {
            window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark: false } }));
        }
        if (prev > 0.92 && v <= 0.92) {
            window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark: false } }));
        }
    });

    return (
        <section
            ref={ref}
            className="box-border mx-auto flex min-h-0 w-full max-w-[1440px] flex-col overflow-hidden px-[clamp(16px,4.16vw,60px)] pb-0 pt-5 md:px-[clamp(24px,5vw,48px)] md:pt-0 lg:h-[765px] lg:min-h-[765px] lg:max-h-[765px] lg:px-[60px] lg:pb-0 lg:pt-[80px]"
            aria-label="Digital marketing course in Kerala hero"
        >
            <div className="relative mx-auto flex min-h-0 min-w-0 w-full max-w-[1440px] flex-1 flex-col gap-[10px] md:gap-[clamp(16px,3vw,28px)] lg:flex-row lg:items-stretch lg:gap-[clamp(8px,1.2vw,20px)] xl:gap-6">
                <div className="relative z-[1] mx-0 flex min-h-0 w-full max-w-none flex-col justify-between pt-[clamp(18px,3vw,48px)] md:mx-auto md:max-w-[min(560px,92vw)] lg:mx-0 lg:w-[min(560px,40%)] lg:max-w-none lg:min-w-0 lg:shrink-[1] lg:pb-[clamp(32px,4vw,56px)] lg:pt-0 xl:w-[560px]">
                    <div className="flex min-h-0 w-full flex-col gap-4 md:gap-6 lg:gap-6 xl:gap-6">
                        <p
                            className="m-0 text-[14px] leading-[28px] tracking-[0] lg:text-[24px] lg:leading-[28px]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, color: "rgba(0,0,0,0.7)" }}
                        >
                            How Bright Can Your Future Get?
                        </p>

                        <h1
                            className="m-0 max-w-full font-semibold text-[clamp(34px,9.6vw,44px)] leading-[95%] tracking-[-1px] [text-rendering:geometricPrecision] md:text-[clamp(44px,5.6vw,58px)] md:tracking-[-1.2px] lg:text-[clamp(32px,2.55vw,46px)] lg:leading-[1.04] lg:tracking-[-1.2px] xl:text-[clamp(56px,3.6vw,72px)] xl:leading-[1.02] xl:tracking-[-1.92px]"
                            style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                        >
                            <span className="inline lg:block lg:whitespace-nowrap">HACA&apos;s Advanced Digital</span>{" "}
                            <span className="inline lg:block lg:whitespace-nowrap">Marketing Course in Kerala</span>{" "}
                            <span className="inline lg:block lg:whitespace-nowrap">Shows You the Way</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            <HeroPillCta href="/contact" label="Join Now" />
                            <HeroPillCta href="tel:+9108031332470" label="Have Questions? Call Now" />
                        </div>

                        <p
                            className="m-0 w-full max-w-[343px] min-h-[105px] text-[14px] leading-[21px] tracking-[0] text-[rgba(0,0,0,0.75)] lg:mt-[clamp(80px,8vw,120px)] lg:max-w-[605px] lg:min-h-[112px] lg:text-[18px] lg:leading-[28px]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                        >
                            At HACA, we believe learning should be practical, industry-focused, and built for the future. Our
                            AI-integrated Digital Marketing Course in Kerala goes beyond theory, covering AEO, GEO, AI automation,
                            Google Ads, SEO, Meta Ads Manager, and web development fundamentals. Through hands-on projects, you
                            don&apos;t just study, you apply, create, and scale real AI-driven campaigns.
                        </p>
                    </div>
                </div>

                <div className="relative z-[1] mx-auto flex w-full min-w-0 shrink flex-col justify-start gap-4 md:gap-5 lg:mx-0 lg:h-full lg:min-h-0 lg:max-w-[min(680px,100%)] lg:flex-1 lg:flex-col lg:justify-end lg:gap-0 lg:self-stretch lg:-translate-x-[clamp(16px,2.2vw,44px)] xl:-translate-x-[clamp(20px,2.5vw,52px)]">
                    {/* Decorative grid patterns — positioned relative to photo column */}
                    <div
                        className="pointer-events-none absolute -left-[25%] top-[8%] z-0 hidden opacity-100 lg:block"
                        style={{ width: "299.0725402832031px", height: "293px" }}
                    >
                        <Image src={isDark ? PATTERN_DARK : PATTERN_LIGHT} alt="" fill className="object-contain" />
                    </div>
                    <div
                        className="pointer-events-none absolute bottom-[40%] right-[5%] z-0 hidden opacity-100 lg:block"
                        style={{ width: "299.0725402832031px", height: "293px" }}
                    >
                        <Image src={isDark ? PATTERN_DARK : PATTERN_LIGHT} alt="" fill className="object-contain" />
                    </div>

                    <div className="pointer-events-none relative h-[48px] w-full max-w-[min(280px,92vw)] shrink-0 self-end md:h-[52px] md:max-w-[min(300px,88vw)] lg:absolute lg:z-[2] lg:h-[clamp(44px,6.5vw,74px)] lg:w-[clamp(180px,26vw,300px)] lg:max-w-none lg:max-xl:right-[clamp(44px,6vw,92px)] lg:max-xl:top-[clamp(10px,1.8vw,22px)] xl:right-[clamp(22px,2.8vw,48px)] xl:top-[clamp(14px,2vw,28px)] 2xl:right-6">
                        <Image
                            src={WORLD_EDUCATION_LOGO}
                            alt="Awarded Best Institute for Upskilling — World Education Summit 2024"
                            fill
                            className="object-contain object-right"
                            sizes="(max-width: 1023px) 260px, 300px"
                            priority={false}
                        />
                    </div>

                    <div className="relative z-[1] box-border aspect-[613/638] w-full max-h-[390px] overflow-hidden pr-0 md:max-h-[min(520px,52vw)] md:rounded-t-[16px] lg:max-h-[min(560px,60vh)] lg:w-full lg:max-w-none lg:shrink-0 lg:rounded-t-[18px] lg:rounded-b-none lg:pr-[clamp(56px,9vw,112px)] lg:max-xl:pr-[clamp(72px,12vw,132px)] xl:max-h-[580px] xl:rounded-t-[20px] xl:rounded-b-none xl:pr-[clamp(48px,7vw,96px)]">
                        <Image
                            src={HERO_PHOTO}
                            alt="Digital marketing course in Kerala"
                            fill
                            className="object-contain object-top max-lg:object-bottom lg:object-contain lg:object-[46%_54%]"
                            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 45vw, 680px"
                            priority
                        />

                        <div
                            className="pointer-events-none absolute bottom-[15px] right-0 z-10 hidden items-center gap-[5px] whitespace-nowrap opacity-100 lg:flex"
                            aria-hidden
                        >
                            <span
                                className="flex items-center text-[12px] leading-[28px]"
                                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                            >
                                Scroll Down to Discover
                            </span>
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                                <Image
                                    src={SCROLL_ARROW}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className={`h-full w-full object-contain transition-[filter] duration-300 ease-out ${isDark ? "invert" : ""}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}