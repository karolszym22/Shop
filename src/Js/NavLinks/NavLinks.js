export class NavLinks
{
    constructor()
    {
       this.toSiteBttn = document.getElementById('mainSite')
       this.toHistoryOrders = document.getElementById('historyOrders')
       this.toFinishOrder = document.getElementById('finishOrder')
       this.linkToSite();
       this.linkToOrder();
       this.linkToHistory()
    }
    linkToSite()
    {
        this.toSiteBttn.addEventListener('click', ()=>
        {
            window.location.href='http://127.0.0.1:5500/index.html'
        })
    }
    linkToHistory()
    {
        this.toHistoryOrders.addEventListener('click', ()=>
        {
            window.location.href='http://127.0.0.1:5500/history-orders.html'
        })
    }
    linkToOrder()
    {
        this.toFinishOrder.addEventListener('click', ()=>
        {
            console.log("wykonuje sie!!!!!!!!!!!")
            window.location.href='http://127.0.0.1:5500/order-fulfillment.html'
        })
    }
}