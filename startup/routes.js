const express = require('express');
const indexRoute = require('../routes/index');
const dataRoute = require('../routes/data');

module.exports = function(app) {
    app.use(express.json());

    app.use('/', indexRoute);
    app.use('/data', dataRoute);
};