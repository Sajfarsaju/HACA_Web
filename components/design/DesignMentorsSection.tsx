type MentorCard = {
    id: string;
};

const DUMMY: MentorCard[] = [{ id: "1" }, { id: "2" }, { id: "3" }];

export function DesignMentorsSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    return (
        <section
            className="w-full bg-[#FCFCFC]"
            style={{
                paddingTop: "clamp(30px, 4.17vw, 60px)",
                paddingBottom: "clamp(30px, 4.17vw, 60px)",
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 0.7vw, 20px)",
            }}
        >
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-[40px] lg:gap-[60px]">
                    {/* Heading */}
                    <div>
                        <h2
                            className="m-0 text-[#000000] hidden lg:block"
                            style={{
                                fontFamily: font,
                                fontWeight: 500,
                                fontSize: "50px",
                                lineHeight: "115%",
                            }}
                        >
                            Mentors Who Guide, Challenge,
                            <br />
                            and Grow Your{" "}
                            <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                                Thinking
                            </span>
                        </h2>

                        <h2
                            className="m-0 text-[#000000] lg:hidden"
                            style={{
                                fontFamily: font,
                                fontWeight: 500,
                                fontSize: "34px",
                                lineHeight: "115%",
                            }}
                        >
                            Mentors Who Guide,
                            <br />
                            Challenge, and Grow
                            <br />
                            Your{" "}
                            <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                                Thinking
                            </span>
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="w-full">
                        {/* Desktop: 3 cards in a row */}
                        <div className="hidden lg:flex gap-[2px] w-full">
                            {DUMMY.map((m) => (
                                <div
                                    key={m.id}
                                    className="bg-[#EDEDED] shrink-0"
                                    style={{
                                        width: "403.5px",
                                        height: "556.8300170898438px",
                                        borderRadius: "14px",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Mobile: horizontal scroll */}
                        <div className="lg:hidden">
                            <div
                                className="flex gap-[0.87px] overflow-x-auto overflow-y-hidden"
                                style={{
                                    width: "100%",
                                    WebkitOverflowScrolling: "touch",
                                    paddingBottom: "6px",
                                }}
                            >
                                <div className="flex gap-[0.87px]" style={{ width: "600px" }}>
                                    {DUMMY.map((m) => (
                                        <div
                                            key={m.id}
                                            className="bg-[#EDEDED] shrink-0"
                                            style={{
                                                width: "175.43478393554688px",
                                                height: "242.10000610351562px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

