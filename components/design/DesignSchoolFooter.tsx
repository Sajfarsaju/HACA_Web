"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { DesignSplitArrowCta } from "./DesignSplitArrowCta";
import { ENQUIRE_URL } from "@/lib/enquire";

const LOGO_SRC = "/photos/main/haca%20design%20school.svg";
const FOOTER_ILLUSTRATION_SRC = "/photos/schools/design/677899dc62a1d1abef869da860d62739ce98ca75.webp";

const DESIGN_INSTAGRAM_URL =
    "https://www.instagram.com/haca.designschool?igsh=MWZzN2ZvdnRwdm00bQ==";
const DESIGN_YOUTUBE_URL =
    "https://youtube.com/@designschoolhaca?si=J3L4sQtEDimos0D5";

/** Footer heading decorations — sizes only (“Hey designers!”) */
const FOOTER_HEADING_DECO = {
    d1: {
        desk: { w: 61.99203496736692, h: 58.65061192972052 },
        mob: { w: 30.765277889971927, h: 29.107004191594385 },
    },
    d2: {
        desk: { w: 34.96139087910375, h: 27.59485962710794 },
        mob: { w: 17.350564673850744, h: 13.694719091351201 },
    },
    d3: {
        desk: { w: 39.944571326524866, h: 37.8041333068245 },
        mob: { w: 17.999524564510516, h: 17.034980295343843 },
    },
    d4: {
        desk: { w: 53, h: 61.721675872802734 },
        mob: { w: 26.3027286529541, h: 30.631103515625 },
    },
} as const;

const COMBOS = [
    { bg: "#2592FF", accent: "#FF5C00" },
    { bg: "#8F56FF", accent: "#FF5659" },
    { bg: "#FF5C00", accent: "#2592FF" },
    { bg: "#FF5659", accent: "#8F56FF" },
    { bg: "#8F56FF", accent: "#FF5C00" },
    { bg: "#FF5659", accent: "#29BA66" },
    { bg: "#FF5C00", accent: "#8F56FF" },
    { bg: "#29BA66", accent: "#FF5659" },
] as const;

const FOOTER_NAV = [
    { label: "Home", href: "/design-school" },
    { label: "Projects", href: "/design-school/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Courses", href: "/design-school/courses" },
    { label: "Contact Us", href: "/contact" },
] as const;

const ADDRESS = "4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003";
const PHONE = "+91 08031332470";
const EMAIL = "info@harisandcoacademy.com";

/* ── Inline SVG decorations (fill driven by accent color) ── */

function decoFillStyle(color: string, animate: boolean): React.CSSProperties {
    return animate ? { fill: color, transition: "fill 500ms ease" } : { fill: color };
}

function Deco1({ color, style, animate = true }: { color: string; style?: React.CSSProperties; animate?: boolean }) {
    const fill = decoFillStyle(color, animate);
    return (
        <svg width="100%" height="100%" viewBox="0 0 86 86" fill="none" style={{ display: "block", ...style }} aria-hidden>
            <path d="M13.9843 54.7554C6.27317 46.162 9.78968 30.3865 21.8236 19.588C33.8576 8.78956 49.9216 6.99482 57.6327 15.5882C65.3438 24.1815 61.8261 39.9581 49.7922 50.7565C37.7582 61.555 21.6954 63.3487 13.9843 54.7554ZM56.4181 16.6781C49.3083 8.75494 34.2786 10.6045 22.9136 20.8027C11.5498 30.9998 8.08921 45.7422 15.1989 53.6654C22.3087 61.5886 37.3384 59.739 48.7022 49.5419C60.0672 39.3437 63.5278 24.6013 56.4181 16.6781Z" style={fill} />
            <path d="M27.4218 69.7221C19.7107 61.1288 23.2272 45.3533 35.2611 34.5548C47.2951 23.7564 63.3591 21.9616 71.0702 30.555C78.7813 39.1483 75.2641 54.9254 63.2301 65.7239C51.1962 76.5223 35.1329 78.3155 27.4218 69.7221ZM69.8556 31.6449C62.7458 23.7217 47.7161 25.5713 36.3511 35.7695C24.9873 45.9666 21.5267 60.709 28.6365 68.6322C35.7467 76.5559 50.7764 74.7063 62.1402 64.5092C73.5052 54.311 76.9659 39.5688 69.8556 31.6449Z" style={fill} />
        </svg>
    );
}

