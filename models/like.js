"use strict";
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define(
    "like",
    {
      userid: DataTypes.INTEGER,
      postid: DataTypes.INTEGER,
      like: DataTypes.INTEGER
    },
    {}
  );

  // like.associate = function(models) {
  //   like.belongsTo(models.post, { as: "likes", foreignKey: "postid" });
  // };
  return like;
};
