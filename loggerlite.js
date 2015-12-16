
require('colorslite');
global.loggerlite = global.loggerlite || {};

global.loggerlite.logLevel = 'core';
global.loggerlite.corePrefix = global.loggerlite.corePrefix || '['.cyan + 'LL'.magenta + ']'.cyan;
global.loggerlite.infoPrefix = global.loggerlite.infoPrefix || '['.cyan + 'I' + ']'.cyan;
global.loggerlite.errorPrefix = global.loggerlite.errorPrefix || '['.cyan + 'E'.red + ']'.cyan;
global.loggerlite.verbosePrefix = global.loggerlite.verbosePrefix || '['.cyan + 'V'.gray + ']'.cyan;
global.loggerlite.seperator = global.loggerlite.seperator || ': '.gray;

module.exports = function() {
  if (canLog('core')) {
    arguments[0] = global.loggerlite.corePrefix + global.loggerlite.seperator + arguments[0];
    console.log.apply(this, arguments);
  }
}

module.exports.time = function(label) {
  global.loggerlite.timers = global.loggerlite.timers || {};

  if (global.loggerlite.timers[label]) {
    var ms = Date.now() - global.loggerlite.timers[label];
    return ( Math.floor( ms / 100 ) / 10 );
  } else {
    global.loggerlite.timers[label] = Date.now();
  }
}

module.exports.error = function() {
  if (canLog('error')) {
    arguments[0] = global.loggerlite.corePrefix + global.loggerlite.errorPrefix + global.loggerlite.seperator + arguments[0];
    console.log.apply(this, arguments);
  }
}

module.exports.info = function() {
  if (canLog('info')) {
    arguments[0] = global.loggerlite.corePrefix + global.loggerlite.infoPrefix + global.loggerlite.seperator + arguments[0];
    console.log.apply(this, arguments);
  }
}

module.exports.verbose = function() {
  if (canLog('verbose')) {
    arguments[0] = global.loggerlite.corePrefix + global.loggerlite.verbosePrefix + global.loggerlite.seperator + arguments[0];
    console.log.apply(this, arguments);
  }
}

function canLog(level) {
  var hierarchy = {
    silent: 0,
    error: 1,
    core: 2,
    info: 3,
    verbose: 4
  }
  return hierarchy[level] <= hierarchy[global.loggerlite.logLevel];
}
