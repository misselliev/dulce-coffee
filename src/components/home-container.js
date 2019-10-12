export default class infoContainer {
  constructor() {
    this.tabContainer = () => {
      let cont = document.getElementById('content');
      cont.classList = 'tabs is-boxed is-centered is-fullwidth';

      let tabList = document.createElement('ul');
      cont.appendChild(tabList);

      let tabElement = document.createElement('li');
      tabList.appendChild(tabElement);
      let tabAnchor = document.createElement('a');
      tabElement.appendChild(tabAnchor);

      let tabSpanIcon = document.createElement('span');
      tabSpanIcon.classList = 'icon is-small';
      let tabIcon = document.createElement('i');
      tabIcon.classList = 'fas fa-leaf';
      let tabText = document.createElement('span');
      tabText.innerHTML = 'Hello!';
      tabSpanIcon.appendChild(tabIcon);
      tabAnchor.appendChild(tabSpanIcon);
      tabAnchor.appendChild(tabText);

      return cont;
    };
  }
}
