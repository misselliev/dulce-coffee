export default class helloTab {
  constructor() {
    this.helloInfo();
  }
  helloInfo() {
    const page = document.getElementById('main');
    const tab = document.createElement('div');
    page.append(tab);
    tab.classList = 'container';
    tab.id = 'hello-tab';
    const divHello = document.createElement('div');
    divHello.id = 'text-hello-tab';
    divHello.classList = 'column is-three-fifths';
    const helloColumns = document.createElement('div');
    helloColumns.classList = 'columns';
    tab.appendChild(helloColumns);
    helloColumns.appendChild(divHello);

    const helloTitle = document.createElement('h1');
    helloTitle.classList = 'title is-3 is-spaced green-text has-text-centered';
    helloTitle.innerHTML = 'Welcome to the best coffee shop ever';
    divHello.appendChild(helloTitle);

    const helloSubt = document.createElement('h2');
    helloSubt.classList = 'subtitle is-5 green-text has-text-centered';
    helloSubt.innerHTML = 'Relax your paws! ';
    helloSubt.innerHTML += 'Have some foam while your human has some greens';
    divHello.appendChild(helloSubt);

    const helloPup = document.createElement('div');
    helloPup.classList = 'column image img-column';
    const pup = document.createElement('img');
    pup.classList = 'is-rounded pup';
    pup.src = 'https://i.imgur.com/9uKrhtz.png';
    helloPup.appendChild(pup);
    helloColumns.appendChild(helloPup);
  }
}

export const displayWelcome = () => {
  const welcome = new helloTab();
  return welcome;
};
