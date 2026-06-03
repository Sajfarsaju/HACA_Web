import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd());

const smarterLearnBlock = `function FeatureIcon({ item }: { item: FeatureItem }) {
    return (
        <span className="inline-flex h-[26px] w-[26px] shrink-0 items-start justify-start p-0 sm:h-[30px] sm:w-[30px]">
            <img
                src={item.iconSrc}
                alt="" aria-hidden="true"
                width={30}
                height={30}
                className="block h-[26px] w-[26px] object-contain object-left-top sm:h-[30px] sm:w-[30px]"
                loading="lazy"
                decoding="async"
                draggable={false}
            />
        </span>
    );
}`;

const smarterLearnReplacement = `function FeatureIcon({ item }: { item: FeatureItem }) {
    return <MarketingFeatureIcon src={item.iconSrc} />;
}`;

const exclusiveBenefitsImgBlock = `            <img
                src="/photos/schools/marketing/placements/placement-cta-star-tr.svg"
                alt=""
                width={297}
                height={301}
                className="pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,72%)] max-sm:w-[min(200px,58%)] select-none"
                aria-hidden
            />
            <img
                src="/photos/schools/marketing/placements/placement-cta-star-bl.svg"
                alt=""
                width={246}
                height={250}
                className="pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,68%)] max-sm:w-[min(180px,55%)] select-none"
                aria-hidden
            />`;

const exclusiveBenefitsReplacement = `            <PlacementCtaDecorativeStars />`;

const aeCtaImgBlock = `                    <img
                        src="/photos/schools/marketing/placements/placement-cta-star-tr.svg"
                        alt=""
                        width={297}
                        height={301}
                        className="pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,60%)] select-none max-sm:w-[min(180px,50%)]"
                        aria-hidden
                    />
                    <img
                        src="/photos/schools/marketing/placements/placement-cta-star-bl.svg"
                        alt=""
                        width={246}
                        height={250}
                        className="pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,55%)] select-none max-sm:w-[min(160px,45%)]"
                        aria-hidden
                    />`;

const aeCtaReplacement = `                    <PlacementCtaDecorativeStars
                        topRightClassName="pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,60%)] select-none max-sm:w-[min(180px,50%)]"
                        bottomLeftClassName="pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,55%)] select-none max-sm:w-[min(160px,45%)]"
                    />`;

function walk(dir, out = []) {
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const st = fs.statSync(p);
        if (st.isDirectory()) {
            if (name === "node_modules" || name === ".next") continue;
            walk(p, out);
        } else if (name.endsWith(".tsx")) out.push(p);
    }
    return out;
}

function ensureImport(content, importLine) {
    if (content.includes(importLine)) return content;
    const useClient = content.startsWith('"use client"') || content.startsWith("'use client'");
    if (useClient) {
        const lines = content.split("\n");
        let i = 0;
        if (lines[0].startsWith('"use client"') || lines[0].startsWith("'use client'")) i = 1;
        while (i < lines.length && lines[i].trim() === "") i++;
        lines.splice(i, 0, importLine);
        return lines.join("\n");
    }
    return `${importLine}\n${content}`;
}

const files = walk(root);
let updated = 0;

for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;
    const norm = (s) => s.replace(/\r\n/g, "\n");
    let nContent = norm(content);

    if (nContent.includes(norm(smarterLearnBlock))) {
        content = nContent.replace(norm(smarterLearnBlock), norm(smarterLearnReplacement));
        content = ensureImport(
            content,
            'import { MarketingFeatureIcon } from "@/components/marketing/MarketingFeatureIcon";'
        );
        changed = true;
    }

    if (nContent.includes(norm(exclusiveBenefitsImgBlock))) {
        content = nContent.replace(norm(exclusiveBenefitsImgBlock), norm(exclusiveBenefitsReplacement));
        content = ensureImport(
            content,
            'import { PlacementCtaDecorativeStars } from "@/components/marketing/PlacementCtaDecorativeStars";'
        );
        changed = true;
    }

    if (nContent.includes(norm(aeCtaImgBlock))) {
        content = nContent.replace(norm(aeCtaImgBlock), norm(aeCtaReplacement));
        content = ensureImport(
            content,
            'import { PlacementCtaDecorativeStars } from "@/components/marketing/PlacementCtaDecorativeStars";'
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        updated++;
        console.log("updated", path.relative(root, file));
    }
}

console.log(`Done. ${updated} files updated.`);
