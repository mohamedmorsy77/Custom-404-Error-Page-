// SHOW NAV_MENU WHEN CLICK EVENT
let nav_menu = document.querySelector(".nav_menu");
let nav_toggle = document.querySelector(".nav_toggle");
let nav_close = document.querySelector(".nav_close");
console.log(nav_menu);
console.log(nav_toggle);
console.log(nav_close);

// CHECK IF VARIABLE EXISTS
// MENU SHOW
if (nav_toggle) {
  nav_toggle.addEventListener("click", function () {
    nav_menu.classList.add("active_menu");
  });
}
// MENU HIDDEN
if (nav_close) {
  nav_close.addEventListener("click", function () {
    nav_menu.classList.remove("active_menu");
  });
}

// Click on nav_link
const navLinks = document.querySelectorAll(".nav_link");

function action() {
  const nav_menu = document.getElementById("nav_menu");
  nav_menu.classList.remove("active_menu");
}

navLinks.forEach((link) => link.addEventListener("click", action));

// Scroll Reveal
let scr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

scr.reveal(".home_data", { delay: 400, origin: "top" });
scr.reveal(".home_image img,.home_shadow", { delay: 600, origin: "right" });
scr.reveal(".home_footer", { delay: 800, origin: "bottom" });
