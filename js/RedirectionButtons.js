import {ProdcutModal} from './ProductModal.js';

export class Redirection
{
      constructor()
      {
       
       this.openArticle();
       this.openProductModal();
      }

      openProductModal = () =>
      {
         

        const modalBttn = document.querySelectorAll('.look-image');
        modalBttn.forEach(bttn => bttn.addEventListener('click', function () 
        {
          let productId = bttn.id;
          let modal = new ProdcutModal(productId);
          
        }))
      }
     

      openArticle = () =>
      {
        const articleBttn = document.querySelectorAll('.open-article');
        articleBttn.forEach(bttn => bttn.addEventListener('click', ev =>
        {
            const state = ev.target.getAttribute('data-state');
            sessionStorage.setItem("state",state);
            console.log("artykuł")
            
        }))
      }


}