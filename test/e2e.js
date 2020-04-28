import { Selector } from 'testcafe';
const server = require('../lib/server/index.js');

import { updatedAnswer, originalAnswer } from './testData/answer.js';
const { default: defaultValues } = require('../lib/server/defaultValues');

import nockServer from './mockTest.js';


let scope;

fixture `test`
    .page `http://${defaultValues.address}:${defaultValues.port}`
    .before(async () => {
        const newInstance = new server.MyServer();

        scope  = await nockServer(newInstance);
    });

const TableIdSelector = Selector('#idDataTable');

test('testing first data', async t => {

    const originalExpectedId = '60981232';

    scope.reply(200, originalAnswer);
    await t
        .expect(TableIdSelector.innerText).eql(originalExpectedId);
    scope.reply(200, updatedAnswer);
    await t.
        wait(5000)
        .expect(TableIdSelector.innerText).notEql(originalExpectedId);

});
