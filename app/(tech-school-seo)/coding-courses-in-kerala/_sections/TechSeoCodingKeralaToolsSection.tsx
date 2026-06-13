import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-tools-heading";

// Simple Icons CDN — brand-colored SVGs, no Next.js config needed
const TOOLS = [
    { name: "HTML5",        src: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3",         src: "https://cdn.simpleicons.org/css3/FFFFFF" },
    { name: "JavaScript",   src: "https://cdn.simpleicons.org/javascript" },
    { name: "React.js",     src: "https://cdn.simpleicons.org/react" },
    { name: "Node.js",      src: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express.js",   src: "https://cdn.simpleicons.org/express/FFFFFF" },
    { name: "MongoDB",      src: "https://cdn.simpleicons.org/mongodb" },
    { name: "Mongoose",     src: "https://cdn.simpleicons.org/mongoose" },
    { name: "Redux",        src: "https://cdn.simpleicons.org/redux" },
    { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "JWT",          src: "https://cdn.simpleicons.org/jsonwebtokens/FF7B00" },
    { name: "Gemini API",   src: "https://cdn.simpleicons.org/googlegemini/FFFFFF" },
    { name: "Git",          src: "https://cdn.simpleicons.org/git" },
    { name: "GitHub",       src: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "VS Code",      src: "https://cdn.simpleicons.org/visualstudiocode/FFFFFF" },
] as const;

export function TechSeoCodingKeralaToolsSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-labelledby={HEADING_ID}
        >
            <TechSeoSectionBottomRule />

            <div className="flex flex-col items-center gap-[30px] px-5 pb-10 pt-0 lg:gap-[40px] lg:px-[60px] lg:pb-[60px]">
                <h2
                    id={HEADING_ID}
                    className="m-0 w-full max-w-[230px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[866px] lg:text-[40px]"
                >
                    Tools You&apos;ll Master
                </h2>

                <div className="flex w-full max-w-[700px] flex-wrap items-center justify-center gap-[20px] lg:max-w-[1100px] lg:gap-[28px]">
                    {TOOLS.map((tool) => (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            key={tool.name}
                            src={tool.src}
                            alt={tool.name}
                            title={tool.name}
                            width={44}
                            height={44}
                            className="h-[44px] w-[44px] lg:h-[52px] lg:w-[52px]"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
