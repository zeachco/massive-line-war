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
      window.console.log(this.constructor.name + ' died');
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
    let targetWaypoint = app.path.waypoints[this.nextWaypoint];
    let distX = targetWaypoint.x - this.x;
    let distY = targetWaypoint.y - this.y;
    let distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    if (distance < targetWaypoint.radius && app.path.waypoints[this.nextWaypoint + 1]) {
      this.nextWaypoint++;
    }
    this.x += (distX > 0 ? this.speed : this.speed * -1) * this._time.delta;
    this.y += (distY > 0 ? this.speed : this.speed * -1) * this._time.delta;
  }
}

export default Monster;
