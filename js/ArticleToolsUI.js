import devices from "./ElectronicProducts.js";



export class ArticleToolsUI
{
    constructor(article)
    {
      const root = this.createSectionContainer();
      const productContainer = this.createProductsContainer(root);
      this.showProducts(productContainer);
      document.querySelector(".articles-products").appendChild(root)
    }
  
    createSectionContainer = () =>
    {
      console.log("funkcja wykonałą sie");
      const root = document.createElement("section");
      root.classList.add("products-list");
      root.innerHTML = `<h1 class="product-category">${"Laptopy"}</h1><h3 class="chosen-by-us">Wyróżnione przez nas</h3>`
      return root;
    }



    createProductsContainer = (root) =>
    {
        const productsContainer = document.createElement("div"); 
        productsContainer.classList.add("products-list-container");
        root.appendChild(productsContainer);
        return productsContainer;
    }


    showProducts(productsContainer)
    {
  
     const {laptops} = devices;
     laptops.forEach(laptop =>
        {
            const product = document.createElement("article");
            product.classList.add("product");
            product.innerHTML = ` <div class ="product-image"><div class="shadow-box"><p class="see-more">
            Zobacz więcej</p> </div></div>
            <p class ="product-description">${laptop.description}</p>
            <a class ="product-producer">${laptop.producer}</a>
            <a class ="product-price">${laptop.price+" zł"}</a>`
            productsContainer.appendChild(product);
            
        })
    
    }

}