"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultValues_1 = __importDefault(require("./defaultValues"));
const debug_1 = __importDefault(require("./debug/debug"));
const got_1 = __importDefault(require("got"));
const qs_1 = __importDefault(require("qs"));
const params = qs_1.default.stringify({
    pagesize: 100,
    order: 'desc',
    sort: 'activity',
    tagged: 'testcafe',
    site: 'stackoverflow',
    access_token: defaultValues_1.default.token,
    key: defaultValues_1.default.key
});
const url = `https://api.stackexchange.com/2.2/questions?${params}`;
async function getData() {
    try {
        let bigJson = [];
        let hasMore = true;
        let maxItems = defaultValues_1.default.maxItems;
        for (let pageId = 1; hasMore && maxItems > 0; pageId++) {
            maxItems -= params.pagesize;
            const currentUrl = url.concat(`&page=${pageId}`);
            const json = await got_1.default(currentUrl).json();
            bigJson = bigJson.concat(json.items);
            hasMore = json.has_more;
        }
        return bigJson.slice(0, defaultValues_1.default.maxItems);
    }
    catch (error) {
        debug_1.default.error(error);
    }
}
exports.default = getData;
;
