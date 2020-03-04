const fetch = require('node-fetch');
const defaultValues = require('./defaultValues');
const debug = require('./debug/debug');
const got  = require('got');
const qs = require('qs');

const params = qs.stringify({
    pagesize: 100,
    order: 'desc',
    sort: 'activity',
    tagged: 'testcafe',
    site: 'stackoverflow',
    access_token: defaultValues.token,
    key: defaultValues.key
});
const url = `https://api.stackexchange.com/2.2/questions?${params}`;

module.exports = async function getData () {
    try {    
        let bigJson = [];
        let hasMore = true;
        let maxItems = defaultValues.maxItems;
        for (let pageId = 1; hasMore && maxItems>0; pageId++) {
            maxItems  -= params.pagesize;

            const currentUrl = url.concat(`&page=${pageId}`);
            const json = await got(currentUrl).json();
            bigJson = bigJson.concat(json.items);
            hasMore = json.has_more;
        }
        
        return bigJson.slice(0,defaultValues.maxItems);
    }
    catch (error) {
        debug.error(error);
    }
};

