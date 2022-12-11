export default function buttonHamburger($btnBurger, $panelContent, $menuLink) {
  document.addEventListener("click", (e) => {
    if (e.target.matches($btnBurger) || e.target.matches(`${$btnBurger} *`)) {
      const $buttonHamburger = document.querySelector(".hamburger-btn");
      $buttonHamburger.classList.toggle("open");


      let count = 0;

      if (document.querySelector($btnBurger).classList.contains("is-active")) {
        document.querySelectorAll($menuLink).forEach(el => {
          el.style.animation = `menuLinkUp 1s ease-out both ${count}s`;
          count = count + 0.2;
        })
      } else {
        document.querySelectorAll($menuLink).forEach(el => {
          el.style.animation = `menuLinkDown 1s ease-out both ${count}s`;
        })
      }
    };

    if (e.target.matches($menuLink)) {
      document.querySelector($panelContent).classList.toggle("is-active");
      document.querySelector($btnBurger).classList.toggle("is-active");
    };
  });
}