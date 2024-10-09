import { state } from "../state";
import { Updatable } from "./updatable";
import { Waypoint } from "./waypoint";

export class Path extends Updatable {
  waypoints: Waypoint[] = [];
  color = "rgba(255,255,128,0.5)";
  update() {
    const { ctx } = state.viewport;
    this.waypoints.forEach((wp: Waypoint, i: number, all: Waypoint[]) => {
      if (i > 0) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        let previous = all[i - 1];
        ctx.$line(previous.x, previous.y, wp.x, wp.y);
      }
      ctx.$circle({
        x: wp.x,
        y: wp.y,
        radius: wp.radius,
        fill: "rgba(200,200,200,0.2)",
        stroke: this.color,
        lineWidth: 2,
      });
    });
  }
  add(x: number, y: number) {
    this.waypoints.push(new Waypoint(x, y));
  }
}
