import { DesignSeoCultureGrid } from "@/components/design/DesignSeoCultureGrid";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

export function UiUxDesignCalicutLearningExperienceSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-[20px] py-[30px] lg:px-[60px] lg:py-[60px]">
                <div className="flex flex-col gap-[30px] lg:gap-[60px]">
                    <h2
                        className="m-0 text-center text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(35px, 3.2vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Learning Experience at Design School
                    </h2>

                    <DesignSeoCultureGrid />
                </div>
            </div>
        </section>
    );
}
