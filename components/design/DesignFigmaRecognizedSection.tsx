"use client";

import Image from "next/image";
import { ALT } from "@/lib/image-alt-text";
import { useEffect, useState } from "react";

const BLOCK_IMAGES = [
    "/photos/schools/design/Blocks.svg",
    "/photos/schools/design/Blocks%20(1).svg",
    "/photos/schools/design/Blocks%20(2).svg",
    "/photos/schools/design/Blocks%20(3).svg",
] as const;

const FIGMA_ICON = "/photos/schools/design/skill-icons_figma-dark.svg";
const POINTER_ICON = "/photos/schools/design/lsicon_pointer-filled.svg";

const FONT_BODY = '"VC Nudge Trial Normal", sans-serif';
const FONT_FIGMA = '"IvyPresto Display", serif';

const CORNER_SQUARES = {
    tl: "#F24E1E",
    tr: "#1ABCFE",
    bl: "#A259FF",
    br: "#0ACF83",
} as const;

// Two-layer (A/B) state per tile — enables flash-free crossfade
type TileState = {
    layers: [string, string];
    active: 0 | 1;
};

function shuffleDifferent(srcs: string[]): string[] {
    const next = [...srcs];
    for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
    }
    return next.every((v, i) => v === srcs[i])
        ? [srcs[1], srcs[2], srcs[3], srcs[0]]
        : next;
}

// Stagger delay (ms) per tile index for a premium cascading feel
const TILE_DELAY = [0, 120, 60, 180] as const;

