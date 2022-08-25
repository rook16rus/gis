import Swiper, {
  Navigation, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const slider = document.querySelector('.js-vacancy-slider');

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 16,
    navigation: {
      nextEl: '.js-vacancy-btn-next',
      prevEl: '.js-vacancy-btn-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: slider.querySelector('.site-pagination'),
          type: 'bullets',
        },
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    }
  });

};
