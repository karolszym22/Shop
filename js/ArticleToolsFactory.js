import devices from "./ElectronicProducts.js";
import {ArticleToolsUI} from "./ArticleToolsUI.js";

 export class ArticleToolsFactory
 {
     constructor(state)
     {
         console.log(state);
         this.showArticle(state);
     }

     showArticle(article)
     {    
       
         switch(article)
         {
             case 'laptops':
                  const laptops = new ArticleToolsUI(article);
                  break;
             case 'shavers':
                  const shavers = new ArticleToolsUI(article);
                  break;
            
                  
         }
     }
    
 }

const tools = new ArticleToolsFactory(sessionStorage["state"]); 


