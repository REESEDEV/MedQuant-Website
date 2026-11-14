const year = document.getElementById("copyright-year");
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-navigation");

if (header && toggle && navigation) {
  const setMenuOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    toggle.lastElementChild.textContent = open ? "\u2212" : "+";
  };

  header.classList.add("nav-ready");
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });
}
