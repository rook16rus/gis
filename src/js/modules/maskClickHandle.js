export default () => {
  const imgs = Array.from(document.querySelectorAll(".js-intro-layer"));
  const masks = Array.from(document.querySelectorAll(".js-mask-path"));
  const names = Array.from(document.querySelectorAll(".js-intro-names"));
  const tooltips = Array.from(document.querySelectorAll(".js-tooltip"));

  if (!imgs.length) return;
  masks.forEach(mask => {
    mask.addEventListener("click", () => {
      const num = Number(mask.dataset.index);

      imgs.forEach(img => img.classList.remove("is-active"));
      names.forEach(name => name.classList.remove("is-active"));
      masks.forEach(mask => mask.style.pointerEvents = "auto");

      tooltips.forEach(tooltip => { tooltip.classList.remove("is-choosen") });
      tooltips.forEach(tooltip => {
        if (Number(tooltip.dataset.tooltipIndex) === num) {
          tooltip.classList.add("is-choosen");
        }
      });

      mask.style.pointerEvents = "none";
      imgs[num].classList.add("is-active");
      names[num].classList.add("is-active");
    });
  });
};
