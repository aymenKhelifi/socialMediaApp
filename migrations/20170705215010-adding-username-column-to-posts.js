'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("posts", "username", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("posts", "username");
  }
};