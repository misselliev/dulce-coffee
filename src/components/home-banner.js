export default class Banner {
  constructor() {
    this.homeBanner();
  }
  homeBanner() {
    let bannerMainContainer = document.createElement('section');
    bannerMainContainer.classList = 'hero is-primary is-bold header-bg';
    let bannerBody = document.createElement('div');
    bannerBody.classList = 'hero-body';
    bannerMainContainer.appendChild(bannerBody);
    let bannerCont = document.createElement('div');
    bannerCont.classList = 'container';
    bannerBody.appendChild(bannerCont);

    let title = document.createElement('h1');
    title.classList = 'title is-spaced header-text';
    title.innerHTML = 'The Green Woof';
    bannerCont.appendChild(title);

    let subtitle = document.createElement('h2');
    subtitle.innerHTML =
      'When your human wants to be vegan but you want a puppachino';
    subtitle.classList = 'subtitle header-text';
    bannerCont.appendChild(subtitle);

    let display = document.getElementById('main');
    display.appendChild(bannerMainContainer);
  }
}
