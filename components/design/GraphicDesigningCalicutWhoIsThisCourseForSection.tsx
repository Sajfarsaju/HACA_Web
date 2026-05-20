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
                "justify-start p-6 lg:max-w-none lg:rounded-[20px] lg:p-5 lg:h-[174px] lg:min-h-[174px] lg:w-full lg:min-w-0 lg:justify-end lg:px-5 lg:pb-5 lg:pt-6 lg:pr-10 xl:px-6 xl:pr-12",
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
                    className="m-0 w-full whitespace-pre-line text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-white lg:text-[clamp(1.375rem,2.4vw,1.875rem)] lg:leading-[1.05]"
                    style={{ fontFamily: vc, fontWeight: 500 }}
                >
                    {title}
                </h3>
                <p
                    className={[
                        "m-0 w-full text-[15px] font-normal leading-[130%] text-white/75 lg:text-[clamp(0.8125rem,1.35vw,1.0625rem)] lg:leading-[130%]",
                        collapseDescriptionBreaks
                            ? "whitespace-normal"
                            : "whitespace-pre-line lg:whitespace-normal",
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
                                fontStyle: "normal",
                                fontSize: "35px",
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

            {/* Desktop: fluid 3-col grid + clamp gaps so cards never touch on small desktop (lg); ~1440px matches Figma at xl */}
            <div className="mx-auto hidden w-full max-w-[1440px] box-border lg:block lg:min-h-0 lg:px-6 lg:py-10 xl:min-h-[703px] xl:px-[60px] xl:py-[60px]">
                <div
                    className="
                        box-border grid w-full max-w-full min-w-0
                        grid-cols-[repeat(3,minmax(0,1fr))]
                        gap-x-[clamp(16px,4.2vw,60px)] gap-y-[clamp(14px,2.4vw,30px)]
                        justify-items-stretch
                    "
                >
                    <div className="col-span-2 row-start-1 flex min-h-0 w-full min-w-0 items-end justify-start self-stretch pb-1 lg:pb-0">
                        <div
                            className="flex w-full max-w-[531px] shrink-0 flex-col justify-start"
                            style={{ gap: 16 }}
                        >
                            <h2
                                className="m-0 w-full text-left text-black"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "45px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Who Is This Course For ?
                            </h2>
                            <p
                                className="m-0 w-full min-h-[24px] text-left text-black/60 text-[clamp(0.9375rem,1.35vw,1.25rem)] leading-[120%]"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 400,
                                    fontStyle: "normal",
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
