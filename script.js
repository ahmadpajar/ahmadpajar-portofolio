const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
const themeToggle = document.querySelector(".theme-toggle");

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  menu?.classList.toggle("is-open", !isOpen);
});

const setTheme = (isDark) => {
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  if (themeToggle) {
    themeToggle.innerHTML = isDark
      ? '<span aria-hidden="true">☀</span> Light mode'
      : '<span aria-hidden="true">☾</span> Dark mode';
  }
};

setTheme(localStorage.getItem("theme") === "dark");
themeToggle?.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
