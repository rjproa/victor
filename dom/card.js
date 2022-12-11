export default function cardTestimony(btnNext, btnPrev, cardsContent) {
  const $btnNext = document.querySelector(btnNext),
    $btnPrev = document.querySelector(btnPrev),
    $cards = document.querySelector(cardsContent);

  let i = 0;
  document.addEventListener("click", (e) => {
    if (e.target == $btnNext) {
      if (i === 75) {
        i = -25;
      }
      $cards.style.transform = `translateX(-${i + 25}%)`
      i = i + 25;
    }

    if (e.target == $btnPrev) {
      if (i === 0) {
        i = 100;
      }
      $cards.style.transform = `translateX(-${i - 25}%)`
      i = i - 25;
    }

  })
}