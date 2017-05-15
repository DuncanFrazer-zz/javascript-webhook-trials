const DSHelper = require('./../helpers/DSHelper');


/**
 * Execute "Door Counter Reset" command on object 13201/0.
 */
exports.doorOpenCounterReset = function (req, res) {
    DSHelper.resetDoorOpenedCounter(config.client_name)
        .then(() => {
            console.log('Successfull reset of "Door Open" counter');
            res.sendStatus(204);
        })
        .catch((error) => {
            console.error("Failed to reset 'Door Open' counter. %s", error);
            res.sendStatus(406);
        });
};


/**
 * Execute "Door Counter Reset" command on object 13201/1.
 */
exports.doorCloseCounterReset = function (req, res) {
    DSHelper.resetDoorClosedCounter(config.client_name)
        .then(() => {
            console.log('Successfull reset of "Door Closed" counter');
            res.sendStatus(204);
        })
        .catch((error) => {
            console.error("Failed to reset 'Door Closed' counter. %s", error);
            res.sendStatus(406);
        });
};