import Swiper, {
  Navigation, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const slider = document.querySelector('.js-partnerns-slider');
  const media = window.matchMedia("(max-width: 993px)");

  if (!slider) return;

  if (media.matches) {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: slider.querySelector('.site-pagination'),
        type: 'bullets',
      },
    });
  }
};
