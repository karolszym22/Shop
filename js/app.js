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
   
}


const app = new App();
app.getAllProducts();
  
