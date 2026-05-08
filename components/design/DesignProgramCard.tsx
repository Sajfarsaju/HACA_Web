import Image from "next/image";
import Link from "next/link";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

export interface ToolItem { src?: string; alt: string; }

export interface DecorationConfig {
    src: string;
    desktop: { width: number; height: number; rotation?: number };
    mobile: { width: number; height: number };
    offset?: {
        desktop?: { top?: number; right?: number };
        mobile?: { top?: number; right?: number };
    };
}

export interface UnderlineConfig {
    src: string;
    desktop: { width: number; height: number; rotation?: number };
    mobile: { width: number; height: number };
    // Position under the 2nd line word (default 84%).
    anchorPct?: number;
    offset?: {
        desktop?: { y?: number };
        mobile?: { y?: number };
    };
}

export interface PhotoConfig {
    desktop: { top: number; left: number; width: number; height: number }; // px at 1440×757
    mobile: { top: number; width: number; height: number; left?: number };  // left omitted = centered
}

export interface DesignProgramCardProps {
    bgColor: string;
    dividerColor?: string;    // badge | line, default #E8651B
    buttonColor?: string;     // Explore Now bg, default #8F56FF
    mobileCardHeight?: number; // default 760
    mode: string;
    duration: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    tools: ToolItem[];
    photoSrc: string;
    photoConfig?: PhotoConfig;
    href: string;
    underline?: UnderlineConfig;
    decoration?: DecorationConfig;
}

