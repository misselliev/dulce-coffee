const homeBanner = () => {
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

const tabContainer = () => {
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
};

export { homeBanner, tabContainer };
