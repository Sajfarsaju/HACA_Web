import { MentorWinsAutoScroll } from "./MentorWinsAutoScroll";

const INTRO =
    "Our mentors have achieved significant wins, not just for campaigns, but for changing how brands grow online. Learn from the same people who made it happen.";

export function MarketingSeoMentorsBroughtHomeSectionShared({
    sectionId,
    headingId,
}: {
    sectionId: string;
    headingId: string;
}) {
    return (
        <section
            id={sectionId}
            className="w-full bg-white text-black opacity-100"
            role="region"
            aria-labelledby={headingId}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-6 py-5 min-h-[518px]
                    lg:min-h-[575px] lg:gap-[60px] lg:py-[50px]
                "
            >
                <header
                    className="
                        mx-auto flex w-full max-w-[375px] flex-col items-center gap-[10px] px-5
                        lg:max-w-[800px] lg:px-0
                    "
                >
                    <h2
                        id={headingId}
                        className="
                            m-0 w-full max-w-[335px] text-center font-semibold tracking-[-0.05em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:max-w-[690px] lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        <span className="lg:hidden">
                            Our Mentors Brought
                            <br />
                            These Home
                        </span>
                        <span className="hidden lg:inline">Our Mentors Brought These Home</span>
                    </h2>
                    <p
                        className="
                            m-0 w-full max-w-[335px] text-center font-medium text-[#000000B2]
                            text-[16px] leading-[1.2] tracking-normal
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[800px] lg:text-[18px]
                        "
                    >
                        {INTRO}
                    </p>
                </header>

                <MentorWinsAutoScroll />
            </div>
        </section>
    );
}
