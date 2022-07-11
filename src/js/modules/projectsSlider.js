import Swiper, {
  Navigation, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const slider = document.querySelector('.js-project-slider');

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.js-project-btn-next',
      prevEl: '.js-project-btn-prev',
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
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
    }
  });

};
