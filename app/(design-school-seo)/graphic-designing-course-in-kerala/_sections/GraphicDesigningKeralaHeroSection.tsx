import type { CSSProperties } from "react";
import Image from "next/image";
import { DesignPillArrowCta } from "@/components/design/DesignPillArrowCta";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const PROGRAM_IMAGE_SRC =
    "/photos/schools/design/" + encodeURIComponent("program 1 photo.webp");

const HERO_ILLUSTRATION_W = 500;

const INTRO_BOLD_PHRASE: CSSProperties = {
    fontFamily: vc,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "125%",
    letterSpacing: "0",
    fontSize: "inherit",
};

const INTRO_P1_DESKTOP =
    "At Design School by HACA, our Graphic Designing Course in Kerala is created for students, beginners, freelancers, and aspiring creatives who want skills that go beyond learning software.";

const INTRO_P2_DESKTOP =
    "Step into a hands-on learning experience where you master Graphic Design, Branding, Motion Graphics, Video Editing, and UI/UX Design under one program. Designed to feel like a real creative agency, the course gives you practical exposure, industry projects, and the confidence to build a strong creative career.";

const INTRO_P1_MOBILE =
    "At Design School by HACA, our Graphic Designing Course in Kerala is created for students, beginners, freelancers, and aspiring creatives who want skills that go beyond learning software.";

const INTRO_P2_MOBILE =
    "Step into a hands-on learning experience where you master Graphic Design, Branding, Motion Graphics, Video Editing, and UI/UX Design under one program. Designed to feel like a real creative agency, the course gives you practical exposure, industry projects, and the confidence to build a strong creative career.";

