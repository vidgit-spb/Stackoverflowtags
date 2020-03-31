
import nock from 'nock';
const params = require('../lib/server/api.js');
const server = require('../lib/server/index.js');
import { Selector,t } from 'testcafe';

const newInstance = new server.MyServer();
    async () => {
    await newInstance.startServer();
}

fixture `test`
    .page `https://api.stackexchange.com/2.2/question?param=${params.urlParams}}`;

const scope = nock('https://api.stackexchange.com')
.get('/2.2/question')
.query(true);

    
scope.reply(200, `
<!DOCTYPE html>
<html>
<body>
<table id="dataTable" border="1" width="100%" cellpadding="5">
<tbody>
<tr>
<td id = "idDataTable"> 59791234 </td>
<td> node.js,testing,intellij-idea,jestjs,testcafe </td>
<td>'	testcafe execution via intelliJ run action' </td>
<tr>
 </tbody>
 </table>

</body>
</html>
`);

const TableIdSelector = Selector('#idDataTable');


test('testing first data', async t => {
    
    await t;
    const fistId = TableIdSelector.innerText;
    scope.reply(200,`
    <!DOCTYPE html>
    <html>
    <body>
    <table id="dataTable" border="1" width="100%" cellpadding="5">
    <tbody>
    <tr>
    <td id = "idDataTable"> 59744176 </td>
    <td> node.js,testing,intellij-idea,jestjs,testcafe </td>
    <td>'	testcafe execution via intelliJ run action' </td>
    <tr>
    </tbody>
    </table>  
    </body>
    </html>
    `);
    await t
    .expect(TableIdSelector.innerText).notEql(fistId);

})