import nock from 'nock';
import defaultValues from './defaultValues';


export default function MyFirstNock(address){
    nock(address)
    .persist()
    .get('/')
    .reply(200, `
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
            `)
    .get('/')
    .reply(200,`
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

}

