fetch("header.html")
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById("header-placeholder");
    placeholder.innerHTML = data;

    if (typeof initializeThemeToggle === "function") {
      initializeThemeToggle();
    }
  });