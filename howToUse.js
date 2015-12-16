
var log = require('./loggerlite');
global.loggerlite.corePrefix = '['.cyan + 'populr'.magenta + ']'.cyan;
global.loggerlite.logLevel = 'verbose';

log('Hello');

log.error('This is an error!');

log.info('this is info');

log.verbose('This is pretty verbose');
