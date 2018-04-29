'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'board_member',
        {
            bid: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            bname: {
                type: Sequelize.STRING(50),
                allowNull: false
            }
        }
    )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    },

    down:(queryInterface, Sequelize) =>{
        return queryInterface.dropTable('board_member');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    }
};
