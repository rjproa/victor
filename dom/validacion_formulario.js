const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });


  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (e.target.value.length > 0) {
        d.querySelector(`[data-${e.target.name}]`).classList.add("active");
      } else {
        d.querySelector(`[data-${e.target.name}]`).classList.remove("active");
      }

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

    }
  });


  d.addEventListener("submit", (e) => {
    e.preventDefault();
    const $response = d.querySelector(".contact-form-response");

    fetch("https://formsubmit.co/ajax/jhamilvp@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(json => {
        console.log(json);
        $response.style.animationPlayState = "running";
        $inputs.forEach(el => {
          d.querySelector(`[data-${el.name}]`).classList.remove("active");
        })
      })
      .catch(err => {
        console.log(err);
      })
    $form.reset();
  });
}