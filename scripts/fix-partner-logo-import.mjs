import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const importLine = 'import { partnerLogoAltFromFilename } from "@/lib/image-alt-text";';

function walk(dir, out = []) {
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        if (fs.statSync(p).isDirectory()) {
            if (name === "node_modules" || name === ".next") continue;
            walk(p, out);
        } else if (name.endsWith(".tsx")) {
            const c = fs.readFileSync(p, "utf8");
            if (c.includes("partnerLogoAltFromFilename") && !c.includes(importLine)) out.push(p);
        }
    }
    return out;
}

for (const file of walk(root)) {
    let content = fs.readFileSync(file, "utf8");
    const norm = (s) => s.replace(/\r\n/g, "\n");
    let n = norm(content);
    if (n.includes(importLine)) continue;
    n = n.replace(
        /^import Image from "next\/image";\n/,
        `import Image from "next/image";\n${importLine}\n`
    );
    content = n;
    fs.writeFileSync(file, content);
    console.log("fixed", path.relative(root, file));
}
