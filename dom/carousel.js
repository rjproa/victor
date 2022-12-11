export default function carousels() {
  const $items = document.querySelectorAll(`[data-service]`);
  const $items2 = document.querySelector(`[data-testimony]`);
  let i = 80,
    a = 20;

  document.addEventListener("click", (e) => {
    if (e.target.matches(".services-next")) {
      if (i > 0) {
        $items.forEach(el => el.style.transform = `translateX(-${i - 20}%`);
        i = i - 20;
      }
    }

    if (e.target.matches(".services-prev")) {
      if (i < 80) {
        $items.forEach(el => el.style.transform = `translateX(-${i + 20}%)`);
        i = i + 20;
      }
    }

    if (i < 10) {
      document.querySelector(".services-next").classList.add("disable");
    } else {
      document.querySelector(".services-next").classList.remove("disable");
    }

    if (i > 70) {
      document.querySelector(".services-prev").classList.add("disable");
    } else {
      document.querySelector(".services-prev").classList.remove("disable");
    }



    if (e.target.matches(".testimony-next")) {
      if (a < 100) {
        $items2.style.transform = `translateX(-${a}%)`;
        a = a + 20;
      }
    }

    if (e.target.matches(".testimony-prev")) {
      if (a > 20) {
        $items2.style.transform = `translateX(-${a - 40}%)`;
        a = a - 20;
      }
    }
  });

}