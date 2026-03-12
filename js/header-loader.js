const BASE = "/arch-portfolio/";

fetch(BASE + "components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    if (typeof initializeThemeToggle === "function") {
      initializeThemeToggle();
    }
  });