import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function patchFile(rel, patches) {
    const p = path.join(ROOT, rel);
    let t = fs.readFileSync(p, "utf8");
    let changed = false;
    for (const [oldStr, newStr] of patches) {
        if (!t.includes(oldStr)) continue;
        t = t.replaceAll(oldStr, newStr);
        changed = true;
    }
    if (changed) fs.writeFileSync(p, t);
    return changed;
}

const pressImport =
    'import { pressLogoAlt } from "@/lib/image-alt-text";\n';
const partnerImport =
    'import { partnerLogoAltFromFilename } from "@/lib/image-alt-text";\n';

const pressFiles = [
    "app/(ae-seo)/ae/_sections/AeTrustedPressStatsSection.tsx",
    "app/(ae-seo)/ae/digital-marketing-course-in-dubai/_sections/DubaiTrustedPressStatsSection.tsx",
    "app/(ae-seo)/ae/digital-marketing-course-in-sharjah/_sections/SharjahTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-calicut/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kannur/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kasaragod/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kerala/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kochi/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kollam/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-malappuram/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-palakkad/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-thrissur/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-trivandrum/_sections/MarketingSeoTrustedPressStatsSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-wayanad/_sections/MarketingSeoTrustedPressStatsSection.tsx",
];

const agencyFiles = [
    "app/(marketing-school-seo)/digital-marketing-course-in-calicut/_sections/MarketingSeoAgencyCalicutIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kannur/_sections/MarketingSeoAgencyKannurIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kasaragod/_sections/MarketingSeoAgencyKasaragodIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kerala/_sections/MarketingSeoAgencyKeralaIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kochi/_sections/MarketingSeoAgencyKochiIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-kollam/_sections/MarketingSeoAgencyKollamIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-malappuram/_sections/MarketingSeoAgencyMalappuramIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-palakkad/_sections/MarketingSeoAgencyPalakkadIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-thrissur/_sections/MarketingSeoAgencyThrissurIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-trivandrum/_sections/MarketingSeoAgencyTrivandrumIntroSection.tsx",
    "app/(marketing-school-seo)/digital-marketing-course-in-wayanad/_sections/MarketingSeoAgencyWayanadIntroSection.tsx",
];

let count = 0;

for (const rel of pressFiles) {
    const p = path.join(ROOT, rel);
    let t = fs.readFileSync(p, "utf8");
    if (!t.includes('from "@/lib/image-alt-text"')) {
        t = t.replace(/^("use client";\n\n)?/m, (m) => (m || "") + pressImport);
        if (!t.includes(pressImport.trim())) {
            t = pressImport + t;
        }
    }
    const before = t;
    t = t.replace(
        /<Image\s+src=\{logo\.src\}\s+alt=""\s/g,
        '<Image src={logo.src} alt={pressLogoAlt(logo.alt)} '
    );
    t = t.replace(
        /src=\{logo\.src\}\s+alt=""/g,
        'src={logo.src} alt={pressLogoAlt(logo.alt)}'
    );
    if (t !== before) {
        fs.writeFileSync(p, t);
        count++;
    }
}

for (const rel of agencyFiles) {
    const p = path.join(ROOT, rel);
    let t = fs.readFileSync(p, "utf8");
    if (!t.includes('from "@/lib/image-alt-text"')) {
        t = t.replace(/^import Image from "next\/image";\n/, `import Image from "next/image";\n${partnerImport}`);
    }
    const before = t;
    t = t.replace(
        /src=\{partnerLogoSrc\(filename\)\}\s+alt=""/g,
        'src={partnerLogoSrc(filename)} alt={partnerLogoAltFromFilename(filename)}'
    );
    if (t !== before) {
        fs.writeFileSync(p, t);
        count++;
    }
}

console.log(JSON.stringify({ pressAgencyUpdated: count }));
