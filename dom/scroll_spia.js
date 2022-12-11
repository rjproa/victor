const d = document;

export default function scrollSpy() {
  const $items = d.querySelectorAll("[data-scroll-spy]");

  const cb = (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        //  d.querySelector(`a[data-sccroll-spy][href="#${id}"]`).classList.add("active");
      }
      // } else {
      //   entry.target.classList.remove("hola");
      //   //  d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
      // }
    });

  }

  const observer = new IntersectionObserver(cb, {
    // threshold: [0.5, 0.75] //sus valores son de 0 a 1
    // threshold: [0.55, 0.7] //sus valores son de 0 a 1
    threshold: 0.7 //sus valores son de 0 a 1
  });

  $items.forEach((el) => observer.observe(el));
}
