import devices from "./ElectronicProducts.js";
import {ArticleToolsFactory} from './ArticleToolsFactory.js'
import {Redirection} from "./RedirectionButtons.js"


const buttons = new Redirection();
console.log(devices);
class App
{
    getAllProducts()
    {
      if(sessionStorage.getItem("devices"))
      {
          console.log("jest");
      }else 
      {
        console.log("nie ma");
        sessionStorage.setItem("devices", devices);
      }
    }
   
}


const app = new App();
app.getAllProducts();
  
