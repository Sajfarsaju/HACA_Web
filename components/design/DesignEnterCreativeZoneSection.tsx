"use client"

import Image from "next/image"
import { motion, type TargetAndTransition } from "framer-motion"

import { DesignSplitArrowCta } from "./DesignSplitArrowCta"
import { ENQUIRE_URL } from "@/lib/enquire"

// ── Timing matches DesignWhyCreativitySection exactly ─────────────────────────
const ANIM_DUR  = 0.7
const COOLDOWN  = 1
const N_DECOS   = 4
const RPT_DELAY = (N_DECOS - 1) * ANIM_DUR + COOLDOWN   // 3.1 s

const decoDelay = (idx: number) =>
    idx === 0 ? 0 : COOLDOWN + idx * ANIM_DUR

// ── Per-decoration animations ─────────────────────────────────────────────────
// 0 – Concepts  : color shift (hue-rotate)
// 1 – Tools     : fill + stroke (scale + saturate + hue)
// 2 – Talent    : color shift (opposite hue direction)
// 3 – End       : rotate 180° and back
const DECO_ANIM: Array<{ animate: TargetAndTransition; transition: object }> = [
    {
        animate: {
            filter: ["brightness(1)", "brightness(0)", "brightness(1)"],
        },
        transition: {
            duration: ANIM_DUR, ease: "easeInOut",
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: decoDelay(0),
        },
    },
    {
        animate: {
            filter: [
                "hue-rotate(0deg) saturate(1)",
                "hue-rotate(140deg) saturate(4)",
                "hue-rotate(0deg) saturate(1)",
            ],
        },
        transition: {
            duration: ANIM_DUR, ease: "easeInOut",
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: decoDelay(1),
        },
    },
    {
        animate: {
            filter: [
                "hue-rotate(0deg) brightness(1)",
                "hue-rotate(-140deg) brightness(1.2)",
                "hue-rotate(0deg) brightness(1)",
            ],
        },
        transition: {
            duration: ANIM_DUR, ease: "easeInOut",
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: decoDelay(2),
        },
    },
    {
        animate: {
            scaleX: [1, -1, -1, 1],
        },
        transition: {
            duration: ANIM_DUR, ease: "easeInOut",
            times: [0, 0.42, 0.58, 1],
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: decoDelay(3),
        },
    },
]

