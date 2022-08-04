import Swiper, {
  Navigation, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const slider = document.querySelector('.js-page-info-numbers');
  const media = window.matchMedia("(max-width: 767px)");

  if (!slider) return;

  if (media.matches) {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: slider.closest(".js-page-info-numbers-parent").querySelector('.site-pagination'),
        type: 'bullets',
      },
    });
  }
};
