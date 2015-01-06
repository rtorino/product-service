'use strict';

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    id : {
      type         : DataTypes.UUID,
      primaryKey   : true,
      defaultValue : DataTypes.UUIDV4
    },

    name : {
      type      : DataTypes.STRING,
      allowNull : false
    },

    description : {
      type      : DataTypes.TEXT,
      allowNull : true
    }
  });

  return Product;
};
