export class SearchItem {
  constructor(products) {
    this.products = products;
    this.enterWord();
    this.hideSearchedData();
  }
  enterWord() {
    const search = document.getElementById("search");
    search.addEventListener("keypress", this.getDevices.bind(this), false);
  }
  getDevices() {
    setTimeout(() => {
      document.querySelector(".search-value").innerHTML = "";
      const searchValue = document.getElementById("search");

      this.products.forEach((allProducts) => {
        for (let i in allProducts) {
          let product = allProducts[i];
          this.compareLetters(searchValue, product);
        }
      });
    }, 700);
  }

  hideSearchedData() {
    document.onclick = (e) => {
      const myNode = document.querySelector(".search-value");
      if (e.target.className !== "found-product") {
        myNode.innerHTML = "";
      } else {
        alert("udało sie!");
      }
    };
  }

  compareLetters(search, product) {
    console.log(product, search.value);
    product.forEach((element) => {
      if (element.name.substr(0, search.value.length) == search.value) {
        let product = document.createElement("a");
        product.href = "/category.html";
        product.dataset.state = "foundItem";
        product.dataset.id = element.productId;
        product.classList.add("found-product");
        product.classList.add("open-article");
        let container = document.querySelector(".search-value");
        product.textContent = element.name;
        container.appendChild(product);
        product.addEventListener("click", () => {
          const state = product.getAttribute("data-state");
          sessionStorage.setItem("lastFoundProduct", JSON.stringify(element));
          sessionStorage.setItem("state", state);
        });
      }
    });
  }
}
