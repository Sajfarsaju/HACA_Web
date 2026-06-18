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
                            "w-full max-w-[343px]",
                            "text-[12px] leading-[19px]",
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

                    {/* Illustration — anchored high + left (desktop-like), narrower on small screens; no vertical “stack” under RH copy */}
                    <div
                        className={[
                            "pointer-events-none relative z-[5]",
                            /* Mobile: aligned with desktop logic (past intro), biased upward — not under headline block */
                            "mx-auto translate-y-[6px]",
                            "w-full",
                            "sm:translate-y-[8px] sm:w-[min(460px,_86vw)]",
                            "md:translate-y-[12px] md:w-[min(520px,_78vw)]",
                            /* `lg`–`xl`: illustration anchored to left edge */
                            "lg:translate-y-0 lg:left-0 lg:max-xl:top-0 lg:max-xl:bottom-0 lg:w-[clamp(340px,38vw,520px)] lg:max-xl:max-w-[520px]",
                            /* `xl+`: illustration on far left */
                            "xl:left-0 xl:top-0 xl:w-[520px] xl:max-w-[520px]",
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
                                "object-center object-top max-h-[min(420px,_60svh)]",
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
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "18px",
                                lineHeight: "125%",
                                letterSpacing: "0",
                            }}
                        >
                            WHY CHOOSE ONE SKILL?
                        </p>
                        <h1
                            className="m-0 mt-2 w-full text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "35px",
                                lineHeight: "120%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Choose a Graphic Designing Course in Calicut that Covers it All
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

                    {/* Desktop copy + CTAs */}
                    <div
                        className={[
                            "hidden lg:flex absolute right-0 z-[15] max-w-full flex-col items-start",
                            "bottom-0",
                            "gap-[20px]",
                            "w-full",
                            /* lg-xl: width after illustration (520px) + gap */
                            "lg:w-full lg:max-xl:max-w-[calc(100%-540px)] xl:max-w-[700px]",
                            "lg:max-xl:right-0",
                        ].join(" ")}
                    >
                        <p
                            className="m-0 w-full uppercase text-[20px] leading-[125%] text-black"
                            style={{ fontFamily: vc, fontWeight: 500, letterSpacing: "0" }}
                        >
                            WHY CHOOSE ONE SKILL?
                        </p>
                        <h1
                            className={[
                                "m-0 w-full leading-[110%] tracking-[-0.02em] text-black",
                                "lg:max-xl:text-[clamp(32px,_4vw,_50px)] xl:text-[55px]",
                            ].join(" ")}
                            style={{ fontFamily: vc, fontWeight: 500 }}
                        >
                            Choose a Graphic Designing Course in Calicut that Covers it All
                        </h1>

                        <p
                            className="m-0 w-full text-[14px] leading-[125%] text-black"
                            style={{ fontFamily: vc, fontWeight: 400, letterSpacing: "0" }}
                        >
                            At Design School by HACA, you&apos;ll learn Graphic Design, Video Editing, Motion Graphics, UI/UX Design, and Branding in one creative learning environment built for real-world careers. Here, at{" "}
                            <strong style={{ fontFamily: vc, fontWeight: 600, fontStyle: "normal", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "0" }}>
                                Kerala&apos;s No.1 Design School,
                            </strong>{" "}
                            we provide the tools, mentorship, and skills to help you unlock your full creative potential. Start your creative journey with our graphic designing course in Calicut, and let&apos;s build something amazing together.
                        </p>

                        <div className="flex w-full flex-wrap items-center justify-start gap-5">
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
