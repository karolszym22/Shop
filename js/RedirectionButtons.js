import {ProdcutModal} from './ProductModal.js';
let modal = new ProdcutModal();
export class Redirection
{
      constructor()
      {
       
       this.openArticle();
       this.openProductModal();
      }

      openProductModal = () =>
      {
          let modalBttn = document.querySelectorAll(".look-image");
          modalBttn.forEach(bttn => bttn.addEventListener('click', function () {
            let productId = bttn.id;
            modal.createModal(productId );
          }, false));
      }
      
      openArticle = () =>
      {
        const articleBttn = document.querySelectorAll('.open-article');
        articleBttn.forEach(bttn => bttn.addEventListener('click', ev =>
        {
            const state = ev.target.getAttribute('data-state');
            sessionStorage.setItem("state",state);
            console.log("artykuł")
            bttn.removeChild('click');
            
        }))
      }


}