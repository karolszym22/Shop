export class OrderTools {
  constructor() {
    this.products = JSON.parse(sessionStorage.products);
    this.orderNumber = JSON.parse(sessionStorage.lastDelivery);
    this.orderDate = JSON.parse(sessionStorage.orderDates);
    this.addNewOrder(++this.orderNumber, this.products);
    this.orderReset();
  }
  addProductsList = (productArray) => {
    const realisationProduct = document.createElement("ul");
    productArray.forEach((element) => {
      let productsList = document.createElement("li");
      let product = document.createElement("a");
      product.innerHTML = element.description;
      productsList.appendChild(product);
      realisationProduct.appendChild(productsList);
    });
    return realisationProduct;
  };
  addNewOrder = (...args) => {
    const orders = JSON.parse(sessionStorage.historyOrders);
    //const [orderNumber, products] = args;
    let productList;
    const main = document.querySelector(".history-product-container");
    orders.forEach((e, index) => {
      const realisationProductsList = document.createElement("div");
      realisationProductsList.classList.add("realization-products-list");
      const informations = document.createElement("h3");
      informations.innerHTML = "Produkty";
      productList = this.addProductsList(e);
      const realizationProduct = document.createElement("div");
      realizationProduct.className = "realization-product-container";
      realizationProduct.innerHTML = `
          <div class="realization-product-informations">
               <p>nr zamówienia</p>
               <p>data złożenia</p>
               <p>status</p>
          </div>
          <div class="realization-orders-list">
            <div class="realization-product-value">
              <p>${++this.orderNumber}</p>
              <p>${this.orderDate[index]}</p>
              <p id="productTimeStatus">Zrealizowano</p>
            </div>  
          </div>
             
          </div>`;

      realisationProductsList.appendChild(informations);
      realisationProductsList.appendChild(productList);
      realizationProduct.appendChild(realisationProductsList);
      main.appendChild(realizationProduct);
    });
  };

  updateLastDelivery = () => {
    sessionStorage.setItem("lastDelivery", ++sessionStorage.lastDelivery);
  };
  orderReset = () => {
    sessionStorage.removeItem("cart");
  };
}

const path = location.pathname;
if (path === "/history-orders.html" && sessionStorage.orderDates) {
  new OrderTools();
}
