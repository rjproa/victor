export default function gallery() {
  const $images = document.querySelectorAll(".gallery div img"),
    $gallery = document.querySelector(".gallery"),
    $galleryNav = document.querySelector(".gallery-nav"),
    $btnUp = document.querySelector(".gallery-up"),
    $btnDown = document.querySelector(".gallery-down"),
    $btnClose = document.querySelector(".gallery-close");
  let i = 1,
    count = 100;


  document.addEventListener("click", (e) => {
    if (e.target.matches(".view-gallery")) {
      let typeServices = e.target.dataset.gallery;

      $images.forEach(el => {
        el.setAttribute("src", `assets/imagen-${typeServices}-${i}.jpg`)
        i++;

        if (i > 8) {
          i = 1;
        }
      });

      document.querySelector("body").style.overflowY = "hidden";
      $gallery.classList.add("on");
      $galleryNav.classList.add("on");
    }

    if (e.target == $btnClose) {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector(".gallery.on").style.height = `100vh`;
      $gallery.classList.remove("on");
      $galleryNav.classList.remove("on");
      count = 100;
    }

    if (e.target == $btnDown) {
      if (count < 260) {
        document.querySelector(".gallery.on").style.height = `${count + 50}vh`;
        count = count + 50;
      }
    }

    if (e.target == $btnUp) {
      if (count > 149) {
        document.querySelector(".gallery.on").style.height = `${count - 50}vh`;
        count = count - 50;
      }
    }
  })
}