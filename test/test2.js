import { Selector } from 'testcafe';
import MyFirstNock from '../lib/server/nockAdress.js';
const { default: defaultValues } = require('../lib/server/defaultValues');


const address = `http://${defaultValues.address}:${defaultValues.port}`;

MyFirstNock(address);

const TableIdSelector = Selector('#idDataTable');

fixture`Getting Started`
.page(address);


test('shoud change data', async t => {

    await t
        // .expect(TableIdSelector.innerText).eql('59791234');

    let fistIdValue = TableIdSelector.innerText;
        // await t.eval(() => location.reload(true));
    await t
        .expect(TableIdSelector.innerText).notEql(fistIdValue);

});
