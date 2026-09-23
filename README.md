# Xiuzhen Guo Homepage

Static academic homepage for Dr. Xiuzhen Guo, based on the approved content in `相关资料.pptx` and the visual structure of <https://marsyang.site/>.

## Local Preview

The project has no third-party runtime dependencies. Node.js 20 or later is sufficient.

```powershell
node scripts/build.mjs
node scripts/serve.mjs
```

Open <http://127.0.0.1:4173/>.

Run the automated checks with:

```powershell
node scripts/build.mjs
node --test tests/site.test.mjs
```

## Structure

- `src/site-data.mjs`: all page content, navigation, and external URLs.
- `src/template.mjs`: shared HTML shell, navigation, metadata, and footer.
- `assets/site.css`: shared responsive visual system.
- `assets/site.js`: accessible mobile menu behavior.
- `scripts/build.mjs`: generates the seven static pages.
- `scripts/serve.mjs`: local preview server.
- `tests/site.test.mjs`: structural, content-safety, link, asset, and responsive checks.
- `docs/`: requirements, audits, architecture, progress, and verification evidence.

Generated HTML is committed so the site can be hosted directly by GitHub Pages. GitHub Pages deployment has not yet been enabled.
