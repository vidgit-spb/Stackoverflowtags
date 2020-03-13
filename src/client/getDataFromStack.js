import URL from '../server/url.js';

export async function getData () {
    try {
        console.log(URL + "GetData");
        const response = await fetch(URL);
        const json = await response.json();

        let tableHtml = '';

        for (const code in json) {
            tableHtml += `
               <tr>
               <td>${code} </td>
               <td>${json[code].question_id} </td>
               <td>${json[code].tags} </td>
               <td>${json[code].title} </td>
               <tr>
               `;
        }

        const table = document.querySelector('#dataTable');

        if (!table)
            throw new Error('Cannot find the root table');
        
        table.innerHTML = tableHtml;
    }
    catch (error) {
        console.log(error);
    }
}