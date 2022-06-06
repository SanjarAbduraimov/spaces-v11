const header = document.querySelector(".header");
let currentCordinate = 0;
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  console.log(scroll, "scroll");

  if (scrollY > currentCordinate) {
    header.classList.remove("pinned");
    header.classList.add("unpinned");
  } else {
    header.classList.remove("unpinned");
    header.classList.add("pinned");
  }

  currentCordinate = scrollY;
});
