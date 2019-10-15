export default class findTab {
  constructor() {
    this.findInfo();
  }

  findInfo() {
    const page = document.getElementById('main');
    const tab = document.createElement('div');
    page.append(tab);
    tab.classList = 'container';
    tab.id = 'find-us-tab';
    const imageCont = document.createElement('div');
    imageCont.classList = 'flex-container';
    const picture = document.createElement('img');
    picture.classList = 'image is-squared extra-space';
    picture.src = 'https://i.imgur.com/qu5Pbk1.jpg';
    imageCont.appendChild(picture);
    tab.appendChild(imageCont);
    const divInfo = document.createElement('div');
    const info = document.createElement('h1');
    info.classList = 'title is-3 italic-text green-text has-text-centered';
    info.innerHTML = 'Soon in a place near you!';
    divInfo.appendChild(info);
    tab.appendChild(divInfo);
  }
}

export const displayFind = () => {
  const Find = new findTab();
  return Find;
};
