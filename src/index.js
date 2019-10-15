require('./../dist/css/mystyles.scss');
import Banner from './components/home-banner';
import infoContainer from './components/home-container';
import tabs from './components/tabs';
import helloTab from './components/hello-tab';
import displayWelcome from './components/hello-tab';
import { displayAll } from './components/menu-tab';
import { displayFind } from './components/find-tab';
import findTab from './components/find-tab';
import tabsContainer from './components/tabs';

const displayHome = () => {
  let display = document.getElementById('main');
  let header = new Banner();
  // let tabBox = new infoContainer();
  let tabBox = new tabsContainer();
  tabBox.tabs();
  return display, header, tabBox;
};

// const displayWelcome = () => {
//   let welcome = new helloTab();
//   welcome;
// };

// const displayAll = () => {
//   displayCoffeeMenu();
//   displayPastryMenu();
//   displaySaladMenu();
// };

// const displayFind = () => {
//   let find = new findTab();
//   find;
// };

displayHome();
// displayWelcome();
// displayAll();
// displayFind();
