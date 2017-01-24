
var log = require('./loggerlite');
global.loggerlite.corePrefix = '['.cyan + 'populr'.magenta + ']'.cyan;
global.loggerlite.logLevel = 'verbose';

log.time('myTimer');

log('Hello');

log.error('This is an error!');

log.info('this is info');

log.verbose('This is pretty verbose');

setTimeout(function() {
  log.info(`myTimer took ${log.time('myTimer')} seconds`);
}, 2900);
