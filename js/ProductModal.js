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
        productPrice.textContent = product.price;
        productPrice2.textContent = product.price;
    }
}