import Image from "next/image";

const HEADING_ID = "marketing-wayanad-tools-hired-heading";

/** Files live under `public/photos/schools/marketing/` (spaces encoded in URLs). */
const TOOL_LOGOS = [
    { file: "Google logo.svg" as const, label: "Google Ads" },
    { file: "Google logo (1).svg" as const, label: "Google Analytics" },
    { file: "meta logo.svg" as const, label: "Meta" },
    { file: "google-tag-manager-svgrepo-com 1.svg" as const, label: "Google Tag Manager" },
    { file: "Semrush_logo logo.svg" as const, label: "SEMrush" },
    { file: "ChatGPT_logo_Square logo.svg" as const, label: "ChatGPT" },
    { file: "Claude_AI_logo logo.svg" as const, label: "Claude" },
    { file: "download 1.svg" as const, label: "WordPress" },
    { file: "medium logo.svg" as const, label: "Medium" },
    { file: "linkedin logo.svg" as const, label: "LinkedIn" },
    { file: "Shopify logo.svg" as const, label: "Shopify" },
    { file: "Group (9).svg" as const, label: "Monster" },
] as const;

function toolSrc(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

export function MarketingSeoToolsHiredSection() {
    return (
        <section className="w-full bg-white text-black" aria-labelledby={HEADING_ID}>
            <style>{`
                @keyframes marketing-seo-tools-marquee-ltr {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marketing-seo-tools-marquee-track {
                    display: flex;
                    width: max-content;
                    flex-direction: row;
                    align-items: center;
                    gap: 54px;
                    animation: marketing-seo-tools-marquee-ltr 40s linear infinite;
                    will-change: transform;
                }
                .marketing-seo-tools-marquee-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .marketing-seo-tools-marquee-track {
                        animation: none;
                        transform: none;
                    }
                }
            `}</style>

            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-5 py-[60px] lg:px-0 lg:py-[60px]">
                <div className="mx-auto flex w-full max-w-[335px] flex-col gap-5 text-center lg:max-w-[1440px] lg:gap-[10px]">
                    <h2
                        id={HEADING_ID}
                        className="mx-auto m-0 max-w-[335px] font-semibold text-[36px] leading-[95%] tracking-[-0.01em] text-black [text-rendering:geometricPrecision] lg:max-w-[630px] lg:text-[55px] lg:leading-[110%]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        Tools You&apos;ll Use
                    </h2>
                    <p
                        className="mx-auto m-0 max-w-[335px] text-[16px] font-medium leading-[120%] tracking-[-0.05em] text-[#000000B2] lg:max-w-[604px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        Google Ads · Analytics Platforms · Meta Business Tools · SEO Platforms · AI Productivity Tools
                    </p>
                </div>

                <p className="sr-only">
                    Marketing course training covers industry tools including Google Ads, Google Analytics, Meta, Google Tag Manager, SEMrush,
                    ChatGPT, Claude, WordPress, Medium, LinkedIn, Shopify, and Monster.
                </p>

                <div
                    className="min-h-[100px] w-full overflow-hidden max-lg:relative max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2 lg:static lg:left-auto lg:max-w-none lg:translate-x-0"
                    aria-hidden="true"
                >
                    <div className="marketing-seo-tools-marquee-track">
                        <div className="flex shrink-0 flex-row items-center gap-[54px]">
                            {TOOL_LOGOS.map((tool) => (
                                <div
                                    key={`a-${tool.file}`}
                                    className="relative flex h-[100px] w-[200px] shrink-0 items-center justify-center"
                                >
                                    <Image
                                        src={toolSrc(tool.file)}
                                        alt=""
                                        fill
                                        className="object-contain object-center"
                                        sizes="200px"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex shrink-0 flex-row items-center gap-[54px]">
                            {TOOL_LOGOS.map((tool) => (
                                <div
                                    key={`b-${tool.file}`}
                                    className="relative flex h-[100px] w-[200px] shrink-0 items-center justify-center"
                                >
                                    <Image
                                        src={toolSrc(tool.file)}
                                        alt=""
                                        fill
                                        className="object-contain object-center"
                                        sizes="200px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
