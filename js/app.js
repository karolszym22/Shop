
import {ArticleToolsUI} from "./ArticleToolsUI.js";

const create = new ArticleToolsUI();


document.querySelectorAll(".show-product").
forEach(bttn =>bttn.addEventListener('click', e =>
{
    const data = e.target.getAttribute('data-product');
   
   
}))