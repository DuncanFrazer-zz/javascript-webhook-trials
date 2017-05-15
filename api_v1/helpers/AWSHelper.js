const awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
   keyPath: './awsKeys/cc484921b9-private.pem.key',
  certPath: './awsKeys/cc484921b9-certificate.pem.crt',
    caPath: './awsKeys/VeriSign-Class 3-Public-Primary-Certification-Authority-G5.pem',
  clientId: 'a28p4yj60z6xz.iot.us-west-2.amazonaws.com',
    region: "us-west-2" 
});

exports.doorOperate = function() {
        device.publish('sesameOperate', 'move');
};
