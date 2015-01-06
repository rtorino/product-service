'use strict';

var Product   = require('../../models').Product;
var Responder = require('../../responders/product-responder');

var responder = Responder({
  'messageType' : 'req-res.api.v1.products.create'
});

responder.handle(function(message, respond) {
  Product.create(message)
    .then(function(product) {
      respond(product)
    })
    .catch(function(error) {
      respond(error);
    });
});

module.exports = responder;
