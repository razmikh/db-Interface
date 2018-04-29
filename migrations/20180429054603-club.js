'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'club',
            {
                cid: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                age: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                team: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                city: {
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

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('club', {cascade:true});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
