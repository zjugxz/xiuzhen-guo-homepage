import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { pages } from "../src/site-data.mjs";
import { renderPage } from "../src/template.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

for (const page of pages) {
  const directory = page.slug ? path.join(root, page.slug) : root;
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), renderPage(page), "utf8");
}

console.log(`Built ${pages.length} pages.`);
