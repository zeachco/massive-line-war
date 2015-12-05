import BaseObject from './base-object';

class CollisionController {
  creepToBullets(creep) {
    var projectiles = BaseObject.all.filter(o => o.constructor.name === 'Projectiles');
    var collisions = [];
    projectiles.forEach(function(o){
      if (utils.distance(o.position.x, o.position.y, creep.x, creep.y) < creep.size/2) {
        collisions.push(projectiles);
      }
    });
    return collisions;
  }
}

export default CollisionController;
