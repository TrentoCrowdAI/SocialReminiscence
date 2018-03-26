    const express = require('express');
    const bodyParser = require('body-parser');
    const Pusher = require('pusher');

    const pusherConfig = require('./pusher.json'); // (1)
    const pusherClient = new Pusher(pusherConfig);
    const PORT = (process.env.PORT || 4000);

    const app = express(); // (2)
    app.use(bodyParser.json());

    app.post('/messages', function(req, res) { // (5)
        console.log('Sent message: ' + req.body.message);
        pusherClient.trigger('chat_channel', 'message', {
            "message": req.body.message
        });
        res.sendStatus(204);
    });

    app.listen(PORT, function() { // (6)
        console.log('App listening on port '+PORT);
    });