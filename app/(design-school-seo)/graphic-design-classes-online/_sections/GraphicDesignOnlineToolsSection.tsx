import Image from "next/image";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const TOOLS = [
    { key: "ps",       src: "/photos/schools/design/tools/photoshop.svg",                      alt: "Adobe Photoshop" },
    { key: "ai",       src: "/photos/schools/design/tools/illustrator.svg",                     alt: "Adobe Illustrator" },
    { key: "behance",  src: "/photos/schools/design/tools/ui ux tools 8.svg",                   alt: "Behance" },
    { key: "chatgpt",  src: "/photos/schools/design/tools 2/ChatGPT_logo_Square logo.svg",       alt: "ChatGPT" },
    { key: "gemini",   src: "/photos/schools/design/tools/ui ux tools 6.svg",                   alt: "Google Gemini" },
    { key: "fluent",   src: "/photos/schools/design/tools/Group 41610.svg",                     alt: "FluentPDF" },
    { key: "ideogram", src: "/photos/schools/design/tools 2/ideogram.svg",                      alt: "Ideogram" },
    { key: "aistudio", src: "/photos/schools/design/tools 2/ai studio (1).svg",                 alt: "AI Studio" },
] as const;

export function GraphicDesignOnlineToolsSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-tools-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex flex-col items-center gap-[36px] lg:gap-[48px]">

                    {/* Heading */}
                    <h2
                        id="gd-online-tools-heading"
                        className="m-0 text-center text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontSize: "clamp(32px, 4.5vw, 60px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Tools You&apos;ll Work With
                    </h2>

                    {/* Mobile: 4 × 2 grid */}
                    <div className="grid w-full max-w-[360px] grid-cols-4 gap-[12px] lg:hidden">
                        {TOOLS.map((t) => (
                            <div key={t.key} className="flex items-center justify-center">
                                <Image
                                    src={t.src}
                                    alt={t.alt}
                                    width={72}
                                    height={72}
                                    className="h-[72px] w-[72px] rounded-[12px] object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop: single row */}
                    <div className="hidden w-full items-center justify-center gap-[20px] lg:flex">
                        {TOOLS.map((t) => (
                            <Image
                                key={t.key}
                                src={t.src}
                                alt={t.alt}
                                width={90}
                                height={90}
                                className="h-[90px] w-[90px] shrink-0 rounded-[14px] object-contain"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
