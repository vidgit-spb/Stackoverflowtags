const fetch = require('node-fetch');
const defaultValues = require('./defaultValues');
const debug = require('./debug/debug');


const URL = ({ pageId = 1 } ={}) => `https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&tagged=testcafe&site=stackoverflow&page=${pageId}&access_token=${defaultValues.token}&key=${defaultValues.key}`;
;
module.exports = async function getData () {
    try {
        let bigJson = [];
        let hasMore = true;    
        maxItems  = defaultValues.maxItems;
        console.log(maxItems);
        for (let pageId = 1; hasMore && maxItems>0; pageId++) {
            console.log(URL({ pageId }))
            maxItems  -= 100;
            const response = await fetch(URL({ pageId }));
            const json = await response.json();
            bigJson = bigJson.concat(json.items);
            hasMore = json.has_more;

        }
        console.log(bigJson);
        return bigJson.slice(0,defaultValues.maxItems);
    }
    catch (error) {
        debug.error(error);
    }
};

