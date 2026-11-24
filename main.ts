// Weirdest Job Title: Blind Judge Showdown
// Writes one job title (1-60 Unicode code points) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TITLE = "Lead Mourner for Retired Office Printers";
const MAX_CODE_POINTS = 60;

const codePoints = [...TITLE];
if (codePoints.length < 1 || codePoints.length > MAX_CODE_POINTS) {
  throw new Error(`title must be 1-${MAX_CODE_POINTS} code points, got ${codePoints.length}`);
}
if (TITLE.trim().length === 0) {
  throw new Error("title must not be only whitespace");
}
const outDir = "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, TITLE, "utf8");
console.log(`Wrote ${codePoints.length} code points to ${outFile}`);
