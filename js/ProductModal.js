
import information from "./ProductsInformation.js";
export class ProdcutModal
{
    constructor(productId)
    {
        
        const product = this.findItem(productId);
        const modal = document.querySelector('.product-modal');
        this.showModal(modal,productId);
        this.addZoomImage(product);
        this.addProductName(product);
        this.addProducerName(product);
        this.addProductPrice(product);
        this.addProductQuantity(product);
        
        
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

    addProductName = (product) =>
    {
        let productName = document.querySelector(".product-name");
        productName.textContent = product.name;
    }
    addProducerName = (product) =>
    {
        let producerName = document.querySelector(".producer-name");
        producerName.textContent = product.producer;
    }
    addProductPrice = (product) =>
    {
        let productPrice = document.querySelector(".price-value")///do refaktoringu
        let productPrice2 = document.querySelector(".price")///do refaktoringu
        productPrice.textContent = product.price + " zł";
        productPrice2.textContent = product.price + " zł";
    }
    addProductQuantity = (product) =>
    {

        let productQuantity = document.querySelector(".quantity-product");
        productQuantity.textContent = "Nowe ("+ product.quantity+ ") od ";
    }
    getProductInformation = (product) =>
    {   let info = sessionStorage.state;
        for (let item in information){
            if(item === info)
            return information[prd];
        }
    }
    addProductInformation = () =>
    {
        let information = this.getProductInformation();
    }
}