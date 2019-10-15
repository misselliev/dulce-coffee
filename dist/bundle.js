/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/css/mystyles.scss":
/*!********************************!*\
  !*** ./dist/css/mystyles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dist/css/mystyles.scss?");

/***/ }),

/***/ "./src/components/find-tab.js":
/*!************************************!*\
  !*** ./src/components/find-tab.js ***!
  \************************************/
/*! exports provided: default, displayFind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return findTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayFind\", function() { return displayFind; });\nclass findTab {\n  constructor() {\n    this.findInfo();\n  }\n  findInfo() {\n    let page = document.getElementById('main');\n    let tab = document.createElement('div');\n    page.append(tab);\n    tab.classList = 'container';\n    tab.id = 'find-tab';\n    let picture = document.createElement('img');\n    picture.classList = 'image is-squared';\n    picture.src =\n      'https://images.unsplash.com/photo-1469631423273-6995642a6a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=778&q=80';\n    tab.appendChild(picture);\n    let info = document.createElement('h1');\n    info.classList = 'title is-3 is-spaced italic-text top-space';\n    info.innerHTML = 'Soon in a place near you!';\n    tab.appendChild(info);\n  }\n}\n\nconst displayFind = () => {\n  let find = new findTab();\n  find;\n};\n\n\n//# sourceURL=webpack:///./src/components/find-tab.js?");

/***/ }),

/***/ "./src/components/hello-tab.js":
/*!*************************************!*\
  !*** ./src/components/hello-tab.js ***!
  \*************************************/
/*! exports provided: default, displayWelcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return helloTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWelcome\", function() { return displayWelcome; });\nclass helloTab {\n  constructor() {\n    this.helloInfo();\n  }\n  helloInfo() {\n    let page = document.getElementById('main');\n    let tab = document.createElement('div');\n    page.append(tab);\n    tab.classList = 'container';\n    tab.id = 'hello-tab';\n    let divHello = document.createElement('div');\n    divHello.id = 'text-hello-tab';\n    divHello.classList = 'column is-two-thirds';\n    let helloColumns = document.createElement('div');\n    helloColumns.classList = 'columns';\n    tab.appendChild(helloColumns);\n    helloColumns.appendChild(divHello);\n\n    let helloTitle = document.createElement('h1');\n    helloTitle.classList = 'title is-3 is-spaced';\n    helloTitle.innerHTML = 'Welcome to the best coffee shop ever';\n    divHello.appendChild(helloTitle);\n\n    let helloSubt = document.createElement('h2');\n    helloSubt.classList = 'subtitle is-5';\n    helloSubt.innerHTML =\n      'Relax your paws, have some foam while your human has some greens';\n    divHello.appendChild(helloSubt);\n\n    let helloPup = document.createElement('div');\n    helloPup.classList = 'column image is-square';\n    let pup = document.createElement('img');\n    pup.classList = 'is-rounded';\n    pup.style = 'height:300px; width:300px;';\n    pup.src = 'https://i.imgur.com/9uKrhtz.png';\n    helloPup.appendChild(pup);\n    helloColumns.appendChild(helloPup);\n  }\n}\n\nconst displayWelcome = () => {\n  let welcome = new helloTab();\n  return welcome;\n};\n\n\n//# sourceURL=webpack:///./src/components/hello-tab.js?");

/***/ }),

/***/ "./src/components/home-banner.js":
/*!***************************************!*\
  !*** ./src/components/home-banner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\nclass Banner {\n  constructor() {\n    this.homeBanner();\n  }\n  homeBanner() {\n    let bannerMainContainer = document.createElement('section');\n    bannerMainContainer.classList = 'hero is-primary is-bold header-bg';\n    let bannerBody = document.createElement('div');\n    bannerBody.classList = 'hero-body';\n    bannerMainContainer.appendChild(bannerBody);\n    let bannerCont = document.createElement('div');\n    bannerBody.appendChild(bannerCont);\n\n    let title = document.createElement('h1');\n    title.classList = 'title is-spaced header-text';\n    title.innerHTML = 'The Green Woof';\n    bannerCont.appendChild(title);\n\n    let subtitle = document.createElement('h2');\n    subtitle.innerHTML =\n      'When your human wants to be vegan but you want a puppachino';\n    subtitle.classList = 'subtitle header-text';\n    bannerCont.appendChild(subtitle);\n\n    let display = document.getElementById('main');\n    display.appendChild(bannerMainContainer);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/home-banner.js?");

/***/ }),

