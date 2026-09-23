import { navigation, site } from "./site-data.mjs";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function pagePrefix(page) {
  return page.slug ? "../" : "";
}

function routeHref(page, item) {
  const prefix = pagePrefix(page);
  return item.slug ? `${prefix}${item.slug}/` : prefix || "./";
}

function renderNavigation(page) {
  const items = navigation
    .map((item) => {
      const active = item.key === page.key;
      return `
        <li class="menu__item${active ? " menu__item--active" : ""}">
          <a class="menu__link" href="${routeHref(page, item)}"${active ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a>
        </li>`;
    })
    .join("");

  return `<nav class="menu" aria-label="Primary navigation" data-menu-root>
      <button class="menu__button" type="button" aria-expanded="false" aria-controls="primary-menu" data-menu-button>
        <span>Menu</span>
      </button>
      <ul class="menu__list" id="primary-menu" data-menu-list>${items}
      </ul>
    </nav>`;
}

export function renderPage(page) {
  const prefix = pagePrefix(page);
  const title = page.key === "home" ? site.name : `${page.title} - ${site.name}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="theme-color" content="#2a2a2a">
    <title>${escapeHtml(title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${prefix}assets/site.css">
    <script src="${prefix}assets/site.js" defer></script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="site-shell">
      <header class="site-header">
        <div class="brand">
          <a class="brand__link" href="${routeHref(page, navigation[0])}" aria-label="${escapeHtml(site.name)} home">
            <span class="brand__name">${escapeHtml(site.displayName)}</span>
            <span class="brand__tagline">${escapeHtml(site.tagline)}</span>
          </a>
        </div>
        ${renderNavigation(page)}
      </header>
      <main class="main-content" id="main-content">
        ${page.body.trim()}
      </main>
      <footer class="site-footer">
        <p>&copy; ${site.year} ${escapeHtml(site.name)}.</p>
      </footer>
    </div>
  </body>
</html>
`;
}
