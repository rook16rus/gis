import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const imgs = Array.from(document.querySelectorAll(".js-intro-layer"));
  const masks = Array.from(document.querySelectorAll(".js-mask-path"));
  const names = Array.from(document.querySelectorAll(".js-intro-names"));
  const tooltips = Array.from(document.querySelectorAll(".js-tooltip"));
  const headerHeight = document.querySelector(".header").offsetHeight;
  const timeline = gsap.timeline({
    paused: true,
    reversed: true,
  });

  if (!imgs.length) return;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= 50) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  });

  timeline
    .to(".intro__content-block:nth-child(2)", {
      opacity: 0,
      duration: 0.5,
      ease: "none",
    })
    .to(".intro-layer", {
      x: 0,
      xPercent: -50,
      left: "50%",
      y: 0,
      top: "-3rem",
      duration: 0.5,
      ease: "none",
      scale: 1,
      pointerEvents: "auto"
    }, "-=0.5")
    .to(".intro__heading-text-wrapper", {
      opacity: 1,
      duration: 0.5,
      ease: "none",
    }, "-=0.5")


  masks.forEach((mask, index) => {
    mask.addEventListener("click", () => {
      const num = Number(mask.dataset.index);

      imgs.forEach(img => img.classList.remove("is-active"));
      names.forEach(name => name.classList.remove("is-active"));

      tooltips.forEach(tooltip => { tooltip.classList.remove("is-choosen") });
      tooltips.forEach(tooltip => {
        if (Number(tooltip.dataset.tooltipIndex) === num) {
          tooltip.classList.add("is-choosen");
        }
      });

      imgs[num].classList.add("is-active");
      names[num].classList.add("is-active");
    });
  });
};
