/**
 * Second pass: fix any empty-alt Image/img still missing aria-hidden (entire app).
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const MEANINGFUL_LIST = fs
    .readFileSync(path.join(ROOT, "scripts/alt-needs-description.txt"), "utf8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => {
        const m = line.match(/^(.+):(\d+)/);
        return m ? `${m[1]}:${m[2]}` : null;
    })
    .filter(Boolean);
const MEANINGFUL_KEYS = new Set(MEANINGFUL_LIST);

const EXT = new Set([".tsx", ".jsx"]);
const SKIP = new Set(["node_modules", ".next", "dist", "build", "scripts"]);

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
    return text.slice(start, Math.min(start + 1200, text.length));
}

function isEmptyAlt(tag) {
    return /\balt\s*=\s*(?:""|''|\{\s*["']\s*["']\s*\}|\{\s*\})/.test(tag);
}

function isAriaHidden(tag) {
    return /\baria-hidden(?:\s*=\s*(?:"true"|'true'|\{true\})|(?=[\s/>]))/.test(tag);
}

function addAriaHidden(tag) {
    const altMatch = tag.match(/\balt\s*=\s*(?:""|''|\{[^}]*\})/);
    if (altMatch) {
        const idx = tag.indexOf(altMatch[0]) + altMatch[0].length;
        return tag.slice(0, idx) + ' aria-hidden="true"' + tag.slice(idx);
    }
    return tag.replace(/^(<[A-Za-z]+)/, '$1 aria-hidden="true"');
}

let fixed = 0;
for (const file of walk(ROOT)) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    let text = fs.readFileSync(file, "utf8");
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
        if (!isEmptyAlt(tag) || isAriaHidden(tag)) continue;
        if (MEANINGFUL_KEYS.has(`${rel}:${line}`)) continue;
        replacements.push({
            start: m.index,
            end: m.index + tag.length,
            newTag: addAriaHidden(tag),
        });
        fixed++;
    }
    replacements.sort((a, b) => b.start - a.start);
    for (const r of replacements) {
        text = text.slice(0, r.start) + r.newTag + text.slice(r.end);
    }
    if (replacements.length) fs.writeFileSync(file, text);
}
console.log(JSON.stringify({ fixed }));
