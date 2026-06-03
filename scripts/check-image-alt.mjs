import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const EXT = new Set([".tsx", ".jsx", ".html"]);
const SKIP = new Set(["node_modules", ".next", "dist", "build"]);

function walk(dir, out = []) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        if (SKIP.has(ent.name)) continue;
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) walk(p, out);
        else if (EXT.has(path.extname(ent.name))) out.push(p);
    }
    return out;
}

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
    return text.slice(start, Math.min(start + 800, text.length));
}

function getSrc(tag) {
    const staticMatch = tag.match(/\bsrc=["'`]([^"'`]+)/);
    if (staticMatch) return staticMatch[1];
    const dynMatch = tag.match(/\bsrc=\{([^}]+)\}/);
    if (dynMatch) return dynMatch[1].trim().slice(0, 60);
    return "(dynamic)";
}

function hasAltAttr(tag) {
    return /\balt\s*=/.test(tag);
}

function isEmptyAlt(tag) {
    return /\balt\s*=\s*(?:""|''|\{\s*["']\s*["']\s*\}|\{\s*\})/.test(tag);
}

function isAriaHidden(tag) {
    return /\baria-hidden(?:\s*=\s*(?:"true"|'true'|\{true\})|(?=[\s/>]))/.test(tag);
}

const issues = [];
const files = walk(ROOT).filter((f) => !f.includes("temp_view_svgs") && !f.includes("scripts/check-image-alt"));

for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    const text = fs.readFileSync(file, "utf8");
    const re = /<(?:Image|img)\b/gi;
    let m;
    while ((m = re.exec(text)) !== null) {
        const line = lineNum(text, m.index);
        const lineText = text.split("\n")[line - 1] ?? "";
        // Skip regex/string checks, not real markup
        if (/\.test\s*\(|match\s*\(|includes\s*\(|replace\s*\(|search\s*\(/.test(lineText)) {
            continue;
        }
        const tag = extractTag(text, m.index);
        const src = getSrc(tag);
        const hasAlt = hasAltAttr(tag);
        const emptyAlt = isEmptyAlt(tag);
        const ariaHidden = isAriaHidden(tag);

        if (!hasAlt) {
            issues.push({ file: rel, line, category: "missing-alt", src });
        } else if (emptyAlt && !ariaHidden) {
            issues.push({ file: rel, line, category: "empty-alt", src });
        } else if (emptyAlt && ariaHidden) {
            issues.push({ file: rel, line, category: "empty-alt-decorative", src });
        }
    }
}

const missing = issues.filter((i) => i.category === "missing-alt");
const empty = issues.filter((i) => i.category === "empty-alt");
const decorative = issues.filter((i) => i.category === "empty-alt-decorative");

const allTags = [];
for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    const text = fs.readFileSync(file, "utf8");
    const re = /<(?:Image|img)\b/gi;
    let m;
    while ((m = re.exec(text)) !== null) allTags.push(rel);
}

const byFile = {};
for (const i of [...missing, ...empty]) {
    byFile[i.file] = (byFile[i.file] || 0) + 1;
}

import { writeFileSync } from "fs";

const report = {
    totalImageTags: allTags.length,
    imagesWithDescriptiveAlt: allTags.length - issues.length,
    issues: issues.length,
    missingAltAttribute: missing.length,
    emptyAltNoAriaHidden: empty.length,
    emptyAltDecorative: decorative.length,
    filesAffected: Object.keys(byFile).length,
    missingList: missing,
    emptyByFile: Object.entries(byFile)
        .sort((a, b) => b[1] - a[1])
        .map(([file, count]) => ({ file, count })),
    fullIssueList: [...missing, ...empty].map(
        (i) => `${i.file}:${i.line} | ${i.src}`
    ),
    decorativeList: decorative.map(
        (i) => `${i.file}:${i.line} | ${i.src}`
    ),
};

writeFileSync("scripts/alt-audit-report.json", JSON.stringify(report, null, 2));
writeFileSync("scripts/alt-issues-list.txt", report.fullIssueList.join("\n"));
console.log(JSON.stringify({
    totalImageTags: report.totalImageTags,
    imagesWithDescriptiveAlt: report.imagesWithDescriptiveAlt,
    missingAltAttribute: report.missingAltAttribute,
    emptyAltNoAriaHidden: report.emptyAltNoAriaHidden,
    emptyAltDecorative: report.emptyAltDecorative,
    filesAffected: report.filesAffected,
}, null, 2));
