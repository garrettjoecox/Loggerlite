
// To declare a logger
var log = require('./loggerlite');

// Simply use it where you would normally console.log
log('Hello World!'); // [Logger]: Hello World!

// I've also made integrated lodash's templating, which looks
// a lot cleaner than doing a bunch of +'s! Use ${a} through ${d}
var greeting = 'Hello';
var name = 'Garrett Cox';
log('${a}, ${b}', greeting, name); // [Logger]: Hello, Garrett Cox

// What if you hate blue and magenta? Lucky for you loggerlite is
// fully customizable, you can make themes and use them accordingly.
// You simply invoke the require statement passing in an options Object

var options = {
  bracketType: '{}',
  bracketColor: 'grey',
  prefix: ' Error ',
  prefixColor: 'red',
  seperator: '->',
  seperatorColor: 'white',
  textColor: 'red'
};

var errlog = require('./loggerlite')(options);

var error = 'This thing broke here!';
errlog('Something went wrong: ${a}', error);

log('sup');