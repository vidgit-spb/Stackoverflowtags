const fetch = require('node-fetch');
const defaultValues = require('../defaultValues.js');
const debug = require('./debug/debug');


const URL = ({ pageId = 1 } ={}) => `https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&tagged=testcafe&site=stackoverflow&page=${pageId}&access_token=${defaultValues.token}&key=${defaultValues.key}`;

module.exports = async function getData () {
    try {
        let bigJson = [];
        let hasMore = true;    
        max_items  = defaultValues.max_items;

        for (let pageId = 1; hasMore && max_items>0; pageId++) {

            max_items  -= 100;
            const response = await fetch(URL({ pageId }));
            const json = await response.json();
            bigJson = bigJson.concat(json.items);
            hasMore = json.has_more;

        }
         
        return bigJson.slice(0,defaultValues.max_items);
    }
    catch (error) {
        debug.error(error);
    }
};