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
    let imageCont = document.createElement('div');
    imageCont.classList = 'flex-container';
    let picture = document.createElement('img');
    picture.classList = 'image is-squared extra-space';
    picture.src =
      'https://images.unsplash.com/photo-1469631423273-6995642a6a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80';
    imageCont.appendChild(picture);
    tab.appendChild(imageCont);
    let divInfo = document.createElement('div');
    let info = document.createElement('h1');
    info.classList =
      'title is-3 is-spaced italic-text green-text extra-space has-text-centered';
    info.innerHTML = 'Soon in a place near you!';
    divInfo.appendChild(info);
    tab.appendChild(divInfo);
  }
}

export const displayFind = () => {
  let find = new findTab();
  find;
};
