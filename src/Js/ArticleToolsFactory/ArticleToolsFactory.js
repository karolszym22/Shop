import { ArticleToolsUI } from "../ArticleToolsUi/ArticleToolsUI.js";

export class ArticleToolsFactory {
  constructor(state) {
    this.showArticle(state);
  }

  showArticle = (article) => {
    switch (article) {
      case "laptops":
        document.querySelector(".category-name").innerHTML =
          "Elektronika i komputery";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "shavers":
        document.querySelector(".category-name").innerHTML =
          "Elektronika i komputery";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "tShirts":
        document.querySelector(".category-name").innerHTML =
          "Zwykłe ubrania oraz garnitury";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "suits":
        document.querySelector(".category-name").innerHTML =
          "Zwykłe ubrania oraz garnitury";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "motors":
        document.querySelector(".category-name").innerHTML =
          "Coś dla fanów dwóch kółek";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "cars":
        document.querySelector(".category-name").innerHTML =
          "Coś dla fanów motoryzacji";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "pot":
        document.querySelector(".category-name").innerHTML =
          "O rośliny trzeba dbać!";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "chairs":
        document.querySelector(".category-name").innerHTML =
          "Przydałoby się tu umeblować coś";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "promotions":
        document.querySelector(".category-name").innerHTML =
          "Bierz póki tanio!";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
      case "foundItem":
        document.querySelector(".category-name").innerHTML = "Znalezione";
        new ArticleToolsUI(article);
        sessionStorage.setItem("lastState", article);
        break;
    }
  };
}

if (window.location.href == "http://127.0.0.1:5500/category.html") {
  new ArticleToolsFactory(sessionStorage["state"]);
}
