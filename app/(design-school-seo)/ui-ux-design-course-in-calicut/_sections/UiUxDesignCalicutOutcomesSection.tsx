import Image from "next/image";

const FONT = "'Switzer', var(--font-outfit), sans-serif";

const CARD_SHADOW = "0px 0px 4px 0px #00000040";

const CARDS = [
    {
        icon: "/photos/schools/design/seo/A%20design%20portfolio%20that%20shows%20off%20your%20best%20work.svg",
        label: "A design portfolio that shows off your best work",
    },
    {
        icon: "/photos/schools/design/seo/A%20certificate%20that%20proves%20your%20skills.svg",
        label: "A certificate that proves your skills",
    },
    {
        icon: "/photos/schools/design/seo/Experience%20working%20on%20real%20projects%2C%20just%20like%20in%20a%20job.svg",
        label: "Experience working on real projects, just like in a job",
    },
    {
        icon: "/photos/schools/design/seo/Confidence%20in%20Figma%20and%20AI%20design%20tools.svg",
        label: "Confidence in Figma and AI design tools",
    },
    {
        icon: "/photos/schools/design/seo/A%20clear%20path%20to%20freelancing%2C%20jobs%2C%20or%20your%20own%20business.svg",
        label: "A clear path to freelancing, jobs, or your own business",
    },
] as const;

function OutcomeCard({ icon, label }: { icon: string; label: string }) {
    return (
        <div
            style={{
                width: 345,
                minHeight: 188,
                flexShrink: 0,
                borderRadius: 20,
                padding: 20,
                background: "#FFFFFF",
                boxShadow: CARD_SHADOW,
                display: "flex",
                flexDirection: "column",
                gap: 10,
            }}
        >
            <Image
                src={icon}
                alt={label}
                width={80}
                height={80}
                style={{ width: 80, height: 80 }}
            />
            <p
                style={{
                    margin: 0,
                    fontFamily: FONT,
                    fontWeight: 500,
                    fontSize: 24,
                    lineHeight: "120%",
                    letterSpacing: "-0.02em",
                    color: "#000000",
                }}
            >
                {label}
            </p>
        </div>
    );
}

export function UiUxDesignCalicutOutcomesSection() {
    return (
        <section className="w-full bg-white">
            <div
                className="mx-auto w-full max-w-[1440px] box-border flex flex-col items-center lg:px-[60px] lg:py-[60px] px-[16px] py-[30px]"
                style={{ gap: "clamp(30px, 3vw, 40px)" }}
            >
                {/* Heading */}
                <h2
                    className="m-0 text-center"
                    style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(35px, 3.5vw, 45px)",
                        lineHeight: "120%",
                        letterSpacing: "-0.02em",
                        color: "#000000",
                    }}
                >
                    By the End of This UI/UX Course, You&apos;ll Have
                </h2>

                {/* Cards — Desktop: row 1 (3 cards) + row 2 (2 cards centered) */}
                <div
                    className="hidden lg:flex flex-col items-center"
                    style={{ gap: 20 }}
                >
                    <div className="flex" style={{ gap: 20 }}>
                        {CARDS.slice(0, 3).map((c) => (
                            <OutcomeCard key={c.label} icon={c.icon} label={c.label} />
                        ))}
                    </div>
                    <div className="flex" style={{ gap: 20 }}>
                        {CARDS.slice(3).map((c) => (
                            <OutcomeCard key={c.label} icon={c.icon} label={c.label} />
                        ))}
                    </div>
                </div>

                {/* Cards — Mobile: single column */}
                <div
                    className="flex lg:hidden flex-col"
                    style={{ gap: 20 }}
                >
                    {CARDS.map((c) => (
                        <OutcomeCard key={c.label} icon={c.icon} label={c.label} />
                    ))}
                </div>

            </div>
        </section>
    );
}
