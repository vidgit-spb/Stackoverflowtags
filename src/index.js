const events = require('events');
const path = require('path');
const express = require('express');
const debug = require('debug');
const URL = require('./url');
const getAPIData = require('./api');
const defaultValues = require('./defaultValues');

const log = debug('mylib:messages');
const app = express();

app.use(express.static(path.join(__dirname, '../resources')));
app.use(express.static(path.join(__dirname, '../src')));

app.get(URL, async (req, res) => {

    const data = await getAPIData();

    res.status(200);
    await res.json(data);

});


class MyServer {
    constructor (currentPort = defaultValues.port) {
        this.server = null;
        this.port = currentPort;
    }

    async startServer () {
        try {
            this.server = app.listen(this.port);
            await events.once(this.server, 'listening');

            log('Started successfully');
        }
        catch (err) {
            log('Started unsuccessfully');
            throw err;
        }
    }

    async stopServer () {
        try {
            this.server.close();
            await events.once(this.server, 'close');
            log('Finished succesfully');
        }
        catch (err) {
            log('Finished unsuccesfully');
            throw err;
        }
    }
}

if (require.main === module) {
    const newInstance = new MyServer(defaultValues.port);

    newInstance.startServer();
}

module.exports.MyServer = MyServer;

