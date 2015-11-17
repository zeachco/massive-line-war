var Proto = CanvasRenderingContext2D.prototype;

Proto.$circle = function(opt) {
  utils.require(opt, ['x', 'y', 'radius', 'fill || stroke']);
  this.beginPath();
  var percent = opt.percent || 1;
  var start = Math.PI * -0.5;
  this.arc(opt.x, opt.y, opt.radius, start, start + 2 * percent * Math.PI, true);
  if (opt.fill) {
    this.fillStyle = opt.fill;
    this.fill();
  }
  if (opt.stroke) {
    this.strokeStyle = opt.stroke;
    this.stroke();
    this.lineWidth = opt.lineWidth || 1;
  }
};

Proto.$line = function(x1, y1, x2, y2) {
  // utils.require(arguments, ['x1', 'y1', 'x2', 'y2']);
  this.beginPath();
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.stroke();
};

Proto.$cls = function() {
  this.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
