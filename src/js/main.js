// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import activeInput from './modules/activeInput';
import projectsSlider from './modules/projectsSlider';
import servicesSlider from './modules/servicesSlider';
import clientsSlider from './modules/clientsSlider';
import aboutSlider from './modules/aboutSlider';
import partnersSilder from './modules/partnersSilder';
import mobileMenu from './modules/mobileMenu';
import indexIntro from './modules/indexIntro';
import { loadImages } from './modules/loadIllustration';
import maskClickHandle from './modules/maskClickHandle';
import indexIntroMobile from './modules/indexIntroMobile';
import introSelect from './modules/introSelect';
import headingAnimations from './modules/headingAnimations';
import firstLoadAnimation from './modules/firstLoadAnimation';
import validation from './modules/validation';
import initSelects from './modules/selects';
import projectsFilter from './modules/projectsFilter';

const descktop = window.matchMedia("(min-width: 992px)");


window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  firstLoadAnimation();

  preloader.classList.add("is-hidden");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 450);


  descktop.matches ?
    loadImages().then(() => maskClickHandle()) : null;
});

documenReady(() => {
  window.gis_API = {};

  lazyIMages();
  initModal();
  activeInput();
  projectsSlider();
  servicesSlider();
  clientsSlider();
  aboutSlider();
  partnersSilder();
  mobileMenu();
  descktop.matches ? indexIntro() : indexIntroMobile();
  introSelect();
  headingAnimations();
  validation();
  initSelects();
  projectsFilter();
});
