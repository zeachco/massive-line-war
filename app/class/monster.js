import BaseObject from './base-object';

class Monster extends BaseObject {
  constructor() {
    super();
  }
  spawn(x, y) {
    this.x = x;
    this.y = y;
    this.nextWaypoint = 0;
    this._hp = this._hp || this.hp;
  }
  update(viewport) {
    if (this._hp > 1) {
      this._hp += -0.003;
    } else if (this.size > 0) {
      this.size -= 1;
    } else {
      console.log(this.constructor.name + ' died');
      this._dirty = false;
    }
    this.hpPercent = this._hp / this.hp;
    this.pulse = Math.sin(utils.getTime() / 100 * (this.speed)) * this.size / 10;
    this.move();
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
  move() {
    var deltaX = this.x - app.path.waypoints[this.nextWaypoint].x;
    var deltaY = this.y - app.path.waypoints[this.nextWaypoint].y;
    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    deltaX /= distance;
    deltaY /= distance;
    this.x += this.speed * deltaX * this._time.delta/10;
    this.y += this.speed * deltaY * this._time.delta/10;
  }
}

export default Monster;
