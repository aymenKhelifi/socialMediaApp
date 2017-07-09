"use strict";
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define("post", {
    post: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  post.associate = function(models) {
    post.hasMany(models.like, { as: "likes", foreignKey: "postid" });
    post.belongsTo(models.user, { as: "author", foreignKey: "authorId" });
  };
  return post;
};
