/**
 * Classify empty-alt images and add aria-hidden to decorative ones.
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const ISSUES_PATH = path.join(ROOT, "scripts/alt-issues-list.txt");

const MEANINGFUL_SRC =
    /imageSrcMobile|(?<![a-zA-Z])imageSrc(?![a-zA-Z])|course\.bgImage|src!|partnerLogoSrc|logo\.src|Rectangle 244\.webp|Rectangle 2\.webp|57d01472fcc68dc28b23f66493f860df1603a284\.webp|tile\.layers\[layerIdx\]/;

const MEANINGFUL_LINES = new Set([
    "app/(design-school-seo)/ui-ux-design-course-in-calicut/_sections/UiUxDesignCalicutLearningExperienceSection.tsx:55",
    "app/(design-school-seo)/ui-ux-design-course-in-calicut/_sections/UiUxDesignCalicutWhyChooseSection.tsx:239",
    "components/design/GraphicDesigningCalicutFigmaRecognizedSection.tsx:53",
    "components/design/DesignFigmaRecognizedSection.tsx:112",
]);

function lineNum(text, idx) {
    return text.slice(0, idx).split("\n").length;
}

function extractTag(text, start) {
    let i = start;
    let quote = null;
    while (i < text.length) {
        const c = text[i];
        if (quote) {
            if (c === quote && text[i - 1] !== "\\") quote = null;
            i++;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") {
            quote = c;
            i++;
            continue;
        }
        if (c === ">" && text[i - 1] !== "=") return text.slice(start, i + 1);
        i++;
    }
    return text.slice(start, Math.min(start + 1200, text.length));
}

function getSrc(tag) {
    const staticMatch = tag.match(/\bsrc=["'`]([^"'`]+)/);
    if (staticMatch) return staticMatch[1];
    const dynMatch = tag.match(/\bsrc=\{([^}]+)\}/);
    if (dynMatch) return dynMatch[1].trim();
    return "";
}

function isEmptyAlt(tag) {
    return /\balt\s*=\s*(?:""|''|\{\s*["']\s*["']\s*\}|\{\s*\})/.test(tag);
}

function isAriaHidden(tag) {
    return /\baria-hidden\b/.test(tag);
}

function isMeaningful(file, line, src, tag) {
    const key = `${file}:${line}`;
    if (MEANINGFUL_LINES.has(key)) return true;
    if (MEANINGFUL_SRC.test(src) || MEANINGFUL_SRC.test(tag)) return true;
    if (
        file === "components/design/DesignFigmaRecognizedSection.tsx" &&
        /tile\.layers/.test(tag)
    ) {
        return true;
    }
    if (
        file === "components/design/GraphicDesigningCalicutFigmaRecognizedSection.tsx" &&
        line === 53 &&
        /\bsrc=\{src\}/.test(tag)
    ) {
        return true;
    }
    return false;
}

function addAriaHidden(tag) {
    if (isAriaHidden(tag)) return tag;
    const altMatch = tag.match(/\balt\s*=\s*(?:""|''|\{[^}]*\})/);
    if (altMatch) {
        const idx = tag.indexOf(altMatch[0]) + altMatch[0].length;
        return tag.slice(0, idx) + ' aria-hidden="true"' + tag.slice(idx);
    }
    return tag.replace(/^(<[A-Za-z]+)/, '$1 aria-hidden="true"');
}

function parseIssues() {
    const lines = fs.readFileSync(ISSUES_PATH, "utf8").trim().split("\n");
    return lines.map((line) => {
        const m = line.match(/^(.+):(\d+) \| (.+)$/);
        if (!m) throw new Error("Bad line: " + line);
        return { file: m[1], line: Number(m[2]), src: m[3] };
    });
}

const issues = parseIssues();
const affectedFiles = [...new Set(issues.map((i) => i.file))];

const meaningful = [];
let fixedTags = 0;
let skippedAlready = 0;

for (const rel of affectedFiles) {
    const filePath = path.join(ROOT, rel);
    let text = fs.readFileSync(filePath, "utf8");
    const re = /<(?:Image|img)\b/gi;
    const replacements = [];
    let m;

    while ((m = re.exec(text)) !== null) {
        const line = lineNum(text, m.index);
        const lineText = text.split("\n")[line - 1] ?? "";
        if (/\.test\s*\(|match\s*\(|includes\s*\(|replace\s*\(|search\s*\(/.test(lineText)) {
            continue;
        }

        const tag = extractTag(text, m.index);
        if (!isEmptyAlt(tag)) continue;

        const src = getSrc(tag);
        const auditSrc = issues.find((i) => i.file === rel && i.line === line)?.src ?? src;

        if (isMeaningful(rel, line, auditSrc, tag) || isMeaningful(rel, line, src, tag)) {
            meaningful.push({ file: rel, line, src: auditSrc || src });
            continue;
        }

        if (isAriaHidden(tag)) {
            skippedAlready++;
            continue;
        }

        replacements.push({
            start: m.index,
            end: m.index + tag.length,
            newTag: addAriaHidden(tag),
        });
        fixedTags++;
    }

    replacements.sort((a, b) => b.start - a.start);
    for (const r of replacements) {
        text = text.slice(0, r.start) + r.newTag + text.slice(r.end);
    }
    if (replacements.length) fs.writeFileSync(filePath, text);
}

// Deduplicate meaningful
const seen = new Set();
const meaningfulUnique = meaningful.filter((i) => {
    const k = `${i.file}:${i.line}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
});
meaningfulUnique.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

const meaningfulLines = meaningfulUnique.map(
    (i) => `${i.file}:${i.line} | ${i.src}`
);

fs.writeFileSync(
    path.join(ROOT, "scripts/alt-needs-description.txt"),
    meaningfulLines.join("\n") + "\n"
);
fs.writeFileSync(
    path.join(ROOT, "scripts/alt-categorization-summary.json"),
    JSON.stringify(
        {
            totalIssues: issues.length,
            decorativeFixed: fixedTags,
            alreadyHadAriaHidden: skippedAlready,
            meaningfulCount: meaningfulUnique.length,
            decorativeCount: issues.length - meaningfulUnique.length,
            meaningfulList: meaningfulLines,
        },
        null,
        2
    )
);

console.log(
    JSON.stringify(
        {
            decorativeFixed: fixedTags,
            meaningfulCount: meaningfulUnique.length,
            decorativeCount: issues.length - meaningfulUnique.length,
        },
        null,
        2
    )
);
