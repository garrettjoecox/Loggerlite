
var template = require('lodash/string/template');
require('colorslite');

var defaults = {
  bracketType: '[]',
  bracketColor: 'blue',
  prefix: 'Logger',
  prefixColor: 'magenta',
  seperator: ':',
  seperatorColor: 'white',
  textColor: 'grey',
};

module.exports = function(arg1, a1, b1, c1, d1){
  if (typeof arg1 !== 'object'){
    var prefix = defaults.bracketType[0][defaults.bracketColor] + defaults.prefix[defaults.prefixColor] + defaults.bracketType[1][defaults.bracketColor] + defaults.seperator[defaults.seperatorColor] + ' ';
    var log = template(arg1)({ a:a1, b:b1, c:c1, d:d1 })[defaults.textColor];
    console.log(prefix + log);
  } else {
    var newOptions = Object.create(defaults);
    for (var key in arg1){
      newOptions[key] = arg1[key];
    }
    return function(arg2, a2, b2, c2, d2){
      var prefix = newOptions.bracketType[0][newOptions.bracketColor] + newOptions.prefix[newOptions.prefixColor] + newOptions.bracketType[1][newOptions.bracketColor] + newOptions.seperator[newOptions.seperatorColor] + ' ';
      var log = template(arg2)({ a:a2, b:b2, c:c2, d:d2 })[newOptions.textColor];
      console.log(prefix + log);
    };
  }
};
