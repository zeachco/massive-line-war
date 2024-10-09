import { Monster } from "./monster";

export class Sheep extends Monster {
  imageUrl = "/images/creeps/sheep.png";
  hp = 5;
  speed = 0.03;
  speedVariation = 0.03;
  color = "rgba(200, 200, 200, 0.8)";
  size = 30;
  cost = 10;
  bounty = 1;
  income = 1;
}
