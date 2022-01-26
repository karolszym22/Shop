export class OrderTime
{
    constructor()
    {
        this.cartPruducts = JSON.parse(sessionStorage.cart);
        this.orderNumber = sessionStorage.lastDelivery;
        
    }
    
}