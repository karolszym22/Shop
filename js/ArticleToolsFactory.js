import devices from "./ElectronicProducts.js";
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
                  const laptops = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
             case 'shavers':
                  const shavers = new ArticleToolsUI(article);
                  sessionStorage.setItem("lastState", article);
                  break;
            
                  
         }
     }
    
 }

 if(window.location.href=='http://127.0.0.1:5500/category.html')
 {
    const tools = new ArticleToolsFactory(sessionStorage["state"]); 
 }



