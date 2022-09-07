export class SearchItem
{
    constructor(products)
    {
       this.products = products
       this.enterWord();
       this.hideSearchedData();
    }
    enterWord()
    {

      search.addEventListener("keypress", this.getDevices.bind(this),false)
    }
    getDevices()
    {document.querySelector(".search-value").innerHTML = "";
        const search = document.getElementById("search");
        const devices = JSON.parse(sessionStorage.devices);
        
    this.products.forEach((allProducts) => {
        for(let i in allProducts)
        {

            let product = allProducts[i];
            this.compareLetters(search, product);
        }
    })     
    }

    hideSearchedData()
    {
        document.onclick = ((e) =>{
            const myNode = document.querySelector(".search-value")
            if(e.target.className!== 'found-product') 
            {
                myNode.innerHTML = ''
                
            }else 
            {
                alert("udało sie!")
            }
         });
        
            
    }

    compareLetters(search, product)
    { 
        product.forEach(element => {
          if(element.name.substr(0, search.value.length) == search.value && search.value.length > 0)
          {
              let product = document.createElement("a");
                product.href = '/category.html'
                product.dataset.state = 'foundItem'
                product.dataset.id = element.productId;
                product.classList.add("found-product");
                product.classList.add("open-article");
              let container = document.querySelector(".search-value");
                product.textContent = element.name;
                container.appendChild(product);
                    product.addEventListener('click', ()=>{
                        const state = product .getAttribute('data-state');
                        sessionStorage.setItem('lastFoundProduct', JSON.stringify(element));
                        sessionStorage.setItem("state", state);
                 } )
          }
      });
    }

}