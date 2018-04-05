    const express = require('express');
    const bodyParser = require('body-parser');
    const Pusher = require('pusher');

    const pusherConfig = require('./pusher.json'); // (1)
    const pusherClient = new Pusher(pusherConfig);
    const PORT = (process.env.PORT || 4000);

    const app = express(); // (2)
    app.use(bodyParser.json());

    app.put('/users/:name', function(req, res) { // (3)
        console.log('User joined: ' + req.params.name);
        pusherClient.trigger('chat_channel', 'join', {
            name: req.params.name
        });
        res.sendStatus(204);
    });


    app.post('/users/:name/messages', function(req, res) { // (5)
        console.log('User ' + req.params.name + ' sent message: ' + req.body.message);
        pusherClient.trigger('chat_channel', 'message', {
            name: req.params.name,
            message: req.body.message
        });
        res.sendStatus(204);
    });

    app.listen(PORT, function() { // (6)
        console.log('App listening on port '+PORT);
    });