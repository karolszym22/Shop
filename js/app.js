import devices from "./ElectronicProducts.js";
import {AddressModal} from "./AddressModal.js"
import {ArticleToolsFactory} from './ArticleToolsFactory.js'
import {Redirection} from "./RedirectionButtons.js"
import {ShopCart} from "./ShopCart.js"
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
let magnifying_area =  document.getElementById("magnifying_area");
let magnifying_img =  document.getElementById("magnifying_img");

magnifying_area.addEventListener("mousemove",function(event){
 let clientX = event.clientX - magnifying_area.offsetLeft
 let clientY = event.clientY - magnifying_area.offsetTop
	 
	let mWidth = magnifying_area.offsetWidth
	let mHeight = magnifying_area.offsetHeight
	clientX = clientX / mWidth * 100
	clientY = clientY / mHeight * 100

	
	magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(3)'
})

magnifying_area.addEventListener("mouseleave",function(){
	magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'
})