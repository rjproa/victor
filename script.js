import buttonHamburger from './dom/button_hamburger.js';
import scrollSpy from './dom/scroll_spia.js';
import carousels from './dom/carousel.js';
import contactFormValidation from './dom/validacion_formulario.js';
import scrollUpDown from './dom/scroll_up_down.js';
import gallery from './dom/gallery.js';
import scrollBtn from './dom/scroll_top.js';
import BtnWtspClose from './dom/button_whatsapp.js';

const d = document;



d.addEventListener("DOMContentLoaded", (e) => {
  buttonHamburger(".hamburger", ".header-panel", ".panel-link");
  scrollSpy();
  carousels();
  contactFormValidation();
  scrollUpDown();
  gallery();
  scrollBtn(".botom-scroll-top", "900")
  BtnWtspClose(".wtsp-mesage", ".wtsp-mesage div");
})
