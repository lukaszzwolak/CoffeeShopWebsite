const app = {
  initPages() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    const activatePage = (pageId) => {
      pages.forEach(page => {
        page.classList.toggle('active', page.id === pageId);
      });

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${pageId}`);
      });
    };

    window.addEventListener('hashchange', () => {
      const pageId = window.location.hash.replace('#', '') || 'home';
      activatePage(pageId);
    });

    const initialPage = window.location.hash.replace('#', '') || 'home';
    activatePage(initialPage);
  },

  initData() {
    // Produkty
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(products => this.renderProducts(products))
      .catch(err => console.error('Error fetching products:', err));

    // About
    fetch('http://localhost:3000/about')
      .then(res => res.json())
      .then(about => this.renderAbout(about))
      .catch(err => console.error('Error fetching about:', err));
  },

  renderProducts(products) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    for (const product of products) {
      const productElement = document.createElement('div');
      productElement.classList.add('product-card');

      productElement.innerHTML = `
          <img src="images/${product.image}" alt="${product.title}" class="product-img" />
          <div class="product-info">
            <h3 class="product-name">${product.title}</h3>
            <p class="product-desc">${product.description}</p>
            <p class="product-rating">ROASTING: ${product.roasting}/10 | INTENSITY: ${product.intensity}/10</p>
          </div>
        `;

      container.appendChild(productElement);
    }
  },

  renderAbout(about) {
    const desc1 = document.querySelectorAll('.about-description')[0];
    const desc2 = document.querySelectorAll('.about-description')[1];
    const cta = document.querySelector('.about-cta');

    if (desc1) desc1.textContent = about.description1;
    if (desc2) desc2.textContent = about.description2;
    if (cta) cta.textContent = about.cta;
  },

  init() {
    this.initPages();
    this.initData();
  }
};

app.init();
