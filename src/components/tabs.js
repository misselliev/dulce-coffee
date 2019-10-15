import helloTab from './hello-tab';
import displayWelcome from './hello-tab';
import {
  displayCoffeeMenu,
  displayPastryMenu,
  displaySaladMenu,
  displayAll
} from './menu-tab';
import displayFind from './find-tab';
import menuTab from './menu-tab';
import findTab from './find-tab';
export default class tabsContainer {
  tabs() {
    let totalTabs = [
      ['Hello!', 'fas fa-leaf', 'hello'],
      ['Our menu', 'fas fa-apple-alt', 'menu'],
      ['Find us', 'fas fa-map-marked-alt', 'map']
    ];
    let display = document.getElementById('main');
    let cont = document.getElementById('content');
    let tabList = document.createElement('ul');
    cont.appendChild(tabList);
    totalTabs.forEach(item => {
      let tbElement = document.createElement('li');
      tbElement.id = item[2];
      tabList.appendChild(tbElement);
      let tabAnchor = document.createElement('a');
      tbElement.appendChild(tabAnchor);
      let tabSpanIcon = document.createElement('span');
      tabSpanIcon.classList = 'icon is-small';
      let tabIcon = document.createElement('i');
      tabIcon.classList = item[1];
      let tabText = document.createElement('span');
      tabText.innerHTML = item[0];
      tabSpanIcon.appendChild(tabIcon);
      tabAnchor.appendChild(tabSpanIcon);
      tabAnchor.appendChild(tabText);
      // item.addEventListener('click', () => {
      //   if (item.id === 'hello') {
      //     displayWelcome();
      //   } else if (item.id === 'menu') {
      //     displayAll();
      //   } else {
      //     displayFind();
      //   }
      // });
    });
    // totalTabs.forEach(item => {
    //   item.addEventListener('click', () => {
    //     if (item.id === 'hello') {
    //       displayWelcome();
    //     } else if (item.id === 'menu') {
    //       displayAll();
    //     } else {
    //       displayFind();
    //     }
    //   });
    // });
    let tab1 = document.getElementById('hello');
    tab1.addEventListener('click', () => {
      let a = new helloTab();
      displayWelcome();
    });
    let tab2 = document.getElementById('menu');
    tab2.addEventListener('click', () => {
      let b = new menuTab();
      displayAll();
    });
    let tab3 = document.getElementById('map');
    tab3.addEventListener('click', () => {
      let c = new findTab();
      displayFind();
    });
    display.appendChild(cont);
  }
}
