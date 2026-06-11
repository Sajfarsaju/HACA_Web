"use client"

import Image from "next/image"
import { useEffect, useState, type ReactNode } from "react"
import { motion, type TargetAndTransition } from "framer-motion"

import { DesignSplitArrowCta } from "./DesignSplitArrowCta"
import { ENQUIRE_URL } from "@/lib/enquire"

// ── Sequential timing ─────────────────────────────────────────────────────────
const ANIM_DUR  = 1.0   // each effect plays for 1 s
const SEQ_GAP   = 0.5   // pause between each icon's trigger
const COOLDOWN  = 2.5   // rest after all 4 before the loop restarts

// total cycle = 4×ANIM_DUR + 3×SEQ_GAP + COOLDOWN = 8 s
// repeatDelay  = cycle − ANIM_DUR = 7 s  (so the next fire aligns perfectly)
const RPT_DELAY = 3 * (ANIM_DUR + SEQ_GAP) + COOLDOWN   // 7.0 s
const seqDelay  = (idx: number) => idx * (ANIM_DUR + SEQ_GAP)

const EASE_SPRING = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ── Per-decoration animations — one-by-one sequential ────────────────────────
// 0 – Concepts  : opacity fade out & in  (ghostly, elegant)
// 1 – Tools     : scale enlarge then shrink back  (feels alive, elastic)
// 2 – Talent    : handled by ColorCyclingDeco (state-driven, no flash-back)
// 3 – End       : full 360° smooth spin  (satisfying, polished)
const DECO_ANIM: Array<{ animate: TargetAndTransition; transition: object }> = [
    {
        animate: { opacity: [1, 0.08, 1] },
        transition: {
            duration: ANIM_DUR, ease: "easeInOut",
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: seqDelay(0),
        },
    },
    {
        animate: { scale: [1, 1.22, 1] },
        transition: {
            duration: ANIM_DUR, ease: EASE_SPRING,
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: seqDelay(1),
        },
    },
    { animate: {}, transition: {} }, // placeholder — slot 2 uses ColorCyclingDeco
    {
        animate: { rotate: [0, 360] },
        transition: {
            duration: ANIM_DUR, ease: EASE_SPRING,
            repeat: Infinity, repeatDelay: RPT_DELAY, delay: seqDelay(3),
        },
    },
]

// ── Color-cycling constants ───────────────────────────────────────────────────
// One new hue per full cycle; no flash-back to original within the same lap
const TALENT_FILTERS = [
    "hue-rotate(0deg) saturate(1)",
    "hue-rotate(60deg) saturate(2.2)",
    "hue-rotate(150deg) saturate(2.2)",
    "hue-rotate(220deg) saturate(2.2)",
    "hue-rotate(280deg) saturate(2.2)",
    "hue-rotate(330deg) saturate(2.2)",
]
const CYCLE_MS         = (4 * ANIM_DUR + 3 * SEQ_GAP + COOLDOWN) * 1000  // 8 000 ms
const TALENT_START_MS  = seqDelay(2) * 1000                                // 3 000 ms

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
                            decoNode={<ColorCyclingDeco decoSrc={decoTalent} wVal={desktopDecoSize} hVal={desktopDecoSize} />}
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
                            <ColorCyclingDeco decoSrc={decoTalent} wVal={mobileDecoSize} hVal={mobileDecoSize} />
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

function ColorCyclingDeco({ decoSrc, wVal, hVal }: { decoSrc: string; wVal: string; hVal: string }) {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        let i = 0
        let intervalId: ReturnType<typeof setInterval>

        const timerId = setTimeout(() => {
            i = (i + 1) % TALENT_FILTERS.length
            setIdx(i)
            intervalId = setInterval(() => {
                i = (i + 1) % TALENT_FILTERS.length
                setIdx(i)
            }, CYCLE_MS)
        }, TALENT_START_MS)

        return () => {
            clearTimeout(timerId)
            clearInterval(intervalId)
        }
    }, [])

    return (
        <motion.span
            className="relative shrink-0 inline-block"
            style={{ width: wVal, height: hVal, zIndex: 10 }}
            animate={{ filter: TALENT_FILTERS[idx] }}
            transition={{ duration: ANIM_DUR, ease: "easeInOut" }}
            aria-hidden="true"
        >
            <Image src={decoSrc} alt="" aria-hidden="true" fill className="object-contain" />
        </motion.span>
    )
}

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
    label, font, textSize, decoSrc, decoW, decoH, gap, decoIdx, decoNode,
}: {
    label: string; font: string; textSize: string
    decoSrc: string; decoW: string; decoH: string; gap: string
    decoIdx: number; decoNode?: ReactNode
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
            {decoNode ?? (
                <motion.span
                    className="relative shrink-0 inline-block"
                    style={{ width: decoW, height: decoH, zIndex: 10 }}
                    animate={anim.animate}
                    transition={anim.transition}
                    aria-hidden="true"
                >
                    <Image src={decoSrc} alt="" aria-hidden="true" fill className="object-contain" />
                </motion.span>
            )}
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
