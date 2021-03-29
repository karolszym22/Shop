import devices from "./ElectronicProducts.js";
import {ArticleToolsFactory} from './ArticleToolsFactory.js'
import {Redirection} from "./RedirectionButtons.js"


const buttons = new Redirection();
class App
{
    getAllProducts() ///refaktoring wskazany
    {
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


const app = new App();
app.getAllProducts();
app.setCart();  
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