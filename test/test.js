
const got = require('got');
const server = require('../src');
const defaultValues = require('../defaultValues.js');
const chai  = require('chai');

const expect = chai.expect;

describe('return type check', () => {
    const newInstance = new server.MyServer(defaultValues.port);

    before(async () => {
        await newInstance.startServer();
    });

    after(async () => {
        await newInstance.stopServer();
    });

    it('Check 200 http and Name', async () => {
        const answer = await got(`http://${defaultValues.adress}:${defaultValues.port}`);

        expect(answer.statusCode).to.equal(200);
        expect(answer.body).include('Hello Node.js');

    });

});
