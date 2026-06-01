import React from "react";
import Image from "next/image";

const FONT = "'Switzer', var(--font-outfit), sans-serif";

const DESIGN_SCHOOL_NAME = "Design School";

const PLACEHOLDER_IMAGE = "/photos/schools/design/placements/Rectangle%2042.png";
const PLACEHOLDER_COUNT = 6;

const DESKTOP_CARD_W = 409.61;
const DESKTOP_CARD_H = 464.62;
const MOBILE_CARD_W = 300;
const MOBILE_CARD_H = 340.29;
const CARD_GAP = 8.46;

type PlacementCard = {
    _id: string;
    title: string | null;
    imageUrl: string;
    cloudinaryPublicId: string;
    createdAt: string | null;
};

async function fetchDesignSchoolCards(): Promise<PlacementCard[]> {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/placements/grouped`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return [];
        const data = await res.json();
        const group = (data.groups as { schoolName: string; items: PlacementCard[] }[])?.find(
            (g) => g.schoolName === DESIGN_SCHOOL_NAME
        );
        return group?.items ?? [];
    } catch {
        return [];
    }
}

export async function UiUxDesignCalicutPlacementsSection() {
    const fetched = await fetchDesignSchoolCards();

    // Fall back to placeholder images if no cards have been uploaded yet
    const cards: { _id: string; imageUrl: string; title: string | null }[] =
        fetched.length > 0
            ? fetched
            : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
                  _id: `placeholder-${i}`,
                  imageUrl: PLACEHOLDER_IMAGE,
                  title: null,
              }));

    return (
        <section className="w-full bg-white">
            <div
                className="mx-auto w-full max-w-[1440px] box-border flex flex-col lg:py-[40px] py-[40px]"
                style={{ gap: "clamp(30px, 3vw, 40px)" }}
            >
                {/* Heading — padded left+right */}
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

                {/* Horizontally scrollable cards — left padding only, flush right */}
                <div
                    className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden lg:pl-[60px] pl-[16px]"
                    style={{ scrollbarWidth: "none" } as React.CSSProperties}
                >
                    {/* Desktop cards */}
                    <div
                        className="hidden lg:flex"
                        style={{ gap: CARD_GAP, width: "max-content" }}
                    >
                        {cards.map((card) => (
                            <div
                                key={card._id}
                                style={{
                                    width: DESKTOP_CARD_W,
                                    height: DESKTOP_CARD_H,
                                    flexShrink: 0,
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    backgroundColor: "#D9D9D9",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={card.imageUrl}
                                    alt={card.title ?? "Design school placement student"}
                                    fill
                                    className="object-cover"
                                    sizes={`${Math.round(DESKTOP_CARD_W)}px`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile cards */}
                    <div
                        className="flex lg:hidden"
                        style={{ gap: CARD_GAP, width: "max-content" }}
                    >
                        {cards.map((card) => (
                            <div
                                key={card._id}
                                style={{
                                    width: MOBILE_CARD_W,
                                    height: MOBILE_CARD_H,
                                    flexShrink: 0,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    backgroundColor: "#D9D9D9",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={card.imageUrl}
                                    alt={card.title ?? "Design school placement student"}
                                    fill
                                    className="object-cover"
                                    sizes={`${MOBILE_CARD_W}px`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
