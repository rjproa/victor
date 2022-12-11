import slider from './dom/carousel_testimony.js'
import buttonHamburger from './dom/button_hamburger.js';
import scrollSpy from './dom/scroll_spia.js';
import servicesCarousel from './dom/services.js';
import contactFormValidation from './dom/validacion_formulario.js';

const d = document,
  w = window;



d.addEventListener("DOMContentLoaded", (e) => {
  buttonHamburger(".hamburger", ".panel-content", ".panel-content a");
  scrollSpy();
  slider();
  servicesCarousel();
  contactFormValidation();
})


let ubicacion_principal = w.scrollY;

w.onscroll = function () {
  let desplazamiento_actual = w.scrollY;

  if (ubicacion_principal >= desplazamiento_actual) {
    if (scrollY < screen.height - 50) {
      document.querySelector(".header-container a").classList.remove("is-active");
      document.querySelector(".hamburger-btn").classList.remove("is-active");
      document.querySelector(".header").classList.remove("is-active");
    }

  } else {
    if (scrollY > screen.height - 50) {
      document.querySelector(".header-container a").classList.add("is-active");
      document.querySelector(".hamburger-btn").classList.add("is-active");
      document.querySelector(".header").classList.add("is-active");
    }

  };

  ubicacion_principal = desplazamiento_actual;
}


const $items = document.querySelectorAll(".animate");


const cb = (entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      // console.log(entry.target, "es observado")
      entry.target.classList.add("active-animation")
    } else {
      // console.log(entry.target, "salio del observador")
      // entry.target.classList.remove("active-animation")
    }
  });

}

const observer = new IntersectionObserver(cb, {
  threshold: 0.4
});

$items.forEach(el => observer.observe(el));
