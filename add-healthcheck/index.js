const express = require('express');

const app = express();

app.get(`/`, (req, res) => {
    res.send('Home Page');
});

app.get(`/health`, (req, res) => {
    try {

        res.send({
            message: 'OK',
            timestamp: Date.now(),
        });
    } catch (e) {
        res.status(503).send({
            message: e,
        });
    }
});

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT,() => {
    console.log(`Server started at :${SERVER_PORT}`);
});
