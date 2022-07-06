import Swiper, {
  Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Pagination]);

export default () => {
  const slider = document.querySelector('.js-services-slider');
  const media = window.matchMedia("(max-width: 993px)");

  if (!slider) return;

  if (media.matches) {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.site-pagination',
        type: 'bullets',
      },
    });
  }
};
