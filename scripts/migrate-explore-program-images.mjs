import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const targets = [
    "app/(design-school-seo)/graphic-designing-course-in-kerala/_sections/GraphicDesigningKeralaExploreProgramsSection.tsx",
    "app/(design-school-seo)/graphic-designing-course-in-calicut/_sections/GraphicDesigningCalicutExploreProgramsSection.tsx",
    "app/(design-school-seo)/ui-ux-design-course-in-calicut/_sections/UiUxDesignCalicutExploreProgramsSection.tsx",
    "components/design/VideoEditingCalicutExploreProgramsSection.tsx",
];

const norm = (s) => s.replace(/\r\n/g, "\n");

const enquireOld = `            <img
                className="ml-2"
                src="/photos/schools/design/arrow_cool_down.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
            />`;

const enquireNew = `            <Image
                className="ml-2"
                src="/photos/schools/design/arrow_cool_down.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
            />`;

const cardOld = `            <div className={[p.imageWrapClassName, "z-[1] overflow-hidden"].join(" ")} aria-hidden>
                <img
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    className={["h-full w-full", p.imageObjectClassName].join(" ")}
                    style={p.imageStyle}
                    loading="lazy"
                    decoding="async"
                />
            </div>`;

const cardOld2 = `            <div className={[p.imageWrapClassName, "z-[1] overflow-hidden"].join(" ")} aria-hidden>
                <img
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    className={["h-full w-full", p.imageObjectClassName].join(" ")}
                    style={p.imageStyle}
                />
            </div>`;

const cardNew = `            <div className={[p.imageWrapClassName, "relative z-[1] overflow-hidden"].join(" ")} aria-hidden>
                <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className={p.imageObjectClassName}
                    style={p.imageStyle}
                    sizes="(max-width: 1024px) 360px, 440px"
                />
            </div>`;

for (const rel of targets) {
    const file = path.join(root, rel);
    if (!fs.existsSync(file)) {
        console.warn("skip missing", rel);
        continue;
    }
    let content = norm(fs.readFileSync(file, "utf8"));
    let changed = false;
    if (content.includes(norm(enquireOld))) {
        content = content.replace(norm(enquireOld), norm(enquireNew));
        changed = true;
    }
    if (content.includes(norm(cardOld))) {
        content = content.replace(norm(cardOld), norm(cardNew));
        changed = true;
    } else if (content.includes(norm(cardOld2))) {
        content = content.replace(norm(cardOld2), norm(cardNew));
        changed = true;
    }
    if (!content.includes('import Image from "next/image"')) {
        if (content.startsWith('"use client"')) {
            content = content.replace(
                /^(["']use client["'];?\s*\n)/,
                '$1\nimport Image from "next/image";\n'
            );
        } else {
            content = `import Image from "next/image";\n${content}`;
        }
        changed = true;
    }
    if (changed) {
        fs.writeFileSync(file, content);
        console.log("updated", rel);
    }
}
