
export class LotteryMachine
{
    constructor()
    {
     console.log("ZACZYNAMYyyyyy!");              
     this.scoreCard1 = "?";
     this.scoreCard2 = "?";
     this.scoreCard3 = "?";
     this.coupons = ["10%", "5%", "2%"];
     this.couponDraw();
    }

    couponDraw = () =>
    {
        
     for(let i=0; i<5; i++)
     {
       window.setInterval(this.scoreDraw, 300);
     }

    }
    scoreDraw = () =>
    {
       this.scoreCard1 =  this.coupons[Math.floor(Math.random()*this.coupons.length)];
       this.scoreCard2 =  this.coupons[Math.floor(Math.random()*this.coupons.length)];
       this.scoreCard3 =  this.coupons[Math.floor(Math.random()*this.coupons.length)];

       this.drawResult(this.scoreCard1,this.scoreCard2,this.scoreCard3);
    }
    drawResult = (draws) =>
    {
       let [score1,score2,score3] = draws;
       console.log(score1)
       console.log(score2)
       console.log(score3)
    }
    
    

}