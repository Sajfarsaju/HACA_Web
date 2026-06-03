import Image from "next/image";

const HEADING_ID = "ae-tools-certifications-heading";

const TOOL_LOGOS = [
    { file: "Google logo.svg",                      label: "Google Ads" },
    { file: "Google logo (1).svg",                  label: "Google Analytics" },
    { file: "meta logo.svg",                        label: "Meta" },
    { file: "google-tag-manager-svgrepo-com 1.svg", label: "Google Tag Manager" },
    { file: "Semrush_logo logo.svg",                label: "SEMrush" },
    { file: "ChatGPT_logo_Square logo.svg",         label: "ChatGPT" },
    { file: "Claude_AI_logo logo.svg",              label: "Claude" },
    { file: "download 1.svg",                       label: "WordPress" },
    { file: "medium logo.svg",                      label: "Medium" },
    { file: "linkedin logo.svg",                    label: "LinkedIn" },
    { file: "Shopify logo.svg",                     label: "Shopify" },
    { file: "Group (9).svg",                        label: "Monster" },
] as const;

const TRACK = [...TOOL_LOGOS, ...TOOL_LOGOS];

/** Left column — shorter card (293px wide on desktop) */
const LEFT_CERTS = [
    "Meta Blueprint Certification",
    "HubSpot Social Media Certification",
    "AI Tools Certification – from Google",
] as const;

/** Right column — wider card (429px wide on desktop) */
const RIGHT_CERTS = [
    "Shopify Certification or Great Learning E-Commerce Certification",
    "Google Analytics 4 Certification – Google Skillshop",
    "Google Ads Search Certification – Google Skillshop",
] as const;

/** All certs in display order for mobile single-column */
const ALL_CERTS = [...LEFT_CERTS, ...RIGHT_CERTS] as const;

function toolSrc(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

function CertCard({ text, wide = false }: { text: string; wide?: boolean }) {
    return (
        <div
            className={[
                "flex items-center rounded-[16px] bg-[#E8F1FF] p-5",
                "h-auto w-full text-center lg:h-[94px] lg:items-center lg:text-left",
                wide ? "lg:w-[429px]" : "lg:w-[293px]",
            ].join(" ")}
            role="listitem"
        >
            <p
                className="m-0 text-[24px] font-semibold leading-[90%] tracking-[-0.01em] text-black lg:text-[30px]"
                style={{ fontFamily: "Darker Grotesque, sans-serif", letterSpacing: "-0.01em" }}
            >
                {text}
            </p>
        </div>
    );
}

export function AeToolsCertificationsSection() {
    return (
        <section className="w-full bg-white text-black" aria-labelledby={HEADING_ID}>
            <style>{`
                @keyframes ae-tools-marquee {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .ae-tools-marquee-track {
                    display: flex;
                    width: max-content;
                    flex-direction: row;
                    align-items: center;
                    gap: 54px;
                    animation: ae-tools-marquee 40s linear infinite;
                    will-change: transform;
                }
                .ae-tools-marquee-track:hover { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) {
                    .ae-tools-marquee-track { animation: none; transform: none; }
                }
            `}</style>

            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-5 py-[60px] lg:px-0 lg:py-[60px]">

                {/* ── Heading ── */}
                <div className="mx-auto flex w-full max-w-[335px] flex-col gap-[10px] text-center lg:max-w-[1440px]">
                    <h2
                        id={HEADING_ID}
                        className="mx-auto m-0 max-w-[335px] font-semibold text-[36px] leading-[95%] tracking-[-0.01em] text-black [text-rendering:geometricPrecision] lg:max-w-[700px] lg:text-[55px] lg:leading-[110%]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        Gain Hands-On Experience with Tools &amp; Certifications
                    </h2>
                </div>

                {/* ── Tools label + marquee ── */}
                <div className="flex flex-col gap-[30px]">
                    <p
                        className="m-0 text-center text-[16px] font-medium leading-[140%] tracking-[-0.05em] text-[#000000B2] lg:text-[18px] lg:leading-[150%] lg:tracking-[0]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        Tools:
                    </p>

                    <p className="sr-only">
                        Course training covers tools including Google Ads, Google Analytics, Meta,
                        Google Tag Manager, SEMrush, ChatGPT, Claude, WordPress, Medium, LinkedIn,
                        Shopify, and Monster.
                    </p>

                    <div
                        className="min-h-[100px] w-full overflow-hidden max-lg:relative max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2 lg:static lg:left-auto lg:max-w-none lg:translate-x-0"
                        aria-hidden="true"
                    >
                        <div className="ae-tools-marquee-track">
                            {TRACK.map((tool, i) => (
                                <div
                                    key={`${tool.file}-${i}`}
                                    className="relative flex h-[100px] w-[200px] shrink-0 items-center justify-center"
                                >
                                    <Image
                                        src={toolSrc(tool.file)}
                                        alt="" aria-hidden="true"
                                        fill
                                        className="object-contain object-center"
                                        sizes="200px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Certification label + cards ── */}
                <div className="flex flex-col gap-[30px]">
                    <p
                        className="m-0 text-center text-[16px] font-medium leading-[140%] tracking-[-0.05em] text-[#000000B2] lg:text-[18px] lg:leading-[150%] lg:tracking-[0]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        Certification:
                    </p>

                    {/* Mobile — single column, all 6 certs */}
                    <div
                        className="mx-auto flex w-full max-w-[343px] flex-col gap-5 lg:hidden"
                        role="list"
                        aria-label="Certifications list"
                    >
                        {ALL_CERTS.map((cert) => (
                            <CertCard key={cert} text={cert} />
                        ))}
                    </div>

                    {/* Desktop — left col (293px) + right col (429px), gap 40px */}
                    <div
                        className="mx-auto hidden lg:flex lg:flex-row lg:gap-[40px]"
                        role="list"
                        aria-label="Certifications list"
                    >
                        {/* Left column */}
                        <div className="flex flex-col gap-5">
                            {LEFT_CERTS.map((cert) => (
                                <CertCard key={cert} text={cert} wide={false} />
                            ))}
                        </div>
                        {/* Right column */}
                        <div className="flex flex-col gap-5">
                            {RIGHT_CERTS.map((cert) => (
                                <CertCard key={cert} text={cert} wide={true} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
