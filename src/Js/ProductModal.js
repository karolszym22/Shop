import { ShopCart } from "./ShopCart.js";
import information from "./ProductsInformation.js";
export class ProdcutModal {
  createModal(productId) {
    this.product = this.findItem(productId);
    this.modal = document.querySelector(".product-modal");
    this.showModal(this.modal, productId);
    this.addZoomImage(this.product);
    this.addProductName(this.product);
    this.addProducerName(this.product);
    this.addProductPrice(this.product);
    this.addProductQuantity(this.product);
    this.addProductInformation(this.product);
    this.dropToCart();
    this.buyNow();
    this.closeModal();
  }
  showModal = (modal) => {
    document.querySelector(".dark-body").style.display = "flex";
    modal.style.display = "block";
  };
  addZoomImage = (product) => {
    const image = document.getElementById("magnifying_img");
    image.src = product.productImageZoom;
  };

  findItem = (productId) => {
    const products = JSON.parse(sessionStorage.products);
    var item = products.find((product) => product.productId === productId);
    return item;
  };

  addProductName = (product) => {
    let productName = document.querySelector(".product-name");
    productName.textContent = product.name;
  };
  addProducerName = (product) => {
    let producerName = document.querySelector(".producer-name");
    producerName.textContent = product.producer;
  };
  addProductPrice = (product) => {
    if (product.discount) {
      product.price = product.discountPrice;
    }
    let productPrice = document.querySelector(".price-value");
    let productPrice2 = document.querySelector(".price");
    productPrice.textContent = product.price + " zł";
    productPrice2.textContent = product.price + " zł";
  };
  addProductQuantity = (product) => {
    let productQuantity = document.querySelector(".quantity-product");
    productQuantity.textContent = "Nowe (" + product.quantity + ") od ";
  };
  getProductInformation = (type) => {
    let info = type;
    for (let item in information) {
      if (item === info) return information[info];
    }
  };
  addProductInformation = (product) => {
    const container = document.createElement("div");
    container.classList.add("product-information");
    container.id = "productInformation";
    let information = this.getProductInformation(product.productType);
    information.forEach((info, index) => {
      let infoName = document.createElement("div");
      infoName.classList.add("information");
      let item = product[Object.keys(product)[index]];
      infoName.innerHTML = this.addProductValue(info, item);
      container.appendChild(infoName);
    });
    document.querySelector(".main-product-information").appendChild(container);
  };
  addProductValue = (info, item) => {
    const productValue = `<a class ="feature"> ${info}</a><a class ="feature-value"> ${item}</a>`;
    return productValue;
  };
  closeModal = () => {
    const closeBttn = document.querySelector(".close-modal");
    closeBttn.addEventListener("click", this.deleteModalInformation);
  };
  deleteModalInformation = () => {
    document.getElementById("productInformation").remove();
    document.querySelector(".dark-body").style.display = "none";
    document.querySelector(".product-modal").style.display = "none";
  };

  dropToCart = () => {
    let addToCartBttn = document.querySelector(".add-to-cart");
    addToCartBttn.addEventListener("click", this.createShopCart, false);
  };
  buyNow = () => {
    let buyNowBttn = document.querySelector(".buy-now");
    buyNowBttn.addEventListener("click", function () {
      sessionStorage.state = "";
    });
  };
  createShopCart = () => {
    let test = JSON.stringify(this.product);
    new ShopCart(test);
  };
}
