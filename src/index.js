require('./../dist/css/mystyles.scss');
import Banner from './components/home-banner';
import infoContainer from './components/home-container';

const displayHome = () => {
  let display = document.getElementById('main');
  display.appendChild('banner');
  display.appendChild('table-container');
  let header = new Banner();
  let tabBox = new infoContainer();
};

displayHome();
