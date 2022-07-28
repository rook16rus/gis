import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const filterOpenBtn = document.querySelector(".js-filter-btn");
  const filterContainer = document.querySelector(".js-filter-container");
  const filterCloseBtns = Array.from(document.querySelectorAll(".js-filter-close-btn"));

  if (!filterOpenBtn) return;

  filterOpenBtn.addEventListener("click", () => {
    filterContainer.classList.add("is-active");
    disableScroll();
  });

  filterCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterContainer.classList.remove("is-active");
      enableScroll();
    });
  })
};
