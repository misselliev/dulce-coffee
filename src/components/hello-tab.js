export default class helloTab {
  constructor() {
    this.helloInfo();
  }
  helloInfo() {
    let page = document.getElementById('main');
    let tab = document.createElement('div');
    page.append(tab);
    tab.classList = 'container';
    tab.id = 'hello-tab';
    let divHello = document.createElement('div');
    divHello.id = 'text-hello-tab';
    divHello.classList = 'column is-three-fifths';
    let helloColumns = document.createElement('div');
    helloColumns.classList = 'columns';
    tab.appendChild(helloColumns);
    helloColumns.appendChild(divHello);

    let helloTitle = document.createElement('h1');
    helloTitle.classList = 'title is-3 is-spaced green-text has-text-centered';
    helloTitle.innerHTML = 'Welcome to the best coffee shop ever';
    divHello.appendChild(helloTitle);

    let helloSubt = document.createElement('h2');
    helloSubt.classList = 'subtitle is-5 green-text has-text-centered';
    helloSubt.innerHTML =
      'Relax your paws, have some foam while your human has some greens';
    divHello.appendChild(helloSubt);

    let helloPup = document.createElement('div');
    helloPup.classList = 'column image img-column';
    let pup = document.createElement('img');
    pup.classList = 'is-rounded pup';
    pup.src = 'https://i.imgur.com/9uKrhtz.png';
    helloPup.appendChild(pup);
    helloColumns.appendChild(helloPup);
  }
}

export const displayWelcome = () => {
  let welcome = new helloTab();
  return welcome;
};
