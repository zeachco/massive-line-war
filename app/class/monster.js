import BaseObject from './base-object';
import HealthBar from './health-bar';

class Monster extends BaseObject {
  constructor() {
    super();
    this.removeLives = 1;
  }
  spawn(x, y) {
    this.x = x;
    this.y = y;
    this.nextWaypoint = 0;
    this._hp = this._hp || this.hp;
    this.healthBar = new HealthBar(this);
  }
  get hpRatio() {
    return this._hp / this.hp;
  }
  set hpRatio(val) {
    this._hp = val * this.hp;
  }
  update(viewport) {
    if (this._hp > 0) {
      if (Math.random() > 0.97) {
        this._hp -= Math.random();
      }
    } else if (this.size > 1) {
      this.size -= 1;
    } else {
      app.localPlayer.addMoney(this.bounty);
      this._dirty = false;
    }
    this.hpPercent = this._hp / this.hp;
    this.move();
    this.checkCollisions();
    this.draw(viewport.ctx);
  }
  checkCollisions(){
    let collisions = app.collisionControler.creepToBullets(this);
    collisions.forEach(function(o){
      this.hp -= o.dmg;
    });
  }
  draw(ctx) {
    ctx.$img({
      url: this.imageUrl,
      x: this.x - this.size / 2,
      y: this.y - this.size / 2,
      width: this.size,
      height: this.size
    });
    this.healthBar.draw(ctx);
  }
  move() {
    let targetWaypoint = app.path.waypoints[this.nextWaypoint];
    if (!targetWaypoint) {
      app.localPlayer.lives -= this.removeLives;
      this.remove();
      return;
    }
    let distX = targetWaypoint.x - this.x;
    let distY = targetWaypoint.y - this.y;
    let distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    if (distance < targetWaypoint.radius) {
      this.nextWaypoint++;
    }
    this.x += (distX > 0 ? this.speed : this.speed * -1) * this._time.delta;
    this.y += (distY > 0 ? this.speed : this.speed * -1) * this._time.delta;
  }
}

export default Monster;
