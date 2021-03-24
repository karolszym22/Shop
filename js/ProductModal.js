export class ProdcutModal
{
    constructor(productId)
    {

        const modal = document.querySelector('product-modal');
        this.showModal(modal);
    }


    showModal = (modal) =>
    {
       
        modal.style.display = "block";
    }
    addZoomImage = (productId) =>
    {
      const image = document.getElementById("magnifying_img")
    }
    closeModal = () =>
    {
        const modal = document.querySelector('product-modal');
        modal.style.display = "none";
    }


}