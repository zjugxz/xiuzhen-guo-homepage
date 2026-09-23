# Local Website Verification

Date: 2026-09-23 (Asia/Shanghai)

## Scope

Verified the complete local seven-page implementation, shared navigation, responsive layout, supplied portrait, approved external destinations, and the mobile menu. This record covers technical verification, not user acceptance or publication approval.

## Automated Checks

Commands:

```powershell
node scripts/build.mjs
node --test tests/site.test.mjs
```

Result: seven pages built and all six test groups passed.

The checks cover:

- Every configured route has a generated `index.html`.
- Every page has seven navigation links and exactly one current-page marker.
- No generated page contains Jianfei Yang, MARS Lab, placeholder URLs, duplicate `Lab Lab`, or `javascript:` links.
- Google Scholar, WiNet Contact, WiNet Publications, and WiNet People use the confirmed destinations.
- The optimized portrait is present and constrained to a practical public asset size.
- The shared stylesheet and menu script contain the required responsive and keyboard behavior.

## Browser Verification

Local preview: <http://127.0.0.1:4173/>

All seven routes were loaded at 1440 x 900, 768 x 900, and 390 x 844.

- No route had horizontal overflow at any tested viewport.
- Every route showed exactly one active navigation item.
- The portrait and all page resources loaded successfully.
- The desktop and 768px layouts showed the full horizontal navigation.
- The 390px layout showed the collapsed `MENU` control and vertically stacked profile.
- Clicking `MENU` exposed all seven routes.
- Selecting Publications from the mobile menu navigated to `/publications/` and restored the collapsed menu state.
- Pressing Enter on the menu button opened it; pressing Escape closed it and returned focus behavior to the button.
- Browser warning and error logs were empty.

Screenshots were inspected for the desktop homepage, 768px homepage, 390px homepage with collapsed and expanded navigation, and the 390px Services page. No overlap, clipping, broken image, or incoherent wrapping was observed.

## Navigation Alignment Correction

- Scoped the generic adjacent-list-item spacing rule to `.main-content` so it no longer offsets navigation items after Home.
- Desktop browser measurements show all seven navigation links at the same box top (`133.484375px`), text top (`145.484375px`), and height (`44px`).
- Rechecked the expanded 390 x 844 mobile menu: all seven links have equal dimensions and the page has no horizontal overflow.
- Re-ran all six automated test groups successfully and added a regression assertion for the scoped selector.

## Portrait Optimization

- Extracted source: JPEG, 1280 x 1598, 1,114,893 bytes.
- Published asset: WebP, 800 x 999, 268,876 bytes.
- Browser-reported natural dimensions: 800 x 999.
- The source JPEG remains local and ignored by Git.

## Remaining Work

- User review and acceptance of the local site.
- GitHub Pages configuration, push, deployment, and live verification after explicit approval.
- Broader cross-browser testing may be performed before publication if required.
