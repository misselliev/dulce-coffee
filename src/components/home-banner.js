export default class Banner {
  constructor() {
    this.homeBanner();
  }

  homeBanner() {
    const bannerMainContainer = document.createElement('section');
    bannerMainContainer.classList = 'hero is-primary is-bold header-bg';
    const bannerBody = document.createElement('div');
    bannerBody.classList = 'hero-body';
    bannerMainContainer.appendChild(bannerBody);
    const bannerCont = document.createElement('div');
    bannerBody.appendChild(bannerCont);

    const title = document.createElement('h1');
    title.classList = 'title is-spaced header-text';
    title.innerHTML = 'The Green Woof';
    bannerCont.appendChild(title);

    const subtitle = document.createElement('h2');
    subtitle.innerHTML = 'When your human is vegan but you want a puppachino';
    subtitle.classList = 'subtitle header-text';
    bannerCont.appendChild(subtitle);

    const display = document.getElementById('main');
    display.appendChild(bannerMainContainer);
  }
}
