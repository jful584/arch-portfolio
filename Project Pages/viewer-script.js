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

