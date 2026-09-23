import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { navigation, pages, site } from "../src/site-data.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function pagePath(page) {
  return page.slug ? path.join(root, page.slug, "index.html") : path.join(root, "index.html");
}

test("all configured pages are generated", async () => {
  assert.equal(pages.length, 7);
  for (const page of pages) await access(pagePath(page));
});

test("every page has shared navigation and one current-page marker", async () => {
  for (const page of pages) {
    const html = await readFile(pagePath(page), "utf8");
    assert.equal((html.match(/class="menu__link"/g) || []).length, navigation.length);
    assert.equal((html.match(/aria-current="page"/g) || []).length, 1);
    assert.match(html, /data-menu-button/);
    assert.match(html, /aria-controls="primary-menu"/);
    assert.match(html, /id="main-content"/);
  }
});

test("generated pages contain no stale reference-site content or unsafe JavaScript links", async () => {
  const forbidden = ["Jianfei", "marslab.tech", "V25k08", "XXXXX", "Lab Lab", "javascript:"];
  for (const page of pages) {
    const html = await readFile(pagePath(page), "utf8");
    for (const value of forbidden) assert.equal(html.includes(value), false, `${page.key} contains ${value}`);
  }
});

test("external links use the confirmed destinations", async () => {
  const home = await readFile(path.join(root, "index.html"), "utf8");
  const publications = await readFile(path.join(root, "publications", "index.html"), "utf8");
  const group = await readFile(path.join(root, "group", "index.html"), "utf8");

  assert.match(home, new RegExp(site.links.scholar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace("&", "&amp;")));
  assert.match(home, new RegExp(site.links.labContact.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(publications, new RegExp(site.links.labPublications.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(group, new RegExp(site.links.labPeople.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("the optimized supplied portrait is present and non-trivial", async () => {
  const portrait = await stat(path.join(root, "assets", "xiuzhen-guo.webp"));
  assert.ok(portrait.size > 50_000);
  assert.ok(portrait.size < 500_000);
});

test("responsive menu and layout styles are present", async () => {
  const css = await readFile(path.join(root, "assets", "site.css"), "utf8");
  const script = await readFile(path.join(root, "assets", "site.js"), "utf8");
  assert.match(css, /\.main-content li \+ li\s*{/);
  assert.doesNotMatch(css, /(?:^|\n)li \+ li\s*{/);
  assert.match(css, /@media \(max-width: 767px\)/);
  assert.match(css, /width: min\(1080px/);
  assert.match(script, /aria-expanded/);
  assert.match(script, /event\.key === "Escape"/);
});
