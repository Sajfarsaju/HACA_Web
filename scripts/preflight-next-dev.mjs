/**
 * On Windows, npm run dev often leaves Next child processes behind when a terminal is closed.
 * Those hold port 3000 and .next/dev/lock. Run kill-next-dev.ps1 before next dev.
 */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

if (process.platform !== "win32") {
  process.exit(0);
}

const ps1 = fileURLToPath(new URL("./kill-next-dev.ps1", import.meta.url));
spawnSync("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", ps1], {
  stdio: "inherit",
});
process.exit(0);
