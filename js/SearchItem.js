export class SearchItem
{
    constructor()
    {
       this.enterWord();
    }
    enterWord()
    {

      search.addEventListener("keypress", this.getDevices.bind(this),false)
    }
    getDevices()
        {document.querySelector(".search-value").innerHTML = "";
        const search = document.getElementById("search");
        const devices = JSON.parse(sessionStorage.devices);
        for(let i in devices)
        {
            let device = devices[i];
            this.compareLetters(search,device);
        }
    }
    compareLetters(search,device)
    { 
      device.forEach(element => {
       
          if(element.name.substr(0, search.value.length) == search.value && search.value.length > 0)
          {
              let product = document.createElement("a");
              product.classList.add("found-product");
              let container = document.querySelector(".search-value");
              product.textContent = element.name;
              container.appendChild(product);
          }
      });
    }
}