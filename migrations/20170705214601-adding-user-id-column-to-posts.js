'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("posts", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("posts", "userId");
  }
};
