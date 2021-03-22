
import {ArticleToolsUI} from "./ArticleToolsUI.js";
import devices from "./ElectronicProducts.js";
import {ArticleToolsFactory} from './ArticleToolsFactory.js'


const articleBttn = document.querySelectorAll('.open-article');



const openArticle = () =>
{
    articleBttn.forEach(bttn => bttn.addEventListener('click', ev =>
    {
        const state = ev.target.getAttribute('data-state');
        alert(state);
    }))
}
 
