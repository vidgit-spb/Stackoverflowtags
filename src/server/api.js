import got from 'got';
import qs from 'qs';
import defaultValues from './defaultValues';
import debug from './debug';


const objectParams = {
    pagesize: 100,
    order:    'desc',
    sort:     'activity',
    tagged:   'testcafe',
    site:     'stackoverflow',
    key:      defaultValues.key
};

objectParams['access_token'] = defaultValues.token;

const params = qs.stringify(objectParams);
const url = `https://api.stackexchange.com/2.2/questions?${params}`;

export const urlParams = `${params}`;


export default async function getData () {
    try {
        let bigJson = [];
        let hasMore = true;
        let maxItems = defaultValues.maxItems;

        for (let pageId = 1; hasMore && maxItems > 0; pageId++) {
            maxItems -= objectParams.pagesize;
            const currentUrl = url.concat(`&page=${pageId}`);
            const json = await got(currentUrl).json();

            bigJson = bigJson.concat(json.items);
            hasMore = json.has_more;
        }
        return bigJson.slice(0, defaultValues.maxItems);
    }
    catch (error) {
        debug.error(error);
        return error;
    }
}

