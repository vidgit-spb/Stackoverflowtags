import nock from 'nock';
export default async function nockServer (server) {
    const scope = nock('https://api.stackexchange.com')
        .persist()
        .get('/2.2/questions')
        .query(true);

    await server.startServer();
    return scope;
}

