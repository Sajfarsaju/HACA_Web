const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const ACCENT = "#29C76B";

const ITEMS = [
    { id: "content-creators",  label: "Content creators and marketers" },
    { id: "homemakers",        label: "Homemakers restarting their career journey" },
    { id: "flexible-learners", label: "Anyone looking for flexible graphic design classes online" },
    { id: "beginners",         label: "Beginners with no design experience" },
    { id: "students",          label: "Students and fresh graduates" },
    { id: "career-switchers",  label: "Career switchers entering design" },
    { id: "freelancers",       label: "Freelancers looking to improve creative skills" },
] as const;

function AudienceCard({ label, centered }: { label: string; centered?: boolean }) {
    return (
        <article
            className={[
                "relative box-border flex w-full flex-col items-start justify-center overflow-hidden rounded-[20px] bg-black p-5",
                "min-h-[120px] lg:h-[174px] lg:min-h-[174px]",
                centered ? "lg:col-start-2" : "",
            ].join(" ")}
            style={{ border: `1px solid ${ACCENT}` }}
        >
            {/* Flush accent square top-right — no border-radius */}
            <span
                className="pointer-events-none absolute right-0 top-0 h-7 w-7 lg:h-10 lg:w-10"
                style={{ backgroundColor: ACCENT }}
                aria-hidden
            />
            <h3
                className="relative z-[1] m-0 text-white lg:hidden"
                style={{
                    fontFamily: vc,
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "115%",
                    letterSpacing: "0%",
                }}
            >
                {label}
            </h3>
            <h3
                className="relative z-[1] m-0 hidden text-white lg:block"
                style={{
                    fontFamily: vc,
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "115%",
                    letterSpacing: "0%",
                }}
            >
                {label}
            </h3>
        </article>
    );
}

export function GraphicDesignOnlineWhoIsThisForSection() {
    const mainItems = ITEMS.slice(0, 6);
    const lastItem = ITEMS[6];

    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-who-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">

                {/* Heading + subtitle */}
                <div className="mb-8 flex flex-col gap-3 lg:mb-10">
                    <h2
                        id="gd-online-who-heading"
                        className="m-0 text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontSize: "clamp(32px, 4vw, 60px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Who Can Join This Online<br className="hidden lg:block" /> Graphic Designing Program?
                    </h2>
                    <p
                        className="m-0 text-black/60"
                        style={{
                            fontFamily: vc,
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.4vw, 18px)",
                            lineHeight: "140%",
                        }}
                    >
                        Our online graphic designing programs are built for learners from different backgrounds.
                    </p>
                </div>

                {/* Card grid */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                    {mainItems.map((item) => (
                        <AudienceCard key={item.id} label={item.label} />
                    ))}
                    {/* 7th card — centered on desktop (col-start-2) */}
                    <AudienceCard key={lastItem.id} label={lastItem.label} centered />
                </div>

            </div>
        </section>
    );
}
