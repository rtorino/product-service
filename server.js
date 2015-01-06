'use strict';

if (!module.parent) {
  throw new Error('Do not run this file directly, instead run index.js');
}

var util   = require('util');
var Rabbit = require('wascally');
var env    = process.env.NODE_ENV || 'development';
var config = require('config/rabbitmq.json')[env];
var mixins = require('utils/mixins');

var start = function(done) {
  Rabbit.configure({ connection : config })
  .then(function() {

    mixins.bootstrap('controllers', '/**/*-handler.js', function(file) {
      require(file);
    });

    if (typeof done === 'function') {
      done();
    }
  })
  .then(null, function(err) {
    setImmediate(function() {
      throw err;
    });
  });
};

function exit() {
  console.log('');
  console.log('shutting down ...');
  Rabbit.closeAll().then(function() {
    process.exit();
  });
};

process.once('SIGINT', function() {
  exit();
});

process.on('unhandledException', function(err) {
  console.log(err);
});

module.exports.start = start;


