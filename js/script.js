//HAMBURGER MENU FOR TAB AND MOBILE VIEW
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-header__nav-ul");
const navLink = document.querySelectorAll(".main-header__nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
//PRICE-RANGE SLIDER
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("final");
output.innerHTML = slider.value;
output2.innerHTML = slider.max;

slider.oninput = function () {
  output.innerHTML = this.value;
};
