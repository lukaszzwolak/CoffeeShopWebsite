export class Products {
  constructor(container, products) {
    this.container = container;
    this.products = products;

    this.renderProducts();
  }

  renderProducts() {
    this.container.innerHTML = '';

    this.products.forEach((product, index) => {
      const isFirst = index === 0;
      const isEven = index % 2 === 0;
      const productNumber = String(index + 1).padStart(2, '0');
      const alignClass = isEven ? 'left' : 'right';

      const firstWord = product.title.split(' ')[0].toUpperCase();
      const restWords = product.title.split(' ').slice(1).join(' ').toUpperCase();

      const productElement = document.createElement('div');
      productElement.classList.add('product');
      if (!isEven) {
        productElement.classList.add('reverse');
      }

      productElement.innerHTML = `
        <div class="product-info ${alignClass}">
          <h3 class="product-title">
            <div class="title-top">
              <span class="product-number">${productNumber}.</span>
              <span class="title-first">${firstWord}</span>
              <span class="title-rest">${restWords}</span>
            </div>
            <div class="title-underline"></div>
          </h3>
          <p class="description">${product.description}</p>
          <div class="product-details">
            <p><strong>ROASTING:</strong> <span>${product.roasting}/10</span></p>
            <p><strong>INTENSITY:</strong> <span>${product.intensity}/10</span></p>
          </div>
        </div>

        ${isFirst ? `
          <div class="product-badge-wrapper">
            <div class="product-badge">
              <div class="badge-number">1</div>
              <span>MOST<br>POPULAR</span>
              <svg viewBox="0 0 200 200" class="badge-laurel-bg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M100,20
                         C60,20 40,60 40,100
                         C40,140 60,180 100,180
                         C140,180 160,140 160,100
                         C160,60 140,20 100,20 Z"
                      fill="none" stroke="currentColor" stroke-width="4"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        ` : ''}  

        <div class="product-image">
          <img src="images/${product.image}" alt="${product.title}" />
        </div>
      `;

      this.container.appendChild(productElement);
    });
  }
}
