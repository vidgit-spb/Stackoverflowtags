const nock = require('nock');
const originalAnswer = require('./testData/answer.js').originalAnswer;

async function nockServer () {
    const scope = nock('https://api.stackexchange.com')
        .persist()
        .get('/2.2/questions')
        .query(true);

    scope.reply(200, originalAnswer);
    return scope;
}

module.exports.nockServer = nockServer;
