/* MENU MOVIL */

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {

nav.classList.toggle("active");

});


/* CERRAR MENU AL HACER CLICK */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

nav.classList.remove("active");

});

});


/* SCROLL ANIMATION */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});


sections.forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});