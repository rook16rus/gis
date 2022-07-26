import gsap from "gsap";
import SplitText from '../../assets/js/gsap-bonus/SplitText';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default () => {
  const headings = Array.from(document.querySelectorAll(".js-heading"));
  const sections = Array.from(document.querySelectorAll(".section:not(:first-child)"));
  const timeline = gsap.timeline()
  let headingsArr = [];

  headings.forEach(heading => {
    const splitedText = new SplitText(heading, {
      type: 'lines, chars',
      linesClass: "line"
    });

    gsap.set(splitedText.chars, { yPercent: 120 });
    gsap.set(splitedText.lines, { overflow: 'hidden' });

    gsap.to(splitedText.chars, {
      yPercent: 0, duration: 0.2, ease: "Power.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 80%"
      }
    })
  });

};
