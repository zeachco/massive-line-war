import BaseObject from './base-object';

class Tower extends BaseObject{
  constructor() {
    super();
    this.position.x;
    this.position.y;
    this.hp = 100;
    this.groundAtk = true;
    this.airAtk = false;
    this.range = 500;
    this.atkSpeed = 30;
  }
}

export default Tower;
