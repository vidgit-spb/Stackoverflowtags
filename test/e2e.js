import { Selector } from 'testcafe';
const server = require('../lib/server/index.js');

import { updatedAnswer } from './testData/answer.js';
const { default: defaultValues } = require('../lib/server/defaultValues');
const nockServer = require('./mockTest.js').nockServer;

let scope;

fixture `test`
    .page `http://${defaultValues.address}:${defaultValues.port}`
    .before(async () => {
        const newInstance = new server.MyServer();

        scope  = await nockServer();

        await newInstance.startServer();

    });
const TableIdSelector = Selector('#idDataTable');

test('testing first data', async t => {

    const originalExpectedId = '60981232';


    await t
        .expect(TableIdSelector.innerText).eql(originalExpectedId);
    scope.reply(200, updatedAnswer);
    await t.
        wait(5000)
        .expect(TableIdSelector.innerText).notEql(originalExpectedId);

});
