"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";
import { useScroll, useMotionValueEvent } from "framer-motion";

const WORLD_EDUCATION_LOGO = "/photos/schools/marketing/world%20summit%202.svg";
/** Summit mark tuned for dark page background (see `marketing-page-color` → `isDark`). */
const WORLD_EDUCATION_LOGO_DARK_BG = "/photos/schools/marketing/Frame%201984078223.svg";
const HERO_PHOTO = "/photos/schools/marketing/rizwan%20marketing.webp";
const PATTERN_LIGHT = "/photos/schools/marketing/Pattern 5.svg";
const PATTERN_DARK = "/photos/schools/marketing/Pattern 6.svg";

export function MarketingHeroSection() {
    const [isDark, setIsDark] = useState(false);
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    const prevProgress = useRef(0)

    useEffect(() => {
        const handler = (e: Event) => {
            const { isDark: d } = (e as CustomEvent<{ isDark: boolean }>).detail
            setIsDark(d)
        }
        window.addEventListener("marketing-page-color", handler)
        return () => window.removeEventListener("marketing-page-color", handler)
    }, [])

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const prev = prevProgress.current
        prevProgress.current = v

        // entering hero from below (scroll down)
        if (prev < 0.08 && v >= 0.08) {
            window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark: false } }))
        }
        // re-entering hero from above (scroll up)
        if (prev > 0.92 && v <= 0.92) {
            window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark: false } }))
        }
    })

    return (
        <section
            ref={ref}
            className="w-full pt-5 pb-0 px-[clamp(16px,4.16vw,60px)] md:pt-0 md:px-[clamp(24px,5vw,48px)] lg:pt-0 lg:px-[clamp(16px,3.5vw,48px)] xl:pt-0 xl:px-[60px] overflow-x-hidden"
            aria-label="Marketing School hero"
        >
            <div className="w-full max-w-[1440px] mx-auto min-w-0 flex flex-col lg:flex-row lg:items-start gap-[10px] md:gap-[clamp(16px,3vw,28px)] lg:gap-[clamp(8px,1.2vw,20px)] xl:gap-6 relative">
                {/* Decorative Grid Patterns (Desktop Only) */}
                <div
                    className="hidden lg:block absolute left-[31%] top-[10%] z-0 opacity-100 pointer-events-none"
                    style={{ width: "299.0725402832031px", height: "293px" }}
                >
                    <Image src={isDark ? PATTERN_DARK : PATTERN_LIGHT} alt="" fill className="object-contain" />
                </div>
                <div
                    className="hidden lg:block absolute right-[15%] bottom-[28%] z-0 opacity-100 pointer-events-none"
                    style={{ width: "299.0725402832031px", height: "293px" }}
                >
                    <Image src={isDark ? PATTERN_DARK : PATTERN_LIGHT} alt="" fill className="object-contain" />
                </div>

                {/* Left column: copy + enquire + summit logo */}
                <div className="w-full max-w-none md:max-w-[min(520px,90vw)] lg:max-w-none lg:w-[min(469px,34%)] xl:w-[469px] lg:min-w-0 lg:shrink-[1] mx-0 md:mx-auto lg:mx-0 flex flex-col justify-between pt-[clamp(24px,4vw,60px)] lg:pt-[clamp(32px,5vw,70px)] xl:pt-[45px] min-h-0 md:min-h-[clamp(360px,48vw,520px)] lg:min-h-0 xl:min-h-[550px]">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-8 xl:gap-10 w-full min-h-0">
                        <h1
                            className="m-0 font-semibold text-[clamp(28px,8.5vw,38px)] md:text-[clamp(38px,5.2vw,52px)] leading-[95%] tracking-[-1px] md:tracking-[-1.2px] lg:text-[clamp(36px,3.8vw,56px)] lg:leading-[1.05] lg:tracking-[-1.4px] xl:text-[68px] xl:leading-[72px] xl:tracking-[-1.92px] max-w-full md:max-w-[min(469px,90vw)] lg:max-w-full [text-rendering:geometricPrecision]"
                            style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                        >
                            <span className="block align-middle whitespace-nowrap">Learn the skill.</span>
                            <span className="block align-middle whitespace-nowrap">Build the demand.</span>
                            <span className="block align-middle whitespace-nowrap">Join Marketing School.</span>
                        </h1>

                        <Link
                            href="/contact"
                            className="relative flex cursor-pointer items-center shrink-0 group no-underline transition-all duration-300 w-[158.26px] h-[44px] md:w-[194px] md:h-[60px]"
                            aria-label="Enquire now"
                        >
                            <div className="absolute left-0 top-0 bg-[#E6EFFF] flex items-center transition-colors duration-300 group-hover:bg-[#d6e4ff] w-[154.6px] h-[44px] rounded-[22px] pl-[12px] md:w-[189px] md:h-[60px] md:rounded-[30px] md:pl-[20px]">
                                <span
                                    className="text-black whitespace-nowrap text-[16px] md:text-[18px]"
                                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                                >
                                    Enquire Now
                                </span>
                            </div>
                            <MarketingCtaArrowCircle className="absolute right-0 top-0" />
                        </Link>

                        <p className="lg:hidden m-0 font-rethink font-medium text-[clamp(12px,3.8vw,18px)] md:text-[clamp(15px,2.2vw,18px)] leading-[1.45] max-w-full md:max-w-[min(520px,90vw)]">
                            <span className="block whitespace-nowrap">Learn in a space where ideas flow,</span>
                            <span className="block whitespace-nowrap">projects matter, and your growth is the priority.</span>
                        </p>
                    </div>

                    {/* Summit logo row */}
                    <div className="flex items-center gap-[clamp(5.7px,0.6vw,8.72px)] w-[clamp(223px,28vw,341px)] md:w-[clamp(280px,38vw,341px)] lg:w-[min(341px,100%)] h-[clamp(58.166px,7vw,88.945px)] relative shrink-0 self-center lg:self-start lg:mb-4 xl:mb-2">
                        <Image
                            src={isDark ? WORLD_EDUCATION_LOGO_DARK_BG : WORLD_EDUCATION_LOGO}
                            alt="World Education Summit"
                            fill
                            className="object-contain object-center lg:object-left"
                            sizes="(max-width: 1023px) 223px, 341px"
                        />
                    </div>
                </div>

                {/* Hero photo */}
                <div className="w-full min-w-0 lg:flex-1 lg:max-w-[min(613.46px,100%)] shrink mx-auto lg:mx-0 lg:self-end relative">
                    <div className="relative w-full aspect-[613/638] max-h-[390px] md:max-h-[min(500px,52vw)] lg:max-h-[min(540px,55vh)] xl:max-h-[550px] overflow-hidden md:rounded-t-[16px] lg:rounded-t-[18px] xl:rounded-t-[20px]">
                        <Image
                            src={HERO_PHOTO}
                            alt="Marketing School"
                            fill
                            className="object-contain object-top lg:object-contain lg:object-center"
                            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 45vw, 613px"
                            priority
                        />
                    </div>

                    {/* Scroll Indicator */}
                    <div
                        className="hidden lg:flex absolute bottom-[15px] right-[-30%] translate-x-[40px] items-center opacity-100 whitespace-nowrap z-10"
                        style={{ width: '150px', height: '28px', gap: '5px' }}
                    >
                        <span style={{ width: '129px', height: '28px', fontFamily: 'Satoshi, sans-serif', fontWeight: 500, fontSize: '12px', lineHeight: '28px', display: 'flex', alignItems: 'center' }}>
                            Scroll Down to Discover
                        </span>
                        <div className="w-[16px] h-[16px] shrink-0 flex items-center justify-center">
                            <Image
                                src="/photos/schools/marketing/solar_arrow-up-broken.svg"
                                alt=""
                                width={16}
                                height={16}
                                className={`h-full w-full object-contain transition-[filter] duration-300 ease-out ${isDark ? "invert" : ""}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop-only right note */}
                <div className="hidden lg:flex w-[min(200px,18%)] xl:w-[clamp(170px,15vw,250px)] min-w-0 shrink-0 min-h-0 xl:min-h-[550px] items-start pt-0 relative lg:self-start">
                    <div className="absolute left-[clamp(-130px,-12vw,-90px)] top-[clamp(16px,2vw,40px)] xl:top-[clamp(40px,4vw,80px)] flex flex-col gap-[clamp(16px,2vw,24px)] w-[clamp(240px,22vw,313px)] h-auto opacity-100">
                        <div className="w-[clamp(35px,3.2vw,45px)] h-[clamp(35px,3.2vw,45px)] opacity-100 flex items-center justify-center">
                            <Image src="/photos/schools/marketing/Crosshair.svg" alt="" width={45} height={45} className="w-full h-full object-contain" />
                        </div>
                        <p
                            className="m-0 align-middle"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "clamp(14px, 1.25vw, 18px)", lineHeight: "clamp(22px, 2vw, 28px)", letterSpacing: "0%", width: "100%" }}
                        >
                            Learn in a space where ideas flow, projects matter, and your growth is the priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
