const d = document;

export default function scrollBtn(scrollBotom, topScroll) {

  window.addEventListener("scroll", (e) => {
    const limitTop = window.scrollY,
      $botomScroll = d.querySelector(scrollBotom);

    if (limitTop < topScroll) {
      $botomScroll.classList.add("hidden");
    } else {
      $botomScroll.classList.remove("hidden");
    }

  });

}