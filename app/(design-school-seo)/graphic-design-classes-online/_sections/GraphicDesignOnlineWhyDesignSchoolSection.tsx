const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const FEATURES = [
    {
        id: "platform",
        title: "Creative Learning Platform",
        description: "Access projects, assignments, and resources through a platform designed for visual learners.",
        accentColor: "#FF5C00",
    },
    {
        id: "designers",
        title: "Learn from Designers",
        description: "Get mentorship from professionals who understand real creative challenges.",
        accentColor: "#8F56FF",
    },
    {
        id: "portfolio",
        title: "Portfolio-Driven Learning",
        description: "Build practical work throughout the course rather than waiting until the end.",
        accentColor: "#29C76B",
    },
    {
        id: "practice",
        title: "Learn Through Practice",
        description: "Work on assignments and exercises that mirror actual design tasks.",
        accentColor: "#2592FF",
    },
    {
        id: "beyond-software",
        title: "Learning Beyond Software",
        description: "Develop creative thinking, communication skills, and design reasoning.",
        accentColor: "#FF4B77",
    },
    {
        id: "placement",
        title: "Placement & Career Guidance",
        description: "Receive support with resumes, portfolios, interviews, and opportunities.",
        accentColor: "#F4B400",
    },
] as const;

export function GraphicDesignOnlineWhyDesignSchoolSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-why-ds-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col gap-8 lg:gap-[50px]">
                    <h2
                        id="gd-online-why-ds-heading"
                        className="m-0 w-full max-w-[700px] text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontSize: "clamp(26px, 3.5vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Why Students Learn with Design School by HACA
                    </h2>

                    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map((feature) => (
                            <article
                                key={feature.id}
                                className="relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-[#FCFCFC] px-5 pb-6 pt-5"
                                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <span
                                    className="absolute right-0 top-0 h-8 w-8 rounded-bl-xl"
                                    style={{ backgroundColor: feature.accentColor }}
                                    aria-hidden
                                />
                                <h3
                                    className="m-0 max-w-[200px] text-[18px] leading-[120%] text-black lg:text-[20px]"
                                    style={{ fontFamily: vc, fontWeight: 600, letterSpacing: "-0.01em" }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="m-0 text-[14px] leading-[150%] text-black/60 lg:text-[15px]"
                                    style={{ fontFamily: vc, fontWeight: 400 }}
                                >
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
