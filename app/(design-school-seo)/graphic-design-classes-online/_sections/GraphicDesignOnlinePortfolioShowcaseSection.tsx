import Image from "next/image";
import { ALT } from "@/lib/image-alt-text";

const FONT = '"VC Nudge Trial Normal", sans-serif' as const;
const CARD_RADIUS = "25.76px";

const DESKTOP_H = 340;
const MOBILE_H = 177;
const DESKTOP_GAP = 11;
const MOBILE_GAP = 6.54;

// Desktop card widths from Figma
const DESKTOP_ROW1_WIDTHS = [433, 589, 493];
const DESKTOP_ROW2_WIDTHS = [510, 510, 589];

// Mobile card widths (~0.52× desktop, matching 177/340 height ratio)
const MOBILE_ROW1_WIDTHS = [225, 306, 256];
const MOBILE_ROW2_WIDTHS = [265, 265, 306];

const PORTFOLIO_IMAGES = [
    "/photos/schools/design/program 1 photo.webp",
    "/photos/schools/design/program 2 photo.webp",
    "/photos/schools/design/program 3 photo.webp",
    "/photos/schools/design/program 4 photo.webp",
    "/photos/schools/design/program 5 photo.webp",
    "/photos/schools/design/program 1 photo.webp",
] as const;

function CardRow({
    widths,
    height,
    gap,
    images,
}: {
    widths: number[];
    height: number;
    gap: number;
    images: readonly string[];
}) {
    return (
        <div className="flex" style={{ gap }}>
            {widths.map((w, i) => (
                <div
                    key={i}
                    className="relative overflow-hidden"
                    style={{
                        width: w,
                        height,
                        borderRadius: CARD_RADIUS,
                        flexShrink: 0,
                        background: "#E5E5E5",
                    }}
                >
                    {images[i] ? (
                        <Image
                            src={images[i]}
                            alt={ALT.studentPortfolio}
                            fill
                            className="object-cover object-center"
                            sizes="(min-width: 1024px) 600px, 320px"
                        />
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export function GraphicDesignOnlinePortfolioShowcaseSection() {
    return (
        <section className="w-full overflow-hidden bg-white" aria-labelledby="gd-online-portfolio-showcase-heading">
            {/* Heading + paragraph */}
            <div className="mx-auto box-border w-full max-w-[1440px] px-[16px] pt-[30px] lg:px-[60px] lg:pt-[40px]">
                <div className="flex flex-col items-center gap-[10px] pb-[30px] lg:gap-[20px] lg:pb-[40px]">
                    <h2
                        id="gd-online-portfolio-showcase-heading"
                        className="m-0 text-center text-black"
                        style={{
                            fontFamily: FONT,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(35px, 3.2vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Student Work &amp; Portfolio Showcase
                    </h2>

                    <p
                        className="m-0 text-center"
                        style={{
                            fontFamily: FONT,
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "clamp(16px, 1.4vw, 20px)",
                            lineHeight: "120%",
                            letterSpacing: "0",
                            color: "#000000B2",
                            maxWidth: 872,
                        }}
                    >
                        Students from our best online graphic design program create projects that reflect practical
                        skills and creative growth.
                    </p>
                </div>
            </div>

            {/* Desktop scroller */}
            <div
                className="hidden w-full overflow-x-auto pb-[40px] lg:block [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
            >
                <div
                    className="flex flex-col"
                    style={{ gap: DESKTOP_GAP, paddingLeft: 60, paddingRight: 60, width: "max-content" }}
                >
                    <CardRow
                        widths={DESKTOP_ROW1_WIDTHS}
                        height={DESKTOP_H}
                        gap={DESKTOP_GAP}
                        images={PORTFOLIO_IMAGES.slice(0, 3)}
                    />
                    <CardRow
                        widths={DESKTOP_ROW2_WIDTHS}
                        height={DESKTOP_H}
                        gap={DESKTOP_GAP}
                        images={PORTFOLIO_IMAGES.slice(3, 6)}
                    />
                </div>
            </div>

            {/* Mobile scroller */}
            <div
                className="w-full overflow-x-auto pb-[30px] lg:hidden [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
            >
                <div
                    className="flex flex-col"
                    style={{ gap: MOBILE_GAP, paddingLeft: 16, paddingRight: 16, width: "max-content" }}
                >
                    <CardRow
                        widths={MOBILE_ROW1_WIDTHS}
                        height={MOBILE_H}
                        gap={MOBILE_GAP}
                        images={PORTFOLIO_IMAGES.slice(0, 3)}
                    />
                    <CardRow
                        widths={MOBILE_ROW2_WIDTHS}
                        height={MOBILE_H}
                        gap={MOBILE_GAP}
                        images={PORTFOLIO_IMAGES.slice(3, 6)}
                    />
                </div>
            </div>
        </section>
    );
}
