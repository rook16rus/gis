import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const menu = document.querySelector(".js-menu");
  const menuOpenBtn = document.querySelector(".js-open-menu");
  const menuCloseBtn = document.querySelector(".js-close-menu");

  if (!menu) return;


  menuOpenBtn.addEventListener("click", ()=> {
    menu.classList.add("is-active");
    disableScroll();
  });

  menuCloseBtn.addEventListener("click", ()=> {
    menu.classList.remove("is-active");
    enableScroll();
  });
};
