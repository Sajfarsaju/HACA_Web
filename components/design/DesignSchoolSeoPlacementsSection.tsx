import React from "react";
import { PlacementCardMedia } from "@/components/success-story/PlacementCardMedia";
import {
    fetchDesignSchoolPlacements,
    type DesignPlacementItem,
} from "@/lib/design-placements";

const FONT = "'Switzer', var(--font-outfit), sans-serif";

const PLACEHOLDER_COUNT = 6;

const DESKTOP_CARD_W = 409.61;
const DESKTOP_CARD_H = 464.62;
const MOBILE_CARD_W = 300;
const MOBILE_CARD_H = 340.29;
const CARD_GAP = 8.46;

function buildCards(fetched: DesignPlacementItem[]): (DesignPlacementItem | null)[] {
    if (fetched.length > 0) return fetched;
    return Array.from({ length: PLACEHOLDER_COUNT }, () => null);
}

function PlacementCard({
    card,
    width,
    height,
    borderRadius,
}: {
    card: DesignPlacementItem | null;
    width: number;
    height: number;
    borderRadius: number;
}) {
    return (
        <div
            style={{
                width,
                height,
                flexShrink: 0,
                borderRadius,
                overflow: "hidden",
                backgroundColor: "#D9D9D9",
                position: "relative",
            }}
            aria-label={card?.title ?? "Design school placement"}
            aria-hidden={!card}
        >
            <PlacementCardMedia
                imageUrl={card?.imageUrl ?? null}
                alt={card?.title ?? "Design school placement student"}
                className="absolute inset-0 h-full w-full"
            />
        </div>
    );
}

export async function DesignSchoolSeoPlacementsSection() {
    const fetched = await fetchDesignSchoolPlacements();
    const cards = buildCards(fetched);

    return (
        <section className="w-full bg-white">
            <div
                className="mx-auto w-full max-w-[1440px] box-border flex flex-col lg:py-[40px] py-[40px]"
                style={{ gap: "clamp(30px, 3vw, 40px)" }}
            >
                <h2
                    className="m-0 lg:px-[60px] px-[16px]"
                    style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(35px, 3.5vw, 45px)",
                        lineHeight: "120%",
                        letterSpacing: "-0.02em",
                        color: "#000000",
                        maxWidth: "calc(631px + 120px)",
                    }}
                >
                    Students from Design School Now Working in Creative Roles
                </h2>

                <div
                    className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden lg:pl-[60px] pl-[16px]"
                    style={{ scrollbarWidth: "none" } as React.CSSProperties}
                >
                    <div
                        className="hidden lg:flex"
                        style={{ gap: CARD_GAP, width: "max-content" }}
                    >
                        {cards.map((card, i) => (
                            <PlacementCard
                                key={card?._id ?? `placeholder-desktop-${i}`}
                                card={card}
                                width={DESKTOP_CARD_W}
                                height={DESKTOP_CARD_H}
                                borderRadius={16}
                            />
                        ))}
                    </div>

                    <div
                        className="flex lg:hidden"
                        style={{ gap: CARD_GAP, width: "max-content" }}
                    >
                        {cards.map((card, i) => (
                            <PlacementCard
                                key={card?._id ?? `placeholder-mobile-${i}`}
                                card={card}
                                width={MOBILE_CARD_W}
                                height={MOBILE_CARD_H}
                                borderRadius={12}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
