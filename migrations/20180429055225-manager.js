'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'manager',
            {
                mid: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                age: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                mname: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                bid: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false
                },
                cid: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    allowNull: false
                }
            }
        ).then(() => {
            return queryInterface.addConstraint(
                'manager', ['bid'], {
                    type: 'foreign key',
                    name: 'bid_fkey',
                    references: {
                        table: 'board_member',
                        field: 'bid'
                    },
                    onUpdate: 'cascade'
                }
            )
        }).then(() => {
            return queryInterface.addConstraint(
                'manager', ['cid'], {
                    type: 'foreign key',
                    name: 'cid_fkey',
                    references: {
                        table: 'club',
                        field: 'cid'
                    }
                }
            )
        })
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('manager', {cascade: true});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
