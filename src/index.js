const express = require('express');
const app = express();
const events = require('events');
const debug = require('debug');
const path = require('path');
const defaultValues = require('../defaultValues.js');
const log = debug('mylib:messages');

app.use(express.static(path.join(__dirname, '../resources')));
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

