
import {ArticleToolsUI} from "./ArticleToolsUI.js";

 export class ArticleToolsFactory
 {
     constructor(state)
     {
      
         this.showArticle(state);
         
     }

     showArticle(article)
     {    
         
         switch(article)
         {
             case 'laptops':
                  document.querySelector(".category-name").innerHTML = "Elektronika i komputery"
                  const laptops = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
             case 'shavers':
                  document.querySelector(".category-name").innerHTML = "Elektronika i komputery"
                  const shavers = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
            case 'tShirts':
                  document.querySelector(".category-name").innerHTML = "Zwykłe ubrania oraz garnitury"
                  const tShirts = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
            case 'suits':
                  document.querySelector(".category-name").innerHTML = "Zwykłe ubrania oraz garnitury"
                  const suits = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
            case 'motors':
                  document.querySelector(".category-name").innerHTML = "Coś dla fanów motoryzacji"
                  const motors = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
            case 'cars':
                  document.querySelector(".category-name").innerHTML = "Coś dla fanów motoryzacji"
                  const cars = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                break;
            case 'pot':
                  document.querySelector(".category-name").innerHTML = "Coś dla fanów motoryzacji"
                  const pot = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;   
            case 'chairs':
                  document.querySelector(".category-name").innerHTML = "Coś dla fanów motoryzacji"
                  const chairs = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break; 
            
                  
         }
     }
    
 }

 if(window.location.href=='http://127.0.0.1:5500/category.html')
 {

    const tools = new ArticleToolsFactory(sessionStorage["state"]); 
 }



