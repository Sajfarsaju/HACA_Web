import Link from "next/link";
import { designCourseHref, DESIGN_COURSE_SLUGS } from "@/lib/design-courses";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

type ExploreButton = {
    label: string;
    borderColor: string;
    href: string;
    mobileWidth: number;
};

const BUTTONS: ExploreButton[] = [
    { label: "Creative Design & Communication", borderColor: "#FF5C00", href: designCourseHref(DESIGN_COURSE_SLUGS.creativeDesign), mobileWidth: 340 },
    { label: "AI Integrated Graphic Design", borderColor: "#8F56FF", href: designCourseHref(DESIGN_COURSE_SLUGS.aiGraphicDesign), mobileWidth: 297 },
    { label: "Branding & Identity Design Mastery", borderColor: "#FF5659", href: designCourseHref(DESIGN_COURSE_SLUGS.brandingIdentity), mobileWidth: 348 },
    { label: "UI/UX Design + AI Program", borderColor: "#29C76B", href: designCourseHref(DESIGN_COURSE_SLUGS.uiUxAi), mobileWidth: 281 },
    { label: "AI Integrated Video Editing Mastery", borderColor: "#2592FF", href: designCourseHref(DESIGN_COURSE_SLUGS.aiVideoEditing), mobileWidth: 350 },
];

export function DesignPickOneToExploreSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    return (
        <section
            className="w-full lg:h-full bg-black flex flex-col items-center justify-center
                       gap-[30px] lg:gap-[60px]
                       px-[20px] lg:px-[54px]
                       py-[40px]"
        >
            <h2
                className="m-0 text-white text-center"
                style={{
                    fontFamily: font,
                    fontWeight: 500,
                    lineHeight: "100%",
                    fontSize: "clamp(36px,4.86vw,70px)",
                }}
            >
                Pick One to{" "}
                <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                    Explore
                </span>
            </h2>

            {/* Desktop: 2 rows (3 + 2). Mobile: stacked */}
            <div className="w-full max-w-[1332px] flex flex-col gap-[20px] lg:gap-[30px]">
                <div className="hidden lg:flex w-full gap-[15px]">
                    {BUTTONS.slice(0, 3).map((b) => (
                        <ExplorePill key={b.label} {...b} />
                    ))}
                </div>

                <div className="hidden lg:flex w-full gap-[15px] justify-center">
                    {BUTTONS.slice(3).map((b) => (
                        <ExplorePill key={b.label} {...b} />
                    ))}
                </div>

                <div className="lg:hidden w-full flex flex-col gap-[20px] items-center">
                    {BUTTONS.map((b) => (
                        <ExplorePill key={b.label} {...b} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExplorePill({ label, borderColor, href, mobileWidth }: ExploreButton) {
    const font = '"VC Nudge Trial Normal", sans-serif';

    return (
        <Link
            href={href}
            scroll={false}
            className="group relative inline-flex items-center justify-between
                       w-[var(--mobileW)] max-w-full lg:w-auto
                       rounded-[30px] border-[2px]
                       px-[20px]
                       h-[56px] lg:h-[63px]
                       gap-[8px]
                       overflow-hidden
                       transform-gpu
                       transition-[transform,box-shadow,border-color,background-color] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                       hover:-translate-y-[1px]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black
                       before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-[650ms] before:ease-[cubic-bezier(0.16,1,0.3,1)]
                       before:bg-[radial-gradient(140%_120%_at_15%_0%,color:var(--accent)_0%,transparent_62%)]
                       group-hover:before:opacity-[0.28]
                       after:pointer-events-none after:absolute after:inset-0 after:opacity-0 after:transition-[transform,opacity] after:duration-[900ms] after:ease-[cubic-bezier(0.16,1,0.3,1)]
                       after:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.16)_50%,transparent_100%)]
                       after:translate-x-[-120%]
                       group-hover:after:opacity-100 group-hover:after:translate-x-[120%]"
            style={{
                borderColor,
                ["--accent" as never]: borderColor,
                ["--mobileW" as never]: `${mobileWidth}px`,
                // Desktop: responsive width, cap like design
                maxWidth: "440px",
                boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
        >
            <span
                className="relative z-[1] text-[#FCFCFC] whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                    fontFamily: font,
                    fontWeight: 500,
                    // Prevent slight font clipping on fixed-height pills
                    lineHeight: "110%",
                    fontSize: "clamp(16px,1.53vw,22px)",
                }}
            >
                {label}
            </span>

            <span className="relative z-[1] shrink-0 transform-gpu transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px]">
                <svg
                    viewBox="0 0 34 34"
                    fill="none"
                    style={{ width: "clamp(18px,1.67vw,24px)", height: "clamp(18px,1.67vw,24px)" }}
                    aria-hidden="true"
                >
                    <path d={ARROW_PATH} fill="white" />
                </svg>
            </span>
        </Link>
    );
}

