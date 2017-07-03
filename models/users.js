"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.TEXT
    },
    {}
  );

  users.associate = function(models){
    users.hasMany(models.post, {as: "post", foreignKey: "postid"});
  }

  return users;
};
