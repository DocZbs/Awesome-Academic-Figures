import fs from "node:fs";

const source = fs.readFileSync("DESIGN.md", "utf8").split("---")[1];
const lines = source.split("\n");
let section = "";
let typography = "";
const tokens = [];
for (const line of lines) {
  const top = line.match(/^([a-z]+):/);
  if (top) section = top[1];
  const item = line.match(/^  ([\w-]+): ["'](.+)["']$/);
  if (item && ["colors", "rounded", "spacing"].includes(section)) {
    const prefix = { colors: "color", rounded: "radius", spacing: "space" }[
      section
    ];
    tokens.push(`  --${prefix}-${item[1]}: ${item[2]};`);
  }
  if (section === "typography") {
    const role = line.match(/^  ([\w-]+):$/);
    if (role) typography = role[1];
    const family = line.match(/^    fontFamily: ['"](.+)['"]$/);
    if (family) tokens.push(`  --font-${typography}: ${family[1]};`);
  }
}
const generated = `/* Generated from DESIGN.md. Run npm run check:tokens to detect drift. */\n:root {\n${tokens.join("\n")}\n}\n`;
if (process.argv.includes("--check")) {
  if (fs.readFileSync("src/tokens.css", "utf8") !== generated)
    throw new Error("Runtime tokens have drifted from DESIGN.md");
  console.log("Design token mapping verified.");
} else {
  fs.mkdirSync("src", { recursive: true });
  fs.writeFileSync("src/tokens.css", generated);
}
