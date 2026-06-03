import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type AudienceCard = {
    id: string;
    title: string;
    description: string;
    mobileTitle?: string;
    mobileDescription?: string;
    accentColor: string;
    desktopClassName: string;
};

const CARDS: AudienceCard[] = [
    {
        id: "students-freshers",
        title: "Students &\nFreshers",
        description: "Perfect for students looking to build a creative career with practical skills instead of theory-heavy learning.",
        accentColor: "#29C76B",
        desktopClassName: "lg:col-start-3 lg:row-start-1",
    },
    {
        id: "complete-beginners",
        title: "Complete\nBeginners",
        description: "No prior experience needed. We help you start from scratch and gradually build confidence.",
        accentColor: "#FF5C00",
        desktopClassName: "lg:col-start-1 lg:row-start-2",
    },
    {
        id: "freelancers-switchers",
        title: "Freelancers &\nCareer Switchers",
        description: "Ideal for professionals looking to move into a more flexible and creative field.",
        accentColor: "#FF4B77",
        desktopClassName: "lg:col-start-2 lg:row-start-2",
    },
    {
        id: "self-taught",
        title: "Self-Taught\nDesigners",
        description: "Already experimenting with design? This course helps you sharpen your skills with structured guidance and mentorship.",
        accentColor: "#2592FF",
        desktopClassName: "lg:col-start-3 lg:row-start-2",
    },
    {
        id: "creative-professionals",
        title: "Creative\nProfessionals",
        description: "Useful for graphic designers, editors, marketers, and visual creators who want to upgrade their portfolio and career opportunities.",
        accentColor: "#8F56FF",
        desktopClassName: "lg:col-start-1 lg:row-start-3",
    },
] as const;

const MOBILE_CARD_ORDER: readonly AudienceCard["id"][] = [
    "complete-beginners",
    "students-freshers",
    "freelancers-switchers",
    "self-taught",
    "creative-professionals",
] as const;

function getCardById(id: AudienceCard["id"]): AudienceCard {
    const c = CARDS.find((x) => x.id === id);
    if (!c) throw new Error(`Unknown card id: ${id}`);
    return c;
}

function AudienceCardView({
    title,
    description,
    accentColor,
    desktopClassName,
    collapseDescriptionBreaks = false,
}: Omit<AudienceCard, "id" | "mobileTitle" | "mobileDescription"> & { collapseDescriptionBreaks?: boolean }) {
    const descriptionText = collapseDescriptionBreaks
        ? description.replace(/\s*\n\s*/g, " ").trim()
        : description;
    return (
        <article
            className={[
                "relative box-border flex w-full max-w-full flex-col items-start overflow-hidden rounded-2xl bg-black text-left text-white",
                "justify-start p-6 lg:max-w-none lg:rounded-[20px] lg:p-5 lg:h-[220px] lg:min-h-[220px] lg:w-full lg:min-w-0 lg:justify-end lg:px-5 lg:pb-6 lg:pt-7 lg:pr-10 xl:px-6 xl:pr-12",
                desktopClassName,
            ].join(" ")}
            style={{ borderWidth: 1, borderStyle: "solid", borderColor: accentColor }}
        >
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
                        collapseDescriptionBreaks ? "whitespace-normal" : "whitespace-pre-line lg:whitespace-normal",
                    ].join(" ")}
                    style={{ fontFamily: vc, fontWeight: 400 }}
                >
                    {descriptionText}
                </p>
            </div>
        </article>
    );
}

export function GraphicDesigningKeralaWhoIsThisForSection() {
    return (
        <section className="w-full bg-white" aria-label="Who is this course for">
            {/* Mobile */}
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
                            If you&apos;re even slightly creative, this could be your thing.
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

            {/* Desktop */}
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
                        <div className="flex w-full max-w-[531px] shrink-0 flex-col justify-start" style={{ gap: 16 }}>
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
                                style={{ fontFamily: vc, fontWeight: 400, fontStyle: "normal", letterSpacing: 0 }}
                            >
                                If you&apos;re even slightly creative, this could be your thing.
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
