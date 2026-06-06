import { DM_Sans } from "next/font/google";
import { DesignSeoCultureGrid } from "@/components/design/DesignSeoCultureGrid";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const SUBTITLE =
    "Workshops, live projects, creator sessions, editing challenges, and collaborative events that help you grow beyond the classroom.";

export function VideoEditingCalicutLearningCultureSection() {
    return (
        <section
            className="w-full bg-white"
            aria-labelledby="video-editing-learning-culture-heading"
        >
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 max-lg:overflow-x-hidden lg:px-[60px] lg:py-[60px]">
                <div className="mx-auto flex w-full min-w-0 max-w-[1320px] flex-col gap-6 lg:gap-10">
                    <header className="flex w-full max-w-[872px] flex-col gap-3 text-left lg:gap-4">
                        <h2
                            id="video-editing-learning-culture-heading"
                            className="m-0 text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "clamp(35px, 3.2vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Learning Culture at Design School
                        </h2>

                        <p
                            className={["m-0 max-w-full", dmSans.className, "lg:whitespace-nowrap"].join(" ")}
                            style={{
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "clamp(14px, 1.4vw, 20px)",
                                lineHeight: "120%",
                                letterSpacing: "0",
                                color: "#000000B2",
                            }}
                        >
                            {SUBTITLE}
                        </p>
                    </header>

                    <DesignSeoCultureGrid />
                </div>
            </div>
        </section>
    );
}
