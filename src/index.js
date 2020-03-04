import events from 'events';
import path from 'path';
import express  from 'express';
import debug  from './debug/debug';
import URL from './url';
import getAPIData from './api.js';
import defaultValues from './defaultValues';

const app = express();

app.use(express.static(path.join(__dirname, '../resources')));
app.use(express.static(path.join(__dirname, '../src')));

app.get(URL, async (req, res) => {

    const data = await getAPIData();

    res.status(200);
    await res.json(data);

});

app.use(logErrors);

function logErrors (err, req, res, next) {
    debug.error(err.stack);
    next(err);
}


class MyServer {
    constructor (currentPort = defaultValues.port) {
        this.server = null;
        this.port = currentPort;
    }

    async startServer () {
        try {
            this.server = app.listen(this.port);
            await events.once(this.server, 'listening');
            debug.log('Started successfully');
        }
        catch (err) {
            debug.log('Started unsuccessfully');
            throw err;
        }
    }

    async stopServer () {
        try {
            this.server.close();
            await events.once(this.server, 'close');
            debug.log('Finished succesfully');
        }
        catch (err) {
            debug.log('Finished unsuccesfully');
            throw err;
        }
    }
}

if (require.main === module) {
    const newInstance = new MyServer(defaultValues.port);

    newInstance.startServer();
}

export default MyServer = MyServer;

