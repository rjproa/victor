export default function buttonHamburger($burgerContainer, panelHeader, panelLinks) {
  document.addEventListener("click", (e) => {
    const $btnBurger = document.querySelector(".hamburger-btn"),
      $panelHeader = document.querySelector(`${panelHeader}`);

    if (e.target.matches($burgerContainer) || e.target.matches(`${$burgerContainer} *`)) {

      $btnBurger.classList.toggle("open");


      if ($btnBurger.classList.contains("open")) {

        $panelHeader.classList.remove("off")
        $panelHeader.classList.add("on");

        document.querySelector(".header-panel-hover").classList.add("none");

        document.querySelector(".panel").style.visibility = "visible";
        document.querySelectorAll(".panel div").forEach(el => {
          el.classList.remove("off");
          el.classList.add("on");
        });

        document.querySelector(".header-container a").classList.remove("is-active");
      } else {

        document.querySelectorAll(".panel div").forEach(el => {
          el.classList.remove("on");
          el.classList.add("off");
        });

        setTimeout(() => {
          document.querySelector(".panel").style.visibility = "hidden";
          $panelHeader.classList.remove("on");
          $panelHeader.classList.add("off");
        }, 1000);


        if (document.querySelector(".header").classList.contains("is-active")) document.querySelector(".header-container a").classList.add("is-active");

        setTimeout(() => {
          document.querySelector(".header-panel-hover").classList.remove("none");
        }, 1200);

      }
    };

    if (e.target.matches(`${panelLinks}`)) {
      $btnBurger.classList.toggle("open");

      document.querySelectorAll(".panel div").forEach(el => {
        el.classList.remove("on");
        el.classList.add("off");
      });

      setTimeout(() => {
        document.querySelector(".panel").style.visibility = "hidden";
        $panelHeader.classList.remove("on");
        $panelHeader.classList.add("off");
      }, 900);


      if (document.querySelector(".header").classList.contains("is-active")) document.querySelector(".header-container a").classList.add("is-active");

      setTimeout(() => {
        document.querySelector(".header-panel-hover").classList.remove("none");
      }, 1200);

    }

  });
}