import devices from "./ElectronicProducts.js";

import {ArticleToolsFactory} from './ArticleToolsFactory.js'
import {Redirection} from "./RedirectionButtons.js"
import {ShopCart} from "./ShopCart.js"
import {SearchItem} from "./SearchItem.js"
import {OrderSummary} from "./OrderSummary.js"

const buttons = new Redirection();

class App
{
    getAllProducts() ///refaktoring wskazany
    { 
      console.log("no pobierz produkty");
      if(sessionStorage.getItem("devices"))
      {
          console.log("jest");
      }else 
      {
        console.log("nie ma");
        sessionStorage.setItem("devices", JSON.stringify(devices));
      }
    }
    setCart()///refaktoring wskazany
    {
      let cart = new Array();

      if(sessionStorage.getItem("cart"))
      {
          console.log("jest");
      }else 
      {
        console.log("nie ma");
        sessionStorage.setItem("cart", cart );

      }
    }
    cartContent()
    {
      console.log("cartContent się wykonuje teraz");
      const cart = document.querySelector(".shop-cart-info");
      if(sessionStorage.cart.length!=0)
      {
        cart.style.display = "inline";
        cart.textContent = JSON.parse(sessionStorage.cart).length;
      }
    }
    lastState()
    {
      if(sessionStorage.getItem("lastState"))
      {
          sessionStorage.state = sessionStorage.lastState;
      }
    }

  
  
    
   
}

console.log("no zadziałaj w koncu!");
const app = new App();
app.getAllProducts();
app.setCart();  
app.cartContent();
app.lastState();
const search = new SearchItem();