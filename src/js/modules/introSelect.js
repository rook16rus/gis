export default () => {
  const select = document.querySelector(".intro__select");
  const selectHeading = document.querySelector(".js-select-heading");
  const selectList = document.querySelector(".js-select-list");
  const selectChoices = Array.from(document.querySelectorAll(".js-select-choice"));
  const tooltips = Array.from(document.querySelectorAll(".js-tooltip"));
  let flag = false;

  const closeChoicesList = () => {
    selectList.classList.remove("is-active");
  };

  if (!select) return;

  selectHeading.addEventListener('click', () => {
    selectList.classList.toggle("is-active");
  });

  selectChoices.forEach(choice => {
    choice.addEventListener("click", () => {
      const text = choice.innerHTML;
      const num = Number(choice.dataset.index);

      selectHeading.querySelector(".intro__select-heading-text").innerHTML = text;
      selectChoices.forEach(item => item.classList.remove("is-active"));
      choice.classList.add("is-active");
      tooltips.forEach(tooltip => { tooltip.classList.remove("is-choosen") });
      tooltips.forEach(tooltip => {
        if (Number(tooltip.dataset.tooltipIndex) === num) {
          tooltip.classList.add("is-choosen");
        }
      });
      closeChoicesList();
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.intro__select')) {
      closeChoicesList();
    }
  });

};
