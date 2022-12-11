export class ArticleToolsUI {
  constructor(article) {
    this.productList = [
      "clothes",
      "devices",
      "vehicles",
      "decors",
      "promotionProducts",
    ];
    const root = this.createSectionContainer();
    const productContainer = this.createProductsContainer(root);
    this.showProducts(productContainer, article);
    document.querySelector(".articles-products").appendChild(root);
  }

  createSectionContainer = () => {
    const root = document.createElement("section");
    root.classList.add("products-list");
    root.innerHTML = `<h1 class="product-category">Dla Ciebie</h1><h3 class="chosen-by-us">Wyróżnione przez nas</h3>`;

    return root;
  };

  createProductsContainer = root => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products-list-container");
    root.appendChild(productsContainer);

    return productsContainer;
  };

  showProducts = (productsContainer, article) => {
    let discountState = 'style="display:none;"';
    console.log(article, "asdsadsadsa");
    let category = this.getProductType(article);
    if (article === "foundItem") {
      this.showProductFound(productsContainer, discountState);
    } else {
      let items = JSON.parse(eval("sessionStorage." + category));
      let products = eval("items." + article);
      sessionStorage.setItem("products", JSON.stringify(products));
      products.forEach((productInformation) => {
        productInformation.discount
          ? ((discountState = 'style="display:flex;"'))
          : (discountState = 'style="display:nonte"');
        this.createProductArticle(
          productsContainer,
          discountState,
          productInformation
        );
      });
    }
  }

  createProductArticle = (
    productsContainer,
    discountState,
    productInformation
  ) => {
    const product = document.createElement("article");
    product.classList.add("product");
    product.innerHTML = ` <div  class ="product-image">
            <div ${discountState} class="discount-container"></div><img id="${
      productInformation.productId
    }" class="look-image" src=${productInformation.productImage}></div>
            <p class ="product-description">${
              productInformation.description
            }</p>
            <div class ="product-producer">${productInformation.producer}
            ${productInformation.discount ? ('<div class ="discount-price">'+`${productInformation.discountPrice}zł!`+'</div>') : ""}
            </div>
            <div class ="product-price">${productInformation.price + " zł"}
            ${productInformation.discount ? '<div class ="strikethrough"></div>' : ""}
            </div>
            `;
    productsContainer.appendChild(product);
  };
  showProductFound = (productsContainer, discountState) => {
    const item = JSON.parse(sessionStorage.lastFoundProduct);
    this.createProductArticle(productsContainer, discountState, item);
    console.log(item);
    let devices = JSON.parse(eval("sessionStorage." + item.category));
    let product = eval("devices." + item.productType);
    sessionStorage.setItem("products", JSON.stringify(product));
  };

  getProductType = article => {
    for (var i = 0; i < sessionStorage.length; i++) {
      let value = sessionStorage.key(i);
      if (this.productList.includes(value)) {
        let score = JSON.parse(eval("sessionStorage." + value));
        if (article in score) {
          return value;
        }
      }
    }
  }
}
