import devices from "./ElectronicProducts.js";
import ArticleToolsUI from "./ArticleToolsUI.js";

 export class ArticleToolsFactory
 {
     constructor()
     {
         
     }

     showArticle(article)
     {
         switch(article)
         {
             case 'laptops':
                  const laptops = new ArticleToolsUI(article);
             case 'shavers':
                  const shavers = new ArticleToolsUI(article);
             case 'eletronicks':
                  const laptops = new ArticleToolsUI(article);
                  const shavers = new ArticleToolsUI(article);
         }
     }
    
 }


