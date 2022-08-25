import gsap from "gsap";
import SplitText from '../../assets/js/gsap-bonus/SplitText';
import { disableScroll, enableScroll } from "../helpers/disableScroll";

gsap.registerPlugin(SplitText);

export default () => {
  const header = document.querySelector(".header");
  const heading = document.querySelector(".intro__content-heading");
  const headingText = document.querySelector(".intro__content-text");
  const layer = document.querySelector(".intro-layer");
  const body = document.querySelector("body");
  const timeline = gsap.timeline({
    paused: true,
    onComplete: () => {
      enableScroll();
    },
    onStart: () => {
      body.classList.add("is-active");
    }
  });

  if (!heading) return;

  const splitedText = new SplitText(heading, {
    type: 'lines, chars',
    linesClass: "line"
  });

  gsap.set(splitedText.chars, { yPercent: 100 });
  gsap.set(splitedText.lines, { overflow: "hidden" });
  gsap.set(headingText, { opacity: 0 });
  gsap.set(header, { opacity: 0 });

  timeline
    .from(layer, { scale: 1.2, xPercent: -20, yPercent: -10, duration: 2, ease: "power2.out" })
    .to(splitedText.chars, { yPercent: 0, duration: 0.8, ease: "power2.out" })
    .to(headingText, { opacity: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.7")
    .to(header, { opacity: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }, "-=0.6")


  setTimeout(() => {
    timeline.play();
  }, 200);
};
