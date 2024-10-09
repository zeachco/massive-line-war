import { state } from "../state";
import { HealthBar } from "./health-bar";
import { Updatable } from "./updatable";

export abstract class Monster extends Updatable {
  removeLives = 1;
  index = "creeps";
  x = 0;
  y = 0;
  nextWaypoint = 0;
  _hp = 0;
  hp = 0;
  healthBar?: HealthBar;
  hpPercent = 1;
  bounty = 1;
  size = 30;
  speed = 0;
  _time = 0;
  abstract imageUrl: string;

  spawn(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.nextWaypoint = 0;
    this._hp = this._hp || this.hp;
    this.healthBar = new HealthBar();
  }

  get hpRatio() {
    return this._hp / this.hp;
  }

  set hpRatio(val) {
    this._hp = val * this.hp;
  }

  update() {
    if (this._hp > 0) {
      if (Math.random() > 0.97) {
        this._hp -= Math.random();
      }
    } else if (this.size > 1) {
      this.size -= 1;
    } else {
      state.localPlayer.addMoney(this.bounty);
    }
    this.hpPercent = this._hp / this.hp;
    this.move();
    this.checkCollisions();
    this.draw();
  }
  checkCollisions() {
    let collisions = state.collisionController?.creepToBullets(this);
    if (!collisions) {
      return;
    }
    collisions.forEach((o) => {
      this.hp -= o.dmg;
    });
  }
  draw() {
    const { ctx } = state.viewport;
    ctx.$img({
      url: this.imageUrl,
      x: this.x - this.size / 2,
      y: this.y - this.size / 2,
      width: this.size,
      height: this.size,
    });
    this.healthBar?.draw(ctx);
  }
  move() {
    let targetWaypoint = state.path?.waypoints[this.nextWaypoint];
    if (!targetWaypoint) {
      state.localPlayer.lives -= this.removeLives;
      this.remove();
      return;
    }
    let distX = targetWaypoint.x - this.x;
    let distY = targetWaypoint.y - this.y;
    let distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    if (distance < targetWaypoint.radius) {
      this.nextWaypoint++;
    }
    this.x += distX > 0 ? this.speed : this.speed * -1;
    this.y += distY > 0 ? this.speed : this.speed * -1;
  }
}
