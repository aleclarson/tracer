module.exports = function(message, options) {
  var error, self, skip;
  if (typeof message === "string") {
    message = ">>> " + message + " <<<";
  } else {
    message = "- - - - - - - -";
  }
  if (arguments.length > 1) {
    skip = (options.skip || 0) + 1;
  } else {
    skip = 1;
  }
  error = Error();
  error.skip = skip;
  self = function() {
    return [message, error];
  };
  self.trace = function() {
    error = Error();
    error.skip = skip;
  };
  return self;
};

//# sourceMappingURL=../../map/src/index.map
