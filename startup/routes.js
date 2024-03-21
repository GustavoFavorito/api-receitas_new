const express = require('express');
const cors = require('cors');
const indexRoute = require('../routes/index');
const dataRoute = require('../routes/receita');

module.exports = function(app) {
    app.use(express.json());
    app.use(cors());

    app.use('/', indexRoute);
    app.use('/receita', dataRoute);
};