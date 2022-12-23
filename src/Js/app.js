import devices from "./data-base/ElectronicProducts.js";
import clothes from "./data-base/ClothesProducts.js";
import vehicles from "./data-base/Automotive.js";
import decors from "./data-base/HomeProducts.js";
import { Redirection } from "./RedirectionButtons/RedirectionButtons.js";
import { SearchItem } from "./SearchItem/SearchItem.js";
import { NavLinks } from "./NavLinks/NavLinks.js"
import { ArticleToolsFactory } from "./ArticleToolsFactory/ArticleToolsFactory.js";
import { OrderTime } from "./OrderTime/OrderTime.js"
import { purchaseStates } from "./PurchaseStates/PurchaseStates.js";
import { OrderSummary } from "./OrderSummary/OrderSummary.js";
import { AddressModal } from "./AddressModal/AddressModal.js";
import { Discount } from "./DiscountGenerator/DiscountGenerator.js";
const buttons = new Redirection();
const navLinks= new NavLinks();
class App {
  constructor() {

    const allProducts = [devices, clothes, vehicles, decors];
    this.checkOrder();
    this.getAllProducts(allProducts);
    this.setCart();
    this.cartContent();
    this.lastDelivery();
    return new SearchItem(allProducts);
  }
  checkOrder() {
    if (sessionStorage.cart) {
        return new OrderTime();
    }
  }

  getAllProducts(
    allProducts ///refaktoring wskazany
  ) {
    if (!sessionStorage.isDiscount) {
      const discount = new Discount(allProducts);
      const products = discount.updatedProducts;
      sessionStorage.setItem("devices", JSON.stringify(products[0]));
      sessionStorage.setItem("clothes", JSON.stringify(products[1]));
      sessionStorage.setItem("vehicles", JSON.stringify(products[2]));
      sessionStorage.setItem("decors", JSON.stringify(products[3]));
    }
  }
  setCart() {
    ///refaktoring wskazany
    let cart = new Array();

    if (sessionStorage.getItem("cart")) {
    } else {
      sessionStorage.setItem("cart", cart);
    }
  }
  cartContent() {
    const cart = document.querySelector(".shop-cart-info");
    if (sessionStorage.cart.length != 0) {
      cart.style.display = "inline";
      cart.textContent = JSON.parse(sessionStorage.cart).length;
    }
  }

  lastDelivery() {
    sessionStorage.setItem("lastDelivery", 45643398);
  }
}

new App();
//new NavLinks();

const OpenSideMenuBttn = document.getElementById("open-side-menu");
const CloseSideMenuBttn = document.getElementById("close-side-menu");

OpenSideMenuBttn.addEventListener("click", function () {
  document.querySelector(".dark-body").style.display = "inline-flex";
  document.querySelector(".side-menu").style.display = "block";
});

CloseSideMenuBttn.addEventListener("click", function () {
  document.querySelector(".dark-body").style.display = "none";
  document.querySelector(".side-menu").style.display = "none";
});

const magnifying_area = document.getElementById("magnifying_area");
const magnifying_img = document.getElementById("magnifying_img");

magnifying_area.addEventListener("mousemove", function (event) {
  let clientX = event.clientX - magnifying_area.offsetLeft;
  let clientY = event.clientY - magnifying_area.offsetTop;

  let mWidth = magnifying_area.offsetWidth;
  let mHeight = magnifying_area.offsetHeight;
  clientX = (clientX / mWidth) * 100;
  clientY = (clientY / mHeight) * 100;

  magnifying_img.style.transform =
    "translate(-" + clientX + "%, -" + clientY + "%) scale(3)";
});

magnifying_area.addEventListener("mouseleave", function () {
  magnifying_img.style.transform = "translate(-50%,-50%) scale(1)";
});
