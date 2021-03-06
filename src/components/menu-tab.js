class menuTab {
  newCategory(name, description) {
    const page = document.getElementById('menu-tab');
    const tab = document.createElement('div');
    page.append(tab);
    tab.classList = 'menu-break';
    const category = document.createElement('div');
    category.id = name;
    category.classList = 'columns';
    const title = document.createElement('h1');
    title.classList = 'title is-3 is-spaced green-text';
    title.innerHTML = name;
    const sub = document.createElement('h2');
    sub.classList = 'title is-5 is-spaced italic-text green-text';
    sub.innerHTML = description;
    tab.append(title);
    tab.append(sub);
    tab.append(category);
  }

  newItem(category, dish, photo) {
    const cat = document.getElementById(category);
    const itemDiv = document.createElement('div');
    itemDiv.classList = 'column';
    const image = document.createElement('img');
    image.classList = 'image is-rounded is-128x128';
    image.src = photo;
    itemDiv.append(image);
    const sub = document.createElement('h2');
    sub.classList = 'subtitle is-5 green-text';
    sub.innerHTML = dish;
    itemDiv.appendChild(sub);
    cat.append(itemDiv);
  }
}

//  Addding categories and items

export const displayCoffeeMenu = () => {
  const menu = new menuTab();
  menu.newCategory('Coffee', 'Get your caffeine fix in style');
  menu.newItem(
    'Coffee',
    'Caramel macchiato',
    'https://cooktoria.com/wp-content/uploads/2016/07/copycat-starbucks-iced-caramel-macchiato-10.jpg'
  );
  menu.newItem(
    'Coffee',
    'Matcha latte',
    'https://cafedeoro-rw.com/wp-content/uploads/2017/10/MatchaLatte_1.jpg'
  );
  menu.newItem(
    'Coffee',
    'Chai latte',
    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/chai-latte.jpg?itok=CFd4_ncG'
  );
};

export const displayPastryMenu = () => {
  const menu = new menuTab();

  menu.newCategory('Pastries', 'Something sweet to nibble to');
  menu.newItem(
    'Pastries',
    'Meringues',
    'https://images.unsplash.com/photo-1465808029961-255e8fccc37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  );
  menu.newItem(
    'Pastries',
    'Macaroons',
    'https://images.unsplash.com/photo-1489069313310-63735a4f3010?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80'
  );
  menu.newItem(
    'Pastries',
    'Chocolate cookies',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
  );
};

export const displaySaladMenu = () => {
  const menu = new menuTab();

  menu.newCategory('Salads', 'Because your human also has to get something');
  menu.newItem(
    'Salads',
    'Fruit punch',
    'https://images.unsplash.com/photo-1555057949-7e4a30956f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  );
  menu.newItem(
    'Salads',
    'Nutcracker',
    'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  );
  menu.newItem(
    'Salads',
    'Avocado heaven',
    'https://images.unsplash.com/photo-1564929360162-73cd686db4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=993&q=80'
  );
};

export const displayAll = () => {
  const page = document.getElementById('main');
  const tab = document.createElement('div');
  page.append(tab);
  tab.classList = 'container';
  tab.id = 'menu-tab';
  displayCoffeeMenu();
  displayPastryMenu();
  displaySaladMenu();
};
