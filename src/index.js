const express = require('express');
const app = express();
const path = require('path');
const events = require('events');


app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'index.html');

    res.sendFile(htmlPath);
});

class MyServer {
    constructor (currentPort) {
        this.server = null;
        this.port = currentPort;
    }

    async startServer () {
        try {
            this.server = app.listen(this.port);
            await events.once(this.server, 'listening');
            console.log('Succes start');
        }
        catch (err) {
            console.log('cant start');
            throw err;
        }
    }

    async stopServer () {
        try {
            this.server.close();
            await events.once(this.server, 'close');
            console.log('Succes finish');
        }
        catch (err) {
            console.log('Cant stop server');
            throw err;
        }
    }
}

if (require.main === module) {
    const newInstance = new MyServer(8000);

    newInstance.startServer();
}

module.exports.MyServer = MyServer;

