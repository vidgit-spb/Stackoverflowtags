const assert = require('assert');
const got = require('got');
const server = require('../src/index.js');

describe('return type check', () => {
    const newInstance = new server.MyServer(8000);

    before(async () => {
        await newInstance.startServer();
    });

    after(async () => {
        await newInstance.stopServer();
    });

    it('Check 200 http and Name', async () => {
        const answer = await got('http://localhost:8000/');

        assert.equal(answer.statusCode, 200);
        assert.equal(answer.body.includes('Hello Node.js'), true);

    });

});
