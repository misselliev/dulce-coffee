export default class findTab {
  constructor() {
    this.findInfo();
  }
  findInfo() {
    let page = document.getElementById('main');
    let tab = document.createElement('div');
    page.append(tab);
    tab.classList = 'container';
    tab.id = 'find-tab';
    let picture = document.createElement('img');
    picture.classList = 'image is-squared';
    picture.src =
      'https://images.unsplash.com/photo-1469631423273-6995642a6a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80';
    tab.appendChild(picture);
    let info = document.createElement('h1');
    info.classList = 'title is-3 is-spaced italic-text top-space';
    info.innerHTML = 'Soon in a place near you!';
    tab.appendChild(info);
  }
}
