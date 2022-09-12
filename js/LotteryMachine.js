export class LotteryMachine {
  constructor() {
    this.scoreCards = ["?", "?", "?"];
    this.coupons = ["10%", "5%", "2%"];
    this.numberIntervals = 0;
    this.interval = setInterval(this.couponDraw, 60);
  }

  couponDraw = () => {
    this.interval = true;
    for (const i in this.scoreCards) {
      this.scoreCards[i] = this.coupons[
        Math.floor(Math.random() * this.coupons.length)
      ];
      this.showOnMachine(this.scoreCards[i], i);
    }
    this.numberIntervals++;
    if (this.numberIntervals === 30) {
      clearInterval(this.interval);
    }
  };

  showOnMachine = (score, id) => {
    document.getElementById(
      `machine-card-${parseInt(id) + 1}`
    ).innerHTML = score;
  };
}
