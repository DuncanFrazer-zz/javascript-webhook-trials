const Jwt = require('jsonwebtoken');
const Config = require('../config');

let secret1 = Jwt.sign({}, Config.app_secret);

console.log(secret1);
