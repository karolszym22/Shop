export class AddressModal 
{
    constructor()
    {
       this.saveMailChanges();
       this.closeAddressModal();
       
    }




 
    checkEmail()
    {
        var email = document.getElementById("email").value;
        console.log(email);
        var re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;
        if(email.match(re) == null)
            alert('Ten adres jest nieprawidłowy');
        else
            alert('Ten adres jest prawidłowy');
    }

    closeAddressModal()
    {
        const closeBttn = document.getElementById("close-address-modal");
        closeBttn.addEventListener("click", this.hideAddressModal);
    }
    hideAddressModal()
    {   
        document.querySelector('.address-modal').style.display = "none";
        document.querySelector('.dark-body').style.display = "none";
    }
    saveMailChanges()
    {
       const saveBttn = document.querySelector(".save-information");
       saveBttn.addEventListener("click", this.checkEmail);
    }
}

const addressModal = new AddressModal();