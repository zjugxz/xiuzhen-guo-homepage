# Reference Website Audit

Reference: <https://marsyang.site/>

Audit date: 2026-09-23 (Asia/Shanghai)

## Scope And Method

The audit covered every item exposed by the primary navigation, the homepage-only interaction, desktop presentation, a 390 x 844 mobile viewport, internal navigation, images, and outgoing link targets. The content was inspected in a browser using the rendered accessibility tree, DOM metadata, computed styles, and screenshots.

## Information Architecture

The website has six primary pages:

| Navigation label | Path | Main content |
| --- | --- | --- |
| Home | `/` | Portrait, title and affiliations, contact details, About Me, Join My Lab, News |
| Research | `/research/` | Four research directions and collaboration text |
| Awards | `/award/` | Recognition, academic awards, industrial challenge awards, subject competitions |
| Group | `/group/` | Group metadata, open positions, research topics, scholarship links |
| Services | `/services/` | Appointments, editorial roles, chair roles, program committees, organizers, reviewing |
| Friends | `/friends/` | Seniors, juniors, and comrades with profile links |

All six pages loaded successfully during the audit. The navigation correctly marks the current page with `menu__item--active`.

## Visual System

- Theme basis: Hugo Mainroad, with an additional custom stylesheet.
- Typography: Open Sans with Helvetica and Arial fallbacks; body size 14px and line height 22.4px.
- Palette: off-white page background `rgb(247, 247, 247)`, white content surface, near-black navigation/footer, and red active/accent color.
- Desktop container: 1080px wide with a subtle shadow and 25px outer top margin.
- Desktop header: large wordmark and tagline above a horizontal six-item navigation bar.
- Homepage introduction: portrait on the left and professional details on the right, followed by a divider and long-form sections.
- Footer: dark strip with copyright and theme attribution.
- Cards are not used. Content is presented as a single document surface with headings, paragraphs, and lists.

## Responsive Behavior

- Desktop verification: 1440 x 900. The page is centered in a 1080px surface; all six navigation items are visible horizontally.
- Mobile verification: 390 x 844. The outer shadow/container treatment disappears, the portrait and profile text stack vertically, and the navigation becomes a full-width `MENU` toggle.
- The mobile toggle expands into six stacked navigation rows and collapses again after page navigation.
- Internal navigation was exercised from the expanded mobile menu; `RESEARCH` opened `/research/` and the menu returned to its collapsed state.
- No horizontal overflow was observed in the inspected layouts.

## Interactive Elements

| Element | Expected behavior | Audit result |
| --- | --- | --- |
| Site title | Return to Home | Working |
| Desktop navigation | Open one of six pages | Working |
| Mobile `MENU` button | Expand/collapse navigation | Working |
| Mobile navigation item | Navigate and collapse menu | Working |
| Social/profile links | Open the configured external profile | Targets present |
| News/publication links | Open the configured external article or paper | Targets present |
| Lab links | Open MARS Lab pages | Targets present |
| Footer Hugo/Mainroad links | Open in a new tab | Targets present; only these links explicitly use `_blank` |
| Prospective-student information link | Toggle hidden recruitment text | Broken in the inspected page |

## Reference-Site Defects And Risks

1. The prospective-student link uses `javascript:showRecruit()`, but `window.showRecruit` is undefined at runtime. The function text exists in an inline script, while the hidden `#recruit` content remains `display: none` after clicking. The clone should implement this as a real accessible button with `aria-expanded` and a reliable event listener.
2. The homepage news link labelled `Intend to Move` points back to the homepage instead of a paper or project page.
3. The Friends entry `Dr. Qian Hanjie` points back to `/friends/`, which is likely a placeholder or incorrect target.
4. The ClustrMaps image reported zero natural dimensions during inspection, so the third-party visitor-map asset did not render reliably.
5. Several legacy external links use plain HTTP. The new site should prefer HTTPS and revalidate each retained destination.
6. Most external links replace the current page because they do not set a new-tab target. The desired behavior should be chosen deliberately for the new site.

## Assets Observed

- Primary portrait: `https://marsyang.site/portrait.jpg`, intrinsic size 852 x 984.
- Third-party visitor tracker/map: ClustrMaps.
- Fonts: Google Fonts Open Sans 400, 400 italic, and 700.
- Stylesheets: `/css/style.css` and `/css/mystyle.css`.

Reference-site assets and personal content are not automatically authorized for reuse. The implementation must use confirmed Xiuzhen Guo content and authorized images.

## Replication Acceptance Checklist

- Six-page route structure or an explicitly approved replacement.
- Matching desktop proportions, typography, navigation, content rhythm, accent states, and footer.
- Matching mobile stacking and collapsible navigation at small widths.
- Keyboard-accessible navigation and recruitment disclosure.
- Correct current-page indication.
- All retained internal and external links verified.
- No reference-site personal data left in the final build.
- No restricted PDFs or unpublished resources included in the public repository.
