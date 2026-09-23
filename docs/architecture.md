# Architecture

Last updated: 2026-09-23

## Decision

The site uses a zero-dependency static generator written with Node.js ES modules. This keeps the generated website compatible with GitHub Pages while retaining shared templates and centralized content.

No framework, package installation, server runtime, database, or CMS is required for the current version.

## Source And Output

- `src/site-data.mjs` owns the seven-page content, navigation labels, profile details, and external links.
- `src/template.mjs` renders one shared header, navigation, main area, metadata block, and footer.
- `scripts/build.mjs` writes root `index.html` and one `index.html` inside each section directory.
- `assets/site.css` implements the reference site's proportions, typography, colors, content rhythm, and responsive behavior.
- `assets/site.js` implements the mobile navigation toggle with `aria-expanded`, Enter activation, and Escape dismissal.
- `assets/xiuzhen-guo.webp` is the authorized portrait extracted from the PPTX and resized to 800 x 999 for delivery.
- `tests/site.test.mjs` verifies generated routes, current-page state, stale reference data, links, portrait size, and responsive menu code.

## Routes

| Section | Route |
| --- | --- |
| Home | `/` |
| Research | `/research/` |
| Publications | `/publications/` |
| Awards | `/awards/` |
| Group | `/group/` |
| Services | `/services/` |
| Funding | `/funding/` |

All asset and route references are relative. The generated files therefore work at a local root and under the GitHub Pages project path `/xiuzhen-guo-homepage/` without rewriting URLs.

## Responsive Behavior

- The desktop surface is capped at 1080px and uses the reference site's off-white background, white document surface, subtle shadow, black navigation bar, and red active state.
- At 768px, the full horizontal navigation remains visible because all seven labels fit without overflow.
- Below 768px, the page becomes full-width, the profile stacks vertically, and JavaScript enables the `MENU` disclosure.
- Without JavaScript, the mobile navigation remains visible as a stacked list rather than becoming inaccessible.

## Content Maintenance

1. Edit `src/site-data.mjs`.
2. Run `node scripts/build.mjs`.
3. Run `node --test tests/site.test.mjs`.
4. Inspect the affected routes in the local preview.

Do not edit generated HTML directly because the next build replaces it.

## Publication Boundary

The source PPTX and extracted original JPG remain local and are ignored by Git. Only the optimized portrait and confirmed public content belong in the public repository. GitHub Pages configuration and deployment require a separate approved task.