/***/ "./src/components/menu-tab.js":
/*!************************************!*\
  !*** ./src/components/menu-tab.js ***!
  \************************************/
/*! exports provided: displayCoffeeMenu, displayPastryMenu, displaySaladMenu, displayAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayCoffeeMenu\", function() { return displayCoffeeMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayPastryMenu\", function() { return displayPastryMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaySaladMenu\", function() { return displaySaladMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayAll\", function() { return displayAll; });\nclass menuTab {\n  newCategory(name, description) {\n    let page = document.getElementById('menu-tab');\n    let tab = document.createElement('div');\n    page.append(tab);\n    tab.classList = 'temp';\n    let category = document.createElement('div');\n    category.id = name;\n    category.classList = 'columns';\n    let title = document.createElement('h1');\n    title.classList = 'title is-3 is-spaced';\n    title.innerHTML = name;\n    let sub = document.createElement('h2');\n    sub.classList = 'title is-5 is-spaced italic-text';\n    sub.innerHTML = description;\n    tab.append(title);\n    tab.append(sub);\n    tab.append(category);\n  }\n  newItem(category, dish, photo) {\n    let cat = document.getElementById(category);\n    let itemDiv = document.createElement('div');\n    itemDiv.classList = 'column';\n    let image = document.createElement('img');\n    image.classList = 'image is-rounded is-128x128';\n    image.src = photo;\n    itemDiv.append(image);\n    let sub = document.createElement('h2');\n    sub.classList = 'subtitle is-5';\n    sub.innerHTML = dish;\n    itemDiv.appendChild(sub);\n    cat.append(itemDiv);\n  }\n}\n\n//Addding categories and items\n\nconst displayCoffeeMenu = () => {\n  let menu = new menuTab();\n  menu.newCategory('Coffee', 'Get your caffeine fix in style');\n  menu.newItem(\n    'Coffee',\n    'Caramel macchiato',\n    'https://cooktoria.com/wp-content/uploads/2016/07/copycat-starbucks-iced-caramel-macchiato-10.jpg'\n  );\n  menu.newItem(\n    'Coffee',\n    'Matcha latte',\n    'https://cafedeoro-rw.com/wp-content/uploads/2017/10/MatchaLatte_1.jpg'\n  );\n  menu.newItem(\n    'Coffee',\n    'Chai latte',\n    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/chai-latte.jpg?itok=CFd4_ncG'\n  );\n};\n\nconst displayPastryMenu = () => {\n  let menu = new menuTab();\n\n  menu.newCategory('Pastries', 'Something sweet to nibble to');\n  menu.newItem(\n    'Pastries',\n    'Meringues',\n    'https://images.unsplash.com/photo-1465808029961-255e8fccc37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'\n  );\n  menu.newItem(\n    'Pastries',\n    'Macaroons',\n    'https://images.unsplash.com/photo-1489069313310-63735a4f3010?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80'\n  );\n  menu.newItem(\n    'Pastries',\n    'Chocolate cookies',\n    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'\n  );\n};\n\nconst displaySaladMenu = () => {\n  let menu = new menuTab();\n\n  menu.newCategory('Salads', 'Because your human also has to get something');\n  menu.newItem(\n    'Salads',\n    'Fruit punch',\n    'https://images.unsplash.com/photo-1555057949-7e4a30956f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'\n  );\n  menu.newItem(\n    'Salads',\n    'Nutcracker',\n    'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'\n  );\n  menu.newItem(\n    'Salads',\n    'Avocado heaven',\n    'https://images.unsplash.com/photo-1564929360162-73cd686db4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=993&q=80'\n  );\n};\n\nconst displayAll = () => {\n  let page = document.getElementById('main');\n  let tab = document.createElement('div');\n  page.append(tab);\n  tab.classList = 'container';\n  tab.id = 'menu-tab';\n  displayCoffeeMenu();\n  displayPastryMenu();\n  displaySaladMenu();\n};\n\n\n//# sourceURL=webpack:///./src/components/menu-tab.js?");

/***/ }),

