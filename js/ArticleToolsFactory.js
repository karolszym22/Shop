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
                  console.log("teraz wyswietlam: "+ toString(article))
                  break;
             case 'shavers':
                  const shavers = new ArticleToolsUI(article);
                  console.log("teraz wyswietlam: "+ toString(article))
                  break;
            
                  
         }
     }
    
 }

const tools = new ArticleToolsFactory(sessionStorage["state"]); 


