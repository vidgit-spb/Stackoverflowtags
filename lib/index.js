"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const debug_1 = __importDefault(require("./debug/debug"));
const url_1 = __importDefault(require("./url"));
const api_js_1 = __importDefault(require("./api.js"));
const defaultValues_1 = __importDefault(require("./defaultValues"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../resources')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../src')));
app.get(url_1.default, async (req, res) => {
    const data = await api_js_1.default();
    res.status(200);
    await res.json(data);
});
app.use(logErrors);
function logErrors(err, req, res, next) {
    debug_1.default.error(err.stack);
    next(err);
}
class MyServer {
    constructor(currentPort = defaultValues_1.default.port) {
        this.server = null;
        this.port = currentPort;
    }
    async startServer() {
        try {
            this.server = app.listen(this.port);
            await events_1.default.once(this.server, 'listening');
            debug_1.default.log('Started successfully');
        }
        catch (err) {
            debug_1.default.log('Started unsuccessfully');
            throw err;
        }
    }
    async stopServer() {
        try {
            this.server.close();
            await events_1.default.once(this.server, 'close');
            debug_1.default.log('Finished succesfully');
        }
        catch (err) {
            debug_1.default.log('Finished unsuccesfully');
            throw err;
        }
    }
}
exports.MyServer = MyServer;
if (require.main === module) {
    const newInstance = new MyServer(defaultValues_1.default.port);
    newInstance.startServer();
}
// export default MyServer = MyServer;
