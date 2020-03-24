import URL from '../server/url.js';


export async function getData () {
    try {
        
        const response = await fetch(URL);
        const json = await response.json();
        let canadd = {
            value: false,
            image(){
                if (this.value){
                    return '&#10006'
                } else {
                    return '&#10004'
                }
            }
        }

        let tableHtml = '';

        for (const code in json) {
            
            let canAdd = '&#10006';
            if(json[code].tags.length == 5){
                canAdd = '&#10004';
            }
            tableHtml += `
               <tr>
               <td>${code} </td>
               <td>${json[code].question_id} </td>
               <td>${json[code].tags} </td>
               <td>${json[code].title} </td>
               <td>${canAdd}</td>
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