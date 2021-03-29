export class ShopCart 
{
    constructor(product)
    {
        this.cart = new Array();
        this.addToCart(product);

    }
    addToCart(product)
    {
        if(sessionStorage.cart.length==0)
        {
            this.cart.push(product);
            console.log(product);
            sessionStorage.setItem("cart", JSON.stringify(this.cart));
        }else
        {
            this.cart = new Array();
            this.cart.push(product);
            console.log(JSON.parse(sessionStorage.cart));
        }
        
    }
}
   

