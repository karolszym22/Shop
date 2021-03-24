export class ProdcutModal
{
    constructor(productId)
    {

        const modal = document.querySelector('.product-modal');
        this.showModal(modal);
    }


    showModal = (modal) =>
    {
         document.querySelector('.dark-body').style.display = "flex";;
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
    findItem(productId)
    {
        
        var item = products.filter(product =>
            {
                product.id 
            })
        {
          
        };
    }

}