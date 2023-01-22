'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routers/api');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json({
    parameterLimit: 100000,
    limit: '50mb',
    extended: false,
}))



app.use('', routes)

//exportar
module.exports = app;