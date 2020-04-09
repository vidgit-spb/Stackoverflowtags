
import nock from 'nock';
const params = require('../lib/server/api.js');
const server = require('../lib/server/index.js');
import { Selector,t } from 'testcafe';
import { answer2,answer }   from '../lib/server/answer.js';
const { default: defaultValues } = require('../lib/server/defaultValues');


let scope;

fixture `test`
    .page `http://${defaultValues.address}:${defaultValues.port}`
    .before(async () => {
        const newInstance = new server.MyServer();
        scope = newInstance.startServerWithMock();       
             
    });
const TableIdSelector = Selector('#idDataTable');
test('testing first data', async t => {
    const firstEcpectedId = '60981232';
    scope.reply(200,answer);
    await t
    .expect(TableIdSelector.innerText).eql(firstEcpectedId);
    scope.reply(200,answer2);
    await t.
    wait(5000).
    expect(TableIdSelector.innerText).notEql(firstEcpectedId);
})