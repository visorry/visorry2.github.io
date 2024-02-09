const body = document.querySelector("body");
const loader = document.querySelector("#loader");
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLink = document.querySelectorAll(".mobile-menu li a");
const header = document.querySelector(".header");
function hamburgerActivated() {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
}

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerActivated();
    body.classList.remove("hide-scroll");
  });
});

hamburger.addEventListener("click", () => {
  hamburgerActivated();
  body.classList.toggle("hide-scroll");
});
