export class purchaseStates{

    checkOrder()
    {
      if(sessionStorage.cart)
      {
        const orderTime = new OrderTime;
      }
    }

    getAllProducts() ///refaktoring wskazany
    { 
      if(sessionStorage.getItem("devices"))
      {
        
      }else 
      {
        sessionStorage.setItem("devices", JSON.stringify(devices));
        sessionStorage.setItem("clothes", JSON.stringify(clothes));
      }
    }
    setCart()///refaktoring wskazany
    {
      let cart = new Array();

      if(sessionStorage.getItem("cart"))
      {
         
      }else 
      {
        sessionStorage.setItem("cart", cart );

      }
    }
    orderHistoryContent()
    {
      const path = location.pathname;
      if(path === "/history-orders.html")
      {
       const orderTools = new OrderTools();
      }
    }
    lastState()
    {
     
      sessionStorage.state = sessionStorage.lastState;
    }

    lastDelivery()
    {
      sessionStorage.setItem("lastDelivery", 45643398);
    }
}
