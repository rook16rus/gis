import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//
// ЕСТЬ ДРУГОЙ JS ФАЙЛ ДЛЯ МОБИЛКИ indexIntroMobile.js
//

export default () => {
  const DURATION = 0.5;
  const layer = document.querySelector(".intro-layer");
  // const descktop = window.matchMedia("(min-width: 1201px)");
  const mobile = window.matchMedia("(max-width: 1200px)");
  const OFFSET = mobile.matches ? 80 : 150;

  if (!layer) return;

  const timeline = gsap.timeline({
    paused: true,
    reversed: true,
    scrollTrigger: {
      trigger: ".intro",
      pin: true,
      start: "top 10%",
      end: "bottom 40%",
      fastScrollEnd: true,
      anticipatePin: 1,
    },
    onComplete: () => document.querySelector(".intro-layer").classList.remove("is-locked"),
    onReverseComplete: () => document.querySelector(".intro-layer").classList.add("is-locked"),
  });

  gsap.set(".about", {opacity: 0})

  ScrollTrigger.matchMedia({
    "(min-width: 1537px)": function () {
      timeline
        .to(".intro__content-block:nth-child(2)", { opacity: 0, duration: DURATION, ease: "power1.out" })
        .to(".intro-layer", {
          x: 0, xPercent: -50, left: "50%", y: 0, top: "-5rem", duration: DURATION, zIndex: 30,
          ease: "power1.out", scale: 1, pointerEvents: "auto"
        }, `-=${DURATION}`)
        .to(".intro__heading-text-wrapper", { opacity: 1, duration: DURATION, ease: "power1.out", }, `-=${DURATION}`)
        .to(".intro__cloud", { opacity: 0, visibility: "hidden", duration: DURATION, ease: "power1.out", }, `-=${DURATION}`)
        .to(".about", {opacity: 1, duration: DURATION, ease: "power1.out"}, `-=${DURATION}`)
    },
    "(max-width: 1536px)": function () {
      timeline
        .to(".intro__content-block:nth-child(2)", { opacity: 0, duration: DURATION, ease: "power1.out" })
        .to(".intro-layer", {
          x: 0, xPercent:-50, left:"50%", y: 0, yPercent:-50, top:"50%", duration: DURATION, zIndex: 30,
          ease: "power1.out", scale: 1, pointerEvents: "auto"
        }, `-=${DURATION}`)
        .to(".intro__heading-text-wrapper", { opacity: 1, duration: DURATION, ease: "power1.out", }, `-=${DURATION}`)
        .to(".intro__cloud", { opacity: 0, visibility: "hidden", duration: DURATION, ease: "power1.out", }, `-=${DURATION}`)
        .to(".about", {opacity: 1, duration: DURATION, ease: "power1.out"}, `-=${DURATION}`)
    },
    "all": function () {

    }
  });

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    scrollDistance >= OFFSET ? timeline.play() : timeline.reverse();
  });
};
