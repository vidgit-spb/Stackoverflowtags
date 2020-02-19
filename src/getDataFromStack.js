
let bigJson = [];
let idOfPage = 1;
const firstDataUrl = `https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&tagged=testcafe&site=stackoverflow&page=1&access_token=7voa7zvjV1yTY3EeAuYo9w))&key=ItLB9rQgr9apRsaxK57fEg((`;
const getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        let tableHtml = '';

        bigJson = bigJson.concat(json['items']);
        if (json['has_more']) {
            idOfPage++;
            const requestURL = `https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&tagged=testcafe&site=stackoverflow&page=${idOfPage}&access_token=7voa7zvjV1yTY3EeAuYo9w))&key=ItLB9rQgr9apRsaxK57fEg((`;

            getData(requestURL);
        }
        for (const code in bigJson) {
            tableHtml += `
               <tr>
               <td>${code} </td>
               <td>${bigJson[code].question_id} </td>
               <td>${bigJson[code].tags} </td>
               <td>${bigJson[code].title} </td>
               <tr>
               `;
            document.querySelector('#dataTable tbody').innerHTML = tableHtml;
        }

    }
    catch (error) {
        console.log(error);
    }
};

getData(firstDataUrl);
