



export class ArticleToolsUI
{
    constructor(article)
    {
    
      
  
     
      const root = this.createSectionContainer();
      const productContainer = this.createProductsContainer(root);
      this.showProducts(productContainer, article);
      document.querySelector(".articles-products").appendChild(root)
    }
  
    createSectionContainer = () =>
    {
      console.log("funkcja wykonałą sie");
      const root = document.createElement("section");
      root.classList.add("products-list");
      root.innerHTML = `<h1 class="product-category">Dla Ciebie</h1><h3 class="chosen-by-us">Wyróżnione przez nas</h3>`
      return root;
    }



    createProductsContainer = (root) =>
    {
        const productsContainer = document.createElement("div"); 
        productsContainer.classList.add("products-list-container");
        root.appendChild(productsContainer);
        return productsContainer;
    }


    showProducts(productsContainer,article)
    {
     let devices = JSON.parse(sessionStorage.devices);
     let products= eval("devices."+article);
     products.forEach(productInformation =>
        {
          
            const product = document.createElement("article");
            product.classList.add("product");
            product.innerHTML = ` <div class ="product-image"><img src=${productInformation.productImage}></div>
            <p class ="product-description">${productInformation.description}</p>
            <a class ="product-producer">${productInformation.producer}</a>
            <a class ="product-price">${productInformation.price+" zł"}</a>`
            productsContainer.appendChild(product);
            
        })
    
    }

}