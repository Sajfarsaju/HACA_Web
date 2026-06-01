import React from "react";

const SWITZER = "'Switzer', var(--font-outfit), sans-serif";
const CARD_RADIUS = "25.76px";

type CardSpec = { bg: string };

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

const CARD_GRADIENTS: CardSpec[] = [
    { bg: "linear-gradient(135deg, #FDE7F3 0%, #E0F2FE 100%)" },
    { bg: "linear-gradient(135deg, #EDE9FE 0%, #DCFCE7 100%)" },
    { bg: "linear-gradient(135deg, #FEF9C3 0%, #DBEAFE 100%)" },
    { bg: "linear-gradient(135deg, #FFE4E6 0%, #E0E7FF 100%)" },
    { bg: "linear-gradient(135deg, #ECFCCB 0%, #E0F2FE 100%)" },
    { bg: "linear-gradient(135deg, #FCE7F3 0%, #FFEDD5 100%)" },
];

function CardRow({
    widths,
    height,
    gap,
    gradients,
}: {
    widths: number[];
    height: number;
    gap: number;
    gradients: CardSpec[];
}) {
    return (
        <div className="flex" style={{ gap }}>
            {widths.map((w, i) => (
                <div
                    key={i}
                    style={{
                        width: w,
                        height,
                        borderRadius: CARD_RADIUS,
                        background: gradients[i]?.bg ?? "#E5E5E5",
                        flexShrink: 0,
                    }}
                />
            ))}
        </div>
    );
}

export function UiUxDesignCalicutPortfolioSection() {
    return (
        <section className="w-full overflow-hidden bg-white">
            {/* ── Heading + paragraph ── */}
            <div className="mx-auto box-border w-full max-w-[1440px] px-[16px] pt-[30px] lg:px-[60px] lg:pt-[40px]">
                <div className="flex flex-col items-center gap-[10px] pb-[30px] lg:gap-[20px] lg:pb-[40px]">
                    <h2
                        className="m-0 text-center text-black"
                        style={{
                            fontFamily: SWITZER,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(35px, 3.2vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Student Work &amp; Portfolio
                    </h2>

                    <p
                        className="m-0 text-center"
                        style={{
                            fontFamily: SWITZER,
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "clamp(16px, 1.4vw, 20px)",
                            lineHeight: "120%",
                            letterSpacing: "0",
                            color: "#000000B2",
                            maxWidth: 872,
                        }}
                    >
                        Students from this UI UX Design Course in Calicut have created real app and
                        website designs that helped them get noticed by recruiters and clients.
                    </p>
                </div>
            </div>

            {/* ── Desktop scroller ── */}
            <div
                className="hidden w-full overflow-x-auto pb-[40px] lg:block [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" } as React.CSSProperties}
            >
                <div
                    className="flex flex-col"
                    style={{ gap: DESKTOP_GAP, paddingLeft: 60, paddingRight: 60, width: "max-content" }}
                >
                    <CardRow
                        widths={DESKTOP_ROW1_WIDTHS}
                        height={DESKTOP_H}
                        gap={DESKTOP_GAP}
                        gradients={CARD_GRADIENTS.slice(0, 3)}
                    />
                    <CardRow
                        widths={DESKTOP_ROW2_WIDTHS}
                        height={DESKTOP_H}
                        gap={DESKTOP_GAP}
                        gradients={CARD_GRADIENTS.slice(3, 6)}
                    />
                </div>
            </div>

            {/* ── Mobile scroller ── */}
            <div
                className="w-full overflow-x-auto pb-[30px] lg:hidden [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" } as React.CSSProperties}
            >
                <div
                    className="flex flex-col"
                    style={{ gap: MOBILE_GAP, paddingLeft: 16, paddingRight: 16, width: "max-content" }}
                >
                    <CardRow
                        widths={MOBILE_ROW1_WIDTHS}
                        height={MOBILE_H}
                        gap={MOBILE_GAP}
                        gradients={CARD_GRADIENTS.slice(0, 3)}
                    />
                    <CardRow
                        widths={MOBILE_ROW2_WIDTHS}
                        height={MOBILE_H}
                        gap={MOBILE_GAP}
                        gradients={CARD_GRADIENTS.slice(3, 6)}
                    />
                </div>
            </div>
        </section>
    );
}
