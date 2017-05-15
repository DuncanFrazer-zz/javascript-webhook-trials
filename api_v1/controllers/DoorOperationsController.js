/**
 * DoorOperationsController
 *
 * Contains logic used to manipulate door
 */

const config = require('../../config');
const DBConsts = require('../models/DBConsts');
const Utils = require('../helpers/Utils');
const DBHelper = require('./../helpers/DBHelper');
const AWSHelper = require('./../helpers/AWSHelper');
const Errors = require('../models/Errors/Errors');
const Ifttt = require('../helpers/Ifttt');
var locked = false;

exports.doorLock = function (req, res) {
    locked=true;
    console.info("Lock enabled");
    Ifttt.notifyLock();
    res.sendStatus(200);
};

exports.doorUnlock = function (req, res) {
    locked=false;
    console.info("Lock disabled");
    Ifttt.notifyUnlock();
    res.sendStatus(200);
};


exports.doorOperate = function (req, res) {
    console.log("Received Door Operate command.");
    if (config.lock_webhook && locked) {
            console.log("Sesame is locked, ignoring Door Operate command");
            res.sendStatus(406);
    }
    else {
        console.log("entering doorOperate body");
//        clearTimeout(timeout);

        DBHelper.insertOrUpdateConfig(DBConsts.lastDoorCommandKey, DBConsts.doorCommands.operate)
            .then(() => {
//                return DSHelper.doorOperate(config.client_name);
                AWSHelper.doorOperate();
            })
            .then( () => {
                return DBHelper.addNewAction(Date.now(), DBConsts.statActions.operate);
            }, (err) => {
                console.error('Failed to perform "Door Operate" operation. %s', err);
                res.sendStatus(406);
            })
            .then(() => {
                console.log('Successfully performed "Door Operate" operation');
                res.sendStatus(204);
            })
            .catch((error) => {
                console.error('Failed to perform "Door Operate" operation. %s', error);
                res.sendStatus(500);
            });
    }
};

