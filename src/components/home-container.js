export default class infoContainer {
  constructor() {
    this.tabContainer();
  }
  tabContainer() {
    let cont = document.getElementById('content');
    cont.classList = 'tabs is-boxed is-centered is-fullwidth';

    let tabList = document.createElement('ul');
    cont.appendChild(tabList);

    let tabElement1 = document.createElement('li');
    tabElement1.id = 'tab1';
    tabList.appendChild(tabElement1);
    let tabAnchor = document.createElement('a');
    tabElement1.appendChild(tabAnchor);

    let tabSpanIcon = document.createElement('span');
    tabSpanIcon.classList = 'icon is-small';
    let tabIcon = document.createElement('i');
    tabIcon.classList = 'fas fa-leaf';
    let tabText = document.createElement('span');
    tabText.innerHTML = 'Hello!';
    tabSpanIcon.appendChild(tabIcon);
    tabAnchor.appendChild(tabSpanIcon);
    tabAnchor.appendChild(tabText);

    let tabElement2 = document.createElement('li');
    tabElement2.id = 'tab2';
    tabList.appendChild(tabElement2);
    let tabAnchor2 = document.createElement('a');
    tabElement2.appendChild(tabAnchor2);

    let tabSpanIcon2 = document.createElement('span');
    tabSpanIcon2.classList = 'icon is-small';
    let tabIcon2 = document.createElement('i');
    tabIcon2.classList = 'fas fa-apple-alt';
    let tabText2 = document.createElement('span');
    tabText2.innerHTML = 'Menu';
    tabSpanIcon2.appendChild(tabIcon2);
    tabAnchor2.appendChild(tabSpanIcon2);
    tabAnchor2.appendChild(tabText2);

    let tabElement3 = document.createElement('li');
    tabElement3.id = 'tab3';
    tabList.appendChild(tabElement3);
    let tabAnchor3 = document.createElement('a');
    tabElement3.appendChild(tabAnchor3);

    let tabSpanIcon3 = document.createElement('span');
    tabSpanIcon3.classList = 'icon is-small';
    let tabIcon3 = document.createElement('i');
    tabIcon3.classList = 'fas fa-map-marked-alt';
    let tabText3 = document.createElement('span');
    tabText3.innerHTML = 'Find us';
    tabSpanIcon3.appendChild(tabIcon3);
    tabAnchor3.appendChild(tabSpanIcon3);
    tabAnchor3.appendChild(tabText3);

    let display = document.getElementById('main');
    display.appendChild(cont);
  }
}
