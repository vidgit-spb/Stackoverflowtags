import URL from '../server/url.js';


function wrapStackObject (json) {
    let tableHtml = '';
    let tagsString = ``;

    for (const code in json) {
        const massTags = json[code].tags;
        let canAdd = '&#10006';

        if (massTags.length === 5)
            canAdd = '&#10004';


        for (const idTag in massTags)
            tagsString += `<td class = "chip" style ="text-allign:center">${massTags[idTag]} </td>\n`;


        tableHtml += `
           <tr align ="center">
           <td class = "hoverable" id = ${code}>${code} </td>
           <td class = "hoverable" id  = "idDataTable">${json[code].question_id} </td>
           ${tagsString}
           <td class = "hoverable">${json[code].title} </td>
           <td class = "hoverable">${canAdd}</td>
           <tr>
           `;
    }
    return tableHtml;
}

export async function getData () {
    try {
        const response = await fetch(URL);
        const json = await response.json();
        const table = document.querySelector('#dataTable');

        if (!table)
            throw new Error('Cannot find the root table');
        table.innerHTML = wrapStackObject(json);
    }
    catch (error) {
        console.log(error);
    }
}
