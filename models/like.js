'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    userid: DataTypes.INTEGER,
    postid: DataTypes.INTEGER,
    like: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return like;
};