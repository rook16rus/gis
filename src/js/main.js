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
});
