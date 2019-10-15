require('./../dist/css/mystyles.scss');
import Banner from './components/home-banner';
import tabsContainer from './components/tabs';

const displayHome = () => {
  let display = document.getElementById('main');
  let header = new Banner();
  let tabBox = new tabsContainer();
  tabBox.tabs();
  return display, header, tabBox;
};

displayHome();
