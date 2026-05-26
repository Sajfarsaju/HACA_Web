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

const ROW_ONE_W = 584.5012817382812;
const ROW_TWO_W = 482.59698486328125;

/** Mobile tools grid — Figma frame */
const MOBILE_FRAME_W = 330;
const MOBILE_FRAME_H = 249.0718994140625;
const MOBILE_ROW_GAP = 20;
/** Slightly tighter than row gap so 4 icons fit 330px width */
const MOBILE_ICON_GAP = 14;
/** ~72px at 330px frame width with 14px icon gaps */
const MOBILE_LOGO_H = (MOBILE_FRAME_H - 2 * MOBILE_ROW_GAP) / 3;
type ToolAsset = { file: string; name: string };

const TOOL_ASSETS = {
    premiere: { file: "premiere.svg", name: "Adobe Premiere Pro" },
    davinci: { file: "ChatGPT_logo_Square logo.svg", name: "DaVinci Resolve" },
    audition: { file: "skill-icons_audition.svg", name: "Adobe Audition" },
    google: { file: "ChatGPT_logo_Square logo (1).svg", name: "Google" },
    chatgpt: { file: "Group 5.svg", name: "ChatGPT" },
    figma: { file: "Group 41610.svg", name: "Figma" },
    capcut: { file: "Group 2.svg", name: "CapCut" },
    inshot: { file: "Group 7.svg", name: "InShot" },
    midjourney: { file: "Group 3.svg", name: "Midjourney" },
    runway: { file: "Group 4.svg", name: "Runway" },
    elevenlabs: { file: "Group 6.svg", name: "ElevenLabs" },
} as const satisfies Record<string, ToolAsset>;

type ToolKey = keyof typeof TOOL_ASSETS;

/** Desktop — 6 + 5 (second mockup) */
const DESKTOP_ROW_ONE_KEYS: ToolKey[] = [
    "premiere",
    "davinci",
    "audition",
    "google",
    "chatgpt",
    "figma",
];
const DESKTOP_ROW_TWO_KEYS: ToolKey[] = [
    "capcut",
    "inshot",
    "midjourney",
    "runway",
    "elevenlabs",
];

/** Mobile — 4 + 4 + 3 (first mockup) */
const MOBILE_ROW_ONE_KEYS = DESKTOP_ROW_ONE_KEYS.slice(0, 4);
const MOBILE_ROW_TWO_KEYS: ToolKey[] = [
    "capcut",
    "inshot",
    "midjourney",
    "runway",
];
const MOBILE_ROW_THREE_KEYS: ToolKey[] = ["chatgpt", "figma", "elevenlabs"];

function toolSrc(file: string) {
    return `${TOOLS_BASE}/${encodeURIComponent(file)}`;
}

function resolveTools(keys: readonly ToolKey[]): ToolAsset[] {
    return keys.map((key) => TOOL_ASSETS[key]);
}

function ToolLogo({
    file,
    name,
    size = "desktop",
    width,
    height,
}: {
    file: string;
    name: string;
    size?: "desktop" | "mobile";
    width?: number;
    height?: number;
}) {
    const w =
        width ??
        (size === "desktop"
            ? LOGO_W
            : `calc((min(100%, ${MOBILE_FRAME_W}px) - ${3 * MOBILE_ICON_GAP}px) / 4)`);
    const h = height ?? (size === "desktop" ? LOGO_H : MOBILE_LOGO_H);

    return (
        <div className="relative shrink-0" style={{ width: w, height: h }}>
            <Image
                src={toolSrc(file)}
                alt={name}
                fill
                className="object-contain"
sizes={size === "desktop" ? "81px" : "72px"}
            />
        </div>
    );
}

function LogoRow({
    tools,
    width,
    className,
    logoSize = "desktop",
    gap = LOGO_GAP,
    iconWidth,
    iconHeight,
}: {
    tools: ReadonlyArray<ToolAsset>;
    width?: number;
    className?: string;
    logoSize?: "desktop" | "mobile";
    gap?: number;
    iconWidth?: number;
    iconHeight?: number;
}) {
    return (
        <div
            className={[
                "flex flex-nowrap items-center justify-center",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={{
                width: width ?? "100%",
                maxWidth: width ?? "100%",
                gap,
                minHeight:
                    logoSize === "desktop"
                        ? LOGO_H
                        : iconHeight ?? MOBILE_LOGO_H,
            }}
        >
            {tools.map((tool) => (
                <ToolLogo
                    key={tool.file}
                    file={tool.file}
                    name={tool.name}
                    size={logoSize}
                    width={iconWidth}
                    height={iconHeight}
                />
            ))}
        </div>
    );
}

export function VideoEditingCalicutToolsSection() {
    const desktopRowOne = resolveTools(DESKTOP_ROW_ONE_KEYS);
    const desktopRowTwo = resolveTools(DESKTOP_ROW_TWO_KEYS);
    const mobileRowOne = resolveTools(MOBILE_ROW_ONE_KEYS);
    const mobileRowTwo = resolveTools(MOBILE_ROW_TWO_KEYS);
    const mobileRowThree = resolveTools(MOBILE_ROW_THREE_KEYS);

    return (
        <section className="w-full bg-white" aria-labelledby="video-calicut-tools-heading">
            <div
                className={[
                    "mx-auto box-border flex w-full max-w-[1440px] flex-col items-center",
                    "gap-8 px-4 py-[30px]",
                    "lg:min-h-[422.89569091796875] lg:gap-[40px] lg:px-[60px] lg:py-[60px]",
                ].join(" ")}
            >
                <div className="flex w-full max-w-[965px] min-h-[54px] items-center justify-center">
                    <h2
                        id="video-calicut-tools-heading"
                        className={`m-0 text-center text-[26px] leading-[110%] tracking-[-0.02em] text-[#000000] sm:text-[32px] lg:text-[45px] ${dmSans.className}`}
                        style={{ fontWeight: 500, fontStyle: "normal" }}
                    >
                        Tools You&apos;ll Work With
                    </h2>
                </div>

                {/* Desktop — 6 + 5 centered rows */}
                <div
                    className="hidden w-full flex-col items-center gap-[20px] lg:flex"
                    style={{
                        width: ROW_ONE_W,
                        maxWidth: "100%",
                        minHeight: 208.8957061767578,
                    }}
                >
                    <LogoRow tools={desktopRowOne} width={ROW_ONE_W} />
                    <LogoRow tools={desktopRowTwo} width={ROW_TWO_W} />
                </div>

                {/* Mobile — 330×249 frame, 4 + 4 + 3 rows, 20px row gap */}
                <div
                    className="mx-auto box-border flex w-full max-w-[330px] flex-col items-center lg:hidden"
                    style={{
                        minHeight: MOBILE_FRAME_H,
                        gap: MOBILE_ROW_GAP,
                    }}
                >
                    <LogoRow
                        tools={mobileRowOne}
                        logoSize="mobile"
                        className="w-full"
                        gap={MOBILE_ICON_GAP}
                        iconHeight={MOBILE_LOGO_H}
                    />
                    <LogoRow
                        tools={mobileRowTwo}
                        logoSize="mobile"
                        className="w-full"
                        gap={MOBILE_ICON_GAP}
                        iconHeight={MOBILE_LOGO_H}
                    />
                    <LogoRow
                        tools={mobileRowThree}
                        logoSize="mobile"
                        className="w-full"
                        gap={MOBILE_ICON_GAP}
                        iconHeight={MOBILE_LOGO_H}
                    />
                </div>
            </div>
        </section>
    );
}
