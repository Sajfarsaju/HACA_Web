import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const CULTURE_IMAGE = `/photos/schools/design/seo/${encodeURIComponent("Rectangle 44.png")}`;

const SUBTITLE =
    "Workshops, live projects, creator sessions, editing challenges, and collaborative events that help you grow beyond the classroom.";

/** Desktop — 2 rows, mixed widths (1320px gallery, 11px gaps, 295px height). */
const DESKTOP_ROW_1 = [
    { id: "r1-1", width: 400 },
    { id: "r1-2", width: 262 },
    { id: "r1-3", width: 336 },
    { id: "r1-4", width: 269 },
] as const;

const DESKTOP_ROW_2 = [
    { id: "r2-1", width: 323 },
    { id: "r2-2", width: 262 },
    { id: "r2-3", width: 302 },
    { id: "r2-4", width: 380 },
] as const;

const DESKTOP_CARD_H = 295;

/** Mobile — 4 rows × 2 tiles, mixed widths. */
const MOBILE_ROWS = [
    [
        { id: "m1-1", width: 205.05 },
        { id: "m1-2", width: 134.31 },
    ],
    [
        { id: "m2-1", width: 165.58 },
        { id: "m2-2", width: 173.78 },
    ],
    [
        { id: "m3-1", width: 134.31 },
        { id: "m3-2", width: 205.05 },
    ],
    [
        { id: "m4-1", width: 173.78 },
        { id: "m4-2", width: 165.58 },
    ],
] as const;

const MOBILE_CARD_H = 151.23;

function CulturePhotoTile({
    width,
    height,
    roundedClass,
    fillWidth = false,
}: {
    width: number;
    height: number;
    roundedClass: string;
    fillWidth?: boolean;
}) {
    return (
        <li
            className={["relative m-0 list-none overflow-hidden p-0", fillWidth ? "min-w-0 shrink" : "shrink-0", roundedClass].join(" ")}
            style={
                fillWidth
                    ? { flex: `${width} 1 0`, height, minWidth: 0 }
                    : { width, height }
            }
        >
            <Image
                src={CULTURE_IMAGE}
                alt="Students collaborating on a creative workshop at HACA Design School"
                fill
                className="object-cover object-center"
                sizes={`${Math.round(width)}px`}
            />
        </li>
    );
}

function CultureRow({
    tiles,
    height,
    gapClass,
    roundedClass,
    fillWidth = false,
}: {
    tiles: ReadonlyArray<{ id: string; width: number }>;
    height: number;
    gapClass: string;
    roundedClass: string;
    fillWidth?: boolean;
}) {
    return (
        <ul className={["m-0 flex list-none p-0", fillWidth ? "w-full" : "", gapClass].join(" ")}>
            {tiles.map((tile) => (
                <CulturePhotoTile
                    key={tile.id}
                    width={tile.width}
                    height={height}
                    roundedClass={roundedClass}
                    fillWidth={fillWidth}
                />
            ))}
        </ul>
    );
}

export function VideoEditingCalicutLearningCultureSection() {
    return (
        <section
            className="w-full bg-white"
            aria-labelledby="video-editing-learning-culture-heading"
        >
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 max-lg:overflow-x-hidden lg:px-[60px] lg:py-[60px]">
                <div className="mx-auto flex w-full min-w-0 max-w-[1320px] flex-col gap-6 lg:gap-10">
                    <header className="flex w-full max-w-[872px] flex-col gap-3 text-left lg:gap-4">
                        <h2
                            id="video-editing-learning-culture-heading"
                            className="m-0 text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "clamp(35px, 3.2vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Learning Culture at Design School
                        </h2>

                        <p
                            className={["m-0 max-w-full", dmSans.className, "lg:whitespace-nowrap"].join(" ")}
                            style={{
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "clamp(14px, 1.4vw, 20px)",
                                lineHeight: "120%",
                                letterSpacing: "0",
                                color: "#000000B2",
                            }}
                        >
                            {SUBTITLE}
                        </p>
                    </header>

                    <div className="w-full" aria-label="Learning culture photo gallery">
                        {/* Mobile — staggered widths per row */}
                        <div className="flex w-full min-w-0 flex-col gap-[10px] lg:hidden">
                            {MOBILE_ROWS.map((row) => (
                                <CultureRow
                                    key={row[0].id}
                                    tiles={row}
                                    height={MOBILE_CARD_H}
                                    gapClass="w-full gap-[10px]"
                                    roundedClass="rounded-[10.25px]"
                                    fillWidth
                                />
                            ))}
                        </div>

                        {/* Desktop — 2 rows, 4 mixed-width tiles each */}
                        <div className="hidden w-full flex-col gap-[11px] lg:flex">
                            <CultureRow
                                tiles={DESKTOP_ROW_1}
                                height={DESKTOP_CARD_H}
                                gapClass="justify-center gap-[11px]"
                                roundedClass="rounded-[20px]"
                            />
                            <CultureRow
                                tiles={DESKTOP_ROW_2}
                                height={DESKTOP_CARD_H}
                                gapClass="justify-center gap-[11px]"
                                roundedClass="rounded-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
