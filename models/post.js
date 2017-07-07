"use strict";
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define(
    "post",
    {
      post: DataTypes.TEXT
    },
    {}
  );

  // post.associate = function(models) {
  //   post.hasMany(models.like, { as: "like", foreignKey: "postid" });
  //   post.belongsTo(models.user, {as: "author", foreignKey: "authorid"});
  // };
  return post;
};