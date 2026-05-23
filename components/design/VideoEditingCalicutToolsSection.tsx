import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

const TOOLS_BASE = "/photos/schools/design/tools";

const LOGO_W = 80.51939392089844;
const LOGO_H = 78.50642395019531;
const LOGO_GAP = 20;

/** Display order: desktop 6+5 rows; mobile 4+4+3 (matches mockups) */
const TOOLS = [
    { file: "premiere.svg", name: "Adobe Premiere Pro" },
    { file: "ChatGPT_logo_Square logo.svg", name: "DaVinci Resolve" },
    { file: "skill-icons_audition.svg", name: "Adobe Audition" },
    { file: "ChatGPT_logo_Square logo (1).svg", name: "Google" },
    { file: "ChatGPT_logo_Square logo.svg", name: "ChatGPT" },
    { file: "Group 41610.svg", name: "Framer" },
    { file: "Group 2.svg", name: "Spline" },
    { file: "Group 7.svg", name: "Pictory" },
    { file: "Group 3.svg", name: "CapCut" },
    { file: "Group 4.svg", name: "Runway" },
    { file: "Group 6.svg", name: "ElevenLabs" },
] as const;

const ROW_ONE = TOOLS.slice(0, 6);
const ROW_TWO = TOOLS.slice(6);
const MOBILE_ROW_ONE = TOOLS.slice(0, 4);
const MOBILE_ROW_TWO = TOOLS.slice(4, 8);
const MOBILE_ROW_THREE = TOOLS.slice(8, 11);

const ROW_ONE_W = 584.5012817382812;
const ROW_TWO_W = 482.59698486328125;

function toolSrc(file: string) {
    return `${TOOLS_BASE}/${encodeURIComponent(file)}`;
}

function ToolLogo({
    file,
    name,
    size = "desktop",
}: {
    file: string;
    name: string;
    size?: "desktop" | "mobile";
}) {
    const w = size === "desktop" ? LOGO_W : "clamp(56px, 20vw, 80.51939392089844px)";
    const h = size === "desktop" ? LOGO_H : "clamp(54px, 19.5vw, 78.50642395019531px)";

    return (
        <div className="relative shrink-0" style={{ width: w, height: h }}>
            <Image
                src={toolSrc(file)}
                alt={name}
                fill
                className="object-contain"
                sizes="81px"
            />
        </div>
    );
}

function LogoRow({
    tools,
    width,
    className,
    logoSize = "desktop",
}: {
    tools: ReadonlyArray<{ file: string; name: string }>;
    width: number;
    className?: string;
    logoSize?: "desktop" | "mobile";
}) {
    return (
        <div
            className={["flex items-center justify-center gap-[20px]", className].filter(Boolean).join(" ")}
            style={{ width, minHeight: LOGO_W }}
        >
            {tools.map((tool, index) => (
                <ToolLogo
                    key={`${tool.file}-${tool.name}-${index}`}
                    file={tool.file}
                    name={tool.name}
                    size={logoSize}
                />
            ))}
        </div>
    );
}

export function VideoEditingCalicutToolsSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="video-calicut-tools-heading">
            <div
                className={[
                    "mx-auto box-border flex w-full max-w-[1440px] flex-col items-center",
                    "gap-8 px-4 py-[30px]",
                    "lg:min-h-[422.89569091796875] lg:gap-[40px] lg:px-[60px] lg:py-[60px]",
                ].join(" ")}
            >
                {/* Heading — 965×54 */}
                <div className="flex w-full max-w-[965px] min-h-[54px] items-center justify-center">
                    <h2
                        id="video-calicut-tools-heading"
                        className={`m-0 text-center text-[26px] leading-[110%] tracking-[-0.02em] text-[#000000] sm:text-[32px] lg:text-[45px] ${dmSans.className}`}
                        style={{ fontWeight: 500, fontStyle: "normal" }}
                    >
                        Tools You&apos;ll Work With
                    </h2>
                </div>

                {/* Desktop — logos block 584.5×208.9; row 2 centered (482.6px) */}
                <div
                    className="hidden flex-col items-center gap-[20px] lg:flex"
                    style={{
                        width: 584.5012817382812,
                        minHeight: 208.8957061767578,
                    }}
                >
                    <LogoRow tools={ROW_ONE} width={ROW_ONE_W} />
                    <LogoRow tools={ROW_TWO} width={ROW_TWO_W} />
                </div>

                {/* Mobile — 4 + 4 + 3 rows (2nd mockup) */}
                <div className="flex w-full max-w-[min(100%,360px)] flex-col items-center gap-5 lg:hidden">
                    <div className="grid w-full grid-cols-4 place-items-center gap-x-5 gap-y-5">
                        {MOBILE_ROW_ONE.map((tool, index) => (
                            <ToolLogo
                                key={`m1-${tool.name}-${index}`}
                                file={tool.file}
                                name={tool.name}
                                size="mobile"
                            />
                        ))}
                    </div>
                    <div className="grid w-full grid-cols-4 place-items-center gap-x-5 gap-y-5">
                        {MOBILE_ROW_TWO.map((tool, index) => (
                            <ToolLogo
                                key={`m2-${tool.name}-${index}`}
                                file={tool.file}
                                name={tool.name}
                                size="mobile"
                            />
                        ))}
                    </div>
                    <div className="grid w-full grid-cols-3 place-items-center justify-items-center gap-x-5 gap-y-5">
                        {MOBILE_ROW_THREE.map((tool, index) => (
                            <ToolLogo
                                key={`m3-${tool.name}-${index}`}
                                file={tool.file}
                                name={tool.name}
                                size="mobile"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