function Deco2({ color, style, animate = true }: { color: string; style?: React.CSSProperties; animate?: boolean }) {
    const fill = decoFillStyle(color, animate);
    return (
        <svg width="100%" height="100%" viewBox="0 0 45 43" fill="none" style={{ display: "block", ...style }} aria-hidden>
            <path d="M38.387 26.7109C38.0259 26.9789 37.4374 27.1252 37.0436 26.9959C36.0478 26.6654 35.9097 25.5199 35.7646 24.305C35.742 24.1058 35.7195 23.9229 35.696 23.787C35.63 23.413 35.6341 22.8767 35.649 21.8813C35.6621 20.8394 35.6945 18.2657 35.3627 17.2847C33.6868 18.354 32.7457 20.4495 31.7747 22.6652C30.7111 25.0974 29.6259 27.6049 27.3552 28.8238C26.874 29.0825 26.3278 29.0932 25.8554 28.8539C24.631 28.2314 24.2913 26.1884 23.7037 21.9926C23.4274 20.0306 22.9814 16.8526 22.4629 15.8851C21.335 16.4807 20.2127 19.9335 19.559 21.8825C18.39 25.3608 17.463 28.1055 15.2975 27.7763C14.2168 27.6206 13.9466 26.5701 13.8443 26.1753C13.7216 25.7972 13.6058 25.4364 13.4562 24.962C11.4027 18.5179 10.2639 16.9874 9.77813 16.6419C9.75374 16.6853 9.70699 16.7467 9.65422 16.8321C8.94373 17.97 8.27569 19.0406 7.85474 20.1915C7.6061 20.872 7.55148 21.6854 7.49398 22.5472C7.40575 23.8935 7.30543 25.4201 6.37926 26.733C5.99056 27.285 5.22469 27.417 4.67299 27.0267C4.11932 26.6378 3.98712 25.8735 4.3777 25.3201C4.90656 24.5717 4.97371 23.5582 5.05069 22.3856C5.1161 21.3899 5.18496 20.3587 5.55514 19.3483C6.06426 17.9593 6.83121 16.7288 7.57425 15.5386C8.42922 14.1699 9.45898 14.0804 9.99584 14.1497C12.2379 14.4295 13.8735 18.211 15.7888 24.2201C15.8367 24.3648 15.8793 24.4985 15.9161 24.6202C16.364 23.7025 16.867 22.2047 17.2371 21.1019C18.5002 17.3409 19.7992 13.4518 22.6513 13.3653C24.9569 13.2972 25.4485 16.8017 26.1289 21.6523C26.3307 23.0844 26.6098 25.086 26.9064 26.1601C28.0036 25.17 28.7488 23.4689 29.5303 21.684C30.6208 19.1918 31.8527 16.3682 34.42 14.9949C35.4316 14.4513 36.1995 14.7437 36.5674 14.9666C38.0565 15.8691 38.1415 18.5286 38.097 21.9127C38.0939 22.1936 38.089 22.4519 38.0856 22.6763C38.0953 22.6572 38.1051 22.6381 38.1128 22.6205C38.6927 21.423 39.349 20.0678 40.508 19.0126C40.9902 18.5744 41.7823 18.5943 42.2374 19.0951C42.6936 19.5935 42.6577 20.3678 42.1567 20.8245C41.3475 21.5605 40.8483 22.5937 40.3169 23.688C39.8278 24.6988 39.3218 25.7431 38.5325 26.582C38.491 26.6263 38.4408 26.671 38.387 26.7109Z" style={fill} />
        </svg>
    );
}

