import Image from "next/image";

const FONT = "'Switzer', var(--font-outfit), sans-serif";

const TOOLS = [
    { src: "/photos/schools/design/tools/ui%20ux%20tools%201.svg", alt: "Figma" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%202.svg", alt: "Adobe XD" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%203.svg", alt: "Illustrator" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%204.svg", alt: "Photoshop" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%205.svg", alt: "After Effects" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%206.svg", alt: "Premiere Pro" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%207.svg", alt: "InVision" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%208.svg", alt: "Notion" },
    { src: "/photos/schools/design/tools/ui%20ux%20tools%209.svg", alt: "Miro" },
] as const;

const DESKTOP_SIZE = 89.62;
const DESKTOP_GAP = 17.92;
const MOBILE_SIZE = 51.69;
const MOBILE_GAP = 10.38;

export function UiUxDesignCalicutToolsSection() {
    return (
        <section className="w-full bg-white">
            <div
                className="mx-auto w-full max-w-[1440px] box-border flex flex-col items-center lg:px-[60px] lg:py-[60px] px-[16px] py-[20px]"
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
                    Tools You&apos;ll Work With
                </h2>

                {/* Desktop — single row */}
                <div
                    className="hidden lg:flex items-center justify-center"
                    style={{ gap: DESKTOP_GAP }}
                >
                    {TOOLS.map((tool) => (
                        <Image
                            key={tool.src}
                            src={tool.src}
                            alt={tool.alt}
                            width={90}
                            height={90}
                            style={{ width: DESKTOP_SIZE, height: DESKTOP_SIZE, flexShrink: 0 }}
                        />
                    ))}
                </div>

                {/* Mobile — two rows: 5 + 4 */}
                <div
                    className="flex lg:hidden flex-col items-center"
                    style={{ gap: MOBILE_GAP }}
                >
                    <div className="flex items-center" style={{ gap: MOBILE_GAP }}>
                        {TOOLS.slice(0, 5).map((tool) => (
                            <Image
                                key={tool.src}
                                src={tool.src}
                                alt={tool.alt}
                                width={52}
                                height={52}
                                style={{ width: MOBILE_SIZE, height: MOBILE_SIZE, flexShrink: 0 }}
                            />
                        ))}
                    </div>
                    <div className="flex items-center" style={{ gap: MOBILE_GAP }}>
                        {TOOLS.slice(5).map((tool) => (
                            <Image
                                key={tool.src}
                                src={tool.src}
                                alt={tool.alt}
                                width={52}
                                height={52}
                                style={{ width: MOBILE_SIZE, height: MOBILE_SIZE, flexShrink: 0 }}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
