import { Selector } from 'testcafe';
import MyFirstNock from '../lib/server/nockAdress.js';
const { default: defaultValues } = require('../lib/server/defaultValues');


const address = `http://${defaultValues.address}:${defaultValues.port}`;

MyFirstNock(address);

const TableIdSelector = Selector('#idDataTable');

fixture`Getting Started`
.page(address);


test('shoud change data', async t => {

    await t.wait(2000)
        .expect(TableIdSelector.innerText).eql('59791234');
    await t.eval(() => location.reload(true));
    await t.wait(2000)
        .expect(TableIdSelector.innerText).eql('59744176');

});
