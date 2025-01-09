const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get('/ping', (req, res) => {
    res.json({
        message: 'server is running'
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