function Deco3({ color, style, animate = true }: { color: string; style?: React.CSSProperties; animate?: boolean }) {
    const fill = decoFillStyle(color, animate);
    return (
        <svg width="100%" height="100%" viewBox="0 0 54 54" fill="none" style={{ display: "block", ...style }} aria-hidden>
            <path d="M23.2433 20.1234C23.2433 20.1234 26.8348 12.0808 28.4847 11.3441C30.1348 10.6076 32.6417 19.6031 33.3934 19.6341C34.1452 19.665 43.1043 20.1082 43.4476 20.7295C44.2061 22.1019 37.5757 28.2861 37.5757 28.2861C37.5757 28.2861 44.063 36.5743 42.9032 38.809C41.8615 40.8158 30.0063 33.9781 30.0063 33.9781C30.0063 33.9781 21.0989 40.347 19.1741 39.2461C18.2568 38.7214 21.5976 28.4161 21.33 28.4931C20.9166 28.6122 13.1095 24.4294 13.3771 21.9757C13.5767 20.1478 23.2433 20.1234 23.2433 20.1234Z" style={fill} />
            <path d="M21.2448 17.292C20.9147 17.4572 20.5046 17.4178 20.2096 17.1589L15.2861 12.8465C14.8971 12.5063 14.8589 11.9165 15.199 11.5272C15.5352 11.1423 16.1284 11.0984 16.5183 11.4401L21.4418 15.7525C21.831 16.093 21.8692 16.6828 21.5289 17.0718C21.447 17.1661 21.3506 17.2386 21.2448 17.292Z" style={fill} />
            <path d="M36.406 17.9806C36.0304 18.1688 35.5623 18.0867 35.2767 17.7536C34.9413 17.3618 34.9864 16.771 35.3776 16.434L40.2935 12.2132C40.692 11.8787 41.2752 11.9215 41.6132 12.3141C41.9486 12.7059 41.9033 13.2964 41.5123 13.6338L36.5963 17.8545C36.5361 17.9052 36.4732 17.9468 36.406 17.9806Z" style={fill} />
            <path d="M14.8238 31.5294C14.8154 31.5328 8.56036 33.9327 8.56036 33.9327C8.29382 34.0355 7.88078 33.7493 7.63878 33.2962C7.39587 32.8416 7.4391 32.3843 7.68165 32.2879L13.9369 29.8883C14.2034 29.7855 14.6165 30.0717 14.8585 30.5248C15.0985 30.9743 15.0822 31.4201 14.8238 31.5294Z" style={fill} />
            <path d="M50.1586 31.2931C50.0636 31.3391 49.9517 31.3522 49.834 31.3217L41.4565 29.2156C41.1636 29.1428 40.9493 28.8334 40.9795 28.5265C41.0085 28.2178 41.2715 28.0283 41.5624 28.1037L49.9399 30.2097C50.2326 30.2826 50.4469 30.592 50.4169 30.8988C50.4 31.0833 50.2992 31.2249 50.1586 31.2931Z" style={fill} />
        </svg>
    );
}

