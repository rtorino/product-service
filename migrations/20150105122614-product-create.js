'use strict';

module.exports = {
  up : function(migration, DataTypes, done) {
    migration
      .createTable( 'Products', {
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
        },

        createdAt : DataTypes.DATE,
        updatedAt : DataTypes.DATE,
        deletedAt : DataTypes.DATE
      })
      .complete(done);
  },

  down : function(migration, DataTypes, done) {
    migration
      .dropTable( 'Products' )
      .complete( done );
  }
};
