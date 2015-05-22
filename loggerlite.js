
require('colorslite');

var options = {
  brackets: '()',
  seperator: ': ',
  main: 'logger'.blue,
  ok: 'ok'.green,
  err: 'err'.red
};

var main = options.brackets[0] + options.main + options.brackets[1];
var err = options.brackets[0] + options.err + options.brackets[1];
var ok = options.brackets[0] + options.ok + options.brackets[1];

module.exports = function() {
  arguments[0] = main + options.seperator + arguments[0];
  console.log.apply(this, arguments);
};

module.exports.ok = function() {
  arguments[0] = main + ok + options.seperator + arguments[0].green;
  console.log.apply(this, arguments);
};

module.exports.err = function() {
  arguments[0] = main + err + options.seperator + arguments[0].red;
  console.log.apply(this, arguments);
};
