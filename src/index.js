const express = require('express');
const app = express();
const path = require('path');
const port = 8000;


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
        const promise = new Promise(resolve => {
            this.server = app.listen(port, resolve);
        });

        await promise
            .then(() => console.log('Server started succesfully'))
            .catch(() => console.log('Server cant start for some reason'));

    }

    async stopServer () {
        const promise = new Promise(resolve => {
            this.server.close(resolve);
        });

        await promise
            .then(() => console.log('Server stopped'))
            .catch(() => console.log('Server cant stop for some reasons'));
    }
}

if (require.main === module) {
    const newInstance = new MyServer(8000);

    newInstance.startServer();
}

module.exports.MyServer = MyServer;

