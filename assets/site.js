const menuRoot = document.querySelector("[data-menu-root]");
const menuButton = document.querySelector("[data-menu-button]");
const menuList = document.querySelector("[data-menu-list]");

if (menuRoot && menuButton && menuList) {
  const setOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuList.dataset.open = String(open);
  };

  menuRoot.classList.add("menu--ready");
  setOpen(false);

  menuButton.addEventListener("click", () => {
    setOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      menuButton.focus();
    }
  });
}
