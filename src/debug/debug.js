const debug = require('debug');

module.exports = {
    log:   debug('mylib:log'),
    warn:  debug('mylib:warn'),
    error: debug('mylib:error')
};
