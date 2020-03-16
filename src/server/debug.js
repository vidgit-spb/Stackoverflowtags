import debug from  'debug';

module.exports = {
    log:   debug('stackoverflowtags:log'),
    warn:  debug('stackoverflowtags:warn'),
    error: debug('stackoverflowtags:error')
};
