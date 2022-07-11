import Swiper, {
  Navigation, EffectFade
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, EffectFade]);

export default () => {
  const slider = document.querySelector('.js-about-slider');

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.js-about-btn-next',
      prevEl: '.js-about-btn-prev',
    }
  });
};
