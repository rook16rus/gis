import Swiper, {
  Navigation, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const sliders = Array.from( document.querySelectorAll('.js-page-slider'));

  console.log(sliders);

  if (sliders.length === 0) return;

  sliders.forEach(slider => {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: slider.closest(".page-slider").querySelector('.js-slider-btn-next'),
        prevEl: slider.closest(".page-slider").querySelector('.js-slider-btn-prev'),
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
          slidesPerView: Number(slider.dataset.slidesNumber) || 3,
          spaceBetween: 16,
        },
      }
    });
  });
};
