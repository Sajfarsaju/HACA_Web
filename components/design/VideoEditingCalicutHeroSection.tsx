import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
});

const THEME = "#655CC5";
const VC_FONT = '"VC Nudge Trial Normal", sans-serif';

const HERO_IMAGE_SRC = `/photos/schools/design/seo/${encodeURIComponent("IMG_1318 (1) 1.webp")}`;

const ARROW_OUTWARD_PATH =
    "M0.933333 8.66667L0 7.73333L6.4 1.33333H0.666667V0H8.66667V8H7.33333V2.26667L0.933333 8.66667Z";

const INTRO_COPY =
    "At Design School by HACA, this 3-month video editing course in Calicut helps you learn how professional editors actually work, from storytelling and pacing to colour grading, sound design, and AI-powered editing workflows. Built around practical learning and real creative projects, the course helps you develop industry-ready video editing skills, build a strong portfolio, and confidently step into freelance or full-time creative roles.";

/** Desktop top-right: 412×180, right-aligned lines (Figma). */
function IntroParagraphDesktop() {
    return (
        <p
            className={`m-0 h-[180px] w-[412px] shrink-0 text-left text-[16px] leading-[125%] tracking-normal ${dmSans.className}`}
            style={{ fontWeight: 400, fontStyle: "normal", color: "#00000099" }}
        >
            At Design School by HACA, this 3-month video editing
            <br />
            course in Calicut helps you learn how professional
            <br />
            editors actually work, from storytelling and pacing to
            <br />
            colour grading, sound design, and AI-powered editing
            <br />
            workflows. Built around practical learning and real
            <br />
            creative projects, the course helps you develop
            <br />
            industry-ready video editing skills, build a strong
            <br />
            portfolio, and confidently step into freelance or full-
            <br />
            time creative roles.
        </p>
    );
}

function EnquireNowButton({ className = "" }: { className?: string }) {
    return (
        <Link
            href="/enquire"
            className={[
                "inline-flex box-border items-center justify-center gap-[10px] rounded-[8px]",
                "h-[45px] w-[144.6666717529297px] px-[10px] py-[12px]",
                "lg:h-auto lg:w-auto lg:gap-2.5 lg:rounded-[10px] lg:px-6 lg:py-3.5",
                className,
            ].join(" ")}
            style={{ fontFamily: VC_FONT, fontWeight: 550, backgroundColor: THEME }}
        >
            <span className="text-[15px] leading-none whitespace-nowrap text-white lg:text-[17px]">Enquire Now</span>
            <span
                className="flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-[4px] bg-white lg:size-8"
                aria-hidden
            >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={ARROW_OUTWARD_PATH} fill={THEME} />
                </svg>
            </span>
        </Link>
    );
}

function OnlineBadge() {
    return (
        <p
            className="m-0 flex flex-wrap items-center gap-2 text-[14px] leading-none lg:text-[16px]"
            style={{ fontFamily: VC_FONT, fontWeight: 500 }}
        >
            <span style={{ color: THEME }}>Online</span>
            <span className="size-1.5 shrink-0 rounded-full lg:size-2" style={{ backgroundColor: THEME }} aria-hidden />
            <span className="text-[#000000]">|</span>
            <span className="text-[#000000] lg:font-semibold" style={{ fontWeight: 500 }}>
                3 Months
            </span>
        </p>
    );
}

/** DM Sans 600 — desktop 724×198, 60px / 110% / -2%. */
function HeroTitle() {
    return (
        <h1
            id="video-editing-calicut-hero-heading"
            className={`m-0 max-w-full shrink-0 text-[#000000] ${dmSans.className} text-[clamp(32px,9vw,40px)] leading-[110%] tracking-[-0.02em] lg:h-[198px] lg:w-[724px] lg:text-[60px]`}
            style={{ fontWeight: 600, fontStyle: "normal" }}
        >
            <span className="lg:hidden">Join the Advanced Video Editing Course in Calicut at HACA</span>
            <span className="hidden lg:inline">
                Join the Advanced Video
                <br />
                Editing Course in Calicut
                <br />
                at HACA
            </span>
        </h1>
    );
}

function HeroTagline({ className = "" }: { className?: string }) {
    return (
        <p
            className={`m-0 w-full max-w-[343px] text-[14px] leading-[110%] tracking-[-0.01em] text-[#00000099] lg:max-w-none lg:text-[30px] ${dmSans.className} ${className}`}
            style={{ fontWeight: 400, fontStyle: "normal" }}
        >
            Editing Just Got an Upgrade. Now Your Skills Can Too.
        </p>
    );
}

function IntroParagraphMobile() {
    return (
        <p
            className={`m-0 w-full max-w-[343px] text-[16px] leading-[125%] tracking-normal lg:hidden ${dmSans.className}`}
            style={{ fontWeight: 400, color: "#00000099" }}
        >
            {INTRO_COPY}
        </p>
    );
}

export function VideoEditingCalicutHeroSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="video-editing-calicut-hero-heading">
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-6 px-4 py-8 sm:px-6 lg:min-h-[799.3877563476562px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-0 lg:px-[60px] lg:py-[40px]">
                {/* Mobile: copy + CTA */}
                <div className="flex w-full min-w-0 flex-col gap-4 lg:hidden">
                    <OnlineBadge />
                    <HeroTitle />
                    <HeroTagline />
                    <EnquireNowButton />
                </div>

                {/* Left: illustration */}
                <div className="relative mx-auto h-[493.5px] w-full max-w-[343px] shrink-0 lg:mx-0 lg:h-[719.3877563476562px] lg:w-[500px] lg:max-w-none">
                    <Image
                        src={HERO_IMAGE_SRC}
                        alt="Video editor cutting film at a desk"
                        fill
                        className="object-contain object-center lg:object-left"
                        sizes="(max-width: 1023px) 343px, 500px"
                        priority
                    />
                </div>

                <IntroParagraphMobile />

                {/* Desktop: right column — intro top-right, CTA block lower-left */}
                <div className="hidden min-h-[719.3877563476562px] min-w-0 flex-1 flex-col justify-between lg:flex lg:pl-10">
                    <div className="flex w-full justify-end">
                        <IntroParagraphDesktop />
                    </div>

                    <div className="flex w-full max-w-[724px] flex-col items-start gap-5">
                        <OnlineBadge />
                        <HeroTitle />
                        <HeroTagline />
                        <EnquireNowButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
