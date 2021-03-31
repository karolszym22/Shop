export class OrderSummary
{
    constructor()
    {
     this.itemsFromCart();
    }
    itemsFromCart()
    {
        console.l("podsumowanie się wykonuje");
        console.log(JSON.parse(sessionStorage.cart));
    }
}
const test = OrderSummary();