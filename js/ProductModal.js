export class ProdcutModal
{
    constructor(productId)
    {
        const product = this.findItem(productId);
        const modal = document.querySelector('.product-modal');
        this.showModal(modal,productId);
        this.addZoomImage(product);
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

    addProducer = () =>
    {

    }

}