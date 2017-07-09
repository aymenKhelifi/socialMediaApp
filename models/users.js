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
    users.hasMany(models.post, {as: "posts", foreignKey: "authorId"});
    users.hasMany(models.like, {as: "likes", foreignKey: "userid"})
  }

  return users;
};
