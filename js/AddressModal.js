export class AddressModal 
{
    constructor()
    {
       this.closeAddressModal();
    }




 
     
    closeAddressModal()
    {

        const closeBttn = document.getElementById("close-address-modal");
        closeBttn.addEventListener("click", this.hideAddressModal);
    }
    hideAddressModal()
    {   const modal = document.querySelector('.address-modal');
        modal.style.display = "none";
    }
}

const addressModal = new AddressModal();