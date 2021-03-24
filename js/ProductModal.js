export class ProdcutModal
{
    constructor()
    {
        const modal = document.querySelector('product-modal');
        this.showModal(modal);
    }


    showModal = (modal) =>
    {
       
        modal.style.display = "block";
    }
    closeModal = () =>
    {
        const modal = document.querySelector('product-modal');
        modal.style.display = "none";
    }


}