



/*
const gridImages = document.querySelectorAll(".image-grid img");




let currentIndex = 0;

function next(n) {
  currentIndex = Number(viewerImage.dataset.index);  
  showImage(currentIndex += n);
}

function showImage(n) {

  if (n > gridImages.length) {imageIndexJS = 0;}
  if (n < 1) {imageIndexJS = gridImages.length}

  document.getElementById("viewerImage").src = gridImages[n].src
  document.getElementById("viewerCaption").innerHTML = gridImages[n].dataset.caption


}
*/




const gridImages = document.querySelectorAll(".image-grid img, .image-grid video");
const viewerImage = document.getElementById("viewerImage");
const viewerCaption = document.getElementById("viewerCaption");
const viewerContainer = document.getElementById("viewer-section");

let currentIndex = 0;

gridImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
    viewerContainer.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

function next(n) {
  showImage(currentIndex + n);
}

function showImage(n) {
  if (n >= gridImages.length) n = 0;
  if (n < 0) n = gridImages.length - 1;

  currentIndex = n;
  const img = gridImages[n];

  viewerImage.classList.add("fade-out");

  setTimeout(() => {
    viewerImage.src = img.src;
    viewerImage.dataset.index = n;
    viewerCaption.textContent = img.dataset.caption || "";
    viewerImage.classList.remove("fade-out");
  }, 200);
}

/* =========================================
   FULLSCREEN LIGHTBOX
========================================= */

viewerImage.style.cursor = "zoom-in";

viewerImage.addEventListener("click", openLightbox);

function openLightbox() {

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  // Create image
  const lightboxImg = document.createElement("img");
  lightboxImg.className = "lightbox-image";
  lightboxImg.src = viewerImage.src;

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close";
  closeBtn.innerHTML = "&times;";

  // Prev button
  const prevBtn = document.createElement("button");
  prevBtn.className = "lightbox-nav lightbox-prev";
  prevBtn.innerHTML = "❮";

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.className = "lightbox-nav lightbox-next";
  nextBtn.innerHTML = "❯";

  // Add elements
  overlay.appendChild(lightboxImg);
  overlay.appendChild(closeBtn);
  overlay.appendChild(prevBtn);
  overlay.appendChild(nextBtn);

  document.body.appendChild(overlay);

  document.body.style.overflow = "hidden";

  // Close functions
  function closeLightbox() {
    overlay.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", keyHandler);
  }

  // Keyboard controls
  function keyHandler(e) {
    if (e.key === "Escape") {
      closeLightbox();
    }

    if (e.key === "ArrowRight") {
      changeLightboxImage(1);
    }

    if (e.key === "ArrowLeft") {
      changeLightboxImage(-1);
    }
  }

  document.addEventListener("keydown", keyHandler);

  // Click outside image closes
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  closeBtn.addEventListener("click", closeLightbox);

  // Change image
  function changeLightboxImage(direction) {
    currentIndex += direction;

    if (currentIndex >= gridImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = gridImages.length - 1;

    lightboxImg.src = gridImages[currentIndex].src;

    // ALSO update main viewer
    showImage(currentIndex);
  }

  prevBtn.addEventListener("click", () => {
    changeLightboxImage(-1);
  });

  nextBtn.addEventListener("click", () => {
    changeLightboxImage(1);
  });
}