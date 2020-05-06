const nock = require('nock');

async function nockServer (server) {
    const scope = nock('https://api.stackexchange.com')
        .persist()
        .get('/2.2/questions')
        .query(true);

    await server.startServer();
    return scope;
}

module.exports.nockServer = nockServer;
