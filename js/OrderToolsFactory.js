export class OrderTools
{

    constructor()
    {
       
        this.products = JSON.parse(sessionStorage.products)
        this.orderNumber = JSON.parse(sessionStorage.lastDelivery)
        this.addNewOrder(++this.orderNumber, this.products);
        this.updateLastDelivery()
    }
    addProductsList = (productArray) =>
    {  
      const realisationProduct = document.createElement('ul');
      productArray.forEach(element => {
        let productsList = document.createElement('li');
        let product = document.createElement('a');
        product.innerHTML = element.description;
        console.log(product)
        productsList.appendChild(product);
        realisationProduct.appendChild(productsList)
         
      })
      console.log(realisationProduct)
     return realisationProduct;
      

    }
    addNewOrder = (...args) =>
    {
       const orders = JSON.parse(sessionStorage.historyOrders);
        const [orderNumber, products] = args;
        let productList;
        const main = document.querySelector(".history-product-container");
        orders.forEach(e => {
          const realisationProductsList = document.createElement('div');
          realisationProductsList.classList.add('realization-products-list');
          const informations = document.createElement('h3');
          informations.innerHTML = "Produkty";
          productList = this.addProductsList(e);
          const realizationProduct = document.createElement('div');
          realizationProduct.className = "realization-product-container";
          realizationProduct.innerHTML = `
          <div class="realization-product-informations">
               <p>nr zamówienia</p>
               <p>data złożenia/potwierdzenia</p>
               <p>status</p>
               <p>wartośc zamówienia</p>
               <p>wartośc zamówienia</p>
          </div>
          <div class="realization-orders-list">
            <div class="realization-product-value">
              <p>asdas</p>
              <p>asdsadas</p>
              <p id="productTimeStatus">5:25</p>
              <p>hahahaha</p>
              <button class="delete-product">Usuń z historii</button>
            </div>  
          </div>
             
          </div>`
      
      realisationProductsList.appendChild(informations);
      realisationProductsList.appendChild(productList)
      realizationProduct.appendChild(realisationProductsList)  
      main.appendChild(realizationProduct);
        });
       
    }

    updateLastDelivery()
    {
      sessionStorage.setItem('lastDelivery', "blablabla")
    
    }
}
