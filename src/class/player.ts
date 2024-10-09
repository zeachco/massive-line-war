export class Player {
  name = "Bob";
  score = 0;
  _lives = 30;
  money = 100;

  addMoney(bounty: number) {
    if (this.lives > 0) {
      this.score += bounty;
      this.money += bounty;
    }
  }

  get lives() {
    return this._lives;
  }

  set lives(nb) {
    if (this._lives < 1 && nb < 1) {
      return; // no update for dead peoples, they don't deserve it
    }
    this._lives = +nb;
  }
}
