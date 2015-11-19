utils.undefinedFn = function() {};

utils.require = function(obj, reqs, all = true) {
  if (typeof reqs === 'number') {
    if (obj.length < reqs) {
      throw `require at least ${reqs} argument(s)`;
    } else {
      return;
    }
  }
  var some = 0;
  reqs.forEach(function(arg) {
    if (arg.indexOf('||') > -1) {
      utils.require(obj, arg.split(/ ?\|\| ?/g), false);
    } else {
      if (all) {
        if (obj[arg] === undefined) {
          throw `${arg} is required`;
        }
      } else {
        some += obj[arg] === undefined ? 0 : 1;
      }
    }
  });
  if (!all && some === 0) {
    throw `at least one of the following keys must exit:\n${reqs.join(', ')}`;
  }
};
