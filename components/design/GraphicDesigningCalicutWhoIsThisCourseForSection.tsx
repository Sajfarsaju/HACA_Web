import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type AudienceCard = {
    id: string;
    title: string;
    description: string;
    /** Mobile-only line breaks when they differ from `title` / `description` */
    mobileTitle?: string;
    mobileDescription?: string;
    accentColor: string;
    desktopClassName: string;
};

/** Line breaks match design ref. Desktop positions via `desktopClassName`. */
const CARDS: AudienceCard[] = [
    {
        id: "job-focused",
        title: "Job-focused\nlearners",
        description: "Learn practical skills that make you ready\nfor real opportunities.",
        mobileDescription: "Learn practical skills that make you\nready for real opportunities.",
        accentColor: "#29C76B",
        desktopClassName: "lg:col-start-3 lg:row-start-1",
    },
    {
        id: "creative-minded",
        title: "Creative-\nMinded students",
        description: "Turn your ideas into something real and\nbuild a career you're proud of.",
        mobileTitle: "Creative-Minded\nstudents",
        accentColor: "#FF5C00",
        desktopClassName: "lg:col-start-1 lg:row-start-2",
    },
    {
        id: "theory-heavy",
        title: "Tired of theory-\nheavy learning",
        description: "Spend less time listening and more time\nactually creating designs.",
        mobileDescription: "Spend less time listening and more\ntime actually creating designs.",
        accentColor: "#FF4B77",
        desktopClassName: "lg:col-start-2 lg:row-start-2",
    },
    {
        id: "freelancers",
        title: "Freelancers &\ncareer switchers",
        description: "Take a step towards a flexible, creative\ncareer on your own terms.",
        accentColor: "#2592FF",
        desktopClassName: "lg:col-start-3 lg:row-start-2",
    },
    {
        id: "beginners",
        title: "Complete\nBeginners",
        description: "Start from zero and slowly grow your skills\nwith the right guidance.",
        mobileDescription: "Start from zero and slowly grow your\nskills with the right guidance.",
        accentColor: "#8F56FF",
        desktopClassName: "lg:col-start-1 lg:row-start-3",
    },
] as const;

/** Mobile stack order (responsive mockup); desktop order stays `CARDS`. */
const MOBILE_CARD_ORDER: readonly AudienceCard["id"][] = [
    "creative-minded",
    "beginners",
    "theory-heavy",
    "job-focused",
    "freelancers",
] as const;

function getCardById(id: AudienceCard["id"]): AudienceCard {
    const c = CARDS.find((x) => x.id === id);
    if (!c) throw new Error(`Unknown card id: ${id}`);
    return c;
}

function collapseLineBreaksToSpaces(text: string): string {
    return text.replace(/\s*\n\s*/g, " ").trim();
}

function AudienceCardView({
    title,
    description,
    accentColor,
    desktopClassName,
    /** Mobile: let the paragraph wrap naturally instead of honoring `\n`. */
    collapseDescriptionBreaks = false,
}: Omit<AudienceCard, "id" | "mobileTitle" | "mobileDescription"> & { collapseDescriptionBreaks?: boolean }) {
    const descriptionText = collapseDescriptionBreaks ? collapseLineBreaksToSpaces(description) : description;
    return (
        <article
            className={[
                "relative box-border flex w-full max-w-full flex-col items-start overflow-hidden rounded-2xl bg-black text-left text-white",
                "justify-start p-6 lg:max-w-none lg:rounded-[20px] lg:p-5 lg:h-[174px] lg:w-[400px] lg:shrink-0 lg:justify-end lg:px-6 lg:pb-5 lg:pt-6 lg:pr-12",
                desktopClassName,
            ].join(" ")}
            style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: accentColor,
            }}
        >
            {/* Sharp rectangle (no rounding on the accent), flush top-right */}
            <span
                className="pointer-events-none absolute right-0 top-0 z-0 h-7 w-7 lg:h-10 lg:w-10"
                style={{ backgroundColor: accentColor }}
                aria-hidden="true"
            />
            <div className="relative z-[1] flex w-full flex-col items-start gap-[10px] text-left">
                <h3
                    className="m-0 w-full whitespace-pre-line text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-white lg:text-[30px] lg:leading-[1.05]"
                    style={{ fontFamily: vc, fontWeight: 500 }}
                >
                    {title}
                </h3>
                <p
                    className={[
                        "m-0 w-full text-[15px] font-normal leading-[130%] text-white/75 lg:text-[17px] lg:leading-[130%]",
                        collapseDescriptionBreaks ? "whitespace-normal" : "whitespace-pre-line",
                    ].join(" ")}
                    style={{ fontFamily: vc, fontWeight: 400 }}
                >
                    {descriptionText}
                </p>
            </div>
        </article>
    );
}

export function GraphicDesigningCalicutWhoIsThisCourseForSection() {
    return (
        <section className="w-full bg-white" aria-label="Who is this course for">
            {/* Mobile — centered header, mockup card order, full-width cards; desktop block unchanged below */}
            <div className="mx-auto w-full max-w-[1440px] px-5 py-10 lg:hidden">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex w-full max-w-[531px] flex-col items-center gap-4 text-center">
                        <h2
                            className="m-0 w-full text-center text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                fontSize: 35,
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            <span className="block">Who Is This Course</span>
                            <span className="block">For ?</span>
                        </h2>
                        <p
                            className="m-0 w-full text-center text-black/60"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: 14,
                                lineHeight: "120%",
                                letterSpacing: 0,
                            }}
                        >
                            If you're even slightly creative, this could be your thing.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-5">
                        {MOBILE_CARD_ORDER.map((id) => {
                            const c = getCardById(id);
                            return (
                                <AudienceCardView
                                    key={c.id}
                                    title={c.mobileTitle ?? c.title}
                                    description={c.mobileDescription ?? c.description}
                                    accentColor={c.accentColor}
                                    desktopClassName=""
                                    collapseDescriptionBreaks
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop: full frame 1440×703, padding 60; inner content 1320 wide; column gap 60 (400×3+60×2=1320); row gap 30 so 3×174px rows fit in 583px inner height like reference */}
            <div className="mx-auto hidden h-[703px] w-full max-w-[1440px] box-border p-[60px] lg:block">
                <div
                    className="box-border grid h-full w-full justify-center"
                    style={{
                        gridTemplateColumns: "400px 400px 400px",
                        columnGap: 60,
                        rowGap: 30,
                    }}
                >
                    <div className="col-span-2 row-start-1 flex h-full min-h-0 w-full items-end justify-start self-stretch">
                        <div
                            className="flex w-[531px] max-w-full shrink-0 flex-col justify-start"
                            style={{ gap: 16 }}
                        >
                            <h2
                                className="m-0 w-full text-left text-black"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 550,
                                    fontSize: 45,
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Who Is This Course For ?
                            </h2>
                            <p
                                className="m-0 w-full min-h-[24px] text-left text-black/60"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: 20,
                                    lineHeight: "120%",
                                    letterSpacing: 0,
                                }}
                            >
                                If you’re even slightly creative, this could be your thing.
                            </p>
                        </div>
                    </div>

                    {CARDS.map((c) => (
                        <AudienceCardView
                            key={c.id}
                            title={c.title}
                            description={c.description}
                            accentColor={c.accentColor}
                            desktopClassName={c.desktopClassName}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
