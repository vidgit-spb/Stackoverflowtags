import got  from'got';
import qs from'qs';
import defaultValues from './defaultValues';
import debug from './debug';

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

export default  async function getData () {
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

