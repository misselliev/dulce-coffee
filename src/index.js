require('./../dist/css/mystyles.scss');
import Banner from './components/home-banner';
import infoContainer from './components/home-container';

const displayHome = () => {
  let display = document.getElementById('main');
  console.log(display);
  let header = new Banner();
  console.log(header + 'header return');
  let tabBox = new infoContainer();
  console.log(tabBox + 'tabbox return');
  // display.appendChild(header);
  // display.appendChild(tabBox);
};

displayHome();
