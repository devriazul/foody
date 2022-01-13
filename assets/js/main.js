const navBtn = document.querySelector("#nav-btn");
const navBar = document.querySelector(".nav__list");
const headerArea = document.querySelector(".header-area");
const navLinks = document.querySelectorAll(".nav__link");
const section = document.querySelectorAll("section");
const preLoader = document.querySelector(".preloader");
//  Add event listener
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  navBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
  if (scrollY > 100) {
    headerArea.classList.add("active");
  } else {
    headerArea.classList.remove("active");
  }
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav__link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
//  Preloader active function
const loaDer = () => {
  preLoader.classList.add("active");
};
const loaderEnd = () => {
  setInterval(loaDer, 3000);
};
window.onload = loaderEnd;
$(document).ready(function () {
  $("#nav").onePageNav();
});
