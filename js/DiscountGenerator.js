export class Discount
{
    constructor(products)
    {
      this.products = products
      this.updatedProducts = this.getDiscount(this.products)
    }
    getDiscount = (products) =>
    {
        products.forEach(element => {
            for (const [key, value] of Object.entries(element)) {
                    value.forEach(e =>{
                        e.discount = this.generateRandomBoolean();
                    })
              }
        });
        return products
    }
    generateRandomBoolean = () =>
    {
       let isDiscount = Math.random() < 0.1
       return isDiscount;
    }

}