function ToolGrid({ tools, size, gap }: { tools: ToolItem[]; size: number; gap: number }) {
    const rows = [tools.slice(0, 5), tools.slice(5, 10)];
    return (
        <div className="flex flex-col" style={{ gap }}>
            {rows.map((row, ri) => (
                <div key={ri} className="flex" style={{ gap }}>
                    {row.map((tool, ti) => (
                        <div key={ti} className="rounded-[7px] bg-[#0A0A0A] shrink-0 overflow-hidden" style={{ width: size, height: size }}>
                            {tool.src && <Image src={tool.src} alt={tool.alt} width={size} height={size} className="w-full h-full object-cover" />}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export function DesignProgramCard({
    bgColor, dividerColor, buttonColor, mobileCardHeight,
    mode, duration, titleLine1, titleLine2, description,
    tools, photoSrc, photoConfig, href, underline, decoration,
}: DesignProgramCardProps) {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const cardMobileH = mobileCardHeight ?? 760;
    const btnBg = buttonColor ?? "#8F56FF";
    const divColor = dividerColor ?? "#E8651B";

    // ── Photo styles (separate mobile / desktop to allow different positioning) ──
    const mp = photoConfig?.mobile;
    const dp = photoConfig?.desktop;

    // Mobile photo: no fixed height — image renders at natural proportions (no letterboxing)
    const mobilePhotoStyle: React.CSSProperties = mp ? {
        top: `${mp.top}px`,
        left: mp.left != null ? `${mp.left}px` : "50%",
        transform: mp.left == null ? "translateX(-50%)" : "none",
        width: `min(${mp.width}px, ${Math.round((mp.width / 3.75))}vw)`,
    } : {
        top: "360px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(390px, 92vw)",
    };

    const desktopPhotoStyle: React.CSSProperties = dp ? {
        top: `${dp.top}px`,
        left: `${((dp.left / 1440) * 100).toFixed(2)}%`,
        width: `${((dp.width / 1440) * 100).toFixed(2)}%`,
        height: `${((dp.height / 757) * 100).toFixed(2)}%`,
    } : {
        top: "100px",
        left: "50.63%",
        width: "34.1%",
        height: "83%",
    };

    // ── Decoration clamp sizes ──
    const decoTopMobile = decoration?.offset?.mobile?.top ?? -22;
    const decoTopDesktop = decoration?.offset?.desktop?.top ?? -10;
    const decoRightMobile = decoration?.offset?.mobile?.right ?? -22;
    const decoRightDesktop = decoration?.offset?.desktop?.right ?? -10;

    const decoStyle: React.CSSProperties | null = decoration ? {
        // Position relative to heading (same for every program)
        top: `clamp(${decoTopMobile}px, ${((decoTopDesktop / 1440) * 100).toFixed(3)}vw, ${decoTopDesktop}px)`,
        right: `clamp(${decoRightMobile}px, ${((decoRightDesktop / 1440) * 100).toFixed(3)}vw, ${decoRightDesktop}px)`,
        width: `clamp(${decoration.mobile.width}px, ${((decoration.desktop.width / 1440) * 100).toFixed(3)}vw, ${decoration.desktop.width}px)`,
        height: `clamp(${decoration.mobile.height}px, ${((decoration.desktop.height / 1440) * 100).toFixed(3)}vw, ${decoration.desktop.height}px)`,
        transform: decoration.desktop.rotation ? `rotate(${decoration.desktop.rotation}deg)` : undefined,
        transformOrigin: "center",
    } : null;

    // ── Underline clamp sizes ──
    const ulWidth = underline
        ? `clamp(${underline.mobile.width}px, ${((underline.desktop.width / 1440) * 100).toFixed(3)}vw, ${underline.desktop.width}px)`
        : null;
    const ulHeight = underline
        ? `clamp(${underline.mobile.height}px, ${((underline.desktop.height / 1440) * 100).toFixed(3)}vw, ${underline.desktop.height}px)`
        : null;
    const ulYOffset = underline
        ? `clamp(${underline.offset?.mobile?.y ?? 0}px, ${(((underline.offset?.desktop?.y ?? 0) / 1440) * 100).toFixed(3)}vw, ${underline.offset?.desktop?.y ?? 0}px)`
        : null;

    return (
        // lg:!h-[757px] uses !important to override the inline mobile height at desktop
        <div className="relative w-full overflow-hidden lg:!h-[757px]"
             style={{ backgroundColor: bgColor, height: `${cardMobileH}px` }}>

            {/* ── Tablet layout (md → <lg): cleaner, no overlaps ── */}
            <div className="hidden md:flex lg:hidden w-full h-[720px] px-[40px] py-[40px] gap-[28px]">
                {/* Photo (left) */}
                <div className="relative w-[44%] h-full">
                    <Image
                        src={photoSrc}
                        alt={`${titleLine1} ${titleLine2}`}
                        fill
                        className="object-contain object-center"
                    />
                </div>

                {/* Content (right) */}
                <div className="flex-1 flex flex-col">
                    {/* Badge */}
                    <div className="inline-flex items-center self-start gap-[8px]
                                    bg-white rounded-[30px]
                                    px-[14px] py-[10px]">
                        <span className="leading-none text-[#100F0E]"
                              style={{ fontFamily: font, fontWeight: 500, fontSize: "16px" }}>
                            {mode}
                        </span>
                        <div className="border-l-[4px] h-[18px]" style={{ borderColor: divColor }} />
                        <span className="leading-none text-[#000000]"
                              style={{ fontFamily: font, fontWeight: 500, fontSize: "16px" }}>
                            {duration}
                        </span>
                    </div>

                    {/* Heading + paragraph */}
                    <div className="mt-[24px] flex flex-col gap-[18px]">
                        <div className="relative inline-block">
                            {decoration && decoStyle && (
                                <div className="pointer-events-none absolute" style={decoStyle}>
                                    <Image src={decoration.src} alt="" fill className="object-contain" />
                                </div>
                            )}

                            <h2
                                className="m-0 text-white"
                                style={{ fontFamily: font, fontWeight: 500, lineHeight: "110%", fontSize: "52px" }}
                            >
                                {titleLine1}
                                <br />
                                <span className="relative inline-block" style={{ paddingBottom: underline ? "22px" : undefined }}>
                                    {titleLine2}
                                    {underline && (
                                        <span
                                            className="pointer-events-none absolute"
                                            style={{
                                                top: `calc(100% - 24px + ${ulYOffset})`,
                                                left: `${underline.anchorPct ?? 84}%`,
                                                transform: "translateX(-50%)",
                                                width: ulWidth!,
                                                height: ulHeight!,
                                            }}
                                            aria-hidden="true"
                                        >
                                            <Image
                                                src={underline.src}
                                                alt=""
                                                fill
                                                className="object-contain"
                                                style={{
                                                    transform: underline.desktop.rotation ? `rotate(${underline.desktop.rotation}deg)` : undefined,
                                                    transformOrigin: "center",
                                                }}
                                            />
                                        </span>
                                    )}
                                </span>
                            </h2>
                        </div>

                        <p
                            className="m-0 text-white max-w-[520px]"
                            style={{ fontFamily: font, fontWeight: 400, lineHeight: "130%", fontSize: "16px" }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Tools + button row */}
                    <div className="mt-auto flex items-end justify-between gap-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <span className="text-white leading-none"
                                  style={{ fontFamily: font, fontWeight: 500, fontSize: "14px" }}>
                                Tools you will Study
                            </span>
                            <ToolGrid tools={tools} size={38} gap={8} />
                        </div>

                        <Link
                            href={href}
                            className="w-fit inline-flex items-center gap-[8px]
                                       rounded-[30px] px-[18px] py-[14px]"
                            style={{ backgroundColor: btnBg }}
                        >
                            <span className="text-[#FCFCFC] leading-none whitespace-nowrap"
                                  style={{ fontFamily: font, fontWeight: 500, fontSize: "16px" }}>
                                Explore Now
                            </span>
                            <svg viewBox="0 0 34 34" fill="none" className="shrink-0" style={{ width: 22, height: 22 }}>
                                <path d={ARROW_PATH} fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Left info block ── */}
            <div className="absolute top-[32px] left-[16px] w-[calc(100%-32px)]
                            flex flex-col gap-[14px]
                            md:hidden lg:flex
                            lg:top-[36px] lg:left-[4.17%] lg:w-[42.92%]
                            lg:gap-[clamp(32px,4.44vw,64px)]">

                {/* Badge */}
                <div className="inline-flex items-center self-start gap-[6px] lg:gap-[clamp(6px,0.69vw,10px)]
                                bg-white rounded-[15px] lg:rounded-[30px]
                                px-[10px] lg:px-[clamp(12px,1.39vw,20px)]
                                py-[7px] lg:py-[clamp(9px,0.97vw,14px)]">
                    <span className="leading-none text-[#100F0E]"
                          style={{ fontFamily: font, fontWeight: 500, fontSize: "clamp(12px,1.39vw,20px)" }}>
                        {mode}
                    </span>
                    <div className="border-l-[2.55px] lg:border-l-[clamp(3px,0.35vw,5px)] h-[11.5px] lg:h-[clamp(14px,1.56vw,22.5px)]"
                         style={{ borderColor: divColor }} />
                    <span className="leading-none text-[#000000]"
                          style={{ fontFamily: font, fontWeight: 500, fontSize: "clamp(12px,1.39vw,20px)" }}>
                        {duration}
                    </span>
                </div>

                {/* Heading + paragraph */}
                <div className="flex flex-col gap-[14px] lg:gap-[clamp(20px,2.78vw,40px)]">
                    <div>
                        {/* inline-block so decoration/underline stay anchored to text width */}
                        <div className="relative inline-block">
                            {/* Top-right decoration */}
                            {decoration && decoStyle && (
                                <div className="pointer-events-none absolute" style={decoStyle}>
                                    <Image src={decoration.src} alt="" fill className="object-contain" />
                                </div>
                            )}

                            <h2 className="m-0 text-white"
                                style={{ fontFamily: font, fontWeight: 500, lineHeight: "110%", fontSize: "clamp(28px,4.86vw,70px)" }}>
                                {titleLine1}
                                <br />
                                <span className="relative inline-block"
                                      style={{ paddingBottom: underline ? `clamp(16px,1.7vw,26px)` : undefined }}>
                                    {titleLine2}
                                    {underline && (
                                        <span className="pointer-events-none absolute"
                                              style={{
                                                  top: `calc(100% - clamp(18px,1.9vw,28px) + ${ulYOffset})`,
                                                  left: `${underline.anchorPct ?? 84}%`,
                                                  transform: "translateX(-50%)",
                                                  width: ulWidth!,
                                                  height: ulHeight!,
                                              }}
                                              aria-hidden="true">
                                            <Image src={underline.src} alt="" fill className="object-contain"
                                                   style={{ transform: underline.desktop.rotation ? `rotate(${underline.desktop.rotation}deg)` : undefined, transformOrigin: "center" }} />
                                        </span>
                                    )}
                                </span>
                            </h2>
                        </div>
                    </div>

                    <p className="m-0 text-white"
                       style={{ fontFamily: font, fontWeight: 400, lineHeight: "120%", fontSize: "clamp(13px,1.39vw,20px)" }}>
                        {description}
                    </p>
                </div>

                {/* Tools */}
                <div className="flex flex-col gap-[8px] lg:gap-[clamp(8px,0.9vw,13px)]">
                    <span className="text-white leading-none"
                          style={{ fontFamily: font, fontWeight: 500, fontSize: "clamp(12px,1.11vw,16px)" }}>
                        Tools you will Study
                    </span>
                    <div className="lg:hidden"><ToolGrid tools={tools} size={34} gap={7} /></div>
                    <div className="hidden lg:block"><ToolGrid tools={tools} size={45} gap={9} /></div>
                </div>
            </div>

            {/* ── Photo — mobile ── */}
            <div className="md:hidden absolute" style={mobilePhotoStyle}>
                <Image
                    src={photoSrc}
                    alt={`${titleLine1} ${titleLine2}`}
                    width={mp?.width ?? 390}
                    height={mp?.height ?? 390}
                    style={{ width: "100%", height: "auto", display: "block" }}
                />
            </div>

            {/* ── Photo — desktop ── */}
            <div className="hidden lg:block absolute" style={desktopPhotoStyle}>
                <Image src={photoSrc} alt={`${titleLine1} ${titleLine2}`} fill className="object-contain object-bottom" />
            </div>

            {/* ── Explore Now button ── */}
            <Link href={href}
                  className="absolute bottom-[15px] left-1/2 -translate-x-1/2
                             md:hidden lg:inline-flex
                             lg:bottom-auto lg:left-auto lg:translate-x-0 lg:top-[37px] lg:right-[4.17%]
                             w-fit inline-flex items-center gap-[6px] lg:gap-[clamp(6px,0.56vw,8px)]
                             rounded-[27px] lg:rounded-[30px]
                             px-[14px] lg:px-[clamp(14px,1.39vw,20px)]
                             py-[14px] lg:py-[clamp(12px,1.11vw,16px)]"
                  style={{ backgroundColor: btnBg }}>
                <span
                      className="text-[#FCFCFC] leading-none whitespace-nowrap text-[16px] lg:text-[clamp(13px,1.11vw,16px)]"
                      style={{ fontFamily: font, fontWeight: 500 }}
                >
                    Explore Now
                </span>
                <svg viewBox="0 0 34 34" fill="none" className="shrink-0"
                     style={{ width: "clamp(18px,1.67vw,24px)", height: "clamp(18px,1.67vw,24px)" }}>
                    <path d={ARROW_PATH} fill="white" />
                </svg>
            </Link>
        </div>
    );
}
