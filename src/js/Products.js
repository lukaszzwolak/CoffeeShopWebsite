export class Products {
  constructor(container, products) {
    this.container = container;
    this.products = products;

    this.renderProducts();
  }

  renderProducts() {
    const container = this.container.querySelector('#product-list');
    container.innerHTML = '';

    this.products.forEach((product) => {
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
    });
  }
}