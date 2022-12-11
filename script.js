import buttonHamburger from './dom/button_hamburger.js';
import scrollSpy from './dom/scroll_spia.js';
import carousels from './dom/carousel.js';
import contactFormValidation from './dom/validacion_formulario.js';
import scrollUpDown from './dom/scroll_up_down.js';

const d = document;



d.addEventListener("DOMContentLoaded", (e) => {
  buttonHamburger(".hamburger", ".panel-content", ".panel-content a");
  scrollSpy();
  carousels();
  contactFormValidation();
  scrollUpDown();
})
