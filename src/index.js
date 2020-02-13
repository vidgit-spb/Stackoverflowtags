const express = require('express');
const app = express();
const events = require('events');
const debug = require('debug');
const path  = require('path');
const defaultValues = require('../defaultValues.js');


const log = debug('mylib:messages');


app.use(express.static(path.join(path.parse(__dirname).dir, 'resources')));

class MyServer {
    constructor (currentPort = defaultValues.port) {
        this.server = null;
        this.port = currentPort;
    }

    async startServer () {
        try {
            this.server = app.listen(this.port);
            await events.once(this.server, 'listening');
            log('Succes start');
        }
        catch (err) {
            log('cant start');
            throw err;
        }
    }

    async stopServer () {
        try {
            this.server.close();
            await events.once(this.server, 'close');
            log('Succes finish');
        }
        catch (err) {
            log('Cant stop server');
            throw err;
        }
    }
}

if (require.main === module) {
    const newInstance = new MyServer(8000);

    newInstance.startServer();
}

module.exports.MyServer = MyServer;

