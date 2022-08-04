import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const DURATION = 0.5;
  const layer = document.querySelector(".intro-layer");
  const OFFSET = 80;

  if (!layer) return;

  const timeline = gsap.timeline({
    paused: true,
    reversed: true,
    scrollTrigger: {
      trigger: ".intro",
      pin: true,
      start: "top 10%",
      end: "bottom 25%",
    },
    onComplete: () => document.querySelector(".intro-layer").classList.remove("is-locked"),
    onReverseComplete: () => document.querySelector(".intro-layer").classList.add("is-locked"),
  });

  gsap.set(".about", {opacity: 0})

  timeline
    .to(".intro__text-mobile-wrapper", { opacity: 0, duration: DURATION, ease: "power1.out" })
    .to(".intro-layer", {
      x: 0, xPercent: -50, left: "50%", y: 0, yPercent: -50, top: "50%", duration: DURATION, zIndex: 30,
      ease: "power1.out", scale: 1, pointerEvents: "auto"
    }, `-=${DURATION}`)
    .to(".intro__select", { opacity: 1, duration: DURATION, ease: "power1.out", }, `-=${DURATION}`)
    .to(".intro__cloud", { opacity: 0, visibility: "hidden", duration: DURATION, ease: "power1.out", }, `-=${DURATION}`)
    .to(".about", {opacity: 1, duration: DURATION, ease: "power1.out"}, `-=${DURATION}`)
    .to(".intro__mobile-btn", {opacity: 0, visibility: "hidden", duration: DURATION, ease: "power1.out"}, `-=${DURATION}`)

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    scrollDistance >= OFFSET ? timeline.play() : timeline.reverse();
  });
};
