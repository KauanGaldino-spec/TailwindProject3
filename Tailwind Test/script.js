const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  if (sideMenu) {
    sideMenu.style.transform = "translateX(0)";
  }
}

function closeMenu() {
  if (sideMenu) {
    sideMenu.style.transform = "translateX(100%)";
  }
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
  }
});

const sideMenuLinks = document.querySelectorAll("#sideMenu a");
if (sideMenuLinks.length > 0) {
  sideMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    !sideMenu.contains(e.target) &&
    !e.target.closest(".menu-toggle-button")
  ) {
    closeMenu();
  }
});

document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
