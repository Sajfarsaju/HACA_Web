import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const THEME = "#655CC5";
const PLAYER_BG = "#1A1A1A";
const ARROW_OUTWARD_PATH =
    "M0.933333 8.66667L0 7.73333L6.4 1.33333H0.666667V0H8.66667V8H7.33333V2.26667L0.933333 8.66667Z";

const HEADING_ID = "video-editing-cta-heading";

const seoAsset = (file: string) =>
    `/photos/schools/design/seo/${encodeURIComponent(file)}`;

const GROUP_LEFT = seoAsset("Group (5).svg");
const GROUP_SETTINGS = seoAsset("Group (1).svg");
const GROUP_THEATER = seoAsset("Group (2).svg");
const GROUP_MINI = seoAsset("Group (3).svg");
const GROUP_FULLSCREEN = seoAsset("Group (4).svg");
const TIME_0_00 = seoAsset("0_00.svg");

function EnquireNowButton() {
    return (
        <Link
            href="/contact"
            className={[
                "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-[8px] bg-white",
                "px-3.5 py-2 transition-opacity hover:opacity-90 active:opacity-80",
                "lg:gap-2.5 lg:rounded-[10px] lg:px-6 lg:py-3.5",
                dmSans.className,
            ].join(" ")}
            style={{ fontWeight: 500 }}
        >
            <span className="text-[13px] leading-none whitespace-nowrap text-[#000000] lg:text-[17px]">
                Enquire Now
            </span>
            <span
                className="flex size-6 shrink-0 items-center justify-center rounded-[4px] lg:size-8"
                style={{ backgroundColor: THEME }}
                aria-hidden
            >
                <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:scale-100 scale-[0.85]"
                >
                    <path d={ARROW_OUTWARD_PATH} fill="#FFFFFF" />
                </svg>
            </span>
        </Link>
    );
}

function VideoPlayerChrome() {
    return (
        <div
            className="absolute inset-x-0 bottom-0 z-10 box-border px-3 pb-2.5 pt-4 sm:px-4 sm:pb-4 sm:pt-6 lg:px-8 lg:pb-6 lg:pt-8"
            aria-hidden
        >
            <div className="relative mb-1.5 h-[2px] w-full rounded-full bg-white/25 sm:mb-2 sm:h-[2.5px] lg:mb-3 lg:h-[3px]">
                <span className="absolute left-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#E53935] sm:size-2.5 lg:size-3" />
            </div>

            <div className="flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex min-w-0 items-center gap-1.5 sm:gap-3 lg:gap-5">
                    <Image
                        src={GROUP_LEFT}
                        alt="" aria-hidden="true"
                        width={174}
                        height={36}
                        className="h-[14px] w-auto shrink-0 sm:h-[22px] lg:h-9"
                    />
                    <Image
                        src={TIME_0_00}
                        alt="" aria-hidden="true"
                        width={50}
                        height={19}
                        className="h-[9px] w-auto shrink-0 sm:h-[14px] lg:h-[19px]"
                    />
                </div>

                <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 lg:gap-5">
                    <Image
                        src={GROUP_SETTINGS}
                        alt="" aria-hidden="true"
                        width={38}
                        height={38}
                        className="size-4 shrink-0 sm:size-6 lg:size-[38px]"
                    />
                    <Image
                        src={GROUP_THEATER}
                        alt="" aria-hidden="true"
                        width={41}
                        height={33}
                        className="h-3.5 w-auto shrink-0 sm:h-6 lg:h-[33px]"
                    />
                    <Image
                        src={GROUP_MINI}
                        alt="" aria-hidden="true"
                        width={41}
                        height={33}
                        className="h-3.5 w-auto shrink-0 sm:h-6 lg:h-[33px]"
                    />
                    <Image
                        src={GROUP_FULLSCREEN}
                        alt="" aria-hidden="true"
                        width={33}
                        height={33}
                        className="size-4 shrink-0 sm:size-6 lg:size-[33px]"
                    />
                </div>
            </div>
        </div>
    );
}

export function VideoEditingCalicutCtaSection() {
    return (
        <section
            className="w-full bg-white"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full max-w-[1440px] flex-col
                    px-5 py-10 sm:px-6
                    lg:min-h-[733px] lg:gap-[60px] lg:px-[60px] lg:py-[60px]
                "
            >
                <div
                    className="
                        relative mx-auto flex w-full max-w-[345px] flex-col
                        overflow-hidden rounded-[12px]
                        h-[227.12px]
                        lg:mx-0 lg:h-auto lg:min-h-[613px] lg:max-w-none lg:flex-1
                        lg:items-center lg:justify-center lg:rounded-[24px]
                        lg:px-[60px] lg:py-[60px]
                    "
                    style={{ backgroundColor: PLAYER_BG }}
                >
                    <div
                        className="
                            relative z-[1] flex h-full w-full flex-col items-center
                            justify-center gap-2.5 px-[29px] pb-11 text-center
                            lg:max-w-[1320px] lg:gap-[60px] lg:px-0 lg:pb-0 lg:py-0
                        "
                    >
                        <div
                            className="
                                flex w-[287px] max-w-full flex-col items-center gap-[5px]
                                lg:w-full lg:max-w-[1320px] lg:gap-5
                            "
                        >
                            <h2
                                id={HEADING_ID}
                                className={`m-0 w-full text-white ${dmSans.className}`}
                            >
                                {/* Mobile — 2 lines, 287×87 text frame */}
                                <span
                                    className="flex flex-col items-center lg:hidden"
                                    style={{
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    <span className="whitespace-nowrap">
                                        Your Story Deserves to
                                    </span>
                                    <span className="whitespace-nowrap">Be Seen</span>
                                </span>

                                {/* Desktop */}
                                <span
                                    className="hidden lg:inline"
                                    style={{
                                        fontWeight: 600,
                                        fontSize: "clamp(32px, 4.2vw, 56px)",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Your Story Deserves to Be Seen
                                </span>
                            </h2>
                            <p
                                className={[
                                    "m-0 w-full text-[11px] leading-[120%] text-[#ABABAB]",
                                    "lg:text-[clamp(14px,2.08vw,30px)] lg:leading-[110%] lg:whitespace-nowrap",
                                    dmSans.className,
                                ].join(" ")}
                                style={{
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                }}
                            >
                                Join the most practical and career-driven video editing course in
                                Calicut today.
                            </p>
                        </div>

                        <EnquireNowButton />
                    </div>

                    <VideoPlayerChrome />
                </div>
            </div>
        </section>
    );
}
