
import {ArticleToolsUI} from "./ArticleToolsUI.js";
import devices from "./ElectronicProducts.js";
const create = new ArticleToolsUI();

const {laptops,shavers} = devices;

localStorage.setItem("sds",JSON.stringify(shavers));
console.log("teraz!!!!");
document.querySelectorAll(".show-product").
forEach(bttn =>bttn.addEventListener('click', e =>
{
    const data = e.target.getAttribute('data-product');
   
   
}))