/***/ "./src/components/tabs.js":
/*!********************************!*\
  !*** ./src/components/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tabsContainer; });\n/* harmony import */ var _hello_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-tab */ \"./src/components/hello-tab.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-tab */ \"./src/components/menu-tab.js\");\n/* harmony import */ var _find_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-tab */ \"./src/components/find-tab.js\");\n\n\n\nclass tabsContainer {\n  tabs() {\n    let totalTabs = [\n      ['Hello!', 'fas fa-leaf', 'hello'],\n      ['Our menu', 'fas fa-apple-alt', 'menu'],\n      ['Find us', 'fas fa-map-marked-alt', 'map']\n    ];\n    let display = document.getElementById('main');\n    let cont = document.getElementById('content');\n    let tabList = document.createElement('ul');\n    cont.appendChild(tabList);\n    totalTabs.forEach(item => {\n      let tbElement = document.createElement('li');\n      tbElement.id = item[2];\n      tabList.appendChild(tbElement);\n      let tabAnchor = document.createElement('a');\n      tbElement.appendChild(tabAnchor);\n      let tabSpanIcon = document.createElement('span');\n      tabSpanIcon.classList = 'icon is-small';\n      let tabIcon = document.createElement('i');\n      tabIcon.classList = item[1];\n      let tabText = document.createElement('span');\n      tabText.innerHTML = item[0];\n      tabSpanIcon.appendChild(tabIcon);\n      tabAnchor.appendChild(tabSpanIcon);\n      tabAnchor.appendChild(tabText);\n      // item.addEventListener('click', () => {\n      //   if (item.id === 'hello') {\n      //     displayWelcome();\n      //   } else if (item.id === 'menu') {\n      //     displayAll();\n      //   } else {\n      //     displayFind();\n      //   }\n      // });\n    });\n    // totalTabs.forEach(item => {\n    //   item.addEventListener('click', () => {\n    //     if (item.id === 'hello') {\n    //       displayWelcome();\n    //     } else if (item.id === 'menu') {\n    //       displayAll();\n    //     } else {\n    //       displayFind();\n    //     }\n    //   });\n    // });\n    function cleanScreen() {\n      let body = document.body;\n      let cont = document.getElementsByClassName('container')[0];\n      if (cont) {\n        body.removeChild(cont);\n      }\n    }\n\n    let tab1 = document.getElementById('hello');\n    tab1.addEventListener('click', () => {\n      cleanScreen();\n      // let a = new helloTab();\n      new _hello_tab__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    });\n    let tab2 = document.getElementById('menu');\n    tab2.addEventListener('click', () => {\n      cleanScreen();\n      // let b = new menuTab();\n      Object(_menu_tab__WEBPACK_IMPORTED_MODULE_1__[\"displayAll\"])();\n    });\n    let tab3 = document.getElementById('map');\n    tab3.addEventListener('click', () => {\n      cleanScreen();\n      // let c = new findTab();\n      new _find_tab__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    });\n    display.appendChild(cont);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/tabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home-banner */ \"./src/components/home-banner.js\");\n/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs */ \"./src/components/tabs.js\");\n__webpack_require__(/*! ./../dist/css/mystyles.scss */ \"./dist/css/mystyles.scss\");\n\n\n\nconst displayHome = () => {\n  let display = document.getElementById('main');\n  let header = new _components_home_banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  let tabBox = new _components_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  tabBox.tabs();\n  return display, header, tabBox;\n};\n\ndisplayHome();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });