import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function walk(dir, out = []) {
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        if (fs.statSync(p).isDirectory()) {
            if (name === "node_modules" || name === ".next") continue;
            walk(p, out);
        } else if (name.includes("TrustedPress") && name.endsWith(".tsx")) {
            out.push(p);
        }
    }
    return out;
}

for (const file of walk(root)) {
    let content = fs.readFileSync(file, "utf8").replace(/^\uFEFF/gm, "");
    if (!content.includes("pressLogoAlt")) continue;

    content = content.replace(
        /^import \{ pressLogoAlt \} from "@\/lib\/image-alt-text";\r?\n(\uFEFF)?"use client";\r?\n\r?\n/,
        '"use client";\n\nimport { pressLogoAlt } from "@/lib/image-alt-text";\n'
    );

    fs.writeFileSync(file, content, "utf8");
    console.log("fixed", path.relative(root, file));
}
