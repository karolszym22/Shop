import {ProdcutModal} from './ProductModal.js';
import {ArticleToolsFactory} from "./ArticleToolsFactory.js";
import {AddressModal} from "./AddressModal.js";

let modal = new ProdcutModal();
export class Redirection
{
      constructor()
      {
       this.modalBttn = document.querySelectorAll(".look-image");
       this.openArticle();
       this.openProductModal(this.modalBttn);
       this.changeAddress();
      }

      openProductModal(modalBttn)
      {
         
          modalBttn.forEach(bttn => bttn.addEventListener('click', e => this.createProductModal(e), false));
      }
      createProductModal(e)
      {
        let productId = e.target.id;
        modal.createModal(productId );
      }
      openArticle = () =>
      {
        const articleBttn = document.querySelectorAll('.open-article');
        articleBttn.forEach(bttn => bttn.addEventListener('click', ev =>
        {
            const state = ev.target.getAttribute('data-state');
            sessionStorage.setItem("state",state);
        
        }))
      }

      changeAddress()
      {
          const address = new AddressModal();
          const changeAddressBttn = document.querySelector(".change-address");
          changeAddressBttn.addEventListener("click", address.openAddressModal);
      }


}