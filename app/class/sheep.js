import Monster from './monster';

class Sheep extends Monster {
  constructor() {
    super();
    this.hp = 5;
    this.speed = 0.03;
    this.color = 'rgba(200, 200, 200, 0.8)';
    this.size = 30;
    this.cost = 10;
    this.bounty = 1;
    this.income = 1;
  }
}

export default Sheep;
