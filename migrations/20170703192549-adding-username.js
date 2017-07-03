'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("users", "username", {
      type: Sequelize.STRING,
      allowNull: false,
      // references: {
      //   model: "users",
      //   key: "id"
      // }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("users", "username");
  }
};
