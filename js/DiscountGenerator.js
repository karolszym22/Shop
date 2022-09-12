export class Discount {
  constructor(products) {
    sessionStorage.setItem("isDiscount", true);
    this.products = products;
    this.promotionProducts = [];
    this.updatedProducts = this.getDiscount(this.products);
    this.setPromotionProducts(this.promotionProducts);
  }
  getDiscount = (products) => {
    products.forEach((element) => {
      for (const [key, value] of Object.entries(element)) {
        value.forEach((e) => {
          e.discount = this.generateRandomBoolean();
          if (e.discount === true) {
            this.promotionProducts.push(e);
          }
        });
      }
    });
    return products;
  };
  generateRandomBoolean = () => {
    let isDiscount = Math.random() < 0.1;
    return isDiscount;
  };
  getPromotionProducts = (value) => {
    value.forEach((e) => {
      this.promotionProducts.push(e);
    });
  };
  setPromotionProducts = (value) => {
    sessionStorage.setItem(
      "promotionProducts",
      JSON.stringify({ promotions: value })
    );
  };
  promotionProductsFilter = (value) => {};
}
