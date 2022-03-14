const link = document.querySelector(".header__nav--icon");
const mobileMenu = document.querySelector(".header__nav__main");
const iconMenu = document.querySelector(".hamburger");

link.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-menu");
  if (mobileMenu.classList.contains("show-menu")) {
    iconMenu.src = "images/icon-close.svg";
  } else {
    iconMenu.src = "images/icon-hamburger.svg";
  }
});
