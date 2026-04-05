const BASE = "/arch-portfolio/";

//ADD IN BASE to fetch when pushing to git

fetch(BASE + "/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    if (typeof initializeThemeToggle === "function") {
      initializeThemeToggle();
    }
  });