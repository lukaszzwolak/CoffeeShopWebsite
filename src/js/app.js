import { getProducts } from '../api/products.js';
import { Products } from './Products.js';
import { ContactForm } from './ContactForm.js';

class App {
  constructor(container) {
    this.container = container;

    this.addNavigation();
    getProducts((products) => {
      new Products(this.container.querySelector('#products'), products);
    }); // bind()

    new ContactForm(this.container.querySelector('#contact'));
    this.setupHeroCTA();
  }

  addNavigation() {
    const pages = this.container.querySelectorAll('.js-page');
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

  setupHeroCTA() {
    const arrowIcon = document.querySelector('#reveal-products');
    const productsSection = document.querySelector('#products');

    arrowIcon?.addEventListener('click', (e) => {
      e.preventDefault();

      // Show products section
      productsSection.classList.remove('hidden');

      // Scroll to it smoothly
      productsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

new App(document);