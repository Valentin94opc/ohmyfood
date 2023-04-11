const contentToHideWrapper = document.getElementById("content-to-hide-wrapper");
const loader = document.getElementById("loader");

window.addEventListener("load", function () {
  setTimeout(function () {
    contentToHideWrapper.classList.remove("hide-content");
    loader.classList.add("hide-content");
  }, 3000);
});
