"use strict"
// Scroll navbar
const header = document.querySelector(".header");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > header.offsetHeight + 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
})


// Burger button
let burger = document.querySelector(".burger");
let navMenu = document.querySelector(".nav-menu");
burger.addEventListener("click", () => {
  navMenu.classList.toggle("vertical-menu")
  burger.classList.toggle("click-burger")
});

// WriteText 
const text = document.querySelector(".write_text");
let t = text.innerHTML.trim();
let idx = 1;
function writeText() {
  text.innerHTML = t.slice(0, idx);
  idx++;
  if (idx > t.length) {
    idx = 1;
  }
  setTimeout(writeText, 200);
}
writeText();

