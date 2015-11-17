import BaseObject from './base-object';
import Waypoint from './waypoint';

class Path extends BaseObject {
  constructor() {
    super();
    this.color = 'rgba(255,255,128,0.5)';
    this.waypoints = [];
  }
  update(viewport) {
    this.draw(viewport.ctx);
  }
  draw(ctx) {
    this.waypoints.forEach(function(wp, i, all) {
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
        fill: this.color,
        lineWidth: 2
      });
    }.bind(this));
  }
  add(x, y) {
    this.waypoints.push(new Waypoint(x, y));
  }
}

export default Path;
