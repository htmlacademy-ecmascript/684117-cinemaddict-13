import {createElement} from '../utils.js';

const createSiteNavigationTemplate = (filter) => {
  const createSiteNavigationItems = () => {
    return filter.map(({name, count}) => {
      return `<a href="#${name}" class="main-navigation__item">${name[0].toUpperCase() + name.slice(1)} <span class="main-navigation__item-count">${count}</span></a>`;
    }).join(``);
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${createSiteNavigationItems()}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};

export default class SiteNavigation {
  constructor(filter) {
    this._filter = filter;
    this._element = null;
  }

  getTemplate() {
    return createSiteNavigationTemplate(this._filter);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
