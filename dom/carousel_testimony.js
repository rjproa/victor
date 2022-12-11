export default function slider() {
  const $nextBtn = document.querySelector(".testimony-btn .next"),
    $prevBtn = document.querySelector(".testimony-btn .prev"),
    $cards = document.querySelectorAll(".testimony-card");


  document.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      $cards.forEach(el => {
        if (el.id < id - 1) {
          console.log(el.id, "crece")
          $cards.forEach(el => {
            let element = el;
            let elementStyle = window.getComputedStyle(element);
            let elementScale = elementStyle.getPropertyValue('margin');
            console.log(elementScale);
          });
        }

        if (el.id > id) {
          console.log(el.id, "reduce")
        }
      })

      id--;
      console.log(id)
    }

    if (e.target === $nextBtn) {

    }


  })

}
