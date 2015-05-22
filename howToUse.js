
var log = require('./loggerlite');

var person = 'Garrett Cox';
var color = 'Orange';
var age = 19;
var friend = 'Blake Mckinley';
var weather = 'Sunny';

log('Hello %s, today\'s forcast is %s.', person, weather);

log.err('There is a problem, %s should\'nt be %s already!', person, age);

log.ok('%s\'s favorite color is %s.', friend, color);
