export class ShopCart 
{
    constructor(product)
    {
        this.addToCart(product);

    }
    addToCart(product)
    {
        if(sessionStorage.cart.length==0)
        {
            
            sessionStorage.cart = "["+ product+ "]";
        }else
        {
            let cart = JSON.parse(sessionStorage.cart);
            cart.push(JSON.parse(product));
            sessionStorage.cart = JSON.stringify(cart);
        }
        
    }
    updateCart()
    {
        
    }
}
   

