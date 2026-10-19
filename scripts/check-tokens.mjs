// Lint-style guard: scan source files for raw style literals that bypass
// design tokens. Practically we flag:
//   - Hex color literals like #FF7B3F or #fff (anywhere outside the allowed files)
//   - Inline `style={{ color: "rgb(...)" ... }}` blocks referencing colors
//   - font-family declarations
//
// Tailwind v4 arbitrary value syntax like `h-[40px]` or `bg-[#fff]` is
// ALLOWED because it composes with the design system when the value comes
// from a token. We only catch hex *source-text* matches.
//
// Run via `npm run check:tokens`. Exits non-zero on violation.

import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC_DIR = path.join(ROOT, "src");

const ALLOWED_RAW_VALUE_FILES = new Set([
  path.join(SRC_DIR, "styles", "tokens.css"),
  path.join(SRC_DIR, "app", "globals.css"),
]);

const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;
const RGB_RE = /\brgba?\(\s*\d+/g;
const FONT_FAMILY_RE = /fontFamily\s*:/g;

async function* walk(dir) {
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function isSourceFile(p) {
  return /\.(t|j)sx?$/.test(p);
}

async function lintFile(file) {
  if (ALLOWED_RAW_VALUE_FILES.has(file)) return [];
  if (!isSourceFile(file)) return [];

  const text = await readFile(file, "utf8");
  const violations = [];

  for (const m of text.matchAll(HEX_RE)) {
    const line = text.slice(0, m.index).split("\n").length;
    violations.push(`${file}:${line} — hex literal "${m[0]}" (use a token)`);
  }
  for (const m of text.matchAll(RGB_RE)) {
    const line = text.slice(0, m.index).split("\n").length;
    violations.push(`${file}:${line} — rgb()/rgba() literal (use a token)`);
  }
  for (const m of text.matchAll(FONT_FAMILY_RE)) {
    const line = text.slice(0, m.index).split("\n").length;
    violations.push(`${file}:${line} — fontFamily inline declaration (use --font-sans)`);
  }

  return violations;
}

async function main() {
  const all = [];
  for await (const file of walk(SRC_DIR)) {
    all.push(...(await lintFile(file)));
  }
  if (all.length === 0) {
    console.log("[check-tokens] OK: no raw style literals in source");
    return;
  }
  console.error(`[check-tokens] FAILED: ${all.length} violation(s):`);
  for (const v of all) console.error(`  ${v}`);
  process.exit(1);
}

main().catch((err) => {
  console.error(`[check-tokens] CRASH: ${err.message}`);
  process.exit(1);
});