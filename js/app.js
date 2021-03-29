import devices from "./ElectronicProducts.js";
import {ArticleToolsFactory} from './ArticleToolsFactory.js'
import {Redirection} from "./RedirectionButtons.js"

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
    
   
}

console.log("no zadziałaj w koncu!");
const app = new App();
app.getAllProducts();
app.setCart();  
