export class ShopCart {
  constructor(product) {
    this.addToCart(product);
    this.updateCart();
  }
  addToCart(product) {
    if (sessionStorage.cart.length == 0) {
      sessionStorage.cart = "[" + product + "]";
    } else {
      let cart = JSON.parse(sessionStorage.cart);
      cart.push(JSON.parse(product));
      sessionStorage.cart = JSON.stringify(cart);
    }
  }
  updateCart() {
    const cart = document.querySelector(".shop-cart-info");
    const numberItems = JSON.parse(sessionStorage.cart).length;
    if (sessionStorage.cart.length == 0) {
      cart.style.display = "none";
    } else {
      cart.style.display = "inline";
      cart.textContent = numberItems;
    }
  }
}
