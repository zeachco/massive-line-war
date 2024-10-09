import { Monster } from "./monster";

export class Wolf extends Monster {
  imageUrl = "/images/creeps/wolf.png";
  hp = 10;
  speed = 0.06;
  color = "rgba(20, 20, 20, 0.8)";
  size = 20;
  cost = 25;
  bounty = 5;
  income = 2;
}
