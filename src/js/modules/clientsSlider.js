import Swiper, {
  Pagination,
  Autoplay
} from 'swiper/swiper-bundle';

Swiper.use([Pagination, Autoplay]);

export default () => {
  const sliders = Array.from(document.querySelectorAll('.js-clients-slider'));

  if (!sliders.length) return;

  sliders.forEach(slider => {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 2.5,
      spaceBetween: 40,
      loop: true,
      speed: 9000,
      loopedSlides: 7,
      autoplay: {
        delay: 10,
        disableOnInteraction: false,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: slider.querySelector('.site-pagination'),
            type: 'bullets',
          },
          autoplay: false,
          speed: 300
        },
        767: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
      }
    });
  });

};
