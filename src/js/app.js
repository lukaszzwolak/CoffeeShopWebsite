import { getProducts } from '../api/products.js';
import { Products } from './Products.js';

class App {
  constructor(container) {
    this.container = container;

    this.addNavigation();
    getProducts((products) => {
      new Products(this.container.querySelector('#products'), products);
    }); // bind()
  }

  addNavigation() {
    const pages = this.container.querySelectorAll('.page');
    const navLinks = this.container.querySelectorAll('.nav-link');

    const activatePage = (pageId) => {
      pages.forEach((page) => {
        page.classList.toggle('active', page.id === pageId);
      });

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${pageId}`);
      });
    };

    window.addEventListener('hashchange', () => {
      const pageId = window.location.hash.replace('#', '') || 'home';
      activatePage(pageId);
    });

    const initialPage = window.location.hash.replace('#', '') || 'home';
    activatePage(initialPage);
  }
}

new App(document);