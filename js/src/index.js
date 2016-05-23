module.exports = function(message, options) {
  var error, self, skip;
  if (arguments.length > 0) {
    message = ">>> " + message + " <<<";
  }
  if (arguments.length > 1) {
    skip = (options.skip || 0) + 2;
  } else {
    skip = 2;
  }
  error = null;
  self = function() {
    return [message, error];
  };
  self.trace = function() {
    error = Error();
    error.skip = skip;
  };
  self.trace();
  return self;
};

//# sourceMappingURL=../../map/src/index.map
