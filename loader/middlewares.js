const express = require('express');
const cors = require('cors');
const logger = require('../common/logger');
const dbConfig = require('../config/database');

module.exports = function(app) {
    logger.msg('loading middlewares...');
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

}