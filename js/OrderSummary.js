import {AddressModal} from "./AddressModal.js"
export class OrderSummary extends AddressModal
{
    constructor()
    {
    super();   
     this.generalPrice = 0; 
     this.shippingCost = 0;
     this.cartPruducts = JSON.parse(sessionStorage.cart); //dodać "jeśli taki się znajduje"
     this.orderMonitoring();
     this.setGeneralPrice();
     this.paymentMethod(this.generalPrice,this.shippingCost);
     this.deliveryOption();
     this.setProductToOrder();
     
     
     
    }
    orderMonitoring()
    {
     if(sessionStorage.getItem("address"))   
        this.updateDeliveryAddress();
    }
    setProductToOrder()
    {
        const orderContainer = document.querySelector(".order-product-container");
        this.createProductContainer(orderContainer);
     
    }
    createProductContainer(orderContainer)
    {
        let cartProducts = JSON.parse(sessionStorage.cart);
        for(let i=0; i<cartProducts.length; i++)
        {
         const productOrder = document.createElement("div");
         productOrder.classList.add("product-order");
          productOrder.innerHTML = `
          <div class="product-order-image">
              <img src=${cartProducts[i].productImage}> 
          </div>
          <div class="product-order-description">
            <p>${cartProducts[i].description}</p>
            <div class="product-order-number"><a>Ilość:</a><a>${cartProducts[i].quantity}</a></div>
           </div>`
         orderContainer.appendChild(productOrder);
        }
    }

    setGeneralPrice() //Możliwy refactoring
    {
      let sum = 0;
      for(let i=0; i<this.cartPruducts.length; i++)
      {
          sum+=this.cartPruducts[i].price;
      }
      this.generalPrice = parseFloat(sum.toFixed(2));
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
         shippingCost = 0;
         let price = document.querySelectorAll(".general-price");
         for(let i=0; i<price.length; i++)
         price[i].textContent = (generalPrice + shippingCost);
         sessionStorage.setItem("paymentMethod", "credit-card");
        })

        cash.addEventListener("click", function()
        {
            shippingCost = 15;
            let price = document.querySelectorAll(".general-price");
            for(let i=0; i<price.length; i++)
            price[i].textContent =(generalPrice + shippingCost);
            sessionStorage.setItem("paymentMethod", "cash");
        })
    }
    deliveryOption()
    { 
        const deliveryBttn = document.querySelectorAll(".delivery-method");
        deliveryBttn.forEach(bttn => bttn.addEventListener("click", function()
        {
            if(bttn.id == "express")
            {
                sessionStorage.setItem("delivery", 1);

            }else if(bttn.id == "slow")
            {
                sessionStorage.setItem("delivery", 5);
            }else if(bttn.id == "standard")
            {
               let minutes = Math.floor(Math.random() * 3 )+ 1;
               sessionStorage.setItem("delivery", minutes); 
            }
        }))
    }
   
}    

    
if(window.location.href=='http://127.0.0.1:5500/order-fulfillment.html')
 {
    const test = new OrderSummary();
 }
