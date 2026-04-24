import Image from "next/image";

type Row = {
    title: string;
    description: string;
    lineColor: string;
};

const ROWS: Row[] = [
    {
        title: "Multidisciplinary\nCreative Space",
        description:
            "We offer courses both online and in-person within a dynamic creative environment, letting you explore all areas of design and beyond.",
        lineColor: "#FF5659",
    },
    {
        title: "Learning Through\nCreative Practices",
        description:
            "Our platform is tailored for creative learners, providing easy access to lessons, tools, and projects that help you grow as a designer.",
        lineColor: "#29C76B",
    },
    {
        title: "Creative EdTech\nPlatform",
        description:
            "We emphasise learning by doing. You’ll get hands-on experience through real design projects rather than just theory.",
        lineColor: "#2592FF",
    },
    {
        title: "Placement Support\nand Job Assistance",
        description:
            "We help you prepare for your career with resume support, mock interviews, and job placement assistance so you can step confidently into the design world.",
        lineColor: "#8F56FF",
    },
    {
        title: "Taught by Designers,\nfor Designers",
        description:
            "Learn directly from experienced designers who have worked in the industry. They know the challenges and will guide you with practical, real-world insights.",
        lineColor: "#FF5C00",
    },
];

export function DesignWhyCreativitySection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    return (
        <section
            className="w-full bg-[#FCFCFC]"
            style={{
                padding: "clamp(30px,2.78vw,40px) clamp(20px,4.17vw,60px) clamp(40px,4.17vw,60px)",
            }}
        >
            <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[60px] lg:gap-[70px]">
                {/* Heading */}
                <h2
                    className="m-0 text-[#000000]"
                    style={{
                        fontFamily: font,
                        fontWeight: 500,
                        lineHeight: "115%",
                        letterSpacing: "0%",
                        fontSize: "clamp(34px,3.47vw,50px)",
                    }}
                >
                    Why{" "}
                    <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                        Creativity
                    </span>
                    <br className="hidden lg:block" />
                    <span className="lg:hidden">
                        <br />
                    </span>
                    Flourishes in the
                    <span className="lg:hidden">
                        <br />
                    </span>{" "}
                    Right Environment
                </h2>

                {/* Table-like rows */}
                <div className="w-full flex flex-col gap-[60px] lg:gap-[80px]">
                    {ROWS.map((row, idx) => (
                        <div key={idx} className="w-full flex flex-col gap-[30px] lg:gap-[40px]">
                            {/* inner row */}
                            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[24px]">
                                {/* left: icon + heading */}
                                <div className="flex items-start gap-[30px] lg:gap-[50px]">
                                    <div
                                        className="relative shrink-0"
                                        style={{
                                            width: "clamp(40px,3.47vw,50px)",
                                            height: "clamp(40px,3.47vw,50px)",
                                        }}
                                    >
                                        {/* Same vector for all rows for now (you'll swap later) */}
                                        <Image
                                            src="/photos/schools/design/Vector (3).svg"
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3
                                        className="m-0 text-[#000000] whitespace-pre-line"
                                        style={{
                                            fontFamily: font,
                                            fontWeight: 500,
                                            lineHeight: "115%",
                                            fontSize: "clamp(26px,2.08vw,30px)",
                                        }}
                                    >
                                        {row.title}
                                    </h3>
                                </div>

                                {/* right: paragraph */}
                                <p
                                    className="m-0 text-[#0A0A0A]"
                                    style={{
                                        fontFamily: font,
                                        fontWeight: 500,
                                        letterSpacing: "0%",
                                        fontSize: "clamp(16px,1.25vw,18px)",
                                        lineHeight: "clamp(19.2px,1.94vw,28px)",
                                        maxWidth: "485px",
                                    }}
                                >
                                    {row.description}
                                </p>
                            </div>

                            {/* divider line */}
                            <div className="w-full border-t" style={{ borderColor: row.lineColor }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

