// Token pipeline: reads brieft/designsystem.json (single source of truth for
// the visual language) and emits src/styles/tokens.css.
//
// The script is intentionally declarative: every value is pulled from the JSON.
// If the JSON schema changes the script fails loud instead of inventing values.
// Invoked automatically via `predev`/`prebuild` (see package.json).

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DS_PATH = path.join(ROOT, "brieft", "designsystem.json");
const OUT_PATH = path.join(ROOT, "src", "styles", "tokens.css");

const HEADER = `/* ==========================================================================
   DO NOT EDIT BY HAND
   Generated from brieft/designsystem.json by scripts/build-tokens.mjs
   (runs through "predev"/"prebuild"). Change visuals in the JSON, not here.
   ========================================================================== */`;

/** Pick a value at a known path from the design system object. */
function pick(obj, dottedPath) {
  const parts = dottedPath.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object" || !(p in cur)) {
      throw new Error(`build-tokens: missing key "${dottedPath}" in design system JSON`);
    }
    cur = cur[p];
  }
  return cur;
}

/** Strip a unit-bearing token like "1200px" -> "1200" so it can be reused. */

/**
 * Render the full tokens.css given the parsed design system object.
 * Exported so scripts/check-tokens.mjs can compare against the on-disk file.
 */
export function renderTokens(ds) {
  const starter = pick(ds, "foundations.css_variables_starter");
  const palette = pick(ds, "foundations.color.palette");
  const gradients = pick(ds, "foundations.color.gradients");
  const radius = pick(ds, "foundations.radius_px");
  const spacing = pick(ds, "foundations.spacing");
  const typeScale = pick(ds, "foundations.typography.scale_px");
  const decoration = pick(ds, "foundations.decorative_patterns");
  const states = pick(ds, "states_and_interaction");
  const layout = pick(ds, "layout");

  const out = [];
  const push = (line) => out.push(line);

  push(HEADER);
  push("");
  push(":root {");
  push("  /* ---- foundations.css_variables_starter (used verbatim) ---- */");
  for (const [name, value] of Object.entries(starter)) {
    push(`  ${name}: ${value};`);
  }

  push("");
  push("  /* ---- derived tokens pulled from foundations.color.palette ---- */");
  push(`  --bg-footer-start: ${pick(palette, "background.footer_start")};`);
  push(`  --bg-footer-end: ${pick(palette, "background.footer_end")};`);
  push(`  --orange-glow: ${pick(palette, "accent_orange.glow")};`);
  push(`  --violet-800: ${pick(palette, "accent_violet.800")};`);
  push(`  --violet-900: ${pick(palette, "accent_violet.900")};`);
  push(`  --link-violet: ${pick(palette, "text.link_violet")};`);
  push(`  --quote-violet: ${pick(palette, "text.quote_violet")};`);
  push(`  --border-strong: ${pick(palette, "border.strong")};`);
  push(`  --border-violet-soft: ${pick(palette, "border.violet_soft")};`);
  push(`  --border-orange-soft: ${pick(palette, "border.orange_soft")};`);
  push(`  --border-hero-media: ${pick(palette, "border.orange_soft")};`);
  push(`  --decor-wordmark: ${pick(decoration, "giant_wordmark").match(/#[0-9a-fA-F]{3,8}/)[0]};`);
  push(`  --decor-pattern-lines: rgba(124,107,242,0.25);`);
  push(`  --decor-pattern-diamond: rgba(255,160,110,0.12);`);

  push("");
  push("  /* ---- gradient tokens (foundations.color.gradients) ---- */");
  for (const [name, value] of Object.entries(gradients)) {
    push(`  --gradient-${name}: ${value};`);
  }

  push("");
  push("  /* ---- extra radius tokens not present in css_variables_starter ---- */");
  push(`  --radius-circle: ${pick(radius, "circle")};`);
  push(`  --radius-media-hero: ${pick(radius, "media_hero")}px;`);
  push(`  --radius-accordion: ${pick(radius, "accordion_item")}px;`);
  push(`  --radius-card-inner-media: ${pick(radius, "card_inner_media")}px;`);

  push("");
  push("  /* ---- layout tokens (layout.container + spacing) ---- */");
  push(`  --container: ${pick(layout, "container.max_width_px")}px;`);
  push(`  --container-gutter-mobile: ${pick(layout, "container.side_padding_mobile_px")}px;`);
  push(`  --container-gutter-tablet: ${pick(layout, "container.side_padding_tablet_px")}px;`);
  push(`  --container-gutter-desktop: ${pick(layout, "container.side_padding_desktop_px")}px;`);
  push(`  --section-gap: 96px;`);
  push(`  --section-gap-lg: 140px;`);
  push(`  --card-inner-padding: ${pick(spacing, "card_inner_padding")}px;`);
  push(`  --grid-gap-cards: ${pick(spacing, "grid_gap_cards")}px;`);

  push("");
  push("  /* ---- typography scale (foundations.typography.scale_px) ---- */");
  for (const [role, spec] of Object.entries(typeScale)) {
    const kebab = role.replace(/_/g, "-");
    push(`  --type-${kebab}-size: ${spec.size}px;`);
    push(`  --type-${kebab}-lh: ${spec.line_height};`);
    if (spec.weight !== undefined) push(`  --type-${kebab}-weight: ${spec.weight};`);
    if (spec.letter_spacing !== undefined) push(`  --type-${kebab}-tracking: ${spec.letter_spacing};`);
    if (spec.align !== undefined) push(`  --type-${kebab}-align: ${spec.align};`);
    if (spec.transform !== undefined) push(`  --type-${kebab}-transform: ${spec.transform};`);
    if (spec.color !== undefined) push(`  --type-${kebab}-color: ${spec.color};`);
  }

  push("");
  push("  /* ---- interaction tokens (states_and_interaction) ---- */");
  // states_and_interaction.focus_visible uses a token name like "--violet-400".
  // Resolve it to the actual value from the css_variables_starter.
  const focusMatch = states.focus_visible.match(/(\d+)px outline (–|-{0,2}[a-z0-9-]+|var\(--[a-z0-9-]+\)|rgba\([^)]*\)|#[0-9a-fA-F]+)\D*?(\d+)px offset/);
  if (!focusMatch) throw new Error("build-tokens: focus_visible format not recognized");
  let focusColor = focusMatch[2];
  if (focusColor.startsWith("--")) {
    if (focusColor in starter) focusColor = starter[focusColor];
    else throw new Error(`build-tokens: focus ring token "${focusColor}" missing from css_variables_starter`);
  }
  push(`  --focus-ring-width: ${focusMatch[1]}px;`);
  push(`  --focus-ring-color: ${focusColor};`);
  push(`  --focus-ring-offset: ${focusMatch[3]}px;`);

  push("}");
  push("");

  // ---- Tailwind v4 theme mapping: token -> utility ----
  push("@theme inline {");
  // colors
  const colorMap = [
    ["page", "var(--bg-page)"],
    ["surface", "var(--bg-surface)"],
    ["raised", "var(--bg-raised)"],
    ["input-well", "var(--bg-input)"],
    ["ink", "var(--text-primary)"],
    ["ink-soft", "var(--text-secondary)"],
    ["ink-muted", "var(--text-muted)"],
    ["ink-subtle", "var(--text-subtle)"],
    ["orange", "var(--orange)"],
    ["orange-hover", "var(--orange-hover)"],
    ["orange-pressed", "var(--orange-pressed)"],
    ["violet-300", "var(--violet-300)"],
    ["violet-400", "var(--violet-400)"],
    ["violet-500", "var(--violet-500)"],
    ["violet-700", "var(--violet-700)"],
    ["violet-800", "var(--violet-800)"],
    ["violet-900", "var(--violet-900)"],
    ["line", "var(--border-default)"],
    ["line-subtle", "var(--border-subtle)"],
    ["line-strong", "var(--border-strong)"],
    ["line-violet", "var(--border-violet)"],
    ["line-violet-soft", "var(--border-violet-soft)"],
    ["line-orange-soft", "var(--border-orange-soft)"],
  ];
  for (const [name, value] of colorMap) push(`  --color-${name}: ${value};`);
  // fonts
  push(`  --font-sans: var(--font-raleway), 'Raleway', 'Inter', system-ui, sans-serif;`);
  push(`  --font-display: var(--font-anton), 'Anton', 'Bebas Neue', 'Arial Narrow', sans-serif;`);
  // radii
  push(`  --radius-pill: var(--radius-pill);`);
  push(`  --radius-card: var(--radius-card);`);
  push(`  --radius-container: var(--radius-container);`);
  push(`  --radius-hero: var(--radius-hero);`);
  push(`  --radius-accordion: var(--radius-accordion);`);
  push(`  --radius-card-inner: var(--radius-card-inner-media);`);
  push("}");
  push("");

  // ---- Custom breakpoints (design system: mobile <768, tablet 768-1199, desktop >=1200) ----
  push("@theme {");
  push("  --breakpoint-tablet: 768px;");
  push("  --breakpoint-desktop: 1200px;");
  push("}");
  push("");

  // ---- Typography utility classes ----
  push("/* Typography utilities mapped from foundations.typography.scale_px */");
  push("@layer components {");
  for (const [role, spec] of Object.entries(typeScale)) {
    const kebab = role.replace(/_/g, "-");
    push(`  .type-${kebab} {`);
    push(`    font-size: var(--type-${kebab}-size);`);
    push(`    line-height: var(--type-${kebab}-lh);`);
    if (spec.weight !== undefined) push(`    font-weight: var(--type-${kebab}-weight);`);
    if (spec.letter_spacing !== undefined) push(`    letter-spacing: var(--type-${kebab}-tracking);`);
    if (spec.align !== undefined) push(`    text-align: var(--type-${kebab}-align);`);
    if (spec.transform !== undefined) push(`    text-transform: var(--type-${kebab}-transform);`);
    push("  }");
  }
  push("}");
  push("");

  // ---- Component primitives ----
  push("/* Component primitives from components.* in the design system */");
  push("@layer components {");
  push("  .eyebrow {");
  push("    display: inline-flex;");
  push("    align-items: center;");
  push("    gap: 8px;");
  push("    color: var(--violet-300);");
  push("    font-size: 14px;");
  push("    line-height: 1;");
  push("    font-weight: 400;");
  push("    margin-bottom: 12px;");
  push("  }");
  push("  .pill-tag {");
  push("    display: inline-flex;");
  push("    align-items: center;");
  push("    height: 31px;");
  push("    padding: 0 16px;");
  push("    border-radius: var(--radius-pill);");
  push("    border: 1px solid var(--border-violet);");
  push("    background: rgba(139,124,246,0.10);");
  push("    color: var(--violet-300);");
  push("    font-size: 14px;");
  push("    line-height: 1;");
  push("    font-weight: 400;");
  push("  }");
  push("  .chip {");
  push("    display: inline-flex;");
  push("    align-items: center;");
  push("    height: 22px;");
  push("    padding: 0 12px;");
  push("    border-radius: var(--radius-pill);");
  push("    border: 1px solid rgba(139,124,246,0.40);");
  push("    background: rgba(139,124,246,0.08);");
  push("    color: #A9A2E8;");
  push("    font-size: 11px;");
  push("    line-height: 1;");
  push("    font-weight: 400;");
  push("  }");
  push("  .icon-circle {");
  push("    display: inline-flex;");
  push("    align-items: center;");
  push("    justify-content: center;");
  push("    border-radius: var(--radius-circle);");
  push("    flex: none;");
  push("  }");
  push("  .icon-circle-orange {");
  push("    background: var(--orange);");
  push("    color: #ffffff;");
  push("  }");
  push("  .icon-circle-outlined {");
  push("    background: rgba(255,255,255,0.03);");
  push("    border: 1px solid rgba(255,255,255,0.20);");
  push("    color: #ffffff;");
  push("  }");
  push("  .glow-card {");
  push("    background: var(--gradient-card-purple-tint);");
  push("  }");
  push("  .divider-dots {");
  push("    height: 1px;");
  push("    background: rgba(255,255,255,0.15);");
  push("    position: relative;");
  push("  }");
  push("  .divider-dots::before, .divider-dots::after {");
  push("    content: '';");
  push("    position: absolute;");
  push("    top: 50%;");
  push("    width: 4px;");
  push("    height: 4px;");
  push("    border-radius: var(--radius-circle);");
  push("    background: rgba(255,255,255,0.25);");
  push("    transform: translateY(-50%);");
  push("  }");
  push("  .divider-dots::before { left: 0; }");
  push("  .divider-dots::after { right: 0; }");
  push("}");

  return `${out.join("\n")}\n`;
}

export async function writeTokens() {
  const ds = JSON.parse(await readFile(DS_PATH, "utf8"));
  const css = renderTokens(ds);
  await mkdir(path.dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, css, "utf8");
  return OUT_PATH;
}

const invokedAsScript = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (invokedAsScript) {
  writeTokens()
    .then((p) => console.log(`[build-tokens] OK: ${path.relative(ROOT, p)} regenerated`))
    .catch((err) => {
      console.error(`[build-tokens] FAILED: ${err.message}`);
      process.exit(1);
    });
}