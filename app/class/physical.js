import Projectiles from './projectiles';

class PhysicalBullet extends Projectiles{
  constructor() {
    super();
    this.dmg = 15;
    this.velocity = 30;
    this.radius = 1;
  }
}

export default PhysicalBullet;
