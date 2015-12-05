/**
 * take a number and round it (with the selected method) to the closest base value
 * @param  {Number} value  number to round
 * @param  {Number} base   base value
 * @param  {String} method can be 'floor', 'ceil' or 'round' default is floor
 * @return {Number}        [description]
 */
utils.round = function (value, base, method = 'floor') {
  return Math[method](value / base) * base;
};

utils.money = function (value = 0) {
  return utils.round(value, 0.01) + '&nbsp;$';
};

utils.distance = function(o1x, o1y, o2x, o2y){
  return Math.sqrt(Math.pow(o1x - o2x, 2) + Math.pow((o1y - o2y),2));
};