function Deco4({ color, style, animate = true }: { color: string; style?: React.CSSProperties; animate?: boolean }) {
    const fill = decoFillStyle(color, animate);
    return (
        <svg width="100%" height="100%" viewBox="0 0 53 62" fill="none" style={style} aria-hidden>
            <path d="M31.4659 61.7217C31.4479 61.7217 31.4343 61.7217 31.416 61.7217C30.389 61.6979 29.502 60.9685 29.2305 59.9358L25.3574 45.0433L2.25386 44.3802C1.26299 44.3517 0.403292 43.6696 0.104724 42.6797C-0.18937 41.6898 0.150002 40.6145 0.946412 40.0034L20.1901 25.1865L14.4346 3.06075C14.1496 1.96651 14.6246 0.815514 15.5793 0.280285C16.5294 -0.240711 17.706 -0.0229 18.4163 0.829754L31.4566 16.5135L45.9947 5.32506C46.8001 4.69039 47.9042 4.69039 48.7187 5.30615C49.5331 5.92191 49.877 7.01613 49.574 8.0156L42.8003 30.165L52.429 41.7512C53.0353 42.476 53.171 43.5086 52.7773 44.3802C52.3835 45.2471 51.4607 45.7538 50.619 45.768L38.1441 45.4081L33.6735 60.0355C33.3662 61.0396 32.4704 61.7217 31.4659 61.7217ZM30.1945 45.1806L31.6425 50.7559L33.3211 45.2707L30.1945 45.1806ZM39.615 40.6001L45.47 40.7658L41.149 35.5695L39.615 40.6001ZM28.923 40.2922L34.7916 40.4628L37.5925 31.2922L30.76 23.069L25.4976 27.1237L28.923 40.2922ZM9.12719 39.7238L24.086 40.1549L21.4978 30.2028L9.12719 39.7238ZM34.5067 20.1843L39.244 25.8875L42.9815 13.6617L34.5067 20.1843ZM21.5656 12.0038L24.1899 22.1076L27.7103 19.3981L21.5656 12.0038Z" style={fill} />
        </svg>
    );
}

/* ── Schedule a Call button ── */

function ScheduleCallButton({ font, accentColor }: { font: string; accentColor: string }) {
    return (
        <>
            <div className="pointer-events-auto shrink-0 lg:hidden">
                <DesignSplitArrowCta
                    accent={accentColor}
                    href={ENQUIRE_URL}
                    ariaLabel="Schedule a Call"
                    label="Schedule a Call"
                    fontFamily={font}
                    arrowPreset="mobile36"
                    wrapperClassName="cursor-pointer"
                    wrapperStyle={{ width: 224.83334350585938, height: 50.19047546386719 }}
                    dims={{
                        gapPx: 4.4,
                        pillWidth: 168.76,
                        pillHeight: 50.19047546386719,
                        borderWidth: 0.88,
                        radiusPx: 39.64,
                        padX: 26.43,
                        padY: 14.1,
                        fontSizePx: 16,
                        circlePx: 47.57143020629883,
                        arrowSvgPx: 26,
                    }}
                />
            </div>
            <div className="pointer-events-auto hidden shrink-0 lg:block">
                <DesignSplitArrowCta
                    accent={accentColor}
                    href={ENQUIRE_URL}
                    ariaLabel="Schedule a Call"
                    label="Schedule a Call"
                    fontFamily={font}
                    arrowPreset="desktop"
                    wrapperClassName="cursor-pointer"
                    wrapperStyle={{ width: 265.2221984863281, height: 60.5555534362793 }}
                    dims={{
                        gapPx: 5.56,
                        pillWidth: 199.666,
                        pillHeight: 60.5555534362793,
                        borderWidth: 1.11,
                        radiusPx: 50,
                        padX: 33.33,
                        padY: 17.78,
                        fontSizePx: 17.78,
                        circlePx: 60,
                        arrowSvgPx: 33.33,
                    }}
                />
            </div>
        </>
    );
}

/* ── Main footer ── */

export type DesignSchoolFooterProps = {
    font: string;
    serif: string;
    /** Fixed colors — disables click-to-cycle background animation */
    staticTheme?: {
        background: string;
        accent: string;
    };
};

