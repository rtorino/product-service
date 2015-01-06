'use strict';

var util   = require('util');
var Rabbus = require('rabbus');
var Rabbit = require('wascally');

var ProductResponder = function(options) {
  Rabbus.Responder.call(this, Rabbit, {
    exchange    : 'req-res.product-exchange',
    queue       : 'req-res.product-queue',
    messageType : options.messageType,
    limit       : 1
  });  
};

util.inherits(ProductResponder, Rabbus.Responder);

module.exports = function(options) {
  return new ProductResponder(options);
};

