export default function scrollUpDown() {
  let ubicacion_principal = window.scrollY;

  window.onscroll = function () {
    let desplazamiento_actual = window.scrollY;

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

}