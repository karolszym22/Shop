export class OrderSummary
{
    constructor()
    {
     this.generalPrice = 0; 
     this.shippingCost = 0;
     this.cartPruducts = JSON.parse(sessionStorage.cart);
     this.setGeneralPrice();
     this.paymentMethod(this.generalPrice,this.shippingCost);
     
    }
    setGeneralPrice() //Możliwy refactoring
    {
      let sum = 0;
      for(let i=0; i<this.cartPruducts.length; i++)
      {
          sum+=this.cartPruducts[i].price;
      }
      this.generalPrice = sum.toFixed(2);
      this.updateGeneralPrice(this.generalPrice);
    }
    updateGeneralPrice = (generalPrice) =>
    {
       let price = document.querySelectorAll(".general-price");
       for(let i=0; i<price.length; i++)
         price[i].textContent = generalPrice
      
    }
    paymentMethod(generalPrice,shippingCost)
    {
        const creditCard = document.getElementById("credit-card");
        const cash = document.getElementById("cash");

        creditCard.addEventListener("click", function()
        {
         shippingCost = 15;
         let price = document.querySelectorAll(".general-price");
         for(let i=0; i<price.length; i++)
         price[i].textContent = (generalPrice + shippingCost);
         console.log(generalPrice + shippingCost)
        })

        cash.addEventListener("click", function()
        {
            shippingCost = 0;
            let price = document.querySelectorAll(".general-price");
            for(let i=0; i<price.length; i++)
            price[i].textContent =(generalPrice + shippingCost);
        })
    }
    
}  
const test = new OrderSummary();