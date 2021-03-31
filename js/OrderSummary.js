export class OrderSummary
{
    constructor()
    {
     this.generalPrice = 0; 
     this.cartPruducts = JSON.parse(sessionStorage.cart);
     this.setGeneralPrice();
     
    }
    setGeneralPrice() //Możliwy refactoring
    {
      let sum = 0;
      for(let i=0; i<this.cartPruducts.length; i++)
      {
          sum+=this.cartPruducts[i].price;
      }
      this.generalPrice = sum.toFixed(2);
    }
    update
}  
const test = new OrderSummary();