export function DesignEnterCreativeZoneSection() {
    const font = '"VC Nudge Trial Normal", sans-serif'

    const decoConcepts = "/photos/schools/design/Group (1).svg"
    const decoTools    = "/photos/schools/design/Ellipse.svg"
    const decoTalent   = "/photos/schools/design/Exclude.svg"
    const decoEnd      = "/photos/schools/design/Group (2).svg"
    const mobileTextSize = "32px"
    const mobileDecoSize = "32px"
    const desktopFontSize = "clamp(46px, 4.6vw, 66px)"
    const desktopDecoSize = "clamp(53px, 5.35vw, 76.75px)"
    const desktopEndDecoW = "clamp(78px, 7.82vw, 112.56px)"
    const desktopGap      = "clamp(9px, 0.95vw, 13.7px)"

    return (
        <section
            className="w-full bg-[#FCFCFC]"
            style={{
                paddingTop:    "clamp(40px, 8.6vw, 124px)",
                paddingBottom: "clamp(40px, 6.95vw, 100px)",
                paddingLeft:   "clamp(20px, 0.7vw, 10px)",
                paddingRight:  "clamp(20px, 0.7vw, 10px)",
            }}
        >
            <div
                className="w-full max-w-[1440px] mx-auto"
            >
                {/* ── Desktop ── */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-[21.92px] w-full">
                    {/* Line 1 */}
                    <div className="flex flex-nowrap items-center justify-center w-full" style={{ gap: desktopGap }}>
                        <WordWithDeco
                            label="Concepts"
                            font={font}
                            textSize={desktopFontSize}
                            decoSrc={decoConcepts}
                            decoW={desktopDecoSize}
                            decoH={desktopDecoSize}
                            gap={desktopGap}
                            decoIdx={0}
                        />
                        <WordWithDeco
                            label="Tools"
                            font={font}
                            textSize={desktopFontSize}
                            decoSrc={decoTools}
                            decoW={desktopDecoSize}
                            decoH={desktopDecoSize}
                            gap={desktopGap}
                            decoIdx={1}
                        />
                        <WordWithDeco
                            label="Talent"
                            font={font}
                            textSize={desktopFontSize}
                            decoSrc={decoTalent}
                            decoW={desktopDecoSize}
                            decoH={desktopDecoSize}
                            gap={desktopGap}
                            decoIdx={2}
                        />
                        <span
                            className="text-[#0A0A0A] whitespace-nowrap"
                            style={{ fontFamily: font, fontWeight: 500, fontSize: desktopFontSize, lineHeight: "120%", letterSpacing: 0 }}
                        >
                            Align here.
                        </span>
                    </div>

                    {/* Line 2 */}
                    <div className="flex items-center justify-center" style={{ gap: desktopGap }}>
                        <span
                            className="text-[#0A0A0A] whitespace-nowrap"
                            style={{ fontFamily: font, fontWeight: 500, fontSize: desktopFontSize, lineHeight: "120%", letterSpacing: 0 }}
                        >
                            Enter the Creative Zone.
                        </span>
                        <InlineDeco
                            decoSrc={decoEnd}
                            w={desktopEndDecoW}
                            h={desktopDecoSize}
                            decoIdx={3}
                        />
                    </div>

                    {/* Line 3 button */}
                    <ZoneButton font={font} />
                </div>

                {/* ── Mobile ── */}
                <div className="lg:hidden w-full flex flex-col items-center" style={{ gap: "30px" }}>
                    <div className="w-full max-w-[335px] flex flex-col items-center gap-[10px]">
                        {/* Mobile line 1 */}
                        <div className="w-full flex items-center justify-center gap-[10px]">
                            <div className="flex items-center gap-[5.71px]">
                                <span
                                    className="text-[#0A0A0A]"
                                    style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%", letterSpacing: 0 }}
                                >
                                    Concepts
                                </span>
                                <InlineDeco
                                    decoSrc={decoConcepts}
                                    size={mobileDecoSize}
                                    decoIdx={0}
                                />
                            </div>
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%", letterSpacing: 0 }}
                            >
                                Tools
                            </span>
                            <InlineDeco
                                decoSrc={decoTools}
                                size={mobileDecoSize}
                                decoIdx={1}
                            />
                        </div>

                        {/* Mobile line 2 */}
                        <div className="w-full flex items-center justify-center gap-[10px]">
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%", letterSpacing: 0 }}
                            >
                                Talent
                            </span>
                            <InlineDeco
                                decoSrc={decoTalent}
                                size={mobileDecoSize}
                                decoIdx={2}
                            />
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%", letterSpacing: 0 }}
                            >
                                Align here.
                            </span>
                        </div>

                        {/* Mobile line 3 */}
                        <div className="w-full flex items-center justify-center">
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%", letterSpacing: 0 }}
                            >
                                Enter the
                            </span>
                        </div>

                        {/* Mobile line 4 */}
                        <div className="w-full flex items-center justify-center gap-[5.71px]">
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%", letterSpacing: 0 }}
                            >
                                Creative Zone.
                            </span>
                            <InlineDeco
                                decoSrc={decoEnd}
                                w={46.96}
                                h={32}
                                decoIdx={3}
                            />
                        </div>
                    </div>

                    {/* Mobile button */}
                    <ZoneButton font={font} isMobile />
                </div>
            </div>
        </section>
    )
}

/* ─────────────────────────────────────────────────────────── */
/*  Sub-components                                             */
/* ─────────────────────────────────────────────────────────── */

function InlineDeco({
    decoSrc, w, h, size, decoIdx,
}: {
    decoSrc: string; w?: number | string; h?: number | string; size?: string; decoIdx: number
}) {
    const anim = DECO_ANIM[decoIdx]
    const wVal = size ?? (typeof w === "string" ? w : `${w}px`)
    const hVal = size ?? (typeof h === "string" ? h : `${h}px`)
    return (
        <motion.span
            className="relative shrink-0 inline-block"
            style={{ width: wVal, height: hVal, zIndex: 10 }}
            animate={anim.animate}
            transition={anim.transition}
            aria-hidden="true"
        >
            <Image src={decoSrc} alt="" aria-hidden="true" fill className="object-contain" />
        </motion.span>
    )
}

function WordWithDeco({
    label, font, textSize, decoSrc, decoW, decoH, gap, decoIdx,
}: {
    label: string; font: string; textSize: string
    decoSrc: string; decoW: string; decoH: string; gap: string
    decoIdx: number
}) {
    const anim = DECO_ANIM[decoIdx]
    return (
        <span className="inline-flex items-center whitespace-nowrap" style={{ gap }}>
            <span
                className="text-[#0A0A0A]"
                style={{ fontFamily: font, fontWeight: 500, fontSize: textSize, lineHeight: "120%", letterSpacing: 0 }}
            >
                {label}
            </span>
            <motion.span
                className="relative shrink-0 inline-block"
                style={{ width: decoW, height: decoH, zIndex: 10 }}
                animate={anim.animate}
                transition={anim.transition}
                aria-hidden="true"
            >
                <Image src={decoSrc} alt="" aria-hidden="true" fill className="object-contain" />
            </motion.span>
        </span>
    )
}

function ZoneButton({ font, isMobile }: { font: string; isMobile?: boolean }) {
    const wrapW  = isMobile ? 207.83334350585938  : 246.2222137451172
    const wrapH  = isMobile ? 50.19047546386719   : 60.5555534362793
    const pillW  = isMobile ? 155.85714721679688  : 180.66665649414062
    const pillH  = wrapH
    const circle = isMobile ? 47.57143020629883   : 60
    const gap    = isMobile ? 4.4                 : 5.56
    const borderW  = isMobile ? 0.88  : 1.11
    const radius   = isMobile ? 39.64 : 50
    const padY     = isMobile ? 14.1  : 17.78
    const padX     = isMobile ? 26.43 : 33.33
    const fontSize = isMobile ? 16    : 17.78
    const arrowBox = isMobile ? 26    : 33.33

    return (
        <div className="flex w-full items-center justify-center">
            <DesignSplitArrowCta
                href={ENQUIRE_URL}
                label="Enter the Zone"
                ariaLabel="Enter the Zone"
                fontFamily={font}
                arrowPreset={isMobile ? "mobile36" : "desktop"}
                wrapperStyle={{ width: `${wrapW}px`, height: `${wrapH}px` }}
                dims={{
                    gapPx: gap,
                    pillWidth: pillW,
                    pillHeight: pillH,
                    borderWidth: borderW,
                    radiusPx: radius,
                    padX,
                    padY,
                    fontSizePx: fontSize,
                    circlePx: circle,
                    arrowSvgPx: arrowBox,
                }}
            />
        </div>
    )
}