export function DesignFigmaRecognizedSection() {
    const prefersReducedMotion = usePrefersReducedMotion();

    const [tiles, setTiles] = useState<TileState[]>(() =>
        BLOCK_IMAGES.map((src) => ({
            layers: [src, src] as [string, string],
            active: 0 as 0 | 1,
        }))
    );

    useEffect(() => {
        if (prefersReducedMotion) return;

        const INTERVAL_MS = 4500;

        const doShuffle = () => {
            setTiles((prev) => {
                const currentSrcs = prev.map((t) => t.layers[t.active]);
                const newSrcs = shuffleDifferent(currentSrcs);
                return prev.map((tile, i) => {
                    if (newSrcs[i] === tile.layers[tile.active]) return tile;
                    const next = (1 - tile.active) as 0 | 1;
                    const layers = [...tile.layers] as [string, string];
                    layers[next] = newSrcs[i];
                    return { layers, active: next };
                });
            });
        };

        const id = setInterval(doShuffle, INTERVAL_MS);
        return () => clearInterval(id);
    }, [prefersReducedMotion]);

    return (
        <section
            className="
                w-full bg-[#FCFCFC] px-0
                max-lg:relative max-lg:w-screen max-lg:max-w-none max-lg:ml-[calc(50%-50vw)] max-lg:mr-[calc(50%-50vw)] max-lg:overflow-x-clip
            "
            aria-labelledby="design-figma-recognized-heading"
        >
            <div
                className="
                    mx-auto flex h-auto w-full max-w-[1440px] min-h-0 flex-col items-stretch gap-0
                    lg:h-[504.2643127441406px] lg:flex-row lg:gap-0 lg:mx-0 lg:max-w-none
                "
            >
                {/* First container: 2×2 grid — gap-0, cover + clip so tiles meet flush */}
                <div
                    className="
                        mx-0 grid aspect-square w-full max-w-none shrink-0 grid-cols-2 grid-rows-2 gap-0
                        lg:mx-0 lg:aspect-auto lg:h-[504.2643127441406px] lg:w-[504.2643127441406px] lg:max-w-none
                    "
                >
                    {tiles.map((tile, idx) => (
                        <div
                            key={idx}
                            className={[
                                "relative min-h-0 min-w-0 h-full w-full overflow-hidden lg:h-[252.1321563720703px] lg:w-[252.1321563720703px]",
                                idx % 2 === 1 ? "-ml-px" : "",
                                idx >= 2 ? "-mt-px" : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            {([0, 1] as const).map((layerIdx) => (
                                <Image
                                    key={layerIdx}
                                    src={tile.layers[layerIdx]}
                                    alt={ALT.figmaShowcase}
                                    fill
                                    className="object-cover object-center"
                                    style={{
                                        opacity: tile.active === layerIdx ? 1 : 0,
                                        transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)",
                                        transitionDelay: `${TILE_DELAY[idx]}ms`,
                                    }}
                                    sizes="(min-width: 1024px) 252px, 50vw"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Second container */}
                <div
                    className="
                        mx-0 -mt-px flex h-[260px] w-full max-w-none shrink-0 flex-col items-center justify-center gap-5 bg-black
                        px-5 py-5
                        lg:mx-0 lg:mt-0 lg:-ml-px lg:h-[503.8576965332031px] lg:flex-1 lg:min-w-0 lg:max-w-none lg:gap-[10px] lg:p-[10px] lg:items-center lg:justify-center
                    "
                >
                    {/* Inner wrapper ensures true horizontal centering in lg */}
                    <div className="flex w-full flex-col items-center justify-center gap-5 lg:h-full lg:gap-[10px]">
                        <div className="relative h-[60px] w-[60px] shrink-0 lg:h-[119.96611785888672px] lg:w-[119.96611785888672px]">
                            <Image src={FIGMA_ICON} alt="Figma" fill className="object-contain" />
                        </div>

                        <div
                            className="
                                group/figmaBox relative flex w-[clamp(280px,86vw,323px)] shrink-0 items-center justify-center
                                border-[0.8px] border-solid border-white
                                h-[clamp(70px,21vw,81px)] px-3
                                transition-[transform,border-color,box-shadow] duration-300 ease-out
                                lg:h-[clamp(120px,14vw,146px)] lg:w-[clamp(420px,40vw,527px)] lg:border-2 lg:px-6
                                lg:hover:scale-[1.015] lg:hover:-translate-y-[2px] lg:hover:border-white/90
                                lg:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_18px_55px_rgba(26,188,254,0.20)]
                                lg:focus-within:scale-[1.015] lg:focus-within:-translate-y-[2px] lg:focus-within:border-white/90
                                lg:focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_18px_55px_rgba(26,188,254,0.20)]
                            "
                            tabIndex={0}
                        >
                        <CornersOut size={8.015083312988281} mobileOnly />
                        <CornersOut size={20} desktopOnly />
                            <p
                                id="design-figma-recognized-heading"
                                className="relative z-10 m-0 max-w-[min(100%,479.8644714355469px)] text-center text-[clamp(20px,6.5vw,26px)] leading-[120%] text-white lg:text-[clamp(30px,3vw,39.99px)]"
                                style={{
                                    fontFamily: FONT_BODY,
                                    fontWeight: 500,
                                    letterSpacing: "0",
                                }}
                            >
                                Recognized by{" "}
                                <span
                                    style={{
                                        fontFamily: FONT_FIGMA,
                                        fontWeight: 300,
                                        fontStyle: "italic",
                                    }}
                                >
                                    Figma
                                </span>{" "}
                                as
                                <br />
                                a Trusted Design School
                                {/* Pointer positioned relative to the text (not the container) */}
                                <span
                                    className="
                                        pointer-events-none absolute z-30 select-none
                                        left-[190px] bottom-[-28px]
                                        lg:left-[330px] lg:bottom-[-56px]
                                    "
                                    aria-hidden
                                >
                                    <span
                                        className="relative block lg:hidden"
                                        style={{
                                            width: 32,
                                            height: 32,
                                            transform: "rotate(12.65deg)",
                                            transformOrigin: "center",
                                        }}
                                    >
                                        <Image src={POINTER_ICON} alt="" aria-hidden="true" fill className="object-contain" />
                                    </span>
                                    <span
                                        className="relative hidden lg:block"
                                        style={{ width: 59.999999006541884, height: 59.999999006541884 }}
                                    >
                                        <Image
                                            src={POINTER_ICON}
                                            alt="" aria-hidden="true"
                                            fill
                                            className="
                                                object-contain transition-transform duration-300 ease-out
                                                lg:group-hover/figmaBox:translate-x-[-6px] lg:group-hover/figmaBox:translate-y-[6px]
                                                lg:group-focus-within/figmaBox:translate-x-[-6px] lg:group-focus-within/figmaBox:translate-y-[6px]
                                            "
                                        />
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CornersOut({ size, mobileOnly, desktopOnly }: { size: number; mobileOnly?: boolean; desktopOnly?: boolean }) {
    return (
        <span className={mobileOnly ? "contents lg:hidden" : desktopOnly ? "hidden lg:contents" : "contents"}>
            <Corners size={size} />
        </span>
    );
}

function Corners({ size }: { size: number }) {
    // Place each square so its inner corner touches the border corner.
    // (e.g. top-left square's bottom-right corner touches the border line)
    const o = -size;
    return (
        <>
            <span
                className="pointer-events-none absolute z-20"
                style={{ width: size, height: size, background: CORNER_SQUARES.tl, top: o, left: o }}
                aria-hidden
            />
            <span
                className="pointer-events-none absolute z-20"
                style={{ width: size, height: size, background: CORNER_SQUARES.tr, top: o, right: o }}
                aria-hidden
            />
            <span
                className="pointer-events-none absolute z-20"
                style={{ width: size, height: size, background: CORNER_SQUARES.bl, bottom: o, left: o }}
                aria-hidden
            />
            <span
                className="pointer-events-none absolute z-20"
                style={{ width: size, height: size, background: CORNER_SQUARES.br, bottom: o, right: o }}
                aria-hidden
            />
        </>
    );
}

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setReduced(mq.matches);
        onChange();
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
    }, []);

    return reduced;
}
