import Image from "next/image";

import { DesignPillArrowCta } from "@/components/design/DesignPillArrowCta";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const IMAGE_SRC =
    "/photos/schools/design/seo/633ffab44a002ac5c324b8c7da2f74ee1653d630.webp";

const STATS = [
    { count: "500+", label: "Students Trained with Practical Design Skills" },
    { count: "200+", label: "Hiring Partners Connected with Creative Talent" },
    { count: "15+",  label: "Creative Mentors Helping Students Learn" },
] as const;

/** Vertical divider: 2 px wide × 14.5 px tall, fully rounded ends */
function VDivider({ color = "#0A0A0A" }: { color?: string }) {
    return (
        <span
            aria-hidden
            style={{
                display: "inline-block",
                flexShrink: 0,
                width: "2px",
                height: "14.5px",
                borderRadius: "20px",
                backgroundColor: color,
            }}
        />
    );
}

export function GraphicDesignOnlineHeroSection() {
    return (
        <section className="w-full bg-transparent" aria-labelledby="gd-online-hero-heading">

            {/* ── Desktop (lg+) ── */}
            <div className="mx-auto hidden max-w-[1440px] items-center justify-between gap-10 px-[60px] py-[50px] lg:flex">

                {/* Left: illustration */}
                <div className="shrink-0">
                    <Image
                        src={IMAGE_SRC}
                        alt="Online graphic design student working creatively"
                        width={500}
                        height={560}
                        className="h-auto w-[500px] object-contain"
                        priority
                    />
                </div>

                {/* Right: content */}
                <div className="flex flex-1 flex-col gap-[18px]">

                    {/* Online | 3 Months — desktop */}
                    <div className="flex items-center gap-[8px]">
                        <span
                            className="text-[#29C76B]"
                            style={{ fontFamily: vc, fontWeight: 600, fontSize: "14px", lineHeight: "100%" }}
                        >
                            Online
                        </span>
                        <VDivider color="#29C76B" />
                        <span
                            className="text-[#0A0A0A]"
                            style={{ fontFamily: vc, fontWeight: 600, fontSize: "14px", lineHeight: "100%" }}
                        >
                            3 Months
                        </span>
                    </div>

                    {/* Eyebrow */}
                    <p
                        className="m-0 text-[#0A0A0A]/70"
                        style={{ fontFamily: vc, fontWeight: 400, fontSize: "16px", lineHeight: "125%" }}
                    >
                        Ready to Turn Creativity Into a Career?
                    </p>

                    {/* H1 — desktop: 60px / 500 / 120% / -1% */}
                    <h1
                        id="gd-online-hero-heading"
                        className="m-0 text-[#0A0A0A]"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontSize: "60px",
                            lineHeight: "120%",
                            letterSpacing: "-1%",
                        }}
                    >
                        Join One of the Best Online Graphic Design Courses at HACA
                    </h1>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                        <DesignPillArrowCta
                            label="View Course Details"
                            href="#gd-online-curriculum"
                            variant="green"
                        />
                        <DesignPillArrowCta
                            label="Enquire Now"
                            href="/enquire"
                            variant="green"
                        />
                    </div>

                    {/* Stats — small desktop (lg→xl): label below count; xl+: label beside count */}
                    <div className="flex items-center gap-[24px] xl:gap-[36px] pt-1">
                        {STATS.map((s) => (
                            <div
                                key={s.count}
                                className="flex flex-col items-start xl:flex-row xl:items-center gap-[4px] xl:gap-[10px]"
                            >
                                <span
                                    className="shrink-0 text-[#0A0A0A]"
                                    style={{ fontFamily: vc, fontWeight: 500, fontSize: "36px", lineHeight: "100%" }}
                                >
                                    {s.count}
                                </span>
                                <span
                                    className="text-[#0A0A0A]/60 max-w-[160px]"
                                    style={{ fontFamily: vc, fontWeight: 400, fontSize: "14px", lineHeight: "120%" }}
                                >
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <p
                        className="m-0 text-[#0A0A0A]/70"
                        style={{ fontFamily: vc, fontWeight: 400, fontSize: "15px", lineHeight: "160%" }}
                    >
                        Design School by HACA offers one of the best online graphic design courses for beginners, students, and aspiring creatives who want practical design experience without depending on traditional classroom learning. This online graphic designing course is designed to help learners understand design thinking, creative execution, AI-powered workflows, and portfolio development through a structured learning approach.
                    </p>
                </div>
            </div>

            {/* ── Mobile (< lg) ── */}
            <div className="mx-auto flex max-w-[1440px] flex-col gap-[20px] px-[16px] py-[20px] lg:hidden">

                {/* Online | 3 Months — mobile: 12px / 600 */}
                <div className="flex items-center gap-[8px]">
                    <span
                        className="text-[#29C76B]"
                        style={{ fontFamily: vc, fontWeight: 600, fontSize: "12px", lineHeight: "100%" }}
                    >
                        Online
                    </span>
                    <VDivider color="#29C76B" />
                    <span
                        className="text-[#0A0A0A]"
                        style={{ fontFamily: vc, fontWeight: 600, fontSize: "12px", lineHeight: "100%" }}
                    >
                        3 Months
                    </span>
                </div>

                {/* Eyebrow */}
                <p
                    className="m-0 text-[#0A0A0A]/70"
                    style={{ fontFamily: vc, fontWeight: 400, fontSize: "14px", lineHeight: "125%" }}
                >
                    Ready to Turn Creativity Into a Career?
                </p>

                {/* H1 — mobile: 35px / 500 / 110% / -1% */}
                <h1
                    id="gd-online-hero-heading"
                    className="m-0 text-[#0A0A0A]"
                    style={{
                        fontFamily: vc,
                        fontWeight: 500,
                        fontSize: "35px",
                        lineHeight: "110%",
                        letterSpacing: "-1%",
                    }}
                >
                    Join One of the Best Online Graphic Design Courses at HACA
                </h1>

                {/* CTAs — width fits text, black text */}
                <div className="flex flex-wrap items-center gap-3">
                    <DesignPillArrowCta
                        label="View Course Details"
                        href="#gd-online-curriculum"
                        variant="green"
                        size="compact"
                    />
                    <DesignPillArrowCta
                        label="Enquire Now"
                        href="/enquire"
                        variant="green"
                        size="compact"
                    />
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <Image
                        src={IMAGE_SRC}
                        alt="Online graphic design student working creatively"
                        width={343}
                        height={385}
                        className="h-auto w-full max-w-[343px] object-contain"
                        priority
                    />
                </div>

                {/* Stats — mobile: centered, count right-aligned, label 2-line wrap */}
                <div className="flex flex-col items-center" style={{ gap: "10px" }}>
                    {STATS.map((s) => (
                        <div key={s.count} className="flex items-center gap-[24px]">
                            <span
                                className="shrink-0 text-[#0A0A0A]"
                                style={{ fontFamily: vc, fontWeight: 500, fontSize: "35px", lineHeight: "100%", width: "80px", textAlign: "right" }}
                            >
                                {s.count}
                            </span>
                            <span
                                className="text-[#0A0A0A]/60 max-w-[130px]"
                                style={{ fontFamily: vc, fontWeight: 400, fontSize: "12px", lineHeight: "120%" }}
                            >
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <p
                    className="m-0 text-[#0A0A0A]/70"
                    style={{ fontFamily: vc, fontWeight: 400, fontSize: "14px", lineHeight: "160%" }}
                >
                    Design School by HACA offers one of the best online graphic design courses for beginners, students, and aspiring creatives who want practical design experience without depending on traditional classroom learning. This online graphic designing course is designed to help learners understand design thinking, creative execution, AI-powered workflows, and portfolio development through a structured learning approach.
                </p>
            </div>
        </section>
    );
}
