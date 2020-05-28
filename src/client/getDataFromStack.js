import { URL }  from '../server/url.js';



function wrapStackObject (json) {
    let tableHtml = '';
    for (const code in json) {           
        let tagsString = '<div class="chips chips-initial input-field">';
        const massTags = json[code].tags;
        let canAdd = '&#10006';

        if (massTags.length === 5)
            canAdd = '&#10004';


        for (const idTag in massTags)
            tagsString += `<div class="chip" tabindex="0"> ${massTags[idTag]} <i class="material-icons close"> X </i> </div>`;

        tagsString += `</div> <div class="chips chips-placeholder input-field" id = ${json[code].question_id} ><input class="input" placeholder="Enter a tag"></div> `;
       
        tableHtml += `
           <tr align ="center">
           <td class = "hoverable" id = ${code}>${code} </td>
           <td class = "hoverable" id  = "idDataTable">${json[code].question_id} </td> 
           <td>
           ${tagsString}
           </td>
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
let elems;
document.addEventListener('DOMContentLoaded', function() {
    elems = document.querySelectorAll('.chips');
    let instances = M.Chips.init(elems, options);
  });
