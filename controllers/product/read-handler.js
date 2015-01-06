'use strict';

var Product   = require('../../models').Product;
var Responder = require('../../responders/product-responder');

var responder = Responder({
  'messageType' : 'req-res.api.v1.products.read'
}); 

responder.handle(function(message, respond) {
  var options = {
    limit      : 20,
    attributes : ['id', 'name', 'description']
  };

  Product
    .findAll(options)
    .then(function(users) {
      respond(users);
    })
    .catch(function(err) {
      respond(err);
    });
});

module.exports = responder;
