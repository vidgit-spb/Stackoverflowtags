import URL from '../server/url.js';

export async function getData () {
    try {
        const response = await fetch(URL);
        const json = await response.json();

        let tableHtml = '';
        for (const code in json) {
            tableHtml += `
               <tr>
               <td class = "hoverable">${code} </td>
               <td class = "hoverable">${json[code].question_id} </td>
               <td class = "hoverable">${json[code].tags} </td>
               <td class = "hoverable">${json[code].title} </td>
               <td class = "hoverable">${canAdd}</td>
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
