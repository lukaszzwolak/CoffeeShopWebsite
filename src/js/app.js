// src/js/App.js
import { getProducts } from '../api/products.js';
import { Products } from './Products.js';
import { ContactForm } from './ContactForm.js';

class App {
  constructor(container) {
    this.container = container;

    this.pages = this.container.querySelectorAll('.js-page');
    this.navLinks = this.container.querySelectorAll('.nav-link');

    this.addNavigation();
    this.initProducts();
    this.initContactForm();
    this.setupHeroCTA();
    this.setRandomHeroTitle();
  }

  addNavigation() {
    const activatePage = (pageId) => {
      this.pages.forEach((page) => {
        page.classList.toggle('active', page.id === pageId);
      });

      this.navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${pageId}`);
      });
    };

    window.addEventListener('hashchange', () => {
      const pageId = window.location.hash.replace('#', '') || 'home';
      activatePage(pageId);
    });

    // Initial load
    const initialPage = window.location.hash.replace('#', '') || 'home';
    activatePage(initialPage);
  }

  setupHeroCTA() {
    const arrowIcons = this.container.querySelectorAll('#reveal-products');
    const productsSection = this.container.querySelector('#products');

    arrowIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'products';
        productsSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  initProducts() {
    const productList = this.container.querySelector('#product-list');
    if (productList) {
      getProducts((products) => {
        new Products(productList, products);
      });
    }
  }

  initContactForm() {
    const contactFormEl = this.container.querySelector('.contact-form');
    if (contactFormEl) {
      new ContactForm(contactFormEl);
    }
  }

  setRandomHeroTitle() {
    const slogans = [
      'Home of Original Tastes',
      'Real Venezuela, Real Coffee',
      'Taste Real Venezuela'
    ];

    const random = slogans[Math.floor(Math.random() * slogans.length)];
    const heroTitle = document.querySelector('#hero-title');

    if (heroTitle) {
      const words = random.split(' ');
      const middleIndex = Math.ceil(words.length / 2);
      const left = words.slice(0, middleIndex).join(' ');
      const right = words.slice(middleIndex).join(' ');

      heroTitle.innerHTML = `
        <span class="left">${left.toUpperCase()}</span><br />
        <span class="right">${right.toUpperCase()}</span>
      `;
    }
  }
}

new App(document);
