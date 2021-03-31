export class OrderSummary
{
    constructor()
    {
     this.generalPrice = 0; 
     this.shippingCost = 0;
     this.cartPruducts = JSON.parse(sessionStorage.cart); //dodać "jeśli taki się znajduje"
     this.setGeneralPrice();
     this.paymentMethod(this.generalPrice,this.shippingCost);
     
    }
    setGeneralPrice() //Możliwy refactoring
    {
      let sum = 0;
      for(let i=0; i<this.cartPruducts.length; i++)
      {
          sum+=this.cartPruducts[i].price;
          console.log("sum to jest: "+typeof sum);
      }
      console.log("generalPrice przed"+ typeof this.generalPrice)
      this.generalPrice = toInt(sum.toFixed(2));
      console.log("generalPrice po"+ typeof this.generalPrice)
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
         console.log(typeof generalPrice, typeof shippingCost)
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
if(window.location.href=='http://127.0.0.1:5500/order-fulfillment.html')
 {
    const test = new OrderSummary();
 }
