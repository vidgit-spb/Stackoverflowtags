import events from 'events';
import path from 'path';
import express from 'express';
import debug from './debug';
import { URL } from './url';
import getAPIData from './api.js';
import defaultValues from './defaultValues';
import editTag from './editTags';

const app = express();
let allQuestions;

app.use(express.static(path.join(__dirname, '../../resources')));
app.use(express.static(path.join(__dirname, '../../lib/client')));
app.use(express.json());

app.get(URL, async (req, res) => {

    const data = await getAPIData();

    allQuestions = data;
    res.status(200);
    await res.json(data);

});

app.post('/editTag', (request, response) => {
    const arrayDataToEdit = Object.values(request.body);

    for (const code in allQuestions) {
        if (allQuestions[code].question_id === '61687502')
            editTag(allQuestions[code], arrayDataToEdit);

    }
    response.status(200);
});

app.use(logErrors);

function logErrors (err, req, res, next) {
    debug.error(err.stack);
    next(err);
}


export class MyServer {
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
            debug.log(err);
            debug.log('Finished unsuccesfully');
            throw err;
        }
    }
}

if (require.main === module) {
    const newInstance = new MyServer(defaultValues.port);

    newInstance.startServer();
}


