const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use('/api', apiRouter);



app.get('/ping', (req, res) => {
    res.json({
        message: 'server is running'
    });
});


//last middleware function
app.use(errorHandler);

app.listen(PORT, async () => {

    console.log(`server is running on port ${PORT}`);
    await connectToDB();
    console.log('connected to db');
}
);

