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
