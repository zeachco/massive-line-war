import { state } from "../state";
import { BaseObject } from "../types/base";
import { distance } from "../utils/math";
import { Projectile } from "./projectile";

export class CollisionController {
  creepToBullets(creep: BaseObject) {
    const projectiles = state.objects.filter(
      (o) => o.constructor.name === "Projectiles"
    );
    const collisions: Projectile[] = [];
    projectiles.forEach((projectile) => {
      if (
        distance(projectile.x, projectile.y, creep.x, creep.y) <
        creep.size / 2
      ) {
        collisions.push(projectiles);
      }
    });
    return collisions;
  }
}
