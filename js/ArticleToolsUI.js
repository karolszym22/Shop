




export class ArticleToolsUI
{
    constructor(article)
    {
    
     this.productList = ["clothes","devices", "vehicles","decors", "promotionProducts"]
      const root = this.createSectionContainer();
      const productContainer = this.createProductsContainer(root);
      this.showProducts(productContainer, article);
      document.querySelector(".articles-products").appendChild(root)
    }
  
    createSectionContainer = () =>
    {
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
     let discountState = 'style="display:none;"' 
     let category = this.getProductType(article)
     let items = JSON.parse(eval("sessionStorage."+category))
     let products = eval("items."+article); //możliwy refactoring w niedalekiej przyszłosci
     sessionStorage.setItem("products", JSON.stringify(products));
     products.forEach(productInformation =>
        {
            if(productInformation.discount)
            {
              discountState = 'style="display:flex;"' 
            }

            const product = document.createElement("article");
            product.classList.add("product");
            product.innerHTML = ` <div  class ="product-image">
            <div ${discountState} class="discount-container"></div><img id="${productInformation.productId}" class="look-image" src=${productInformation.productImage}></div>
            <p class ="product-description">${productInformation.description}</p>
            <a class ="product-producer">${productInformation.producer}</a>
            <a class ="product-price">${productInformation.price+" zł"}</a>
            `
            productsContainer.appendChild(product);
            
        })
    
    }
    getProductType(article)
    {
      for (var i = 0; i < sessionStorage.length; i++){
        let value = sessionStorage.key(i);
            if(this.productList.includes(value))
             { 
               let score = JSON.parse(eval("sessionStorage."+ value));
               if(article in score)
               {
                 return value
                
               }
             }
            
     
        }
        
    }
    

}