import { Updatable } from "./updatable";

export abstract class Projectile extends Updatable {
  x = 0;
  y = 0;
  dmg = 0;
  velocity = 0;
  radius = 1;
  effect?: string;
}
