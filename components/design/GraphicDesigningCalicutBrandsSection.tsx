"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";

const FONT = '"VC Nudge Trial Normal", sans-serif' as const;

const HEADING_ID = "graphic-design-calicut-brands-heading";

type BrandLogo = {
    key: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

const WONDERLA: BrandLogo = {
    key: "wonderla",
    src: "/photos/schools/design/seo/Wonderla Holidays Logo PNG 1.svg",
    alt: "Wonderla Holidays logo",
    width: 200,
    height: 64,
};

const TCS: BrandLogo = {
    key: "tcs",
    src: "/photos/schools/design/seo/Logo 1.svg",
    alt: "Tata Consultancy Services logo",
    width: 160,
    height: 48,
};

const POPEES: BrandLogo = {
    key: "popees",
    src: "/photos/schools/design/seo/id8z9iMnxG_1776856596786 1.svg",
    alt: "Popees baby care logo",
    width: 140,
    height: 52,
};

/** Row 1: Wonderla, TCS, Popees, Wonderla, TCS */
const ROW1_PATTERN: readonly BrandLogo[] = [WONDERLA, TCS, POPEES, WONDERLA, TCS];

/** Row 2: Popees, Wonderla, TCS, Wonderla, TCS */
const ROW2_PATTERN: readonly BrandLogo[] = [POPEES, WONDERLA, TCS, WONDERLA, TCS];

/** Repeat so the strip is wider than most viewports — manual scroll only (no CSS animation). */
function repeatForScrollStrip(pattern: readonly BrandLogo[], copies: number): BrandLogo[] {
    return Array.from({ length: copies }, (_, i) => pattern.map((logo, j) => ({ ...logo, key: `${logo.key}-${i}-${j}` }))).flat();
}

const ROW1_STRIP = repeatForScrollStrip(ROW1_PATTERN, 4);
const ROW2_STRIP = repeatForScrollStrip(ROW2_PATTERN, 4);

export function GraphicDesigningCalicutBrandsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="box-border w-full min-w-0 min-h-0 bg-white pb-6 pt-[clamp(30px,4.17vw,60px)] lg:min-h-[506px] lg:pb-[60px]"
            aria-labelledby={HEADING_ID}
            style={{
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 0.7vw, 20px)",
            }}
        >
            <style>{`
                .gd-calicut-brands-scroll {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .gd-calicut-brands-scroll::-webkit-scrollbar {
                    display: none;
                    width: 0;
                    height: 0;
                }
            `}</style>

            <div className="mx-auto w-full min-w-0 max-w-[1440px]">
                <div className="flex flex-col gap-8 lg:gap-[60px]">
                    <div>
                        <h2 id={HEADING_ID} className="m-0 text-left text-[#000000]">
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "35px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                The Brands They&apos;ve Worked With
                            </span>
                            <span
                                className="hidden lg:inline"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "45px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                The Brands They&apos;ve Worked With
                            </span>
                        </h2>

                        <p className="sr-only m-0 mt-[16px]">
                            Partner brands include Wonderla Holidays, Tata Consultancy Services (TCS), and Popees baby care.
                        </p>
                    </div>

                    <BrandScrollRow sectionRef={sectionRef} items={ROW1_STRIP} rowKey="1" />
                    <BrandScrollRow sectionRef={sectionRef} items={ROW2_STRIP} rowKey="2" />
                </div>
            </div>
        </section>
    );
}

function BrandScrollRow({
    sectionRef,
    items,
    rowKey,
}: {
    sectionRef: RefObject<HTMLElement | null>;
    items: readonly BrandLogo[];
    rowKey: string;
}) {
    const scrollRef = useRef<HTMLUListElement>(null);
    const [shift, setShift] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current
                ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft)
                : 60;
            setShift(Math.min(el.scrollLeft, Number.isFinite(pad) ? pad : 60));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, [sectionRef]);

    return (
        <div
            className="w-full min-w-0"
            style={{
                marginLeft: `-${shift}px`,
                width: `calc(100% + ${shift}px)`,
                transition: "margin-left 0.2s ease-out, width 0.2s ease-out",
            }}
        >
            <div className="relative w-full">
                <ul
                    ref={scrollRef}
                    className="gd-calicut-brands-scroll m-0 flex list-none flex-row items-center gap-[60px] overflow-x-auto overflow-y-hidden scroll-smooth px-0"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        marginRight: "-20px",
                        paddingRight: "20px",
                    }}
                    aria-label={`Brand logos row ${rowKey}`}
                >
                    {items.map((logo) => (
                        <li key={`${rowKey}-${logo.key}`} className="shrink-0">
                            <div className="flex h-[clamp(44px,10vw,72px)] w-max items-center justify-center">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className="h-full w-auto max-w-[min(42vw,260px)] object-contain object-center lg:max-w-[min(18vw,280px)]"
                                    sizes="(max-width: 1024px) 42vw, 18vw"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
