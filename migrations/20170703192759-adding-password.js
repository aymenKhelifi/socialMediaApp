'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("users", "password", {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("users", "password");
  }
};
