export default class Banner {
  constructor() {
    this.homeBanner = () => {
      let bannerMainContainer = document.createElement('section');
      bannerMainContainer.classList = 'hero is-primary is-bold';

      let bannerBody = document.createElement('div');
      bannerBody.classList = 'hero-body';
      bannerMainContainer.appendChild(bannerBody);

      let bannerCont = document.createElement('div');
      bannerCont.classList = 'container';
      bannerMainContainer.appendChild(bannerCont);

      let title = document.createElement('h1');
      title.classList = 'title';
      title.innerHTML = 'The Green Woof';
      bannerCont.appendChild(title);

      let subtitle = document.createElement('h2');
      subtitle.innerHTML =
        'When your human wants to be vegan but you want a puppachino';
      title.classList = 'subtitle';
      bannerCont.appendChild(subtitle);

      return bannerMainContainer;
    };
  }
}