export function DesignSchoolFooter({ font, serif, staticTheme }: DesignSchoolFooterProps) {
    const [comboIdx, setComboIdx] = useState(0);
    const combo = staticTheme
        ? { bg: staticTheme.background, accent: staticTheme.accent }
        : COMBOS[comboIdx];
    const pathname = usePathname();
    const colorCycleEnabled = !staticTheme;
    const decoAnimate = colorCycleEnabled;

    const isActive = (href: string) => {
        if (!pathname) return false;
        if (href === "/design-school") return pathname === "/design-school";
        if (href === "/design-school/projects") return pathname.startsWith("/design-school/projects");
        if (href === "/design-school/courses") return pathname.startsWith("/design-school/courses");
        if (href === "/blog") return pathname.startsWith("/blog");
        if (href === "/contact") return pathname.startsWith("/contact");
        return pathname === href;
    };

    const nextCombo = () => setComboIdx((i) => (i + 1) % COMBOS.length);

    return (
        <>
            <footer
                id="design-school-footer"
                className={[
                    "relative w-full select-none",
                    colorCycleEnabled ? "cursor-pointer" : "",
                ].join(" ")}
                style={{
                    backgroundColor: combo.bg,
                    ...(colorCycleEnabled
                        ? { transition: "background-color 500ms ease" }
                        : {}),
                }}
                aria-labelledby="design-school-footer-heading"
                onClick={colorCycleEnabled ? nextCombo : undefined}
            >
                <div
                    className="
                        relative mx-auto flex w-full max-w-[1440px] flex-col
                        px-[clamp(20px,4.16vw,60px)]
                        pt-[30px] pb-0
                        lg:pt-[clamp(20px,2.1vw,40px)] lg:pb-[clamp(24px,2.4vw,40px)]
                        gap-[clamp(50px,5.5vw,80px)]
                        lg:h-[770px] lg:min-h-0
                    "
                >
                    {/* Desktop illustration */}
                    <div
                        className="pointer-events-none absolute hidden lg:block"
                        style={{
                            left: "clamp(420px, 50vw, 724px)",
                            bottom: "0px",
                            width: "clamp(460px, 45vw, 716px)",
                            aspectRatio: "716 / 663",
                        }}
                        aria-hidden
                    >
                        <Image
                            src={FOOTER_ILLUSTRATION_SRC}
                            alt=""
                            fill
                            unoptimized
                            sizes="(min-width: 1024px) 716px, 0px"
                            className="object-contain object-center"
                        />
                    </div>

                    {/* Mobile logo */}
                    <Link
                        href="/design-school"
                        className="relative h-[24.33789825439453px] w-[130px] shrink-0 lg:hidden"
                        aria-label="HACA Design School home"
                    >
                        <Image src={LOGO_SRC} alt="HACA Design School" fill className="object-contain object-left" unoptimized />
                    </Link>

                    <div className="flex w-full min-w-0 flex-col lg:relative lg:min-h-[550px] lg:flex-row lg:pt-5">
                        {/* Left column */}
                        <div className="flex w-full min-w-0 flex-col gap-[60px] lg:max-w-[clamp(520px,55vw,806px)] lg:gap-[100px]">
                            <div className="relative flex w-full max-w-[292px] flex-col gap-[10px] lg:max-w-[clamp(520px,55vw,806px)] lg:gap-5">

                                {/* Desktop decorative marks — Deco1 & Deco4 behind heading (z-index 0) */}
                                <span
                                    className="pointer-events-none absolute hidden lg:block"
                                    style={{
                                        left: "-24px",
                                        top: "2px",
                                        width: FOOTER_HEADING_DECO.d1.desk.w,
                                        height: FOOTER_HEADING_DECO.d1.desk.h,
                                        zIndex: 0,
                                        opacity: 1,
                                    }}
                                    aria-hidden
                                >
                                    <Deco1 color={combo.accent} animate={decoAnimate} />
                                </span>
                                <span
                                    className="pointer-events-none absolute hidden lg:block"
                                    style={{
                                        left: "-22px",
                                        top: "54px",
                                        width: FOOTER_HEADING_DECO.d2.desk.w,
                                        height: FOOTER_HEADING_DECO.d2.desk.h,
                                        zIndex: 2,
                                        opacity: 1,
                                    }}
                                    aria-hidden
                                >
                                    <Deco2 color={combo.accent} animate={decoAnimate} />
                                </span>
                                <span
                                    className="pointer-events-none absolute hidden lg:block"
                                    style={{
                                        right: "103px",
                                        top: "-6px",
                                        width: FOOTER_HEADING_DECO.d4.desk.w,
                                        height: FOOTER_HEADING_DECO.d4.desk.h,
                                        zIndex: 0,
                                        opacity: 1,
                                    }}
                                    aria-hidden
                                >
                                    <Deco4 color={combo.accent} animate={decoAnimate} />
                                </span>

                                {/* Mobile decorative marks */}
                                <span
                                    className="pointer-events-none absolute lg:hidden"
                                    style={{
                                        left: "-16px",
                                        top: "5px",
                                        width: FOOTER_HEADING_DECO.d1.mob.w,
                                        height: FOOTER_HEADING_DECO.d1.mob.h,
                                        zIndex: 0,
                                        opacity: 1,
                                    }}
                                    aria-hidden
                                >
                                    <Deco1 color={combo.accent} animate={decoAnimate} />
                                </span>
                                <span
                                    className="pointer-events-none absolute lg:hidden"
                                    style={{
                                        left: "-9px",
                                        top: "27px",
                                        width: FOOTER_HEADING_DECO.d2.mob.w,
                                        height: FOOTER_HEADING_DECO.d2.mob.h,
                                        zIndex: 2,
                                        opacity: 1,
                                    }}
                                    aria-hidden
                                >
                                    <Deco2 color={combo.accent} animate={decoAnimate} />
                                </span>
                                <span
                                    className="pointer-events-none absolute lg:hidden"
                                    style={{
                                        right: "-4px",
                                        top: "-2px",
                                        width: FOOTER_HEADING_DECO.d4.mob.w,
                                        height: FOOTER_HEADING_DECO.d4.mob.h,
                                        zIndex: 0,
                                        opacity: 1,
                                    }}
                                    aria-hidden
                                >
                                    <Deco4 color={combo.accent} animate={decoAnimate} />
                                </span>

                                <h2 id="design-school-footer-heading" className="relative z-[1] m-0 w-full text-[#F2F2F2] lg:max-w-[806px]">
                                    <span className="inline lg:hidden" style={{ fontFamily: font, fontWeight: 500, fontSize: "46px", lineHeight: "77.42px", letterSpacing: "0" }}>
                                        <span className="font-medium">Hey</span>
                                        <span style={{ fontFamily: font, fontWeight: 300 }} className="uppercase"> </span>
                                        <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", textTransform: "lowercase" }}>
                                            <span className="whitespace-nowrap">
                                                des
                                                <span className="relative inline-block">
                                                    <span
                                                        className="pointer-events-none absolute"
                                                        style={{
                                                            left: "50%",
                                                            bottom: "100%",
                                                            width: FOOTER_HEADING_DECO.d3.mob.w,
                                                            height: FOOTER_HEADING_DECO.d3.mob.h,
                                                            transform: "translate(calc(-50% + 4px), 0.72em)",
                                                            zIndex: 2,
                                                            opacity: 1,
                                                        }}
                                                        aria-hidden
                                                    >
                                                        <Deco3 color={combo.accent} animate={decoAnimate} />
                                                    </span>
                                                    i
                                                </span>
                                                gners<span style={{ textTransform: "uppercase" }}>!</span>
                                            </span>
                                        </span>
                                    </span>
                                    <span
                                        className="hidden lg:inline"
                                        style={{ fontFamily: font, fontWeight: 500, fontSize: "clamp(56px, 6.9vw, 100px)", lineHeight: "clamp(88px, 10.8vw, 156px)", letterSpacing: "0" }}
                                    >
                                        <span className="font-medium">Hey</span>
                                        <span style={{ fontFamily: font, fontWeight: 300 }} className="uppercase"> </span>
                                        <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", textTransform: "lowercase" }}>
                                            des
                                            <span className="relative inline-block">
                                                <span
                                                    className="pointer-events-none absolute"
                                                    style={{
                                                        left: "50%",
                                                        bottom: "100%",
                                                        width: FOOTER_HEADING_DECO.d3.desk.w,
                                                        height: FOOTER_HEADING_DECO.d3.desk.h,
                                                        transform: "translate(calc(-50% + 6px), 0.64em)",
                                                        zIndex: 2,
                                                        opacity: 1,
                                                    }}
                                                    aria-hidden
                                                >
                                                    <Deco3 color={combo.accent} animate={decoAnimate} />
                                                </span>
                                                i
                                            </span>
                                            gners
                                        </span>
                                        <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", textTransform: "uppercase" }}> !</span>
                                    </span>
                                </h2>

                                <ScheduleCallButton font={font} accentColor={combo.accent} />
                            </div>

                            {/* Center block — nav + contact + legal */}
                            <div className="flex w-full min-w-0 max-w-[633px] flex-col gap-8 lg:gap-[50px]">
                                <nav
                                    className={
                                        staticTheme
                                            ? "flex h-auto min-h-[22px] w-full max-w-[539px] flex-wrap items-center gap-x-6 gap-y-2 lg:h-[22px] lg:flex-nowrap lg:gap-[60px]"
                                            : "flex flex-wrap items-center gap-x-3 gap-y-2 lg:gap-x-6"
                                    }
                                    aria-label="Footer"
                                >
                                    {FOOTER_NAV.map((item) => {
                                        const active = isActive(item.href);
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={(e) => e.stopPropagation()}
                                                className={
                                                    staticTheme
                                                        ? [
                                                              "inline-block whitespace-nowrap text-[14px] font-medium leading-[22px] transition-colors duration-200 ease-out lg:text-[16px]",
                                                              active
                                                                  ? "text-white"
                                                                  : "text-[#C0C0C0] hover:text-white",
                                                          ].join(" ")
                                                        : [
                                                              "inline-block origin-center whitespace-nowrap text-[13px] font-medium leading-[120%] transition-[transform,color,opacity] duration-200 ease-out lg:text-base",
                                                              "hover:scale-[1.06] hover:text-black",
                                                              active
                                                                  ? "text-black opacity-100"
                                                                  : "text-[#F2F2F2]/95 hover:opacity-100",
                                                          ].join(" ")
                                                }
                                                style={{ fontFamily: font }}
                                                aria-current={active ? "page" : undefined}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
                                    <div className="flex min-w-0 flex-col gap-2">
                                        <p className="m-0 text-[16px] font-medium text-[#F2F2F2]" style={{ fontFamily: font }}>Join us at</p>
                                        <p className="m-0 max-w-[280px] text-[14px] font-light leading-[150%] text-[#F2F2F2]/90 lg:text-[15px]" style={{ fontFamily: font }}>{ADDRESS}</p>
                                    </div>
                                    <div className="flex min-w-0 flex-col gap-2">
                                        <p className="m-0 text-[16px] font-medium text-[#F2F2F2]" style={{ fontFamily: font }}>Call us</p>
                                        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-[14px] font-light text-[#F2F2F2]/90 lg:text-[15px]" style={{ fontFamily: font }} onClick={e => e.stopPropagation()}>{PHONE}</a>
                                    </div>
                                    <div className="flex min-w-0 flex-col gap-2 sm:col-span-2 lg:col-span-1">
                                        <p className="m-0 text-[16px] font-medium text-[#F2F2F2]" style={{ fontFamily: font }}>Email us</p>
                                        <a href={`mailto:${EMAIL}`} className="break-all text-[14px] font-light text-[#F2F2F2]/90 lg:break-normal lg:whitespace-nowrap lg:text-[15px]" style={{ fontFamily: font }} onClick={e => e.stopPropagation()}>{EMAIL}</a>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col gap-6 pt-6">
                                    {/* Desktop legal row */}
                                    <div className="hidden lg:inline-flex flex-col items-start">
                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={DESIGN_INSTAGRAM_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#F2F2F2] opacity-95 hover:opacity-100"
                                                aria-label="HACA Design School on Instagram"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Image src="/photos/main/instagram.svg" alt="" width={22} height={22} className="brightness-0 invert" />
                                            </Link>
                                            <Link
                                                href={DESIGN_YOUTUBE_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#F2F2F2] opacity-95 hover:opacity-100"
                                                aria-label="HACA Design School on YouTube"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Image src="/photos/main/mdi_youtube.svg" alt="" width={24} height={24} className="brightness-0 invert" />
                                            </Link>
                                        </div>
                                        <div className="mt-4 flex w-full items-center gap-10 text-[13px] font-light leading-[140%] text-[#F2F2F2]/85" style={{ fontFamily: font }}>
                                            <Link href="/privacy-policy" className="underline-offset-2 hover:underline" onClick={e => e.stopPropagation()}>Privacy Policy</Link>
                                            <Link href="/terms-conditions" className="underline-offset-2 hover:underline" onClick={e => e.stopPropagation()}>Terms and Conditions</Link>
                                            <span className="whitespace-nowrap">© {new Date().getFullYear()} HACA Design School</span>
                                        </div>
                                    </div>

                                    {/* Mobile legal */}
                                    <div className="flex flex-col items-center gap-5 lg:hidden">
                                        <div className="flex items-center justify-center gap-4">
                                            <Link
                                                href={DESIGN_INSTAGRAM_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#F2F2F2] opacity-95 hover:opacity-100"
                                                aria-label="HACA Design School on Instagram"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Image src="/photos/main/instagram.svg" alt="" width={22} height={22} className="brightness-0 invert" />
                                            </Link>
                                            <Link
                                                href={DESIGN_YOUTUBE_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#F2F2F2] opacity-95 hover:opacity-100"
                                                aria-label="HACA Design School on YouTube"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Image src="/photos/main/mdi_youtube.svg" alt="" width={24} height={24} className="brightness-0 invert" />
                                            </Link>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[12px] font-light leading-[140%] text-[#F2F2F2]/85" style={{ fontFamily: font }}>
                                            <span className="w-full whitespace-nowrap">© {new Date().getFullYear()} HACA Design School</span>
                                            <Link href="/privacy-policy" className="underline-offset-2 hover:underline" onClick={e => e.stopPropagation()}>Privacy Policy</Link>
                                            <Link href="/terms-conditions" className="underline-offset-2 hover:underline" onClick={e => e.stopPropagation()}>Terms &amp; Conditions</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile illustration */}
                        <div className="pointer-events-none mt-2 w-full lg:hidden" aria-hidden>
                            <div className="relative mx-auto" style={{ width: "min(335px, 100%)", aspectRatio: "335 / 314.4134216308594" }}>
                                <Image src={FOOTER_ILLUSTRATION_SRC} alt="" fill unoptimized sizes="335px" className="object-contain object-bottom" />
                            </div>
                        </div>

                        {/* Desktop logo */}
                        <Link
                            href="/design-school"
                            className="pointer-events-auto absolute right-[60px] top-[47px] z-10 hidden h-[63.81452941894531px] w-[250px] lg:block lg:shrink-0"
                            aria-label="HACA Design School home"
                                                   >
                            <span className="relative block h-full w-full">
                                <Image src={LOGO_SRC} alt="HACA Design School" fill className="object-contain object-right" priority={false} unoptimized />
                            </span>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
