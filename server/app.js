const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./api/routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use((req, res, next) => {
    let err = new Error('Not found');

    err.status = 404;

    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
        }
    });
});

module.exports = app;