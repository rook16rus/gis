import Marquee3k from 'marquee3000';

export default () => {
  const elmnts = Array.from(document.querySelectorAll(".js-marquee-child"));

  Marquee3k.init({
    selector: "js-marquee",
  });
};
