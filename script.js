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

function downloadResume() {
  var resumeLink = "https://drive.google.com/file/d/1GybGbFp2lR06okw76FHst-sPckeChV3s/view?usp=drive_link";

  window.open(resumeLink, '_blank');

  var a = document.createElement('a');
  a.href = resumeLink;
  a.download = 'YourResumeFileName.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

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

function openDriveLink(event) {
  var driveLink = "https://drive.google.com/file/d/1GybGbFp2lR06okw76FHst-sPckeChV3s/view?usp=drive_link";
  
  window.open(driveLink, '_blank');

  event.preventDefault();
}

var resumeLink2 = document.getElementById('resume-link-2');

    resumeLink2.addEventListener('click', openDriveLink);
var resumeLink1 = document.getElementById('resume-link-1');

    resumeLink1.addEventListener('click', openDriveLink);

var openButton = document.getElementById('resume-button-3');

    openButton.addEventListener('click', function() {
        var driveLink = "https://drive.google.com/file/d/1GybGbFp2lR06okw76FHst-sPckeChV3s/view?usp=drive_link";
        window.open(driveLink, '_blank');
    });

window.addEventListener("scroll", revealContentOnScroll);

