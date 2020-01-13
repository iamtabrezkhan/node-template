exports.init = function(app, port) {

    const logger = require('../common/logger');
    // ============ loading middlewares and routes ==============
    require('../loader/middlewares')(app);
    require('../loader/routes')(app);
    // ==========================================================
    app.listen(port, () => {
        logger.msg(`Server started at port: ${port}`);
    });

}