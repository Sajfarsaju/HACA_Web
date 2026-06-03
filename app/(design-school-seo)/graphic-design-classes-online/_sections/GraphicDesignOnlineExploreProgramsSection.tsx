import Link from "next/link";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const PROGRAMS = [
    {
        id: "cdc",
        title: "Creative Design & Communication",
        mode: "Offline",
        duration: "6 Months",
        description: "A complete creative program with internships and multidisciplinary learning.",
        href: "/graphic-designing-course-in-kerala",
        accentColor: "#FF5C00",
    },
    {
        id: "uiux",
        title: "UI/UX Design + AI Program",
        mode: "Online",
        duration: "3 Months",
        description: "Learn wireframing, interface design, and product thinking.",
        href: "/ui-ux-design-course-in-calicut",
        accentColor: "#8F56FF",
    },
    {
        id: "video",
        title: "AI Integrated Video Editing Mastery",
        mode: "Online",
        duration: "3 Months",
        description: "Explore editing workflows and visual storytelling techniques.",
        href: "/video-editing-course-in-calicut",
        accentColor: "#29C76B",
    },
    {
        id: "branding",
        title: "Branding & Identity Design",
        mode: "Online",
        duration: "4 Weeks",
        description: "Learn visual identity systems and brand-building fundamentals.",
        href: "/graphic-designing-course-in-calicut",
        accentColor: "#2592FF",
    },
] as const;

export function GraphicDesignOnlineExploreProgramsSection() {
    return (
        <section className="w-full bg-[#FCFCFC]" aria-labelledby="gd-online-explore-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col gap-8 lg:gap-[50px]">
                    <h2
                        id="gd-online-explore-heading"
                        className="m-0 w-full text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontSize: "clamp(26px, 3.5vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Explore More Creative Programs
                    </h2>

                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {PROGRAMS.map((program) => (
                            <Link
                                key={program.id}
                                href={program.href}
                                className="group flex flex-col gap-4 overflow-hidden rounded-2xl bg-white no-underline transition-shadow hover:shadow-lg"
                                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <div
                                    className="h-2 w-full"
                                    style={{ backgroundColor: program.accentColor }}
                                />
                                <div className="flex flex-col gap-3 px-5 pb-5">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span
                                            className="rounded-full px-3 py-1 text-[12px] font-medium text-white"
                                            style={{ fontFamily: vc, backgroundColor: program.accentColor }}
                                        >
                                            {program.mode}
                                        </span>
                                        <span
                                            className="rounded-full border px-3 py-1 text-[12px] font-medium text-black/60"
                                            style={{ fontFamily: vc, borderColor: "rgba(0,0,0,0.15)" }}
                                        >
                                            {program.duration}
                                        </span>
                                    </div>
                                    <h3
                                        className="m-0 text-[17px] leading-[120%] text-black transition-colors group-hover:text-[#FF5C00] lg:text-[18px]"
                                        style={{ fontFamily: vc, fontWeight: 600, letterSpacing: "-0.01em" }}
                                    >
                                        {program.title}
                                    </h3>
                                    <p
                                        className="m-0 text-[14px] leading-[145%] text-black/55 lg:text-[15px]"
                                        style={{ fontFamily: vc, fontWeight: 400 }}
                                    >
                                        {program.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
