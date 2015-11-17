import BaseObject from './base-object';

class Monster extends BaseObject {
  constructor() {
    super();
  }
  spawn(x, y) {
    this.x = x;
    this.y = y;
    this.currentWaypoint = -1;
    this._hp = this._hp || this.hp;
  }
  update(viewport) {
    if (this._hp > 0) {
      this._hp += -0.01;
    } else if (this.size > 0) {
      this.size -= 1;
    } else {
      console.log(this.constructor.name + ' died');
      this._dirty = false;
    }
    this.hpPercent = this._hp / this.hp;
    this.pulse = Math.sin(utils.getTime() / 100 * (this.speed)) * this.size / 10;
    this.draw(viewport.ctx);
  }
  draw(ctx) {
    ctx.$circle({
      x: this.x,
      y: this.y,
      radius: this.size + this.pulse,
      fill: this.color,
      stroke: 'green',
      lineWidth: 5
    });
    this.drawHpBar(ctx);
  }
  drawHpBar(ctx) {
    if (this._hp > 0) {
      ctx.$circle({
        x: this.x,
        y: this.y,
        percent: this.hpPercent,
        radius: this.size + this.pulse,
        stroke: 'red',
        lineWidth: 5
      });
    } else {
      ctx.$circle({
        x: this.x,
        y: this.y,
        radius: this.size + this.pulse,
        stroke: 'black',
        lineWidth: 5
      });
    }
  }
}

export default Monster;
