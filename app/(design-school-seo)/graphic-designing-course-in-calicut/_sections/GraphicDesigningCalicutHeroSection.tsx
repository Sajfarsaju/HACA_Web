import type { CSSProperties } from "react";
import Image from "next/image";
import { DesignPillArrowCta } from "@/components/design/DesignPillArrowCta";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const PROGRAM_IMAGE_SRC =
    "/photos/schools/design/" + encodeURIComponent("program 1 photo.webp");

/** Desktop `lg`+ frame — slightly smaller than 540px for breathing room next to copy */
/**
 * Intrinsic width is only for `next/image` calculations.
 * Visual sizing is controlled via responsive Tailwind widths below.
 */
const HERO_ILLUSTRATION_W = 500;

/** Line breaks match desktop comp; phrase uses bold (700) in VC Nudge Trial Normal. */
const INTRO_BOLD_PHRASE: CSSProperties = {
    fontFamily: vc,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "125%",
    letterSpacing: "0",
    fontSize: "inherit",
};

const INTRO_COPY_DESKTOP = (
    <>
        At Design School by HACA, you&apos;ll learn Graphic
        <br />
        Design, Video Editing, Motion Graphics, UI/UX
        <br />
        Design, and Branding in one creative learning
        <br />
        environment built for real-world careers. Here, at
        <br />
        <strong style={INTRO_BOLD_PHRASE}>Kerala&apos;s No.1 Design School,</strong> we provide
        <br />
        the tools, mentorship, and skills to help you
        <br />
        unlock your full creative potential. Start your
        <br />
        creative journey with our graphic designing course
        <br />
        in Calicut, and let&apos;s build something amazing
        <br />
        together.
    </>
);

const INTRO_COPY_MOBILE = (
    <>
        At Design School by HACA, you&apos;ll learn Graphic Design, Video Editing, Motion Graphics, UI/UX Design, and Branding in one creative learning environment built for real-world careers. Here, at{" "}
        <strong style={INTRO_BOLD_PHRASE}>Kerala&apos;s No.1 Design School,</strong> we provide the tools, mentorship,
        and skills to help you unlock your full creative potential. Start your creative journey with our graphic designing
        course in Calicut, and let&apos;s build something amazing together.
    </>
);

/**
 * Asymmetric hero on all breakpoints (intro / art / copy+CTAs / scroll).
 * **`lg`–`xl` (small desktop/laptop):** scale down both art + right column to avoid overlap.
 * **`xl+` (large desktop):** keep the “perfect” wide-desktop layout.
 */
export function GraphicDesigningCalicutHeroSection() {
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
                        /* Mobile/tablet: flow layout (stacked blocks) */
                        "flex flex-col",
                        "gap-6 sm:gap-7 md:gap-8",
                        "min-h-[min(500px,_87svh)] sm:min-h-[min(520px,_85svh)] md:min-h-[min(560px,_82svh)]",
                        /* Desktop: switch to absolute frame (existing layout) */
                        "lg:block lg:h-[622px] lg:min-h-[622px]",
                    ].join(" ")}
                >
                    {/* Intro — top-left */}
                    {/* Intro — mobile flow (natural wrap), desktop uses fixed line breaks */}
                    <p
                        className={[
                            "relative z-[20] m-0 text-left text-[#0A0A0A] lg:hidden",
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
                        {INTRO_COPY_MOBILE}
                    </p>
                    <p
                        className={[
                            "hidden lg:block absolute left-0 top-0 z-[20] m-0 text-left text-[#0A0A0A]",
                            "lg:min-h-[144px] lg:text-[14px] lg:tracking-normal",
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
                        {INTRO_COPY_DESKTOP}
                    </p>

                    {/* Illustration — anchored high + left (desktop-like), narrower on small screens; no vertical “stack” under RH copy */}
                    <div
                        className={[
                            "pointer-events-none relative z-[5]",
                            /* Mobile: aligned with desktop logic (past intro), biased upward — not under headline block */
                            "mx-auto translate-y-[6px]",
                            "w-[min(420px,_88vw)]",
                            "sm:translate-y-[8px] sm:w-[min(460px,_86vw)]",
                            "md:translate-y-[12px] md:w-[min(520px,_78vw)]",
                            /* `lg`–`xl`: larger art + stretch to bottom so it touches hero bottom edge */
                            "lg:translate-y-0 lg:left-[168px] lg:max-xl:top-[40px] lg:max-xl:bottom-0 lg:w-[clamp(376px,_44vw,_560px)] lg:max-xl:max-w-[560px]",
                            /* `xl+`: keep original “perfect” desktop frame (nudged slightly lower) */
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
                                /* Crop visual upward on small screens so feet/tail doesn’t read under bottom-right headline */
                                "object-center object-top max-h-[min(320px,_44svh)]",
                                "sm:max-h-[min(380px,_46svh)]",
                                "md:max-h-[min(420px,_48svh)]",
                                "lg:max-h-none lg:object-left",
                                /* `lg`–`xl`: fill the stretched container and anchor to bottom */
                                "lg:max-xl:h-full lg:max-xl:object-left-bottom",
                                /* Large desktop: nudge drawable slightly lower vs top-aligned crop */
                                "xl:translate-y-[6px]",
                            ].join(" ")}
                            sizes="(max-width: 1024px) 88vw, (max-width: 1279px) 560px, 500px"
                            priority
                        />
                    </div>

                    {/* Copy + CTAs */}
                    {/* Mobile/tablet: stacked flow like comp screenshot */}
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
                            WHY CHOOSE ONE SKILL?
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
                            Choose HACA&apos;s Graphic Designing
                            <br />
                            Course in Calicut That
                            <br />
                            Covers It All
                        </h1>

                        <div className="mt-5 flex w-full max-w-[min(320px,100%)] flex-col items-start gap-4">
                            <DesignPillArrowCta
                                label="Have Questions? Call Now"
                                href="tel:+918031332470"
                                variant="purple"
                                size="compact"
                                fullWidth
                            />
                            <DesignPillArrowCta label="join now" href="/enquire" variant="orange" size="compact" />
                        </div>
                    </div>

                    {/* Desktop (`lg+`): keep existing absolute layout unchanged */}
                    <div
                        className={[
                            "hidden lg:flex absolute right-0 z-[15] max-w-full flex-col items-start",
                            /* Lift slightly on small widths so rhythm matches desktop diagonal, not sitting on illustration */
                            "bottom-0",
                            "gap-2 lg:max-xl:gap-[9px] xl:gap-[10px]",
                            "w-full",
                            /* `lg`–`xl`: width tuned so wrap rhythm tracks xl (614px / 55px) by scaling headline down */
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
                            Why choose one skill?
                        </p>
                        <h1
                            className={[
                                "m-0 w-full leading-[110%] tracking-[-0.02em] text-black",
                                "lg:max-xl:text-[clamp(22px,_1.65vw_+_13px,_28px)] xl:text-[55px]",
                            ].join(" ")}
                            style={{ fontFamily: vc, fontWeight: 600 }}
                        >
                            Choose HACA&apos;s Graphic Designing Course in Calicut That Covers It All
                        </h1>

                        <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-5">
                            <DesignPillArrowCta
                                label="Have Questions? Call Now"
                                href="tel:+918031332470"
                                variant="purple"
                            />
                            <DesignPillArrowCta label="join now" href="/enquire" variant="orange" />
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
