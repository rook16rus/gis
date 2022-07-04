export default () => {
  const inputs = document.querySelectorAll(".js-input");

  if (inputs.length) {
    inputs.forEach(input => {
      const inputContainer = input.closest(".form__label");

      if (input.value) {
        inputContainer.querySelector(".js-input-heading").classList.add("is-active");
      }

      input.addEventListener("change", () => {
        const container = input.closest(".form__label");
        const heading = container.querySelector(".js-input-heading");

        if (input.value) {
          heading.classList.add("is-active");
        } else {
          heading.classList.remove("is-active");
        }
      });
    });
  }
}
