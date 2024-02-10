const wrapper = document.querySelector("#wrapper");
const body = document.querySelector("body");
const loader = document.querySelector("#loader");
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLink = document.querySelectorAll(".mobile-menu li a");
const header = document.querySelector(".header");
const reveals = document.querySelectorAll(".reveal");

let lastScrollTop = 0;

function loadingAnim() {
  setTimeout(() => {
    loader.classList.add("hide");

    setTimeout(() => {
      wrapper.classList.add("show");
    }, 50);
  }, 1000);
}
loadingAnim();


function revealContentOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

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

window.addEventListener("scroll", revealContentOnScroll);

