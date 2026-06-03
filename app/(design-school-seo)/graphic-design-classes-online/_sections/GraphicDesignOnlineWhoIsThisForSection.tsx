const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const AUDIENCE = [
    { id: "beginners", label: "Beginners with no design experience", color: "#FF5C00" },
    { id: "students", label: "Students and fresh graduates", color: "#8F56FF" },
    { id: "freelancers", label: "Freelancers looking to improve creative skills", color: "#29C76B" },
    { id: "career-switchers", label: "Career switchers entering design", color: "#2592FF" },
    { id: "content-creators", label: "Content creators and marketers", color: "#FF4B77" },
    { id: "homemakers", label: "Homemakers restarting their career journey", color: "#F4B400" },
    { id: "flexible-learners", label: "Anyone looking for flexible graphic design classes online", color: "#29C76B" },
] as const;

export function GraphicDesignOnlineWhoIsThisForSection() {
    return (
        <section className="w-full bg-[#FCFCFC]" aria-labelledby="gd-online-who-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px]">
                    <div className="flex w-full shrink-0 flex-col gap-3 lg:w-[380px]">
                        <h2
                            id="gd-online-who-heading"
                            className="m-0 text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 600,
                                fontSize: "clamp(26px, 3.5vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Who Can Join This Online Graphic Designing Program?
                        </h2>
                        <p
                            className="m-0 text-[15px] leading-[155%] text-black/55 lg:text-[16px]"
                            style={{ fontFamily: vc }}
                        >
                            Our online graphic designing programs are built for learners from different backgrounds. Perfect for:
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3">
                        {AUDIENCE.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4"
                                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <span
                                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    aria-hidden
                                />
                                <span
                                    className="text-[15px] leading-[140%] text-black lg:text-[17px]"
                                    style={{ fontFamily: vc, fontWeight: 400 }}
                                >
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
