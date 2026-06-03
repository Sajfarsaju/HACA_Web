import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const MEANINGFUL = fs
    .readFileSync(path.join(ROOT, "scripts/alt-needs-description.txt"), "utf8")
    .trim()
    .split("\n")
    .filter(Boolean);

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

function lineNum(text, idx) {
    return text.slice(0, idx).split("\n").length;
}

function isEmptyAlt(tag) {
    return /\balt\s*=\s*(?:""|''|\{\s*["']\s*["']\s*\})/.test(tag);
}

function isAriaHidden(tag) {
    return /\baria-hidden(?:\s*=\s*(?:"true"|'true'|\{true\})|(?=[\s/>]))/.test(tag);
}

const entries = [];
for (const line of MEANINGFUL) {
    const m = line.match(/^(.+):(\d+) \| (.+)$/);
    if (!m) continue;
    const [, file, lineStr, srcHint] = m;
    const filePath = path.join(ROOT, file);
    const text = fs.readFileSync(filePath, "utf8");
    const re = /<(?:Image|img)\b/gi;
    let match;
    let idx = 0;
    while ((match = re.exec(text)) !== null) {
        const ln = lineNum(text, match.index);
        const tag = extractTag(text, match.index);
        if (ln !== Number(lineStr) && !isEmptyAlt(tag)) continue;
        if (!isEmptyAlt(tag) || isAriaHidden(tag)) continue;
        if (ln === Number(lineStr) || (file.includes("DesignFigmaRecognized") && /tile\.layers/.test(tag))) {
            entries.push({
                file,
                line: ln,
                srcHint,
                instance: ++idx,
            });
        }
    }
}

// Expand DesignFigma: all empty-alt without aria-hidden in file
const figmaPath = path.join(ROOT, "components/design/DesignFigmaRecognizedSection.tsx");
const figmaText = fs.readFileSync(figmaPath, "utf8");
const figmaRe = /<(?:Image|img)\b/gi;
let fm;
let figmaCount = 0;
while ((fm = figmaRe.exec(figmaText)) !== null) {
    const tag = extractTag(figmaText, fm.index);
    if (isEmptyAlt(tag) && !isAriaHidden(tag) && /tile\.layers/.test(tag)) {
        figmaCount++;
        entries.push({
            file: "components/design/DesignFigmaRecognizedSection.tsx",
            line: lineNum(figmaText, fm.index),
            srcHint: "tile.layers[layerIdx] (Figma showcase tile)",
            instance: figmaCount,
        });
    }
}

const unique = [];
const seen = new Set();
for (const e of entries) {
    const k = `${e.file}:${e.line}:${e.instance}`;
    if (seen.has(k)) continue;
    seen.add(k);
    unique.push(e);
}

const byGroup = {};
for (const e of unique) {
    let group = "Other";
    if (e.file.includes("TrustedPress") || e.file.includes("AeTrustedPress")) group = "Press / media logos";
    else if (e.file.includes("Agency") && e.file.includes("Intro")) group = "Partner agency logos";
    else if (e.file.includes("design-school/courses")) group = "Design School course hero images";
    else if (e.file.includes("projects/page")) group = "Design student project";
    else if (e.file.includes("Testimonial") || e.srcHint.includes("src!")) group = "Student / testimonial portraits";
    else if (e.file.includes("LearningExperience") || e.file.includes("WhyChoose") || e.file.includes("FigmaRecognized") || e.file.includes("StudentsWork") || e.file.includes("StudentProjects")) group = "Design program / portfolio photos";
    else if (e.file.includes("DesignHeroVideoTransition")) group = "Design hero content photos";
    else if (e.file.includes("MarketingImpact") || e.file.includes("Haca360")) group = "Video thumbnail / campus life";
    else if (e.file.includes("TechPathSection")) group = "Tech course card backgrounds";
    if (!byGroup[group]) byGroup[group] = [];
    byGroup[group].push(e);
}

let md = `# Category 2: Images needing descriptive alt text\n\n`;
md += `**${unique.length} image instances** across **${new Set(unique.map((e) => e.file)).size} files** (audit line list has ${MEANINGFUL.length} entries; some lines map to multiple tags).\n\n`;

for (const [group, items] of Object.entries(byGroup)) {
    md += `## ${group} (${items.length})\n\n`;
    for (const e of items) {
        md += `- \`${e.file}:${e.line}\` — ${e.srcHint}\n`;
    }
    md += `\n`;
}

fs.writeFileSync(path.join(ROOT, "scripts/alt-needs-description.md"), md);
console.log(JSON.stringify({ instances: unique.length, groups: Object.keys(byGroup).length }));
