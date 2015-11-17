import Monster from './monster';

class Wolf extends Monster {
  constructor() {
    super();
    this.hp = 10;
    this.speed = 0.06;
    this.color = 'rgba(20, 20, 20, 0.8)';
    this.size = 20;
    this.cost = 25;
    this.bounty = 5;
    this.income = 2;
  }
}

export default Wolf;
