export default () => {
  function Marquee(selector, speed) {
    const parentSelector = selector;
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  };


  const elmnts = Array.from(document.querySelectorAll(".js-marquee"));

  elmnts.forEach(elnt => Marquee(elnt, 0.3));
};
