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
    this.lineWidth = opt.lineWidth || 1;
    this.stroke();
  }
};

Proto.$line = function(x1, y1, x2, y2) {
  utils.require(arguments, 4);
  this.beginPath();
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.stroke();
};

Proto.$img = function(opt) {
  utils.require(opt, ['x', 'y', 'url']);
  let img = Proto.$img.cache[opt.url];
  if (!img) {
    img = new Image();
    img.loaded = false;
    img.onload = () => img.loaded = true;
    img.src = opt.url;
    Proto.$img.cache[opt.url] = img;
  }
  if (img.loaded && opt.width && opt.height) {
    this.drawImage(img, opt.x, opt.y, opt.width, opt.height);
  } else if (img.loaded) {
    this.drawImage(img, opt.x, opt.y);
  }
};
Proto.$img.cache = {};

Proto.$cls = function() {
  this.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
