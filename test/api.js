const got = require('got');
const { expect } = require('chai');
const { URL } = require('../lib/server/url');
const server = require('../lib/server/index.js');
const testData = require('./testData/answer.js');
const { default: defaultValues } = require('../lib/server/defaultValues');
const nockServer = require('./mockTest.js').nockServer;

describe('check api return correct data', () => {
    const newInstance = new server.MyServer();
    let scope;

    before(async () => {
        scope = await nockServer();
        newInstance.startServer();

    });
    after(() => {
        newInstance.stopServer();
    });


    it('Check api', async () => {

        const realAnswerBeforeUpdate = await got(`http://${defaultValues.address}:${defaultValues.port}${URL}`);

        expect(JSON.parse(realAnswerBeforeUpdate.body)[0].question_id).to.equal(JSON.parse(testData.originalAnswer).items[0].question_id);

        scope.reply(200, testData.updatedAnswer);

        const realAnswerAfterUpdate = await got(`http://${defaultValues.address}:${defaultValues.port}${URL}`);

        expect(JSON.parse(realAnswerAfterUpdate.body)[0].question_id).to.equal(JSON.parse(testData.updatedAnswer).items[0].question_id);

    });

});


