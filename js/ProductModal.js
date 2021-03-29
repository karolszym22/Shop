import {ShopCart} from './ShopCart.js'
import information from "./ProductsInformation.js";
export class ProdcutModal
{
   
    createModal(productId)
    {
        this.product = this.findItem(productId);
        console.log("w konstruktorze"+this.product);
        this.modal = document.querySelector('.product-modal');
        this.showModal(this.modal,productId);
        this.addZoomImage(this.product);
        this.addProductName(this.product);
        this.addProducerName(this.product);
        this.addProductPrice(this.product);
        this.addProductQuantity(this.product);
        this.addProductInformation(this.product);
        this.dropToCart();
        this.closeModal();
        console.log("asdsadasdasdasdasdasdas");
    }
    showModal = (modal) =>
    {
         document.querySelector('.dark-body').style.display = "flex";;
         modal.style.display = "block";
           
    }
    addZoomImage = (product) =>
    {
        console.log(product.productImageZoom);
      const image = document.getElementById("magnifying_img");
      image.src = product.productImageZoom;
      
    }
    closeModal = () =>
    {
        const modal = document.querySelector('product-modal');
        modal.style.display = "none";
    }
    findItem = (productId) =>
    {
        const products = JSON.parse(sessionStorage.products);
        var item = products.find(product => product.productId === productId);
        console.log(item);
        return item;
        
    }

    addProductName(product)
    {
        let productName = document.querySelector(".product-name");
        productName.textContent = product.name;
    }
    addProducerName(product)
    {
        let producerName = document.querySelector(".producer-name");
        producerName.textContent = product.producer;
    }
    addProductPrice(product) 
    {
        let productPrice = document.querySelector(".price-value")///do refaktoringu
        let productPrice2 = document.querySelector(".price")///do refaktoringu
        productPrice.textContent = product.price + " zł";
        productPrice2.textContent = product.price + " zł";
    }
    addProductQuantity(product)
    {

        let productQuantity = document.querySelector(".quantity-product");
        productQuantity.textContent = "Nowe ("+ product.quantity+ ") od ";
    }
    getProductInformation = () =>
    {   let info = sessionStorage.state;
        for (let item in information){
            if(item === info)
            return information[info];
        }
    }
    addProductInformation(product)
    {
      
        const container = document.createElement("div");
        container.classList.add("product-information");
        container.id = "productInformation";
        let information = this.getProductInformation();
        information.forEach((info, index) =>
            {
             let infoName = document.createElement('div');
             console.log(infoName);
             infoName.classList.add("information");
              let item = product[Object.keys(product)[index]]
              infoName.innerHTML = this.addProductValue(info,item);
              container.appendChild(infoName);
              
            })
            console.log(container);
            document.querySelector(".main-product-information").appendChild(container);
    }
    addProductValue = (info,item) =>
    {
      const productValue = `<a class ="feature"> ${info}</a><a class ="feature-value"> ${item}</a>`;
      return productValue;
    }
    closeModal = () =>
    {
        const closeBttn = document.querySelector(".close-modal");
        closeBttn.addEventListener("click", this.deleteModalInformation);
      
    }
    deleteModalInformation()
    {
   
        document.getElementById("productInformation").remove();
        document.querySelector('.dark-body').style.display = "none";
        document.querySelector('.product-modal').style.display = "none";
        console.log("asdsadas");
        
    }

    dropToCart = () =>
    {
      let addToCartBttn = document.querySelector(".add-to-cart");
      addToCartBttn.addEventListener('click',this.createShopCart, false)
      console.log("w metodzie"+this.product);
    }
    createShopCart = () =>
    {
        console.log("w funkcji strzałkowej"+ this.product)
        console.log("w JSON.stringify"+ JSON.stringify(this.product))
        let test = JSON.stringify(this.product);
        console.log("w JSON.parse"+ JSON.parse(test))
        let test2 = JSON.parse(test);
        console.log(test2.name);
        let cart = new ShopCart();
        console.log(cart);
    
    }
  
}