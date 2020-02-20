const server = require('../');
const got = require('got');
const { expect } = require('chai');
const defaultValues = require('../defaultValues.js');


describe('return type check', () => {
    const newInstance = new server.MyServer();

    before(async () => {
        await newInstance.startServer();
    });

    after(async () => {
        await newInstance.stopServer();
    });

    it('Check 200 http and Name', async () => {
        const answer = await got(`http://${defaultValues.address}:${defaultValues.port}`);

        expect(answer.statusCode).to.equal(200);
        expect(answer.body).include('Hello Node.js');

    });

});

