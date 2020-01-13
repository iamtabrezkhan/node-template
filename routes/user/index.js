const express = require('express');
const router = express.Router();
const {  } = require('./controller');

module.exports = function(app) {
    
    router.get('/', (req, res, next) => {
        res.send('User API');
    })

    return router;

}