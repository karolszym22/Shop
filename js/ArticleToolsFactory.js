import devices from "./ElectronicProducts.js";

 function showProducts(params) 
    
{

    const  {laptops, shavers} = devices;
    console.log("Laptopy"+laptops[2].name);
    console.log("Laptopy"+shavers[1].name);
    console.log("moje obiekty u góry");
}
export default showProducts;