export function GraphicDesigningKeralaHeroSection() {
    return (
        <section className="w-full bg-white">
            <div
                className={[
                    "relative mx-auto box-border w-full max-w-[1440px]",
                    "px-4 pb-9 pt-8 sm:px-6 sm:pb-10 sm:pt-10 md:px-8 lg:min-h-[722px] lg:px-[60px] lg:pb-[40px] lg:pt-[60px]",
                ].join(" ")}
            >
                <div
                    className={[
                        "relative isolate w-full overflow-visible text-left",
                        "flex flex-col",
                        "gap-6 sm:gap-7 md:gap-8",
                        "min-h-[min(500px,_87svh)] sm:min-h-[min(520px,_85svh)] md:min-h-[min(560px,_82svh)]",
                        "lg:block lg:h-[622px] lg:min-h-[622px]",
                    ].join(" ")}
                >
                    {/* Intro — mobile */}
                    <div
                        className={[
                            "relative z-[20] m-0 flex flex-col gap-3 text-left text-[#0A0A0A] lg:hidden",
                            "w-full max-w-[min(360px,100%)]",
                            "text-[14px] leading-[125%] tracking-normal",
                        ].join(" ")}
                        style={{
                            fontFamily: vc,
                            fontWeight: 400,
                            fontStyle: "normal",
                            letterSpacing: "0",
                        }}
                    >
                        <p className="m-0">{INTRO_P1_MOBILE}</p>
                        <p className="m-0">{INTRO_P2_MOBILE}</p>
                    </div>
                    {/* Intro — desktop */}
                    <div
                        className={[
                            "hidden lg:flex lg:flex-col lg:gap-4 absolute left-0 top-0 z-[20] m-0 text-left text-[#0A0A0A]",
                            "lg:text-[14px] lg:tracking-normal",
                            "lg:max-xl:w-[305px] lg:max-xl:max-w-[305px]",
                            "xl:w-[305px] xl:max-w-[305px]",
                        ].join(" ")}
                        style={{
                            fontFamily: vc,
                            fontWeight: 400,
                            fontStyle: "normal",
                            lineHeight: "125%",
                            letterSpacing: "0",
                        }}
                    >
                        <p className="m-0">{INTRO_P1_DESKTOP}</p>
                        <p className="m-0">{INTRO_P2_DESKTOP}</p>
                    </div>

                    {/* Illustration */}
                    <div
                        className={[
                            "pointer-events-none relative z-[5]",
                            "mx-auto translate-y-[6px]",
                            "w-[min(420px,_88vw)]",
                            "sm:translate-y-[8px] sm:w-[min(460px,_86vw)]",
                            "md:translate-y-[12px] md:w-[min(520px,_78vw)]",
                            "lg:translate-y-0 lg:left-[168px] lg:max-xl:top-[40px] lg:max-xl:bottom-0 lg:w-[clamp(376px,_44vw,_560px)] lg:max-xl:max-w-[560px]",
                            "xl:left-[196px] xl:top-[45px] xl:w-[500px] xl:max-w-[500px]",
                            "lg:absolute",
                        ].join(" ")}
                    >
                        <Image
                            src={PROGRAM_IMAGE_SRC}
                            alt="Graphic design student multitasking with creative tools"
                            width={HERO_ILLUSTRATION_W}
                            height={707}
                            className={[
                                "h-auto w-full object-contain",
                                "object-center object-top max-h-[min(320px,_44svh)]",
                                "sm:max-h-[min(380px,_46svh)]",
                                "md:max-h-[min(420px,_48svh)]",
                                "lg:max-h-none lg:object-left",
                                "lg:max-xl:h-full lg:max-xl:object-left-bottom",
                                "xl:translate-y-[6px]",
                            ].join(" ")}
                            sizes="(max-width: 1024px) 88vw, (max-width: 1279px) 560px, 500px"
                            priority
                        />
                    </div>

                    {/* Copy + CTAs — Mobile */}
                    <div className="relative z-[15] flex w-full flex-col items-start lg:hidden">
                        <p
                            className="m-0 w-full uppercase text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 600,
                                fontStyle: "normal",
                                fontSize: "14px",
                                lineHeight: "125%",
                                letterSpacing: "0",
                            }}
                        >
                            WHY LEARN JUST ONE SKILL?
                        </p>
                        <h1
                            className="m-0 mt-2 w-full max-w-[min(320px,100%)] text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 600,
                                fontStyle: "normal",
                                fontSize: "clamp(34px, 10.2vw, 44px)",
                                lineHeight: "112%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Join the Most Career-Focused
                            <br />
                            Graphic Designing Course
                            <br />
                            in Kerala
                        </h1>

                        <div className="mt-5 flex w-full max-w-[min(320px,100%)] flex-col items-start gap-4">
                            <DesignPillArrowCta
                                label="Have Questions? Call Now"
                                href="tel:+918031332470"
                                variant="purple"
                                size="compact"
                                fullWidth
                            />
                            <DesignPillArrowCta label="join now" href="/contact" variant="orange" size="compact" />
                        </div>
                    </div>

                    {/* Copy + CTAs — Desktop */}
                    <div
                        className={[
                            "hidden lg:flex absolute right-0 z-[15] max-w-full flex-col items-start",
                            "bottom-0",
                            "gap-2 lg:max-xl:gap-[9px] xl:gap-[10px]",
                            "w-full",
                            "lg:w-full lg:max-xl:max-w-[min(318px,_calc(100vw-120px-636px))] xl:max-w-[614px]",
                            "lg:max-xl:right-8",
                        ].join(" ")}
                    >
                        <p
                            className={[
                                "m-0 w-full uppercase leading-[125%] text-black",
                                "lg:max-xl:text-[18px] xl:text-[20px]",
                            ].join(" ")}
                            style={{ fontFamily: vc, fontWeight: 600 }}
                        >
                            Why learn just one skill?
                        </p>
                        <h1
                            className={[
                                "m-0 w-full leading-[110%] tracking-[-0.02em] text-black",
                                "lg:max-xl:text-[clamp(22px,_1.65vw_+_13px,_28px)] xl:text-[55px]",
                            ].join(" ")}
                            style={{ fontFamily: vc, fontWeight: 600 }}
                        >
                            Join the Most Career-Focused Graphic Designing Course in Kerala
                        </h1>

                        <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-5">
                            <DesignPillArrowCta
                                label="Have Questions? Call Now"
                                href="tel:+918031332470"
                                variant="purple"
                            />
                            <DesignPillArrowCta label="join now" href="/contact" variant="orange" />
                        </div>
                    </div>

                    {/* Scroll helper */}
                    <p
                        className="relative z-[15] m-0 mt-8 text-[14px] leading-[28px] text-[#0A0A0A] lg:hidden"
                        style={{ fontFamily: vc, fontWeight: 400, letterSpacing: "0" }}
                    >
                        Keep scrolling, it&apos;s worth it ↓
                    </p>
                    <p
                        className={[
                            "hidden lg:block absolute left-0 bottom-0 z-[15] m-0 text-[#0A0A0A]",
                            "lg:max-w-none lg:text-[12px] lg:leading-[28px] lg:whitespace-nowrap",
                        ].join(" ")}
                        style={{ fontFamily: vc, fontWeight: 400 }}
                    >
                        Keep scrolling to know more ↓
                    </p>
                </div>
            </div>
        </section>
    );
}
