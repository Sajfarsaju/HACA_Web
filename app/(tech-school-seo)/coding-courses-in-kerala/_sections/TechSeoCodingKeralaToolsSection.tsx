import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-tools-heading";

const TOOLS = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Redux",
    "Tailwind CSS",
    "REST API",
    "JWT",
    "Gemini API",
    "Git",
    "GitHub",
    "VS Code",
] as const;

function ToolPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center justify-center rounded-[20px] bg-[#11062D] px-[14px] py-[10px] text-center font-manrope text-base font-medium leading-[100%] tracking-[-0.02em] text-white lg:px-5 lg:text-lg">
            {label}
        </span>
    );
}

export function TechSeoCodingKeralaToolsSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border -mt-4 flex w-full flex-col items-center gap-[30px] px-4 pb-5 pt-0 lg:-mt-8 lg:px-[60px] lg:pb-10 lg:pt-0">
                <h2
                    id={HEADING_ID}
                    className="m-0 w-full max-w-[230px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[866px] lg:text-[40px]"
                >
                    Tools You&apos;ll Master
                </h2>

                <div className="flex w-full max-w-[700px] flex-wrap items-center justify-center gap-[10px] lg:max-w-[1100px] lg:gap-[14px]">
                    {TOOLS.map((tool) => (
                        <ToolPill key={tool} label={tool} />
                    ))}
                </div>

                <TechSeoSectionBottomRule inset />
            </div>
        </section>
    );
}
