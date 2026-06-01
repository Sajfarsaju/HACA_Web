import Image from "next/image";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "python-calicut-tools-heading";

const TOOL_LOGOS = [
    { file: "material-icon-theme_python.svg", label: "Python" },
    { file: "django logo.svg", label: "Django" },
    { file: "react logo.svg", label: "React.js" },
    { file: "langchain logo.svg", label: "LangChain" },
    { file: "numpy logo.svg", label: "NumPy" },
    { file: "pandas-icon logo.svg", label: "Pandas" },
    { file: "matplotlib-icon logo.svg", label: "Matplotlib" },
    { file: "mysql logo.svg", label: "MySQL" },
    { file: "openai-light logo.svg", label: "OpenAI" },
    { file: "github logo.svg", label: "GitHub" },
    { file: "streamlit logo.svg", label: "Streamlit" },
] as const;

const MOBILE_TOOLS_ROW_1 = TOOL_LOGOS.slice(0, 6);
const MOBILE_TOOLS_ROW_2 = TOOL_LOGOS.slice(6);

function toolSrc(filename: string) {
    return `/photos/Tech/seo/${encodeURIComponent(filename)}`;
}

function ToolLogo({ label, file }: { label: string; file: string }) {
    return (
        <div
            className="relative h-[44.22px] w-[45.1px] shrink-0 lg:h-[63.73px] lg:w-[65px]"
            title={label}
        >
            <Image
                src={toolSrc(file)}
                alt={label}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1023px) 45px, 65px"
            />
        </div>
    );
}

function ToolsRow({ tools }: { tools: readonly (typeof TOOL_LOGOS)[number][] }) {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-[16.65px]">
            {tools.map((tool) => (
                <ToolLogo key={tool.file} file={tool.file} label={tool.label} />
            ))}
        </div>
    );
}

export function TechSeoPythonCalicutToolsSection() {
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

                <div className="flex w-full max-w-[334px] flex-col items-center gap-[16.59px] lg:max-w-none lg:gap-0">
                    <div className="flex w-full flex-col items-center gap-[16.59px] lg:hidden">
                        <ToolsRow tools={MOBILE_TOOLS_ROW_1} />
                        <div className="flex w-full max-w-[292px] justify-center">
                            <ToolsRow tools={MOBILE_TOOLS_ROW_2} />
                        </div>
                    </div>

                    <div className="hidden flex-row flex-wrap items-center justify-center gap-[23.91px] lg:flex">
                        {TOOL_LOGOS.map((tool) => (
                            <ToolLogo key={tool.file} file={tool.file} label={tool.label} />
                        ))}
                    </div>
                </div>

                <p className="sr-only">
                    Python course tools include Python, Django, React.js, LangChain, NumPy, Pandas,
                    Matplotlib, MySQL, OpenAI, GitHub, and Streamlit.
                </p>

                <TechSeoSectionBottomRule inset />
            </div>
        </section>
    );
}
