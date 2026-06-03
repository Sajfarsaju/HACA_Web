import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-who-join-heading";

const WHO_CAN_JOIN = [
    { id: "beginners", label: "Beginners with basic knowledge of HTML, CSS, and JavaScript", color: "#6949FF" },
    { id: "graduates", label: "Fresh graduates seeking industry-ready skills", color: "#FF5600" },
    { id: "self-taught", label: "Self-taught developers aiming to upgrade to full-stack", color: "#29C76B" },
    { id: "ai-devs", label: "Developers who want to integrate AI into web applications", color: "#2592FF" },
    { id: "students", label: "Students preparing for job roles, internships, and freelancing", color: "#A78BFF" },
] as const;

export function TechSeoCodingKeralaWhoCanJoinSection() {
    return (
        <section
            className="mx-auto box-border w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-4 py-5 lg:flex-row lg:items-start lg:gap-[80px] lg:px-[60px] lg:py-10">
                <div className="flex w-full shrink-0 flex-col gap-3 lg:max-w-[380px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:text-[40px]"
                    >
                        Who Can Join?
                    </h2>
                    <p className="m-0 font-manrope text-sm font-normal leading-[140%] text-[#C6C6C6B2] lg:text-base">
                        Our program is built for developers at every stage — from beginners to those looking to level up.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3">
                    {WHO_CAN_JOIN.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 rounded-[14px] px-5 py-4"
                            style={{
                                backgroundColor: "rgba(217,217,217,0.06)",
                                border: "1px solid rgba(105,73,255,0.18)",
                            }}
                        >
                            <span
                                className="flex h-2 w-2 shrink-0 rounded-full"
                                style={{ backgroundColor: item.color }}
                                aria-hidden
                            />
                            <span className="font-manrope text-[15px] font-medium leading-[140%] text-white lg:text-[17px]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
