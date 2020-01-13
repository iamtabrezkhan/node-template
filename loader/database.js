const dbConfig = require('../config/database');
const mongoose  = require('mongoose');
const logger = require('../common/logger');;

module.exports = {

    connect: () => {
        logger.msg(`connecting database to: ${dbConfig.uri}`)
        mongoose.connect(dbConfig.uri, {useNewUrlParser: true, useUnifiedTopology: false})
        .then(() => {
            logger.msg(`Database connected at ${dbConfig.uri}`)
        })
        .catch(err => {
            throw err;
        })
    }

}