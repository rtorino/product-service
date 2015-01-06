'use strict';

var path = require('path');
var glob = require('glob');
var cwd  = process.cwd();

module.exports = {
  bootstrap : function(folder, regex, cb) {
    try {
      var files = glob.sync(path.join(cwd, folder) + regex);

      files.forEach(function(file) {
        cb(file);
      });
    } catch (err) {
      throw err;
    } 
  }
};
